// Fine Art Photography Studio - Client Interactions & Animations

document.addEventListener('DOMContentLoaded', () => {
  
  // Set copyright year dynamically
  document.getElementById('year').textContent = new Date().getFullYear();

  // Sticky navbar logic
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.remove('bg-transparent', 'py-6');
      navbar.classList.add('bg-[#0a0a0a]/90', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-4');
    } else {
      navbar.classList.remove('bg-[#0a0a0a]/90', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-4');
      navbar.classList.add('bg-transparent', 'py-6');
    }
  });

  // Mobile Drawer Menu
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuSpans = menuBtn.querySelectorAll('span');
  let isMenuOpen = false;

  menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.remove('opacity-0');
        mobileMenu.classList.add('opacity-100');
      }, 50);
      menuSpans[0].classList.add('rotate-45', 'translate-y-[7.5px]');
      menuSpans[1].classList.add('opacity-0');
      menuSpans[2].classList.add('-rotate-45', '-translate-y-[7.5px]');
    } else {
      mobileMenu.classList.remove('opacity-100');
      mobileMenu.classList.add('opacity-0');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
      menuSpans[0].classList.remove('rotate-45', 'translate-y-[7.5px]');
      menuSpans[1].classList.remove('opacity-0');
      menuSpans[2].classList.remove('-rotate-45', '-translate-y-[7.5px]');
    }
  });

  // Close menu on mobile link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      mobileMenu.classList.remove('opacity-100');
      mobileMenu.classList.add('opacity-0');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
      menuSpans[0].classList.remove('rotate-45', 'translate-y-[7.5px]');
      menuSpans[1].classList.remove('opacity-0');
      menuSpans[2].classList.remove('-rotate-45', '-translate-y-[7.5px]');
    });
  });

  // Interactive View Cursor
  const cursor = document.getElementById('custom-cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Add cursor active class on images/collections hover
  document.body.addEventListener('mouseover', (e) => {
    const hoverTarget = e.target.closest('a') || e.target.closest('button') || e.target.closest('.photo-wipe');
    if (hoverTarget) {
      cursor.classList.add('active');
    } else {
      cursor.classList.remove('active');
    }
  });

  // Intersection Observer for scroll-triggered reveals
  const revealSections = document.querySelectorAll('.reveal-section');
  const wipeImages = document.querySelectorAll('.photo-wipe');

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-12');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealSections.forEach(section => {
    revealObserver.observe(section);
  });

  // Image wipe observer
  const wipeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  wipeImages.forEach(img => {
    wipeObserver.observe(img);
  });

  // Newsletter form submission interaction
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email-input');
  const consentCheck = document.getElementById('consent-check');
  const checkBox = document.getElementById('check-box');
  const checkSvg = checkBox.querySelector('svg');
  const feedbackMsg = document.getElementById('feedback-msg');

  consentCheck.addEventListener('change', () => {
    if (consentCheck.checked) {
      checkBox.classList.remove('border-white/30', 'bg-transparent');
      checkBox.classList.add('border-[#6b1d2f]', 'bg-[#6b1d2f]');
      checkSvg.classList.remove('hidden');
    } else {
      checkBox.classList.remove('border-[#6b1d2f]', 'bg-[#6b1d2f]');
      checkBox.classList.add('border-white/30', 'bg-transparent');
      checkSvg.classList.add('hidden');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.disabled = true;
    btn.textContent = 'Sending...';

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = originalText;
      
      // Success feedback
      feedbackMsg.textContent = 'Subscribed successfully';
      feedbackMsg.classList.remove('hidden', 'text-red-400');
      feedbackMsg.classList.add('text-green-400');
      
      // Clear input
      emailInput.value = '';
      consentCheck.checked = false;
      checkBox.classList.remove('border-[#6b1d2f]', 'bg-[#6b1d2f]');
      checkBox.classList.add('border-white/30', 'bg-transparent');
      checkSvg.classList.add('hidden');

      setTimeout(() => {
        feedbackMsg.classList.add('hidden');
      }, 4000);
    }, 1200);
  });

  // Studio Inquiry Modal Behavior
  const modal = document.getElementById('inquiry-modal');
  const modalContent = document.getElementById('modal-content');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const seriesNameSpan = document.getElementById('modal-series-name');
  const inquiryForm = document.getElementById('inquiry-form');
  const modalSuccessMsg = document.getElementById('modal-success-msg');

  // Trigger modal open on CTA click
  document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const section = e.target.closest('section');
      const seriesTitle = section ? section.querySelector('h2').textContent : 'Fine Art Print';
      seriesNameSpan.textContent = seriesTitle;
      
      // Show modal
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
      }, 50);
    });
  });

  // Close modal logic
  const closeModal = () => {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
      inquiryForm.classList.remove('hidden');
      modalSuccessMsg.classList.add('hidden');
    }, 300);
  };

  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (!e.target.closest('#modal-content')) {
      closeModal();
    }
  });

  // Inquiry form submit
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = document.getElementById('inquiry-name').value;
    const emailVal = document.getElementById('inquiry-email').value;
    const msgVal = document.getElementById('inquiry-message').value;
    const submitBtn = document.getElementById('submit-inquiry-btn');
    const originalText = submitBtn.textContent;

    if (!nameVal || !emailVal || !msgVal) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      // Swap form with success feedback
      inquiryForm.classList.add('hidden');
      modalSuccessMsg.classList.remove('hidden');

      // Clear values
      document.getElementById('inquiry-name').value = '';
      document.getElementById('inquiry-email').value = '';
      document.getElementById('inquiry-message').value = '';

      // Auto close modal
      setTimeout(closeModal, 1500);
    }, 1200);
  });

});
