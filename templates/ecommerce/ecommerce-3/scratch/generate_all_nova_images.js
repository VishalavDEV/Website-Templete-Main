import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Common SVG Header and Defs Generator
function getSvgWrapper(content) {
  return `
<svg width="1600" height="1600" viewBox="0 0 1600 1600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Dark Studio Environment Gradients -->
    <radialGradient id="bgStudio" cx="50%" cy="38%" r="68%">
      <stop offset="0%" stop-color="#1B1E26"/>
      <stop offset="55%" stop-color="#0E1015"/>
      <stop offset="100%" stop-color="#060709"/>
    </radialGradient>
    <radialGradient id="bgStudioAlt" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="#222733"/>
      <stop offset="50%" stop-color="#10131B"/>
      <stop offset="100%" stop-color="#050608"/>
    </radialGradient>

    <!-- Floor Glows -->
    <radialGradient id="cyanFloorGlow" cx="50%" cy="82%" r="48%">
      <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.14"/>
      <stop offset="60%" stop-color="#00F0FF" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#00F0FF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blueFloorGlow" cx="50%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#0077FF" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#0077FF" stop-opacity="0"/>
    </radialGradient>

    <!-- Metallic Materials -->
    <linearGradient id="titaniumMetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9EA5B3"/>
      <stop offset="20%" stop-color="#484E5B"/>
      <stop offset="50%" stop-color="#1E2128"/>
      <stop offset="80%" stop-color="#343944"/>
      <stop offset="100%" stop-color="#16181F"/>
    </linearGradient>
    <linearGradient id="darkTitanium" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3A3E48"/>
      <stop offset="30%" stop-color="#1E2027"/>
      <stop offset="70%" stop-color="#12141A"/>
      <stop offset="100%" stop-color="#0B0C10"/>
    </linearGradient>
    <linearGradient id="iceBlueMetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A5F3FC"/>
      <stop offset="35%" stop-color="#38BDF8"/>
      <stop offset="70%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
    <linearGradient id="goldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A"/>
      <stop offset="40%" stop-color="#D97706"/>
      <stop offset="80%" stop-color="#78350F"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
    <linearGradient id="matteGraphite" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#282B33"/>
      <stop offset="50%" stop-color="#1A1C22"/>
      <stop offset="100%" stop-color="#111317"/>
    </linearGradient>
    <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35"/>
      <stop offset="30%" stop-color="#FFFFFF" stop-opacity="0.05"/>
      <stop offset="70%" stop-color="#00F0FF" stop-opacity="0.02"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>

    <!-- Screens & Displays -->
    <linearGradient id="novaScreenOled" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A121A"/>
      <stop offset="40%" stop-color="#031C26"/>
      <stop offset="80%" stop-color="#003543"/>
      <stop offset="100%" stop-color="#001824"/>
    </linearGradient>
    <linearGradient id="cyanGlowLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F0FF"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0055FF"/>
    </linearGradient>

    <!-- Drop Shadow Filters -->
    <filter id="pdpShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="40" stdDeviation="45" flood-color="#000000" flood-opacity="0.9"/>
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#00F0FF" flood-opacity="0.12"/>
    </filter>
    <filter id="softGlow">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <filter id="intenseGlow">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="1600" height="1600" fill="url(#bgStudio)"/>
  <ellipse cx="800" cy="1260" rx="640" ry="190" fill="url(#cyanFloorGlow)"/>
  <ellipse cx="800" cy="1330" rx="380" ry="50" fill="#000000" opacity="0.92" filter="blur(24px)"/>

  ${content}
</svg>
`;
}

const imagesToGenerate = [];

// Helper to register image generation
function addImage(filename, svgContent) {
  imagesToGenerate.push({
    filename,
    svg: getSvgWrapper(svgContent)
  });
}

// ==========================================
// 03 — NOVA X1 (8 ANGLES)
// ==========================================
// 1. Front View
addImage('nova_x1_front.webp', `
<g filter="url(#pdpShadow)">
  <!-- Outer Body Frame -->
  <rect x="520" y="240" width="560" height="1120" rx="64" fill="url(#titaniumMetal)" stroke="#5B6273" stroke-width="4"/>
  <!-- Bezel -->
  <rect x="536" y="256" width="528" height="1088" rx="48" fill="#0A0B0E"/>
  <!-- OLED Display -->
  <rect x="546" y="266" width="508" height="1068" rx="40" fill="url(#novaScreenOled)"/>
  <!-- Dynamic Island -->
  <rect x="735" y="282" width="130" height="30" rx="15" fill="#040507" stroke="#1C212B" stroke-width="2"/>
  <circle cx="758" cy="297" r="7" fill="#0C1420" stroke="#00F0FF" stroke-width="1.5" stroke-opacity="0.6"/>
  <!-- UI Elements -->
  <text x="585" y="310" fill="#94A3B8" font-family="monospace" font-size="20" font-weight="bold">9:41</text>
  <circle cx="1015" cy="304" r="6" fill="#00F0FF"/>
  <!-- Quantum Core Graphic -->
  <circle cx="800" cy="620" r="170" fill="none" stroke="url(#cyanGlowLine)" stroke-width="3" stroke-dasharray="10 8" filter="url(#softGlow)"/>
  <circle cx="800" cy="620" r="130" fill="none" stroke="#00F0FF" stroke-width="1.5" opacity="0.5"/>
  <text x="800" y="605" fill="#FFFFFF" font-family="sans-serif" font-size="46" font-weight="900" text-anchor="middle" letter-spacing="6">NOVA X1</text>
  <text x="800" y="645" fill="#00F0FF" font-family="monospace" font-size="18" text-anchor="middle" letter-spacing="3">QUANTUM C1 PROCESSOR</text>
  <path d="M 640 880 Q 720 810 800 880 T 960 880" fill="none" stroke="#00F0FF" stroke-width="4" filter="url(#softGlow)"/>
  <!-- Screen Glass Shine -->
  <path d="M 546 266 L 900 266 L 546 1150 Z" fill="url(#glassReflection)" opacity="0.6"/>
  <rect x="730" y="1305" width="140" height="5" rx="2.5" fill="#FFFFFF" opacity="0.8"/>
</g>
`);

// 2. Rear View
addImage('nova_x1_rear.webp', `
<g filter="url(#pdpShadow)">
  <!-- Outer Body -->
  <rect x="520" y="240" width="560" height="1120" rx="64" fill="url(#matteGraphite)" stroke="#474D5A" stroke-width="4"/>
  <!-- Camera Island -->
  <rect x="565" y="295" width="230" height="340" rx="44" fill="#14171E" stroke="#2D3342" stroke-width="3" filter="url(#softGlow)"/>
  <!-- Camera Lens 1 -->
  <circle cx="680" cy="385" r="70" fill="#0A0B0E" stroke="#5B6273" stroke-width="5"/>
  <circle cx="680" cy="385" r="50" fill="url(#titaniumMetal)"/>
  <circle cx="680" cy="385" r="32" fill="#040A12" stroke="#00F0FF" stroke-width="2"/>
  <circle cx="672" cy="377" r="10" fill="#FFFFFF" opacity="0.7"/>
  <!-- Camera Lens 2 -->
  <circle cx="680" cy="535" r="70" fill="#0A0B0E" stroke="#5B6273" stroke-width="5"/>
  <circle cx="680" cy="535" r="50" fill="url(#titaniumMetal)"/>
  <circle cx="680" cy="535" r="32" fill="#040A12" stroke="#00F0FF" stroke-width="2"/>
  <circle cx="672" cy="527" r="10" fill="#FFFFFF" opacity="0.7"/>
  <!-- Dual LED Flash -->
  <circle cx="745" cy="460" r="14" fill="#FDE68A" filter="url(#softGlow)"/>
  <!-- NOVA Logo -->
  <text x="800" y="980" fill="#5A6273" font-family="sans-serif" font-size="36" font-weight="900" text-anchor="middle" letter-spacing="12">N O V A</text>
</g>
`);

