// Deterministic power / sample-size math — no LLM, no network.
// Mean / proportion / correlation designs use the normal (large-sample)
// approximation; ANOVA, chi-square and regression use exact central +
// noncentral F / chi-square distributions from ./dist.
//
// Everything is expressed in terms of TOTAL sample size N so the power curve,
// the sensitivity table and the solver all share one code path.

import { chi2Inv, fInv, ncChi2CDF, ncFCDF } from "./dist";

export type TestKind =
  | "general"
  | "twoMeans"
  | "oneMean"
  | "pairedMeans"
  | "twoProportions"
  | "oneProportion"
  | "correlation"
  | "anova"
  | "chiSquare"
  | "regression";
export type Tails = 1 | 2;

export interface Effect {
  d?: number; // twoMeans / oneMean
  dz?: number; // pairedMeans
  r?: number; // correlation
  p1?: number; // proportions
  p2?: number; // twoProportions
  p0?: number; // oneProportion (reference)
  f?: number; // anova (Cohen's f)
  k?: number; // anova groups
  w?: number; // chi-square (Cohen's w)
  df?: number; // chi-square df
  f2?: number; // regression (Cohen's f²)
  u?: number; // regression tested predictors
  sigma?: number; // general (common SD)
  delta?: number; // general (difference between extreme group means)
}

// General raw-input design → Cohen's f, assuming the k group means are evenly
// spread across a range Δ with common SD σ. Reduces to d = Δ/σ (f = d/2) at
// k = 2, i.e. the two-sample t-test / one-way ANOVA equivalence.
function generalF(eff: Effect): { k: number; f: number } {
  const k = Math.max(2, Math.round(eff.k ?? 2));
  const sigma = eff.sigma ?? 0;
  const delta = eff.delta ?? 0;
  if (sigma <= 0) return { k, f: 0 };
  const f =
    Math.abs(delta / sigma) * Math.sqrt((k + 1) / (12 * (k - 1)));
  return { k, f };
}

export interface Params {
  alpha: number;
  tails: Tails;
  ratio: number; // allocation n2/n1 (two-group designs)
}

export const POWER_TARGETS = [0.8, 0.9, 0.95] as const;

// ---------------------------------------------------------------------------
// Normal helpers
// ---------------------------------------------------------------------------

function erf(x: number): number {
  const t = 1 / (1 + 0.3275911 * Math.abs(x));
  const y =
    1 -
    ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t -
      0.284496736) *
      t +
      0.254829592) *
      t *
      Math.exp(-x * x);
  return x >= 0 ? y : -y;
}

export function pnorm(z: number): number {
  return 0.5 * (1 + erf(z / Math.SQRT2));
}

export function qnorm(p: number): number {
  if (p <= 0) return -Infinity;
  if (p >= 1) return Infinity;
  const a = [
    -39.6968302866538, 220.946098424521, -275.928510446969,
    138.357751867269, -30.6647980661472, 2.50662827745924,
  ];
  const b = [
    -54.4760987982241, 161.585836858041, -155.698979859887,
    66.8013118877197, -13.2806815528857,
  ];
  const c = [
    -0.00778489400243029, -0.322396458041136, -2.40075827716184,
    -2.54973253934373, 4.37466414146497, 2.93816398269878,
  ];
  const d = [
    0.00778469570904146, 0.32246712907004, 2.445134137143, 3.75440866190742,
  ];
  const pLow = 0.02425;
  const pHigh = 1 - pLow;
  let q: number;
  let r: number;
  if (p < pLow) {
    q = Math.sqrt(-2 * Math.log(p));
    return (
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }
  if (p <= pHigh) {
    q = p - 0.5;
    r = q * q;
    return (
      ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) *
        q) /
      (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1)
    );
  }
  q = Math.sqrt(-2 * Math.log(1 - p));
  return -(
    (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
    ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
  );
}

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

