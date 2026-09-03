// MONOLITH — Self-contained React Architectural Styling System
// 100% React-based style injection (Zero external CSS files)

export const monolithStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Oswald:wght@500;600;700&family=Syne:wght@500;700;800&display=swap');

:root {
  /* 03 — Core Architectural Palette */
  --bg-primary: #EEE9E1;
  --color-ivory: #F8F5EF;
  --color-stone: #C9C1B5;
  --color-clay: #A96750;
  --color-rust: #874C3C;
  --color-deep-brown: #302825;
  --color-muted: #6E6862;
  --color-border: #CFC7BC;
  --color-border-light: rgba(207, 199, 188, 0.45);

  /* 28 — Architectural Typography System */
  --font-primary-sans: 'Inter', 'Manrope', -apple-system, sans-serif;
  --font-display: 'Manrope', 'Syne', sans-serif;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-condensed: 'Oswald', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Fluid Architectural Scale */
  --text-hero: clamp(2.8rem, 6.2vw, 6.8rem);
  --text-manifesto: clamp(2.25rem, 5vw, 5rem);
  --text-h1: clamp(2.4rem, 5vw + 0.5rem, 5.2rem);
  --text-h2: clamp(1.75rem, 3.2vw + 0.2rem, 3.25rem);
  --text-h3: clamp(1.2rem, 1.8vw, 2rem);
  --text-body: clamp(0.95rem, 1vw, 1.125rem);
  --text-meta: clamp(0.7rem, 0.75vw, 0.82rem);

  /* Layout & Grid Dimensions */
  --grid-margin: clamp(1.25rem, 3.5vw, 4.5rem);
  --grid-gutter: clamp(1rem, 2vw, 2.5rem);
  --header-height: 84px;

  /* 30 — Motion Language: Slow, intentional and precise */
  --ease-architectural: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-slow: 0.8s;
  --duration-base: 0.4s;
  --duration-fast: 0.2s;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  background-color: var(--bg-primary);
  color: var(--color-deep-brown);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-primary);
  color: var(--color-deep-brown);
  line-height: 1.5;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
  cursor: default;
}

::selection {
  background-color: var(--color-clay);
  color: var(--color-ivory);
}

/* 33 — Accessible Focus States */
:focus-visible {
  outline: 2px solid var(--color-clay) !important;
  outline-offset: 3px !important;
}

/* Subtle architectural paper texture overlay */
.paper-texture {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 999;
  opacity: 0.038;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Architectural grid overlay lines */
.architectural-grid-lines {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 var(--grid-margin);
  opacity: 0.35;
}

.architectural-grid-lines .col-line {
  border-right: 1px solid var(--color-border);
  height: 100%;
}

.architectural-grid-lines .col-line:first-child {
  border-left: 1px solid var(--color-border);
}

/* ==========================================================================
   31 — CUSTOM CURSOR (Small circle, VIEW, OPEN, EXPLORE)
   ========================================================================== */
.arch-cursor-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(48, 40, 37, 0.45);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  transform: translate(-50%, -50%);
  transition: width 0.35s var(--ease-architectural),
              height 0.35s var(--ease-architectural),
              border-color 0.3s ease,
              background-color 0.35s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arch-cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 4px;
  height: 4px;
  background-color: var(--color-clay);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1001;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s ease;
}

.cursor-label-text {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: var(--color-ivory);
  text-transform: uppercase;
  pointer-events: none;
}

.arch-cursor-follower.mode-view {
  width: 68px;
  height: 68px;
  background-color: rgba(135, 76, 60, 0.85);
  border-color: var(--color-rust);
  backdrop-filter: blur(4px);
}

.arch-cursor-follower.mode-open {
  width: 62px;
  height: 62px;
  background-color: rgba(48, 40, 37, 0.88);
  border-color: var(--color-deep-brown);
  backdrop-filter: blur(4px);
}

.arch-cursor-follower.mode-explore {
  width: 80px;
  height: 80px;
  background-color: rgba(169, 103, 80, 0.88);
  border-color: var(--color-clay);
  backdrop-filter: blur(4px);
}

.arch-cursor-follower.mode-active {
  width: 48px;
  height: 48px;
  background-color: rgba(201, 193, 181, 0.25);
  border-color: var(--color-clay);
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-smooth);
}

button {
  font-family: inherit;
  border: none;
  background: none;
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
  user-select: none;
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--grid-margin);
  background: rgba(238, 233, 225, 0.95);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--color-border);
  transition: background 0.4s var(--ease-architectural),
              box-shadow 0.4s var(--ease-architectural);
}

.site-header.scrolled {
  background: rgba(248, 245, 239, 0.96);
  box-shadow: 0 8px 24px rgba(48, 40, 37, 0.05);
}

.brand-container {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  line-height: 1;
}

.brand-tagline {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-top: 4px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 3.5rem);
  list-style: none;
}

.nav-item a {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  position: relative;
  padding: 6px 0;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
}

.nav-item a:hover {
  color: var(--color-clay);
}

.nav-item a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-clay);
  transition: width 0.35s var(--ease-architectural);
}

.nav-item a.active::after {
  width: 100%;
}

.nav-item a.active {
  color: var(--color-clay);
}

.nav-cta-wrapper {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.btn-cta-nav {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-deep-brown);
  border: 1px solid var(--color-deep-brown);
  padding: 10px 22px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  transition: color 0.4s var(--ease-architectural), border-color 0.4s var(--ease-architectural);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-cta-nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-deep-brown);
  transform: translateY(100%);
  transition: transform 0.4s var(--ease-architectural);
  z-index: -1;
}

.btn-cta-nav:hover {
  color: var(--color-ivory);
}

.btn-cta-nav:hover::before {
  transform: translateY(0);
}

.mobile-toggle-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--color-border);
  padding: 8px;
  z-index: 120;
}

