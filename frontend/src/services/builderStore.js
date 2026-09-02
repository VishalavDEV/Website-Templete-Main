// Preset Color Schemes (All / Light / Dark)
export const COLOR_PRESETS = [
  {
    id: 'techno-blue',
    name: 'Techno Blue',
    type: 'light',
    colors: {
      background: '#ffffff',
      default: '#212529',
      heading: '#0f172a',
      accent: '#0066ff',
      surface: '#f8fafc',
      contrast: '#ffffff',
      nav: '#334155',
      navHover: '#0066ff',
      mobileBg: '#ffffff',
      dropBg: '#ffffff',
      dropNav: '#334155',
      dropHover: '#0066ff'
    }
  },
  {
    id: 'emerald-luxury',
    name: 'Emerald Sanctuary',
    type: 'light',
    colors: {
      background: '#fcfdfd',
      default: '#1f2937',
      heading: '#064e3b',
      accent: '#059669',
      surface: '#f0fdf4',
      contrast: '#ffffff',
      nav: '#374151',
      navHover: '#059669',
      mobileBg: '#ffffff',
      dropBg: '#ffffff',
      dropNav: '#374151',
      dropHover: '#059669'
    }
  },
  {
    id: 'violet-pulse',
    name: 'Violet Pulse',
    type: 'light',
    colors: {
      background: '#ffffff',
      default: '#1e293b',
      heading: '#4c1d95',
      accent: '#7c3aed',
      surface: '#f5f3ff',
      contrast: '#ffffff',
      nav: '#334155',
      navHover: '#7c3aed',
      mobileBg: '#ffffff',
      dropBg: '#ffffff',
      dropNav: '#334155',
      dropHover: '#7c3aed'
    }
  },
  {
    id: 'cyber-dark',
    name: 'Cyberpunk Dark',
    type: 'dark',
    colors: {
      background: '#090d16',
      default: '#e2e8f0',
      heading: '#ffffff',
      accent: '#38bdf8',
      surface: '#0f172a',
      contrast: '#020617',
      nav: '#94a3b8',
      navHover: '#38bdf8',
      mobileBg: '#090d16',
      dropBg: '#0f172a',
      dropNav: '#cbd5e1',
      dropHover: '#38bdf8'
    }
  },
  {
    id: 'crimson-noir',
    name: 'Crimson Noir',
    type: 'dark',
    colors: {
      background: '#0a0a0a',
      default: '#d4d4d8',
      heading: '#ffffff',
      accent: '#f43f5e',
      surface: '#18181b',
      contrast: '#000000',
      nav: '#a1a1aa',
      navHover: '#f43f5e',
      mobileBg: '#0a0a0a',
      dropBg: '#18181b',
      dropNav: '#e4e4e7',
      dropHover: '#f43f5e'
    }
  },
  {
    id: 'golden-obsidian',
    name: 'Golden Obsidian',
    type: 'dark',
    colors: {
      background: '#0d0d0f',
      default: '#e4e4e7',
      heading: '#fef08a',
      accent: '#eab308',
      surface: '#18181b',
      contrast: '#000000',
      nav: '#a1a1aa',
      navHover: '#eab308',
      mobileBg: '#0d0d0f',
      dropBg: '#18181b',
      dropNav: '#f4f4f5',
      dropHover: '#eab308'
    }
  }
];

// Google Fonts list
export const GOOGLE_FONTS = [
  'Plus Jakarta Sans',
  'Inter',
  'Roboto',
  'Poppins',
  'Open Sans',
  'Montserrat',
  'Outfit',
  'Playfair Display',
  'Space Grotesk',
  'Raleway',
  'Cinzel',
  'Fira Code'
];

export const INITIAL_BUILDER_STATE = {
  activeTab: 'index.html',
  tabs: ['index.html', 'about.html', 'services.html', 'contact.html'],
  viewport: 'desktop', // 'builder' | 'desktop' | 'tablet' | 'mobile'
  activeDrawer: 'page', // 'page' | 'header' | 'footer' | 'colors' | 'fonts' | 'media' | 'misc' | null
  themeMode: 'light',
  
  // Page Options
  pageName: 'index.html',
  pageTitle: 'Home',
  showPageTitle: true,
  pageBaseTemplate: 'blank', // 'blank' | 'boxed' | 'sidebar'
  metaTags: {
    title: '',
    description: '',
    keywords: '',
    ogImage: ''
  },
  pageCustomCode: {
    head: '',
    body: ''
  },
  sections: [
    { id: 'sec-0', name: 'Hero / Banner Section', enabled: true },
    { id: 'sec-1', name: 'Overview / Features', enabled: true },
    { id: 'sec-2', name: 'Analytics & Insights', enabled: true },
    { id: 'sec-3', name: 'Services & Products', enabled: true },
    { id: 'sec-4', name: 'Client Testimonials', enabled: true },
    { id: 'sec-5', name: 'Call to Action / Contact', enabled: true }
  ],

  // Header Options
  headerTemplate: 'sticky-top', // 'sticky-top' | 'left-dock' | 'floating'
  navmenuScrollspy: true,
  navmenuDropdownTrigger: 'hover', // 'hover' | 'click'
  headerCustomOverride: false,
  logoImage: '',
  avatarImage: '',

  // Colors
  colors: { ...COLOR_PRESETS[0].colors },
  activePresetId: 'techno-blue',

  // Fonts
  fonts: {
    defaultFont: 'Plus Jakarta Sans',
    headingFont: 'Plus Jakarta Sans',
    navFont: 'Plus Jakarta Sans'
  },

  // Misc Options
  animationOnScroll: true,
  scrollTopButton: true,
  pagePreloader: false,
  globalCustomCode: ''
};