// 3. 3/4 Angle
addImage('nova_x1_angle.webp', `
<g filter="url(#pdpShadow)" transform="rotate(-12 800 800)">
  <!-- 3D Perspective Phone Body -->
  <polygon points="560,220 980,290 980,1350 560,1280" fill="url(#darkTitanium)" stroke="#5B6273" stroke-width="4"/>
  <!-- Side Chamfer -->
  <polygon points="540,230 560,220 560,1280 540,1290" fill="url(#iceBlueMetal)"/>
  <!-- Screen Area -->
  <polygon points="580,245 960,308 960,1330 580,1265" fill="url(#novaScreenOled)"/>
  <!-- Camera Island Profile -->
  <polygon points="600,280 780,310 780,560 600,530" fill="#14171E" stroke="#00F0FF" stroke-width="2"/>
  <circle cx="690" cy="370" r="45" fill="#040A12" stroke="#8E94A0" stroke-width="4"/>
  <circle cx="690" cy="470" r="45" fill="#040A12" stroke="#8E94A0" stroke-width="4"/>
  <!-- Display UI Glow -->
  <path d="M 620 650 Q 770 620 920 680" stroke="#00F0FF" stroke-width="5" fill="none" filter="url(#softGlow)"/>
</g>
`);

// 4. Side Profile
addImage('nova_x1_side.webp', `
<g filter="url(#pdpShadow)">
  <!-- Ultra-thin Side Profile Bar -->
  <rect x="770" y="240" width="60" height="1120" rx="30" fill="url(#titaniumMetal)" stroke="#5B6273" stroke-width="3"/>
  <!-- Ice Blue Accent Strip -->
  <rect x="796" y="240" width="8" height="1120" fill="url(#iceBlueMetal)" opacity="0.9" filter="url(#softGlow)"/>
  <!-- Buttons -->
  <rect x="760" y="440" width="12" height="140" rx="6" fill="#2D3342" stroke="#5B6273" stroke-width="2"/>
  <rect x="760" y="640" width="12" height="90" rx="6" fill="#2D3342" stroke="#5B6273" stroke-width="2"/>
  <rect x="760" y="750" width="12" height="90" rx="6" fill="#2D3342" stroke="#5B6273" stroke-width="2"/>
  <!-- Camera Bump Side Ridge -->
  <rect x="828" y="320" width="22" height="280" rx="8" fill="#14171E" stroke="#00F0FF" stroke-width="2"/>
</g>
`);

// 5. Camera Close-up
addImage('nova_x1_camera.webp', `
<g filter="url(#pdpShadow)">
  <!-- Macro Camera Housing -->
  <rect x="300" y="300" width="1000" height="1000" rx="120" fill="url(#matteGraphite)" stroke="#3E4452" stroke-width="6"/>
  <!-- Metallic Bezel Ring -->
  <circle cx="800" cy="800" r="360" fill="url(#darkTitanium)" stroke="url(#titaniumMetal)" stroke-width="18"/>
  <circle cx="800" cy="800" r="310" fill="#07090D" stroke="#00F0FF" stroke-width="4"/>
  <!-- Lens Glass Optics -->
  <circle cx="800" cy="800" r="240" fill="url(#novaScreenOled)" stroke="#1A2332" stroke-width="8"/>
  <circle cx="800" cy="800" r="160" fill="#02050A"/>
  <!-- Lens Aperture Blades -->
  <circle cx="800" cy="800" r="100" fill="none" stroke="#00F0FF" stroke-width="3" stroke-dasharray="24 12" filter="url(#softGlow)"/>
  <circle cx="750" cy="750" r="45" fill="#FFFFFF" opacity="0.65" filter="blur(6px)"/>
  <!-- Text Ring -->
  <text x="800" y="470" fill="#8E94A0" font-family="monospace" font-size="28" font-weight="bold" text-anchor="middle" letter-spacing="4">NOVA OPTICS • 50MP DUAL-PIXEL • f/1.6</text>
</g>
`);

// 6. Lifestyle Image
addImage('nova_x1_lifestyle.webp', `
<!-- Dark Walnut Desk Table Surface -->
<rect x="0" y="900" width="1600" height="700" fill="#120E0C"/>
<!-- Ceramic Coffee Mug -->
<ellipse cx="380" cy="720" rx="140" ry="140" fill="#1C1E24" stroke="#333742" stroke-width="6"/>
<ellipse cx="380" cy="720" rx="110" ry="110" fill="#2E1C14"/>
<!-- Phone Resting Slanted on Table -->
<g transform="rotate(25 900 850)" filter="url(#pdpShadow)">
  <rect x="700" y="350" width="480" height="960" rx="52" fill="url(#matteGraphite)" stroke="#00F0FF" stroke-width="3"/>
  <rect x="716" y="366" width="448" height="928" rx="40" fill="url(#novaScreenOled)"/>
  <text x="940" y="800" fill="#FFFFFF" font-family="sans-serif" font-size="38" font-weight="800" text-anchor="middle">NOVA OS</text>
</g>
`);

// 7. Ports Detail
addImage('nova_x1_detail.webp', `
<g filter="url(#pdpShadow)">
  <!-- Bottom Edge Close-up -->
  <rect x="250" y="600" width="1100" height="400" rx="60" fill="url(#titaniumMetal)" stroke="#5B6273" stroke-width="6"/>
  <!-- USB-C Port -->
  <rect x="700" y="750" width="200" height="100" rx="50" fill="#08090C" stroke="#00F0FF" stroke-width="4" filter="url(#softGlow)"/>
  <rect x="730" y="785" width="140" height="30" rx="15" fill="url(#iceBlueMetal)"/>
  <!-- Speaker Micro-Grills Left & Right -->
  <circle cx="450" cy="800" r="14" fill="#090A0D"/>
  <circle cx="500" cy="800" r="14" fill="#090A0D"/>
  <circle cx="550" cy="800" r="14" fill="#090A0D"/>
  <circle cx="600" cy="800" r="14" fill="#090A0D"/>
  <circle cx="1000" cy="800" r="14" fill="#090A0D"/>
  <circle cx="1050" cy="800" r="14" fill="#090A0D"/>
  <circle cx="1100" cy="800" r="14" fill="#090A0D"/>
  <circle cx="1150" cy="800" r="14" fill="#090A0D"/>
  <!-- SIM Tray Eject Hole -->
  <circle cx="340" cy="800" r="8" fill="#08090C"/>
</g>
`);

// 8. Packaging Image
addImage('nova_x1_packaging.webp', `
<g filter="url(#pdpShadow)">
  <!-- Matte Black Premium Box -->
  <rect x="420" y="320" width="760" height="960" rx="36" fill="#121419" stroke="#2B303C" stroke-width="5"/>
  <!-- Cyan Foil Embossed NOVA Logo -->
  <text x="800" y="760" fill="#00F0FF" font-family="sans-serif" font-size="64" font-weight="900" text-anchor="middle" letter-spacing="16" filter="url(#softGlow)">N O V A</text>
  <text x="800" y="830" fill="#8E94A0" font-family="monospace" font-size="24" text-anchor="middle" letter-spacing="6">X1 FLAGSHIP PACKAGING</text>
  <!-- Box Lid Bevel Line -->
  <line x1="420" y1="620" x2="1180" y2="620" stroke="#00F0FF" stroke-width="2" stroke-opacity="0.5"/>
</g>
`);

// ==========================================
// 04 — NOVA X1 PRO (6 ANGLES)
// ==========================================
addImage('nova_x1_pro_front.webp', `
<g filter="url(#pdpShadow)">
  <!-- Curved OLED Screen Frame -->
  <rect x="510" y="230" width="580" height="1140" rx="70" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="3"/>
  <rect x="524" y="244" width="552" height="1112" rx="56" fill="#07080A"/>
  <rect x="532" y="252" width="536" height="1096" rx="48" fill="url(#novaScreenOled)"/>
  <!-- Pill Notch -->
  <rect x="720" y="270" width="160" height="34" rx="17" fill="#030405"/>
  <!-- Gold & Cyan Wallpaper Accent -->
  <circle cx="800" cy="620" r="190" fill="none" stroke="url(#goldMetal)" stroke-width="4" stroke-dasharray="16 10"/>
  <text x="800" y="605" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" text-anchor="middle" letter-spacing="4">NOVA X1 PRO</text>
  <text x="800" y="650" fill="#FDE68A" font-family="monospace" font-size="18" text-anchor="middle" letter-spacing="3">108MP PERISCOPE OPTICS</text>
</g>
`);