.mobile-toggle-btn span {
  display: block;
  width: 20px;
  height: 1.5px;
  background-color: var(--color-deep-brown);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.mobile-toggle-btn.open span:first-child {
  transform: translateY(6.5px) rotate(45deg);
}

.mobile-toggle-btn.open span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle-btn.open span:last-child {
  transform: translateY(-6.5px) rotate(-45deg);
}

.mobile-nav-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 380px;
  height: 100vh;
  background: var(--color-ivory);
  z-index: 110;
  padding: 5.5rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid var(--color-border);
  transform: translateX(100%);
  transition: transform 0.4s var(--ease-architectural);
  box-shadow: -20px 0 60px rgba(48, 40, 37, 0.15);
}

.mobile-nav-drawer.open {
  transform: translateX(0);
}

.mobile-nav-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(48, 40, 37, 0.45);
  backdrop-filter: blur(4px);
  z-index: 105;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.mobile-nav-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.mobile-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-links-list a {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.mobile-links-list a.active {
  color: var(--color-clay);
}

.mobile-links-list .mobile-index {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-clay);
}

.mobile-drawer-footer {
  border-top: 1px solid var(--color-border);
  padding-top: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-muted);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* ==========================================================================
   HERO — DYNAMIC 2-COLUMN EXHIBITION (LAPTOP & DESKTOP)
   ========================================================================== */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 1.5rem);
  padding-bottom: 2rem;
  padding-left: var(--grid-margin);
  padding-right: var(--grid-margin);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  background-color: var(--bg-primary);
  overflow: hidden;
}

.hero-subbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.85rem;
  width: 100%;
  gap: 1rem;
}

.hero-tag-badge {
  display: flex;
  align-items: center;
}

.hero-issue-tag {
  font-family: var(--font-mono);
  font-size: var(--text-meta);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-clay);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.hero-issue-tag::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 1px;
  background-color: var(--color-clay);
}

.hero-meta-stamps-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-pill-stamp {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.16em;
  color: var(--color-deep-brown);
  background: rgba(248, 245, 239, 0.85);
  border: 1px solid var(--color-border);
  padding: 4px 10px;
  backdrop-filter: blur(6px);
}

.hero-main-layout {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  gap: clamp(2rem, 4.5vw, 5rem);
  width: 100%;
  flex: 1;
  margin: 0.5rem 0;
}

.hero-typography-layer {
  position: relative;
  z-index: 5;
  width: 100%;
  will-change: transform;
}

.hero-title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 800;
  line-height: 0.88;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  margin: 0;
  display: flex;
  flex-direction: column;
}

.title-line {
  display: block;
  overflow: hidden;
  white-space: nowrap;
}

.title-line span {
  display: inline-block;
}

.title-line.title-accent {
  color: var(--color-rust);
  font-family: var(--font-serif);
  font-weight: 400;
  letter-spacing: -0.01em;
  font-style: italic;
  padding-left: clamp(0.5rem, 2vw, 3rem);
}

.hero-visual-col {
  position: relative;
  width: 100%;
  height: clamp(380px, 56vh, 580px);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.hero-visual-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color-stone);
  border: 1px solid var(--color-border);
  box-shadow: 0 30px 70px -15px rgba(48, 40, 37, 0.18);
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.04);
  filter: contrast(1.04) brightness(0.98);
  transition: transform 1.2s var(--ease-architectural);
}

.hero-visual-col:hover .hero-image {
  transform: scale(1.07);
}

.visual-caption-badge {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(248, 245, 239, 0.94);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 8px 14px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 4;
}

.visual-caption-badge .badge-code {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  color: var(--color-deep-brown);
  font-weight: 700;
}

.visual-caption-badge .badge-dot {
  width: 5px;
  height: 5px;
  background-color: var(--color-clay);
  border-radius: 50%;
  animation: pulse-dot 2.5s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.hero-metadata-bar {
  position: relative;
  z-index: 6;
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  align-items: flex-end;
  border-top: 1px solid var(--color-border);
  padding-top: clamp(1rem, 1.8vh, 1.5rem);
  gap: var(--grid-gutter);
}

.meta-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.meta-value {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-deep-brown);
  letter-spacing: 0.08em;
}

.meta-swatches {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 2px;
}

.swatch-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--color-muted);
  letter-spacing: 0.06em;
}

.swatch-box {
  width: 8px;
  height: 8px;
  border: 1px solid var(--color-border);
}

.swatch-stone { background-color: var(--color-stone); }
.swatch-clay  { background-color: var(--color-clay); }
.swatch-rust  { background-color: var(--color-rust); }

.hero-scroll-cue {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.scroll-enter-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  font-weight: 600;
  transition: color 0.3s ease;
}

.scroll-enter-btn:hover {
  color: var(--color-clay);
}

.scroll-enter-arrow {
  font-size: 1.15rem;
  line-height: 1;
  color: var(--color-clay);
  animation: bounce-subtle 2s infinite ease-in-out;
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

/* ==========================================================================
   MANIFESTO
   ========================================================================== */
.manifesto-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: clamp(5rem, 12vh, 9rem) var(--grid-margin);
  background-color: #EEE9E1;
  border-top: 1px solid var(--color-border);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.manifesto-stage {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.manifesto-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1rem;
  margin-bottom: clamp(2.5rem, 5vh, 4rem);
}

.manifesto-headline-block {
  display: flex;
  flex-direction: column;
  gap: clamp(1.75rem, 4vh, 3.5rem);
  margin-bottom: clamp(2.5rem, 5vh, 4rem);
}

.manifesto-statement {
  font-family: var(--font-display);
  font-size: var(--text-manifesto);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
}

.manifesto-statement.statement-contrast {
  color: var(--color-clay);
  font-family: var(--font-serif);
  font-weight: 400;
  font-style: italic;
  letter-spacing: -0.01em;
  line-height: 1.08;
}

.manifesto-word-wrap {
  display: inline-block;
  overflow: hidden;
  margin-right: 0.28em;
  vertical-align: bottom;
}

.manifesto-word {
  display: inline-block;
  transition: opacity 0.7s var(--ease-architectural),
              transform 0.7s var(--ease-architectural),
              filter 0.7s var(--ease-architectural);
  will-change: opacity, transform, filter;
}

.manifesto-word.hidden {
  opacity: 0.12;
  transform: translateY(35%) scale(0.96);
  filter: blur(2px);
}

.manifesto-word.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.manifesto-lead-container {
  max-width: 720px;
  border-left: 2px solid var(--color-clay);
  padding-left: clamp(1.25rem, 2.5vw, 2.25rem);
  margin-top: 1rem;
}

.manifesto-lead-text {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.3vw, 1.35rem);
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-deep-brown);
}

