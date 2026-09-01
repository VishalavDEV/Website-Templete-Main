/* Cinematic Intro Load Animation Sequence */
document.addEventListener('DOMContentLoaded', () => {
  const introCurtain = document.getElementById('intro-curtain');
  const heroImg = document.querySelector('.hero-bg-img');
  const heroTitle = document.querySelector('.hero-title');
  const heroTagline = document.querySelector('.hero-tagline');
  const heroDivider = document.querySelector('.hero-divider');
  const heroMeta = document.querySelector('.hero-meta');
  const fixedFrame = document.querySelector('.fixed-frame');

  if (introCurtain) {
    // Initial state setup
    if (heroImg) heroImg.style.transform = 'scale(1.25)';
    if (heroTitle) {
      heroTitle.style.opacity = '0';
      heroTitle.style.transform = 'scale(0.85) translateY(30px)';
    }
    if (heroTagline) heroTagline.style.opacity = '0';
    if (heroDivider) heroDivider.style.height = '0px';
    if (heroMeta) heroMeta.style.opacity = '0';
    if (fixedFrame) fixedFrame.style.opacity = '0';

    // Step 1: Small logo display phase in intro curtain, then fade curtain vertically
    setTimeout(() => {
      introCurtain.style.transform = 'translateY(-100%)';
      introCurtain.style.transition = 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
    }, 1000);

    setTimeout(() => {
      introCurtain.style.display = 'none';
    }, 2200);

    // Step 2: Reveal hero image & scale typography into position
    setTimeout(() => {
      if (heroImg) {
        heroImg.style.transform = 'scale(1)';
        heroImg.style.filter = 'grayscale(100%) contrast(1.15) brightness(0.45)';
      }
      if (heroTitle) {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'scale(1) translateY(0)';
        heroTitle.style.transition = 'opacity 1.2s var(--ease-out-expo), transform 1.2s var(--ease-out-expo)';
      }
    }, 1600);

    // Step 3: Fade in metadata and divider
    setTimeout(() => {
      if (heroTagline) {
        heroTagline.style.opacity = '1';
        heroTagline.style.transition = 'opacity 0.8s ease';
      }
      if (heroDivider) {
        heroDivider.style.height = '50px';
        heroDivider.style.transition = 'height 0.8s var(--ease-out-expo)';
      }
      if (heroMeta) {
        heroMeta.style.opacity = '1';
        heroMeta.style.transition = 'opacity 0.8s ease';
      }
      if (fixedFrame) {
        fixedFrame.style.opacity = '1';
        fixedFrame.style.transition = 'opacity 0.8s ease';
      }
    }, 2200);
  }
});
