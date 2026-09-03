// HavenLuxe Retreat - Static Interactive Script

// 1. Data Store
const ROOMS_DATA = [
  {
    id: 'amber-canopy-villa',
    name: 'The Amber Canopy Villa',
    category: 'villas',
    categoryName: 'Villa',
    description: 'Nestled in the lush ocean-facing forest canopy, this private villa features a heated plunge pool, dedicated wellness deck, stone outdoor shower, and floor-to-ceiling glass retractable walls.',
    basePrice: 1200,
    capacity: 2,
    sizeSqFt: 1800,
    bedType: '1 King Bed',
    image: '/ao_amber_canopy.jpg',
    amenities: ['Private Plunge Pool', 'Butler Service', 'Outdoor Limestone Shower', 'Curated Wine Bar', 'Wellness Deck']
  },
  {
    id: 'champagne-ocean-suite',
    name: 'Champagne Ocean Suite',
    category: 'ocean-suites',
    categoryName: 'Ocean Suite',
    description: 'Wake up to endless vistas of the cobalt shoreline. Crafted with native limestone, rich gold brass fittings, a freestanding copper soaking tub, and a private terrace hanging over the waves.',
    basePrice: 850,
    capacity: 2,
    sizeSqFt: 1200,
    bedType: '1 King Bed',
    image: '/ao_champagne_suite.jpg',
    amenities: ['Ocean-Facing Terrace', 'Copper Soaking Tub', 'In-room Fireplace', 'Bose Sound System', 'Espresso Station']
  },
  {
    id: 'velvet-obsidian-penthouse',
    name: 'Velvet Obsidian Penthouse',
    category: 'penthouses',
    categoryName: 'Penthouse',
    description: 'An architectural masterpiece crowning the highest crest of the resort. Panoramic 360 shoreline vistas, custom hearth fireplace, private infinity plunge pool, and skylights designed for starlight dining.',
    basePrice: 2400,
    capacity: 4,
    sizeSqFt: 3200,
    bedType: '2 King Beds',
    image: '/ao_obsidian_sanctuary.jpg',
    amenities: ['Panoramic Sunset Patio', 'Infinity Plunge Pool', 'Dedicated Private Chef', 'Private Fitness Room', 'Starlight Lounge']
  },
  {
    id: 'serenity-cove-villa',
    name: 'The Serenity Cove Villa',
    category: 'villas',
    categoryName: 'Villa',
    description: 'A secluded beachfront sanctuary with direct access to a private sandy cove. Boasts a massive stone outdoor bath, a serene saltwater lagoon pool, and lush olive tree central courtyard.',
    basePrice: 1450,
    capacity: 2,
    sizeSqFt: 2000,
    bedType: '1 King Bed',
    image: '/ao_velvet_villa.jpg',
    amenities: ['Direct Cove Access', 'Stone Outdoor Bath', 'Private Lagoon Pool', 'Private Massage Sala', 'Wine Cellar Cabinet']
  },
  {
    id: 'azure-cliffside-suite',
    name: 'Azure Shoreline Suite',
    category: 'ocean-suites',
    categoryName: 'Ocean Suite',
    description: 'Elevated cliffside suite crafted from local cedar wood and modern organic fabrics. Features a sunset-facing terrace lounge, hammocks, steam shower, and dedicated wellness treatment alcove.',
    basePrice: 950,
    capacity: 3,
    sizeSqFt: 1400,
    bedType: '1 King Bed + 1 Daybed',
    image: '/aura_haven_suite.jpg',
    amenities: ['Cliffside Hammock Lounge', 'Steam Shower Suite', 'Wellness Treatment Area', 'Smart Tablet Concierge', 'Valet service']
  }
];

