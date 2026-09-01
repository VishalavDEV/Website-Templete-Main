import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images');

const heroSvg = `
<svg width="900" height="1600" viewBox="0 0 900 1600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Dark OLED & Studio Gradients -->
    <radialGradient id="heroBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#141822"/>
      <stop offset="60%" stop-color="#090B0E"/>
      <stop offset="100%" stop-color="#040507"/>
    </radialGradient>
    <linearGradient id="titaniumEdge" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9EA5B3"/>
      <stop offset="25%" stop-color="#484E5B"/>
      <stop offset="50%" stop-color="#1E2128"/>
      <stop offset="75%" stop-color="#343944"/>
      <stop offset="100%" stop-color="#16181F"/>
    </linearGradient>
    <linearGradient id="novaScreenOled" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A121A"/>
      <stop offset="35%" stop-color="#031C26"/>
      <stop offset="75%" stop-color="#003543"/>
      <stop offset="100%" stop-color="#001824"/>
    </linearGradient>
    <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F0FF"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0055FF"/>
    </linearGradient>
    <linearGradient id="glassShine" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.3"/>
      <stop offset="30%" stop-color="#FFFFFF" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="900" height="1600" fill="url(#heroBg)"/>

  <!-- Phone Titanium Frame -->
  <rect x="20" y="20" width="860" height="1560" rx="90" fill="url(#titaniumEdge)" stroke="#00F0FF" stroke-width="4"/>
  <!-- Bezel -->
  <rect x="36" y="36" width="828" height="1528" rx="74" fill="#07080B"/>
  <!-- Screen -->
  <rect x="48" y="48" width="804" height="1504" rx="62" fill="url(#novaScreenOled)"/>

  <!-- Dynamic Island -->
  <rect x="340" y="70" width="220" height="42" rx="21" fill="#030406" stroke="#1C212B" stroke-width="2"/>
  <circle cx="375" cy="91" r="10" fill="#0C1420" stroke="#00F0FF" stroke-width="1.5" stroke-opacity="0.7"/>

  <!-- Status Bar UI -->
  <text x="100" y="102" fill="#94A3B8" font-family="monospace" font-size="28" font-weight="bold">9:41</text>
  <circle cx="800" cy="95" r="8" fill="#00F0FF" filter="url(#glow)"/>
  <rect x="735" y="86" width="34" height="18" rx="4" fill="none" stroke="#94A3B8" stroke-width="2"/>
  <rect x="738" y="89" width="24" height="12" rx="2" fill="#00F0FF"/>

  <!-- Central Quantum C1 Holographic Graphic -->
  <g transform="translate(450, 750)">
    <!-- Outer Orbit Rings -->
    <circle cx="0" cy="0" r="280" fill="none" stroke="url(#cyanGlow)" stroke-width="3" stroke-dasharray="16 10" filter="url(#glow)"/>
    <circle cx="0" cy="0" r="220" fill="none" stroke="#00F0FF" stroke-width="2" opacity="0.5"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="8 6"/>

    <!-- Center Typography -->
    <text x="0" y="-30" fill="#FFFFFF" font-family="sans-serif" font-size="72" font-weight="900" text-anchor="middle" letter-spacing="8">N O V A</text>
    <text x="0" y="30" fill="#00F0FF" font-family="monospace" font-size="28" font-weight="bold" text-anchor="middle" letter-spacing="4">X1 FLAGSHIP</text>
    <text x="0" y="80" fill="#94A3B8" font-family="monospace" font-size="20" text-anchor="middle" letter-spacing="2">QUANTUM C1 • NEURAL OS</text>

    <!-- Waveform Graphic -->
    <path d="M -240 240 Q -120 160 0 240 T 240 240" fill="none" stroke="#00F0FF" stroke-width="5" filter="url(#glow)"/>
    <path d="M -240 280 Q -120 340 0 280 T 240 280" fill="none" stroke="#0077FF" stroke-width="3" opacity="0.6"/>
  </g>

  <!-- Bottom Navigation Pill Bar -->
  <rect x="350" y="1510" width="200" height="8" rx="4" fill="#FFFFFF" opacity="0.85"/>

  <!-- Glass Reflective Surface Shine -->
  <path d="M 48 48 L 550 48 L 48 1400 Z" fill="url(#glassShine)" opacity="0.75"/>
</svg>
`;

async function run() {
  await sharp(Buffer.from(heroSvg))
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'nova_x1_hero.webp'));
  
  // Also copy to nova_x1_phone.jpg, nova_x1_hero.jpg
  fs.copyFileSync(path.join(outDir, 'nova_x1_hero.webp'), path.join(outDir, 'nova_x1_phone.jpg'));
  fs.copyFileSync(path.join(outDir, 'nova_x1_hero.webp'), path.join(outDir, 'nova_x1_hero.jpg'));
  console.log('SUCCESS: Generated 9:16 aspect ratio nova_x1_hero.webp and updated fallback files!');
}
run();