// Generates complete live CSS to inject into the live canvas/iframe
export function generateLiveCSS(builderState) {
  const { colors, fonts, showPageTitle, pageBaseTemplate, headerTemplate, scrollTopButton } = builderState;

  // Base Layout Container overrides
  let layoutCSS = '';
  if (pageBaseTemplate === 'boxed') {
    layoutCSS = `
      body {
        background-color: #f1f5f9 !important;
        padding-top: 20px !important;
        padding-bottom: 40px !important;
      }
      body > main, body > div.main-wrapper, body > section {
        max-width: 1200px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        background-color: var(--background-color) !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
        border-radius: 16px !important;
        overflow: hidden !important;
      }
    `;
  } else if (pageBaseTemplate === 'sidebar') {
    layoutCSS = `
      body {
        display: flex !important;
        flex-direction: row !important;
        min-height: 100vh !important;
      }
      header, .navbar-vertical, aside.sidebar {
        width: 260px !important;
        flex-shrink: 0 !important;
        position: sticky !important;
        top: 0 !important;
        height: 100vh !important;
        overflow-y: auto !important;
      }
      main, .content-wrapper, section {
        flex: 1 !important;
        min-width: 0 !important;
      }
    `;
  }

  // Header layout overrides
  let headerCSS = '';
  if (headerTemplate === 'floating') {
    headerCSS = `
      header, nav.navbar, .site-header {
        position: fixed !important;
        top: 16px !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        width: 92% !important;
        max-width: 1280px !important;
        border-radius: 99px !important;
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12) !important;
        z-index: 99999 !important;
        backdrop-filter: blur(16px) !important;
        -webkit-backdrop-filter: blur(16px) !important;
      }
    `;
  } else if (headerTemplate === 'left-dock') {
    headerCSS = `
      header, nav.navbar, .site-header {
        position: fixed !important;
        left: 0 !important;
        top: 0 !important;
        bottom: 0 !important;
        width: 260px !important;
        height: 100vh !important;
        z-index: 99999 !important;
        display: flex !important;
        flex-direction: column !important;
      }
      body {
        padding-left: 260px !important;
      }
    `;
  } else {
    // sticky-top
    headerCSS = `
      header, nav.navbar, .site-header {
        position: sticky !important;
        top: 0 !important;
        z-index: 99999 !important;
      }
    `;
  }

  // Page Title visibility
  let titleCSS = '';
  if (!showPageTitle) {
    titleCSS = `
      .page-title, .breadcrumbs, .pagetitle, .header-hero-title, h1.page-heading {
        display: none !important;
      }
    `;
  }

  return `
    :root {
      --background-color: ${colors.background} !important;
      --default-color: ${colors.default} !important;
      --heading-color: ${colors.heading} !important;
      --accent-color: ${colors.accent} !important;
      --surface-color: ${colors.surface} !important;
      --contrast-color: ${colors.contrast} !important;
      --nav-color: ${colors.nav} !important;
      --nav-hover-color: ${colors.navHover} !important;
      --mobile-bg-color: ${colors.mobileBg} !important;
      --drop-bg-color: ${colors.dropBg} !important;
      --drop-nav-color: ${colors.dropNav} !important;
      --drop-hover-color: ${colors.dropHover} !important;
      --primary-color: ${colors.accent} !important;
      
      --default-font: '${fonts.defaultFont}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      --heading-font: '${fonts.headingFont}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      --nav-font: '${fonts.navFont}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    }
    body {
      font-family: var(--default-font) !important;
      background-color: var(--background-color) !important;
      color: var(--default-color) !important;
      transition: background-color 0.2s ease, color 0.2s ease !important;
    }
    h1, h2, h3, h4, h5, h6, .heading-font, [class*="heading"], [class*="title"] {
      font-family: var(--heading-font) !important;
      color: var(--heading-color) !important;
    }
    a, .accent-text, nav a:hover {
      color: var(--accent-color);
    }
    .btn-primary, .btn-hero-primary, button.primary, .btn-action, a.btn-primary {
      background: var(--accent-color) !important;
      background-color: var(--accent-color) !important;
      border-color: var(--accent-color) !important;
      color: var(--contrast-color) !important;
    }
    ${titleCSS}
    ${layoutCSS}
    ${headerCSS}
  `;
}