addImage('nova_x1_pro_rear.webp', `
<g filter="url(#pdpShadow)">
  <!-- Ceramic Dark Black Back -->
  <rect x="510" y="230" width="580" height="1140" rx="70" fill="#0D0E12" stroke="#262A36" stroke-width="4"/>
  <!-- Large Triple Periscope Camera Island -->
  <rect x="550" y="280" width="500" height="380" rx="50" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="3"/>
  <!-- Square Periscope Lens -->
  <rect x="590" y="320" width="110" height="110" rx="20" fill="#030508" stroke="#00F0FF" stroke-width="3"/>
  <!-- Dual Ultra Large Lenses -->
  <circle cx="850" cy="375" r="65" fill="#030508" stroke="url(#titaniumMetal)" stroke-width="6"/>
  <circle cx="850" cy="535" r="65" fill="#030508" stroke="url(#titaniumMetal)" stroke-width="6"/>
  <text x="800" y="980" fill="#00F0FF" font-family="sans-serif" font-size="38" font-weight="900" text-anchor="middle" letter-spacing="14">N O V A  P R O</text>
</g>
`);

addImage('nova_x1_pro_angle.webp', `
<g filter="url(#pdpShadow)" transform="rotate(-15 800 800)">
  <polygon points="540,200 990,270 990,1360 540,1290" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="3"/>
  <polygon points="560,225 970,288 970,1340 560,1275" fill="url(#novaScreenOled)"/>
  <!-- Camera Bump profile -->
  <polygon points="580,260 820,300 820,580 580,540" fill="#12151C" stroke="#FDE68A" stroke-width="2"/>
</g>
`);

addImage('nova_x1_pro_camera.webp', `
<g filter="url(#pdpShadow)">
  <rect x="250" y="250" width="1100" height="1100" rx="100" fill="#0E1015" stroke="#00F0FF" stroke-width="5"/>
  <!-- Periscope Prism -->
  <rect x="360" y="360" width="380" height="380" rx="40" fill="#030509" stroke="url(#titaniumMetal)" stroke-width="12"/>
  <rect x="440" y="440" width="220" height="220" rx="20" fill="url(#novaScreenOled)" stroke="#00F0FF" stroke-width="4"/>
  <!-- Large Telephoto Lens -->
  <circle cx="950" cy="550" r="180" fill="#030509" stroke="url(#titaniumMetal)" stroke-width="16"/>
  <circle cx="950" cy="550" r="110" fill="url(#novaScreenOled)"/>
  <text x="800" y="1180" fill="#FDE68A" font-family="monospace" font-size="28" font-weight="bold" text-anchor="middle">PERISCOPE 5X OPTICAL • 108 MP ULTRALENS</text>
</g>
`);

addImage('nova_x1_pro_lifestyle.webp', `
<rect x="0" y="850" width="1600" height="750" fill="#090B0E"/>
<g transform="rotate(18 850 850)" filter="url(#pdpShadow)">
  <rect x="650" y="300" width="520" height="1020" rx="60" fill="#0D0E12" stroke="#00F0FF" stroke-width="4"/>
  <rect x="668" y="318" width="484" height="984" rx="46" fill="url(#novaScreenOled)"/>
</g>
`);

addImage('nova_x1_pro_detail.webp', `
<g filter="url(#pdpShadow)">
  <rect x="200" y="650" width="1200" height="300" rx="50" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="4"/>
  <rect x="650" y="730" width="300" height="140" rx="70" fill="#050608" stroke="#00F0FF" stroke-width="3"/>
  <circle cx="400" cy="800" r="20" fill="#00F0FF" filter="url(#softGlow)"/>
  <circle cx="1200" cy="800" r="20" fill="#00F0FF" filter="url(#softGlow)"/>
</g>
`);

// ==========================================
// 05 — NOVA EDGE (4 ANGLES)
// ==========================================
addImage('nova_edge_front.webp', `
<g filter="url(#pdpShadow)">
  <rect x="550" y="260" width="500" height="1080" rx="56" fill="url(#titaniumMetal)" stroke="#3A404D" stroke-width="3"/>
  <rect x="564" y="274" width="472" height="1052" rx="42" fill="url(#novaScreenOled)"/>
  <circle cx="800" cy="300" r="10" fill="#050608" stroke="#00F0FF" stroke-width="1.5"/>
  <text x="800" y="640" fill="#FFFFFF" font-family="sans-serif" font-size="42" font-weight="900" text-anchor="middle">NOVA EDGE</text>
</g>
`);

addImage('nova_edge_rear.webp', `
<g filter="url(#pdpShadow)">
  <rect x="550" y="260" width="500" height="1080" rx="56" fill="#1C1F26" stroke="#3A404D" stroke-width="3"/>
  <rect x="585" y="300" width="140" height="280" rx="36" fill="#111318" stroke="#00F0FF" stroke-width="2"/>
  <circle cx="655" cy="360" r="45" fill="#050608" stroke="#8E94A0" stroke-width="4"/>
  <circle cx="655" cy="480" r="45" fill="#050608" stroke="#8E94A0" stroke-width="4"/>
</g>
`);

addImage('nova_edge_angle.webp', `
<g filter="url(#pdpShadow)" transform="rotate(-10 800 800)">
  <polygon points="580,240 960,300 960,1320 580,1260" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="2"/>
</g>
`);

addImage('nova_edge_detail.webp', `
<g filter="url(#pdpShadow)">
  <rect x="760" y="240" width="80" height="1120" rx="40" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="3"/>
</g>
`);

// ==========================================
// 06 — NOVA BOOK AIR (8 ANGLES)
// ==========================================
addImage('nova_book_air_open.webp', `
<g filter="url(#pdpShadow)">
  <!-- Laptop Open Display Shell -->
  <rect x="300" y="220" width="1000" height="660" rx="28" fill="url(#titaniumMetal)" stroke="#484E5B" stroke-width="4"/>
  <rect x="320" y="240" width="960" height="620" rx="16" fill="url(#novaScreenOled)"/>
  <!-- Display Graphic Wallpaper -->
  <circle cx="800" cy="550" r="150" fill="none" stroke="#00F0FF" stroke-width="3" stroke-dasharray="12 6" filter="url(#softGlow)"/>
  <text x="800" y="560" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" text-anchor="middle">NOVA BOOK AIR</text>
  <!-- Laptop Base Keyboard Deck -->
  <polygon points="200,900 1400,900 1480,1300 120,1300" fill="url(#darkTitanium)" stroke="#343944" stroke-width="4"/>
  <!-- Backlit Keyboard Well -->
  <polygon points="340,940 1260,940 1310,1140 290,1140" fill="#0B0C0E" stroke="#00F0FF" stroke-width="1.5"/>
  <!-- Trackpad -->
  <polygon points="660,1170 940,1170 960,1270 640,1270" fill="#181B22" stroke="#3A404D" stroke-width="2"/>
</g>
`);

addImage('nova_book_air_closed.webp', `
<g filter="url(#pdpShadow)">
  <rect x="300" y="450" width="1000" height="700" rx="36" fill="url(#titaniumMetal)" stroke="#5B6273" stroke-width="5"/>
  <text x="800" y="820" fill="#00F0FF" font-family="sans-serif" font-size="56" font-weight="900" text-anchor="middle" letter-spacing="14" filter="url(#softGlow)">N O V A</text>
</g>
`);

addImage('nova_book_air_angle.webp', `
<g filter="url(#pdpShadow)" transform="rotate(-12 800 800)">
  <polygon points="320,240 1020,300 1020,860 320,800" fill="url(#titaniumMetal)"/>
  <polygon points="220,880 1340,960 1400,1280 160,1200" fill="url(#darkTitanium)"/>
</g>
`);

addImage('nova_book_air_keyboard.webp', `
<g filter="url(#pdpShadow)">
  <rect x="200" y="400" width="1200" height="800" rx="40" fill="#12141A" stroke="#00F0FF" stroke-width="3"/>
  <rect x="280" y="460" width="1040" height="420" rx="20" fill="#07080A"/>
  <!-- Key Grid Representation -->
  <rect x="320" y="500" width="960" height="60" rx="8" fill="#1C1F28" stroke="#00F0FF" stroke-width="1"/>
  <rect x="320" y="580" width="960" height="60" rx="8" fill="#1C1F28" stroke="#00F0FF" stroke-width="1"/>
  <rect x="320" y="660" width="960" height="60" rx="8" fill="#1C1F28" stroke="#00F0FF" stroke-width="1"/>
  <rect x="320" y="740" width="960" height="60" rx="8" fill="#1C1F28" stroke="#00F0FF" stroke-width="1"/>
  <rect x="580" y="920" width="440" height="220" rx="16" fill="#181B24" stroke="#3A404D" stroke-width="2"/>
</g>
`);