const TESTIMONIALS = [
  {
    rating: 5,
    quote: "“An absolute masterpiece of quiet luxury. The Amber Canopy Villa felt like a floating sanctuary. Every detail, from the linen weight to the room scents, was curated with meticulous care.”",
    author: "Victoria Montgomery",
    stayType: "Stayed in the Amber Canopy Villa",
    initials: "VM"
  },
  {
    rating: 5,
    quote: "“We spent four nights in the Champagne Ocean Suite, sleeping with the glass wall open to the shoreline waves. The Serenity Spa coastal clay ritual is worth the flight alone.”",
    author: "Marcus & Elena Vance",
    stayType: "Stayed in the Champagne Ocean Suite",
    initials: "ME"
  },
  {
    rating: 5,
    quote: "“Dining at The Hearth was a revelation in fire and flavor. The lobster with smoked pine butter, coupled with a rare 2004 Bordeaux from their limestone cellar, was unforgettable.”",
    author: "Sir Julian Thorne",
    stayType: "Stayed in the Velvet Obsidian Penthouse",
    initials: "JT"
  }
];

const RATE_MAPPING = {
  villas: { name: 'Luxury Villa', rate: 1325 },
  'ocean-suites': { name: 'Ocean Suite', rate: 900 },
  penthouses: { name: 'Obsidian Penthouse', rate: 2400 },
  all: { name: 'Deluxe Residence', rate: 950 }
};

const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.78 }
};

// 2. Global State Variables
let currentCurrency = 'USD';
let activeCategoryFilter = 'all';
let currentReviewIndex = 0;
let activeDetailsRoom = null;
let reviewInterval = null;

// Selected stay inputs state
let checkInVal = '';
let checkOutVal = '';
let selectedResidenceType = 'all';
let guestCount = 2;

// 3. Document Ready Setup
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initHeroSlider();
  initDatesPicker();
  initReviewsCarousel();
  initCurrencyHandlers();
  initIntersectionObserver();
  
  // Initial residences render
  renderResidences();
  
  // Set copyright footer year
  document.getElementById('currentYear').innerText = new Date().getFullYear().toString();
});

// 4. Navigation & Layout Scroll Interactivity
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbarScrolled');
    } else {
      navbar.classList.remove('navbarScrolled');
    }
  });
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBg = document.getElementById('drawerBg');
  
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('hamburgerActive');
    mobileDrawer.classList.toggle('mobileDrawerActive', isOpen);
    drawerBg.classList.toggle('drawerBgActive', isOpen);
  });
}

function toggleMobileMenu(shouldOpen) {
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBg = document.getElementById('drawerBg');
  
  hamburger.classList.toggle('hamburgerActive', shouldOpen);
  mobileDrawer.classList.toggle('mobileDrawerActive', shouldOpen);
  drawerBg.classList.toggle('drawerBgActive', shouldOpen);
}