/* ==========================================================================
   FEATURED PROJECT
   ========================================================================== */
.featured-project-section {
  position: relative;
  width: 100%;
  padding: clamp(5rem, 10vh, 8.5rem) var(--grid-margin);
  background-color: var(--color-ivory);
  border-top: 1px solid var(--color-border);
  z-index: 10;
  overflow: hidden;
}

.featured-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1.25rem;
  margin-bottom: clamp(2rem, 4vh, 3.5rem);
}

.featured-canvas-wrapper {
  position: relative;
  width: 100%;
  height: clamp(480px, 70vh, 780px);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background-color: var(--color-deep-brown);
  margin-bottom: clamp(2rem, 3.5vh, 3.5rem);
  box-shadow: 0 40px 100px -25px rgba(48, 40, 37, 0.25);
}

.featured-image-plate {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  will-change: transform;
  transform-origin: center center;
  transition: transform 0.15s linear;
}

.featured-overlay-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: clamp(2rem, 5vw, 4.5rem);
  background: linear-gradient(to top, rgba(48, 40, 37, 0.92) 0%, rgba(48, 40, 37, 0.4) 60%, transparent 100%);
  color: var(--color-ivory);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--grid-gutter);
  z-index: 2;
  will-change: transform;
}

.featured-titles-block {
  max-width: 680px;
}

.featured-location-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-clay);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.featured-location-tag::before {
  content: '●';
  font-size: 0.6rem;
  color: var(--color-rust);
}

.featured-project-name {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--color-ivory);
  margin-bottom: 1rem;
}

.featured-project-desc {
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 1.15vw, 1.2rem);
  color: var(--color-stone);
  max-width: 520px;
  line-height: 1.55;
}

.btn-explore-project {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-ivory);
  background: rgba(169, 103, 80, 0.9);
  border: 1px solid var(--color-clay);
  padding: 16px 32px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  backdrop-filter: blur(8px);
  transition: background 0.35s var(--ease-architectural),
              transform 0.35s var(--ease-architectural),
              box-shadow 0.35s ease;
  white-space: nowrap;
}

.btn-explore-project:hover {
  background: var(--color-rust);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(135, 76, 60, 0.4);
}

.btn-explore-project .arrow-icon {
  transition: transform 0.3s ease;
}

.btn-explore-project:hover .arrow-icon {
  transform: translateX(4px);
}

.featured-specs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--grid-gutter);
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
}

.spec-column {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 1.25rem 0;
  border-left: 1px solid var(--color-border);
  padding-left: 1.5rem;
  transition: transform 0.4s var(--ease-architectural), opacity 0.4s ease;
}

.spec-column:first-child {
  border-left: none;
  padding-left: 0;
}

.spec-num {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-clay);
  font-weight: 700;
  letter-spacing: 0.16em;
}

.spec-heading {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
}

.spec-sub {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-muted);
  letter-spacing: 0.08em;
}

/* ==========================================================================
   PROJECT OVERLAY / VIEWER
   ========================================================================== */
.project-editorial-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--color-ivory);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s var(--ease-architectural);
  overflow-y: auto;
}

.project-editorial-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.overlay-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem var(--grid-margin);
  border-bottom: 1px solid var(--color-border);
  background: rgba(248, 245, 239, 0.95);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 50;
}

.overlay-project-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
}

.overlay-nav-tabs {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2.5vw, 2.5rem);
  list-style: none;
}

.overlay-tab-btn {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
  padding: 6px 0;
  position: relative;
  transition: color 0.3s;
}

.overlay-tab-btn.active {
  color: var(--color-clay);
  font-weight: 700;
}

.overlay-tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-clay);
}

.overlay-controls {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.overlay-nav-arrow-btn {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  border: 1px solid var(--color-border);
  padding: 8px 14px;
  transition: background 0.3s, color 0.3s;
}

.overlay-nav-arrow-btn:hover {
  background: var(--color-deep-brown);
  color: var(--color-ivory);
}

.overlay-close-btn {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
  background: var(--color-deep-brown);
  color: var(--color-ivory);
  border: 1px solid var(--color-deep-brown);
  padding: 8px 18px;
  transition: background 0.3s, border-color 0.3s;
}

.overlay-close-btn:hover {
  background: var(--color-clay);
  border-color: var(--color-clay);
}

.overlay-body-content {
  flex: 1;
  padding: clamp(2rem, 5vh, 4rem) var(--grid-margin);
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: clamp(2rem, 4vw, 5rem);
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
}

.overlay-image-gallery {
  position: relative;
  width: 100%;
  min-height: 500px;
  background: var(--color-stone);
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.overlay-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 500px;
  max-height: 72vh;
  transition: opacity 0.5s ease;
}

.overlay-slide-counter {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(48, 40, 37, 0.85);
  color: var(--color-ivory);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  padding: 4px 12px;
  backdrop-filter: blur(6px);
}

.overlay-editorial-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tab-badge {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-clay);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  display: block;
}

.tab-headline {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.2vw, 3rem);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  line-height: 1.05;
  margin-bottom: 1.5rem;
}

.tab-paragraph {
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-muted);
  margin-bottom: 2rem;
}

.overlay-meta-table {
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.overlay-meta-row {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--color-border);
}

.overlay-meta-row .row-label {
  color: var(--color-muted);
  text-transform: uppercase;
}

.overlay-meta-row .row-val {
  color: var(--color-deep-brown);
  font-weight: 600;
}

/* ==========================================================================
   PROJECT INDEX & FLOATING PREVIEW
   ========================================================================== */
