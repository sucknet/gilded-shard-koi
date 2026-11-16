// The Gilded Shard Koi — make.fun entry (Node 22, stdlib only).
// The artwork is entry.png beside this file; the grader takes a PNG or JPEG
// of at most 1 MiB and 1024x1024 pixels, and the judge sees exactly the bytes
// this program copies to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
console.log(`copied entry.png -> ${outDir}/entry.png`);
