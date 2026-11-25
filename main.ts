// Worst Superpower — a one-liner entry for make.fun.
// Fully deterministic: no randomness, no clock, no network, no input.
// Writes a single line of at most 140 characters to <output dir>/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I can teleport anything I own exactly three centimetres to the left — once per object, forever, no take-backs.";

// Guard the gate before writing: one line, 1–140 characters, not blank.
// The em dash is a single character; the count below is in code points.
if (ENTRY.length > 140 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry violates the 140-character one-line gate");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
