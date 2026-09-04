/* ─── AURA HAVEN RESORTS STATIC JAVASCRIPT ─── */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialise Booking Dates (Today & Tomorrow)
  const checkInInput = document.getElementById('checkIn');
  const checkOutInput = document.getElementById('checkOut');

  if (checkInInput && checkOutInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    checkInInput.value = today.toISOString().split('T')[0];
    checkOutInput.value = tomorrow.toISOString().split('T')[0];
    checkInInput.min = today.toISOString().split('T')[0];

    checkInInput.addEventListener('change', () => {
      const selectedCheckIn = new Date(checkInInput.value);
      const nextDay = new Date(selectedCheckIn);
      nextDay.setDate(nextDay.getDate() + 1);
      checkOutInput.value = nextDay.toISOString().split('T')[0];
      checkOutInput.min = nextDay.toISOString().split('T')[0];
    });
  }

  // 2. Sticky Header Scroll Trigger
  const header = document.getElementById('ahHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('ah-header-scrolled');
    } else {
      header.classList.remove('ah-header-scrolled');
    }
  });

  // 3. Hero Slider Auto-Transitions
  const slides = document.querySelectorAll('.ah-slide');
  const dots = document.querySelectorAll('.ah-slider-dot');
  let currentSlide = 0;
  let sliderInterval;

  const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  };

  const nextSlide = () => {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  };

  const startSlider = () => {
    sliderInterval = setInterval(nextSlide, 6000);
  };

  const stopSlider = () => {
    clearInterval(sliderInterval);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopSlider();
      showSlide(index);
      startSlider();
    });
  });

  if (slides.length > 0) {
    startSlider();
  }

  // 4. Mobile Menu Offcanvas Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('open')) {
        icon.className = 'bi bi-x fs-3';
      } else {
        icon.className = 'bi bi-list fs-3';
      }
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        mobileToggle.querySelector('i').className = 'bi bi-list fs-3';
      }
    });
  }

  // 5. Scroll Helper for Navigation Items
  const scrollButtons = document.querySelectorAll('.btn-scroll, .ah-nav-item');
  scrollButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Handle filter triggers inside navigation links
        const filterCategory = btn.getAttribute('data-filter');
        if (filterCategory) {
          filterExperience(filterCategory);
        }

        // Close mobile nav if open
        if (navLinks && navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          mobileToggle.querySelector('i').className = 'bi bi-list fs-3';
        }
      }
    });
  });

  // 6. Booking Guest Counter Trigger and Dropdown Controls
  const guestTrigger = document.getElementById('guestTrigger');
  const guestDropdown = document.getElementById('guestDropdown');
  const guestMinus = document.getElementById('guestMinus');
  const guestPlus = document.getElementById('guestPlus');
  const guestCount = document.getElementById('guestCount');
  let guests = 2;

  if (guestTrigger && guestDropdown) {
    guestTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      guestDropdown.style.display = guestDropdown.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('click', (e) => {
      if (guestDropdown.style.display === 'block' && !guestDropdown.contains(e.target) && e.target !== guestTrigger) {
        guestDropdown.style.display = 'none';
      }
    });

    const updateGuestUI = () => {
      guestCount.textContent = guests;
      guestTrigger.textContent = `${guests} ${guests === 1 ? 'Guest' : 'Guests'}`;
      guestMinus.disabled = guests <= 1;
      guestPlus.disabled = guests >= 8;
    };

    guestMinus.addEventListener('click', (e) => {
      e.stopPropagation();
      if (guests > 1) {
        guests--;
        updateGuestUI();
      }
    });

    guestPlus.addEventListener('click', (e) => {
      e.stopPropagation();
      if (guests < 8) {
        guests++;
        updateGuestUI();
      }
    });

    updateGuestUI();
  }

  // 7. Experience Tabs Filter
  const tabButtons = document.querySelectorAll('.ah-filter-tab-btn');
  const masonryItems = document.querySelectorAll('.ah-masonry-item');

  const filterExperience = (category) => {
    // Update active tab button visual
    tabButtons.forEach(btn => {
      if (btn.getAttribute('data-filter') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Display/hide items with fade animation
    masonryItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'All' || itemCategory === category) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 50);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(15px)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 400);
      }
    });
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      filterExperience(category);
    });
  });

  // 8. Reservation Booking Modal & Complete Flow
  const bookingForm = document.getElementById('bookingForm');
  const bookingModal = document.getElementById('bookingModal');
  const modalClose = document.getElementById('modalClose');
  const confirmForm = document.getElementById('confirmForm');

  const modalFormScreen = document.getElementById('modalFormScreen');
  const modalSuccessScreen = document.getElementById('modalSuccessScreen');

  const summaryRoom = document.getElementById('summaryRoom');
  const summaryDates = document.getElementById('summaryDates');
  const summaryGuests = document.getElementById('summaryGuests');

  const guestName = document.getElementById('guestName');
  const guestEmail = document.getElementById('guestEmail');
  const guestPhone = document.getElementById('guestPhone');

  const successGuestName = document.getElementById('successGuestName');
  const successGuestEmail = document.getElementById('successGuestEmail');
  const successRoom = document.getElementById('successRoom');
  const successRefId = document.getElementById('successRefId');
  const successReturnBtn = document.getElementById('successReturnBtn');

  let selectedRoom = "Deluxe Sanctuary Suite";

  const openBookingModal = (roomName) => {
    selectedRoom = roomName || document.getElementById('roomType').value;
    
    // Update booking summary values
    if (summaryRoom) summaryRoom.textContent = selectedRoom;
    if (summaryDates && checkInInput && checkOutInput) {
      summaryDates.innerHTML = `${checkInInput.value} &rarr; ${checkOutInput.value}`;
    }
    if (summaryGuests) {
      summaryGuests.textContent = `${guests} ${guests === 1 ? 'Adult' : 'Adults'}`;
    }

    // Reset modals screens
    modalFormScreen.style.display = 'block';
    modalSuccessScreen.style.display = 'none';
    bookingModal.style.display = 'flex';
  };

  const closeBookingModal = () => {
    bookingModal.style.display = 'none';
  };

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      openBookingModal();
    });
  }

  // Bind suite quick-book buttons
  const suiteBookButtons = document.querySelectorAll('.btn-book-suite');
  suiteBookButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const suiteName = btn.getAttribute('data-suite');
      openBookingModal(suiteName);
    });
  });

  const experienceBookButtons = document.querySelectorAll('.btn-book');
  experienceBookButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openBookingModal("Deluxe Sanctuary Suite");
    });
  });

  const reserveBtnTop = document.getElementById('reserveBtnTop');
  if (reserveBtnTop) {
    reserveBtnTop.addEventListener('click', () => {
      openBookingModal();
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeBookingModal);
  }

  window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      closeBookingModal();
    }
  });

  // Booking Confirmation Form Submit
  if (confirmForm) {
    confirmForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Update Success Screen
      if (successGuestName) successGuestName.textContent = guestName.value;
      if (successGuestEmail) successGuestEmail.textContent = guestEmail.value;
      if (successRoom) successRoom.textContent = selectedRoom;
      if (successRefId) {
        successRefId.textContent = `AH-${Math.floor(100000 + Math.random() * 900000)}`;
      }

      // Transition Screen
      modalFormScreen.style.display = 'none';
      modalSuccessScreen.style.display = 'block';
    });
  }

  if (successReturnBtn) {
    successReturnBtn.addEventListener('click', () => {
      closeBookingModal();
      confirmForm.reset();
    });
  }

  // 9. Newsletter Sign-Up Subscription Animation State
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterSuccess = document.getElementById('newsletterSuccess');
  const newsletterEmail = document.getElementById('newsletterEmail');

  if (newsletterForm && newsletterSuccess) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (newsletterEmail.value) {
        newsletterSuccess.style.display = 'block';
        newsletterForm.style.display = 'none';
        
        setTimeout(() => {
          newsletterSuccess.style.display = 'none';
          newsletterForm.style.display = 'block';
          newsletterForm.reset();
        }, 5000);
      }
    });
  }

  // 10. Update Year dynamically in Footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
