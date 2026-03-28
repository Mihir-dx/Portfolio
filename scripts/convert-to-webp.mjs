import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const assetsDir = join(import.meta.dirname, '..', 'src', 'assets');

const files = await readdir(assetsDir);
const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of imageFiles) {
  const inputPath = join(assetsDir, file);
  const name = basename(file, extname(file));
  const outputPath = join(assetsDir, `${name}.webp`);

  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);

  const original = (await sharp(inputPath).metadata()).size;
  const optimized = (await sharp(outputPath).metadata()).size;
  console.log(`${file} -> ${name}.webp (${(original/1024).toFixed(0)}KB -> ${(optimized/1024).toFixed(0)}KB)`);
}

console.log('\nDone! WebP images created.');
