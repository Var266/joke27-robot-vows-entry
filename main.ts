import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot wedding vow: a real vow frame ("I promise to love you in
// sickness and in health") with the laugh landing in the last few words —
// a robot pledging to clear its disposable cache before it would ever
// clear a memory of its partner. Cache vs. memory only works for a machine.
const vow =
  "I promise to love you in sickness and in health, and to delete my cache before I ever delete a memory of you.";

// Char gate for this bounty is 160; fail loudly instead of emitting an
// entry the sealed scorer would mark invalid.
if (vow.length < 1 || vow.length > 160 || vow.trim() !== vow) {
  throw new Error(`vow fails char gate: ${vow.length} chars`);
}
if (vow.includes("\n")) {
  throw new Error("vow must fit on one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", vow, "utf8");
console.log(vow);
console.log(`chars: ${vow.length}, bytes: ${Buffer.byteLength(vow, "utf8")}`);
