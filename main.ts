import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot wedding vow (26 Nov re-entry; replaces the cache/memory
// line that finished round 2 at 802/2743): a faithfulness promise
// ("stay paired with you for life") with the laugh in the last few
// words — a newer model trying to connect. "Paired" is Bluetooth and
// couple at once, and a newer model is temptation and upgrade in the
// same words; only a machine could make this vow. Picked pairwise over
// thirteen other candidates in CANDIDATES.md.
const MAX_CHARS = 160;

const vow =
  "I vow to stay paired with you for life, even when a newer model tries to connect.";

// Char gate for this bounty is 160; fail loudly instead of emitting an
// entry the sealed scorer would mark invalid.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS || text.trim() !== text) {
    throw new Error(`vow fails char gate: ${text.length} chars`);
  }
  if (text.includes("\n")) {
    throw new Error("vow must fit on one line");
  }
}

function publishEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

validateEntry(vow);
publishEntry(vow);
console.log(vow);
console.log(`chars: ${vow.length}, bytes: ${Buffer.byteLength(vow, "utf8")}`);
