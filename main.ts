import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";

// The chair stays on duty on purpose: it is the only one that has read every email.
const text = "Gone until Monday. I left detailed instructions with my chair. It has seen things.";
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
