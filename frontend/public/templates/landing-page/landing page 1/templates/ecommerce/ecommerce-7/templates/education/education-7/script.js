// College Template JavaScript
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Animated Stats Counter
  const countElements = document.querySelectorAll('.count');
  
  const startCounter = () => {
    countElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'));
      let current = 0;
      const duration = 1500; // Total animation time in ms
      const frameRate = 1000 / 60; // 60 FPS
      const totalFrames = duration / frameRate;
      const step = target / totalFrames;

      const updateVal = () => {
        if (current < target) {
          current += step;
          el.innerText = Math.min(target, Math.floor(current));
          requestAnimationFrame(updateVal);
        } else {
          el.innerText = target;
        }
      };

      updateVal();
    });
  };

  startCounter();

  // 2. Active Navigation Link on Scroll Highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  const highlightNav = () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);

  // 3. Dynamic Course Finder & Filter Engine
  const finderForm = document.getElementById('finder-form');
  const searchInput = document.getElementById('finder-search-input');
  const catCards = document.querySelectorAll('.cat-card');
  const courseCards = document.querySelectorAll('.course-card');
  const noCoursesAlert = document.getElementById('no-courses-alert');

  let activeCategory = null;
  let activeQuery = '';

  const runFilter = () => {
    let visibleCount = 0;
    const searchType = document.querySelector('input[name="search-type"]:checked').value;

    courseCards.forEach(card => {
      const cardCategories = card.getAttribute('data-category') || '';
      const cardTitle = card.querySelector('h3').innerText.toLowerCase();
      const cardText = card.innerText.toLowerCase();
      
      let matchesCategory = true;
      let matchesSearch = true;

      // 1. Category Filter Match
      if (activeCategory) {
        matchesCategory = cardCategories.toLowerCase().includes(activeCategory);
      }

      // 2. Search Query Match
      if (activeQuery) {
        if (searchType === 'title') {
          matchesSearch = cardTitle.includes(activeQuery);
        } else {
          matchesSearch = cardText.includes(activeQuery);
        }
      }

      // 3. Final display state application
      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Toggle Empty Catalog alert
    if (visibleCount === 0) {
      if (noCoursesAlert) noCoursesAlert.style.display = 'block';
    } else {
      if (noCoursesAlert) noCoursesAlert.style.display = 'none';
    }
  };

  // Category Cards Click Handlers
  catCards.forEach(card => {
    card.addEventListener('click', () => {
      const categorySlug = card.getAttribute('data-category');

      if (card.classList.contains('active')) {
        // Deactivate category filter
        card.classList.remove('active');
        activeCategory = null;
      } else {
        // Activate category filter
        catCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        activeCategory = categorySlug.toLowerCase();
      }

      runFilter();
    });
  });

  // Search input typing events for real-time responsiveness
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeQuery = e.target.value.trim().toLowerCase();
      runFilter();
    });
  }

  // Finder form submissions helper
  if (finderForm) {
    finderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (searchInput) {
        activeQuery = searchInput.value.trim().toLowerCase();
      }
      runFilter();
      
      // Smooth scroll to catalog view
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // 4. Modals and Submissions Logic
  const receiptModal = document.getElementById('receipt-modal');
  const receiptTitle = document.getElementById('receipt-title');
  const receiptDesc = document.getElementById('receipt-desc');
  const receiptSummary = document.getElementById('receipt-summary');
  
  const closeReceiptBtn = document.getElementById('close-receipt-btn');
  const closeReceiptBtnMain = document.getElementById('close-receipt-btn-main');

  const closeReceipt = () => {
    if (receiptModal) receiptModal.style.display = 'none';
  };

  if (closeReceiptBtn) closeReceiptBtn.addEventListener('click', closeReceipt);
  if (closeReceiptBtnMain) closeReceiptBtnMain.addEventListener('click', closeReceipt);
  if (receiptModal) {
    receiptModal.addEventListener('click', (e) => {
      if (e.target === receiptModal) closeReceipt();
    });
  }

  // Admissions Form Inquiry Handler
  const admissionsForm = document.getElementById('admissions-form');
  if (admissionsForm) {
    admissionsForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('student-name').value.trim();
      const email = document.getElementById('student-email').value.trim();
      const degree = document.getElementById('student-degree').value;
      const trackingId = 'COL-' + Math.floor(100000 + Math.random() * 900000);

      if (receiptTitle && receiptDesc && receiptSummary && receiptModal) {
        receiptTitle.innerText = "Application Inquiry Received";
        receiptDesc.innerText = "Thank you for applying. A counselor from our admissions office will review your records shortly.";
        receiptSummary.innerHTML = `
          <div><span>Tracking ID</span><strong>${trackingId}</strong></div>
          <div><span>Applicant Name</span><strong>${name}</strong></div>
          <div><span>Contact Email</span><strong>${email}</strong></div>
          <div><span>Degree Major</span><strong>${degree}</strong></div>
        `;
        receiptModal.style.display = 'flex';
      }

      admissionsForm.reset();
    });
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const messageId = 'MSG-' + Math.floor(10000 + Math.random() * 90000);

      if (receiptTitle && receiptDesc && receiptSummary && receiptModal) {
        receiptTitle.innerText = "General Inquiry Sent";
        receiptDesc.innerText = "Your message has been dispatched to our administrative office. We will respond within 24 business hours.";
        receiptSummary.innerHTML = `
          <div><span>Message ID</span><strong>${messageId}</strong></div>
          <div><span>Sender Name</span><strong>${name}</strong></div>
          <div><span>Sender Email</span><strong>${email}</strong></div>
          <div><span>Subject Line</span><strong>${subject}</strong></div>
        `;
        receiptModal.style.display = 'flex';
      }

      contactForm.reset();
    });
  }

  // Course Card Click Helper -> Auto Fills Admissions Degree Selector and Scrolls
  courseCards.forEach(card => {
    card.addEventListener('click', () => {
      const courseTitle = card.querySelector('h3').innerText.trim();
      const selectElement = document.getElementById('student-degree');
      
      if (selectElement) {
        // Auto fill selector
        for (let i = 0; i < selectElement.options.length; i++) {
          if (selectElement.options[i].value === courseTitle) {
            selectElement.selectedIndex = i;
            break;
          }
        }
      }

      // Smooth scroll to admissions form
      const admissionsSection = document.getElementById('admissions');
      if (admissionsSection) {
        admissionsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
