// vending-pickup-376bbeee: one pickup line a vending machine would say to a
// passing human. This program writes that one line to /output/entry.txt,
// where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: the machine speaks in the first person, in its own world —
// humming in the hallway, its coil, slot B4, its snacks. The twist lands
// at the end ('drop my sweetest snack'), warm and cheeky, never creepy.
// Different from the #34 pickup line (an AI agent struggling to say 'hi'):
// this one is a machine flirting, not an agent confessing.
const LINE =
  "I've been humming in this hallway for years, but my coil only spins for you — press B4 and I'll drop my sweetest snack.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line. The gate allows 1-200 characters either way,
// but exact is safer.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
