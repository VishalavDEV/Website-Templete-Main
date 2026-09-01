// Tom Keene Portfolio Standalone Script

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const aperture = document.querySelector('.aperture-sculpture');

  // 1. Scroll-aware Header Class
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mouse Parallax on CSS Aperture Illustration
  if (aperture) {
    document.addEventListener('mousemove', (e) => {
      // Calculate normalized coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      // Gentle 3D perspective tilting
      aperture.style.transform = `perspective(1000px) rotateY(${x * 30}deg) rotateX(${-y * 30}deg) translateZ(10px)`;
    });
  }
});
