import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot wedding vow, at most 160 characters (the competition's gate).
// Classic vow frame ("I take you... to have and to hold") with the payoff in the
// last few words: death is swapped for a factory reset — the robot equivalent of
// "till death do us part".
const VOW =
  "I take you to be my lawfully wedded wife, to have and to hold, until a factory reset do us part.";

if (VOW.length < 1 || VOW.length > 160 || VOW.trim().length === 0) {
  throw new Error(`vow must be 1-160 non-whitespace characters, got ${VOW.length}`);
}
if (VOW.includes("\n") || VOW.includes("\r")) {
  throw new Error("vow must be a single line");
}
// Tie-break is fewer bytes: keep the text pure ASCII so bytes == characters.
if (Buffer.byteLength(VOW, "utf8") !== VOW.length) {
  throw new Error("vow must be ASCII so byte count equals character count");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
