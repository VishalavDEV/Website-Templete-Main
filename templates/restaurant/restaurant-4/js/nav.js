/* Fullscreen Navigation & Preview Controller */
document.addEventListener('DOMContentLoaded', () => {
  const menuTrigger = document.getElementById('menu-trigger');
  const closeTrigger = document.getElementById('close-nav');
  const navOverlay = document.getElementById('fullscreen-nav');
  const navItems = document.querySelectorAll('.nav-item');
  const previewImgs = document.querySelectorAll('.nav-preview-img');

  function openNav() {
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (closeTrigger) closeTrigger.focus();
  }

  function closeNav() {
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
    if (menuTrigger) menuTrigger.focus();
  }

  if (menuTrigger) {
    menuTrigger.addEventListener('click', openNav);
  }

  if (closeTrigger) {
    closeTrigger.addEventListener('click', closeNav);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay.classList.contains('open')) {
      closeNav();
    }
  });

  // Nav items preview hover & click navigation
  navItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const targetId = item.getAttribute('data-preview');
      previewImgs.forEach((img) => {
        if (img.id === targetId) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    });

    item.addEventListener('click', () => {
      const targetSection = item.getAttribute('data-target');
      closeNav();
      if (targetSection) {
        const targetEl = document.querySelector(targetSection);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
