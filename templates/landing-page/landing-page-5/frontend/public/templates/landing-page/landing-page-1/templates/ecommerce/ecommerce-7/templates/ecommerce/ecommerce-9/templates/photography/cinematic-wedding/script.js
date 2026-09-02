// Cinematic Wedding landing client interactions script

document.addEventListener('DOMContentLoaded', () => {

  // 1. Set copyright year dynamically
  document.getElementById('year').textContent = new Date().getFullYear();

  // 2. Preloader intro curtain fade-away
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1000);
  }, 2000);

  // 3. Custom circular cursor coords
  const cursor = document.getElementById('custom-cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // Track hover states for links/buttons
  document.querySelectorAll('a, button, [role="button"], input, textarea').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
      cursor.classList.add('interactive');
    });
    elem.addEventListener('mouseleave', () => {
      cursor.classList.remove('interactive');
    });
  });

  // 4. Sticky shrinking navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.remove('bg-transparent', 'py-8');
      navbar.classList.add('bg-black/95', 'border-b', 'border-white/5', 'py-4', 'shadow-lg');
    } else {
      navbar.classList.remove('bg-black/95', 'border-b', 'border-white/5', 'py-4', 'shadow-lg');
      navbar.classList.add('bg-transparent', 'py-8');
    }
  });

  // 5. Mobile Drawer Menu open/close
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuSpans = menuBtn.querySelectorAll('span');
  let isMenuOpen = false;

  const toggleMenu = () => {
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
  };

  menuBtn.addEventListener('click', toggleMenu);
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // 6. Intersection observer scroll reveal fade-ups
  const revealSections = document.querySelectorAll('.reveal-section');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  revealSections.forEach(section => {
    revealObserver.observe(section);
  });

  // 7. Testimonials Carousel Toggle
  const testimonials = [
    {
      quote: "Eden Rose didn't just take photos; they created cinematic frames that felt like stills from a luxury French film.",
      author: "— Sophia & Mateo"
    },
    {
      quote: "The archival film prints we received are absolute poetry. Every frame captures the silent tension and romance of Lake Como.",
      author: "— Vivienne & Alexander"
    }
  ];
  const quoteElem = document.getElementById('testimonial-quote');
  const authorElem = document.getElementById('testimonial-author');
  const dotsContainer = document.getElementById('carousel-dots');
  const dots = dotsContainer.querySelectorAll('.dot');
  let activeIndex = 0;

  const updateTestimonial = (idx) => {
    activeIndex = idx;
    quoteElem.style.opacity = 0;
    authorElem.style.opacity = 0;

    setTimeout(() => {
      quoteElem.textContent = `"${testimonials[activeIndex].quote}"`;
      authorElem.textContent = testimonials[activeIndex].author;
      
      // Update dot active lines
      dots.forEach((dot, dIdx) => {
        if (dIdx === activeIndex) {
          dot.classList.remove('w-3', 'bg-white/20');
          dot.classList.add('w-8', 'bg-[#c5a880]');
        } else {
          dot.classList.remove('w-8', 'bg-[#c5a880]');
          dot.classList.add('w-3', 'bg-white/20');
        }
      });

      quoteElem.style.opacity = 1;
      authorElem.style.opacity = 1;
    }, 500);
  };

  // Click handler
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIdx = parseInt(e.target.getAttribute('data-index'));
      updateTestimonial(targetIdx);
    });
  });

  // Auto scroll quote carousel loop
  setInterval(() => {
    const nextIdx = (activeIndex + 1) % testimonials.length;
    updateTestimonial(nextIdx);
  }, 6000);

  // 8. Contact inquiry submit
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');
  const submitBtn = document.getElementById('contact-submit-btn');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = document.getElementById('contact-name').value;
    const emailVal = document.getElementById('contact-email').value;
    const msgVal = document.getElementById('contact-msg').value;
    const originalText = submitBtn.textContent;

    if (!nameVal || !emailVal || !msgVal) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      // Swap form with success feedback panel
      contactForm.classList.add('hidden');
      contactSuccess.classList.remove('hidden');

      // Clear values
      document.getElementById('contact-name').value = '';
      document.getElementById('contact-email').value = '';
      document.getElementById('contact-msg').value = '';

      setTimeout(() => {
        contactSuccess.classList.add('hidden');
        contactForm.classList.remove('hidden');
      }, 5000);
    }, 1500);
  });

});