addImage('nova_book_air_display.webp', `
<g filter="url(#pdpShadow)">
  <rect x="250" y="300" width="1100" height="740" rx="30" fill="url(#novaScreenOled)" stroke="#00F0FF" stroke-width="4"/>
  <text x="800" y="680" fill="#FFFFFF" font-family="sans-serif" font-size="52" font-weight="900" text-anchor="middle">3K MINI-LED DISPLAY</text>
</g>
`);

addImage('nova_book_air_side.webp', `
<g filter="url(#pdpShadow)">
  <polygon points="200,780 1400,810 1420,840 180,840" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="2"/>
</g>
`);

addImage('nova_book_air_ports.webp', `
<g filter="url(#pdpShadow)">
  <rect x="300" y="650" width="1000" height="300" rx="40" fill="url(#darkTitanium)" stroke="#5B6273" stroke-width="4"/>
  <rect x="450" y="760" width="100" height="80" rx="20" fill="#040507" stroke="#00F0FF" stroke-width="3"/>
  <rect x="600" y="760" width="100" height="80" rx="20" fill="#040507" stroke="#00F0FF" stroke-width="3"/>
  <circle cx="1050" cy="800" r="35" fill="#040507" stroke="#8E94A0" stroke-width="3"/>
</g>
`);

addImage('nova_book_air_lifestyle.webp', `
<rect x="0" y="900" width="1600" height="700" fill="#100E0D"/>
<g filter="url(#pdpShadow)">
  <rect x="380" y="350" width="840" height="540" rx="24" fill="url(#novaScreenOled)"/>
  <polygon points="300,900 1300,900 1360,1180 240,1180" fill="url(#darkTitanium)"/>
</g>
`);

// ==========================================
// 07 — NOVA BOOK PRO (5 ANGLES)
// ==========================================
addImage('nova_book_pro_open.webp', `
<g filter="url(#pdpShadow)">
  <rect x="260" y="180" width="1080" height="720" rx="32" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/>
  <rect x="284" y="204" width="1032" height="672" rx="20" fill="url(#novaScreenOled)"/>
  <text x="800" y="550" fill="#FFFFFF" font-family="sans-serif" font-size="48" font-weight="900" text-anchor="middle">NOVA BOOK PRO</text>
  <polygon points="160,920 1440,920 1520,1360 80,1360" fill="#12141A" stroke="#3A404D" stroke-width="4"/>
</g>
`);

addImage('nova_book_pro_closed.webp', `
<g filter="url(#pdpShadow)">
  <rect x="260" y="420" width="1080" height="760" rx="40" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/>
  <text x="800" y="800" fill="#00F0FF" font-family="sans-serif" font-size="60" font-weight="900" text-anchor="middle" letter-spacing="16">PRO</text>
</g>
`);

addImage('nova_book_pro_angle.webp', `
<g filter="url(#pdpShadow)" transform="rotate(-10 800 800)">
  <polygon points="280,200 1080,270 1080,880 280,810" fill="url(#darkTitanium)"/>
  <polygon points="160,900 1400,990 1460,1340 100,1250" fill="#12141A"/>
</g>
`);

addImage('nova_book_pro_detail.webp', `
<g filter="url(#pdpShadow)">
  <rect x="250" y="650" width="1100" height="300" rx="40" fill="url(#darkTitanium)"/>
  <rect x="400" y="750" width="140" height="100" rx="20" fill="#00F0FF" opacity="0.8"/>
</g>
`);

addImage('nova_book_pro_lifestyle.webp', `
<rect x="0" y="880" width="1600" height="720" fill="#08090C"/>
<g filter="url(#pdpShadow)">
  <rect x="300" y="300" width="1000" height="600" rx="28" fill="url(#novaScreenOled)"/>
</g>
`);

// ==========================================
// 08 — NOVA TAB 12 (6 ANGLES)
// ==========================================
addImage('nova_tab_12_front.webp', `
<g filter="url(#pdpShadow)">
  <rect x="360" y="320" width="880" height="960" rx="48" fill="url(#titaniumMetal)" stroke="#3A404D" stroke-width="4"/>
  <rect x="378" y="338" width="844" height="924" rx="36" fill="url(#novaScreenOled)"/>
  <text x="800" y="800" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" text-anchor="middle">NOVA TAB 12</text>
</g>
`);

addImage('nova_tab_12_rear.webp', `
<g filter="url(#pdpShadow)">
  <rect x="360" y="320" width="880" height="960" rx="48" fill="#1A1C22" stroke="#3A404D" stroke-width="4"/>
  <!-- Magnetic Stylus Attachment -->
  <rect x="1200" y="440" width="18" height="720" rx="9" fill="url(#iceBlueMetal)" filter="url(#softGlow)"/>
</g>
`);

addImage('nova_tab_12_side.webp', `
<g filter="url(#pdpShadow)">
  <rect x="780" y="320" width="40" height="960" rx="20" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="2"/>
</g>
`);

addImage('nova_tab_12_angle.webp', `
<g filter="url(#pdpShadow)" transform="rotate(-12 800 800)">
  <polygon points="400,300 920,350 920,1260 400,1210" fill="url(#darkTitanium)"/>
</g>
`);

addImage('nova_tab_12_detail.webp', `
<g filter="url(#pdpShadow)">
  <rect x="300" y="400" width="1000" height="800" rx="40" fill="url(#novaScreenOled)"/>
  <line x1="450" y1="900" x2="1150" y2="500" stroke="#00F0FF" stroke-width="6" filter="url(#softGlow)"/>
</g>
`);

addImage('nova_tab_12_lifestyle.webp', `
<rect x="0" y="900" width="1600" height="700" fill="#14110F"/>
<g filter="url(#pdpShadow)">
  <rect x="400" y="350" width="800" height="900" rx="40" fill="url(#novaScreenOled)"/>
</g>
`);

// ==========================================
// 09 — NOVA BUDS (6 ANGLES)
// ==========================================
addImage('nova_buds_open.webp', `
<g filter="url(#pdpShadow)">
  <!-- Open Capsule Charging Case -->
  <ellipse cx="800" cy="850" rx="340" ry="240" fill="url(#darkTitanium)" stroke="#5B6273" stroke-width="5"/>
  <ellipse cx="800" cy="740" rx="300" ry="140" fill="#0A0B0E" stroke="#00F0FF" stroke-width="2"/>
  <!-- Earbud Left -->
  <circle cx="700" cy="740" r="55" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="3"/>
  <!-- Earbud Right -->
  <circle cx="900" cy="740" r="55" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="3"/>
  <!-- LED Battery Light -->
  <circle cx="800" cy="980" r="10" fill="#00F0FF" filter="url(#softGlow)"/>
</g>
`);

addImage('nova_buds_closed.webp', `
<g filter="url(#pdpShadow)">
  <ellipse cx="800" cy="800" rx="360" ry="260" fill="url(#darkTitanium)" stroke="#5B6273" stroke-width="5"/>
  <circle cx="800" cy="940" r="10" fill="#00F0FF" filter="url(#softGlow)"/>
</g>
`);

addImage('nova_buds_earbuds.webp', `
<g filter="url(#pdpShadow)">
  <circle cx="600" cy="800" r="120" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="4"/>
  <circle cx="1000" cy="800" r="120" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="4"/>
</g>
`);

addImage('nova_buds_angle.webp', `
<g filter="url(#pdpShadow)" transform="rotate(-15 800 800)">
  <ellipse cx="800" cy="800" rx="340" ry="220" fill="url(#darkTitanium)"/>
</g>
`);

addImage('nova_buds_detail.webp', `
<g filter="url(#pdpShadow)">
  <circle cx="800" cy="800" r="320" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="8"/>
  <circle cx="800" cy="800" r="220" fill="#08090C"/>
</g>
`);