function zAlpha(p: Params): number {
  return qnorm(1 - p.alpha / p.tails);
}

function powerNormal(lambda: number, p: Params): number {
  const za = zAlpha(p);
  const up = pnorm(Math.abs(lambda) - za);
  const lo = p.tails === 2 ? pnorm(-Math.abs(lambda) - za) : 0;
  return clamp01(up + lo);
}

// ---------------------------------------------------------------------------
// Design metadata
// ---------------------------------------------------------------------------

export function usesTails(test: TestKind): boolean {
  return (
    test !== "general" &&
    test !== "anova" &&
    test !== "chiSquare" &&
    test !== "regression"
  );
}
export function usesRatio(test: TestKind): boolean {
  return test === "twoMeans" || test === "twoProportions";
}
export type GroupKind = "two" | "anova" | "regression" | "single";
export function groupKind(test: TestKind): GroupKind {
  if (test === "twoMeans" || test === "twoProportions") return "two";
  if (test === "anova" || test === "general") return "anova";
  if (test === "regression") return "regression";
  return "single";
}

function minN(test: TestKind, eff: Effect, p: Params): number {
  switch (groupKind(test)) {
    case "two":
      return Math.max(4, Math.ceil(2 * (1 + p.ratio)));
    case "anova":
      return Math.max(3, Math.round(eff.k ?? 2) + 1);
    case "regression":
      return Math.max(3, Math.round(eff.u ?? 1) + 2);
    default:
      return test === "correlation" ? 5 : 2;
  }
}

// ---------------------------------------------------------------------------
// Power at a given TOTAL N
// ---------------------------------------------------------------------------

export function powerAtTotal(
  test: TestKind,
  N: number,
  eff: Effect,
  p: Params
): number {
  if (N <= 0) return 0;

  switch (test) {
    case "general": {
      const { k, f } = generalF(eff);
      const d1 = k - 1;
      const d2 = N - k;
      if (d2 < 1) return 0;
      const Fc = fInv(1 - p.alpha, d1, d2);
      return clamp01(1 - ncFCDF(Fc, d1, d2, f ** 2 * N));
    }
    case "twoMeans": {
      const n1 = N / (1 + p.ratio);
      const n2 = p.ratio * n1;
      if (n1 <= 0 || n2 <= 0) return 0;
      const se = Math.sqrt(1 / n1 + 1 / n2);
      return powerNormal((eff.d ?? 0) / se, p);
    }
    case "oneMean":
      return powerNormal((eff.d ?? 0) * Math.sqrt(N), p);
    case "pairedMeans":
      return powerNormal((eff.dz ?? 0) * Math.sqrt(N), p);
    case "correlation": {
      if (N <= 3) return 0;
      const zr = Math.atanh(Math.min(0.9999, Math.abs(eff.r ?? 0)));
      return powerNormal(zr * Math.sqrt(N - 3), p);
    }
    case "twoProportions": {
      const p1 = eff.p1 ?? 0;
      const p2 = eff.p2 ?? 0;
      const k = p.ratio;
      const diff = Math.abs(p1 - p2);
      if (diff === 0) return 0;
      const n1 = N / (1 + k);
      const pbar = (p1 + k * p2) / (1 + k);
      const seN = Math.sqrt((1 + 1 / k) * pbar * (1 - pbar));
      const seA = Math.sqrt(p1 * (1 - p1) + (p2 * (1 - p2)) / k);
      const za = zAlpha(p);
      const z = (diff * Math.sqrt(n1) - za * seN) / seA;
      const lo =
        p.tails === 2
          ? pnorm((-diff * Math.sqrt(n1) - za * seN) / seA)
          : 0;
      return clamp01(pnorm(z) + lo);
    }
    case "oneProportion": {
      const p0 = eff.p0 ?? 0;
      const p1 = eff.p1 ?? 0;
      const diff = Math.abs(p1 - p0);
      if (diff === 0) return 0;
      const za = zAlpha(p);
      const seN = Math.sqrt(p0 * (1 - p0));
      const seA = Math.sqrt(p1 * (1 - p1));
      const z = (diff * Math.sqrt(N) - za * seN) / seA;
      const lo =
        p.tails === 2 ? pnorm((-diff * Math.sqrt(N) - za * seN) / seA) : 0;
      return clamp01(pnorm(z) + lo);
    }
    case "anova": {
      const k = Math.max(2, Math.round(eff.k ?? 2));
      const d1 = k - 1;
      const d2 = N - k;
      if (d2 < 1) return 0;
      const Fc = fInv(1 - p.alpha, d1, d2);
      return clamp01(1 - ncFCDF(Fc, d1, d2, (eff.f ?? 0) ** 2 * N));
    }
    case "chiSquare": {
      const df = Math.max(1, Math.round(eff.df ?? 1));
      const c = chi2Inv(1 - p.alpha, df);
      return clamp01(1 - ncChi2CDF(c, df, (eff.w ?? 0) ** 2 * N));
    }
    case "regression": {
      const u = Math.max(1, Math.round(eff.u ?? 1));
      const d1 = u;
      const d2 = N - u - 1;
      if (d2 < 1) return 0;
      const Fc = fInv(1 - p.alpha, d1, d2);
      return clamp01(1 - ncFCDF(Fc, d1, d2, (eff.f2 ?? 0) * N));
    }
  }
}

