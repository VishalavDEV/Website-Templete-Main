// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Lucide Icons
  lucide.createIcons();

  // Theme Toggle
  const themeToggle = document.getElementById('ht-theme-toggle');
  const root = document.querySelector('.ht-root');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      root.classList.toggle('ht-light');
      const isLight = root.classList.contains('ht-light');
      themeToggle.innerHTML = isLight ? '<i data-lucide="moon" style="width: 15px; height: 15px;"></i>' : '<i data-lucide="sun" style="width: 15px; height: 15px;"></i>';
      lucide.createIcons();
    });
  }

  // Mobile Drawer
  const hamburger = document.getElementById('ht-hamburger-btn');
  const drawer = document.querySelector('.ht-mobile-drawer');
  const drawerClose = document.getElementById('ht-drawer-close');
  const overlay = document.querySelector('.ht-drawer-overlay');

  const openDrawer = () => drawer.classList.add('open');
  const closeDrawer = () => drawer.classList.remove('open');

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Navbar Scroll & Spying
  const navbar = document.querySelector('.ht-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // Smooth Scroll for Nav Links
  document.querySelectorAll('.ht-nav-link, .ht-drawer-link').forEach(link => {
    link.addEventListener('click', (e) => {
      document.querySelectorAll('.ht-nav-link').forEach(l => l.classList.remove('active'));
      if(e.target.classList.contains('ht-nav-link')) e.target.classList.add('active');
      const text = e.target.textContent.trim().toLowerCase();
      const section = document.getElementById(`ht-${text}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeDrawer();
      }
    });
  });

  // Scroll Reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ht-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.ht-reveal').forEach(el => observer.observe(el));

  // Countdown
  const updateCountdown = () => {
    const targetDate = new Date('2026-10-31T23:59:59');
    const diff = Math.max(0, targetDate - new Date());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    
    document.querySelectorAll('.ht-countdown-num').forEach((el, i) => {
      const vals = [days, hours, mins, secs];
      el.textContent = String(vals[i]).padStart(2, '0');
    });
  };
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Gallery Filters & Lightbox
  const galleryItems = document.querySelectorAll('.ht-gallery-item');
  const filterBtns = document.querySelectorAll('.ht-gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.textContent.trim();
      galleryItems.forEach(item => {
        if (filter === 'All' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  const lightbox = document.getElementById('ht-lightbox-overlay');
  const lightboxImg = document.querySelector('.ht-lightbox-img');
  const lightboxCaptionSpan = document.querySelector('.ht-lightbox-caption span');
  const lightboxCounter = document.querySelector('.ht-lightbox-counter');
  let currentImageIdx = 0;
  let visibleItems = Array.from(galleryItems);

  const showImage = (idx) => {
    currentImageIdx = idx;
    const item = visibleItems[idx];
    lightboxImg.src = item.querySelector('img').src;
    lightboxImg.alt = item.querySelector('img').alt;
    lightboxCaptionSpan.textContent = lightboxImg.alt;
    lightboxCounter.textContent = `${idx + 1} / ${visibleItems.length}`;
    lightbox.style.display = 'flex';
  };

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      visibleItems = Array.from(galleryItems).filter(i => i.style.display !== 'none');
      showImage(visibleItems.indexOf(item));
    });
  });

  document.getElementById('ht-lightbox-close')?.addEventListener('click', () => lightbox.style.display = 'none');
  document.getElementById('ht-lightbox-prev')?.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage((currentImageIdx - 1 + visibleItems.length) % visibleItems.length);
  });
  document.getElementById('ht-lightbox-next')?.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage((currentImageIdx + 1) % visibleItems.length);
  });
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });
  window.addEventListener('keydown', (e) => {
    if(lightbox && lightbox.style.display === 'flex') {
        if(e.key === 'Escape') lightbox.style.display = 'none';
        if(e.key === 'ArrowLeft') showImage((currentImageIdx - 1 + visibleItems.length) % visibleItems.length);
        if(e.key === 'ArrowRight') showImage((currentImageIdx + 1) % visibleItems.length);
    }
  });

  // Reviews Carousel
  const reviewCards = document.querySelectorAll('.ht-review-card');
  const reviewDots = document.querySelectorAll('.ht-reviews-dot');
  let activeReview = 0;
  
  const updateReviews = () => {
    reviewCards.forEach((c) => {
      c.style.display = 'none';
    });
    for(let i=0; i<3; i++) {
       const idx = (activeReview + i) % reviewCards.length;
       if(reviewCards[idx]) reviewCards[idx].style.display = 'flex';
    }
    reviewDots.forEach((d, i) => {
      if(i === activeReview) d.classList.add('active');
      else d.classList.remove('active');
    });
  };

  const nextReview = () => { activeReview = (activeReview + 1) % reviewCards.length; updateReviews(); };
  const prevReview = () => { activeReview = (activeReview - 1 + reviewCards.length) % reviewCards.length; updateReviews(); };

  document.getElementById('ht-reviews-next')?.addEventListener('click', nextReview);
  document.getElementById('ht-reviews-prev')?.addEventListener('click', prevReview);
  reviewDots.forEach((dot, i) => {
    dot.addEventListener('click', () => { activeReview = i; updateReviews(); });
  });

  if(reviewCards.length > 0) {
      setInterval(nextReview, 5000);
      updateReviews();
  }
});