.project-index-section {
  position: relative;
  width: 100%;
  padding: clamp(5rem, 10vh, 8.5rem) var(--grid-margin);
  background-color: var(--bg-primary);
  border-top: 1px solid var(--color-border);
  z-index: 10;
}

.index-header-area {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1.5rem;
  margin-bottom: 2.5rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.index-title-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.index-supertitle {
  font-family: var(--font-mono);
  font-size: var(--text-meta);
  color: var(--color-clay);
  letter-spacing: 0.2em;
  font-weight: 600;
}

.index-main-title {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  line-height: 0.95;
  letter-spacing: -0.02em;
}

.project-filters-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 8px 16px;
  border: 1px solid var(--color-border);
  color: var(--color-muted);
  background: transparent;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--color-deep-brown);
  color: var(--color-deep-brown);
}

.filter-btn.active {
  background: var(--color-deep-brown);
  color: var(--color-ivory);
  border-color: var(--color-deep-brown);
}

.project-vertical-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.project-row {
  position: relative;
  display: grid;
  grid-template-columns: 100px 1.5fr 1fr 60px;
  align-items: center;
  padding: clamp(1.5rem, 3vh, 2.5rem) 0;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: transform 0.4s var(--ease-architectural), padding-left 0.4s var(--ease-architectural);
}

.project-row:hover {
  transform: translateX(12px);
  padding-left: 10px;
}

.row-index-num {
  font-family: var(--font-mono);
  font-size: clamp(1.1rem, 1.4vw, 1.6rem);
  font-weight: 700;
  color: var(--color-clay);
  letter-spacing: 0.12em;
  transition: transform 0.4s var(--ease-architectural), color 0.3s;
}

.project-row:hover .row-index-num {
  transform: scale(1.18);
  color: var(--color-rust);
}

.row-name {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3.2vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  transition: color 0.3s ease;
}

.project-row:hover .row-name {
  color: var(--color-rust);
}

.row-category-tag {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.65;
  transition: opacity 0.3s, color 0.3s;
}

.project-row:hover .row-category-tag {
  opacity: 1;
  color: var(--color-deep-brown);
}

.row-arrow {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  color: var(--color-stone);
  text-align: right;
  transition: transform 0.4s var(--ease-architectural), color 0.3s;
}

.project-row:hover .row-arrow {
  transform: translateX(6px);
  color: var(--color-clay);
}

.project-floating-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 220px;
  pointer-events: none;
  z-index: 950;
  border: 1px solid var(--color-border);
  background: var(--color-stone);
  box-shadow: 0 25px 60px rgba(48, 40, 37, 0.28);
  overflow: hidden;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.92);
  transition: opacity 0.35s ease, transform 0.35s ease;
  will-change: left, top, opacity, transform;
}

.project-floating-preview.visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.floating-preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ==========================================================================
   MATERIAL / PROCESS & TIMELINE
   ========================================================================== */
.material-process-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: clamp(5rem, 10vh, 8.5rem) var(--grid-margin);
  background-color: var(--color-deep-brown);
  color: var(--color-ivory);
  border-top: 1px solid rgba(248, 245, 239, 0.15);
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.material-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid rgba(248, 245, 239, 0.15);
  padding-bottom: 1.25rem;
  margin-bottom: 2.5rem;
}

.material-title-wrap {
  margin-bottom: clamp(1.75rem, 3.5vh, 3rem);
}

.material-section-title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5.5vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  line-height: 0.92;
  color: var(--color-ivory);
}

.material-nav-pills {
  display: flex;
  gap: clamp(0.75rem, 1.5vw, 2rem);
  flex-wrap: wrap;
  margin-bottom: clamp(2rem, 4vh, 3.5rem);
  border-bottom: 1px solid rgba(248, 245, 239, 0.12);
  padding-bottom: 1.5rem;
}

.material-tab-btn {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-stone);
  padding: 10px 20px;
  border: 1px solid rgba(248, 245, 239, 0.2);
  background: transparent;
  transition: all 0.3s ease;
  position: relative;
}

.material-tab-btn:hover {
  border-color: var(--color-clay);
  color: var(--color-ivory);
}

.material-tab-btn.active {
  background: var(--color-clay);
  color: var(--color-ivory);
  border-color: var(--color-clay);
  font-weight: 700;
}

.material-hero-surface {
  position: relative;
  width: 100%;
  height: clamp(500px, 68vh, 800px);
  border: 1px solid rgba(248, 245, 239, 0.18);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background-color: #1a1614;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
}

.material-macro-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background 1s ease, filter 1s ease;
  animation: slow-material-breathe 22s infinite alternate ease-in-out;
}

@keyframes slow-material-breathe {
  0% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.05) translate(-1%, 1%); }
  100% { transform: scale(1.02) translate(1%, -1%); }
}

.material-lighting-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 35% 35%, rgba(255, 245, 230, 0.12) 0%, transparent 60%),
              linear-gradient(to top, rgba(26, 22, 20, 0.95) 0%, rgba(26, 22, 20, 0.4) 50%, transparent 100%);
  pointer-events: none;
}

.material-surface-content {
  position: relative;
  z-index: 5;
  width: 100%;
  padding: clamp(2rem, 5vw, 4.5rem);
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--grid-gutter);
  align-items: flex-end;
}

.mat-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5.5vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 0.9;
  text-transform: uppercase;
  color: var(--color-ivory);
  margin-bottom: 0.75rem;
}

.mat-essence {
  font-family: var(--font-serif);
  font-size: clamp(1.2rem, 1.8vw, 1.85rem);
  font-style: italic;
  color: var(--color-clay);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.mat-description {
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  color: var(--color-stone);
  max-width: 580px;
}

.mat-metadata-card {
  background: rgba(48, 40, 37, 0.75);
  border: 1px solid rgba(248, 245, 239, 0.15);
  padding: 1.75rem;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mat-meta-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.mat-meta-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-clay);
}

.mat-meta-value {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-ivory);
}

.drawing-schematic-wrapper {
  background: rgba(48, 40, 37, 0.85);
  border: 1px solid rgba(248, 245, 239, 0.18);
  padding: clamp(1.25rem, 2.5vw, 2rem);
  margin-bottom: 2.5rem;
  position: relative;
}

