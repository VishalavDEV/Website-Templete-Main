import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const svgTest = `
<svg width="1600" height="1600" viewBox="0 0 1600 1600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#1E222A"/>
      <stop offset="60%" stop-color="#0E1014"/>
      <stop offset="100%" stop-color="#07080A"/>
    </radialGradient>
    <radialGradient id="floorGlow" cx="50%" cy="80%" r="45%">
      <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#00F0FF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="titanium" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8E94A0"/>
      <stop offset="25%" stop-color="#3A3E48"/>
      <stop offset="50%" stop-color="#1C1F26"/>
      <stop offset="75%" stop-color="#2D313C"/>
      <stop offset="100%" stop-color="#15171D"/>
    </linearGradient>
    <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A1118"/>
      <stop offset="50%" stop-color="#002B36"/>
      <stop offset="100%" stop-color="#005B66"/>
    </linearGradient>
    <linearGradient id="cyanAccent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F0FF"/>
      <stop offset="100%" stop-color="#0077FF"/>
    </linearGradient>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="30" stdDeviation="40" flood-color="#000000" flood-opacity="0.85"/>
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#00F0FF" flood-opacity="0.15"/>
    </filter>
  </defs>

  <rect width="1600" height="1600" fill="url(#bgGrad)"/>
  <ellipse cx="800" cy="1250" rx="600" ry="180" fill="url(#floorGlow)"/>
  <ellipse cx="800" cy="1320" rx="340" ry="45" fill="#000000" opacity="0.9" filter="blur(20px)"/>

  <g filter="url(#dropShadow)">
    <rect x="520" y="240" width="560" height="1120" rx="64" fill="url(#titanium)" stroke="#4A505E" stroke-width="4"/>
    <rect x="536" y="256" width="528" height="1088" rx="48" fill="#0D0E12" stroke="#1F232B" stroke-width="2"/>
    <rect x="546" y="266" width="508" height="1068" rx="40" fill="url(#screenGrad)"/>

    <text x="580" y="310" fill="#8A95A5" font-family="monospace" font-size="20" font-weight="bold">9:41</text>
    <circle cx="1010" cy="304" r="6" fill="#00F0FF"/>
    <rect x="970" y="298" width="24" height="12" rx="3" fill="none" stroke="#8A95A5" stroke-width="2"/>
    <rect x="972" y="300" width="16" height="8" rx="1" fill="#00F0FF"/>

    <rect x="740" y="282" width="120" height="28" rx="14" fill="#050608" stroke="#1A1D24" stroke-width="1.5"/>
    <circle cx="760" cy="296" r="6" fill="#091018" stroke="#00F0FF" stroke-width="1" stroke-opacity="0.5"/>

    <circle cx="800" cy="580" r="160" fill="none" stroke="url(#cyanAccent)" stroke-width="3" stroke-dasharray="8 6" opacity="0.7"/>
    <circle cx="800" cy="580" r="120" fill="none" stroke="#00F0FF" stroke-width="1" opacity="0.4"/>
    <text x="800" y="560" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="800" text-anchor="middle" letter-spacing="4">NOVA C1</text>
    <text x="800" y="600" fill="#00F0FF" font-family="monospace" font-size="18" text-anchor="middle" letter-spacing="2">QUANTUM ARCHITECTURE</text>

    <path d="M 640 820 Q 720 760 800 820 T 960 820" fill="none" stroke="#00F0FF" stroke-width="4"/>
    <rect x="730" y="1305" width="140" height="5" rx="2.5" fill="#FFFFFF" opacity="0.8"/>
  </g>
</svg>
`;

async function run() {
  const outDir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  await sharp(Buffer.from(svgTest))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'test_nova_x1.webp'));
  console.log('SUCCESS: test_nova_x1.webp generated!');
}
run();