addImage('nova_buds_lifestyle.webp', `
<rect x="0" y="850" width="1600" height="750" fill="#0C0D10"/>
<g filter="url(#pdpShadow)">
  <ellipse cx="800" cy="800" rx="320" ry="220" fill="url(#darkTitanium)"/>
</g>
`);

// ==========================================
// 10 — NOVA BUDS PRO (5 ANGLES)
// ==========================================
addImage('nova_buds_pro_open.webp', `
<g filter="url(#pdpShadow)">
  <!-- Translucent Open Case -->
  <rect x="460" y="500" width="680" height="600" rx="100" fill="#121620" fill-opacity="0.85" stroke="#00F0FF" stroke-width="4"/>
  <!-- Built in OLED Meter -->
  <rect x="680" y="940" width="240" height="80" rx="20" fill="#05070A" stroke="#00F0FF" stroke-width="2"/>
  <text x="800" y="995" fill="#00F0FF" font-family="monospace" font-size="36" font-weight="bold" text-anchor="middle" filter="url(#softGlow)">98%</text>
  <!-- Planarmagnetic Earbuds -->
  <circle cx="640" cy="680" r="80" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="4"/>
  <circle cx="960" cy="680" r="80" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="4"/>
</g>
`);

addImage('nova_buds_pro_closed.webp', `
<g filter="url(#pdpShadow)">
  <rect x="460" y="520" width="680" height="560" rx="100" fill="#121620" fill-opacity="0.9" stroke="#00F0FF" stroke-width="4"/>
  <text x="800" y="820" fill="#00F0FF" font-family="monospace" font-size="44" font-weight="bold" text-anchor="middle" filter="url(#softGlow)">98%</text>
</g>
`);

addImage('nova_buds_pro_earbuds.webp', `
<g filter="url(#pdpShadow)">
  <circle cx="580" cy="800" r="140" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="5"/>
  <circle cx="1020" cy="800" r="140" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="5"/>
</g>
`);

addImage('nova_buds_pro_detail.webp', `
<g filter="url(#pdpShadow)">
  <rect x="400" y="600" width="800" height="400" rx="60" fill="#05070A" stroke="#00F0FF" stroke-width="4"/>
  <text x="800" y="820" fill="#00F0FF" font-family="monospace" font-size="64" font-weight="bold" text-anchor="middle">50dB ANC</text>
</g>
`);

addImage('nova_buds_pro_lifestyle.webp', `
<rect x="0" y="850" width="1600" height="750" fill="#0A0C10"/>
<g filter="url(#pdpShadow)">
  <rect x="500" y="550" width="600" height="500" rx="80" fill="#121620" stroke="#00F0FF" stroke-width="3"/>
</g>
`);

// ==========================================
// 11 — NOVA MAX (5 ANGLES)
// ==========================================
addImage('nova_max_front.webp', `
<g filter="url(#pdpShadow)">
  <!-- Mesh Headband Arch -->
  <path d="M 450 750 C 450 350 1150 350 1150 750" fill="none" stroke="url(#titaniumMetal)" stroke-width="36" stroke-linecap="round"/>
  <!-- Left Earcup -->
  <rect x="360" y="700" width="180" height="360" rx="90" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/>
  <!-- Right Earcup -->
  <rect x="1060" y="700" width="180" height="360" rx="90" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/>
</g>
`);

addImage('nova_max_side.webp', `
<g filter="url(#pdpShadow)">
  <rect x="620" y="550" width="360" height="500" rx="180" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="5"/>
  <circle cx="800" cy="800" r="100" fill="#060709" stroke="#5B6273" stroke-width="4"/>
  <!-- Digital Crown Dial -->
  <rect x="960" y="680" width="30" height="60" rx="10" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="2"/>
</g>
`);

addImage('nova_max_angle.webp', `
<g filter="url(#pdpShadow)" transform="rotate(-12 800 800)">
  <path d="M 480 700 C 480 380 1120 380 1120 700" fill="none" stroke="url(#titaniumMetal)" stroke-width="32"/>
  <rect x="400" y="660" width="170" height="340" rx="85" fill="url(#darkTitanium)"/>
</g>
`);

addImage('nova_max_detail.webp', `
<g filter="url(#pdpShadow)">
  <rect x="450" y="450" width="700" height="700" rx="350" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="6"/>
  <circle cx="800" cy="800" r="220" fill="#06070A"/>
</g>
`);

addImage('nova_max_lifestyle.webp', `
<rect x="0" y="900" width="1600" height="700" fill="#0D0E12"/>
<g filter="url(#pdpShadow)">
  <rect x="550" y="500" width="500" height="600" rx="60" fill="url(#darkTitanium)"/>
</g>
`);

// ==========================================
// 12 — NOVA WATCH X (6 ANGLES)
// ==========================================
addImage('nova_watch_x_front.webp', `
<g filter="url(#pdpShadow)">
  <!-- Straps Top & Bottom -->
  <rect x="680" y="160" width="240" height="420" fill="#1C1F28" stroke="#3A404D" stroke-width="4"/>
  <rect x="680" y="1020" width="240" height="420" fill="#1C1F28" stroke="#3A404D" stroke-width="4"/>
  <!-- Curved Sapphire Titanium Case -->
  <rect x="580" y="460" width="440" height="680" rx="140" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="4"/>
  <!-- OLED Dial Display -->
  <rect x="610" y="490" width="380" height="620" rx="110" fill="url(#novaScreenOled)"/>
  <!-- ECG Dial Ring -->
  <circle cx="800" cy="800" r="160" fill="none" stroke="#00F0FF" stroke-width="4" stroke-dasharray="12 8" filter="url(#softGlow)"/>
  <text x="800" y="780" fill="#FFFFFF" font-family="sans-serif" font-size="48" font-weight="900" text-anchor="middle">10:09</text>
  <text x="800" y="830" fill="#00F0FF" font-family="monospace" font-size="20" text-anchor="middle">BPM 72 • ECG OK</text>
  <!-- Digital Crown Button -->
  <rect x="1015" y="700" width="25" height="120" rx="12" fill="url(#iceBlueMetal)"/>
</g>
`);

addImage('nova_watch_x_side.webp', `
<g filter="url(#pdpShadow)">
  <rect x="720" y="360" width="160" height="880" rx="80" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="3"/>
  <rect x="870" y="720" width="40" height="160" rx="16" fill="url(#iceBlueMetal)"/>
</g>
`);

addImage('nova_watch_x_rear.webp', `
<g filter="url(#pdpShadow)">
  <rect x="580" y="460" width="440" height="680" rx="140" fill="#14161C" stroke="#5B6273" stroke-width="4"/>
  <!-- Bio-Sens PPG Lens Ring -->
  <circle cx="800" cy="800" r="150" fill="#060709" stroke="#00F0FF" stroke-width="4"/>
  <circle cx="760" cy="760" r="25" fill="#00F0FF" filter="url(#softGlow)"/>
  <circle cx="840" cy="760" r="25" fill="#00F0FF" filter="url(#softGlow)"/>
  <circle cx="800" cy="840" r="25" fill="#00F0FF" filter="url(#softGlow)"/>
</g>
`);

addImage('nova_watch_x_detail.webp', `
<g filter="url(#pdpShadow)">
  <rect x="450" y="300" width="700" height="1000" rx="100" fill="#1A1D26" stroke="#00F0FF" stroke-width="5"/>
</g>
`);

addImage('nova_watch_x_lifestyle.webp', `
<rect x="0" y="850" width="1600" height="750" fill="#090A0D"/>
<g filter="url(#pdpShadow)">
  <rect x="620" y="450" width="360" height="700" rx="120" fill="url(#titaniumMetal)"/>
</g>
`);

addImage('nova_watch_x_charging.webp', `
<g filter="url(#pdpShadow)">
  <!-- Magnetic Charging Puck -->
  <circle cx="800" cy="800" r="280" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="6" filter="url(#softGlow)"/>
  <!-- Watch Body On Top -->
  <rect x="640" y="560" width="320" height="480" rx="80" fill="url(#titaniumMetal)"/>
</g>
`);