.schematic-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(248, 245, 239, 0.15);
  padding-bottom: 0.85rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.schematic-breadcrumbs {
  display: flex;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  color: var(--color-stone);
}

.schematic-crumb.active {
  color: var(--color-clay);
  font-weight: 700;
}

.schematic-indicator {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--color-muted);
}

.schematic-canvas-box {
  width: 100%;
  height: clamp(260px, 36vh, 380px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.schematic-svg {
  width: 100%;
  height: 100%;
  max-width: 900px;
}

.schematic-layer {
  opacity: 0;
  transition: opacity 0.6s var(--ease-architectural);
}

.schematic-layer.visible {
  opacity: 1;
}

.horizontal-process-timeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--grid-gutter);
  border-top: 1px solid rgba(248, 245, 239, 0.18);
  padding-top: 2rem;
}

.timeline-stage-card {
  border: 1px solid rgba(248, 245, 239, 0.12);
  padding: 1.75rem 1.25rem;
  background: rgba(48, 40, 37, 0.4);
  cursor: pointer;
  transition: all 0.35s var(--ease-architectural);
}

.timeline-stage-card:hover,
.timeline-stage-card.active {
  border-color: var(--color-clay);
  background: rgba(169, 103, 80, 0.12);
  transform: translateY(-4px);
}

.stage-top-meta {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-clay);
  margin-bottom: 1rem;
  letter-spacing: 0.16em;
}

.stage-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-ivory);
  margin-bottom: 0.5rem;
}

.stage-desc {
  font-family: var(--font-body);
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--color-stone);
}

/* ==========================================================================
   STUDIO SECTION & LANYARD
   ========================================================================== */
.studio-section {
  position: relative;
  width: 100%;
  padding: clamp(5rem, 10vh, 8.5rem) var(--grid-margin);
  background-color: var(--bg-primary);
  border-top: 1px solid var(--color-border);
  z-index: 10;
}

.studio-hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(2.5rem, 5vw, 5rem);
  margin-bottom: clamp(3rem, 6vh, 5rem);
}

.studio-editorial-heading {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.5vw, 4.8rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  margin-bottom: 1.75rem;
}

.studio-body-p {
  font-family: var(--font-body);
  font-size: clamp(1rem, 1.25vw, 1.3rem);
  line-height: 1.6;
  color: var(--color-deep-brown);
  margin-bottom: 1.25rem;
}

.studio-body-p.sub {
  color: var(--color-muted);
}

.studio-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--grid-gutter);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 2rem 0;
  margin-top: 2.5rem;
}

.studio-stat-box {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.2vw, 3.5rem);
  font-weight: 800;
  color: var(--color-rust);
  line-height: 1;
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  font-weight: 600;
}

.studio-visual-col {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.studio-layered-visual {
  position: relative;
  width: 100%;
  height: clamp(320px, 42vh, 480px);
  border: 1px solid var(--color-border);
  background: var(--color-stone);
  overflow: hidden;
  box-shadow: 0 30px 80px -20px rgba(48, 40, 37, 0.2);
}

.studio-base-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.06) brightness(0.96);
}

.studio-tracing-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border: 10px solid rgba(248, 245, 239, 0.6);
  display: flex;
  justify-content: space-between;
  padding: 12px;
}

.blueprint-stamp,
.blueprint-stamp-right {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: var(--color-deep-brown);
  background: rgba(248, 245, 239, 0.9);
  padding: 4px 8px;
  height: fit-content;
  border: 1px solid var(--color-border);
}

.lanyard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
}

.lanyard-strap {
  width: 24px;
  height: 50px;
  background: repeating-linear-gradient(
    45deg,
    #302825,
    #302825 6px,
    #A96750 6px,
    #A96750 12px
  );
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.lanyard-clip {
  width: 30px;
  height: 12px;
  background: linear-gradient(to bottom, #d6d0c7, #8c857b);
  border: 1px solid #5a544d;
  border-radius: 2px;
  margin-bottom: -4px;
  z-index: 5;
}

.lanyard-card {
  width: 100%;
  max-width: 320px;
  background: var(--color-ivory);
  border: 1px solid var(--color-border);
  box-shadow: 0 20px 50px rgba(48, 40, 37, 0.2);
  padding: 1.5rem 1.25rem;
  transform-style: preserve-3d;
  cursor: grab;
  position: relative;
}

.lanyard-card.hovered {
  box-shadow: 0 30px 70px rgba(169, 103, 80, 0.3);
}

.lanyard-card-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-top-slot {
  width: 40px;
  height: 5px;
  background: var(--color-stone);
  border-radius: 3px;
  margin: 0 auto;
}

.card-badge-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.65rem;
}

.card-brand {
  font-family: var(--font-display);
  font-weight: 800;
  letter-spacing: 0.2em;
  font-size: 1.05rem;
  color: var(--color-deep-brown);
}

.card-year {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-clay);
  font-weight: 700;
}

.card-pass-type {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.pass-title {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: var(--color-deep-brown);
  line-height: 1;
}

.pass-meta {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  color: var(--color-clay);
}

.card-barcode-box {
  background: rgba(201, 193, 181, 0.2);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  border: 1px dashed var(--color-border);
}

.barcode-bars {
  width: 100%;
  height: 24px;
  background: repeating-linear-gradient(
    90deg,
    #302825 0px,
    #302825 3px,
    transparent 3px,
    transparent 5px,
    #302825 5px,
    #302825 8px,
    transparent 8px,
    transparent 10px
  );
}

.barcode-code {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  color: var(--color-muted);
}

.card-footer-project {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 1px solid var(--color-border);
  padding-top: 0.65rem;
}

.proj-label {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  color: var(--color-clay);
}

.proj-val {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-deep-brown);
}

.proj-loc {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--color-muted);
}

.studio-team-area {
  border-top: 1px solid var(--color-border);
  padding-top: 3rem;
}

.team-header-line {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  color: var(--color-clay);
  margin-bottom: 1.75rem;
}

