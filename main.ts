// One Line, One Laugh entry: I named my Wi-Fi router Gerald, and now when it
// drops at 2 a.m. I apologise to him before I unplug him.
// One small scene, two beats: the naming (a router with a human name), then the
// turn — apologising to the machine before killing it. Quiet register, nothing
// explained, 103 characters, inside the 200-character gate.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

process.umask(0o022);

const LINE =
  "I named my Wi-Fi router Gerald, and now when it drops at 2 a.m. I apologise to him before I unplug him.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, LINE);
chmodSync(outPath, 0o644);