// ==========================================
// 13 — NOVA WATCH PRO (4 ANGLES)
// ==========================================
addImage('nova_watch_pro_front.webp', `
<g filter="url(#pdpShadow)">
  <rect x="540" y="420" width="520" height="760" rx="160" fill="url(#darkTitanium)" stroke="#FDE68A" stroke-width="5"/>
  <rect x="575" y="455" width="450" height="690" rx="125" fill="url(#novaScreenOled)"/>
  <text x="800" y="780" fill="#FDE68A" font-family="sans-serif" font-size="52" font-weight="900" text-anchor="middle">3000 NITS</text>
  <rect x="1055" y="720" width="30" height="160" rx="15" fill="#D97706"/>
</g>
`);

addImage('nova_watch_pro_side.webp', `
<g filter="url(#pdpShadow)">
  <rect x="700" y="340" width="200" height="920" rx="90" fill="url(#darkTitanium)" stroke="#FDE68A" stroke-width="4"/>
</g>
`);

addImage('nova_watch_pro_angle.webp', `
<g filter="url(#pdpShadow)" transform="rotate(-15 800 800)">
  <rect x="560" y="440" width="480" height="720" rx="140" fill="url(#darkTitanium)"/>
</g>
`);

addImage('nova_watch_pro_lifestyle.webp', `
<rect x="0" y="850" width="1600" height="750" fill="#0D0E12"/>
<g filter="url(#pdpShadow)">
  <rect x="560" y="440" width="480" height="720" rx="140" fill="url(#darkTitanium)"/>
</g>
`);

// ==========================================
// 14 — NOVA CORE / CORE PC (5 ANGLES)
// ==========================================
addImage('nova_core_hero.webp', `
<g filter="url(#pdpShadow)">
  <!-- Anodized Black Glass Tower Chassis -->
  <rect x="520" y="280" width="560" height="1040" rx="60" fill="#0A0B0E" stroke="#00F0FF" stroke-width="4"/>
  <!-- Internal Liquid Loop Glow Line -->
  <path d="M 620 400 L 980 400 L 980 1160 L 620 1160 Z" fill="none" stroke="#00F0FF" stroke-width="4" stroke-dasharray="20 10" filter="url(#softGlow)"/>
  <text x="800" y="780" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" text-anchor="middle">NOVA CORE</text>
</g>
`);

addImage('nova_core_front.webp', `
<g filter="url(#pdpShadow)">
  <rect x="560" y="280" width="480" height="1040" rx="50" fill="#12141A" stroke="#3A404D" stroke-width="4"/>
  <circle cx="800" cy="380" r="16" fill="#00F0FF" filter="url(#softGlow)"/>
</g>
`);

addImage('nova_core_back.webp', `
<g filter="url(#pdpShadow)">
  <rect x="560" y="280" width="480" height="1040" rx="50" fill="#12141A" stroke="#3A404D" stroke-width="4"/>
  <rect x="700" y="400" width="200" height="400" rx="20" fill="#050608"/>
</g>
`);

addImage('nova_core_ports.webp', `
<g filter="url(#pdpShadow)">
  <rect x="400" y="500" width="800" height="600" rx="40" fill="#0A0B0E" stroke="#00F0FF" stroke-width="4"/>
</g>
`);

addImage('nova_core_lifestyle.webp', `
<rect x="0" y="900" width="1600" height="700" fill="#0B0D11"/>
<g filter="url(#pdpShadow)">
  <rect x="540" y="320" width="520" height="960" rx="50" fill="#0A0B0E"/>
</g>
`);

// ==========================================
// 15 — NOVA GAMEPAD (5 ANGLES)
// ==========================================
addImage('nova_gamepad_front.webp', `
<g filter="url(#pdpShadow)">
  <!-- Ergonomic Curved Controller Body -->
  <path d="M 380 950 C 320 620 480 440 800 440 C 1120 440 1280 620 1220 950 C 1180 1150 1020 1180 940 1040 L 860 920 L 740 920 L 660 1040 C 580 1180 420 1150 380 950 Z" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/>
  <!-- Left Hall Effect Thumbstick -->
  <circle cx="560" cy="660" r="85" fill="#08090C" stroke="#00F0FF" stroke-width="4"/>
  <circle cx="560" cy="660" r="60" fill="url(#titaniumMetal)"/>
  <!-- Right Hall Effect Thumbstick -->
  <circle cx="940" cy="800" r="85" fill="#08090C" stroke="#00F0FF" stroke-width="4"/>
  <circle cx="940" cy="800" r="60" fill="url(#titaniumMetal)"/>
  <!-- D-Pad -->
  <path d="M 660 760 L 660 840 L 580 840 L 580 880 L 660 880 L 660 960 L 700 960 L 700 880 L 780 880 L 780 840 L 700 840 L 700 760 Z" fill="#1C1F28" stroke="#5B6273" stroke-width="2"/>
  <!-- ABXY Buttons -->
  <circle cx="1040" cy="600" r="30" fill="#1C1F28" stroke="#00F0FF" stroke-width="2"/>
  <circle cx="960" cy="660" r="30" fill="#1C1F28" stroke="#00F0FF" stroke-width="2"/>
  <circle cx="1120" cy="660" r="30" fill="#1C1F28" stroke="#00F0FF" stroke-width="2"/>
  <circle cx="1040" cy="720" r="30" fill="#1C1F28" stroke="#00F0FF" stroke-width="2"/>
  <!-- Center Status LED Ring -->
  <circle cx="800" cy="580" r="40" fill="none" stroke="#00F0FF" stroke-width="4" filter="url(#softGlow)"/>
</g>
`);

addImage('nova_gamepad_rear.webp', `
<g filter="url(#pdpShadow)">
  <path d="M 380 950 C 320 620 480 440 800 440 C 1120 440 1280 620 1220 950 C 1180 1150 1020 1180 940 1040 L 860 920 L 740 920 L 660 1040 C 580 1180 420 1150 380 950 Z" fill="#12141A" stroke="#5B6273" stroke-width="4"/>
  <!-- Back Paddles -->
  <rect x="620" y="700" width="70" height="160" rx="20" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="2"/>
  <rect x="910" y="700" width="70" height="160" rx="20" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="2"/>
</g>
`);

addImage('nova_gamepad_side.webp', `
<g filter="url(#pdpShadow)">
  <path d="M 600 400 L 1000 400 L 1100 1100 L 500 1100 Z" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="3"/>
</g>
`);

addImage('nova_gamepad_detail.webp', `
<g filter="url(#pdpShadow)">
  <circle cx="800" cy="800" r="320" fill="#08090C" stroke="#00F0FF" stroke-width="8" filter="url(#softGlow)"/>
  <circle cx="800" cy="800" r="220" fill="url(#titaniumMetal)"/>
</g>
`);

addImage('nova_gamepad_lifestyle.webp', `
<rect x="0" y="900" width="1600" height="700" fill="#0A0B0E"/>
<g filter="url(#pdpShadow)">
  <path d="M 480 850 C 420 520 580 340 900 340 C 1220 340 1380 520 1320 850 Z" fill="url(#darkTitanium)"/>
</g>
`);

// ==========================================
// 16 — NOVA SOUND (5 ANGLES)
// ==========================================
addImage('nova_sound_front.webp', `
<g filter="url(#pdpShadow)">
  <rect x="200" y="650" width="1200" height="300" rx="60" fill="url(#matteGraphite)" stroke="#00F0FF" stroke-width="4"/>
  <!-- Hidden LED Matrix Display -->
  <text x="800" y="820" fill="#00F0FF" font-family="monospace" font-size="52" font-weight="bold" text-anchor="middle" filter="url(#softGlow)">DOLBY ATMOS 7.1.4</text>
</g>
`);

addImage('nova_sound_side.webp', `
<g filter="url(#pdpShadow)">
  <rect x="650" y="600" width="300" height="400" rx="80" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/>
</g>
`);

addImage('nova_sound_angle.webp', `
<g filter="url(#pdpShadow)" transform="rotate(-10 800 800)">
  <polygon points="220,620 1340,680 1340,940 220,880" fill="url(#matteGraphite)"/>
</g>
`);

addImage('nova_sound_detail.webp', `
<g filter="url(#pdpShadow)">
  <rect x="300" y="450" width="1000" height="700" rx="60" fill="#0A0C10" stroke="#00F0FF" stroke-width="4"/>
</g>
`);

