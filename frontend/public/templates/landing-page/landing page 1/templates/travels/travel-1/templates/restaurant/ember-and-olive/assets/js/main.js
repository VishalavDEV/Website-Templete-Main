/**
 * Ember & Olive - Commercial Restaurant Website Template
 * Core Application Engine
 * Version: 1.0.0
 * License: MIT
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CENTRALIZED TEMPLATE CONFIGURATION (Easy Rebranding & Customization)
     ========================================================================== */
  const TEMPLATE_CONFIG = {
    brand: {
      name: 'EMBER & OLIVE',
      tagline: 'Seasonal Food. Shared Moments.',
      established: '2012',
      phone: '+91 98765 43210',
      email: 'hello@emberandolive.example',
      address: '28 Garden Avenue, Chennai, Tamil Nadu, 600018',
    },
    hours: {
      weekday: 'Monday – Thursday: 11:00 AM – 10:00 PM',
      weekend: 'Friday – Sunday: 11:00 AM – 11:30 PM',
    },
    social: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      tripadvisor: 'https://tripadvisor.com',
    }
  };

  /* ==========================================================================
     2. NAVBAR SCROLL & ACTIVE STATE
     ========================================================================== */
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  /* ==========================================================================
     3. MENU CATEGORY FILTERING & LIVE SEARCH
     ========================================================================== */
  function initMenuFilter() {
    const filterButtons = document.querySelectorAll('.menu-filter-btn');
    const menuItems = document.querySelectorAll('.menu-item-wrapper');
    const searchInput = document.getElementById('menuSearchInput');
    const dietaryFilter = document.getElementById('dietaryFilterSelect');

    if (!filterButtons.length && !menuItems.length) return;

    let activeCategory = 'all';
    let activeSearchQuery = '';
    let activeDietary = 'all';

    function filterMenu() {
      // Step 1: Add filtering-out class to all items
      menuItems.forEach((item) => {
        item.classList.add('filtering-out');
      });

      // Step 2: After fade out, adjust visibility and animate back in
      setTimeout(() => {
        let visibleCount = 0;

        menuItems.forEach((item) => {
          const itemCategory = item.getAttribute('data-category') || 'all';
          const itemDietary = item.getAttribute('data-dietary') || '';
          const itemTitle = (item.querySelector('.menu-item-title')?.textContent || '').toLowerCase();
          const itemDesc = (item.querySelector('.menu-item-desc')?.textContent || '').toLowerCase();

          const matchesCategory = activeCategory === 'all' || itemCategory === activeCategory;
          const matchesSearch = !activeSearchQuery || itemTitle.includes(activeSearchQuery) || itemDesc.includes(activeSearchQuery);
          const matchesDietary = activeDietary === 'all' || itemDietary.includes(activeDietary);

          if (matchesCategory && matchesSearch && matchesDietary) {
            item.style.display = '';
            item.classList.remove('filtering-out');
            item.classList.add('filtering-in');
            
            // Stagger entrance
            setTimeout(() => {
              item.classList.remove('filtering-in');
              item.classList.add('revealed');
            }, visibleCount * 60 + 50);

            visibleCount++;
          } else {
            item.style.display = 'none';
            item.classList.remove('filtering-out', 'filtering-in');
          }
        });

        // Show/hide empty state
        const emptyState = document.getElementById('menuEmptyState');
        if (emptyState) {
          emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      }, 300);
    }

    // Category button clicks
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        filterButtons.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');
        activeCategory = this.getAttribute('data-filter') || 'all';
        filterMenu();
      });
    });

    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        activeSearchQuery = e.target.value.toLowerCase().trim();
        filterMenu();
      });
    }

    // Dietary dropdown
    if (dietaryFilter) {
      dietaryFilter.addEventListener('change', function (e) {
        activeDietary = e.target.value;
        filterMenu();
      });
    }
  }

  /* ==========================================================================
     4. TESTIMONIALS SLIDER / CAROUSEL
     ========================================================================== */
  function initTestimonialsSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.testimonial-dots');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');

    if (!slides.length) return;

    let currentIndex = 0;
    let autoSlideInterval = null;

    // Create dots if container exists
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `testimonial-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
      });
    }

    function showSlide(index) {
      slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? 'block' : 'none';
        slide.classList.toggle('active', idx === index);
      });

      const dots = document.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
      });

      currentIndex = index;
    }

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      showSlide(index);
      resetAutoPlay();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    }

    function startAutoPlay() {
      autoSlideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 6000);
    }

    function resetAutoPlay() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        startAutoPlay();
      }
    }

    // Touch swipe support
    const carouselContainer = document.querySelector('.testimonial-carousel-container');
    if (carouselContainer) {
      let startX = 0;
      carouselContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
      }, { passive: true });

      carouselContainer.addEventListener('touchend', (e) => {
        const diffX = startX - e.changedTouches[0].clientX;
        if (Math.abs(diffX) > 40) {
          if (diffX > 0) goToSlide(currentIndex + 1);
          else goToSlide(currentIndex - 1);
        }
      }, { passive: true });
    }

    showSlide(0);
    startAutoPlay();
  }

  /* ==========================================================================
     5. GALLERY LIGHTBOX & FILTER
     ========================================================================== */
  function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('galleryLightbox');
    if (!lightbox || !galleryItems.length) return;

    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxTitle = lightbox.querySelector('.lightbox-caption-title');
    const lightboxCounter = lightbox.querySelector('.lightbox-counter');
    const btnClose = lightbox.querySelector('.lightbox-btn-close');
    const btnPrev = lightbox.querySelector('.lightbox-btn-prev');
    const btnNext = lightbox.querySelector('.lightbox-btn-next');

    let visibleItems = Array.from(galleryItems).filter((item) => item.style.display !== 'none');
    let currentItemIdx = 0;

    function getVisibleItems() {
      const items = Array.from(galleryItems).filter((item) => item.style.display !== 'none');
      return items.length ? items : Array.from(galleryItems);
    }

    function openLightbox(item) {
      visibleItems = getVisibleItems();
      currentItemIdx = visibleItems.indexOf(item);
      if (currentItemIdx === -1) currentItemIdx = 0;
      updateLightboxContent();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function updateLightboxContent() {
      const currentItem = visibleItems[currentItemIdx];
      if (!currentItem) return;
      const src = currentItem.getAttribute('data-full-img') || currentItem.querySelector('img')?.src || '';
      const title = currentItem.querySelector('.gallery-item-title')?.textContent || 'Ember & Olive';

      lightboxImg.src = src;
      lightboxImg.alt = title;
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxCounter) lightboxCounter.textContent = `${currentItemIdx + 1} / ${visibleItems.length}`;
    }

    function nextItem() {
      visibleItems = getVisibleItems();
      currentItemIdx = (currentItemIdx + 1) % visibleItems.length;
      updateLightboxContent();
    }

    function prevItem() {
      visibleItems = getVisibleItems();
      currentItemIdx = (currentItemIdx - 1 + visibleItems.length) % visibleItems.length;
      updateLightboxContent();
    }

    galleryItems.forEach((item) => {
      item.addEventListener('click', () => openLightbox(item));
    });

    if (btnClose) btnClose.addEventListener('click', closeLightbox);
    if (btnNext) btnNext.addEventListener('click', nextItem);
    if (btnPrev) btnPrev.addEventListener('click', prevItem);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextItem();
      if (e.key === 'ArrowLeft') prevItem();
    });

    // Gallery Category Filtering (for gallery.html page)
    const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
    if (galleryFilterBtns.length) {
      galleryFilterBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
          galleryFilterBtns.forEach((b) => b.classList.remove('active'));
          this.classList.add('active');
          const filterValue = this.getAttribute('data-filter') || 'all';

          galleryItems.forEach((item) => {
            const itemCat = item.getAttribute('data-category') || 'all';
            if (filterValue === 'all' || itemCat === filterValue) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }
  }

  /* ==========================================================================
     6. STATISTICS COUNTER ANIMATION
     ========================================================================== */
  function initCounters() {
    const counterElements = document.querySelectorAll('.stat-number[data-target]');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target') || '0', 10);
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 1800;
            const startTime = performance.now();

            function updateCount(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 4);
              const currentVal = Math.floor(easeProgress * target);

              counter.textContent = currentVal + suffix;

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                counter.textContent = target + suffix;
              }
            }

            requestAnimationFrame(updateCount);
            obs.unobserve(counter);
          }
        });
      },
      { threshold: 0.2 }
    );

    counterElements.forEach((counter) => observer.observe(counter));
  }

  /* ==========================================================================
     7. RESERVATION FORM HANDLING & VALIDATION
     ========================================================================== */
  function initReservationForms() {
    const reservationForms = document.querySelectorAll('.reservation-form-interactive');

    reservationForms.forEach((form) => {
      // Set minimum date to today
      const dateInput = form.querySelector('input[type="date"]');
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        if (!dateInput.value) dateInput.value = today;
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate required fields
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Request Reservation';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Confirming Table...';
        }

        // Collect details
        const formData = new FormData(form);
        const name = formData.get('guest_name') || 'Guest';
        const date = formData.get('reservation_date') || 'Today';
        const time = formData.get('reservation_time') || '7:30 PM';
        const guests = formData.get('guests_count') || '2';

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }

          // Show confirmation alert
          const feedbackAlert = form.querySelector('.form-feedback-alert') || document.getElementById('reservationToastAlert');
          if (feedbackAlert) {
            feedbackAlert.innerHTML = `
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-accent fs-4"></i>
                <div>
                  <strong>Thank you, ${name}!</strong> Your reservation for <strong>${guests} guests</strong> on <strong>${date} at ${time}</strong> has been received. A confirmation has been sent to your email.
                </div>
              </div>
            `;
            feedbackAlert.classList.add('show', 'alert-success-custom');
          }

          // Reset form fields except date
          form.reset();
          if (dateInput) {
            dateInput.value = new Date().toISOString().split('T')[0];
          }

          // Scroll alert into view if on mobile
          feedbackAlert?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1000);
      });
    });
  }

  /* ==========================================================================
     8. CONTACT & INQUIRY FORM HANDLING
     ========================================================================== */
  function initContactForms() {
    const contactForms = document.querySelectorAll('.contact-form-interactive');

    contactForms.forEach((form) => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Message';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Sending...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }

          const feedbackAlert = form.querySelector('.form-feedback-alert');
          if (feedbackAlert) {
            feedbackAlert.innerHTML = `
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-accent fs-4"></i>
                <div>
                  <strong>Message Sent!</strong> Thank you for reaching out to Ember & Olive. Our hospitality team will reply within 24 hours.
                </div>
              </div>
            `;
            feedbackAlert.classList.add('show', 'alert-success-custom');
          }

          form.reset();
        }, 900);
      });
    });
  }

  /* ==========================================================================
     9. NEWSLETTER SUBSCRIPTION
     ========================================================================== */
  function initNewsletter() {
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach((form) => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const input = form.querySelector('.newsletter-input');
        if (!input || !input.value.includes('@')) return;

        const email = input.value;
        input.value = '';
        input.placeholder = 'Subscribed! Check your inbox.';
        input.style.borderColor = 'var(--color-accent)';

        setTimeout(() => {
          input.placeholder = 'Enter your email address';
          input.style.borderColor = '';
        }, 4000);
      });
    });
  }

  /* ==========================================================================
     10. PAGE LOAD FLOW SEQUENCE
     ========================================================================== */
  function initPageLoadFlow() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    // Trigger hero entrance after slight delay for visual smoothness
    setTimeout(() => {
      heroSection.classList.add('hero-loaded');
    }, 60);
  }

  /* ==========================================================================
     11. SCROLL PROGRESS INDICATOR
     ========================================================================== */
  function initScrollProgress() {
    let progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress-bar';
      document.body.prepend(progressBar);
    }

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ==========================================================================
     12. LUXURY DESKTOP CUSTOM CURSOR
     ========================================================================== */
  function initCustomCursor() {
    // Only run on non-touch fine-pointer devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let dot = document.querySelector('.custom-cursor-dot');
    let ring = document.querySelector('.custom-cursor-ring');

    if (!dot) {
      dot = document.createElement('div');
      dot.className = 'custom-cursor-dot';
      document.body.appendChild(dot);
    }

    if (!ring) {
      ring = document.createElement('div');
      ring.className = 'custom-cursor-ring';
      document.body.appendChild(ring);
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    }, { passive: true });

    // Smooth lerp animation for outer ring
    function renderCursor() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Hover state detection on interactive targets
    const interactiveSelector = 'a, button, .gallery-item, .signature-card, .event-card, .chef-card, .menu-filter-btn, input, select, textarea';
    
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelector)) {
        dot.classList.add('hovered');
        ring.classList.add('hovered');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelector)) {
        dot.classList.remove('hovered');
        ring.classList.remove('hovered');
      }
    });
  }

  /* ==========================================================================
     13. SCROLL PARALLAX EFFECT
     ========================================================================== */
  function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const heroMediaImg = document.querySelector('.hero-media-img') || document.querySelector('.hero-bg-img');
    const aboutPrimaryImg = document.querySelector('.about-img-primary');
    const aboutSecondaryImg = document.querySelector('.about-img-secondary');

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          if (heroMediaImg && scrollY < window.innerHeight) {
            const parallaxY = Math.min(35, scrollY * 0.12);
            heroMediaImg.style.transform = `translate3d(0, ${-parallaxY}px, 0)`;
          }

          if (aboutPrimaryImg && aboutPrimaryImg.getBoundingClientRect().top < window.innerHeight) {
            const offset = (window.innerHeight - aboutPrimaryImg.getBoundingClientRect().top) * 0.04;
            aboutPrimaryImg.style.transform = `translate3d(0, ${-offset}px, 0)`;
          }

          if (aboutSecondaryImg && aboutSecondaryImg.getBoundingClientRect().top < window.innerHeight) {
            const offset = (window.innerHeight - aboutSecondaryImg.getBoundingClientRect().top) * 0.09;
            aboutSecondaryImg.style.transform = `translate3d(0, ${-offset}px, 0)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ==========================================================================
     14. ACTIVE SECTION SCROLLSPY
     ========================================================================== */
  function initActiveNavSpy() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.nav-link-custom, .nav-link-mobile');

    // Highlight link based on current HTML page URL
    allNavLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const linkPage = href.split('#')[0];
      if (linkPage === currentPath || (currentPath === '' && linkPage === 'index.html')) {
        if (!href.includes('#')) {
          link.classList.add('active');
        }
      }
    });

    const hashNavLinks = document.querySelectorAll('.nav-link-custom[href^="#"]');
    if (!hashNavLinks.length) return;

    const sections = Array.from(hashNavLinks)
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          hashNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  /* ==========================================================================
     15. ENHANCED SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  function initScrollReveal() {
    const selector = '.reveal-up, .reveal-left, .reveal-right, .scale-reveal, .image-reveal, .text-reveal, .stagger-container, .reveal-fade-up, .reveal-fade-in, .reveal-fade-right, .reveal-fade-left, .about-editorial-wrap';
    const revealElements = document.querySelectorAll(selector);
    if (!revealElements.length) return;

    function revealElement(el) {
      if (!el) return;
      el.classList.add('revealed');
      const nestedables = el.querySelectorAll('.image-reveal, .scale-reveal, .text-reveal, .stagger-item, .reveal-up, .reveal-left, .reveal-right, .reveal-fade-up, .reveal-fade-in, .reveal-fade-right, .reveal-fade-left, img');
      nestedables.forEach((child) => child.classList.add('revealed'));
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: '100px 0px 100px 0px' }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150 && rect.bottom > -150) {
        revealElement(el);
      } else {
        observer.observe(el);
      }
    });

    // Fallback: reveal all top-section image containers immediately after load
    setTimeout(() => {
      document.querySelectorAll('.image-reveal, .about-editorial-wrap, .about-main-img-box, .about-secondary-img-box, .hero-media-wrapper').forEach(revealElement);
    }, 100);
  }

  /* ==========================================================================
     16. BACK TO TOP BUTTON
     ========================================================================== */
  function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 450) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      },
      { passive: true }
    );

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     17. SIGNATURE DISH INTERACTIVE SPOTLIGHT MODAL
     ========================================================================== */
  function initSignatureDishModal() {
    const dishTriggers = document.querySelectorAll('.btn-discover-dish');
    const dishModal = document.getElementById('signatureDishModal');
    if (!dishModal || !dishTriggers.length) return;

    dishTriggers.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const title = this.getAttribute('data-dish-title') || 'Signature Dish';
        const price = this.getAttribute('data-dish-price') || '';
        const desc = this.getAttribute('data-dish-desc') || '';
        const ingredients = this.getAttribute('data-dish-ingredients') || '';
        const pairing = this.getAttribute('data-dish-pairing') || 'Sommelier Selection Red';
        const img = this.getAttribute('data-dish-img') || '';

        const modalTitle = dishModal.querySelector('.modal-dish-title');
        const modalPrice = dishModal.querySelector('.modal-dish-price');
        const modalDesc = dishModal.querySelector('.modal-dish-desc');
        const modalIngredients = dishModal.querySelector('.modal-dish-ingredients');
        const modalPairing = dishModal.querySelector('.modal-dish-pairing');
        const modalImg = dishModal.querySelector('.modal-dish-img');

        if (modalTitle) modalTitle.textContent = title;
        if (modalPrice) modalPrice.textContent = price;
        if (modalDesc) modalDesc.textContent = desc;
        if (modalIngredients) modalIngredients.textContent = ingredients;
        if (modalPairing) modalPairing.textContent = pairing;
        if (modalImg && img) modalImg.src = img;

        // Open bootstrap modal
        if (window.bootstrap && window.bootstrap.Modal) {
          const bsModal = new window.bootstrap.Modal(dishModal);
          bsModal.show();
        }
      });
    });
  }

  /* ==========================================================================
     18. INITIALIZE ON DOM READY
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    initPageLoadFlow();
    initScrollProgress();
    initCustomCursor();
    initHeaderScroll();
    initParallax();
    initActiveNavSpy();
    initMenuFilter();
    initTestimonialsSlider();
    initGalleryLightbox();
    initCounters();
    initReservationForms();
    initContactForms();
    initNewsletter();
    initScrollReveal();
    initBackToTop();
    initSignatureDishModal();
  });

})();

