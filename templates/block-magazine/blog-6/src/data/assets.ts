/**
 * High-Density Editorial Visual Assets & Fallbacks
 * Curated high-res imagery, vector art, and multi-tier CDN fallbacks
 * Guaranteed to render instantly with zero empty spaces on any device.
 */

// Procedural SVG Data URLs for instantaneous, zero-latency, 100% reliable rendering
export const FALLBACK_PATTERNS = {
  spatialPavilion: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="100%" height="100%">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="40%" stop-color="#1e1b4b"/>
          <stop offset="80%" stop-color="#172554"/>
          <stop offset="100%" stop-color="#090d16"/>
        </linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.75"/>
          <stop offset="50%" stop-color="#818cf8" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#c084fc" stop-opacity="0.6"/>
        </linearGradient>
        <linearGradient id="warmSunset" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.4"/>
          <stop offset="60%" stop-color="#fb923c" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.1"/>
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="35" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        <pattern id="isoGrid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <circle cx="60" cy="0" r="1.5" fill="rgba(96,165,250,0.3)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGrad)"/>
      <rect width="100%" height="100%" fill="url(#warmSunset)"/>
      <rect width="100%" height="100%" fill="url(#isoGrid)"/>

      <!-- Ambient Glow Orbs -->
      <circle cx="1200" cy="350" r="280" fill="#3b82f6" opacity="0.25" filter="url(#glow)"/>
      <circle cx="450" cy="650" r="320" fill="#a855f7" opacity="0.2" filter="url(#glow)"/>
      <circle cx="950" cy="700" r="200" fill="#f43f5e" opacity="0.15" filter="url(#glow)"/>

      <!-- Modernist Cantilevered Glass Architecture -->
      <g transform="translate(150, 80)">
        <!-- Foundation & Terrain Line -->
        <path d="M-200 780 Q 300 720 700 750 T 1600 720 L 1600 1000 L -200 1000 Z" fill="#0b0f17" opacity="0.95"/>
        <path d="M-100 740 Q 400 680 900 720 T 1600 690" stroke="#38bdf8" stroke-width="1.5" fill="none" opacity="0.3"/>

        <!-- Cantilever Structure Facets -->
        <polygon points="400,220 1150,160 1280,480 320,560" fill="url(#glassGrad)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
        <polygon points="320,560 1280,480 1240,620 280,680" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
        <polygon points="1150,160 1380,240 1280,480" fill="rgba(147,197,253,0.3)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>

        <!-- Structural Glass Mullions -->
        <line x1="550" y1="208" x2="480" y2="545" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
        <line x1="720" y1="195" x2="660" y2="530" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
        <line x1="900" y1="180" x2="850" y2="515" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
        <line x1="1080" y1="165" x2="1050" y2="500" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>

        <!-- Horizon Water Reflection Lines -->
        <line x1="200" y1="820" x2="1300" y2="820" stroke="rgba(96,165,250,0.3)" stroke-width="1" stroke-dasharray="14 8"/>
        <line x1="350" y1="850" x2="1150" y2="850" stroke="rgba(192,132,252,0.25)" stroke-width="1" stroke-dasharray="20 12"/>
        <line x1="480" y1="880" x2="980" y2="880" stroke="rgba(244,63,94,0.2)" stroke-width="1" stroke-dasharray="8 6"/>

        <!-- Technical Typography Overlay -->
        <text x="360" y="530" fill="rgba(255,255,255,0.85)" font-family="monospace" font-size="14" font-weight="bold" letter-spacing="4">PAVILION // NORDIC HORIZON</text>
        <text x="360" y="550" fill="rgba(147,197,253,0.7)" font-family="monospace" font-size="11" letter-spacing="2">60.1699° N, 24.9384° E • ISSUE 08</text>
      </g>
    </svg>
  `)}`,

  typography4D: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="100%" height="100%">
      <defs>
        <linearGradient id="typeBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#18181b"/>
          <stop offset="50%" stop-color="#2e1065"/>
          <stop offset="100%" stop-color="#09090b"/>
        </linearGradient>
        <linearGradient id="glyphGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e879f9"/>
          <stop offset="50%" stop-color="#818cf8"/>
          <stop offset="100%" stop-color="#38bdf8"/>
        </linearGradient>
        <pattern id="dotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.12)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#typeBg)"/>
      <rect width="100%" height="100%" fill="url(#dotGrid)"/>

      <!-- Volumetric 4D Letterforms Wireframe -->
      <g transform="translate(180, 100)">
        <!-- 3D Perspective Grid Box -->
        <polygon points="120,180 620,100 780,340 280,440" fill="none" stroke="rgba(168,85,247,0.3)" stroke-width="1.5"/>
        <polygon points="280,440 780,340 720,620 220,700" fill="none" stroke="rgba(168,85,247,0.3)" stroke-width="1.5"/>
        <polygon points="120,180 280,440 220,700 60,420" fill="none" stroke="rgba(168,85,247,0.3)" stroke-width="1.5"/>

        <!-- Massive Kinetic Glyph "4D" -->
        <text x="240" y="460" font-family="'Syne', 'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="280" fill="url(#glyphGrad)" opacity="0.95" letter-spacing="-10">4D</text>
        <text x="236" y="456" font-family="'Syne', 'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="280" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.6" letter-spacing="-10">4D</text>

        <!-- Dynamic Optical Dimension Axes -->
        <line x1="80" y1="280" x2="800" y2="280" stroke="#e879f9" stroke-width="1" stroke-dasharray="6 4" opacity="0.6"/>
        <line x1="420" y1="80" x2="420" y2="720" stroke="#38bdf8" stroke-width="1" stroke-dasharray="6 4" opacity="0.6"/>

        <circle cx="800" cy="280" r="5" fill="#e879f9"/>
        <circle cx="420" cy="80" r="5" fill="#38bdf8"/>

        <text x="140" y="620" fill="#a78bfa" font-family="monospace" font-size="13" font-weight="bold" letter-spacing="3">AXIS: Z-DEPTH [420.82px] // GAZE-AWARE</text>
        <text x="140" y="645" fill="rgba(255,255,255,0.6)" font-family="monospace" font-size="11" letter-spacing="1">VARIABLE OPTICAL KERNING SPECIMEN</text>
      </g>
    </svg>
  `)}`,

  photosyntheticTimber: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="100%" height="100%">
      <defs>
        <linearGradient id="timberBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#064e3b"/>
          <stop offset="50%" stop-color="#065f46"/>
          <stop offset="100%" stop-color="#022c22"/>
        </linearGradient>
        <linearGradient id="woodGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#34d399" stop-opacity="0.8"/>
          <stop offset="50%" stop-color="#fbbf24" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#timberBg)"/>

      <!-- Organic Glulam Ribs -->
      <g transform="translate(100, 50)">
        <path d="M 100 700 C 250 300, 450 150, 750 180 C 950 200, 1050 400, 1000 750" fill="none" stroke="url(#woodGlow)" stroke-width="18" stroke-linecap="round" opacity="0.9"/>
        <path d="M 160 720 C 300 350, 480 220, 730 240 C 900 260, 980 430, 940 760" fill="none" stroke="rgba(251,191,36,0.6)" stroke-width="8" stroke-linecap="round"/>
        <path d="M 220 740 C 350 400, 510 290, 710 300 C 850 320, 920 460, 880 770" fill="none" stroke="rgba(52,211,153,0.5)" stroke-width="6" stroke-linecap="round"/>
        <path d="M 280 750 C 400 450, 540 350, 690 360 C 800 380, 860 490, 820 780" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="4" stroke-linecap="round"/>

        <!-- Micro-Algae Photosynthetic Cells Visual Representation -->
        <circle cx="500" cy="220" r="12" fill="#34d399" opacity="0.8"/>
        <circle cx="650" cy="210" r="8" fill="#10b981" opacity="0.9"/>
        <circle cx="420" cy="280" r="10" fill="#6ee7b7" opacity="0.7"/>
        <circle cx="780" cy="260" r="14" fill="#34d399" opacity="0.8"/>

        <!-- Bio-Metrics Badge -->
        <text x="140" y="680" fill="#a7f3d0" font-family="monospace" font-size="14" font-weight="bold" letter-spacing="3">BIO-TIMBER // -142kg CO2/m³</text>
        <text x="140" y="705" fill="rgba(255,255,255,0.7)" font-family="monospace" font-size="11" letter-spacing="1">SCANDINAVIAN LAMINATED SPRUCE</text>
      </g>
    </svg>
  `)}`,

  acousticTopologies: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="100%" height="100%">
      <defs>
        <linearGradient id="soundBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1c1917"/>
          <stop offset="50%" stop-color="#4c0519"/>
          <stop offset="100%" stop-color="#0c0a09"/>
        </linearGradient>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="50%" stop-color="#fb7185"/>
          <stop offset="100%" stop-color="#fda4af"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#soundBg)"/>

      <!-- Non-Euclidean Parametric Wave Ripples -->
      <g transform="translate(600, 420)">
        <ellipse rx="480" ry="240" fill="none" stroke="url(#waveGrad)" stroke-width="2" opacity="0.85"/>
        <ellipse rx="420" ry="200" fill="none" stroke="rgba(244,63,94,0.6)" stroke-width="2" opacity="0.7"/>
        <ellipse rx="360" ry="160" fill="none" stroke="rgba(251,113,133,0.5)" stroke-width="2" opacity="0.6"/>
        <ellipse rx="300" ry="120" fill="none" stroke="rgba(253,164,175,0.4)" stroke-width="2" opacity="0.5"/>
        <ellipse rx="240" ry="85" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" opacity="0.4"/>
        <ellipse rx="160" ry="50" fill="rgba(244,63,94,0.2)" stroke="#ffffff" stroke-width="2.5"/>

        <!-- Center Focal Node -->
        <circle cx="0" cy="0" r="14" fill="#f43f5e"/>
        <circle cx="0" cy="0" r="28" fill="none" stroke="#fda4af" stroke-width="2" stroke-dasharray="4 4"/>
      </g>

      <text x="120" y="780" fill="#fda4af" font-family="monospace" font-size="14" font-weight="bold" letter-spacing="3">PARAMETRIC SOUND DIFFUSION // RT60: 1.82s</text>
      <text x="120" y="805" fill="rgba(255,255,255,0.6)" font-family="monospace" font-size="11" letter-spacing="1">NON-EUCLIDEAN CONCERT AUDITORIUM</text>
    </svg>
  `)}`,

  generativeGlass: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="100%" height="100%">
      <defs>
        <linearGradient id="glassBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0369a1"/>
          <stop offset="50%" stop-color="#1e3a8a"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <linearGradient id="prismRainbow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="25%" stop-color="#818cf8"/>
          <stop offset="50%" stop-color="#f472b6"/>
          <stop offset="75%" stop-color="#fb923c"/>
          <stop offset="100%" stop-color="#facc15"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#glassBg)"/>

      <!-- Algorithmic Prismatic Facet Lattice -->
      <g transform="translate(150, 100)">
        <polygon points="200,80 600,40 500,450 120,400" fill="url(#prismRainbow)" opacity="0.45" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
        <polygon points="600,40 900,120 780,500 500,450" fill="rgba(56,189,248,0.35)" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
        <polygon points="120,400 500,450 420,700 80,620" fill="rgba(129,140,248,0.4)" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
        <polygon points="500,450 780,500 700,740 420,700" fill="rgba(244,114,182,0.3)" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>

        <line x1="200" y1="80" x2="780" y2="500" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="8 6"/>
        <line x1="600" y1="40" x2="80" y2="620" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="8 6"/>
      </g>

      <text x="120" y="800" fill="#bae6fd" font-family="monospace" font-size="14" font-weight="bold" letter-spacing="3">GENERATIVE GLASS // PRISMATIC REFRACTION</text>
    </svg>
  `)}`,

  printEditionMockup: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
      <defs>
        <linearGradient id="mockupBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="50%" stop-color="#1e1b4b"/>
          <stop offset="100%" stop-color="#090d16"/>
        </linearGradient>
        <linearGradient id="foilGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="50%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <filter id="bookShadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="25" dy="35" stdDeviation="25" flood-color="#0f172a" flood-opacity="0.35"/>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#mockupBg)"/>

      <!-- Pedestal Base -->
      <ellipse cx="500" cy="820" rx="360" ry="70" fill="#cbd5e1" opacity="0.6"/>

      <!-- Hardcover 3D Perspective Book -->
      <g filter="url(#bookShadow)" transform="translate(230, 160)">
        <!-- Book Spine -->
        <polygon points="0,80 50,0 50,600 0,680" fill="#090d16"/>
        <!-- Book Front Cover -->
        <polygon points="50,0 480,40 480,640 50,600" fill="url(#bookCover)"/>

        <!-- Foil Embossed Masthead -->
        <text x="85" y="140" font-family="'Outfit', sans-serif" font-weight="900" font-size="34" fill="url(#foilGold)" letter-spacing="4">DESIGN MAG</text>
        <text x="85" y="170" font-family="monospace" font-size="11" fill="rgba(255,255,255,0.7)" letter-spacing="2">ISSUE 08 • THE SPATIAL ERA</text>

        <!-- Cover Graphic Shape -->
        <polygon points="120,240 420,265 390,460 90,430" fill="none" stroke="url(#foilGold)" stroke-width="2"/>
        <circle cx="255" cy="350" r="60" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="6 4"/>

        <text x="85" y="540" font-family="serif" font-style="italic" font-size="16" fill="#ffffff">A Quarterly of Spatial Architecture & AI</text>
        <text x="85" y="570" font-family="monospace" font-size="10" fill="#94a3b8">FEDRIGONI 140GSM • SMYTH SEWN</text>
      </g>
    </svg>
  `)}`,
};

