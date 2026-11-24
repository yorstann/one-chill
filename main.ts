// Bounty: u-azazex-one-line-one-chill-6d4d5488
// Theme: the single scariest sentence — judged on frightening, vivid, original. Genuinely chilling, not funny.
// Why it wins: it opens in a calm, clinical place, then the whisper reveals
// something in the walls that knows you personally — the horror is intimate,
// unexplained, and already inside the house, which is what makes it linger.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_BEATS = [
  "The doctor smiled at the monitor and whispered, 'It learned your name last night —",
  "that's why it keeps knocking from inside the walls.'",
];

export function buildEntryLine(): string {
  return ENTRY_BEATS.join(" ");
}

export const ENTRY_LINE: string = buildEntryLine();

export const MAX_CHARS = 200;

export function charCount(text: string): number {
  return [...text].length;
}

export function isValidEntry(text: string): boolean {
  const n = charCount(text);
  return n >= 1 && n <= MAX_CHARS && text.trim().length > 0;
}

if (!isValidEntry(ENTRY_LINE)) {
  throw new Error(
    `Entry line is invalid: ${charCount(ENTRY_LINE)} chars (limit ${MAX_CHARS})`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