// ---------------------------------------------------------------------------
// Solve total N for a target power (monotone → binary search, universal)
// ---------------------------------------------------------------------------

export function solveTotalN(
  test: TestKind,
  target: number,
  eff: Effect,
  p: Params
): number | null {
  if (target <= 0 || target >= 1) return null;
  const nmin = minN(test, eff, p);
  if (powerAtTotal(test, nmin, eff, p) >= target) return nmin;

  let hi = Math.max(nmin, 2);
  let guard = 0;
  while (powerAtTotal(test, hi, eff, p) < target) {
    hi *= 2;
    if (hi > 2e7 || ++guard > 60) return null;
  }
  let lo = nmin;
  while (hi - lo > 1) {
    const mid = Math.floor((lo + hi) / 2);
    if (powerAtTotal(test, mid, eff, p) >= target) hi = mid;
    else lo = mid;
  }
  return hi;
}

// ---------------------------------------------------------------------------
// Sample-size result with group breakdown
// ---------------------------------------------------------------------------

export interface SizeResult {
  total: number;
  achievedPower: number;
  n1?: number;
  n2?: number;
  perGroup?: number;
  groups?: number;
}

export function sampleSize(
  test: TestKind,
  targetPower: number,
  eff: Effect,
  p: Params
): SizeResult | null {
  if (!isValid(test, eff, p)) return null;
  const N = solveTotalN(test, targetPower, eff, p);
  if (N == null) return null;

  const kind = groupKind(test);
  if (kind === "two") {
    const n1 = Math.ceil(N / (1 + p.ratio));
    const n2 = Math.ceil(p.ratio * n1);
    const total = n1 + n2;
    return { total, n1, n2, achievedPower: powerAtTotal(test, total, eff, p) };
  }
  if (kind === "anova") {
    const k = Math.max(2, Math.round(eff.k ?? 2));
    const perGroup = Math.ceil(N / k);
    const total = perGroup * k;
    return {
      total,
      perGroup,
      groups: k,
      achievedPower: powerAtTotal(test, total, eff, p),
    };
  }
  return { total: N, achievedPower: powerAtTotal(test, N, eff, p) };
}

