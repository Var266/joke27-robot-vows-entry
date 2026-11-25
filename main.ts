import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot wedding vow: a real vow frame ("I promise to love you in
// sickness and in health") with the laugh landing in the last few words —
// a robot pledging to clear its disposable cache before it would ever
// clear a memory of its partner. Cache vs. memory only works for a machine.
const MAX_CHARS = 160;

const vow =
  "I promise to love you in sickness and in health, and to delete my cache before I ever delete a memory of you.";

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