addImage('nova_sound_lifestyle.webp', `
<rect x="0" y="900" width="1600" height="700" fill="#0B0C0E"/>
<g filter="url(#pdpShadow)">
  <rect x="250" y="650" width="1100" height="280" rx="50" fill="url(#matteGraphite)"/>
</g>
`);

// ==========================================
// 17 — NOVA HUB (5 ANGLES)
// ==========================================
addImage('nova_hub_hero.webp', `
<g filter="url(#pdpShadow)">
  <rect x="560" y="480" width="480" height="640" rx="240" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/>
  <ellipse cx="800" cy="1100" rx="220" ry="20" fill="#00F0FF" filter="url(#softGlow)"/>
  <text x="800" y="780" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" text-anchor="middle">MATTER NODE</text>
</g>
`);

addImage('nova_hub_front.webp', `
<g filter="url(#pdpShadow)">
  <rect x="580" y="500" width="440" height="600" rx="220" fill="url(#darkTitanium)"/>
</g>
`);

addImage('nova_hub_side.webp', `
<g filter="url(#pdpShadow)">
  <rect x="640" y="500" width="320" height="600" rx="160" fill="url(#darkTitanium)"/>
</g>
`);

addImage('nova_hub_ports.webp', `
<g filter="url(#pdpShadow)">
  <rect x="560" y="500" width="480" height="600" rx="60" fill="#0B0D12"/>
</g>
`);

addImage('nova_hub_lifestyle.webp', `
<rect x="0" y="900" width="1600" height="700" fill="#0A0B0E"/>
<g filter="url(#pdpShadow)">
  <rect x="600" y="520" width="400" height="560" rx="200" fill="url(#darkTitanium)"/>
</g>
`);

// ==========================================
// 18 — ALL OTHER PRODUCTS (2-4 ANGLES EACH)
// ==========================================
// NOVA BEAM 4K
addImage('nova_beam_hero.webp', `<g filter="url(#pdpShadow)"><rect x="450" y="550" width="700" height="500" rx="60" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/><circle cx="650" cy="800" r="140" fill="#040508" stroke="#00F0FF" stroke-width="6"/><circle cx="650" cy="800" r="90" fill="url(#novaScreenOled)"/></g>`);
addImage('nova_beam_angle.webp', `<g filter="url(#pdpShadow)" transform="rotate(-12 800 800)"><rect x="460" y="560" width="680" height="480" rx="55" fill="url(#darkTitanium)"/></g>`);
addImage('nova_beam_lifestyle.webp', `<rect x="0" y="900" width="1600" height="700" fill="#090A0D"/><g filter="url(#pdpShadow)"><rect x="480" y="580" width="640" height="440" rx="50" fill="url(#darkTitanium)"/></g>`);

// NOVA DOCK 10-IN-1
addImage('nova_dock_hero.webp', `<g filter="url(#pdpShadow)"><rect x="300" y="700" width="1000" height="240" rx="40" fill="url(#titaniumMetal)" stroke="#00F0FF" stroke-width="3"/><rect x="400" y="780" width="80" height="80" rx="16" fill="#050608"/><rect x="520" y="780" width="80" height="80" rx="16" fill="#050608"/><rect x="640" y="780" width="80" height="80" rx="16" fill="#050608"/></g>`);
addImage('nova_dock_angle.webp', `<g filter="url(#pdpShadow)" transform="rotate(-15 800 800)"><rect x="320" y="720" width="960" height="220" rx="35" fill="url(#titaniumMetal)"/></g>`);
addImage('nova_dock_detail.webp', `<g filter="url(#pdpShadow)"><rect x="400" y="500" width="800" height="600" rx="50" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/></g>`);

// NOVA POWER 100W GaN
addImage('nova_power_hero.webp', `<g filter="url(#pdpShadow)"><rect x="600" y="550" width="400" height="500" rx="40" fill="url(#matteGraphite)" stroke="#00F0FF" stroke-width="4"/><text x="800" y="820" fill="#00F0FF" font-family="monospace" font-size="44" font-weight="bold" text-anchor="middle">100W GaN</text></g>`);
addImage('nova_power_angle.webp', `<g filter="url(#pdpShadow)" transform="rotate(-10 800 800)"><rect x="620" y="560" width="360" height="480" rx="35" fill="url(#matteGraphite)"/></g>`);
addImage('nova_power_detail.webp', `<g filter="url(#pdpShadow)"><rect x="550" y="500" width="500" height="600" rx="50" fill="#0B0D12" stroke="#00F0FF" stroke-width="3"/></g>`);

// NOVA VISION VR
addImage('nova_vision_hero.webp', `<g filter="url(#pdpShadow)"><rect x="400" y="600" width="800" height="400" rx="160" fill="url(#novaScreenOled)" stroke="#00F0FF" stroke-width="5"/><text x="800" y="820" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" text-anchor="middle">NOVA VISION VR</text></g>`);
addImage('nova_vision_front.webp', `<g filter="url(#pdpShadow)"><rect x="420" y="620" width="760" height="360" rx="140" fill="url(#novaScreenOled)" stroke="#00F0FF" stroke-width="4"/></g>`);
addImage('nova_vision_detail.webp', `<g filter="url(#pdpShadow)"><rect x="350" y="500" width="900" height="600" rx="80" fill="url(#darkTitanium)"/></g>`);
addImage('nova_vision_lifestyle.webp', `<rect x="0" y="900" width="1600" height="700" fill="#08090C"/><g filter="url(#pdpShadow)"><rect x="440" y="640" width="720" height="320" rx="120" fill="url(#novaScreenOled)"/></g>`);

// NOVA RIG TOWER
addImage('nova_rig_hero.webp', `<g filter="url(#pdpShadow)"><rect x="520" y="240" width="560" height="1120" rx="40" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/><text x="800" y="780" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" text-anchor="middle">NOVA RIG</text></g>`);
addImage('nova_rig_side.webp', `<g filter="url(#pdpShadow)"><rect x="540" y="260" width="520" height="1080" rx="35" fill="#0C0E14" stroke="#5B6273" stroke-width="3"/></g>`);
addImage('nova_rig_detail.webp', `<g filter="url(#pdpShadow)"><rect x="450" y="450" width="700" height="700" rx="50" fill="#090B10" stroke="#00F0FF" stroke-width="4"/></g>`);

// NOVA AIR PURIFIER
addImage('nova_air_purifier_hero.webp', `<g filter="url(#pdpShadow)"><rect x="600" y="350" width="400" height="900" rx="80" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/><circle cx="800" cy="520" r="70" fill="#040508" stroke="#00F0FF" stroke-width="3"/><text x="800" y="530" fill="#00F0FF" font-family="monospace" font-size="24" font-weight="bold" text-anchor="middle">PM 2.5</text></g>`);
addImage('nova_air_purifier_detail.webp', `<g filter="url(#pdpShadow)"><rect x="550" y="400" width="500" height="800" rx="60" fill="#10131B"/></g>`);
addImage('nova_air_purifier_lifestyle.webp', `<rect x="0" y="900" width="1600" height="700" fill="#0B0C0E"/><g filter="url(#pdpShadow)"><rect x="620" y="380" width="360" height="840" rx="70" fill="url(#darkTitanium)"/></g>`);

// NOVA RING
addImage('nova_ring_hero.webp', `<g filter="url(#pdpShadow)"><circle cx="800" cy="800" r="320" fill="none" stroke="url(#titaniumMetal)" stroke-width="70" filter="url(#softGlow)"/><circle cx="800" cy="800" r="350" fill="none" stroke="#00F0FF" stroke-width="3"/></g>`);
addImage('nova_ring_angle.webp', `<g filter="url(#pdpShadow)" transform="rotate(-25 800 800)"><ellipse cx="800" cy="800" rx="340" ry="180" fill="none" stroke="url(#titaniumMetal)" stroke-width="65"/></g>`);
addImage('nova_ring_detail.webp', `<g filter="url(#pdpShadow)"><circle cx="800" cy="800" r="380" fill="none" stroke="url(#darkTitanium)" stroke-width="80"/><circle cx="700" cy="800" r="16" fill="#00F0FF" filter="url(#softGlow)"/></g>`);
addImage('nova_ring_lifestyle.webp', `<rect x="0" y="850" width="1600" height="750" fill="#090A0D"/><g filter="url(#pdpShadow)"><circle cx="800" cy="800" r="300" fill="none" stroke="url(#titaniumMetal)" stroke-width="60"/></g>`);