.team-typography-list {
  display: flex;
  flex-direction: column;
}

.team-member-row {
  position: relative;
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  align-items: baseline;
  padding: 2rem 0;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: transform 0.3s var(--ease-architectural);
}

.team-member-row:hover {
  transform: translateX(8px);
}

.member-main-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.member-name {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.3vw, 2.2rem);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  letter-spacing: -0.01em;
  transition: color 0.3s;
}

.team-member-row:hover .member-name {
  color: var(--color-clay);
}

.member-role {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-clay);
  font-weight: 600;
}

.member-bio {
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--color-muted);
  max-width: 600px;
}

.member-hover-portrait {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%) scale(0.85);
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s var(--ease-architectural);
  box-shadow: 0 10px 25px rgba(48, 40, 37, 0.2);
}

.member-hover-portrait.show {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}

.portrait-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-ivory);
}

.portrait-monogram {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
}

.portrait-fictional-tag {
  font-family: var(--font-mono);
  font-size: 0.45rem;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

/* ==========================================================================
   25 — FINAL CTA SECTION
   ========================================================================== */
.final-cta-section {
  position: relative;
  width: 100%;
  min-height: 80vh;
  padding: clamp(6rem, 12vh, 10rem) var(--grid-margin);
  background-color: var(--bg-primary);
  border-top: 1px solid var(--color-border);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.final-cta-container {
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.final-cta-headline {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6.5vw, 6.8rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  margin-bottom: 1.75rem;
}

.final-cta-sub {
  font-family: var(--font-serif);
  font-size: clamp(1.3rem, 2vw, 2rem);
  font-style: italic;
  color: var(--color-clay);
  max-width: 680px;
  margin-bottom: 3rem;
  line-height: 1.4;
}

.final-cta-buttons {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-cta-primary {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-ivory);
  background: var(--color-deep-brown);
  border: 1px solid var(--color-deep-brown);
  padding: 18px 36px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.4s var(--ease-architectural);
}

.btn-cta-primary:hover {
  background: var(--color-clay);
  border-color: var(--color-clay);
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(169, 103, 80, 0.35);
}

.btn-cta-secondary {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-deep-brown);
  border: 1px solid var(--color-deep-brown);
  padding: 18px 36px;
  display: inline-flex;
  align-items: center;
  transition: all 0.4s var(--ease-architectural);
}

.btn-cta-secondary:hover {
  background: var(--color-deep-brown);
  color: var(--color-ivory);
  transform: translateY(-3px);
}

/* ==========================================================================
   26 — PROJECT INQUIRY MODAL
   ========================================================================== */
.inquiry-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(48, 40, 37, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 2500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1.25rem, 3.5vw, 3rem);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s var(--ease-architectural);
}

.inquiry-modal-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.inquiry-modal-sheet {
  position: relative;
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  background: var(--color-ivory);
  border: 1px solid var(--color-border);
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.45);
  overflow-y: auto;
  padding: clamp(1.75rem, 4vw, 3.5rem);
  transform: translateY(30px) scale(0.98);
  transition: transform 0.4s var(--ease-architectural);
}

.inquiry-modal-backdrop.open .inquiry-modal-sheet {
  transform: translateY(0) scale(1);
}

.inquiry-close-btn {
  position: sticky;
  top: 0;
  float: right;
  z-index: 20;
  width: 40px;
  height: 40px;
  background: var(--color-deep-brown);
  color: var(--color-ivory);
  border: 1px solid var(--color-deep-brown);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  margin-top: -0.75rem;
  margin-right: -0.75rem;
}

.inquiry-close-btn:hover {
  background: var(--color-clay);
  transform: rotate(90deg);
}

.inquiry-header {
  margin-bottom: 2rem;
}

.inquiry-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--color-clay);
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  display: block;
}

.inquiry-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.8vw, 3.2rem);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  line-height: 0.95;
  margin-bottom: 0.65rem;
}

.inquiry-lead {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-muted);
}

.inquiry-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-field-full {
  grid-column: 1 / -1;
}

.field-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  font-weight: 600;
}

.field-input,
.field-select,
.field-textarea {
  width: 100%;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-deep-brown);
  background: transparent;
  border: 1px solid var(--color-border);
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.3s, background-color 0.3s;
  border-radius: 0;
}

.field-input:focus,
.field-select:focus,
.field-textarea:focus {
  border-color: var(--color-clay);
  background-color: rgba(255, 255, 255, 0.5);
}

.field-input.has-error,
.field-textarea.has-error {
  border-color: #c94030;
}

.field-error {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: #c94030;
  letter-spacing: 0.05em;
}

.form-action-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-submit-inquiry {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-ivory);
  background: var(--color-deep-brown);
  border: 1px solid var(--color-deep-brown);
  padding: 15px 32px;
  cursor: pointer;
  transition: all 0.3s var(--ease-architectural);
}

.btn-submit-inquiry:hover {
  background: var(--color-clay);
  border-color: var(--color-clay);
}

.btn-submit-inquiry:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.inquiry-disclaimer {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--color-muted);
}

.inquiry-success-box {
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.success-badge {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  color: var(--color-clay);
  margin-bottom: 0.85rem;
}

.success-heading {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  margin-bottom: 0.4rem;
}

.success-sub {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-style: italic;
  color: var(--color-rust);
  margin-bottom: 1.25rem;
}

.success-body {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-muted);
  max-width: 520px;
  line-height: 1.6;
}

/* ==========================================================================
   27 — MINIMAL FOOTER
   ========================================================================== */
.site-footer {
  background-color: var(--color-deep-brown);
  color: var(--color-ivory);
  padding: clamp(4.5rem, 8vh, 7rem) var(--grid-margin) 2.5rem;
  border-top: 1px solid rgba(248, 245, 239, 0.12);
  position: relative;
  z-index: 10;
}

.footer-minimal-container {
  display: flex;
  flex-direction: column;
  gap: clamp(3.5rem, 6vh, 5rem);
}

.footer-main-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  flex-wrap: wrap;
}

