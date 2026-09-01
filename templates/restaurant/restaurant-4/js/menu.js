/* Contemporary Garden — Editorial Menu Filter & Hover Preview Controller */
document.addEventListener('DOMContentLoaded', () => {
  const catBtns = document.querySelectorAll('.menu-cat-btn');
  const menuItems = document.querySelectorAll('.menu-editorial-item');
  const hoverContainer = document.getElementById('menu-hover-photo');
  const hoverImg = hoverContainer ? hoverContainer.querySelector('img') : null;

  // Category Filtering
  catBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      catBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      if (hoverContainer) hoverContainer.classList.remove('visible');
      isHovering = false;

      const cat = btn.getAttribute('data-category');
      menuItems.forEach((item) => {
        if (cat === 'all' || item.getAttribute('data-category') === cat) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Floating Photo Preview on Hover
  if (!hoverContainer || !hoverImg || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let isHovering = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateHoverPosition() {
    if (isHovering) {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      hoverContainer.style.left = `${currentX + 20}px`;
      hoverContainer.style.top = `${currentY}px`;
    }
    requestAnimationFrame(updateHoverPosition);
  }
  updateHoverPosition();

  menuItems.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      const imgSrc = item.getAttribute('data-img');
      if (imgSrc) {
        hoverImg.src = imgSrc;
        hoverContainer.classList.add('visible');
        isHovering = true;
        currentX = e.clientX;
        currentY = e.clientY;
      }
    });

    item.addEventListener('mouseleave', () => {
      hoverContainer.classList.remove('visible');
      isHovering = false;
    });
  });
});
