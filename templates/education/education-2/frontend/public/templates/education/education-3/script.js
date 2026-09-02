// Modern University Premium Script
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Hero Background Carousel Slider
     ========================================================================== */
  const heroWrapper = document.querySelector('.hero-wrapper');
  const dots = document.querySelectorAll('.dot');
  const backgrounds = [
    'campus.jpg',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80'
  ];

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      currentSlide = index;
      if (heroWrapper) {
        heroWrapper.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.5)), url('${backgrounds[index]}')`;
      }
    });
  });

  // Arrow navigation
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + backgrounds.length) % backgrounds.length;
      if (dots[currentSlide]) dots[currentSlide].click();
    });
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % backgrounds.length;
      if (dots[currentSlide]) dots[currentSlide].click();
    });
  }

  // Auto transition every 8 seconds
  let currentSlide = 0;
  let autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % backgrounds.length;
    if (dots[currentSlide]) {
      dots[currentSlide].click();
    }
  }, 8000);

  // Clear auto slide interval on click interaction to give the user control
  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };
  dots.forEach(d => d.addEventListener('click', stopAutoSlide));
  if (prevBtn) prevBtn.addEventListener('click', stopAutoSlide);
  if (nextBtn) nextBtn.addEventListener('click', stopAutoSlide);


  /* ==========================================================================
     2. Command Palette (Ctrl+K / ⌘K)
     ========================================================================== */
  const cmdPalette = document.getElementById('cmd-palette');
  const searchTrigger = document.querySelector('.search-trigger');
  const cmdInput = document.getElementById('cmd-search-input');
  const cmdItems = document.querySelectorAll('.cmd-item');

  const openCmd = () => {
    if (cmdPalette) {
      cmdPalette.style.display = 'flex';
      cmdInput.focus();
    }
  };

  const closeCmd = () => {
    if (cmdPalette) {
      cmdPalette.style.display = 'none';
      cmdInput.value = '';
      cmdItems.forEach(item => item.style.display = 'flex');
    }
  };

  // Keyboard Event Listener
  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      openCmd();
    }
    if (e.key === 'Escape') {
      closeCmd();
    }
  });

  // Icon Click Event
  if (searchTrigger) {
    searchTrigger.addEventListener('click', openCmd);
  }

  // Click outside to close
  if (cmdPalette) {
    cmdPalette.addEventListener('click', (e) => {
      if (e.target === cmdPalette) {
        closeCmd();
      }
    });
  }

  // Commands search filter
  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      cmdItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Close palette on clicking any command link
  cmdItems.forEach(item => {
    item.addEventListener('click', () => {
      closeCmd();
    });
  });


  /* ==========================================================================
     3. Academic Degree Finder Filters
     ========================================================================== */
  const selectLevel = document.getElementById('degree-level');
  const selectSchool = document.getElementById('academic-school');
  const catalogCards = document.querySelectorAll('.catalog-card');

  const filterCatalog = () => {
    const selectedLevel = selectLevel.value;
    const selectedSchool = selectSchool.value;

    catalogCards.forEach(card => {
      const cardLevel = card.getAttribute('data-level');
      const cardSchool = card.getAttribute('data-school');

      const matchLevel = (selectedLevel === 'all' || cardLevel === selectedLevel);
      const matchSchool = (selectedSchool === 'all' || cardSchool === selectedSchool);

      if (matchLevel && matchSchool) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };

  if (selectLevel && selectSchool) {
    selectLevel.addEventListener('change', filterCatalog);
    selectSchool.addEventListener('change', filterCatalog);
  }


  /* ==========================================================================
     4. Net Price Attendance Calculator
     ========================================================================== */
  const resInput = document.getElementById('residency');
  const scholarshipInput = document.getElementById('scholarship');
  const scholarshipVal = document.getElementById('scholarship-val');
  const needInput = document.getElementById('need-grant');
  const needVal = document.getElementById('need-grant-val');
  const roomInput = document.getElementById('room-board');

  // Outputs
  const outBase = document.getElementById('res-base-val');
  const outRoom = document.getElementById('room-val');
  const outScholarship = document.getElementById('scholarship-ded');
  const outGrant = document.getElementById('grant-ded');
  const outTotal = document.getElementById('net-price-total');

  const calculateNetPrice = () => {
    let baseTuition = 40000;
    const residency = resInput.value;
    if (residency === 'outstate') {
      baseTuition = 45000;
    } else if (residency === 'international') {
      baseTuition = 50000;
    }

    const scholarship = parseInt(scholarshipInput.value);
    const needGrant = parseInt(needInput.value);
    const roomBoard = roomInput.checked ? 15000 : 0;

    // Update Slider text
    scholarshipVal.innerText = `$${scholarship.toLocaleString()}`;
    needVal.innerText = `$${needGrant.toLocaleString()}`;

    // Calculate Net Price
    const netCost = Math.max(0, baseTuition + roomBoard - scholarship - needGrant);

    // Update Result Panel
    outBase.innerText = `$${baseTuition.toLocaleString()}`;
    outRoom.innerText = roomBoard > 0 ? `+$${roomBoard.toLocaleString()}` : '$0';
    outScholarship.innerText = `- $${scholarship.toLocaleString()}`;
    outGrant.innerText = `- $${needGrant.toLocaleString()}`;
    outTotal.innerText = `$${netCost.toLocaleString()}`;
  };

  if (resInput && scholarshipInput && needInput && roomInput) {
    resInput.addEventListener('change', calculateNetPrice);
    scholarshipInput.addEventListener('input', calculateNetPrice);
    needInput.addEventListener('input', calculateNetPrice);
    roomInput.addEventListener('change', calculateNetPrice);
    
    // Initial run
    calculateNetPrice();
  }


  /* ==========================================================================
     5. Multi-Step Admissions & Semester Enrollment Wizard
     ========================================================================== */
  const nextBtns = document.querySelectorAll('.step-next');
  const prevBtns = document.querySelectorAll('.step-prev');
  const submitBtn = document.getElementById('app-submit');
  const resetBtn = document.getElementById('btn-restart-wizard');
  const receiptCard = document.getElementById('wizard-receipt');
  
  const stepIndicators = [
    document.getElementById('step-indicator-1'),
    document.getElementById('step-indicator-2'),
    document.getElementById('step-indicator-3')
  ];
  const steps = [
    document.getElementById('wizard-step-1'),
    document.getElementById('wizard-step-2'),
    document.getElementById('wizard-step-3')
  ];

  // Helper to change active step indicator
  const setActiveStep = (stepIdx) => {
    stepIndicators.forEach((ind, i) => {
      if (ind) {
        if (i === stepIdx) ind.classList.add('active');
        else ind.classList.remove('active');
      }
    });

    steps.forEach((st, i) => {
      if (st) {
        if (i === stepIdx) st.classList.add('active');
        else st.classList.remove('active');
      }
    });
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const fname = document.getElementById('app-firstname').value.trim();
    const lname = document.getElementById('app-lastname').value.trim();
    const email = document.getElementById('app-email').value.trim();
    const phone = document.getElementById('app-phone').value.trim();
    return (fname !== '' && lname !== '' && email !== '' && phone !== '');
  };

  // Next Buttons
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextStep = parseInt(btn.getAttribute('data-next'));
      
      if (nextStep === 2) {
        if (!validateStep1()) {
          alert('Please fill out all fields in Step 1.');
          return;
        }
      }

      if (nextStep === 3) {
        // Populate Review Box dynamically
        const fname = document.getElementById('app-firstname').value;
        const lname = document.getElementById('app-lastname').value;
        const degree = document.getElementById('app-degree').value;
        const term = document.getElementById('app-term').value;
        const aid = document.getElementById('app-aid').checked ? 'Yes' : 'No';

        const reviewSummary = document.getElementById('review-summary');
        if (reviewSummary) {
          reviewSummary.innerHTML = `
            <div class="review-row"><span>Full Name</span><strong>${fname} ${lname}</strong></div>
            <div class="review-row"><span>Degree Level</span><strong>${degree}</strong></div>
            <div class="review-row"><span>Target Term</span><strong>${term}</strong></div>
            <div class="review-row"><span>Financial Aid Requested</span><strong>${aid}</strong></div>
          `;
        }
      }

      setActiveStep(nextStep - 1);
    });
  });

  // Prev Buttons
  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prevStep = parseInt(btn.getAttribute('data-prev'));
      setActiveStep(prevStep - 1);
    });
  });

  // Submit Application
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const agree = document.getElementById('app-agree').checked;
      if (!agree) {
        alert('You must certify and agree to the integrity policies to proceed.');
        return;
      }

      // Generate Random Tracking ID
      const trackingId = 'MU-' + Math.floor(100000 + Math.random() * 900000);
      
      const fname = document.getElementById('app-firstname').value;
      const lname = document.getElementById('app-lastname').value;
      const degree = document.getElementById('app-degree').value;
      const term = document.getElementById('app-term').value;

      // Populate Receipt
      document.getElementById('rec-name').innerText = `${fname} ${lname}`;
      document.getElementById('rec-id').innerText = trackingId;
      document.getElementById('rec-degree').innerText = degree;
      document.getElementById('rec-term').innerText = term;

      // Hide all steps, hide flow indicators, show receipt
      steps.forEach(st => { if(st) st.classList.remove('active'); });
      const flowWrap = document.querySelector('.flow-steps');
      if (flowWrap) flowWrap.style.display = 'none';
      if (receiptCard) receiptCard.style.display = 'flex';
    });
  }

  // Reset Wizard
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      // Clear forms
      document.getElementById('app-firstname').value = '';
      document.getElementById('app-lastname').value = '';
      document.getElementById('app-email').value = '';
      document.getElementById('app-phone').value = '';
      document.getElementById('app-agree').checked = false;

      // Show Indicators
      const flowWrap = document.querySelector('.flow-steps');
      if (flowWrap) flowWrap.style.display = 'flex';
      
      // Hide receipt, reset to step 1
      if (receiptCard) receiptCard.style.display = 'none';
      setActiveStep(0);
    });
  }


  /* ==========================================================================
     6. Campus Tour & visit scheduler
     ========================================================================== */
  const facilityCards = document.querySelectorAll('.facility-card');
  facilityCards.forEach(card => {
    card.addEventListener('click', () => {
      facilityCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  const tourForm = document.getElementById('tour-form');
  const tourSuccess = document.getElementById('tour-success');

  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault();
      tourForm.style.display = 'none';
      if (tourSuccess) {
        tourSuccess.style.display = 'block';
      }
    });
  }


  /* ==========================================================================
     7. Academic Calendar Event RSVPs
     ========================================================================== */
  const rsvpButtons = document.querySelectorAll('.btn-rsvp');
  const rsvpToast = document.getElementById('rsvp-toast');

  rsvpButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Show RSVP Toast
      if (rsvpToast) {
        rsvpToast.style.bottom = '24px';
        
        // Hide RSVP button, replace with Registered badge
        btn.innerText = 'Registered ✓';
        btn.disabled = true;
        btn.style.borderColor = '#10b981';
        btn.style.color = '#10b981';

        // Auto hide toast after 3.5 seconds
        setTimeout(() => {
          rsvpToast.style.bottom = '-100px';
        }, 3500);
      }
    });
  });

  // Tab Filtering for Events
  const tabButtons = document.querySelectorAll('#events-tabs .tab-btn');
  const eventCards = document.querySelectorAll('.event-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-tab');
      
      eventCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (targetTab === 'all' || category === targetTab) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* ==========================================================================
     8. Research Stories Gazette Fullscreen Modals
     ========================================================================== */
  const storyCards = document.querySelectorAll('.story-card');
  const storyModal = document.getElementById('story-modal');
  const storyModalContent = document.getElementById('story-modal-content');
  const closeStoryModalBtn = document.getElementById('close-story-modal');

  const storyDatabase = {
    "1": {
      title: "Entangled States Achieved Across Meadows Network",
      meta: "Sciences | Research Story | August 14, 2026",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Researchers in the theoretical physics group at Modern University have managed to stabilize quantum entangled networks across a record-breaking 15 miles of standard fiber optic layout. The team, directed by Nobel Laureate Dr. Albert Einstein, utilized a new crystalline waveguide configuration that minimizes decoherence traps caused by kinetic noise and temperature fluxes.</p>
        <p>This achievement represents a significant milestone in quantum network architectures, bringing us closer to a fully secure, unhackable quantum internet structure. The research team has already successfully transmitted test packets across the Meadows loop, verifying quantum parity feedback in real-time.</p>
        <p>The institutional physics group is now planning to extend the network node connections into neighboring research parks to model multi-party key distribution grids under standard metropolitan stresses.</p>
      `
    },
    "2": {
      title: "CRISPR Cell Editing Enhances Lifespan Indicators",
      meta: "Biomedical | Research Story | July 19, 2026",
      image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>The genomics research division at the Modern University Discovery Center has reported successful cell editing results using a revised CRISPR-Cas12 target structure. In laboratory modeling, the modifications demonstrated a 30% longevity increase in telomeric indicators without altering standard genetic behaviors.</p>
        <p>Led by Endowed Chair Dr. Jane Goodall, the research focuses on cellular repair mechanisms that decay during aging. The Cas12 waveguide configuration allows for targeted sequence insertions with 99.4% accuracy, mitigating the risks of off-target edits that have challenged previous genomic models.</p>
        <p>The findings are published in the International Journal of Genomic Systems, paving the way for targeted therapies focused on correcting degenerate hereditary cellular traits in human clinical trials.</p>
      `
    },
    "3": {
      title: "14th-Century Gothic Manuscripts Translated",
      meta: "History & Linguistics | Research Story | June 05, 2026",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Our archival division, in collaboration with linguistic historians, has completed the digital translation index of recently unearthed 14th-century Gothic parchments. The manuscripts, found during renovations of a monastery near Prague, detail administrative logs, philosophical essays, and classical translations.</p>
        <p>Using advanced multispectral imaging pipelines developed at our CompSci department, researchers under the humanities directorate recovered text hidden beneath decades of water degradation and ink fading. The writings show a unique blending of medieval Czech syntax structures and classical Latin phrasing.</p>
        <p>The fully indexed translation registry is now open-sourced and available on the university's digital archival cloud for historians, linguists, and researchers worldwide.</p>
      `
    }
  };

  storyCards.forEach(card => {
    card.addEventListener('click', () => {
      const storyId = card.getAttribute('data-story-id');
      const data = storyDatabase[storyId];

      if (data && storyModal && storyModalContent) {
        storyModalContent.innerHTML = `
          <h2>${data.title}</h2>
          <span class="modal-meta">${data.meta}</span>
          <img src="${data.image}" alt="${data.title}">
          <div class="modal-text-content">
            ${data.content}
          </div>
        `;
        storyModal.style.display = 'flex';
      }
    });
  });

  const closeStoryModal = () => {
    if (storyModal) {
      storyModal.style.display = 'none';
      storyModalContent.innerHTML = '';
    }
  };

  if (closeStoryModalBtn) {
    closeStoryModalBtn.addEventListener('click', closeStoryModal);
  }

  if (storyModal) {
    storyModal.addEventListener('click', (e) => {
      if (e.target === storyModal) {
        closeStoryModal();
      }
    });
  }


  /* ==========================================================================
     9. Newsletter Form Submit
     ========================================================================== */
  const newsForm = document.getElementById('newsletter-form');
  const newsSuccess = document.getElementById('newsletter-success');

  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsForm.style.display = 'none';
      if (newsSuccess) {
        newsSuccess.style.display = 'block';
      }
    });
  }

});