.footer-col-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-huge-brand {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8.5vw, 9.5rem);
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-ivory);
  line-height: 0.85;
}

.footer-tagline-block {
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
  font-size: clamp(0.85rem, 1.2vw, 1.25rem);
  letter-spacing: 0.22em;
  color: var(--color-clay);
  line-height: 1.4;
  text-transform: uppercase;
  font-weight: 600;
}

.footer-minimal-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-end;
}

.footer-minimal-links a,
.footer-link-btn {
  font-family: var(--font-mono);
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-stone);
  transition: color 0.3s;
}

.footer-minimal-links a:hover,
.footer-link-btn:hover {
  color: var(--color-ivory);
}

.footer-bottom-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(248, 245, 239, 0.14);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  color: var(--color-stone);
  opacity: 0.75;
}

/* ==========================================================================
   38 — TOAST FEEDBACK
   ========================================================================== */
.monolith-toast {
  position: fixed;
  bottom: 2rem;
  right: var(--grid-margin);
  z-index: 3000;
  pointer-events: none;
  animation: toast-slide-up 0.35s var(--ease-architectural) forwards;
}

@keyframes toast-slide-up {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.toast-inner {
  background: rgba(48, 40, 37, 0.94);
  color: var(--color-ivory);
  border: 1px solid var(--color-clay);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 10px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 16px 36px rgba(48, 40, 37, 0.3);
}

.toast-dot {
  width: 6px;
  height: 6px;
  background-color: var(--color-clay);
  border-radius: 50%;
  animation: pulse-dot 2s infinite ease-in-out;
}

.toast-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
}

/* ==========================================================================
   32 — DYNAMIC RESPONSIVE BREAKPOINTS
   Desktop: 1440px+
   Laptop: 1025px–1439px
   Tablet: 768px–1024px
   Mobile: 360px–767px
   ========================================================================== */
@media (min-width: 1440px) {
  :root {
    --grid-margin: 4.5rem;
    --grid-gutter: 2.75rem;
    --text-hero: clamp(3.2rem, 6vw, 6.6rem);
  }
  .hero-main-layout {
    grid-template-columns: 1.15fr 1fr;
    gap: 5rem;
  }
  .hero-visual-col {
    height: clamp(420px, 60vh, 620px);
  }
}

@media (min-width: 1025px) and (max-width: 1439px) {
  :root {
    --grid-margin: 2.5rem;
    --text-hero: clamp(2.6rem, 5vw, 5.2rem);
  }
  .hero-main-layout {
    grid-template-columns: 1.15fr 1fr;
    gap: 3rem;
  }
  .hero-visual-col {
    height: clamp(340px, 50vh, 480px);
  }
}

