/* Custom Spring Cursor Controller (Desktop only) */
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('custom-cursor');
  const cursorText = document.getElementById('custom-cursor-text');

  if (!cursor || window.matchMedia('(pointer: coarse)').matches) {
    if (cursor) cursor.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover triggers
  document.querySelectorAll('[data-cursor]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      const cursorVal = el.getAttribute('data-cursor') || '';
      const explicitText = el.getAttribute('data-cursor-text');

      cursor.classList.add('active');

      if (cursorVal === 'blue' || cursorVal === 'sage') {
        cursor.classList.add(cursorVal);
      }

      if (cursorText) {
        if (explicitText) {
          cursorText.textContent = explicitText;
        } else if (cursorVal && cursorVal !== 'blue' && cursorVal !== 'sage') {
          cursorText.textContent = cursorVal;
        } else {
          cursorText.textContent = 'OPEN';
        }
      }
    });

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active', 'blue', 'sage');
      if (cursorText) cursorText.textContent = '';
    });
  });
});
