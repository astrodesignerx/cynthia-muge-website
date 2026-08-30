// Every /img/ path referenced in the app must exist in public/img.
// A missing file does not fail a Next build, so it is checked here.
import { readdirSync, readFileSync } from "node:fs";
import { join, extname } from "node:path";

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );

const sources = [...walk("app"), ...walk("components"), ...walk("content")].filter((f) =>
  [".ts", ".tsx"].includes(extname(f)),
);

const referenced = new Set();
for (const f of sources) {
  for (const m of readFileSync(f, "utf8").matchAll(/\/img\/([A-Za-z0-9._-]+)/g)) {
    referenced.add(m[1]);
  }
}

const present = new Set(readdirSync(join("public", "img")));
const missing = [...referenced].filter((f) => !present.has(f)).sort();
const unused = [...present].filter((f) => !referenced.has(f)).sort();

if (missing.length) {
  console.error("Missing from public/img:\n  " + missing.join("\n  "));
  process.exit(1);
}
console.log(`images ok: ${referenced.size} referenced, ${unused.length} unused`);
if (unused.length) console.log("  unused: " + unused.join(", "));