/* Tablet (768px–1024px) */
@media (max-width: 1024px) {
  .hero-section {
    min-height: auto;
    padding-top: calc(var(--header-height) + 1.25rem);
    padding-bottom: 2rem;
    gap: 1.5rem;
  }
  .hero-meta-stamps-row {
    display: none;
  }
  .hero-main-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .hero-visual-col {
    height: clamp(280px, 45vh, 400px);
  }
  .hero-title {
    font-size: clamp(2.4rem, 8.5vw, 4rem);
  }
  .title-line.title-accent {
    padding-left: 0;
  }
  .hero-metadata-bar {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  .meta-swatches-group {
    display: none;
  }
  .horizontal-process-timeline {
    grid-template-columns: repeat(3, 1fr);
  }
  .featured-specs-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  .overlay-body-content {
    grid-template-columns: 1fr;
  }
  .material-surface-content {
    grid-template-columns: 1fr;
  }
  .project-row {
    grid-template-columns: 70px 1.5fr 1fr 40px;
  }
  .studio-hero-grid {
    grid-template-columns: 1fr;
  }
  .studio-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .team-member-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .member-hover-portrait {
    display: none;
  }
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .mobile-toggle-btn {
    display: flex;
  }
  .btn-cta-nav {
    display: none;
  }
  .featured-overlay-content {
    flex-direction: column;
    align-items: flex-start;
  }
  .btn-explore-project {
    width: 100%;
    justify-content: center;
  }
  .project-floating-preview {
    display: none !important;
  }
  .project-row {
    grid-template-columns: 50px 1fr auto;
  }
  .row-category-tag {
    display: none;
  }
  .arch-cursor-follower, .arch-cursor-dot {
    display: none !important;
  }
  .footer-minimal-links {
    align-items: flex-start;
  }
  .footer-main-row {
    flex-direction: column;
    gap: 2.5rem;
  }
}

/* Mobile (360px–767px) */
@media (max-width: 767px) {
  :root {
    --grid-margin: 1.25rem;
    --header-height: 64px;
  }

  /* Header */
  .site-header {
    height: var(--header-height);
  }
  .brand-title {
    font-size: 1.05rem;
    letter-spacing: 0.2em;
  }
  .brand-tagline {
    display: none;
  }

  /* Hero Section */
  .hero-section {
    padding: calc(var(--header-height) + 1.25rem) var(--grid-margin) 2rem;
    height: auto;
    min-height: auto;
    gap: 1.25rem;
  }
  .hero-subbar {
    padding-bottom: 0.65rem;
  }
  .hero-main-layout {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .hero-title {
    font-size: clamp(2.35rem, 9.2vw, 3.5rem);
    line-height: 0.94;
    letter-spacing: -0.03em;
  }
  .hero-visual-col {
    height: clamp(220px, 42vh, 310px);
    width: 100%;
    margin: 0.25rem 0;
  }
  .visual-caption-badge {
    bottom: 10px;
    right: 10px;
    padding: 5px 10px;
    font-size: 0.62rem;
  }
  .hero-metadata-bar {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-top: 1rem;
    margin-top: 0.25rem;
  }
  .hero-scroll-cue {
    justify-content: flex-start;
  }

  /* Section Spacing */
  .manifesto-section {
    padding: 3.25rem var(--grid-margin);
    min-height: auto;
  }
  .manifesto-header-bar {
    margin-bottom: 1.75rem;
  }
  .manifesto-headline-block {
    margin-bottom: 1.75rem;
    gap: 1.25rem;
  }
  .manifesto-statement {
    font-size: clamp(1.75rem, 6.5vw, 2.4rem);
    line-height: 1.06;
  }
  .manifesto-lead-container {
    padding-left: 0.85rem;
    margin-top: 0.75rem;
  }
  .manifesto-lead-text {
    font-size: 0.98rem;
    line-height: 1.55;
  }

  .featured-project-section {
    padding: 3.25rem var(--grid-margin);
  }
  .featured-header-bar {
    margin-bottom: 1.25rem;
  }
  .featured-canvas-wrapper {
    height: clamp(280px, 46vh, 360px);
    margin-bottom: 1.25rem;
  }
  .featured-overlay-content {
    padding: 1.25rem 1rem;
    gap: 0.85rem;
  }
  .featured-project-name {
    font-size: clamp(1.75rem, 6.5vw, 2.3rem);
    margin-bottom: 0.4rem;
  }
  .featured-project-desc {
    font-size: 0.85rem;
    line-height: 1.45;
  }
  .btn-explore-project {
    padding: 12px 20px;
    font-size: 0.75rem;
  }
  .featured-specs-grid {
    grid-template-columns: 1fr;
    padding-top: 1rem;
    gap: 0;
  }
  .spec-column {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--color-border);
    padding: 0.85rem 0;
  }

  /* Horizontal Scrolling Filters */
  .project-index-section {
    padding: 3.25rem var(--grid-margin);
  }
  .index-header-area {
    margin-bottom: 1.5rem;
    padding-bottom: 0.85rem;
    gap: 1rem;
  }
  .index-main-title {
    font-size: clamp(2rem, 7vw, 2.6rem);
  }
  .project-filters-bar {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    padding-bottom: 6px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .project-filters-bar::-webkit-scrollbar {
    display: none;
  }
  .filter-btn {
    flex-shrink: 0;
    padding: 6px 14px;
    font-size: 0.68rem;
  }
  .project-row {
    padding: 1.2rem 0;
    grid-template-columns: 40px 1fr auto;
  }
  .row-index-num {
    font-size: 0.95rem;
  }
  .row-name {
    font-size: clamp(1.2rem, 5vw, 1.7rem);
  }

  /* Materials & Process */
  .material-process-section {
    padding: 3.25rem var(--grid-margin);
    min-height: auto;
  }
  .material-header-bar {
    margin-bottom: 1.25rem;
    padding-bottom: 0.85rem;
  }
  .material-section-title {
    font-size: clamp(1.9rem, 6.5vw, 2.8rem);
  }
  .material-nav-pills {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    gap: 0.5rem;
  }
  .material-tab-btn {
    padding: 7px 14px;
    font-size: 0.72rem;
  }
  .material-hero-surface {
    height: auto;
    min-height: 420px;
  }
  .material-surface-content {
    padding: 1.25rem;
    gap: 1.25rem;
  }
  .mat-title {
    font-size: clamp(1.9rem, 6.5vw, 2.8rem);
  }
  .mat-essence {
    font-size: 1.15rem;
  }
  .mat-description {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .mat-metadata-card {
    padding: 1.1rem;
    gap: 0.75rem;
  }
  .drawing-schematic-wrapper {
    padding: 1.1rem;
    margin-bottom: 2rem;
  }
  .schematic-canvas-box {
    height: 200px;
  }
  .schematic-breadcrumbs {
    flex-wrap: wrap;
    gap: 6px;
    font-size: 0.65rem;
  }
  .horizontal-process-timeline {
    grid-template-columns: 1fr;
    padding-top: 1.25rem;
    gap: 0.85rem;
  }
  .timeline-stage-card {
    padding: 1.2rem 1rem;
  }

  /* Studio & Team */
  .studio-section {
    padding: 3.25rem var(--grid-margin);
  }
  .studio-hero-grid {
    gap: 1.75rem;
    margin-bottom: 2rem;
  }
  .studio-editorial-heading {
    font-size: clamp(1.9rem, 6.5vw, 2.6rem);
    margin-bottom: 1rem;
  }
  .studio-body-p {
    font-size: 0.92rem;
    line-height: 1.5;
  }
  .studio-stats-grid {
    padding: 1.25rem 0;
    margin-top: 1.25rem;
    gap: 0.75rem;
  }
  .stat-number {
    font-size: clamp(1.7rem, 6vw, 2.2rem);
  }
  .studio-layered-visual {
    height: 220px;
  }
  .studio-team-area {
    padding-top: 1.75rem;
  }
  .team-member-row {
    padding: 1.25rem 0;
    gap: 0.35rem;
  }
  .member-name {
    font-size: 1.25rem;
  }
  .member-bio {
    font-size: 0.88rem;
  }

  /* Final CTA */
  .final-cta-section {
    padding: 3.5rem var(--grid-margin);
    min-height: auto;
  }
  .final-cta-headline {
    font-size: clamp(2.1rem, 7.5vw, 3rem);
    margin-bottom: 1rem;
  }
  .final-cta-sub {
    font-size: 1.15rem;
    margin-bottom: 1.75rem;
  }
  .final-cta-buttons {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
  .btn-cta-primary,
  .btn-cta-secondary {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
    font-size: 0.78rem;
  }

  /* Modals */
  .inquiry-modal-sheet {
    padding: 1.5rem 1.15rem;
    max-height: 92vh;
  }
  .inquiry-close-btn {
    margin-top: -0.5rem;
    margin-right: -0.5rem;
  }
  .form-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  /* Footer */
  .site-footer {
    padding: 3rem var(--grid-margin) 2rem;
  }
  .footer-minimal-container {
    gap: 2.25rem;
  }
  .footer-huge-brand {
    font-size: clamp(2.8rem, 13vw, 4.5rem);
  }
  .footer-bottom-line {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .arch-cursor-follower, .arch-cursor-dot {
    display: none !important;
  }
  .manifesto-word {
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }
  .featured-image-plate {
    transform: none !important;
  }
  .material-macro-canvas {
    animation: none !important;
  }
}
`;
