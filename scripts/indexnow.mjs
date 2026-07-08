// Submits all sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver share the endpoint).
// Run after each deploy that changes content: pnpm indexnow
// Docs: https://www.indexnow.org/documentation

const HOST = "getbayes.me";
const KEY = "2af67305b9403487791d0b46760cb2cc";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

async function main() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
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
  console.error(err.message);
  process.exit(1);
});
