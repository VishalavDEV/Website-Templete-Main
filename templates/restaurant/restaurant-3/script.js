/* ==========================================================================
   LUMIÈRE — COASTAL CUISINE · MODERN TABLE
   Interactive Application Script & Dynamic Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     01. SEEDER HYDRATION ENGINE
     ------------------------------------------------------------------------ */
  const hydrateMenuSection = () => {
    const menuContainer = document.querySelector('.menu-list-container');
    if (!menuContainer || typeof RESTAURANT_DATA === 'undefined') return;

    menuContainer.innerHTML = RESTAURANT_DATA.menuData.map(dish => `
      <div class="menu-item-row" data-dish-img="${dish.image}" data-cursor="DISH" data-category="${dish.category}">
        <span class="menu-number">${dish.number}</span>
        <div class="menu-dish-info">
          <h3>${dish.title}</h3>
          <p>${dish.description}</p>
        </div>
        <span class="menu-price">${formatCurrency ? formatCurrency(dish.price) : `₹${dish.price}`}</span>
      </div>
    `).join('');
  };

  const hydrateJournalSection = () => {
    const journalGrid = document.querySelector('.journal-grid');
    if (!journalGrid || typeof RESTAURANT_DATA === 'undefined') return;

    journalGrid.innerHTML = RESTAURANT_DATA.journalData.map(article => `
      <article class="journal-card" data-article-id="${article.id}">
        <div class="journal-img-wrapper">
          <img src="${article.image}" alt="${article.title}">
        </div>
        <span class="journal-date">${article.formattedDate} · ${article.readTime}</span>
        <h3 class="journal-title">${article.title}</h3>
        <p class="journal-snippet">${article.snippet}</p>
        <a href="#" class="journal-read-link" data-article-id="${article.id}">READ ESSAY →</a>
      </article>
    `).join('');
  };

  // Perform Initial Data Hydration
  hydrateMenuSection();
  hydrateJournalSection();

  /* ------------------------------------------------------------------------
     02. HERO LOAD ANIMATION INITIALIZATION
     ------------------------------------------------------------------------ */
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    setTimeout(() => {
      heroSection.classList.add('is-loaded');
    }, 150);
  }

  /* ------------------------------------------------------------------------
     03. STICKY NAV SCROLL DETECTION
     ------------------------------------------------------------------------ */
  const siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        siteNav.classList.add('is-scrolled');
      } else {
        siteNav.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     04. CUSTOM CURSOR (Desktop Fine Pointers)
     ------------------------------------------------------------------------ */
  const cursor = document.querySelector('.custom-cursor');
  const cursorText = document.querySelector('.custom-cursor-text');

  if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const renderCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    // Event Delegation for Interactive Hover Elements
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        const isDark = target.getAttribute('data-cursor-dark') === 'true';

        cursor.classList.add('is-hovered');
        if (isDark) cursor.classList.add('is-dark-hover');
        if (text && cursorText) cursorText.textContent = text;
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        cursor.classList.remove('is-hovered', 'is-dark-hover');
        if (cursorText) cursorText.textContent = '';
      }
    });
  }

  /* ------------------------------------------------------------------------
     05. FULL-SCREEN NAVIGATION OVERLAY & BG PREVIEW
     ------------------------------------------------------------------------ */
  const navTrigger = document.querySelector('.nav-trigger');
  const navClose = document.querySelector('.fullscreen-nav-close');
  const fullscreenNav = document.querySelector('.fullscreen-nav');
  const menuLinks = document.querySelectorAll('.fullscreen-menu-link');
  const bgPreviews = document.querySelectorAll('.nav-bg-preview');

  const toggleNav = (open) => {
    if (!fullscreenNav) return;
    if (open) {
      fullscreenNav.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    } else {
      fullscreenNav.classList.remove('is-active');
      document.body.style.overflow = '';
      bgPreviews.forEach(bg => bg.classList.remove('is-visible'));
    }
  };

  if (navTrigger) navTrigger.addEventListener('click', () => toggleNav(true));
  if (navClose) navClose.addEventListener('click', () => toggleNav(false));

  // ESC key to close overlay or active modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (fullscreenNav && fullscreenNav.classList.contains('is-active')) {
        toggleNav(false);
      }
      closeInfoModal();
      closeReservationModal();
    }
  });

  // Hover menu items to swap background image preview
  menuLinks.forEach(link => {
    const bgId = link.getAttribute('data-bg');
    link.addEventListener('mouseenter', () => {
      bgPreviews.forEach(bg => bg.classList.remove('is-visible'));
      if (bgId) {
        const activeBg = document.getElementById(bgId);
        if (activeBg) activeBg.classList.add('is-visible');
      }
    });

    link.addEventListener('click', () => {
      toggleNav(false);
    });
  });

  /* ------------------------------------------------------------------------
     06. INTERACTIVE MENU LIST HOVER DISH FLOATING IMAGE PREVIEW
     ------------------------------------------------------------------------ */
  const menuSection = document.querySelector('.menu-section');
  const floatingPreview = document.querySelector('.floating-dish-preview');
  const floatingImg = floatingPreview ? floatingPreview.querySelector('img') : null;

  if (floatingPreview && floatingImg && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    const updateFloatingPos = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      floatingPreview.style.left = `${currentX}px`;
      floatingPreview.style.top = `${currentY}px`;
      requestAnimationFrame(updateFloatingPos);
    };
    requestAnimationFrame(updateFloatingPos);

    // Event delegation for menu rows
    document.addEventListener('mouseover', (e) => {
      const row = e.target.closest('.menu-item-row');
      if (row) {
        const imgSrc = row.getAttribute('data-dish-img');
        if (imgSrc) {
          floatingImg.src = imgSrc;
          floatingPreview.classList.add('is-active');
          targetX = e.clientX;
          targetY = e.clientY;
          currentX = e.clientX;
          currentY = e.clientY;
        }
      }
    });

    document.addEventListener('mouseout', (e) => {
      const row = e.target.closest('.menu-item-row');
      if (row) {
        floatingPreview.classList.remove('is-active');
      }
    });

    if (menuSection) {
      menuSection.addEventListener('mouseleave', () => {
        floatingPreview.classList.remove('is-active');
      });
    }
  }

  /* ------------------------------------------------------------------------
     07. INTERSECTION OBSERVER ANIMATIONS
     ------------------------------------------------------------------------ */
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  const animatableElements = document.querySelectorAll('.reveal-on-scroll');
  animatableElements.forEach(el => revealObserver.observe(el));

  /* ------------------------------------------------------------------------
     08. GALLERY FILTERING LOGIC (Bug Fixed Layout Engine)
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('is-hidden');
          item.style.opacity = '1';
        } else {
          item.style.opacity = '0';
          item.classList.add('is-hidden');
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     09. RESERVATION FORM & CONFIRMATION MODAL
     ------------------------------------------------------------------------ */
  const resForm = document.getElementById('reservation-form');
  const resModal = document.querySelector('.reservation-modal');
  const modalClose = document.querySelector('.modal-close-btn');
  const resDetailsSummary = document.getElementById('res-details-summary');
  const dateInput = document.getElementById('res-date');

  // Enforce today as minimum selectable reservation date
  const todayStr = new Date().toISOString().split('T')[0];
  if (dateInput) {
    dateInput.setAttribute('min', todayStr);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  const closeReservationModal = () => {
    if (resModal) {
      resModal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawDate = document.getElementById('res-date').value;
      const time = document.getElementById('res-time').value;
      const guests = document.getElementById('res-guests').value;

      let formattedDateStr = rawDate;
      if (rawDate) {
        const parsedDate = new Date(rawDate + 'T00:00:00');
        formattedDateStr = parsedDate.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });
      }

      if (resDetailsSummary) {
        resDetailsSummary.innerHTML = `Table reserved for <strong>${guests} ${guests === '1' ? 'guest' : 'guests'}</strong> on <strong>${formattedDateStr}</strong> at <strong>${time}</strong>. We look forward to welcoming you to Lumière.`;
      }

      if (resModal) {
        resModal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeReservationModal);
  }

  if (resModal) {
    resModal.addEventListener('click', (e) => {
      if (e.target === resModal) closeReservationModal();
    });
  }

  /* ------------------------------------------------------------------------
     10. GENERAL INFO & ESSAY MODAL SYSTEM
     ------------------------------------------------------------------------ */
  const infoModal = document.getElementById('info-modal');
  const infoModalClose = document.querySelector('.info-modal-close');
  const infoModalTag = document.getElementById('info-modal-tag');
  const infoModalTitle = document.getElementById('info-modal-title');
  const infoModalMeta = document.getElementById('info-modal-meta');
  const infoModalBody = document.getElementById('info-modal-body');

  const openInfoModal = (tag, title, meta, bodyHtml) => {
    if (!infoModal) return;
    if (infoModalTag) infoModalTag.textContent = tag;
    if (infoModalTitle) infoModalTitle.textContent = title;
    if (infoModalMeta) infoModalMeta.textContent = meta;
    if (infoModalBody) infoModalBody.innerHTML = bodyHtml;

    infoModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeInfoModal = () => {
    if (infoModal) {
      infoModal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  if (infoModalClose) {
    infoModalClose.addEventListener('click', closeInfoModal);
  }

  if (infoModal) {
    infoModal.addEventListener('click', (e) => {
      if (e.target === infoModal) closeInfoModal();
    });
  }

  // Journal essay reader click handlers
  document.addEventListener('click', (e) => {
    const journalLink = e.target.closest('[data-article-id]');
    if (journalLink) {
      e.preventDefault();
      const articleId = journalLink.getAttribute('data-article-id');
      const article = RESTAURANT_DATA.journalData.find(a => a.id === articleId);

      if (article) {
        openInfoModal(
          "FIELD NOTES",
          article.title,
          `${article.formattedDate} · ${article.readTime}`,
          `<p><strong>${article.snippet}</strong></p><p>${article.content}</p>`
        );
      }
    }

    const legalLink = e.target.closest('[data-modal-type]');
    if (legalLink) {
      e.preventDefault();
      const type = legalLink.getAttribute('data-modal-type');
      if (type === 'privacy') {
        openInfoModal(
          "LEGAL",
          "Privacy Policy",
          "LAST UPDATED: 2026",
          "<p>Lumière is committed to protecting your privacy. We store reservation details strictly for table booking, guest preferences, and dietary notifications. Your information will never be shared with third parties.</p>"
        );
      } else if (type === 'terms') {
        openInfoModal(
          "LEGAL",
          "Terms of Dining",
          "POLICY",
          "<p>Reservations are held for up to 15 minutes past the scheduled booking time. For parties of 6 or more, please contact our concierge directly at least 24 hours prior. We accommodate dietary preferences with advance notice.</p>"
        );
      } else if (type === 'press') {
        openInfoModal(
          "PRESS",
          "Press & Media Kit",
          "MEDIA INQUIRIES",
          "<p>High-resolution architectural photography, chef biographies, menu previews, and press releases are available for culinary publications. Please contact <strong>press@lumierechennai.com</strong>.</p>"
        );
      }
    }
  });
});
