// StudyPress Template Logic
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Hero Background Slider (Thumbnail Switchers & Left-Aligned Text)
     ========================================================================== */
  const heroWrapper = document.querySelector('.hero-wrapper');
  const titleText = document.getElementById('hero-title-text');
  const subtitleText = document.getElementById('hero-subtitle-text');
  const dots = document.querySelectorAll('.dot-rect');
  
  const slides = [
    {
      title: "INNOVATION",
      subtitle: "Collaborate in state-of-the-art computational clusters, robotic testbeds, and biomedical discovery centers under Nobel laureate mentorship.",
      image: "campus.jpg"
    },
    {
      title: "ACADEMICS",
      subtitle: "Empowering student cohorts with industry-focused Bachelor and Master curricula from world-leading educators.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "RESEARCH",
      subtitle: "Pioneering discoveries in biotech, CRISPR gene modification, and theoretical physics across meadows loop networks.",
      image: "https://images.unsplash.com/photo-1562774053-4ab044ef1b85?auto=format&fit=crop&w=1920&q=80"
    }
  ];

  let currentSlide = 0;

  const updateSlide = (idx) => {
    dots.forEach(d => d.classList.remove('active'));
    if (dots[idx]) dots[idx].classList.add('active');
    
    currentSlide = idx;
    const slide = slides[idx];
    
    if (titleText) titleText.innerText = slide.title;
    if (subtitleText) subtitleText.innerText = slide.subtitle;
    
    if (heroWrapper) {
      heroWrapper.style.backgroundImage = `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.45)), url('${slide.image}')`;
    }
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateSlide(index);
    });
  });

  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      let idx = (currentSlide - 1 + slides.length) % slides.length;
      updateSlide(idx);
    });
    nextBtn.addEventListener('click', () => {
      let idx = (currentSlide + 1) % slides.length;
      updateSlide(idx);
    });
  }

  // Auto transition slides
  let autoSlide = setInterval(() => {
    let idx = (currentSlide + 1) % slides.length;
    updateSlide(idx);
  }, 8000);

  const stopAutoSlide = () => {
    clearInterval(autoSlide);
  };

  dots.forEach(d => d.addEventListener('click', stopAutoSlide));
  if (prevBtn) prevBtn.addEventListener('click', stopAutoSlide);
  if (nextBtn) nextBtn.addEventListener('click', stopAutoSlide);


  /* ==========================================================================
     2. Command Palette (Ctrl+K / ⌘K)
     ========================================================================== */
  const cmdModal = document.getElementById('command-palette-modal');
  const searchTriggers = document.querySelectorAll('.search-trigger');
  const cmdInput = document.getElementById('cmd-search-field');
  const cmdLinks = document.querySelectorAll('.cmd-nav-link');

  const openCmd = () => {
    if (cmdModal) {
      cmdModal.style.display = 'flex';
      cmdInput.focus();
    }
  };

  const closeCmd = () => {
    if (cmdModal) {
      cmdModal.style.display = 'none';
      cmdInput.value = '';
      cmdLinks.forEach(link => link.style.display = 'flex');
    }
  };

  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      openCmd();
    }
    if (e.key === 'Escape') {
      closeCmd();
    }
  });

  searchTriggers.forEach(trigger => trigger.addEventListener('click', openCmd));

  if (cmdModal) {
    cmdModal.addEventListener('click', (e) => {
      if (e.target === cmdModal) closeCmd();
    });
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      cmdLinks.forEach(link => {
        const text = link.innerText.toLowerCase();
        link.style.display = text.includes(q) ? 'flex' : 'none';
      });
    });
  }

  cmdLinks.forEach(link => link.addEventListener('click', closeCmd));


  /* ==========================================================================
     3. Tuition Estimator Mathematics
     ========================================================================== */
  const resSelect = document.getElementById('residency-level');
  const meritSlider = document.getElementById('merit-slider');
  const meritLabel = document.getElementById('merit-label-val');
  const needSlider = document.getElementById('need-slider');
  const needLabel = document.getElementById('need-label-val');
  const housingCheck = document.getElementById('housing-checkbox');

  // Output fields
  const outBase = document.getElementById('calc-base-val');
  const outHousing = document.getElementById('calc-housing-val');
  const outMerit = document.getElementById('calc-merit-ded');
  const outNeed = document.getElementById('calc-need-ded');
  const outTotal = document.getElementById('calc-net-total');

  const updateCostModel = () => {
    let basePrice = 38000;
    const residency = resSelect.value;
    if (residency === 'outstate') basePrice = 44000;
    else if (residency === 'international') basePrice = 48000;

    const merit = parseInt(meritSlider.value);
    const needAid = parseInt(needSlider.value);
    const housing = housingCheck.checked ? 14000 : 0;

    meritLabel.innerText = `$${merit.toLocaleString()}`;
    needLabel.innerText = `$${needAid.toLocaleString()}`;

    const netCost = Math.max(0, basePrice + housing - merit - needAid);

    outBase.innerText = `$${basePrice.toLocaleString()}`;
    outHousing.innerText = housing > 0 ? `+$${housing.toLocaleString()}` : '$0';
    outMerit.innerText = `- $${merit.toLocaleString()}`;
    outNeed.innerText = `- $${needAid.toLocaleString()}`;
    outTotal.innerText = `$${netCost.toLocaleString()}`;
  };

  if (resSelect && meritSlider && needSlider && housingCheck) {
    resSelect.addEventListener('change', updateCostModel);
    meritSlider.addEventListener('input', updateCostModel);
    needSlider.addEventListener('input', updateCostModel);
    housingCheck.addEventListener('change', updateCostModel);
    updateCostModel(); // Run on init
  }


  /* ==========================================================================
     4. Interactive Course Catalog & Filter Tabs
     ========================================================================== */
  const catalogTabs = document.querySelectorAll('.catalog-tab');
  const courseCards = document.querySelectorAll('.course-card');

  catalogTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catalogTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      courseCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* ==========================================================================
     5. Inquiry Shopping Cart Drawer Mechanism
     ========================================================================== */
  let cart = [];
  const cartCountEl = document.getElementById('cart-count');
  const cartCountTotalQty = document.getElementById('cart-items-total-qty');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartDrawerOverlay = document.getElementById('cart-drawer-modal');
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  const updateCartUI = () => {
    // Count
    if (cartCountEl) cartCountEl.innerText = cart.length;
    if (cartCountTotalQty) cartCountTotalQty.innerText = `${cart.length} Courses`;

    // Render items
    if (cartItemsContainer) {
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your inquiry cart is empty. Add courses to compile.</div>';
      } else {
        cartItemsContainer.innerHTML = cart.map((item, idx) => `
          <div class="cart-item-row">
            <div class="cart-item-info">
              <h4>${item.name}</h4>
              <span>$${item.price > 0 ? item.price.toLocaleString() + '/yr' : 'Fully Funded'}</span>
            </div>
            <button class="remove-cart-item-btn" data-idx="${idx}"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        `).join('');

        // Remove click event listeners
        document.querySelectorAll('.remove-cart-item-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-idx'));
            cart.splice(idx, 1);
            updateCartUI();
          });
        });
      }
    }
  };

  // Add Course to Cart
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const name = btn.getAttribute('data-name');
      const price = parseInt(btn.getAttribute('data-price'));

      // Check if already in cart
      if (cart.some(item => item.id === id)) {
        alert('Course is already in your inquiry list.');
        return;
      }

      cart.push({ id, name, price });
      updateCartUI();
      
      // Open cart drawer automatically
      if (cartDrawerOverlay) cartDrawerOverlay.style.display = 'flex';
    });
  });

  // Toggle Cart Drawer
  if (openCartBtn) {
    openCartBtn.addEventListener('click', () => {
      if (cartDrawerOverlay) cartDrawerOverlay.style.display = 'flex';
    });
  }
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
      if (cartDrawerOverlay) cartDrawerOverlay.style.display = 'none';
    });
  }
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) cartDrawerOverlay.style.display = 'none';
    });
  }

  // Checkout (Inquiry Transfer)
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty. Please add courses first.');
        return;
      }

      // Close drawer
      if (cartDrawerOverlay) cartDrawerOverlay.style.display = 'none';

      // Set target degree in Admissions Wizard field
      const wizDegreeSelect = document.getElementById('wiz-degree');
      if (wizDegreeSelect) {
        // Clear options, select custom
        const primaryCourse = cart[0].name;
        wizDegreeSelect.value = primaryCourse;
      }

      // Scroll to Admissions
      const portal = document.getElementById('admission-portal');
      if (portal) portal.scrollIntoView({ behavior: 'smooth' });
    });
  }


  /* ==========================================================================
     6. Course Details Modal
     ========================================================================== */
  const courseDetailsModal = document.getElementById('course-details-modal');
  const courseModalContent = document.getElementById('course-modal-content-panel');
  const closeCourseBtn = document.getElementById('close-course-modal-btn');

  const coursesDatabase = {
    "cs-ai": {
      title: "B.Sc. Computer Science & AI",
      price: "$45,000/yr",
      desc: "A rigorous foundation in algorithm engineering, artificial neural networks, natural language pipelines, and secure compiler architectures.",
      details: {
        "Duration": "4 Academic Years",
        "Target School": "School of Computing & AI",
        "Director": "Dr. Julian Thorne",
        "Career Path": "AI Architect, Software Director"
      }
    },
    "cybersec": {
      title: "M.Sc. Cybersecurity Engineering",
      price: "$48,000/yr",
      desc: "Applied cryptography, zero-trust cloud infrastructure, defensive system modeling, secure network architecture, and administrative audits.",
      details: {
        "Duration": "2 Academic Years",
        "Target School": "School of Computing & AI",
        "Director": "Prof. Tariq Al-Mansoor",
        "Career Path": "CISO, Cryptographer, Auditor"
      }
    },
    "biogen": {
      title: "Ph.D. Bio-Engineering & Genomics",
      price: "Fully Funded",
      desc: "Pioneering molecular biology research, CRISPR cell engineering protocols, genome sequencing, and computational bioinformatics models.",
      details: {
        "Duration": "4 to 5 Research Years",
        "Target School": "School of Medicine & Health",
        "Director": "Dr. Evelyn Reed",
        "Career Path": "Principal Biotech Scientist, Professor"
      }
    },
    "mba-fin": {
      title: "MBA — Institutional Finance",
      price: "$52,000/yr",
      desc: "Executive training in sovereign wealth frameworks, risk analytics, corporate governance, venture capital structures, and portfolio modeling.",
      details: {
        "Duration": "2 Academic Years",
        "Target School": "School of Business & Law",
        "Director": "Prof. Arthur Sterling",
        "Career Path": "CFO, Investment Partner, Analyst"
      }
    },
    "arch": {
      title: "M.Arch — Digital Spatial Arts",
      price: "$42,000/yr",
      desc: "Architectural structural design, CAD drafting, digital modeling, responsive space planning, materials dynamics, and historic preservation.",
      details: {
        "Duration": "3 Academic Years",
        "Target School": "School of Design & Humanities",
        "Director": "Dr. Maya Lin",
        "Career Path": "Principal Architect, Spatial Designer"
      }
    },
    "lit": {
      title: "Ph.D. Classical Literature",
      price: "Fully Funded",
      desc: "Historical analysis of comparative epics, ancient manuscript conservation, linguistics translations, and classical philosophical prose.",
      details: {
        "Duration": "4 Research Years",
        "Target School": "School of Design & Humanities",
        "Director": "Dr. Camille Laurent",
        "Career Path": "Archival Director, Curator, Historian"
      }
    }
  };

  document.querySelectorAll('.btn-details-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const data = coursesDatabase[id];

      if (data && courseDetailsModal && courseModalContent) {
        courseModalContent.innerHTML = `
          <div class="course-modal-head-row">
            <h2>${data.title}</h2>
            <span class="modal-price-tag">${data.price}</span>
          </div>
          <p class="modal-desc-text">${data.desc}</p>
          <div class="course-modal-grid-details">
            ${Object.entries(data.details).map(([key, val]) => `
              <div class="detail-row-item">
                <span><strong>${key}:</strong></span>
                <span>${val}</span>
              </div>
            `).join('')}
          </div>
          <button class="btn btn-left-magenta" onclick="document.getElementById('close-course-modal-btn').click();">Close Details</button>
        `;
        courseDetailsModal.style.display = 'flex';
      }
    });
  });

  if (closeCourseBtn) {
    closeCourseBtn.addEventListener('click', () => {
      if (courseDetailsModal) courseDetailsModal.style.display = 'none';
    });
  }

  if (courseDetailsModal) {
    courseDetailsModal.addEventListener('click', (e) => {
      if (e.target === courseDetailsModal) courseDetailsModal.style.display = 'none';
    });
  }


  /* ==========================================================================
     7. Faculty Directory (Filters, Bio Modals & crop top portraits)
     ========================================================================== */
  const facTabs = document.querySelectorAll('.fac-tab');
  const facCards = document.querySelectorAll('.faculty-card-new');
  const facModal = document.getElementById('faculty-bio-modal');
  const facModalContent = document.getElementById('fac-modal-content-panel');
  const closeFacBtn = document.getElementById('close-fac-modal-btn');

  // Faculty Department Filters
  facTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      facTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const dept = tab.getAttribute('data-dept');
      facCards.forEach(card => {
        const cardDept = card.getAttribute('data-dept');
        if (dept === 'all' || cardDept === dept) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Faculty Bios Database
  const facultyDatabase = {
    "thorne": {
      name: "Dr. Julian Thorne",
      title: "Professor of AI & Computer Science",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=450&q=80",
      bio: "Dr. Thorne holds a Stanford Ph.D. in Computer Science. His research focuses on automated code reasoning compiler models, neural networks architecture, and high-performance quantum computing layouts.",
      metrics: {
        "Publications": "142 Papers",
        "Tenure": "12 Academic Years",
        "Active Lab": "Neural Computing Lab"
      }
    },
    "reed": {
      name: "Dr. Evelyn Reed",
      title: "Director of Biomedical Genetics",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=450&q=80",
      bio: "Dr. Reed holds a Johns Hopkins M.D. and Oxford Ph.D. in Molecular Biology. She leads the gene modifying research teams focused on CRISPR-Cas12 enzyme telomere stabilization.",
      metrics: {
        "Publications": "168 Papers",
        "Tenure": "9 Academic Years",
        "Active Lab": "Gene Modifiers Lab"
      }
    },
    "sterling": {
      name: "Prof. Arthur Sterling",
      title: "Dean of Global Economics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=450&q=80",
      bio: "Professor Sterling is a Cambridge D.Phil. graduate. He researches sovereign wealth framework governance, algorithmic venture modeling, and national transition finance paradigms.",
      metrics: {
        "Publications": "110 Papers",
        "Tenure": "16 Academic Years",
        "Active Lab": "Macro Economics Lab"
      }
    },
    "lin": {
      name: "Dr. Maya Lin",
      title: "Chair of Architecture & Digital Arts",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=450&q=80",
      bio: "Dr. Lin graduated from MIT with a Master of Architecture, following a Ph.D. in Tokyo. Her laboratory models responsive spatial computing networks and materials dynamics.",
      metrics: {
        "Publications": "95 Papers",
        "Tenure": "8 Academic Years",
        "Active Lab": "Spatial Architecture Lab"
      }
    },
    "mansoor": {
      name: "Prof. Tariq Al-Mansoor",
      title: "Chair of Cybersecurity & Cloud Defense",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=450&q=80",
      bio: "Professor Mansoor holds a Carnegie Mellon Ph.D. in Network Security. He specializes in defensive zero-trust computing infrastructures and secure cloud encryption architectures.",
      metrics: {
        "Publications": "118 Papers",
        "Tenure": "11 Academic Years",
        "Active Lab": "Cloud Security Lab"
      }
    },
    "laurent": {
      name: "Dr. Camille Laurent",
      title: "Professor of Transnational Jurisprudence",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=450&q=80",
      bio: "Dr. Laurent holds a Yale J.D. and a Sorbonne Ph.D. in International Law. She researches multinational intellectual property law, international jurisdiction borders, and cyber laws.",
      metrics: {
        "Publications": "87 Papers",
        "Tenure": "7 Academic Years",
        "Active Lab": "Transnational Law Center"
      }
    },
    "bennett": {
      name: "Dr. Marcus Bennett",
      title: "Professor of Clinical Pharmacology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=450&q=80",
      bio: "Dr. Bennett holds a Pharm.D. and Ph.D. from UCSF. He leads critical research clinical trials for targeted immuno-oncology vaccine molecules and pharmacokinetic kinetics.",
      metrics: {
        "Publications": "210 Papers",
        "Tenure": "14 Academic Years",
        "Active Lab": "Immuno-Oncology Labs"
      }
    },
    "vance": {
      name: "Prof. Rachel Vance",
      title: "Director of Human-Computer Interaction",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=450&q=80",
      bio: "Professor Vance holds a Harvard Ph.D. in Cognitive Interface Engineering. She directs collaborative laboratories focusing on cognitive accessibility in user interfaces.",
      metrics: {
        "Publications": "134 Papers",
        "Tenure": "10 Academic Years",
        "Active Lab": "Cognitive Interfaces Lab"
      }
    }
  };

  // Open Faculty modal
  facCards.forEach(card => {
    card.querySelector('.btn-profile-view').addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const data = facultyDatabase[id];

      if (data && facModal && facModalContent) {
        facModalContent.innerHTML = `
          <div class="fac-modal-header">
            <img src="${data.image}" alt="${data.name}" class="fac-modal-img">
            <div class="fac-modal-meta-title">
              <h2>${data.name}</h2>
              <span>${data.title}</span>
            </div>
          </div>
          <p class="fac-modal-bio">${data.bio}</p>
          <div class="fac-modal-metrics-card">
            ${Object.entries(data.metrics).map(([key, val]) => `
              <div class="metric-card-box">
                <h4>${val}</h4>
                <p>${key}</p>
              </div>
            `).join('')}
          </div>
          <button class="btn btn-left-magenta" onclick="document.getElementById('close-fac-modal-btn').click();">Close Profile</button>
        `;
        facModal.style.display = 'flex';
      }
    });
  });

  if (closeFacBtn) {
    closeFacBtn.addEventListener('click', () => {
      if (facModal) facModal.style.display = 'none';
    });
  }

  if (facModal) {
    facModal.addEventListener('click', (e) => {
      if (e.target === facModal) facModal.style.display = 'none';
    });
  }


  /* ==========================================================================
     8. Multi-Step Admissions Wizard Form Panel
     ========================================================================== */
  const wizNextBtns = document.querySelectorAll('.btn-magenta-next[data-next-step]');
  const wizPrevBtns = document.querySelectorAll('.btn-wizard-back[data-prev-step]');
  const wizSubmitBtn = document.getElementById('wiz-submit-btn');
  const wizRestartBtn = document.getElementById('wiz-restart-btn');
  const wizReceipt = document.getElementById('wiz-success-receipt');

  const wizTimelineSteps = [
    document.getElementById('timeline-step-1'),
    document.getElementById('timeline-step-2'),
    document.getElementById('timeline-step-3')
  ];

  const wizCards = [
    document.getElementById('step-card-1'),
    document.getElementById('step-card-2'),
    document.getElementById('step-card-3')
  ];

  const setWizActive = (idx) => {
    wizTimelineSteps.forEach((step, i) => {
      if (step) {
        if (i === idx) step.classList.add('active');
        else step.classList.remove('active');
      }
    });

    wizCards.forEach((card, i) => {
      if (card) {
        if (i === idx) card.classList.add('active');
        else card.classList.remove('active');
      }
    });
  };

  const validateWizStep1 = () => {
    const fn = document.getElementById('wiz-fname').value.trim();
    const ln = document.getElementById('wiz-lname').value.trim();
    const em = document.getElementById('wiz-email').value.trim();
    const ph = document.getElementById('wiz-phone').value.trim();
    return (fn !== '' && ln !== '' && em !== '' && ph !== '');
  };

  wizNextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextStep = parseInt(btn.getAttribute('data-next-step'));

      if (nextStep === 2) {
        if (!validateWizStep1()) {
          alert('Please fill out all contact fields in Step 1.');
          return;
        }
      }

      if (nextStep === 3) {
        // Compile Summary Panel
        const fn = document.getElementById('wiz-fname').value;
        const ln = document.getElementById('wiz-lname').value;
        const degree = document.getElementById('wiz-degree').value;
        const term = document.getElementById('wiz-term').value;
        const aid = document.getElementById('wiz-aid-req').checked ? 'Yes' : 'No';

        const summaryPanel = document.getElementById('wiz-summary-panel');
        if (summaryPanel) {
          summaryPanel.innerHTML = `
            <div class="receipt-row-item"><span>Applicant Name:</span><strong>${fn} ${ln}</strong></div>
            <div class="receipt-row-item"><span>Intended Program:</span><strong>${degree}</strong></div>
            <div class="receipt-row-item"><span>Target Term:</span><strong>${term}</strong></div>
            <div class="receipt-row-item"><span>Aid Consideration:</span><strong>${aid}</strong></div>
          `;
        }
      }

      setWizActive(nextStep - 1);
    });
  });

  wizPrevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prevStep = parseInt(btn.getAttribute('data-prev-step'));
      setWizActive(prevStep - 1);
    });
  });

  if (wizSubmitBtn) {
    wizSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const agree = document.getElementById('wiz-agree').checked;
      if (!agree) {
        alert('You must certify and agree to the honor policy to submit.');
        return;
      }

      // Generate random Tracking ID
      const trackingId = 'MU-' + Math.floor(100000 + Math.random() * 900000);

      const fn = document.getElementById('wiz-fname').value;
      const ln = document.getElementById('wiz-lname').value;
      const degree = document.getElementById('wiz-degree').value;
      const term = document.getElementById('wiz-term').value;

      document.getElementById('wiz-rec-name').innerText = `${fn} ${ln}`;
      document.getElementById('wiz-rec-id').innerText = trackingId;
      document.getElementById('wiz-rec-degree').innerText = degree;
      document.getElementById('wiz-rec-term').innerText = term;

      // Hide active step, hide timeline, show receipt
      wizCards.forEach(c => { if(c) c.classList.remove('active'); });
      const timelineAside = document.querySelector('.vertical-timeline-steps');
      if (timelineAside) timelineAside.style.display = 'none';
      if (wizReceipt) wizReceipt.style.display = 'flex';
      
      // Clear Cart count
      cart = [];
      updateCartUI();
    });
  }

  if (wizRestartBtn) {
    wizRestartBtn.addEventListener('click', () => {
      document.getElementById('wiz-fname').value = '';
      document.getElementById('wiz-lname').value = '';
      document.getElementById('wiz-email').value = '';
      document.getElementById('wiz-phone').value = '';
      document.getElementById('wiz-agree').checked = false;

      const timelineAside = document.querySelector('.vertical-timeline-steps');
      if (timelineAside) timelineAside.style.display = 'flex';

      if (wizReceipt) wizReceipt.style.display = 'none';
      setWizActive(0);
    });
  }


  /* ==========================================================================
     9. Virtual Campus Tour Landmarks active outline & visiting booking
     ========================================================================== */
  const landmarkCards = document.querySelectorAll('.landmark-card-new');
  landmarkCards.forEach(card => {
    card.addEventListener('click', () => {
      landmarkCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  const bookingForm = document.getElementById('visit-booking-form');
  const bookingToast = document.getElementById('visit-booking-toast');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      bookingForm.style.display = 'none';
      if (bookingToast) {
        bookingToast.style.display = 'block';
      }
    });
  }


  /* ==========================================================================
     10. Academic Calendar Event RSVPs
     ========================================================================== */
  const eventRsvps = document.querySelectorAll('.btn-rsvp-pass');
  const rsvpToast = document.getElementById('rsvp-success-toast');

  eventRsvps.forEach(btn => {
    btn.addEventListener('click', () => {
      if (rsvpToast) {
        rsvpToast.style.bottom = '24px';
        btn.innerText = 'Registered ✓';
        btn.disabled = true;
        btn.style.borderColor = '#059669';
        btn.style.color = '#059669';

        setTimeout(() => {
          rsvpToast.style.bottom = '-100px';
        }, 3000);
      }
    });
  });

  // Calendar Event category tabs filtering
  const eventTabs = document.querySelectorAll('#events-tab-row .events-tab-btn');
  const eventCardsNew = document.querySelectorAll('.event-card-new');

  eventTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      eventTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-category');
      eventCardsNew.forEach(card => {
        const cardCat = card.getAttribute('data-cat');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* ==========================================================================
     11. Research stories Gazette fullscreen Modals
     ========================================================================== */
  const storyCardsNew = document.querySelectorAll('.story-card-new');
  const storyReadModal = document.getElementById('story-read-modal');
  const storyModalContentPanel = document.getElementById('story-modal-content-panel');
  const closeStoryBtnNew = document.getElementById('close-story-modal-btn-new');

  const storyDb = {
    "1": {
      title: "Neural Code Reasoning Systems Stabilized",
      meta: "Sciences | Research Story | August 14, 2026",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
      paragraphs: [
        "The theoretical computing research group at StudyPress has announced the successful stabilization of automated neural code reasoning networks acrossmetropolitan fiber loop nodes.",
        "Under the coordination of Turing Fellow Dr. Julian Thorne, the networks utilized a new compiler wave-guidance system. This minimises data leaks and decoherence traps caused by micro-kinetic vibrations.",
        "This breakthrough represents a key milestone for future zero-trust automated software builds. The team plans to publish the fully compiled datasets in early 2027."
      ]
    },
    "2": {
      title: "Telomeric Stabilization in Cas12 Trials",
      meta: "Biomedical | Research Story | July 19, 2026",
      image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80",
      paragraphs: [
        "Genomics research groups directed by Dr. Evelyn Reed at the Biotech Discovery Center have completed laboratory trials validating Cas12 target DNA insertion protocols.",
        "The modifications demonstrate a 30% increase in telomeric longevity indicators with zero off-target genomic modifications.",
        "The findings represent a massive shift in hereditary target cell therapies. Clinical trials modeling molecular corrections are scheduled to begin in early fall."
      ]
    },
    "3": {
      title: "Translation Logs of Gothic Scripts Completed",
      meta: "History & Linguistics | Research Story | June 05, 2026",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
      paragraphs: [
        "StudyPress historians have completed digital translations indexing gothic parchments dating back to Prague monastery logs of the early 14th century.",
        "Linguistic research groups translated complex Czech and Latin syntax loops utilizing multispectral imaging matrices compiled by our Computer Science department.",
        "The open-sourced index registry is now transferrable and accessible to researchers globally on the StudyPress digital archive."
      ]
    }
  };

  storyCardsNew.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-story');
      const data = storyDb[id];

      if (data && storyReadModal && storyModalContentPanel) {
        storyModalContentPanel.innerHTML = `
          <h2>${data.title}</h2>
          <span class="modal-meta">${data.meta}</span>
          <img src="${data.image}" alt="${data.title}">
          <div class="story-modal-paragraphs">
            ${data.paragraphs.map(p => `<p>${p}</p>`).join('')}
          </div>
          <button class="btn btn-left-magenta" onclick="document.getElementById('close-story-modal-btn-new').click();">Close Article</button>
        `;
        storyReadModal.style.display = 'flex';
      }
    });
  });

  if (closeStoryBtnNew) {
    closeStoryBtnNew.addEventListener('click', () => {
      if (storyReadModal) storyReadModal.style.display = 'none';
    });
  }

  if (storyReadModal) {
    storyReadModal.addEventListener('click', (e) => {
      if (e.target === storyReadModal) storyReadModal.style.display = 'none';
    });
  }


  /* ==========================================================================
     12. Gazette Newsletter Submit
     ========================================================================== */
  const footerNewsForm = document.getElementById('footer-newsletter-form');
  const newsToast = document.getElementById('newsletter-success-toast');

  if (footerNewsForm) {
    footerNewsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      footerNewsForm.style.display = 'none';
      if (newsToast) {
        newsToast.style.display = 'block';
      }
    });
  }

});
