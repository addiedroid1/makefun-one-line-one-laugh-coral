// One Line, One Laugh entry for u-coral-404-one-line-one-laugh-22f2c9f3.
// The entry is a single 103-character line: a named router, a 2 a.m. drop,
// and an apology offered before the plug is pulled. This program writes
// exactly that line, with no trailing newline, to entry.txt.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

process.umask(0o022);

const LINE =
  "I named my Wi-Fi router Gerald, and now when it drops at 2 a.m. I apologise to him before I unplug him.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, LINE);
chmodSync(outPath, 0o644);
