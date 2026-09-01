import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');

const copies = {
  'nova_x1_phone.jpg': 'nova_x1_front.webp',
  'nova_x1_hero.jpg': 'nova_x1_front.webp',
  'nova_x1_front.jpg': 'nova_x1_front.webp',
  'nova_x1_silver.jpg': 'nova_x1_rear.webp',
  'nova_x1_iceblue.jpg': 'nova_x1_angle.webp',
  'nova_book_air.jpg': 'nova_book_air_open.webp',
  'nova_buds_pro.jpg': 'nova_buds_pro_open.webp',
  'nova_watch_x.jpg': 'nova_watch_x_front.webp',
  'nova_tab_12.jpg': 'nova_tab_12_front.webp',
  'nova_gamepad.jpg': 'nova_gamepad_front.webp',
  'nova_sound.jpg': 'nova_sound_front.webp',
  'nova_max.jpg': 'nova_max_front.webp',
  'nova_hub.jpg': 'nova_hub_hero.webp',
  'nova_core.jpg': 'nova_core_hero.webp'
};

for (const [target, source] of Object.entries(copies)) {
  const srcFile = path.join(imagesDir, source);
  const dstFile = path.join(imagesDir, target);
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, dstFile);
    console.log(`Copied ${source} -> ${target}`);
  }
}
console.log('Fallback images updated successfully!');
