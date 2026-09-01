// MySchool Template JavaScript
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Hero Image Slider functionality
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-arrow');
  const nextBtn = document.querySelector('.next-arrow');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    if (slides.length === 0) return;
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  if (slides.length > 0) {
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
      });
    }

    // Auto rotate slides every 5 seconds
    function startInterval() {
      slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
      clearInterval(slideInterval);
      startInterval();
    }

    startInterval();
  }

  // 2. Admission Inquiry Form Submission Validation
  const form = document.getElementById('inquiry-form');
  const successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple Validation Check
      const parentName = document.getElementById('parent-name').value;
      const childName = document.getElementById('child-name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      if (parentName && childName && email && phone) {
        // Hide Form, Show Success Alert
        form.style.display = 'none';
        successMsg.style.display = 'block';
        successMsg.style.opacity = '0';
        setTimeout(() => {
          successMsg.style.transition = 'opacity 0.4s ease';
          successMsg.style.opacity = '1';
        }, 50);
      }
    });
  }

  // 3. Smooth scroll navigation for template preview anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Set active class on nav links
        document.querySelectorAll('.nav-item').forEach(item => {
          item.classList.remove('active');
        });
        const parentNavItem = this.closest('.nav-item');
        if (parentNavItem) {
          parentNavItem.classList.add('active');
        }
      }
    });
  });
});