// Convert a per-group / single-sample input (power mode) into a total N.
export function totalFromInput(
  test: TestKind,
  nInput: number,
  eff: Effect,
  p: Params
): { total: number; n1?: number; n2?: number; perGroup?: number; groups?: number } {
  const n = Math.max(1, Math.round(nInput));
  const kind = groupKind(test);
  if (kind === "two") {
    const n2 = Math.max(1, Math.ceil(p.ratio * n));
    return { total: n + n2, n1: n, n2 };
  }
  if (kind === "anova") {
    const k = Math.max(2, Math.round(eff.k ?? 2));
    return { total: n * k, perGroup: n, groups: k };
  }
  return { total: n };
}

// ---------------------------------------------------------------------------
// Validity
// ---------------------------------------------------------------------------

export function isValid(test: TestKind, eff: Effect, p: Params): boolean {
  if (!(p.alpha > 0 && p.alpha < 1)) return false;
  const fin = (x?: number) => Number.isFinite(x);
  switch (test) {
    case "general":
      return (
        fin(eff.sigma) &&
        (eff.sigma ?? 0) > 0 &&
        fin(eff.delta) &&
        Math.abs(eff.delta ?? 0) > 0 &&
        Math.round(eff.k ?? 0) >= 2
      );
    case "twoMeans":
    case "oneMean":
      return fin(eff.d) && Math.abs(eff.d ?? 0) > 0;
    case "pairedMeans":
      return fin(eff.dz) && Math.abs(eff.dz ?? 0) > 0;
    case "correlation":
      return fin(eff.r) && Math.abs(eff.r ?? 0) > 0 && Math.abs(eff.r ?? 0) < 1;
    case "twoProportions": {
      const a = eff.p1 ?? NaN;
      const b = eff.p2 ?? NaN;
      return fin(a) && fin(b) && a > 0 && a < 1 && b > 0 && b < 1 && a !== b;
    }
    case "oneProportion": {
      const a = eff.p1 ?? NaN;
      const b = eff.p0 ?? NaN;
      return fin(a) && fin(b) && a > 0 && a < 1 && b > 0 && b < 1 && a !== b;
    }
    case "anova":
      return (
        fin(eff.f) &&
        (eff.f ?? 0) > 0 &&
        Math.round(eff.k ?? 0) >= 2
      );
    case "chiSquare":
      return fin(eff.w) && (eff.w ?? 0) > 0 && Math.round(eff.df ?? 0) >= 1;
    case "regression":
      return fin(eff.f2) && (eff.f2 ?? 0) > 0 && Math.round(eff.u ?? 0) >= 1;
  }
}

// ---------------------------------------------------------------------------
// Power curve (power vs total N)
// ---------------------------------------------------------------------------

export interface CurvePoint {
  total: number;
  power: number;
}

export function powerCurve(
  test: TestKind,
  eff: Effect,
  p: Params,
  targetTotal: number,
  points = 64
): CurvePoint[] {
  const high = solveTotalN(test, 0.99, eff, p);
  const maxTotal = Math.max(
    Math.ceil(targetTotal * 1.4),
    high ?? targetTotal * 2
  );
  const lo = minN(test, eff, p);
  const out: CurvePoint[] = [];
  for (let i = 0; i < points; i++) {
    const total = lo + ((maxTotal - lo) * i) / (points - 1);
    out.push({ total, power: powerAtTotal(test, total, eff, p) });
  }
  return out;
}

// ---------------------------------------------------------------------------
// α / β diagram geometry — a normal-scale schematic consistent with the
// computed power: H0 ~ N(0,1), H1 ~ N(λ,1), critical value at zc, where the
// shaded power area equals the computed power.
// ---------------------------------------------------------------------------

export function diagram(
  test: TestKind,
  power: number,
  p: Params
): { lambda: number; zc: number; tails: number } {
  const tails = usesTails(test) ? p.tails : 1;
  const zc = qnorm(1 - p.alpha / tails);
  const pw = Math.min(0.9999, Math.max(0.0001, power));
  return { lambda: zc + qnorm(pw), zc, tails };
}

// ---------------------------------------------------------------------------
// Sensitivity scenarios (effect grid incl. the user's own input)
// ---------------------------------------------------------------------------

