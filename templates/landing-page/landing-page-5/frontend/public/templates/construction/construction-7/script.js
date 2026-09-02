/**
 * AURELIUS HERITAGE RESTORATION
 * Main Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initBeforeAfterSlider();
  initConsultationModal();
  initServiceSpecialties();
  initMobileMenu();
});

/* ==========================================================================
   1. THEME TOGGLING (Default: Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const appWrapper = document.getElementById('appWrapper');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  if (!themeToggleBtn || !appWrapper) return;

  const savedTheme = localStorage.getItem('aurelius_theme') || 'light';
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const isLight = appWrapper.classList.contains('lightMode');
    const newTheme = isLight ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('aurelius_theme', newTheme);
  });

  function applyTheme(theme) {
    if (theme === 'light') {
      appWrapper.classList.add('lightMode');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeText) themeText.textContent = 'DARK';
    } else {
      appWrapper.classList.remove('lightMode');
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeText) themeText.textContent = 'LIGHT';
    }
  }
}

/* ==========================================================================
   2. BEFORE & AFTER INTERACTIVE SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('beforeAfterSlider');
  const afterWrap = document.getElementById('afterImgWrap');
  const handleBar = document.getElementById('sliderHandleBar');

  if (!container || !afterWrap || !handleBar) return;

  let isDragging = false;

  function updatePosition(clientX) {
    const rect = container.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (offsetX / rect.width) * 100;

    afterWrap.style.width = `${percentage}%`;
    handleBar.style.left = `${percentage}%`;
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updatePosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches[0]) return;
    updatePosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* ==========================================================================
   3. CONSULTATION MODAL & FORM
   ========================================================================== */
function initConsultationModal() {
  const modal = document.getElementById('consultModal');
  const openBtn = document.getElementById('openConsultBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const form = document.getElementById('consultForm');

  if (!modal) return;

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Consultation dossier received! Our Master Heritage Architect will reach out within 24 hours.');
      form.reset();
      modal.style.display = 'none';
    });
  }
}

/* ==========================================================================
   4. SERVICE SPECIALTY CARDS
   ========================================================================== */
function initServiceSpecialties() {
  const cardMasonry = document.getElementById('cardMasonry');
  const cardTimber = document.getElementById('cardTimber');

  if (cardMasonry) {
    cardMasonry.addEventListener('click', () => {
      alert('Masonry & Structural Engineering: Monolithic stone stabilization, laser desalination, and historic lime mortars.');
    });
  }

  if (cardTimber) {
    cardTimber.addEventListener('click', () => {
      alert('Structural Steel & Timber: Concealed carbon retrofitting and 18th-century European oak timber framing restoration.');
    });
  }
}

/* ==========================================================================
   5. MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}
