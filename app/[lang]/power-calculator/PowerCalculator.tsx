"use client";

import { useMemo, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import {
  type TestKind,
  type Tails,
  type Effect,
  type Params,
  usesTails,
  usesRatio,
  groupKind,
  powerAtTotal,
  sampleSize,
  totalFromInput,
  isValid,
  powerCurve,
  diagram,
  effectScenarios,
  POWER_TARGETS,
} from "./stats";
import { exportSvgToPng, pageBackground } from "./exportPng";

type Lang = "en" | "tr";
type Mode = "size" | "power";

// text-base (16px) on mobile prevents iOS Safari from auto-zooming on focus;
// sm:text-sm keeps the original 14px sizing on larger screens.
const fieldClass =
  "w-full px-3 py-2.5 bg-background border border-border rounded-lg font-sans text-base sm:text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors";

const num = (s: string) => {
  const v = parseFloat(s.replace(",", "."));
  return Number.isFinite(v) ? v : NaN;
};
const pct = (x: number) => `${(x * 100).toFixed(1)}%`;

const TEST_KEYS: TestKind[] = [
  "general",
  "twoMeans",
  "pairedMeans",
  "oneMean",
  "twoProportions",
  "oneProportion",
  "correlation",
  "anova",
  "chiSquare",
  "regression",
];

const COPY = {
  tr: {
    tests: {
      general: "Genel (SD + grup sayısı)",
      twoMeans: "İki bağımsız grup (ortalama)",
      pairedMeans: "Eşleştirilmiş (öncesi–sonrası)",
      oneMean: "Tek örneklem (ortalama)",
      twoProportions: "İki bağımsız oran (%)",
      oneProportion: "Tek oran (%)",
      correlation: "Korelasyon (r)",
      anova: "Tek yönlü ANOVA (k grup)",
      chiSquare: "Ki-kare (uyum/bağımsızlık)",
      regression: "Çoklu regresyon (R²/f²)",
    } as Record<TestKind, string>,
    short: {
      general: "genel karşılaştırma (t/ANOVA)",
      twoMeans: "bağımsız iki grup t-testi",
      pairedMeans: "eşleştirilmiş t-testi",
      oneMean: "tek örneklem t-testi",
      twoProportions: "iki oran z-testi",
      oneProportion: "tek oran z-testi",
      correlation: "korelasyon testi",
      anova: "tek yönlü ANOVA",
      chiSquare: "ki-kare testi",
      regression: "çoklu regresyon F-testi",
    } as Record<TestKind, string>,
    modeSize: "Örneklem büyüklüğü",
    modePower: "İstatistiksel güç",
    modeSizeHint: "Hedef gücü verin → gereken örneklemi hesaplayalım.",
    modePowerHint: "Örneklemi verin → ulaşacağınız gücü hesaplayalım.",
    sd: "Ortak standart sapma (SD)",
    delta: "Gruplar arası beklenen fark (Δ)",
    generalHint: "Test seçmeden; sadece SD, gruplar arası fark ve grup sayısıyla. 2 grup için t-testine, 3+ için ANOVA'ya denk gelir.",
    d: "Cohen's d",
    dz: "Cohen's dz",
    r: "Beklenen r",
    p1: "Grup 1 oranı (p₁)",
    p2: "Grup 2 oranı (p₂)",
    p1alt: "Beklenen oran (p₁)",
    p0: "Referans oran (p₀)",
    f: "Cohen's f",
    k: "Grup sayısı (k)",
    w: "Cohen's w",
    df: "Serbestlik derecesi (df)",
    f2: "Cohen's f²",
    u: "Test edilen yordayıcı (u)",
    small: "Küçük",
    medium: "Orta",
    large: "Büyük",
    targetPower: "Hedef güç",
    nPerGroup: "Grup başına örneklem (n)",
    nSingle: "Örneklem (n)",
    alpha: "Anlamlılık (α)",
    tails: "Yön",
    twoSided: "çift yönlü",
    oneSided: "tek yönlü",
    ratio: "Tahsis oranı (n₂/n₁)",
    resultSizeTitle: "Gereken örneklem",
    resultPowerTitle: "Ulaşılan güç",
    total: "toplam",
    group1: "Grup 1",
    group2: "Grup 2",
    perGroupWord: "grup başına",
    groupsWord: "grup",
    achieved: "Bu örneklemin sağladığı güç",
    invalid: "Geçerli değerler girin (etki büyüklüğü 0'dan farklı, oranlar 0–1 arası, p₁ ≠ p₂).",
    interpretation: "Yorum",
    curveTitle: "Güç eğrisi",
    curveSubtitle: "Örneklem büyüdükçe gücün nasıl arttığı — noktalı çizgiler %80 gücü ve sizin senaryonuzu gösterir.",
    xAxis: "Toplam örneklem (N)",
    diagramTitle: "Tip I (α) ve Tip II (β) hata",
    diagramSubtitle: "H₀ (etki yok) ve H₁ (beklenen etki) dağılımları. Kritik değerin ötesi Tip I hata (α), H₁'in altında kalan bölge Tip II hata (β); güç = 1 − β.",
    legendAlpha: "α — Tip I hata",
    legendBeta: "β — Tip II hata",
    legendPower: "Güç (1 − β)",
    h0: "H₀",
    h1: "H₁",
    download: "PNG indir",
    tableTitle: "Duyarlılık: farklı varsayımlar için gereken toplam N",
    tableSubtitle: "Etki büyüklüğünden emin değilseniz, komşu senaryolar için de gereken örneklemi görün. Satırınız vurgulanmıştır.",
    scenario: "Senaryo",
    ctaTitle: "Yayına hazır, gerekçeli bir rapor mu lazım?",
    ctaText: "Etik kurul ve tez için doğru testi ve varsayımları biz seçip gerekçeli örneklem raporunuzu hazırlayalım.",
    ctaButton: "Analizi bize bırakın",
    note: "Ortalama, oran ve korelasyon testleri büyük örneklem (normal) yaklaşımını; ANOVA, ki-kare ve regresyon ise tam merkezî/merkezî-olmayan F ve χ² dağılımlarını kullanır. Küçük örneklem veya karmaşık tasarımlar için gerekçeli raporu biz hazırlarız.",
  },
  en: {
    tests: {
      general: "General (SD + group count)",
      twoMeans: "Two independent groups (means)",
      pairedMeans: "Paired (before–after)",
      oneMean: "One sample (mean)",
      twoProportions: "Two independent proportions (%)",
      oneProportion: "One proportion (%)",
      correlation: "Correlation (r)",
      anova: "One-way ANOVA (k groups)",
      chiSquare: "Chi-square (fit/independence)",
      regression: "Multiple regression (R²/f²)",
    } as Record<TestKind, string>,
    short: {
      general: "general comparison (t/ANOVA)",
      twoMeans: "independent two-sample t-test",
      pairedMeans: "paired t-test",
      oneMean: "one-sample t-test",
      twoProportions: "two-proportion z-test",
      oneProportion: "one-proportion z-test",
      correlation: "correlation test",
      anova: "one-way ANOVA",
      chiSquare: "chi-square test",
      regression: "multiple regression F-test",
    } as Record<TestKind, string>,
    modeSize: "Sample size",
    modePower: "Statistical power",
    modeSizeHint: "Give a target power → we compute the sample size needed.",
    modePowerHint: "Give a sample size → we compute the power you'll reach.",
    sd: "Common standard deviation (SD)",
    delta: "Expected difference between groups (Δ)",
    generalHint: "No test to pick — just SD, the difference between groups and the group count. Equals a t-test for 2 groups, ANOVA for 3+.",
    d: "Cohen's d",
    dz: "Cohen's dz",
    r: "Expected r",
    p1: "Group 1 rate (p₁)",
    p2: "Group 2 rate (p₂)",
    p1alt: "Expected rate (p₁)",
    p0: "Reference rate (p₀)",
    f: "Cohen's f",
    k: "Number of groups (k)",
    w: "Cohen's w",
    df: "Degrees of freedom (df)",
    f2: "Cohen's f²",
    u: "Tested predictors (u)",
    small: "Small",
    medium: "Medium",
    large: "Large",
    targetPower: "Target power",
    nPerGroup: "Sample per group (n)",
    nSingle: "Sample (n)",
    alpha: "Significance (α)",
    tails: "Sides",
    twoSided: "two-sided",
    oneSided: "one-sided",
    ratio: "Allocation ratio (n₂/n₁)",
    resultSizeTitle: "Required sample",
    resultPowerTitle: "Achieved power",
    total: "total",
    group1: "Group 1",
    group2: "Group 2",
    perGroupWord: "per group",
    groupsWord: "groups",
    achieved: "Power delivered by this sample",
    invalid: "Enter valid values (effect size ≠ 0, rates within 0–1, p₁ ≠ p₂).",
    interpretation: "Interpretation",
    curveTitle: "Power curve",
    curveSubtitle: "How power rises as the sample grows — dashed lines mark 80% power and your scenario.",
    xAxis: "Total sample (N)",
    diagramTitle: "Type I (α) and Type II (β) error",
    diagramSubtitle: "Distributions under H₀ (no effect) and H₁ (expected effect). Beyond the critical value is Type I error (α); the region of H₁ below it is Type II error (β); power = 1 − β.",
    legendAlpha: "α — Type I error",
    legendBeta: "β — Type II error",
    legendPower: "Power (1 − β)",
    h0: "H₀",
    h1: "H₁",
    download: "Download PNG",
    tableTitle: "Sensitivity: total N needed under different assumptions",
    tableSubtitle: "Unsure about the effect size? See the sample needed for neighbouring scenarios too. Your row is highlighted.",
    scenario: "Scenario",
    ctaTitle: "Need a publication-ready, justified report?",
    ctaText: "For ethics boards and theses, we'll pick the right test and assumptions and prepare your justified sample-size report.",
    ctaButton: "Leave the analysis to us",
    note: "Mean, proportion and correlation tests use the large-sample (normal) approximation; ANOVA, chi-square and regression use exact central/noncentral F and χ² distributions. For small samples or complex designs, we prepare the justified report.",
  },
} as const;

// --- Power curve chart ---
function CurveChart({
  points,
  markTotal,
  markPower,
  xLabel,
}: {
  points: { total: number; power: number }[];
  markTotal: number;
  markPower: number;
  xLabel: string;
}) {
  const W = 360;
  const H = 200;
  const padL = 30;
  const padR = 12;
  const padT = 10;
  const padB = 28;
  const minT = points[0]?.total ?? 0;
  const maxT = points[points.length - 1]?.total ?? 1;
  const spanT = maxT - minT || 1;
  const sx = (t: number) => padL + ((t - minT) / spanT) * (W - padL - padR);
  const sy = (pw: number) => padT + (1 - pw) * (H - padT - padB);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${sx(p.total).toFixed(1)},${sy(p.power).toFixed(1)}`)
    .join(" ");
  const clampT = Math.min(maxT, Math.max(minT, markTotal));
  const yGrid = [0, 0.2, 0.4, 0.6, 0.8, 1];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={xLabel}>
      {yGrid.map((g) => (
        <g key={g}>
          <line x1={padL} x2={W - padR} y1={sy(g)} y2={sy(g)} className="stroke-border" strokeWidth={0.5} />
          <text x={padL - 4} y={sy(g) + 3} textAnchor="end" className="fill-foreground-muted" style={{ fontSize: 8 }}>
            {g.toFixed(1)}
          </text>
        </g>
      ))}
      <line x1={padL} x2={W - padR} y1={sy(0.8)} y2={sy(0.8)} className="stroke-accent" strokeWidth={0.75} strokeDasharray="3 3" opacity={0.5} />
      <line x1={sx(clampT)} x2={sx(clampT)} y1={padT} y2={H - padB} className="stroke-accent" strokeWidth={0.75} strokeDasharray="3 3" opacity={0.5} />
      <path d={path} fill="none" className="stroke-accent" strokeWidth={1.75} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={sx(clampT)} cy={sy(Math.min(1, Math.max(0, markPower)))} r={2.75} className="fill-accent" />
      <text x={padL} y={H - padB + 12} textAnchor="start" className="fill-foreground-muted" style={{ fontSize: 8 }}>
        {Math.round(minT)}
      </text>
      <text x={W - padR} y={H - padB + 12} textAnchor="end" className="fill-foreground-muted" style={{ fontSize: 8 }}>
        {Math.round(maxT)}
      </text>
      <text x={(padL + W - padR) / 2} y={H - 4} textAnchor="middle" className="fill-foreground-muted" style={{ fontSize: 8.5 }}>
        {xLabel}
      </text>
    </svg>
  );
}

// --- Type I / Type II error diagram ---
function ErrorDiagram({
  lambda,
  zc,
  tails,
  labels,
}: {
  lambda: number;
  zc: number;
  tails: number;
  labels: { alpha: string; beta: string; power: string; h0: string; h1: string };
}) {
  const W = 360;
  const H = 220;
  const padL = 8;
  const padR = 8;
  const padT = 12;
  const base = H - 54; // baseline (room for legend below)
  const phi = (x: number) => Math.exp((-x * x) / 2) / Math.sqrt(2 * Math.PI);
  const maxY = phi(0);

  const x0 = Math.min(-3.6, -zc - 1);
  const x1 = Math.max(lambda + 3.6, zc + 1.5);
  const sx = (x: number) => padL + ((x - x0) / (x1 - x0)) * (W - padL - padR);
  const sy = (v: number) => base - (v / maxY) * (base - padT);

  const M = 160;
  const pts = Array.from({ length: M }, (_, i) => {
    const x = x0 + ((x1 - x0) * i) / (M - 1);
    return { x, y0: phi(x), y1: phi(x - lambda) };
  });

  const line = (key: "y0" | "y1") =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"}${sx(p.x).toFixed(1)},${sy(p[key]).toFixed(1)}`).join(" ");

  const area = (filter: (x: number) => boolean, key: "y0" | "y1") => {
    const seg = pts.filter((p) => filter(p.x));
    if (seg.length < 2) return "";
    let d = `M${sx(seg[0].x).toFixed(1)},${base}`;
    seg.forEach((p) => (d += `L${sx(p.x).toFixed(1)},${sy(p[key]).toFixed(1)}`));
    d += `L${sx(seg[seg.length - 1].x).toFixed(1)},${base}Z`;
    return d;
  };

  const legend = [
    { c: "fill-red-500", t: labels.alpha },
    { c: "fill-foreground", t: labels.beta },
    { c: "fill-accent", t: labels.power },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={labels.power}>
      {/* baseline */}
      <line x1={padL} x2={W - padR} y1={base} y2={base} className="stroke-border" strokeWidth={0.5} />

      {/* Type II (beta): H1 below critical */}
      <path d={area((x) => x <= zc, "y1")} className="fill-foreground" opacity={0.14} />
      {/* Power: H1 beyond critical */}
      <path d={area((x) => x >= zc, "y1")} className="fill-accent" opacity={0.22} />
      {/* Type I (alpha): H0 beyond critical (both tails if two-sided) */}
      <path d={area((x) => x >= zc, "y0")} className="fill-red-500" opacity={0.28} />
      {tails === 2 && <path d={area((x) => x <= -zc, "y0")} className="fill-red-500" opacity={0.28} />}

      {/* critical line(s) */}
      <line x1={sx(zc)} x2={sx(zc)} y1={padT - 4} y2={base} className="stroke-foreground" strokeWidth={0.75} strokeDasharray="3 2" opacity={0.55} />
      {tails === 2 && (
        <line x1={sx(-zc)} x2={sx(-zc)} y1={padT - 4} y2={base} className="stroke-foreground" strokeWidth={0.75} strokeDasharray="3 2" opacity={0.55} />
      )}

      {/* curves */}
      <path d={line("y0")} fill="none" className="stroke-foreground-muted" strokeWidth={1.4} />
      <path d={line("y1")} fill="none" className="stroke-accent" strokeWidth={1.6} />

      {/* H0 / H1 labels */}
      <text x={sx(0)} y={sy(maxY) - 3} textAnchor="middle" className="fill-foreground-muted" style={{ fontSize: 8.5 }}>
        {labels.h0}
      </text>
      <text x={sx(lambda)} y={sy(maxY) - 3} textAnchor="middle" className="fill-accent" style={{ fontSize: 8.5 }}>
        {labels.h1}
      </text>

      {/* legend */}
      {legend.map((l, i) => {
        const lx = padL + i * ((W - padL - padR) / 3);
        return (
          <g key={i}>
            <rect x={lx} y={H - 22} width={9} height={9} rx={1.5} className={l.c} opacity={i === 1 ? 0.3 : 0.5} />
            <text x={lx + 13} y={H - 14} className="fill-foreground-muted" style={{ fontSize: 8 }}>
              {l.t}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function ChartCard({
  title,
  subtitle,
  downloadLabel,
  filename,
  children,
}: {
  title: string;
  subtitle: string;
  downloadLabel: string;
  filename: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="p-5 bg-background border border-border rounded-xl">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="text-sm font-sans font-semibold text-foreground">{title}</h3>
        <button
          type="button"
          onClick={() => {
            const svg = ref.current?.querySelector("svg");
            if (svg) exportSvgToPng(svg as SVGSVGElement, filename, pageBackground());
          }}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-sans text-foreground-muted border border-border rounded-md hover:border-accent hover:text-foreground transition-colors shrink-0"
        >
          <Download size={13} />
          {downloadLabel}
        </button>
      </div>
      <p className="text-xs font-sans text-foreground-muted mb-3">{subtitle}</p>
      <div ref={ref}>{children}</div>
    </div>
  );
}

export default function PowerCalculator({
  lang,
  powerHref,
}: {
  lang: Lang;
  powerHref: string;
}) {
  const t = COPY[lang];

  const [test, setTest] = useState<TestKind>("twoMeans");
  const [mode, setMode] = useState<Mode>("size");

  // effect inputs
  const [d, setD] = useState("0.5");
  const [dz, setDz] = useState("0.5");
  const [r, setR] = useState("0.3");
  const [p1, setP1] = useState("0.5");
  const [p2, setP2] = useState("0.65");
  const [p0, setP0] = useState("0.5");
  const [f, setF] = useState("0.25");
  const [k, setK] = useState("3");
  const [w, setW] = useState("0.3");
  const [df, setDf] = useState("4");
  const [f2, setF2] = useState("0.15");
  const [u, setU] = useState("3");
  const [sd, setSd] = useState("10");
  const [delta, setDelta] = useState("5");

  // shared
  const [alpha, setAlpha] = useState("0.05");
  const [tails, setTails] = useState<Tails>(2);
  const [ratio, setRatio] = useState("1");
  const [targetPower, setTargetPower] = useState("0.80");
  const [nInput, setNInput] = useState("64");

  const eff: Effect = useMemo(() => {
    switch (test) {
      case "general":
        return { sigma: num(sd), delta: num(delta), k: Math.round(num(k)) };
      case "twoMeans":
      case "oneMean":
        return { d: num(d) };
      case "pairedMeans":
        return { dz: num(dz) };
      case "correlation":
        return { r: num(r) };
      case "twoProportions":
        return { p1: num(p1), p2: num(p2) };
      case "oneProportion":
        return { p0: num(p0), p1: num(p1) };
      case "anova":
        return { f: num(f), k: Math.round(num(k)) };
      case "chiSquare":
        return { w: num(w), df: Math.round(num(df)) };
      case "regression":
        return { f2: num(f2), u: Math.round(num(u)) };
    }
  }, [test, d, dz, r, p1, p2, p0, f, k, w, df, f2, u, sd, delta]);

  const params: Params = useMemo(
    () => ({
      alpha: num(alpha) || 0.05,
      tails,
      ratio: Math.max(0.01, num(ratio) || 1),
    }),
    [alpha, tails, ratio]
  );

  const kind = groupKind(test);

  const c = useMemo(() => {
    if (!isValid(test, eff, params)) return { valid: false as const };

    let ss;
    let total: number;
    let powerNow: number;

    if (mode === "size") {
      const tp = Math.min(0.999, Math.max(0.01, num(targetPower) || 0.8));
      const s = sampleSize(test, tp, eff, params);
      if (!s) return { valid: false as const };
      ss = s;
      total = s.total;
      powerNow = s.achievedPower;
    } else {
      const conv = totalFromInput(test, num(nInput) || 0, eff, params);
      total = conv.total;
      powerNow = powerAtTotal(test, total, eff, params);
      ss = { ...conv, achievedPower: powerNow };
    }

    const curve = powerCurve(test, eff, params, total);
    const diag = diagram(test, powerNow, params);
    const scenarios = effectScenarios(test, eff).map((s) => ({
      label: s.label,
      isInput: s.isInput,
      cells: POWER_TARGETS.map((pw) => sampleSize(test, pw, s.eff, params)?.total ?? null),
    }));
    const nAt = (pw: number) => sampleSize(test, pw, eff, params)?.total ?? null;

    return {
      valid: true as const,
      ss,
      total,
      powerNow,
      curve,
      diag,
      scenarios,
      n80: nAt(0.8),
      n90: nAt(0.9),
      n95: nAt(0.95),
    };
  }, [test, eff, params, mode, targetPower, nInput]);

  // --- deterministic interpretation ---
  const interpretation = useMemo(() => {
    if (!c.valid) return "";
    const a = params.alpha;
    const tailPart = usesTails(test)
      ? `, ${params.tails === 2 ? t.twoSided : t.oneSided}`
      : "";
    const effLabel = (() => {
      switch (test) {
        case "general":
          return `Δ = ${eff.delta}, SD = ${eff.sigma} (${eff.k} ${t.groupsWord})`;
        case "twoMeans":
        case "oneMean":
          return `d = ${eff.d}`;
        case "pairedMeans":
          return `dz = ${eff.dz}`;
        case "correlation":
          return `r = ${eff.r}`;
        case "twoProportions":
          return `p₁ = ${eff.p1}, p₂ = ${eff.p2}`;
        case "oneProportion":
          return `p₀ = ${eff.p0}, p₁ = ${eff.p1}`;
        case "anova":
          return `f = ${eff.f} (${eff.k} ${t.groupsWord})`;
        case "chiSquare":
          return `w = ${eff.w} (df = ${eff.df})`;
        case "regression":
          return `f² = ${eff.f2} (u = ${eff.u})`;
      }
    })();
    const sampleDesc = (() => {
      const s = c.ss!;
      if (kind === "two")
        return `${t.group1} n₁ = ${s.n1}, ${t.group2} n₂ = ${s.n2} (${t.total} N = ${s.total})`;
      if (kind === "anova")
        return `${t.perGroupWord} ${s.perGroup} (${t.total} N = ${s.total}; ${s.groups} ${t.groupsWord})`;
      return `N = ${s.total}`;
    })();

    if (lang === "tr") {
      if (mode === "size") {
        return `${effLabel} etki büyüklüğünü, α = ${a}${tailPart} bir ${t.short[test]} ile %${Math.round(
          c.powerNow * 100
        )} güçle saptamak için ${sampleDesc} gerekir. Aynı çalışmada gücü %90'a çıkarmak için toplam ${
          c.n90 ?? "—"
        }, %95 için ${c.n95 ?? "—"} örneklem gerekir.`;
      }
      const adeq =
        c.powerNow >= 0.8
          ? "Bu, yaygın %80 eşiğinin üzerinde — örnekleminiz yeterli."
          : c.powerNow >= 0.5
            ? `Bu, yaygın %80 eşiğinin altında; %80 güç için toplam ${c.n80 ?? "—"} örneklem gerekir.`
            : `Gücünüz düşük; %80 güç için toplam ${c.n80 ?? "—"} örneklem gerekir.`;
      return `${sampleDesc} ile ${effLabel} etkisi, α = ${a}${tailPart} bir ${t.short[test]}'te %${(
        c.powerNow * 100
      ).toFixed(1)} güçle saptanır. ${adeq}`;
    }

    if (mode === "size") {
      return `To detect an effect of ${effLabel} at α = ${a}${tailPart} with a ${t.short[test]} at ${Math.round(
        c.powerNow * 100
      )}% power, you need ${sampleDesc}. In the same study, reaching 90% power needs a total of ${
        c.n90 ?? "—"
      }, and 95% needs ${c.n95 ?? "—"}.`;
    }
    const adeq =
      c.powerNow >= 0.8
        ? "That is above the common 80% threshold — your sample is adequate."
        : c.powerNow >= 0.5
          ? `That is below the common 80% threshold; 80% power needs a total of ${c.n80 ?? "—"}.`
          : `Power is low; 80% power needs a total of ${c.n80 ?? "—"}.`;
    return `With ${sampleDesc}, an effect of ${effLabel} is detected at ${(
      c.powerNow * 100
    ).toFixed(1)}% power with a ${t.short[test]} at α = ${a}${tailPart}. ${adeq}`;
  }, [c, test, eff, params, mode, kind, lang, t]);

  return (
    <div className="space-y-6">
      {/* Test selector */}
      <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {TEST_KEYS.map((key) => {
            const active = test === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setTest(key)}
                className={`text-left px-3 py-2.5 rounded-lg border text-sm font-sans transition-colors ${
                  active
                    ? "border-accent bg-accent/5 text-foreground font-medium"
                    : "border-border text-foreground-muted hover:border-accent/50"
                }`}
              >
                {t.tests[key]}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Inputs + result */}
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Inputs */}
          <div className="p-5 bg-background border border-border rounded-xl space-y-4">
            <div>
              <div className="inline-flex p-0.5 bg-accent/5 border border-border rounded-lg">
                {(["size", "power"] as Mode[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    className={`px-3 py-1.5 text-xs font-sans font-medium rounded-md transition-colors ${
                      mode === m ? "bg-accent text-accent-foreground" : "text-foreground-muted"
                    }`}
                  >
                    {m === "size" ? t.modeSize : t.modePower}
                  </button>
                ))}
              </div>
              <p className="text-xs font-sans text-foreground-muted mt-2">
                {mode === "size" ? t.modeSizeHint : t.modePowerHint}
              </p>
            </div>

            {/* effect inputs per test */}
            {test === "general" && (
              <div className="space-y-4">
                <p className="text-xs font-sans text-foreground-muted -mb-1">
                  {t.generalHint}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Field label={t.sd} value={sd} onChange={setSd} step="0.5" />
                  <Field label={t.delta} value={delta} onChange={setDelta} step="0.5" />
                </div>
                <Field label={t.k} value={k} onChange={setK} step="1" />
              </div>
            )}
            {(test === "twoMeans" || test === "oneMean" || test === "pairedMeans") && (
              <NumberWithPresets
                label={test === "pairedMeans" ? t.dz : t.d}
                value={test === "pairedMeans" ? dz : d}
                onChange={test === "pairedMeans" ? setDz : setD}
                presets={[
                  { l: t.small, v: "0.2" },
                  { l: t.medium, v: "0.5" },
                  { l: t.large, v: "0.8" },
                ]}
              />
            )}
            {test === "correlation" && (
              <NumberWithPresets
                label={t.r}
                value={r}
                onChange={setR}
                presets={[
                  { l: t.small, v: "0.1" },
                  { l: t.medium, v: "0.3" },
                  { l: t.large, v: "0.5" },
                ]}
              />
            )}
            {test === "twoProportions" && (
              <div className="grid grid-cols-2 gap-3">
                <Field label={t.p1} value={p1} onChange={setP1} step="0.05" />
                <Field label={t.p2} value={p2} onChange={setP2} step="0.05" />
              </div>
            )}
            {test === "oneProportion" && (
              <div className="grid grid-cols-2 gap-3">
                <Field label={t.p0} value={p0} onChange={setP0} step="0.05" />
                <Field label={t.p1alt} value={p1} onChange={setP1} step="0.05" />
              </div>
            )}
            {test === "anova" && (
              <div className="grid grid-cols-2 gap-3">
                <NumberWithPresets
                  label={t.f}
                  value={f}
                  onChange={setF}
                  presets={[
                    { l: t.small, v: "0.1" },
                    { l: t.medium, v: "0.25" },
                    { l: t.large, v: "0.4" },
                  ]}
                />
                <Field label={t.k} value={k} onChange={setK} step="1" />
              </div>
            )}
            {test === "chiSquare" && (
              <div className="grid grid-cols-2 gap-3">
                <NumberWithPresets
                  label={t.w}
                  value={w}
                  onChange={setW}
                  presets={[
                    { l: t.small, v: "0.1" },
                    { l: t.medium, v: "0.3" },
                    { l: t.large, v: "0.5" },
                  ]}
                />
                <Field label={t.df} value={df} onChange={setDf} step="1" />
              </div>
            )}
            {test === "regression" && (
              <div className="grid grid-cols-2 gap-3">
                <NumberWithPresets
                  label={t.f2}
                  value={f2}
                  onChange={setF2}
                  presets={[
                    { l: t.small, v: "0.02" },
                    { l: t.medium, v: "0.15" },
                    { l: t.large, v: "0.35" },
                  ]}
                />
                <Field label={t.u} value={u} onChange={setU} step="1" />
              </div>
            )}

            {/* mode-specific */}
            {mode === "size" ? (
              <Field label={t.targetPower} value={targetPower} onChange={setTargetPower} step="0.05" />
            ) : (
              <Field
                label={kind === "two" || kind === "anova" ? t.nPerGroup : t.nSingle}
                value={nInput}
                onChange={setNInput}
                step="1"
              />
            )}

            {/* shared params */}
            <div className="grid grid-cols-2 gap-3">
              <Field label={t.alpha} value={alpha} onChange={setAlpha} step="0.01" />
              {usesTails(test) ? (
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                    {t.tails}
                  </label>
                  <select
                    value={tails}
                    onChange={(e) => setTails(Number(e.target.value) as Tails)}
                    className={`${fieldClass} appearance-none cursor-pointer`}
                  >
                    <option value={2}>{t.twoSided}</option>
                    <option value={1}>{t.oneSided}</option>
                  </select>
                </div>
              ) : (
                <div />
              )}
            </div>

            {usesRatio(test) && (
              <Field label={t.ratio} value={ratio} onChange={setRatio} step="0.1" />
            )}
          </div>

          {/* Result */}
          <div className="p-5 bg-accent/5 border border-accent/20 rounded-xl min-h-full flex flex-col">
            {!c.valid ? (
              <p className="text-sm font-sans text-foreground-muted m-auto text-center">{t.invalid}</p>
            ) : mode === "size" ? (
              <>
                <p className="text-xs font-sans uppercase tracking-[0.15em] text-foreground-muted mb-3">
                  {t.resultSizeTitle}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-mono font-semibold text-foreground">{c.ss!.total}</span>
                  <span className="text-sm font-sans text-foreground-muted">{t.total} N</span>
                </div>
                <ResultBreakdown ss={c.ss!} kind={kind} t={t} />
                <p className="text-xs font-sans text-foreground-muted mt-auto pt-3">
                  {t.achieved}: <span className="font-mono text-foreground">{pct(c.powerNow)}</span>
                </p>
              </>
            ) : (
              <>
                <p className="text-xs font-sans uppercase tracking-[0.15em] text-foreground-muted mb-3">
                  {t.resultPowerTitle}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-mono font-semibold text-foreground">{pct(c.powerNow)}</span>
                </div>
                <ResultBreakdown ss={c.ss!} kind={kind} t={t} />
              </>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Interpretation */}
      {c.valid && (
        <ScrollReveal>
          <div className="p-4 bg-foreground/[0.03] border border-border rounded-xl">
            <p className="text-xs font-sans uppercase tracking-[0.15em] text-foreground-muted mb-1.5">
              {t.interpretation}
            </p>
            <p className="text-sm font-sans text-foreground leading-relaxed">{interpretation}</p>
          </div>
        </ScrollReveal>
      )}

      {/* Charts */}
      {c.valid && (
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title={t.curveTitle}
              subtitle={t.curveSubtitle}
              downloadLabel={t.download}
              filename={`power-curve-${test}`}
            >
              <CurveChart points={c.curve} markTotal={c.total} markPower={c.powerNow} xLabel={t.xAxis} />
            </ChartCard>
            <ChartCard
              title={t.diagramTitle}
              subtitle={t.diagramSubtitle}
              downloadLabel={t.download}
              filename={`alpha-beta-${test}`}
            >
              <ErrorDiagram
                lambda={c.diag.lambda}
                zc={c.diag.zc}
                tails={c.diag.tails}
                labels={{
                  alpha: t.legendAlpha,
                  beta: t.legendBeta,
                  power: t.legendPower,
                  h0: t.h0,
                  h1: t.h1,
                }}
              />
            </ChartCard>
          </div>
        </ScrollReveal>
      )}

      {/* Sensitivity table */}
      {c.valid && (
        <ScrollReveal>
          <div className="p-5 bg-background border border-border rounded-xl">
            <h3 className="text-sm font-sans font-semibold text-foreground">{t.tableTitle}</h3>
            <p className="text-xs font-sans text-foreground-muted mt-1 mb-3">{t.tableSubtitle}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium text-foreground-muted">{t.scenario}</th>
                    {POWER_TARGETS.map((pw) => (
                      <th key={pw} className="text-right py-2 px-3 font-medium text-foreground-muted">
                        {(pw * 100).toFixed(0)}%
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.scenarios.map((row) => (
                    <tr key={row.label} className={`border-b border-border/50 ${row.isInput ? "bg-accent/5" : ""}`}>
                      <td className={`py-2 pr-4 ${row.isInput ? "text-foreground font-medium" : "text-foreground-muted"}`}>
                        {row.label}
                      </td>
                      {row.cells.map((cell, i) => (
                        <td key={i} className="text-right py-2 px-3 font-mono text-foreground">
                          {cell ?? "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      )}

      <p className="text-xs font-sans text-foreground-muted leading-relaxed">{t.note}</p>

      {/* CTA */}
      <ScrollReveal>
        <div className="p-6 bg-foreground/[0.03] border border-border rounded-xl flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-base font-serif font-semibold text-foreground">{t.ctaTitle}</h3>
            <p className="text-sm font-sans text-foreground-muted mt-1">{t.ctaText}</p>
          </div>
          <a
            href={powerHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-sans font-medium text-sm rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {t.ctaButton}
            <ArrowRight size={16} />
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}

// --- small input helpers ---
function Field({
  label,
  value,
  onChange,
  step,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  step: string;
}) {
  return (
    <div>
      <label className="block text-sm font-sans font-medium text-foreground mb-1.5">{label}</label>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass}
      />
    </div>
  );
}

function NumberWithPresets({
  label,
  value,
  onChange,
  presets,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  presets: { l: string; v: string }[];
}) {
  return (
    <div>
      <label className="block text-sm font-sans font-medium text-foreground mb-1.5">{label}</label>
      <input
        type="number"
        step="0.05"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass}
      />
      <div className="flex flex-wrap gap-1.5 mt-2">
        {presets.map((b) => (
          <button
            key={b.v}
            type="button"
            onClick={() => onChange(b.v)}
            className="px-2.5 py-1 text-xs font-sans text-foreground-muted border border-border rounded-md hover:border-accent transition-colors"
          >
            {b.l} ({b.v})
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultBreakdown({
  ss,
  kind,
  t,
}: {
  ss: { n1?: number; n2?: number; perGroup?: number; groups?: number; total: number };
  kind: string;
  t: {
    group1: string;
    group2: string;
    perGroupWord: string;
    groupsWord: string;
  };
}) {
  if (kind === "two")
    return (
      <div className="flex gap-4 text-sm font-sans text-foreground">
        <span>
          {t.group1}: <span className="font-mono font-medium">{ss.n1}</span>
        </span>
        <span>
          {t.group2}: <span className="font-mono font-medium">{ss.n2}</span>
        </span>
      </div>
    );
  if (kind === "anova")
    return (
      <p className="text-sm font-sans text-foreground">
        {t.perGroupWord}: <span className="font-mono font-medium">{ss.perGroup}</span> · {ss.groups}{" "}
        {t.groupsWord}
      </p>
    );
  return null;
}
