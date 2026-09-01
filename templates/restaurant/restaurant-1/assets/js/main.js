/**
 * EMBER HOUSE — RADICAL EDITORIAL DIGITAL PUBLICATION ENGINE
 * Interactive Features: Custom Dot Cursor, Fullscreen Navigation & Background Image Swap,
 * Chapter Scroll Counter, Sticky Scroll Experience Image Switcher,
 * Multi-Page Lightbox Modal with Prev/Next controls, Inline Reservation & Year Auto Update.
 */

window.EmberConfig = {
  brand: {
    name: 'EMBER HOUSE',
    tagline: 'Food Worth Gathering For',
    established: '2012',
    city: 'Chennai',
    address: '27 Garden Street, Chennai, Tamil Nadu, 600004',
    phone: '+91 98765 43210',
    email: 'hello@emberhouse.example',
    hours: 'Mon–Thu: 11:00 AM – 10:00 PM | Fri–Sun: 11:00 AM – 11:30 PM'
  }
};

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initHeroReveals();
    initHeaderScroll();
    initFullscreenNav();
    initCustomCursor();
    initChapterCounter();
    initStickyExperienceScroll();
    initLightbox();
    initInlineReservation();
    initYearAutoUpdate();
  });

  /* 1. Hero Load Entrance */
  function initHeroReveals() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    setTimeout(() => {
      hero.classList.add('loaded');
    }, 100);
  }

  /* 1b. Header Scroll Class Handler */
  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* 2. Fullscreen Navigation & Hover Image Swap */
  function initFullscreenNav() {
    const openBtn = document.getElementById('btnMenuOpen');
    const closeBtn = document.getElementById('btnNavClose');
    const navOverlay = document.getElementById('fullscreenNav');
    const bgImg = document.getElementById('navHoverBg');
    const captionTitle = document.getElementById('navCaptionTitle');
    const captionSub = document.getElementById('navCaptionSub');
    const navLinks = document.querySelectorAll('.nav-link-giant');

    if (!navOverlay) return;

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        navLinks.forEach(l => l.classList.remove('active-hover'));
        link.classList.add('active-hover');

        const newBgSrc = link.getAttribute('data-bg');
        const newTitle = link.getAttribute('data-caption-title');
        const newSub = link.getAttribute('data-caption-sub');

        if (newBgSrc && bgImg) {
          bgImg.classList.remove('active');
          setTimeout(() => {
            bgImg.src = newBgSrc;
            bgImg.classList.add('active');
          }, 120);
        }

        if (newTitle && captionTitle) {
          captionTitle.innerText = newTitle;
        }

        if (newSub && captionSub) {
          captionSub.innerText = newSub;
        }
      });

      link.addEventListener('click', () => {
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* 3. Custom Desktop Cursor Engine */
  function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const follower = document.getElementById('customCursorFollower');
    if (!cursor || !follower) {
      document.body.classList.remove('has-custom-cursor');
      return;
    }

    // Enable custom cursor styles on body when desktop elements exist
    if (window.innerWidth >= 992) {
      document.body.classList.add('has-custom-cursor');

      window.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.transform = `translate(${x}px, ${y}px)`;
        follower.style.transform = `translate(${x}px, ${y}px)`;
      });

      const hoverables = document.querySelectorAll('.hover-cursor, a, button, select');
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
          follower.classList.add('active');
          const customText = el.getAttribute('data-cursor');
          follower.innerText = customText || '';
        });

        el.addEventListener('mouseleave', () => {
          follower.classList.remove('active');
          follower.innerText = '';
        });
      });
    }
  }

  /* 4. Chapter Scroll Counter (01 / 09 - 09 / 09) */
  function initChapterCounter() {
    const counterEl = document.getElementById('chapterCounter');
    if (!counterEl) return;

    const chapters = [
      { id: 'hero', num: '01 / 09' },
      { id: 'introduction', num: '01 / 09' },
      { id: 'the-house', num: '02 / 09' },
      { id: 'dishes', num: '03 / 09' },
      { id: 'fire-kitchen', num: '04 / 09' },
      { id: 'people', num: '05 / 09' },
      { id: 'experiences', num: '06 / 09' },
      { id: 'journal', num: '07 / 09' },
      { id: 'reservation', num: '08 / 09' },
      { id: 'contact', num: '09 / 09' }
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const match = chapters.find(c => c.id === entry.target.id);
          if (match) {
            counterEl.innerText = match.num;
          }
        }
      });
    }, { threshold: 0.3 });

    chapters.forEach(c => {
      const sec = document.getElementById(c.id);
      if (sec) observer.observe(sec);
    });
  }

  /* 5. Sticky Scroll Experience Image Switcher */
  function initStickyExperienceScroll() {
    const bgImg = document.getElementById('expStickyBg');
    const blocks = document.querySelectorAll('.exp-content-block');
    if (!bgImg || !blocks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const newSrc = entry.target.getAttribute('data-bg');
          if (newSrc && bgImg.src !== newSrc) {
            bgImg.style.opacity = '0.1';
            setTimeout(() => {
              bgImg.src = newSrc;
              bgImg.style.opacity = '0.4';
            }, 300);
          }
        }
      });
    }, { threshold: 0.5 });

    blocks.forEach(b => observer.observe(b));
  }

  /* 6. Universal Lightbox Modal (Journal Strip & Gallery Grid) */
  function initLightbox() {
    const items = document.querySelectorAll('.journal-strip-item, .gallery-item');
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    const modalImg = modal.querySelector('#lightboxImg, .lightbox-img');
    const closeBtn = modal.querySelector('#lightboxClose, .lightbox-close');
    const prevBtn = modal.querySelector('.lightbox-prev');
    const nextBtn = modal.querySelector('.lightbox-next');
    const captionEl = modal.querySelector('.lightbox-caption');

    if (!modalImg) return;

    let currentIndex = 0;
    const itemsList = Array.from(items);

    function showImage(index) {
      if (index < 0) index = itemsList.length - 1;
      if (index >= itemsList.length) index = 0;
      currentIndex = index;

      const target = itemsList[currentIndex];
      const src = target.getAttribute('data-src') || target.querySelector('img')?.src;
      const caption = target.getAttribute('data-caption') || target.querySelector('.gallery-caption-text')?.innerText || '';

      if (src) {
        modalImg.src = src;
        if (captionEl) {
          captionEl.innerText = caption;
        }
      }
    }

    itemsList.forEach((item, idx) => {
      item.addEventListener('click', () => {
        showImage(idx);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex + 1);
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('lightbox-content')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
  }

  /* 7. Inline Reservation Handler */
  function initInlineReservation() {
    const form = document.getElementById('inlineReservationForm');
    const alertBox = document.getElementById('reservationSuccessAlert');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('btnInlineReserve');
      if (btn) {
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>[ CHECKING... ]';
        btn.disabled = true;
      }

      setTimeout(() => {
        if (alertBox) {
          alertBox.style.display = 'block';
          alertBox.innerText = '✓ Table requested! Digital confirmation voucher sent to your email.';
        }
        if (btn) {
          btn.innerText = '[ REQUEST CONFIRMED ]';
          btn.disabled = false;
        }
      }, 1200);
    });
  }

  /* 8. Year Auto Update */
  function initYearAutoUpdate() {
    const yearEls = document.querySelectorAll('.current-year');
    yearEls.forEach(el => el.innerText = new Date().getFullYear());
  }

})();
