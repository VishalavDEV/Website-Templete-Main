/**
 * TEMPLATE 6: ADVANCED CONSTRUCTION — SCRIPT
 * Features:
 * - Live Working Crane Physics Canvas (Slewing Jibs, Hoisting Cables, Flashing Hazard Beacons)
 * - Parametric Cost / Tender Calculator
 * - Filterable Project Portfolio
 * - Theme Switcher (Light / Dark)
 * - Mobile Navigation Toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initCraneSimulation();
  initThemeToggle();
  initProjectFilter();
  initCustomSelects();
  initCostEstimator();
  initStackingScroll();
  initMobileMenu();
});

/* ==========================================================================
   CUSTOM INTERACTIVE GLASSMORPHIC SELECT / DROPDOWN PICKERS
   ========================================================================== */
function initCustomSelects() {
  const wrappers = document.querySelectorAll('.custom-select-wrapper');

  wrappers.forEach(wrap => {
    const trigger = wrap.querySelector('.custom-select-trigger');
    const options = wrap.querySelectorAll('.custom-option');
    const hiddenInput = wrap.querySelector('input[type="hidden"]');
    const labelSpan = trigger.querySelector('.sel-label');
    const iconSpan = trigger.querySelector('.sel-icon');

    // Toggle dropdown
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      // Close other wrappers
      wrappers.forEach(w => { if (w !== wrap) w.classList.remove('open'); });
      wrap.classList.toggle('open');
    });

    // Option selection
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        const val = opt.getAttribute('data-value');
        const icon = opt.getAttribute('data-icon');
        const title = opt.querySelector('strong').textContent;

        hiddenInput.value = val;
        labelSpan.textContent = title;
        if (iconSpan) iconSpan.textContent = icon;

        options.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        wrap.classList.remove('open');

        // Trigger change event for live calculator
        hiddenInput.dispatchEvent(new Event('change'));
      });
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    wrappers.forEach(w => w.classList.remove('open'));
  });
}

/* ==========================================================================
   NOVEL SCROLL ANIMATION 1: 3D CARD STACKING PHYSICS
   ========================================================================== */
function initStackingScroll() {
  const cards = document.querySelectorAll('.deck-card');
  if (!cards.length) return;

  function updateCardScales() {
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const topOffset = 100 + index * 20;

      if (rect.top <= topOffset + 5) {
        // Card is pinned/stacked -> subtly scale down earlier cards
        const depth = (cards.length - 1 - index) * 0.02;
        card.style.transform = `scale(${1 - depth})`;
        card.style.boxShadow = `0 ${20 + index * 10}px ${40 + index * 15}px rgba(0, 0, 0, 0.7)`;
      } else {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.6)';
      }
    });
  }

  window.addEventListener('scroll', updateCardScales, { passive: true });
  updateCardScales();
}

function initHeroVideo() {
  const video = document.getElementById('heroVideo');
  if (video) {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        document.addEventListener('click', () => video.play(), { once: true });
        document.addEventListener('scroll', () => video.play(), { once: true });
      });
    }
  }
}

/* ==========================================================================
   1. LIVE WORKING CRANE SIMULATION CANVAS
   ========================================================================== */