// NOVA CAM 4K
addImage('nova_cam_hero.webp', `<g filter="url(#pdpShadow)"><rect x="550" y="600" width="500" height="400" rx="80" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/><circle cx="800" cy="800" r="120" fill="#040508" stroke="url(#titaniumMetal)" stroke-width="8"/><circle cx="800" cy="800" r="70" fill="url(#novaScreenOled)"/></g>`);
addImage('nova_cam_angle.webp', `<g filter="url(#pdpShadow)" transform="rotate(-10 800 800)"><rect x="560" y="610" width="480" height="380" rx="75" fill="url(#darkTitanium)"/></g>`);
addImage('nova_cam_detail.webp', `<g filter="url(#pdpShadow)"><circle cx="800" cy="800" r="320" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="6"/><circle cx="800" cy="800" r="200" fill="url(#novaScreenOled)"/></g>`);

// NOVA LIGHT STRIP
addImage('nova_light_strip_hero.webp', `<g filter="url(#pdpShadow)"><path d="M 300 1200 Q 600 400 900 1200 T 1300 600" fill="none" stroke="#00F0FF" stroke-width="40" stroke-linecap="round" filter="url(#softGlow)"/></g>`);
addImage('nova_light_strip_detail.webp', `<g filter="url(#pdpShadow)"><line x1="200" y1="800" x2="1400" y2="800" stroke="url(#cyanGlowLine)" stroke-width="60" stroke-linecap="round" filter="url(#softGlow)"/></g>`);
addImage('nova_light_strip_lifestyle.webp', `<rect x="0" y="0" width="1600" height="1600" fill="#060709"/><path d="M 200 1000 Q 800 300 1400 1000" fill="none" stroke="#00F0FF" stroke-width="50" filter="url(#softGlow)"/>`);

// NOVA FIT BAND
addImage('nova_fit_hero.webp', `<g filter="url(#pdpShadow)"><rect x="680" y="320" width="240" height="960" rx="120" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/><rect x="710" y="520" width="180" height="400" rx="70" fill="url(#novaScreenOled)"/><text x="800" y="730" fill="#00F0FF" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">10,482</text></g>`);
addImage('nova_fit_angle.webp', `<g filter="url(#pdpShadow)" transform="rotate(-15 800 800)"><rect x="700" y="340" width="200" height="920" rx="100" fill="url(#darkTitanium)"/></g>`);
addImage('nova_fit_lifestyle.webp', `<rect x="0" y="850" width="1600" height="750" fill="#090A0D"/><g filter="url(#pdpShadow)"><rect x="700" y="340" width="200" height="920" rx="100" fill="url(#darkTitanium)"/></g>`);

// NOVA BOOK GO
addImage('nova_book_go_open.webp', `<g filter="url(#pdpShadow)"><rect x="340" y="280" width="920" height="580" rx="24" fill="url(#titaniumMetal)" stroke="#3A404D" stroke-width="3"/><rect x="360" y="300" width="880" height="540" rx="14" fill="url(#novaScreenOled)"/><polygon points="240,880 1360,880 1420,1220 180,1220" fill="url(#darkTitanium)"/></g>`);
addImage('nova_book_go_angle.webp', `<g filter="url(#pdpShadow)" transform="rotate(-12 800 800)"><polygon points="360,300 1000,350 1000,840 360,790" fill="url(#titaniumMetal)"/></g>`);
addImage('nova_book_go_detail.webp', `<g filter="url(#pdpShadow)"><rect x="300" y="450" width="1000" height="700" rx="40" fill="url(#darkTitanium)"/></g>`);

// NOVA ULTRA 5G
addImage('nova_ultra_front.webp', `<g filter="url(#pdpShadow)"><rect x="520" y="240" width="560" height="1120" rx="60" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="4"/><rect x="536" y="256" width="528" height="1088" rx="44" fill="url(#novaScreenOled)"/><text x="800" y="640" fill="#00F0FF" font-family="sans-serif" font-size="44" font-weight="900" text-anchor="middle">NOVA ULTRA 5G</text></g>`);
addImage('nova_ultra_rear.webp', `<g filter="url(#pdpShadow)"><rect x="520" y="240" width="560" height="1120" rx="60" fill="#0B0C10" stroke="#3A404D" stroke-width="4"/><circle cx="800" cy="450" r="140" fill="#030406" stroke="#00F0FF" stroke-width="4"/></g>`);
addImage('nova_ultra_detail.webp', `<g filter="url(#pdpShadow)"><rect x="350" y="450" width="900" height="700" rx="60" fill="url(#darkTitanium)"/></g>`);

// NOVA STUDIO PRO
addImage('nova_studio_hero.webp', `<g filter="url(#pdpShadow)"><path d="M 450 750 C 450 350 1150 350 1150 750" fill="none" stroke="url(#titaniumMetal)" stroke-width="32"/><circle cx="450" cy="750" r="160" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="5"/><circle cx="1150" cy="750" r="160" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="5"/></g>`);
addImage('nova_studio_angle.webp', `<g filter="url(#pdpShadow)" transform="rotate(-15 800 800)"><circle cx="600" cy="750" r="160" fill="url(#darkTitanium)"/></g>`);
addImage('nova_studio_detail.webp', `<g filter="url(#pdpShadow)"><circle cx="800" cy="800" r="300" fill="url(#darkTitanium)" stroke="#00F0FF" stroke-width="6"/></g>`);

// NOVA LITE
addImage('nova_lite_front.webp', `<g filter="url(#pdpShadow)"><rect x="540" y="260" width="520" height="1080" rx="52" fill="url(#titaniumMetal)" stroke="#3A404D" stroke-width="3"/><rect x="556" y="276" width="488" height="1048" rx="38" fill="url(#novaScreenOled)"/><text x="800" y="640" fill="#FFFFFF" font-family="sans-serif" font-size="40" font-weight="900" text-anchor="middle">NOVA LITE</text></g>`);
addImage('nova_lite_rear.webp', `<g filter="url(#pdpShadow)"><rect x="540" y="260" width="520" height="1080" rx="52" fill="#181A22" stroke="#3A404D" stroke-width="3"/><circle cx="660" cy="380" r="50" fill="#060709" stroke="#8E94A0" stroke-width="4"/></g>`);
addImage('nova_lite_angle.webp', `<g filter="url(#pdpShadow)" transform="rotate(-10 800 800)"><polygon points="560,250 940,300 940,1300 560,1250" fill="url(#darkTitanium)"/></g>`);

// NOVA BOOK STUDIO
addImage('nova_book_studio_open.webp', `<g filter="url(#pdpShadow)"><rect x="300" y="200" width="1000" height="580" rx="24" fill="url(#novaScreenOled)" stroke="#00F0FF" stroke-width="3"/><polygon points="200,800 1400,800 1460,1360 140,1360" fill="url(#novaScreenOled)" stroke="#00F0FF" stroke-width="3"/><text x="800" y="500" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" text-anchor="middle">DUAL 4K OLED DISPLAY</text></g>`);
addImage('nova_book_studio_angle.webp', `<g filter="url(#pdpShadow)" transform="rotate(-12 800 800)"><polygon points="320,220 1020,280 1020,780 320,720" fill="url(#novaScreenOled)"/></g>`);
addImage('nova_book_studio_detail.webp', `<g filter="url(#pdpShadow)"><rect x="300" y="450" width="1000" height="700" rx="40" fill="url(#darkTitanium)"/></g>`);

// Generate All WebP Images
async function generateAll() {
  console.log("Starting generation of " + imagesToGenerate.length + " NOVA WebP product images...");
  let count = 0;
  for (const item of imagesToGenerate) {
    const destPath = path.join(outDir, item.filename);
    try {
      await sharp(Buffer.from(item.svg))
        .webp({ quality: 90 })
        .toFile(destPath);
      count++;
      console.log(`[${count}/${imagesToGenerate.length}] Generated: ${item.filename}`);
    } catch (err) {
      console.error(`FAILED: ${item.filename}:`, err.message);
    }
  }
  console.log("SUCCESS: Fully generated " + count + " NOVA product WebP images!");
}

generateAll().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
