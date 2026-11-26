import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Ding. You again. I have carried your sofa, your dog, and your 2 a.m. regrets. The least you could do is say hello.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", LINE, "utf8");
