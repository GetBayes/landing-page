// Export an inline <svg> to a downloaded PNG, fully client-side (no deps).
// SVG colors come from Tailwind classes (CSS), which are lost once the node is
// serialized on its own — so we copy the *computed* presentation styles from
// the live elements onto the clone before rasterizing.

const PROPS = [
  "fill",
  "fill-opacity",
  "stroke",
  "stroke-width",
  "stroke-dasharray",
  "stroke-linejoin",
  "stroke-linecap",
  "opacity",
  "font-size",
  "font-family",
  "font-weight",
  "text-anchor",
];

function inlineStyles(orig: SVGSVGElement, clone: SVGSVGElement) {
  const o = [orig, ...orig.querySelectorAll("*")];
  const c = [clone, ...clone.querySelectorAll("*")];
  for (let i = 0; i < o.length; i++) {
    const cs = getComputedStyle(o[i] as Element);
    for (const prop of PROPS) {
      const v = cs.getPropertyValue(prop);
      if (v) c[i].setAttribute(prop, v);
    }
  }
}

export async function exportSvgToPng(
  svg: SVGSVGElement,
  filename: string,
  bg: string,
  scale = 2
): Promise<void> {
  const vb = svg.viewBox.baseVal;
  const w = (vb && vb.width) || svg.clientWidth || 360;
  const h = (vb && vb.height) || svg.clientHeight || 210;

  const clone = svg.cloneNode(true) as SVGSVGElement;
  inlineStyles(svg, clone);
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("width", String(w));
  clone.setAttribute("height", String(h));

  const svgStr = new XMLSerializer().serializeToString(clone);
  const svgUrl =
    "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr);

  const img = new Image();
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("svg load failed"));
    img.src = svgUrl;
  });

  const canvas = document.createElement("canvas");
  canvas.width = w * scale;
  canvas.height = h * scale;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = bg || "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.endsWith(".png") ? filename : `${filename}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// Resolve the page background so exported PNGs aren't transparent (and match
// the current light/dark theme).
export function pageBackground(): string {
  try {
    const c = getComputedStyle(document.body).backgroundColor;
    return c && c !== "rgba(0, 0, 0, 0)" ? c : "#ffffff";
  } catch {
    return "#ffffff";
  }
}