function scrollToSection(selector) {
  toggleMobileMenu(false);
  const element = document.querySelector(selector);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. Hero Slideshow logic
function initHeroSlider() {
  const slides = document.querySelectorAll('.heroContainer .slide');
  let slideIndex = 0;
  
  setInterval(() => {
    slides[slideIndex].classList.remove('slideActive');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('slideActive');
  }, 7000);
}

// 6. Availability dates setup
function initDatesPicker() {
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  const dayAfterTomorrowStr = new Date(Date.now() + 172800000).toISOString().split('T')[0];
  
  const checkInInput = document.getElementById('checkInInput');
  const checkOutInput = document.getElementById('checkOutInput');
  
  checkInInput.min = todayStr;
  checkInInput.value = tomorrowStr;
  
  checkOutInput.min = dayAfterTomorrowStr;
  checkOutInput.value = dayAfterTomorrowStr;
  
  checkInInput.addEventListener('change', (e) => {
    const selectedCheckIn = e.target.value;
    const minCheckOutDate = new Date(new Date(selectedCheckIn).getTime() + 86400000);
    const minCheckOutStr = minCheckOutDate.toISOString().split('T')[0];
    
    checkOutInput.min = minCheckOutStr;
    if (checkOutInput.value <= selectedCheckIn) {
      checkOutInput.value = minCheckOutStr;
    }
  });
}

// 7. Accommodations Grid render & category filtering
function renderResidences() {
  const grid = document.getElementById('roomsGrid');
  grid.innerHTML = '';
  
  const filtered = activeCategoryFilter === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter(r => r.category === activeCategoryFilter);
    
  const symbol = CURRENCIES[currentCurrency].symbol;
  const rate = CURRENCIES[currentCurrency].rate;
  
  filtered.forEach(room => {
    const priceConverted = Math.round(room.basePrice * rate);
    const card = document.createElement('article');
    card.className = 'roomCard';
    
    card.innerHTML = `
      <div class="cardImageWrapper">
        <span class="cardCategoryTag">${room.categoryName}</span>
        <img src="${room.image}" alt="${room.name}" class="cardImage">
        <div class="cardDetailsOverlay">
          <button class="cardDetailsBtn" onclick="openRoomDetailsModal('${room.id}')">View Residence Details</button>
        </div>
      </div>
      <div class="cardBody">
        <h3 class="cardTitle">${room.name}</h3>
        <p class="cardDesc">${room.description}</p>
        <div class="cardSpecs">
          <div class="cardSpecItem" title="Square Footage">
            <svg class="cardSpecIcon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
            <span>${room.sizeSqFt.toLocaleString()} SQ FT</span>
          </div>
          <div class="cardSpecItem" title="Guest Capacity">
            <svg class="cardSpecIcon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <span>${room.capacity} GUESTS</span>
          </div>
          <div class="cardSpecItem" title="Bed Arrangement">
            <svg class="cardSpecIcon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M2 4v16"/><path d="M2 11h20"/><path d="M22 4v16"/><path d="M6 11v-3c0-1.657 1.343-3 3-3h6c1.657 0 3 1.343 3 3v3"/></svg>
            <span>${room.bedType}</span>
          </div>
        </div>
        <div class="cardFooter">
          <div class="cardPriceWrapper">
            <span class="cardPriceLabel">From</span>
            <span class="cardPriceValue">${symbol}${priceConverted.toLocaleString()}<span class="cardPriceUnit"> / Night</span></span>
          </div>
          <button class="cardBookBtn" onclick="triggerDirectReserve('${room.category}')">Reserve</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterResidences(cat, tabBtn) {
  activeCategoryFilter = cat;
  
  // Update active tab buttons
  const tabs = document.querySelectorAll('.filterTabs .filterTab');
  tabs.forEach(btn => btn.classList.remove('filterTabActive'));
  tabBtn.classList.add('filterTabActive');
  
  renderResidences();
}

// 8. Currency handlers
function initCurrencyHandlers() {
  const dSelect = document.getElementById('currencySelect');
  const mSelect = document.getElementById('mobileCurrencySelect');
  
  const handleCurrencyChange = (val) => {
    currentCurrency = val;
    dSelect.value = val;
    mSelect.value = val;
    
    // Rerender grids
    renderResidences();
    
    // Update active modals pricing if open
    if (activeDetailsRoom) {
      updateRoomDetailsModalPricing();
    }
  };
  
  dSelect.addEventListener('change', (e) => handleCurrencyChange(e.target.value));
  mSelect.addEventListener('change', (e) => handleCurrencyChange(e.target.value));
}

// 9. Details Modal Population
function openRoomDetailsModal(roomId) {
  const room = ROOMS_DATA.find(r => r.id === roomId);
  if (!room) return;
  
  activeDetailsRoom = room;
  document.getElementById('modalRoomImage').src = room.image;
  document.getElementById('modalRoomImage').alt = room.name;
  document.getElementById('modalRoomCategory').innerText = room.categoryName;
  document.getElementById('modalRoomName').innerText = room.name;
  document.getElementById('modalRoomDesc').innerText = room.description;
  document.getElementById('modalRoomSize').innerText = `${room.sizeSqFt.toLocaleString()} SQ FT`;
  document.getElementById('modalRoomGuests').innerText = `${room.capacity} GUESTS MAX`;
  document.getElementById('modalRoomBeds').innerText = room.bedType;
  
  // Inclusions grid
  const incl = document.getElementById('modalRoomInclusions');
  incl.innerHTML = '';
  room.amenities.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${item}</span>
    `;
    incl.appendChild(li);
  });
  
  updateRoomDetailsModalPricing();
  
  const bookBtn = document.getElementById('modalBookNowBtn');
  bookBtn.onclick = () => {
    closeRoomDetailsModal();
    triggerDirectReserve(room.category);
  };
  
  document.getElementById('detailsModalOverlay').classList.add('modalOverlayActive');
  document.body.style.overflow = 'hidden';
}

function updateRoomDetailsModalPricing() {
  if (!activeDetailsRoom) return;
  const symbol = CURRENCIES[currentCurrency].symbol;
  const rate = CURRENCIES[currentCurrency].rate;
  const converted = Math.round(activeDetailsRoom.basePrice * rate);
  document.getElementById('modalRoomPrice').innerText = `${symbol}${converted.toLocaleString()}`;
}

function closeRoomDetailsModal() {
  document.getElementById('detailsModalOverlay').classList.remove('modalOverlayActive');
  document.body.style.overflow = 'unset';
  activeDetailsRoom = null;
}

// 10. Booking Checkout Modal wizards
function openBookingModal(details = {}) {
  // Sync state values
  checkInVal = details.checkIn || document.getElementById('checkInInput').value;
  checkOutVal = details.checkOut || document.getElementById('checkOutInput').value;
  selectedResidenceType = details.roomType || document.getElementById('residenceSelect').value;
  guestCount = details.guests || Number(document.getElementById('guestsSelect').value);
  
  // Calculate nights
  const start = new Date(checkInVal);
  const end = new Date(checkOutVal);
  const diffTime = end - start;
  let nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (nights <= 0) nights = 1;
  
  // Lookup pricing
  const roomMeta = RATE_MAPPING[selectedResidenceType] || RATE_MAPPING.all;
  const symbol = CURRENCIES[currentCurrency].symbol;
  const cRate = CURRENCIES[currentCurrency].rate;
  
  const convertedRate = Math.round(roomMeta.rate * cRate);
  const subtotal = convertedRate * nights;
  const tax = Math.round(subtotal * 0.12);
  const service = Math.round(80 * cRate);
  const total = subtotal + tax + service;
  
  // Render calculation items
  document.getElementById('summaryRoomName').innerText = roomMeta.name;
  document.getElementById('summaryCheckIn').innerText = formatDateStr(checkInVal);
  document.getElementById('summaryCheckOut').innerText = formatDateStr(checkOutVal);
  document.getElementById('summaryNights').innerText = `${nights} ${nights > 1 ? 'Nights' : 'Night'}`;
  document.getElementById('summaryGuests').innerText = `${guestCount} ${guestCount > 1 ? 'Guests' : 'Guest'}`;
  document.getElementById('summaryRate').innerText = `${symbol}${convertedRate.toLocaleString()}`;
  document.getElementById('summarySubtotal').innerText = `${symbol}${subtotal.toLocaleString()}`;
  document.getElementById('summaryTax').innerText = `${symbol}${tax.toLocaleString()}`;
  document.getElementById('summaryService').innerText = `${symbol}${service.toLocaleString()}`;
  document.getElementById('summaryGrandTotal').innerText = `${symbol}${total.toLocaleString()}`;
  
  // Reset Step views
  document.getElementById('bookingStepForm').style.display = 'block';
  document.getElementById('bookingStepLoading').style.display = 'none';
  document.getElementById('bookingStepSuccess').style.display = 'none';
  
  // Show modal
  document.getElementById('bookingModalOverlay').classList.add('modalOverlayActive');
  document.body.style.overflow = 'hidden';
}

function handleAvailabilitySubmit(e) {
  e.preventDefault();
  const cIn = document.getElementById('checkInInput').value;
  const cOut = document.getElementById('checkOutInput').value;
  
  if (cIn >= cOut) {
    alert("Check-out date must be after check-in date.");
    return;
  }
  
  openBookingModal({
    checkIn: cIn,
    checkOut: cOut,
    roomType: document.getElementById('residenceSelect').value,
    guests: Number(document.getElementById('guestsSelect').value)
  });
}

function triggerDirectReserve(category) {
  openBookingModal({ roomType: category });
}

function handleBookingFormSubmit(e) {
  e.preventDefault();
  document.getElementById('bookingStepForm').style.display = 'none';
  document.getElementById('bookingStepLoading').style.display = 'block';
  
  const fName = document.getElementById('guestFirstName').value;
  const lName = document.getElementById('guestLastName').value;
  const selectedType = selectedResidenceType || 'all';
  const roomMeta = RATE_MAPPING[selectedType] || RATE_MAPPING.all;
  
  // Simulate network checkout
  setTimeout(() => {
    const code = 'HLX-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('successGuestName').innerText = fName;
    document.getElementById('successRoomName').innerText = roomMeta.name;
    document.getElementById('successConfCode').innerText = code;
    
    document.getElementById('bookingStepLoading').style.display = 'none';
    document.getElementById('bookingStepSuccess').style.display = 'block';
  }, 1200);
}

function closeBookingModal() {
  document.getElementById('bookingModalOverlay').classList.remove('modalOverlayActive');
  document.body.style.overflow = 'unset';
}

function formatDateStr(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// 11. Guest Reviews Carousel slider
function initReviewsCarousel() {
  const container = document.getElementById('reviewsSlidesContainer');
  const dotsContainer = document.getElementById('dotsContainer');
  
  container.innerHTML = '';
  dotsContainer.innerHTML = '';
  
  TESTIMONIALS.forEach((t, idx) => {
    // Generate Slide HTML
    const slide = document.createElement('div');
    slide.className = `reviewSlide ${idx === currentReviewIndex ? 'reviewSlideActive' : ''}`;
    
    let starsHtml = '';
    for (let i = 0; i < t.rating; i++) {
      starsHtml += `<svg class="reviewStarIcon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    }
    
    slide.innerHTML = `
      <div class="reviewStars">${starsHtml}</div>
      <blockquote class="reviewQuote">${t.quote}</blockquote>
      <div class="reviewAuthorWrapper">
        <div class="reviewAvatar">${t.initials}</div>
        <div class="reviewAuthorMeta">
          <cite class="reviewAuthorName">${t.author}</cite>
          <span class="reviewAuthorStay">${t.stayType}</span>
        </div>
      </div>
    `;
    container.appendChild(slide);
    
    // Generate Dot button HTML
    const dot = document.createElement('button');
    dot.className = `dot ${idx === currentReviewIndex ? 'dotActive' : ''}`;
    dot.ariaLabel = `Go to slide ${idx + 1}`;
    dot.onclick = () => jumpToReview(idx);
    dotsContainer.appendChild(dot);
  });
  
  startReviewAutoplay();
  
  // Pause on mouse hover
  const carousel = document.querySelector('.reviewsSection');
  carousel.addEventListener('mouseenter', stopReviewAutoplay);
  carousel.addEventListener('mouseleave', startReviewAutoplay);
}

function startReviewAutoplay() {
  stopReviewAutoplay();
  reviewInterval = setInterval(() => {
    navigateReview(1);
  }, 6000);
}

function stopReviewAutoplay() {
  if (reviewInterval) clearInterval(reviewInterval);
}

function navigateReview(direction) {
  const slides = document.querySelectorAll('.reviewSlide');
  const dots = document.querySelectorAll('.dotsContainer .dot');
  
  slides[currentReviewIndex].classList.remove('reviewSlideActive');
  dots[currentReviewIndex].classList.remove('dotActive');
  
  currentReviewIndex = (currentReviewIndex + direction + TESTIMONIALS.length) % TESTIMONIALS.length;
  
  slides[currentReviewIndex].classList.add('reviewSlideActive');
  dots[currentReviewIndex].classList.add('dotActive');
}

function jumpToReview(index) {
  const slides = document.querySelectorAll('.reviewSlide');
  const dots = document.querySelectorAll('.dotsContainer .dot');
  
  slides[currentReviewIndex].classList.remove('reviewSlideActive');
  dots[currentReviewIndex].classList.remove('dotActive');
  
  currentReviewIndex = index;
  
  slides[currentReviewIndex].classList.add('reviewSlideActive');
  dots[currentReviewIndex].classList.add('dotActive');
}

// 12. Newsletter Form submit simulation
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('newsletterEmailInput');
  const btn = document.getElementById('newsletterSubmitBtn');
  const alertBox = document.getElementById('newsletterSuccessAlert');
  
  btn.disabled = true;
  btn.innerText = '...';
  
  setTimeout(() => {
    alertBox.style.display = 'flex';
    input.value = '';
    btn.innerText = 'Subscribe';
    btn.disabled = false;
  }, 1000);
}

// 13. Scroll-triggered reveal animations (Intersection Observer)
function initIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealActive');
        }
      });
    },
    { threshold: 0.15 }
  );

  const elements = document.querySelectorAll('.reveal');
  elements.forEach((el) => observer.observe(el));
}
