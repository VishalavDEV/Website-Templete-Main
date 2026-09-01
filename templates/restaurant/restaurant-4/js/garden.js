/* Contemporary Garden Interactive Features */
document.addEventListener('DOMContentLoaded', () => {
  // 01. Expanding Vertical Experience Panels
  const expPanels = document.querySelectorAll('.exp-panel-card');
  
  expPanels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => {
      expPanels.forEach((p) => p.classList.remove('active'));
      panel.classList.add('active');
    });
  });

  // 02. Scroll-based Rotation on Signature Circle Dish
  const circlePhoto = document.querySelector('.signature-circle-photo');

  if (circlePhoto) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      const rotationDegree = (scrollPos * 0.08) % 360;
      circlePhoto.style.transform = `rotate(${rotationDegree}deg)`;
    });
  }
});