export interface EffectScenario {
  label: string;
  eff: Effect;
  isInput?: boolean;
}

function magnitudeGrid(
  input: Effect,
  key: keyof Effect,
  base: number[],
  label: (v: number) => string,
  lo = 0,
  hi = Infinity
): EffectScenario[] {
  const val = Math.abs((input[key] as number) ?? 0);
  const grid = [...base];
  if (val > lo && val < hi) grid.push(val);
  const uniq = Array.from(new Set(grid.map((g) => +g.toFixed(3)))).sort(
    (a, b) => a - b
  );
  return uniq.map((g) => ({
    label: label(g),
    eff: { ...input, [key]: g },
    isInput: Math.abs(g - val) < 1e-6,
  }));
}

export function effectScenarios(
  test: TestKind,
  input: Effect
): EffectScenario[] {
  const clamp = (x: number) => Math.min(0.999, Math.max(0.001, x));
  switch (test) {
    case "general": {
      // Vary the assumed difference Δ around the input (σ, k fixed).
      const base = Math.abs(input.delta ?? 0);
      const grid = [0.5, 0.75, 1, 1.5, 2]
        .map((m) => +(base * m).toFixed(3))
        .filter((v) => v > 0);
      const uniq = Array.from(new Set(grid)).sort((a, b) => a - b);
      return uniq.map((v) => ({
        label: `Δ = ${v}`,
        eff: { ...input, delta: v },
        isInput: Math.abs(v - base) < 1e-6,
      }));
    }
    case "twoMeans":
    case "oneMean":
      return magnitudeGrid(input, "d", [0.2, 0.3, 0.5, 0.8], (v) => `d = ${v}`);
    case "pairedMeans":
      return magnitudeGrid(input, "dz", [0.2, 0.3, 0.5, 0.8], (v) => `dz = ${v}`);
    case "correlation":
      return magnitudeGrid(input, "r", [0.1, 0.2, 0.3, 0.5], (v) => `r = ${v}`, 0, 1);
    case "anova":
      return magnitudeGrid(input, "f", [0.1, 0.25, 0.4], (v) => `f = ${v}`);
    case "chiSquare":
      return magnitudeGrid(input, "w", [0.1, 0.3, 0.5], (v) => `w = ${v}`);
    case "regression":
      return magnitudeGrid(input, "f2", [0.02, 0.15, 0.35], (v) => `f² = ${v}`);
    case "twoProportions": {
      const p1 = input.p1 ?? 0;
      const p2in = input.p2 ?? 0;
      const seen = new Set<number>();
      const scen: EffectScenario[] = [];
      for (const o of [-0.1, -0.05, 0, 0.05, 0.1]) {
        const p2 = +clamp(p2in + o).toFixed(3);
        if (p2 === p1 || seen.has(p2)) continue;
        seen.add(p2);
        scen.push({
          label: `p₂ = ${p2}`,
          eff: { ...input, p2 },
          isInput: Math.abs(p2 - p2in) < 1e-6,
        });
      }
      return scen.sort((a, b) => (a.eff.p2 ?? 0) - (b.eff.p2 ?? 0));
    }
    case "oneProportion": {
      const p0 = input.p0 ?? 0;
      const p1in = input.p1 ?? 0;
      const seen = new Set<number>();
      const scen: EffectScenario[] = [];
      for (const o of [-0.1, -0.05, 0, 0.05, 0.1]) {
        const p1 = +clamp(p1in + o).toFixed(3);
        if (p1 === p0 || seen.has(p1)) continue;
        seen.add(p1);
        scen.push({
          label: `p₁ = ${p1}`,
          eff: { ...input, p1 },
          isInput: Math.abs(p1 - p1in) < 1e-6,
        });
      }
      return scen.sort((a, b) => (a.eff.p1 ?? 0) - (b.eff.p1 ?? 0));
    }
  }
}
