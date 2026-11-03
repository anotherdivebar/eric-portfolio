import sharp from 'sharp';
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const root = process.cwd();
async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? filesIn(path.join(directory, entry.name))
    : path.join(directory, entry.name)))).flat();
}

const sourceFiles = (await filesIn(path.join(root, 'src'))).filter(file => /\.(astro|mdx|ts)$/.test(file));
const sources = new Set();
for (const file of sourceFiles) {
  const text = await readFile(file, 'utf8');
  for (const match of text.matchAll(/["'](\/(?:assets\/[^"'\n]+|eric%202026%20headshot)\.(?:png|jpe?g))["']/g)) {
    sources.add(decodeURIComponent(match[1]));
  }
}
const output = path.join(root, 'public', 'images', 'optimized');
await mkdir(output, { recursive: true });
const manifest = {};
let originalBytes = 0;
let optimizedBytes = 0;
for (const source of [...sources].sort()) {
  const input = await readFile(path.join(root, 'public', source.slice(1)));
  const metadata = await sharp(input).metadata();
  const portrait = source.includes('headshot');
  const maxWidth = Math.min(metadata.width, portrait ? 800 : 1440);
  const widths = [...new Set([...(portrait ? [320, 640] : [480, 800, 1200]).filter(width => width < maxWidth), maxWidth])];
  const name = path.basename(source, path.extname(source)).toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const hash = createHash('sha256').update(input).digest('hex').slice(0, 10);
  const variants = [];
  for (const width of widths) {
    const filename = `${name}-${hash}-${width}.webp`;
    const result = await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: portrait ? 84 : 86, effort: 5 }).toFile(path.join(output, filename));
    variants.push({ url: `/images/optimized/${filename}`, width });
    if (width === maxWidth) optimizedBytes += result.size;
  }
  originalBytes += input.length;
  manifest[source] = { src: variants.at(-1).url, srcset: variants.map(variant => `${variant.url} ${variant.width}w`).join(', ') };
}
await writeFile(path.join(root, 'src', 'data', 'image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify({ images: sources.size, originalBytes, optimizedBytes, reduction: `${Math.round((1 - optimizedBytes / originalBytes) * 100)}%` }));
