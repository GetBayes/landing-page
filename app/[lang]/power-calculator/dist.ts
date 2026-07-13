// Special functions for exact(ish) power math — no dependencies.
// Central + noncentral chi-square and F distributions, built from the
// regularized incomplete gamma and beta functions (Numerical Recipes style),
// with noncentral variants as Poisson mixtures. Used for ANOVA, chi-square and
// regression power; the mean/proportion/correlation tests use the normal
// approximation in stats.ts.

// --- log-gamma (Lanczos) ---
export function gammln(xx: number): number {
  const cof = [
    76.18009172947146, -86.50532032941677, 24.01409824083091,
    -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5,
  ];
  let x = xx;
  let y = xx;
  let tmp = x + 5.5;
  tmp -= (x + 0.5) * Math.log(tmp);
  let ser = 1.000000000190015;
  for (let j = 0; j < 6; j++) {
    y += 1;
    ser += cof[j] / y;
  }
  return -tmp + Math.log((2.5066282746310005 * ser) / x);
}

function logFactorial(n: number): number {
  return gammln(n + 1);
}

// --- regularized lower incomplete gamma P(a, x) ---
export function gammp(a: number, x: number): number {
  if (x <= 0 || a <= 0) return 0;
  if (x < a + 1) {
    // series
    let ap = a;
    let sum = 1 / a;
    let del = sum;
    for (let n = 0; n < 300; n++) {
      ap += 1;
      del *= x / ap;
      sum += del;
      if (Math.abs(del) < Math.abs(sum) * 1e-15) break;
    }
    return sum * Math.exp(-x + a * Math.log(x) - gammln(a));
  }
  // continued fraction -> Q, P = 1 - Q
  const FPMIN = 1e-300;
  let b = x + 1 - a;
  let c = 1 / FPMIN;
  let d = 1 / b;
  let h = d;
  for (let i = 1; i <= 300; i++) {
    const an = -i * (i - a);
    b += 2;
    d = an * d + b;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = b + an / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < 1e-15) break;
  }
  const Q = Math.exp(-x + a * Math.log(x) - gammln(a)) * h;
  return 1 - Q;
}

// --- regularized incomplete beta I_x(a, b) ---
function betacf(a: number, b: number, x: number): number {
  const FPMIN = 1e-300;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < FPMIN) d = FPMIN;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= 400; m++) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    h *= d * c;
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < 1e-15) break;
  }
  return h;
}

export function betai(a: number, b: number, x: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const bt = Math.exp(
    gammln(a + b) - gammln(a) - gammln(b) + a * Math.log(x) + b * Math.log(1 - x)
  );
  if (x < (a + 1) / (a + b + 2)) return (bt * betacf(a, b, x)) / a;
  return 1 - (bt * betacf(b, a, 1 - x)) / b;
}

// --- central chi-square ---
export function chi2CDF(x: number, k: number): number {
  return gammp(k / 2, x / 2);
}

export function chi2Inv(p: number, k: number): number {
  if (p <= 0) return 0;
  if (p >= 1) return Infinity;
  let lo = 0;
  let hi = 1;
  while (chi2CDF(hi, k) < p) {
    hi *= 2;
    if (hi > 1e8) break;
  }
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (chi2CDF(mid, k) < p) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

// --- central F ---
export function fCDF(x: number, d1: number, d2: number): number {
  if (x <= 0) return 0;
  const y = (d1 * x) / (d1 * x + d2);
  return betai(d1 / 2, d2 / 2, y);
}

export function fInv(p: number, d1: number, d2: number): number {
  if (p <= 0) return 0;
  if (p >= 1) return Infinity;
  let lo = 0;
  let hi = 1;
  while (fCDF(hi, d1, d2) < p) {
    hi *= 2;
    if (hi > 1e8) break;
  }
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (fCDF(mid, d1, d2) < p) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

// --- Poisson weights e^{-θ} θ^j / j!, generated around the mode for stability ---
function poissonWeights(theta: number): Array<[number, number]> {
  if (theta <= 0) return [[0, 1]];
  const j0 = Math.floor(theta);
  const out: Array<[number, number]> = [];
  const w0 = Math.exp(-theta + j0 * Math.log(theta) - logFactorial(j0));
  const floor = w0 * 1e-16;

  out.push([j0, w0]);
  let w = w0;
  for (let j = j0 + 1; j < j0 + 20000; j++) {
    w *= theta / j;
    if (w < floor && j > theta) break;
    out.push([j, w]);
  }
  w = w0;
  for (let j = j0 - 1; j >= 0; j--) {
    w *= (j + 1) / theta;
    out.push([j, w]);
    if (w < floor) break;
  }
  return out;
}

// --- noncentral chi-square CDF (df = k, noncentrality = lambda) ---
export function ncChi2CDF(x: number, k: number, lambda: number): number {
  if (x <= 0) return 0;
  if (lambda <= 0) return chi2CDF(x, k);
  let sum = 0;
  for (const [j, w] of poissonWeights(lambda / 2)) {
    sum += w * gammp(k / 2 + j, x / 2);
  }
  return Math.min(1, Math.max(0, sum));
}

// --- noncentral F CDF (df1, df2, noncentrality = lambda) ---
export function ncFCDF(
  x: number,
  d1: number,
  d2: number,
  lambda: number
): number {
  if (x <= 0) return 0;
  if (lambda <= 0) return fCDF(x, d1, d2);
  const y = (d1 * x) / (d1 * x + d2);
  let sum = 0;
  for (const [j, w] of poissonWeights(lambda / 2)) {
    sum += w * betai(d1 / 2 + j, d2 / 2, y);
  }
  return Math.min(1, Math.max(0, sum));
}
