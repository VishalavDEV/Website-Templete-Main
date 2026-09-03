/* ─── AURELIA VELVET OBSIDIAN RESORT JAVASCRIPT ─── */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Light / Dark)
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('ao-light-theme');
      const icon = themeToggle.querySelector('i');
      if (body.classList.contains('ao-light-theme')) {
        icon.className = 'bi bi-sun-fill';
      } else {
        icon.className = 'bi bi-moon-stars';
      }
    });
  }

  // 2. Booking Dates Logic (Today & Tomorrow)
  const checkIn = document.getElementById('checkIn');
  const checkOut = document.getElementById('checkOut');

  if (checkIn && checkOut) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    checkIn.value = today.toISOString().split('T')[0];
    checkOut.value = tomorrow.toISOString().split('T')[0];
    checkIn.min = today.toISOString().split('T')[0];

    checkIn.addEventListener('change', () => {
      const selectedDate = new Date(checkIn.value);
      const nextDate = new Date(selectedDate);
      nextDate.setDate(nextDate.getDate() + 1);
      checkOut.value = nextDate.toISOString().split('T')[0];
      checkOut.min = nextDate.toISOString().split('T')[0];
    });
  }

  // 3. Guest Dropdown Controls
  const guestTrigger = document.getElementById('guestTrigger');
  const guestDisplay = document.getElementById('guestDisplay');
  const guestDropdown = document.getElementById('guestDropdown');
  const guestMinus = document.getElementById('guestMinus');
  const guestPlus = document.getElementById('guestPlus');
  const guestCount = document.getElementById('guestCount');
  let guests = 2;

  if (guestTrigger && guestDropdown) {
    const toggleDropdown = (e) => {
      e.stopPropagation();
      const currentDisplay = window.getComputedStyle(guestDropdown).display;
      guestDropdown.style.display = currentDisplay === 'none' ? 'block' : 'none';
    };

    guestTrigger.addEventListener('click', toggleDropdown);
    if (guestDisplay) {
      guestDisplay.addEventListener('click', toggleDropdown);
    }

    document.addEventListener('click', (e) => {
      if (!guestDropdown.contains(e.target) && e.target !== guestTrigger && e.target !== guestDisplay) {
        guestDropdown.style.display = 'none';
      }
    });

    const updateGuests = () => {
      guestCount.textContent = guests;
      if (guestDisplay) {
        guestDisplay.textContent = `${guests} ${guests === 1 ? 'Guest' : 'Guests'}`;
      }
      guestMinus.disabled = guests <= 1;
      guestPlus.disabled = guests >= 8;
    };

    guestMinus.addEventListener('click', (e) => {
      e.stopPropagation();
      if (guests > 1) {
        guests--;
        updateGuests();
      }
    });

    guestPlus.addEventListener('click', (e) => {
      e.stopPropagation();
      if (guests < 8) {
        guests++;
        updateGuests();
      }
    });

    updateGuests();
  }

  // 4. Scroll Spy (Active links highlighting on scroll)
  const navItems = document.querySelectorAll('.ao-nav-item');
  const sections = document.querySelectorAll('header, section');

  const highlightNav = () => {
    let scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        const id = sec.getAttribute('id');
        navItems.forEach(item => {
          if (item.getAttribute('data-target') === id) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);

  // Smooth scroll links
  const scrollButtons = document.querySelectorAll('.ao-nav-item, .btn-scroll');
  scrollButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const targetSec = document.getElementById(targetId);

      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth' });
        navItems.forEach(item => item.classList.remove('active'));
        if (btn.classList.contains('ao-nav-item')) {
          btn.classList.add('active');
        }
      }
    });
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('aoMobileToggle');
  const navLinks = document.getElementById('aoNavLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'bi bi-x fs-3';
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '105%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--ao-glass-bg)';
        navLinks.style.borderRadius = '20px';
        navLinks.style.padding = '20px';
      } else {
        icon.className = 'bi bi-list';
        navLinks.style.display = '';
      }
    });
  }

  // 5. Scroll-triggered reveal animation (Intersection Observer)
  const revealElements = document.querySelectorAll('.ao-reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // 6. Sliding Booking Drawer Modal
  const bookingDrawer = document.getElementById('bookingDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const aoBookingForm = document.getElementById('aoBookingForm');
  const drawerConfirmForm = document.getElementById('drawerConfirmForm');

  const drawerFormScreen = document.getElementById('drawerFormScreen');
  const drawerSuccessScreen = document.getElementById('drawerSuccessScreen');

  const summaryRoom = document.getElementById('summaryRoom');
  const summaryDates = document.getElementById('summaryDates');
  const summaryGuests = document.getElementById('summaryGuests');

  const guestName = document.getElementById('guestName');
  const guestEmail = document.getElementById('guestEmail');
  const guestPhone = document.getElementById('guestPhone');

  const successGuestName = document.getElementById('successGuestName');
  const successGuestEmail = document.getElementById('successGuestEmail');
  const successRefId = document.getElementById('successRefId');
  const successReturnBtn = document.getElementById('successReturnBtn');

  let selectedRoom = "Deluxe Forest Habitat";

  const openDrawer = (roomName) => {
    selectedRoom = roomName || document.getElementById('roomType').value;

    if (summaryRoom) summaryRoom.textContent = selectedRoom;
    if (summaryDates && checkIn && checkOut) {
      summaryDates.innerHTML = `${checkIn.value} &rarr; ${checkOut.value}`;
    }
    if (summaryGuests) {
      summaryGuests.textContent = `${guests} ${guests === 1 ? 'Guest' : 'Guests'}`;
    }

    drawerFormScreen.style.display = 'block';
    drawerSuccessScreen.style.display = 'none';
    bookingDrawer.classList.add('open');
  };

  const closeDrawer = () => {
    bookingDrawer.classList.remove('open');
  };

  if (aoBookingForm) {
    aoBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      openDrawer();
    });
  }

  // Quick Book button clicks on bento cards
  const bentoBookBtns = document.querySelectorAll('.btn-book-room, .btn-peek-room');
  bentoBookBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.ao-bento-card');
      const roomName = card.getAttribute('data-room');
      openDrawer(roomName);
    });
  });

  const reserveNavBtn = document.getElementById('reserveNavBtn');
  if (reserveNavBtn) {
    reserveNavBtn.addEventListener('click', () => {
      openDrawer();
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  window.addEventListener('click', (e) => {
    if (e.target === bookingDrawer) {
      closeDrawer();
    }
  });

  // Confirm Form Submit
  if (drawerConfirmForm) {
    drawerConfirmForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (successGuestName) successGuestName.textContent = guestName.value;
      if (successGuestEmail) successGuestEmail.textContent = guestEmail.value;
      if (successRefId) {
        successRefId.textContent = `#AR-${Math.floor(100000 + Math.random() * 900000)}`;
      }

      drawerFormScreen.style.display = 'none';
      drawerSuccessScreen.style.display = 'block';
    });
  }

  if (successReturnBtn) {
    successReturnBtn.addEventListener('click', () => {
      closeDrawer();
      drawerConfirmForm.reset();
    });
  }

  // Double marquee track for seamless loop
  const marqueeTrack = document.querySelector('.ao-marquee-track');
  if (marqueeTrack) {
    const items = Array.from(marqueeTrack.children);
    // Duplicate marquee items once to loop seamlessly
    items.forEach(item => {
      const clone = item.cloneNode(true);
      marqueeTrack.appendChild(clone);
    });
  }

  // Current Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
