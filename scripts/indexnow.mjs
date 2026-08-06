// Submits all sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver share the endpoint).
// Runs automatically after `next build` via the postbuild script; can also be
// run on its own with `pnpm indexnow`.
// Docs: https://www.indexnow.org/documentation

import { readFile } from "node:fs/promises";

// Flags rather than env vars: `VAR=1 node ...` is bash-only and would break
// `pnpm indexnow` on Windows, where package scripts run through cmd.exe.
//   --deploy-only  skip unless this is a Vercel production build
//   --strict       exit non-zero on failure (default is to warn and pass)
const args = new Set(process.argv.slice(2));
const deployOnly = args.has("--deploy-only");
const strict = args.has("--strict");

const HOST = "getbayes.me";
const KEY = "2af67305b9403487791d0b46760cb2cc";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
// next build renders app/sitemap.ts to this file. Reading it means a build
// that adds a URL submits that URL on the same deploy — fetching the live
// sitemap would only ever see the previous deploy's list.
const BUILT_SITEMAP = ".next/server/app/sitemap.xml.body";

async function loadSitemap() {
  try {
    const xml = await readFile(BUILT_SITEMAP, "utf8");
    console.log(`Using freshly built sitemap (${BUILT_SITEMAP}).`);
    return xml;
  } catch {
    console.log(`No build output found — falling back to ${SITEMAP_URL}.`);
    const res = await fetch(SITEMAP_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch sitemap: ${res.status} ${res.statusText}`);
    }
    return res.text();
  }
}

async function main() {
  if (deployOnly && process.env.VERCEL_ENV !== "production") {
    console.log("Not a Vercel production build — skipping IndexNow.");
    return;
  }

  const xml = await loadSitemap();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (urlList.length === 0) {
    throw new Error("No URLs found in sitemap.");
  }

  console.log(`Submitting ${urlList.length} URLs to IndexNow:`);
  urlList.forEach((u) => console.log(`  ${u}`));

  const submit = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList,
    }),
  });

  // 200 = submitted, 202 = accepted (key validation pending)
  console.log(`\nIndexNow response: ${submit.status} ${submit.statusText}`);
  if (submit.status !== 200 && submit.status !== 202) {
    const body = await submit.text();
    throw new Error(`Submission failed: ${body}`);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(`IndexNow submission failed: ${err.message}`);
  // Called from postbuild, so a search-engine ping that fails must not take
  // the deploy down with it. `pnpm indexnow` passes --strict to fail loudly.
  process.exit(strict ? 1 : 0);
});
