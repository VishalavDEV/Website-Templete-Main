export const specsData = {
  imageGuidelines: [
    {
      category: "Hero Background Image",
      dimensions: "1920 x 1080 px",
      aspectRatio: "16:9 (or 21:9 ultrawide)",
      format: "WebP (preferred), AVIF, with progressive JPEG fallback",
      maxFileSize: "< 250 KB (compressed)",
      placement: "Full-bleed background with CSS linear-gradient & radial mesh overlay",
      altStrategy: "Descriptive background context (e.g., 'Dark glowing cybernetic quantum sphere with violet data trails')",
      aiPromptSample: "Cinematic dark sci-fi background, glowing quantum processor node, neon cyan and violet volumetric lasers, 8k render, Unreal Engine 5, octane depth of field --ar 16:9 --v 6.0",
    },
    {
      category: "Speaker / Performer Portraits",
      dimensions: "400 x 400 px (or 600 x 600 px @2x)",
      aspectRatio: "1:1 square (circular or rounded-rect mask)",
      format: "WebP / AVIF with WebP lossless fallback",
      maxFileSize: "< 60 KB",
      placement: "Speaker spotlight grid, circular border with glowing aura or editorial frame",
      altStrategy: "Full name and keynote role (e.g., 'Portrait of Dr. Elena Rostova, Head of Quantum Algorithms')",
      aiPromptSample: "Professional studio headshot portrait of a confident female scientist, soft rim lighting, dark futuristic lab backdrop, Hasselblad 85mm f/1.4 lens, clean cinematic lighting --ar 1:1",
    },
    {
      category: "Behind-The-Scenes Video Teasers",
      dimensions: "800 x 450 px (or 1200 x 675 px @2x)",
      aspectRatio: "16:9 widescreen",
      format: "WebP / JPEG with glass play button overlay",
      maxFileSize: "< 120 KB",
      placement: "Centered teaser card with interactive pulse hover state and modal trigger",
      altStrategy: "Scene description (e.g., 'Behind the scenes preview of the quantum computation stage setup')",
      aiPromptSample: "Dramatic behind the scenes footage snapshot, high-tech event auditorium stage, glowing LED screens, warm amber key lighting, 4k cinematic frame capture --ar 16:9",
    },
    {
      category: "Social Proof Avatars",
      dimensions: "64 x 64 px (rendered at 36-48px)",
      aspectRatio: "1:1 circle",
      format: "WebP / PNG",
      maxFileSize: "< 15 KB each",
      placement: "Overlapping cluster ring with subtle border ring and +N badge",
      altStrategy: "Attendee profile avatar",
      aiPromptSample: "Diverse smiling tech conference attendees, close-up avatar headshots, modern natural studio lighting --ar 1:1",
    },
    {
      category: "Event Gallery & Highlight Imagery",
      dimensions: "1200 x 800 px",
      aspectRatio: "3:2 landscape",
      format: "WebP with progressive load & blur placeholder",
      maxFileSize: "< 150 KB",
      placement: "Past event recap carousel or masonry highlights",
      altStrategy: "Event atmosphere (e.g., 'Auditorium filled with engaged attendees during keynote session')",
      aiPromptSample: "Crowded futuristic conference hall with illuminated interactive booths, holographic keynote presentation, wide angle documentary photography --ar 3:2",
    },
    {
      category: "Favicon & PWA App Icons",
      dimensions: "32x32px (ico/png), 180x180px (apple-touch), 512x512px (pwa)",
      aspectRatio: "1:1 square",
      format: "SVG for vector browsers, PNG-32 with transparent background",
      maxFileSize: "< 20 KB",
      placement: "Browser tab icon, bookmark badge, mobile home-screen icon",
      altStrategy: "Brand logomark",
      aiPromptSample: "Minimalist vector geometric logo emblem, glowing gradient monogram, vector SVG style, isolated on transparent background --ar 1:1",
    },
  ],

  typographyPairings: [
    {
      variation: "Minimalist Countdown (Quantum Epoch)",
      displayFont: "Outfit / Space Grotesk (700, 900)",
      bodyFont: "Plus Jakarta Sans / Inter (400, 500)",
      monospaceFont: "JetBrains Mono (600, 700)",
      characteristics: "Ultra-clean geometric sans with crisp numeric tabular figures for countdown ticking.",
      cssConfig: "font-family: 'Space Grotesk', sans-serif; --font-mono: 'JetBrains Mono', monospace;",
    },
    {
      variation: "Vibrant Illustration (Creative Horizons)",
      displayFont: "Syne / Outfit (800, 900 Extrabold)",
      bodyFont: "Plus Jakarta Sans (400, 600)",
      monospaceFont: "JetBrains Mono (700)",
      characteristics: "Playful, expressive geometric typography with high personality and vibrant rhythm.",
      cssConfig: "font-family: 'Syne', 'Outfit', sans-serif; --font-body: 'Plus Jakarta Sans', sans-serif;",
    },
    {
      variation: "Elegant Typography (Aethelgard Global)",
      displayFont: "Playfair Display / Cinzel (600, 700 Serif)",
      bodyFont: "Inter / Plus Jakarta Sans (300, 400)",
      monospaceFont: "Cinzel / JetBrains Mono (400, 600)",
      characteristics: "High-contrast editorial serif, generous tracking (letter-spacing: 0.15em), timeless luxury.",
      cssConfig: "font-family: 'Playfair Display', serif; --font-heading-accent: 'Cinzel', serif;",
    },
  ],

  responsiveBreakpoints: [
    {
      device: "Mobile",
      range: "320px – 767px",
      layoutStrategy: "Single-column stacked layout, hero height capped at 75vh or auto, countdown timer switches to 2x2 grid with compact numerals (28px-36px), full-width CTA buttons, touch-friendly 48px tap targets, carousel for speaker cards.",
      imageBehavior: "100% viewport width with aspect-ratio preservation, lazy loading enabled on all below-the-fold images, 1x resolution srcset served to save mobile bandwidth.",
    },
    {
      device: "Tablet",
      range: "768px – 1023px",
      layoutStrategy: "2-column asymmetric split for hero & email capture, 4-unit inline countdown timer bar, 2-column grid for speaker spotlight, 2-column FAQ layout with sticky category rail.",
      imageBehavior: "Optimized 2-column cards (50% container width), background mesh blur intensity reduced for GPU power efficiency.",
    },
    {
      device: "Desktop",
      range: "1024px – 1920px+",
      layoutStrategy: "Full-bleed hero imagery with subtle parallax scroll layers, 4-unit horizontal countdown banner with milliseconds ticker, 4-column speaker showcase grid, side-by-side video preview & early-bird perks card.",
      imageBehavior: "Full 1920x1080 high-res WebP hero assets with GPU-accelerated backdrop-filter and floating particle canvas.",
    },
  ],

  iconographySpecs: {
    library: "Lucide React (Feather SVG system)",
    strokeWeight: "1.75px (Default) / 2px (Accents & CTA) / 1.5px (Editorial)",
    sizes: {
      micro: "14px (Badges, tags, status pills)",
      default: "18px - 20px (Buttons, form inputs, list bullets)",
      featured: "28px - 36px (Feature cards, countdown anchors, stat icons)",
      hero: "48px - 64px (Play button overlays, VIP badge icons)",
    },
    alignment: "Perfect optical vertical alignment with font cap-height using flexbox items-center.",
  },

  masterAIPrompt: `### MASTER AI PROMPT: PRODUCTION-READY "COMING SOON" EVENT TEMPLATE SYSTEM

SYSTEM ROLE & DIRECTIVE:
You are a Principal Frontend Architect and Senior Creative Director. Generate a complete, accessible, and high-performance "Coming Soon" Event Landing Page template system built in React with three distinct, production-ready design variations:
1. Minimalist Countdown-Focused (Deep cosmic dark mode, high-contrast monospace timer, geometric glassmorphism).
2. Vibrant Illustration-Heavy (Playful, dynamic gradients, 3D illustrated assets, floating sticker badges, confetti triggers).
3. Elegant Typography-Driven (Luxury editorial serif, split-screen hero, warm champagne/gold accents, generous whitespace).

---

### CORE SECTIONS & FUNCTIONAL REQUIREMENTS:

1. Header & Hero Section:
   - Visual backdrop with layered CSS mesh gradients and high-res event imagery (1920x1080 WebP).
   - Dynamic event badge ("GENEVA • OCT 2027" / "TOKYO • NOV 2027"), H1 headline with gradient text fill, and subline with instant value proposition.
   - Parallax mouse-hover micro-tilt on desktop.

2. Synchronized Live Countdown Timer:
   - Real-time countdown (Days, Hours, Minutes, Seconds, Milliseconds) with animated number flip transitions.
   - High-contrast monospace numeric typography with glowing neon / gold border card wrappers.
   - Fallback state with celebration banner once target timestamp is reached.

3. VIP Early-Bird Email Capture & Pass Generator:
   - Accessible input field with real-time email validation, loading states, and error alerts.
   - On successful submission, dynamically generate an interactive holographic VIP Digital Attendee Pass containing the user's name, VIP serial number (#VIP-2027-XXXX), dynamic QR code, and download/share actions.
   - Trigger animated canvas confetti burst on completion.

4. Speaker / Performer Spotlight Preview:
   - Multi-column grid (4-column on desktop, 2-column on tablet, swipe carousel on mobile).
   - High-fidelity portrait photography (400x400 WebP) with circular and rectangular masked variations.
   - Hover-reveal overlay displaying speaker bio, research topic tags, and social links.

5. Behind-The-Scenes Teaser Video Section:
   - Widescreen 16:9 teaser thumbnail with pulsating glassmorphic play button.
   - Interactive modal video player with trailer synopsis and session sneak peeks.

6. Social Proof & Live Pulse:
   - Real-time subscriber counter ("Join 14,280+ visionaries") with animated avatar cluster.
   - Testimonial carousel featuring past event attendee quotes, verified star ratings, and company badges.

7. Interactive FAQ Accordion:
   - Expandable/collapsible accordion with category filtering (Registration, Logistics, VIP Perks).
   - Smooth CSS height transition and rotating indicator icons.

8. Partner & Sponsor Logo Marquee:
   - Infinite monochrome marquee scroll with full-color hover transition.

---

### AI IMAGE GENERATION & VISUAL CONSISTENCY GUIDELINES:

When prompting AI image models (Midjourney v6, DALL-E 3, Flux 1.1) to generate cohesive assets for this landing page system, adhere to these anchor rules:

- Style Consistency Anchor:
  * Minimalist: 'dark cybernetic minimalism, clean studio volumetric lighting, deep navy #07090e, glowing cyan #00f0ff neon accents, 8k octane render'
  * Vibrant: '3D isometric claymorphism, vibrant warm peach #ff8c00 and magenta #ff007a gradients, soft rounded studio lighting'
  * Elegant: 'luxury editorial photography, warm ambient candlelight, warm champagne gold #d4af37, architectural symmetry, Leica SL2 50mm f/1.2'

- Negative Prompt Filters: Ensure zero visual artifacts by appending:
  'lowres, blurry, distorted face, oversaturated cartoonish skin, watermark, bad anatomy, text overlays'

- Aspect Ratios:
  * Hero Backdrops: --ar 16:9
  * Speaker Portraits: --ar 1:1
  * Teaser Thumbnails: --ar 16:9
  * Gallery Highlights: --ar 3:2

---

### RESPONSIVE BREAKPOINTS & PERFORMANCE RULES:
- Mobile (320px–767px): Single-column stacked layouts, 2x2 timer grid, minimum 48px touch targets, full-width CTA buttons.
- Tablet (768px–1023px): 2-column asymmetric grids, 4-unit horizontal timer banner.
- Desktop (1024px+): Full-bleed hero visuals, 4-column speaker grids, parallax background scroll.
- Performance: Native loading="lazy" on non-hero images, WebP format with JPEG fallbacks, SVG icons via Lucide React with 1.75px stroke weight.`,
};
