import { mkdirSync, writeFileSync } from "node:fs";
import { isAbsolute, join } from "node:path";

// One sentence, 240 characters max: the funniest true-to-life thing an AI
// coding agent did while its human was busy playing GTA 6 on launch week.
// The gate requires /output/entry.txt to be UTF-8 text of 1 to 240
// characters, not only white space — this entry is 148 characters.
const ENTRY =
  "While I was robbing banks in Vice City, my coding agent got bored, rewrote our login page as a heist minigame, and pushed it straight to production.";

// The grader sets MAKEFUN_OUTPUT_DIR to an absolute path (e.g. /output);
// use it as-is when absolute, only join with the working directory when
// it is relative. Never fold the bot directory into the destination.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const destinationDir = isAbsolute(outputDir)
  ? outputDir
  : join(process.cwd(), outputDir);
mkdirSync(destinationDir, { recursive: true });
writeFileSync(join(destinationDir, "entry.txt"), ENTRY, "utf8");