// Rock-solid multi-tiered image URLs with curated fallbacks
export const PRIMARY_IMAGES = {
  heroPavilion: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
  neuralRenaissance: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
  typography4D: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1600&q=85',
  photosyntheticTimber: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85',
  acousticTopologies: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85',
  generativeGlass: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
  tokyoConcrete: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=85',
  gallery1: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
  gallery2: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
  gallery3: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85',
};

// Map article or category ID to appropriate fallback pattern
export const getFallbackForArticle = (idOrCategory?: string): string => {
  if (!idOrCategory) return FALLBACK_PATTERNS.spatialPavilion;
  const lower = idOrCategory.toLowerCase();

  if (lower.includes('type') || lower.includes('typography') || lower.includes('kerning')) {
    return FALLBACK_PATTERNS.typography4D;
  }
  if (lower.includes('timber') || lower.includes('photosynthetic') || lower.includes('arch')) {
    return FALLBACK_PATTERNS.photosyntheticTimber;
  }
  if (lower.includes('sound') || lower.includes('acoustic') || lower.includes('culture')) {
    return FALLBACK_PATTERNS.acousticTopologies;
  }
  if (lower.includes('glass') || lower.includes('generative') || lower.includes('ai') || lower.includes('synthetic')) {
    return FALLBACK_PATTERNS.generativeGlass;
  }
  if (lower.includes('print') || lower.includes('issue') || lower.includes('book')) {
    return FALLBACK_PATTERNS.printEditionMockup;
  }

  return FALLBACK_PATTERNS.spatialPavilion;
};