function initCraneSimulation() {
  const canvas = document.getElementById('craneAnimationCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Tower Cranes configuration positioned on right horizon to highlight real video
  const cranes = [
    {
      xRatio: 0.86,
      baseYRatio: 0.98,
      mastHeight: 340,
      jibLength: 200,
      counterJib: 70,
      angle: 0.2,
      angleSpeed: 0.0025,
      angleRange: [ -0.3, 0.4 ],
      hookX: 140,
      hookY: 170,
      hookSpeed: 0.35,
      hookDir: 1,
      hasLoad: true
    },
    {
      xRatio: 0.95,
      baseYRatio: 0.96,
      mastHeight: 280,
      jibLength: 160,
      counterJib: 55,
      angle: -0.15,
      angleSpeed: 0.002,
      angleRange: [ -0.4, 0.2 ],
      hookX: 100,
      hookY: 130,
      hookSpeed: 0.25,
      hookDir: -1,
      hasLoad: true
    }
  ];

  // Ambient dust/sparkles in sunset atmosphere
  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * 600,
    r: Math.random() * 2 + 0.8,
    speedY: Math.random() * 0.4 + 0.1,
    speedX: (Math.random() - 0.5) * 0.2,
    alpha: Math.random() * 0.6 + 0.2
  }));

  let time = 0;

  function animate() {
    time += 0.016;
    ctx.clearRect(0, 0, width, height);

    // 1. Draw floating ambient twilight dust particles
    particles.forEach(p => {
      p.y -= p.speedY;
      p.x += p.speedX;
      if (p.y < 0) {
        p.y = height;
        p.x = Math.random() * width;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 140, 0, ${p.alpha * 0.7})`;
      ctx.fill();
    });

    // 2. Draw each working tower crane
    cranes.forEach((crane, idx) => {
      const baseX = width * crane.xRatio;
      const baseY = height * crane.baseYRatio;
      const mastTopY = baseY - crane.mastHeight;

      // Update slewing angle
      crane.angle += crane.angleSpeed;
      if (crane.angle > crane.angleRange[1] || crane.angle < crane.angleRange[0]) {
        crane.angleSpeed *= -1;
      }

      // Update hook hoist cable
      crane.hookY += crane.hookSpeed * crane.hookDir;
      if (crane.hookY > 240 || crane.hookY < 120) {
        crane.hookDir *= -1;
      }

      // Draw Vertical Lattice Mast
      ctx.strokeStyle = '#e65100';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(baseX - 10, baseY);
      ctx.lineTo(baseX - 10, mastTopY);
      ctx.moveTo(baseX + 10, baseY);
      ctx.lineTo(baseX + 10, mastTopY);
      ctx.stroke();

      // Mast cross-bracing
      ctx.strokeStyle = 'rgba(255, 107, 0, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let y = baseY; y > mastTopY; y -= 24) {
        ctx.moveTo(baseX - 10, y);
        ctx.lineTo(baseX + 10, y - 12);
        ctx.moveTo(baseX + 10, y);
        ctx.lineTo(baseX - 10, y - 12);
      }
      ctx.stroke();

      // Operator Cabin & Turntable
      ctx.fillStyle = '#ff6b00';
      ctx.fillRect(baseX - 12, mastTopY - 14, 24, 16);

      // Apex Tower Peak (A-Frame)
      const apexX = baseX;
      const apexY = mastTopY - 42;
      ctx.strokeStyle = '#e65100';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(baseX - 12, mastTopY);
      ctx.lineTo(apexX, apexY);
      ctx.lineTo(baseX + 12, mastTopY);
      ctx.stroke();

      // Flashing Red Hazard Strobe on Crane Apex
      const flash = Math.sin(time * 6 + idx) > 0.3;
      if (flash) {
        ctx.beginPath();
        ctx.arc(apexX, apexY - 3, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ff0033';
        ctx.shadowColor = '#ff0033';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Rotating Horizontal Jib Boom
      const cosA = Math.cos(crane.angle);
      const sinA = Math.sin(crane.angle);
      const jibEndX = baseX + crane.jibLength * cosA;
      const jibEndY = mastTopY + (crane.jibLength * sinA * 0.15); // Perspective pitch

      const counterEndX = baseX - crane.counterJib * cosA;
      const counterEndY = mastTopY - (crane.counterJib * sinA * 0.15);

      // Jib Truss
      ctx.strokeStyle = '#ff6b00';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(counterEndX, counterEndY);
      ctx.lineTo(jibEndX, jibEndY);
      ctx.stroke();

      // Pendant Stay Cables to Apex
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(apexX, apexY);
      ctx.lineTo(jibEndX * 0.6 + baseX * 0.4, jibEndY * 0.6 + mastTopY * 0.4);
      ctx.moveTo(apexX, apexY);
      ctx.lineTo(jibEndX, jibEndY);
      ctx.moveTo(apexX, apexY);
      ctx.lineTo(counterEndX, counterEndY);
      ctx.stroke();

      // Counterweights
      ctx.fillStyle = '#374151';
      ctx.fillRect(counterEndX - 8, counterEndY - 6, 20, 16);

      // Flashing Tip Light on Jib
      if (flash) {
        ctx.beginPath();
        ctx.arc(jibEndX, jibEndY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffaa00';
        ctx.shadowColor = '#ffaa00';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Hoisting Trolley & Steel Cable
      const trolleyX = baseX + crane.hookX * cosA;
      const trolleyY = mastTopY + (crane.hookX * sinA * 0.15);
      const hookTipY = trolleyY + crane.hookY;

      // Trolley box
      ctx.fillStyle = '#ffaa00';
      ctx.fillRect(trolleyX - 4, trolleyY - 3, 8, 6);

      // Vertical Hoist Wire
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(trolleyX, trolleyY);
      ctx.lineTo(trolleyX, hookTipY);
      ctx.stroke();

      // Hook Block & Steel Beam Load
      if (crane.hasLoad) {
        ctx.fillStyle = '#111827';
        ctx.fillRect(trolleyX - 5, hookTipY - 6, 10, 8);

        // Slings
        ctx.strokeStyle = 'rgba(255, 140, 0, 0.8)';
        ctx.beginPath();
        ctx.moveTo(trolleyX, hookTipY);
        ctx.lineTo(trolleyX - 25, hookTipY + 18);
        ctx.moveTo(trolleyX, hookTipY);
        ctx.lineTo(trolleyX + 25, hookTipY + 18);
        ctx.stroke();

        // Steel I-Beam Load
        ctx.fillStyle = '#ff6b00';
        ctx.fillRect(trolleyX - 35, hookTipY + 18, 70, 7);
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. PARAMETRIC COST & TENDER ESTIMATOR
   ========================================================================== */
function initCostEstimator() {
  const calcType = document.getElementById('calcType');
  const areaRange = document.getElementById('areaRange');
  const areaVal = document.getElementById('areaVal');
  const calcTimeline = document.getElementById('calcTimeline');
  const totalEstimateVal = document.getElementById('totalEstimateVal');

  if (!calcType || !areaRange || !totalEstimateVal) return;

  const baseRates = {
    commercial: 280,
    industrial: 220,
    infrastructure: 340,
    residential: 260
  };

  function updateCalculation() {
    const type = calcType.value;
    const area = parseInt(areaRange.value, 10);
    const rate = baseRates[type] || 250;

    // Display formatted area
    areaVal.textContent = `${area.toLocaleString()} SF`;

    // Crane modifier
    const craneRadios = document.getElementsByName('craneOpt');
    let craneCost = 0;
    for (let r of craneRadios) {
      if (r.checked && r.value === 'yes') {
        craneCost = 850000;
      }
    }

    // Timeline modifier
    const timeline = calcTimeline ? calcTimeline.value : 'standard';
    const timelineMult = timeline === 'expedited' ? 1.15 : 1.0;

    const baseCost = area * rate;
    const total = (baseCost + craneCost) * timelineMult;

    totalEstimateVal.textContent = `$${Math.round(total).toLocaleString()}`;
  }

  calcType.addEventListener('change', updateCalculation);
  areaRange.addEventListener('input', updateCalculation);
  if (calcTimeline) calcTimeline.addEventListener('change', updateCalculation);

  const craneRadios = document.getElementsByName('craneOpt');
  for (let r of craneRadios) {
    r.addEventListener('change', updateCalculation);
  }

  updateCalculation();
}

/* ==========================================================================
   3. FILTERABLE PROJECT PORTFOLIO
   ========================================================================== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   4. THEME TOGGLE (Light / Dark)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('advThemeToggle') || document.getElementById('themeToggle');
  const iconSpan = document.getElementById('advThemeIcon') || (toggleBtn ? toggleBtn.querySelector('.theme-icon') : null);
  const textSpan = document.getElementById('advThemeText');

  const savedTheme = localStorage.getItem('adv_theme');
  if (savedTheme === 'dark') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    if (iconSpan) iconSpan.textContent = '☀️';
    if (textSpan) textSpan.textContent = 'LIGHT MODE';
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    if (iconSpan) iconSpan.textContent = '🌙';
    if (textSpan) textSpan.textContent = 'DARK MODE';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      const shouldBeLight = isDark; // If currently dark, become light

      document.body.classList.toggle('light-mode', shouldBeLight);
      document.body.classList.toggle('dark-mode', !shouldBeLight);
      localStorage.setItem('adv_theme', shouldBeLight ? 'light' : 'dark');

      if (iconSpan) iconSpan.textContent = shouldBeLight ? '🌙' : '☀️';
      if (textSpan) textSpan.textContent = shouldBeLight ? 'DARK MODE' : 'LIGHT MODE';
    });
  }
}

/* ==========================================================================
   5. MOBILE NAVIGATION MENU
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
  }
}

/* ==========================================================================
   6. CONTACT FORM HANDLER
   ========================================================================== */
function handleAdvancedForm(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('submitBtn');
  const toast = document.getElementById('formSuccessToast');

  if (submitBtn) {
    submitBtn.textContent = 'TRANSMITTING RFP INQUIRY...';
    submitBtn.disabled = true;
  }

  setTimeout(() => {
    if (toast) {
      toast.classList.remove('hidden');
    }
    if (submitBtn) {
      submitBtn.textContent = 'INQUIRY TRANSMITTED ✓';
    }
    e.target.reset();
  }, 800);

  return false;
}
window.handleAdvancedForm = handleAdvancedForm;
