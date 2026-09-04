/* ==========================================================================
   Aetheria Haven Resorts — Interactive Script Engine
   ========================================================================== */

// Currencies mapping
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.78 }
};

// Rooms Mock Data (Synchronized with React RoomGrid.jsx)
const ROOMS_DATA = [
  {
    id: 'room-1',
    name: 'Aetheria Oceanfront Villa',
    category: 'oceanfront',
    class: 'floating-villa',
    price: 850,
    occupancy: 2,
    size: '120 m² / 1,290 ft²',
    bed: '1 King Bed',
    view: '180° Infinite Ocean',
    badge: 'Infinity View',
    images: [
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Private Plunge Pool', 'Ocean Sun Deck', '24/7 Butler Service', 'Outdoor Rainfall Shower']
  },
  {
    id: 'room-2',
    name: 'Cliffside Obsidian Oasis',
    category: 'cliffside',
    class: 'cliffside-suite',
    price: 950,
    occupancy: 2,
    size: '140 m² / 1,500 ft²',
    bed: '1 Ultra-King Bed',
    view: 'Panoramic Sea & Cliffs',
    badge: 'Popular',
    images: [
      'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Cliffside Infinity Pool', 'Helipad Access', 'Champagne Cellar', 'Obsidian Stone Tub']
  },
  {
    id: 'room-3',
    name: 'Aetheria Sky Chalet',
    category: 'sky-chalets',
    class: 'sky-chalet',
    price: 1200,
    occupancy: 4,
    size: '220 m² / 2,360 ft²',
    bed: '2 King Beds',
    view: 'Cloud Peak Vista',
    badge: 'Penthouse Level',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Skyline Heated Tub', 'Private Chef Service', 'Celestial Skylight Roof', 'Private Gym']
  },
  {
    id: 'room-4',
    name: 'Ethereal Forest Pod',
    category: 'forest-pods',
    class: 'forest-pod',
    price: 750,
    occupancy: 2,
    size: '90 m² / 960 ft²',
    bed: '1 Queen Bed',
    view: 'Emerald Canopy',
    badge: 'Sanctuary',
    images: [
      'https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Natural Hot Springs', 'Wrap-around Forest Deck', 'Yoga Platform', 'Glass Dome Star-Viewing']
  },
  {
    id: 'room-5',
    name: 'Nebula Glass Penthouse',
    category: 'sky-chalets',
    class: 'penthouse',
    price: 1500,
    occupancy: 4,
    size: '280 m² / 3,010 ft²',
    bed: '2 Grand King Beds',
    view: 'Sky & Ocean Panoramic',
    badge: 'Exclusive',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Private Heli-Transfer', 'Wraparound Infinite Lagoon', 'Yacht Charter Service', 'Bio-sauna']
  },
  {
    id: 'room-6',
    name: 'Zephyr Cliffside Sanctuary',
    category: 'cliffside',
    class: 'cliffside-suite',
    price: 890,
    occupancy: 2,
    size: '115 m² / 1,230 ft²',
    bed: '1 King Bed',
    view: 'Sea Clifftops View',
    badge: 'Romantic',
    images: [
      'https://images.unsplash.com/photo-1515362655824-9a74989f318e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Zen Stone Garden', 'Hanging Cliff Pool', 'Firepit Sunset Deck', 'Aromatherapy Bath']
  }
];

// Inclusions categorized
const AMENITIES_INCLUSIONS = {
  Wellness: [
    'Private Mineral Plunge Pool',
    'Infrared Detox Sauna Cabin',
    'Outdoor Rainforest Jet Shower',
    'Organic Cotton Meditation Mats & Bolsters',
    'Himalayan Salt Thermal Wall'
  ],
  Tech: [
    'Starlink Satellite Ultra-Speed WiFi',
    'Spatial Audio Sound System',
    'Automated Bio-Centric Lighting & Shutter controls',
    'Invisible Mirror TV Panels',
    'Voice-Activated Haven Concierge'
  ],
  Services: [
    'Dedicated Private Butler Service',
    'Airport Helipad Meet & Greet',
    'Customized Organic Pillow & Duvet Menu',
    'Sunset Mixology In-Suite Service',
    'Daily Restorative Aromatherapy Turndown'
  ]
};

// Global App States
let currentCurrency = 'USD';
let activeCategory = 'all';
let selectedRoom = null;
let cardImagesState = {}; // Keeps track of active image index per card

// Hero Booking States
let heroCheckInDate = new Date(Date.now() + 86400000).toISOString().split('T')[0];
let heroCheckOutDate = new Date(Date.now() + 172800000).toISOString().split('T')[0];
let heroGuests = 2;
let heroRooms = 1;

// Drawer Booking States
let drawerStep = 1;
let drawerSelectedSuiteClass = 'floating-villa';
let drawerCheckIn = '';
let drawerCheckOut = '';
let drawerGuests = 2;
let drawerRooms = 1;
let drawerExtras = { heli: false, chef: false, spa: false };
let drawerRequests = '';
let drawerPayment = 'credit';

// Modal Rate States
let modalActiveDateIndex = 0;
let modalExtras = { heli: false, chef: false, spa: false };

// On DOM load init
document.addEventListener('DOMContentLoaded', () => {
  setupHeroDefaults();
  renderRoomsGrid();
  setupCurrencyListeners();
  setupScrollReveal();
  setupNavbarTransparency();
  setupLightboxClose();
});

// Setup Hero search widget defaults
function setupHeroDefaults() {
  const cinInput = document.getElementById('heroCheckIn');
  const coutInput = document.getElementById('heroCheckOut');
  
  if (cinInput && coutInput) {
    cinInput.value = heroCheckInDate;
    coutInput.value = heroCheckOutDate;
    
    cinInput.min = new Date().toISOString().split('T')[0];
    coutInput.min = heroCheckInDate;

    cinInput.addEventListener('change', (e) => {
      heroCheckInDate = e.target.value;
      coutInput.min = heroCheckInDate;
      if (new Date(coutInput.value) <= new Date(heroCheckInDate)) {
        const nextDay = new Date(heroCheckInDate);
        nextDay.setDate(nextDay.getDate() + 1);
        heroCheckOutDate = nextDay.toISOString().split('T')[0];
        coutInput.value = heroCheckOutDate;
      }
    });

    coutInput.addEventListener('change', (e) => {
      heroCheckOutDate = e.target.value;
    });
  }
}

// Bind navbar scroll classes
function setupNavbarTransparency() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(15, 17, 21, 0.95)';
    } else {
      navbar.style.backgroundColor = 'rgba(15, 17, 21, 0.75)';
    }
  });
}

// Binds currency selections
function setupCurrencyListeners() {
  const dSelect = document.getElementById('currencySelect');
  const mSelect = document.getElementById('mobileCurrencySelect');

  const updateGlobalCurrency = (val) => {
    currentCurrency = val;
    dSelect.value = val;
    mSelect.value = val;
    renderRoomsGrid(); // Redraw grid with converted prices
    
    if (selectedRoom) {
      updateModalTotals(); // Update open modal pricing conversions
    }
    syncDrawerSummary(); // Update open drawer pricing conversions
  };

  dSelect.addEventListener('change', (e) => updateGlobalCurrency(e.target.value));
  mSelect.addEventListener('change', (e) => updateGlobalCurrency(e.target.value));
}

// Mobile hamburger toggle
function toggleMobileMenu(open) {
  const overlay = document.getElementById('drawerOverlay');
  if (overlay) {
    if (open) overlay.classList.add('mobileDrawerOverlayActive');
    else overlay.classList.remove('mobileDrawerOverlayActive');
  }
}

// Hero guest popovers
function toggleHeroGuestPopup(e) {
  e.stopPropagation();
  const pop = document.getElementById('heroGuestPopup');
  pop.classList.toggle('guestPopupActive');
}

document.addEventListener('click', () => {
  const pop = document.getElementById('heroGuestPopup');
  if (pop) pop.classList.remove('guestPopupActive');
});

function updateHeroGuests(offset) {
  heroGuests = Math.min(Math.max(heroGuests + offset, 1), 6);
  document.getElementById('heroGuestsVal').textContent = heroGuests;
  syncHeroGuestSummary();
}

function updateHeroRooms(offset) {
  heroRooms = Math.min(Math.max(heroRooms + offset, 1), 3);
  document.getElementById('heroRoomsVal').textContent = heroRooms;
  syncHeroGuestSummary();
}

function syncHeroGuestSummary() {
  document.getElementById('heroGuestSummary').textContent = `${heroGuests} ${heroGuests === 1 ? 'Guest' : 'Guests'}, ${heroRooms} Room`;
}

// Intersection Observer for slide reveals
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealActive');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Tab Category Filter
function filterCategory(slug) {
  activeCategory = slug;
  document.querySelectorAll('.tabBtn').forEach(btn => btn.classList.remove('tabBtnActive'));
  document.getElementById(`tab-${slug}`).classList.add('tabBtnActive');
  renderRoomsGrid();
  setupScrollReveal(); // Re-bind observer for newly revealed elements
}

// Render catalog Room Grid
function renderRoomsGrid() {
  const grid = document.getElementById('roomsGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = activeCategory === 'all' 
    ? ROOMS_DATA 
    : ROOMS_DATA.filter(r => r.category === activeCategory);

  const symbol = CURRENCIES[currentCurrency].symbol;
  const rate = CURRENCIES[currentCurrency].rate;

  filtered.forEach(room => {
    // Track slide images state index
    if (cardImagesState[room.id] === undefined) {
      cardImagesState[room.id] = 0;
    }
    const activeImgIdx = cardImagesState[room.id];

    const convertedPrice = Math.round(room.price * rate);

    // Create Card elements
    const card = document.createElement('article');
    card.className = 'card reveal';

    card.innerHTML = `
      <div class="imageWrapper">
        <img src="${room.images[activeImgIdx]}" alt="${room.name}" id="img-${room.id}" class="roomImage">
        <div class="imageOverlay"></div>
        <button class="carouselBtnLeft" onclick="slideImage('${room.id}', -1, event)">&#10094;</button>
        <button class="carouselBtnRight" onclick="slideImage('${room.id}', 1, event)">&#10095;</button>
        <div class="indicatorDots">
          ${room.images.map((_, i) => `
            <span class="dot ${i === activeImgIdx ? 'dotActive' : ''}" onclick="setSlideIndex('${room.id}', ${i}, event)"></span>
          `).join('')}
        </div>
        ${room.badge ? `<span class="badge cardBadge">${room.badge}</span>` : ''}
      </div>
      <div class="cardDetails">
        <div class="specsRow"><span>${room.view}</span></div>
        <h3 class="roomTitle">${room.name}</h3>
        <div class="iconSpecs">
          <div class="specItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:#C5A880;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>${room.occupancy} Guests</span>
          </div>
          <div class="specItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:#C5A880;"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/><path d="M12 3v18"/></svg>
            <span>${room.size}</span>
          </div>
          <div class="specItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:#C5A880;"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><circle cx="6" cy="12" r="2"/></svg>
            <span>${room.bed}</span>
          </div>
        </div>
        <div class="amenitiesTags">
          ${room.amenities.slice(0, 3).map(a => `<span class="amenityPill">${a}</span>`).join('')}
          ${room.amenities.length > 3 ? `<span class="amenityMore">+${room.amenities.length - 3} More</span>` : ''}
        </div>
        <div class="cardFooter">
          <div class="priceContainer">
            <span class="priceVal">${symbol}${convertedPrice}</span>
            <span class="priceLabel">/ night</span>
          </div>
          <div class="actionsContainer">
            <button class="quickViewBtn" onclick="openRoomModal('${room.id}')" title="Quick Details" aria-label="Quick View Room">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
            <button class="btn btn-primary bookNowBtn" onclick="directBook('${room.class}')">
              Book &rarr;
            </button>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
    applyAntiGravityTilt(card);
  });
}

// Carousel image sliding logic
function slideImage(roomId, offset, e) {
  e.stopPropagation();
  const room = ROOMS_DATA.find(r => r.id === roomId);
  let active = cardImagesState[roomId];
  active = (active + offset + room.images.length) % room.images.length;
  cardImagesState[roomId] = active;
  renderRoomsGrid();
}

function setSlideIndex(roomId, idx, e) {
  e.stopPropagation();
  cardImagesState[roomId] = idx;
  renderRoomsGrid();
}

// 3D Parallax Tilt Mouse bindings
function applyAntiGravityTilt(element) {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const w = rect.width;
    const h = rect.height;
    
    const tX = ((y - h / 2) / (h / 2)) * -6;
    const tY = ((x - w / 2) / (w / 2)) * 6;

    element.style.transform = `perspective(1000px) rotateX(${tX}deg) rotateY(${tY}deg) scale3d(1.015, 1.015, 1.015)`;
    element.style.transition = 'transform 0.15s ease-out';
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    element.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });
}

// Search availability CTA in Hero
function searchAvailability() {
  openBookingDrawer({
    checkIn: heroCheckInDate,
    checkOut: heroCheckOutDate,
    guests: heroGuests,
    rooms: heroRooms,
    roomType: document.getElementById('heroSuiteClass').value
  });
}

function directBook(roomClass) {
  openBookingDrawer({ roomType: roomClass });
}

// --------------------------------------------------------------------------
// Detailed Room Modal Functions
// --------------------------------------------------------------------------
function openRoomModal(roomId) {
  selectedRoom = ROOMS_DATA.find(r => r.id === roomId);
  if (!selectedRoom) return;

  modalActiveDateIndex = 0;
  modalExtras = { heli: false, chef: false, spa: false };

  document.getElementById('modalTitle').textContent = selectedRoom.name;
  document.getElementById('modalDesc').textContent = 'Immerse yourself in complete architectural weightlessness. This sanctuary blends floating slate foundations with structural glass overlays, creating an expansive environment of calm. Enjoy customized temperature profiling, personal sommelier catalogs, and dedicated helipad connectivity.';
  document.getElementById('modalBadge').textContent = selectedRoom.badge;
  document.getElementById('modalView').textContent = selectedRoom.view;

  // Render modal gallery grid
  const photoGrid = document.getElementById('modalPhotoGrid');
  photoGrid.innerHTML = selectedRoom.images.map((img, i) => `
    <div class="imageBox ${i === 0 ? 'imageBoxLarge' : ''}" onclick="openLightbox('${img}')">
      <img src="${img}" alt="room gallery" class="gridImage">
      <div class="zoomOverlay">
        <span>View Fullscreen</span>
      </div>
    </div>
  `).join('');

  // Render structured inclusions
  const inclusions = document.getElementById('modalAmenitiesGrid');
  inclusions.innerHTML = Object.entries(AMENITIES_INCLUSIONS).map(([cat, list]) => `
    <div class="modalAmenitiesCol">
      <h5 class="modalAmenityCategoryTitle">${cat}</h5>
      <ul class="modalAmenityUl">
        ${list.map(item => `
          <li class="modalAmenityLi">
            <span class="modalBullet">&#8226;</span>
            ${item}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  // Draw rate calendar matrix
  renderModalCalendar();
  
  // Set checklist ticks
  document.getElementById('modalHeliCheck').checked = false;
  document.getElementById('modalChefCheck').checked = false;
  document.getElementById('modalSpaCheck').checked = false;

  updateModalTotals();

  document.getElementById('roomModal').classList.add('modalOverlayActive');
  document.body.style.overflow = 'hidden';
}

function closeRoomModal() {
  document.getElementById('roomModal').classList.remove('modalOverlayActive');
  document.body.style.overflow = 'unset';
  selectedRoom = null;
}

// Render modal 7-day rate calendar
function renderModalCalendar() {
  const slider = document.getElementById('modalCalendarSlider');
  if (!slider) return;

  const symbol = CURRENCIES[currentCurrency].symbol;
  const rate = CURRENCIES[currentCurrency].rate;
  const today = new Date();
  
  slider.innerHTML = '';
  
  for (let i = 1; i <= 7; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);

    const dayName = futureDate.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNum = futureDate.getDate();
    const monthName = futureDate.toLocaleDateString('en-US', { month: 'short' });
    
    const dayOfWeek = futureDate.getDay();
    const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
    const rateMultiplier = isWeekend ? 1.2 : 1.0;
    const finalPrice = Math.round(selectedRoom.price * rateMultiplier * rate);

    const card = document.createElement('div');
    card.className = `calendarCard ${modalActiveDateIndex === i - 1 ? 'calendarCardActive' : ''}`;
    card.onclick = () => selectModalDate(i - 1);

    card.innerHTML = `
      <span class="calendarDate">${dayName} ${dayNum} ${monthName}</span>
      <span class="calendarPrice">${symbol}${finalPrice}</span>
      ${isWeekend ? `<span class="weekendTag">WE</span>` : ''}
    `;

    slider.appendChild(card);
  }
}

function selectModalDate(idx) {
  modalActiveDateIndex = idx;
  renderModalCalendar();
  updateModalTotals();
}

function toggleModalExtra(key) {
  modalExtras[key] = !modalExtras[key];
  const itemEl = document.getElementById(`extra${key.charAt(0).toUpperCase() + key.slice(1)}Item`);
  if (itemEl) {
    if (modalExtras[key]) itemEl.classList.add('modalExtraItemChecked');
    else itemEl.classList.remove('modalExtraItemChecked');
  }
  updateModalTotals();
}

// Compute detail popup costs dynamically
function updateModalTotals() {
  if (!selectedRoom) return;

  const rate = CURRENCIES[currentCurrency].rate;
  const symbol = CURRENCIES[currentCurrency].symbol;

  const basePrice = selectedRoom.price;
  const targetDateIdx = modalActiveDateIndex;
  
  // Predict rates multiplier
  const today = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + targetDateIdx + 1);
  const isWeekend = targetDate.getDay() === 5 || targetDate.getDay() === 6;
  const rateMultiplier = isWeekend ? 1.2 : 1.0;

  const activeBaseRate = Math.round(basePrice * rateMultiplier * rate);

  // Extras base
  const EXTRAS_PRICES = { heli: 350, chef: 250, spa: 180 };
  const heliCost = Math.round(EXTRAS_PRICES.heli * rate);
  const chefCost = Math.round(EXTRAS_PRICES.chef * rate);
  const spaCost = Math.round(EXTRAS_PRICES.spa * rate);

  // Update cost label texts
  document.getElementById('modalHeliCost').textContent = `+${symbol}${heliCost}`;
  document.getElementById('modalChefCost').textContent = `+${symbol}${chefCost} / day`;
  document.getElementById('modalSpaCost').textContent = `+${symbol}${spaCost}`;

  // Daily suite total
  const finalDaily = activeBaseRate + (modalExtras.chef ? chefCost : 0);
  document.getElementById('modalDailyTotal').innerHTML = `${symbol}${finalDaily} <span class="modalTotalPriceSub">/ night</span>`;

  // One time totals
  const oneTime = (modalExtras.heli ? heliCost : 0) + (modalExtras.spa ? spaCost : 0);
  const oneTimeEl = document.getElementById('modalOneTimeBlock');
  if (oneTime > 0) {
    oneTimeEl.style.display = 'block';
    document.getElementById('modalOneTimeTotal').innerHTML = `${symbol}${oneTime} <span class="modalTotalPriceSub"> total</span>`;
  } else {
    oneTimeEl.style.display = 'none';
  }
}

// Move to Drawer Bookings from Popup modal
function bookFromModal() {
  if (!selectedRoom) return;
  
  const selectedSuiteClass = selectedRoom.class;
  const today = new Date();
  
  const checkinDate = new Date(today);
  checkinDate.setDate(today.getDate() + modalActiveDateIndex + 1);
  const checkoutDate = new Date(checkinDate);
  checkoutDate.setDate(checkoutDate.getDate() + 1);

  closeRoomModal();

  openBookingDrawer({
    roomType: selectedSuiteClass,
    checkIn: checkinDate.toISOString().split('T')[0],
    checkOut: checkoutDate.toISOString().split('T')[0],
    extras: { ...modalExtras }
  });
}

// Fullscreen lightboxes
function openLightbox(src) {
  const overlay = document.getElementById('lightboxOverlay');
  const img = document.getElementById('lightboxImg');
  img.src = src;
  overlay.classList.add('lightboxOverlayActive');
}

function closeLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  overlay.classList.remove('lightboxOverlayActive');
}

function setupLightboxClose() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeRoomModal();
      closeBookingDrawer();
    }
  });
}

// --------------------------------------------------------------------------
// Multi-step Booking Drawer functions
// --------------------------------------------------------------------------
function openBookingDrawer(details = {}) {
  drawerStep = 1;
  document.getElementById('drawerStepLabel').textContent = 'Step 1 of 4 • Details';
  
  // Reset steps displays
  document.getElementById('bookingStep1').style.display = 'block';
  document.getElementById('bookingStep2').style.display = 'none';
  document.getElementById('bookingStep3').style.display = 'none';
  document.getElementById('bookingStep4').style.display = 'none';

  document.getElementById('drawerFooter').style.display = 'block';
  document.getElementById('drawerSuccessFooter').style.display = 'none';
  document.getElementById('drawerBackBtn').style.display = 'none';
  document.getElementById('drawerNextBtn').textContent = 'Continue';

  // Apply default dates if empty
  drawerCheckIn = details.checkIn || heroCheckInDate;
  drawerCheckOut = details.checkOut || heroCheckOutDate;
  drawerGuests = details.guests || heroGuests;
  drawerRooms = details.rooms || heroRooms;
  drawerSelectedSuiteClass = details.roomType && details.roomType !== 'all' ? details.roomType : 'floating-villa';
  
  if (details.extras) {
    drawerExtras = { ...drawerExtras, ...details.extras };
  } else {
    drawerExtras = { heli: false, chef: false, spa: false };
  }

  // Set fields values
  document.getElementById('drawerSuiteSelect').value = drawerSelectedSuiteClass;
  document.getElementById('drawerCheckIn').value = drawerCheckIn;
  document.getElementById('drawerCheckOut').value = drawerCheckOut;

  document.getElementById('drawerGuestsVal').textContent = drawerGuests;
  document.getElementById('drawerRoomsVal').textContent = drawerRooms;

  // Set checkbox ticked statuses
  document.getElementById('drawerHeliCheck').checked = drawerExtras.heli;
  document.getElementById('drawerChefCheck').checked = drawerExtras.chef;
  document.getElementById('drawerSpaCheck').checked = drawerExtras.spa;

  syncDrawerExtrasCheckedClasses();

  // Load name and phone
  document.getElementById('drawerGuestName').value = '';
  document.getElementById('drawerGuestEmail').value = '';
  document.getElementById('drawerGuestPhone').value = '';

  document.getElementById('drawerDatesError').style.display = 'none';
  document.getElementById('drawerNameError').style.display = 'none';
  document.getElementById('drawerEmailError').style.display = 'none';
  document.getElementById('drawerPhoneError').style.display = 'none';

  syncDrawerSuite();
  syncDrawerSummary();

  const overlay = document.getElementById('bookingDrawerOverlay');
  overlay.classList.add('drawerOverlayActive');
  document.body.style.overflow = 'hidden';
}

function closeBookingDrawer() {
  document.getElementById('bookingDrawerOverlay').classList.remove('drawerOverlayActive');
  document.body.style.overflow = 'unset';
}

function syncDrawerSuite() {
  drawerSelectedSuiteClass = document.getElementById('drawerSuiteSelect').value;
  const room = ROOMS_DATA.find(r => r.class === drawerSelectedSuiteClass) || ROOMS_DATA[0];
  
  document.getElementById('drawerPreviewImg').src = room.images[0];
  document.getElementById('drawerPreviewTitle').textContent = room.name;

  const symbol = CURRENCIES[currentCurrency].symbol;
  const rate = CURRENCIES[currentCurrency].rate;
  const suiteRate = Math.round(room.price * rate);
  document.getElementById('drawerPreviewPrice').innerHTML = `${symbol}${suiteRate} <span class="subtext">/ night</span>`;

  syncDrawerSummary();
}

function syncDrawerExtrasCheckedClasses() {
  ['heli', 'chef', 'spa'].forEach(key => {
    const el = document.getElementById(`drawer${key.charAt(0).toUpperCase() + key.slice(1)}Label`);
    if (el) {
      if (drawerExtras[key]) el.classList.add('drawerExtraChecked');
      else el.classList.remove('drawerExtraChecked');
    }
  });
}

function updateDrawerGuests(offset) {
  drawerGuests = Math.min(Math.max(drawerGuests + offset, 1), 6);
  document.getElementById('drawerGuestsVal').textContent = drawerGuests;
  syncDrawerSummary();
}

function updateDrawerRooms(offset) {
  drawerRooms = Math.min(Math.max(drawerRooms + offset, 1), 3);
  document.getElementById('drawerRoomsVal').textContent = drawerRooms;
  syncDrawerSummary();
}

function syncDrawerExtras() {
  drawerExtras.heli = document.getElementById('drawerHeliCheck').checked;
  drawerExtras.chef = document.getElementById('drawerChefCheck').checked;
  drawerExtras.spa = document.getElementById('drawerSpaCheck').checked;

  syncDrawerExtrasCheckedClasses();
  syncDrawerSummary();
}

// Main drawer pricing calculator
function syncDrawerSummary() {
  drawerCheckIn = document.getElementById('drawerCheckIn').value;
  drawerCheckOut = document.getElementById('drawerCheckOut').value;

  const room = ROOMS_DATA.find(r => r.class === drawerSelectedSuiteClass) || ROOMS_DATA[0];
  const rate = CURRENCIES[currentCurrency].rate;
  const symbol = CURRENCIES[currentCurrency].symbol;

  const suiteRate = Math.round(room.price * rate);

  // Nights count
  let nights = 1;
  if (drawerCheckIn && drawerCheckOut) {
    const start = new Date(drawerCheckIn);
    const end = new Date(drawerCheckOut);
    const diff = end.getTime() - start.getTime();
    if (diff > 0) {
      nights = Math.round(diff / 86400000);
    }
  }

  document.getElementById('drawerNightsLabel').textContent = `Total Estimate (${nights} ${nights === 1 ? 'night' : 'nights'})`;

  // Extras cost conversions
  const EXTRAS_PRICES = { heli: 350, chef: 250, spa: 180 };
  const heliCost = Math.round(EXTRAS_PRICES.heli * rate);
  const chefCost = Math.round(EXTRAS_PRICES.chef * rate);
  const spaCost = Math.round(EXTRAS_PRICES.spa * rate);

  document.getElementById('drawerHeliCost').textContent = `+${symbol}${heliCost}`;
  document.getElementById('drawerChefCost').innerHTML = `+${symbol}${chefCost} <span class="smallPrice">/day</span>`;
  document.getElementById('drawerSpaCost').textContent = `+${symbol}${spaCost}`;

  // Totals calculations
  const totalSuiteCost = suiteRate * nights * drawerRooms;
  const totalChefCost = drawerExtras.chef ? chefCost * nights * drawerRooms : 0;
  const totalHeliCost = drawerExtras.heli ? heliCost * drawerGuests : 0;
  const totalSpaCost = drawerExtras.spa ? spaCost * drawerGuests : 0;

  const grandTotal = totalSuiteCost + totalChefCost + totalHeliCost + totalSpaCost;

  document.getElementById('drawerGrandTotal').textContent = `${symbol}${grandTotal}`;
}

// Stateful workflow triggers
function nextDrawerStep() {
  if (drawerStep === 1) {
    drawerCheckIn = document.getElementById('drawerCheckIn').value;
    drawerCheckOut = document.getElementById('drawerCheckOut').value;

    const datesErr = document.getElementById('drawerDatesError');
    datesErr.style.display = 'none';

    if (!drawerCheckIn || !drawerCheckOut) {
      datesErr.textContent = 'Please select both Check-In and Check-Out dates.';
      datesErr.style.display = 'block';
      return;
    }
    if (new Date(drawerCheckOut) <= new Date(drawerCheckIn)) {
      datesErr.textContent = 'Check-Out date must be after Check-In.';
      datesErr.style.display = 'block';
      return;
    }

    drawerStep = 2;
    document.getElementById('bookingStep1').style.display = 'none';
    document.getElementById('bookingStep2').style.display = 'block';
    document.getElementById('drawerBackBtn').style.display = 'inline-flex';
    document.getElementById('drawerStepLabel').textContent = 'Step 2 of 4 • Add-ons';
  } 
  else if (drawerStep === 2) {
    drawerStep = 3;
    document.getElementById('bookingStep2').style.display = 'none';
    document.getElementById('bookingStep3').style.display = 'block';
    document.getElementById('drawerStepLabel').textContent = 'Step 3 of 4 • Payment';
    
    // Set submit button text
    const totalText = document.getElementById('drawerGrandTotal').textContent;
    document.getElementById('drawerNextBtn').textContent = `Authorize ${totalText}`;
  } 
  else if (drawerStep === 3) {
    // Validations inputs
    const guestName = document.getElementById('drawerGuestName').value.trim();
    const guestEmail = document.getElementById('drawerGuestEmail').value.trim();
    const guestPhone = document.getElementById('drawerGuestPhone').value.trim();

    const nameErr = document.getElementById('drawerNameError');
    const emailErr = document.getElementById('drawerEmailError');
    const phoneErr = document.getElementById('drawerPhoneError');

    nameErr.style.display = 'none';
    emailErr.style.display = 'none';
    phoneErr.style.display = 'none';

    let hasErr = false;
    if (!guestName) {
      nameErr.textContent = 'Full name is required.';
      nameErr.style.display = 'block';
      hasErr = true;
    }
    if (!guestEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guestEmail)) {
      emailErr.textContent = 'A valid email is required.';
      emailErr.style.display = 'block';
      hasErr = true;
    }
    if (!guestPhone) {
      phoneErr.textContent = 'Contact number is required.';
      phoneErr.style.display = 'block';
      hasErr = true;
    }

    if (hasErr) return;

    // Generate Success Receipt
    const randNum = Math.floor(10000 + Math.random() * 90000);
    const refCode = `AH-${randNum}`;

    document.getElementById('voucherRefVal').textContent = refCode;

    const room = ROOMS_DATA.find(r => r.class === drawerSelectedSuiteClass) || ROOMS_DATA[0];
    document.getElementById('vouchSuite').textContent = room.name;
    document.getElementById('vouchGuests').textContent = `${drawerGuests} Guests, ${drawerRooms} Suite`;
    document.getElementById('vouchDates').textContent = `${drawerCheckIn} to ${drawerCheckOut}`;
    document.getElementById('vouchTotal').textContent = document.getElementById('drawerGrandTotal').textContent;

    // Set success screens view
    drawerStep = 4;
    document.getElementById('bookingStep3').style.display = 'none';
    document.getElementById('bookingStep4').style.display = 'block';
    
    document.getElementById('drawerFooter').style.display = 'none';
    document.getElementById('drawerSuccessFooter').style.display = 'block';
    document.getElementById('drawerStepLabel').textContent = 'Step 4 of 4 • Confirmed';
  }
}

function prevDrawerStep() {
  if (drawerStep === 2) {
    drawerStep = 1;
    document.getElementById('bookingStep2').style.display = 'none';
    document.getElementById('bookingStep1').style.display = 'block';
    document.getElementById('drawerBackBtn').style.display = 'none';
    document.getElementById('drawerStepLabel').textContent = 'Step 1 of 4 • Details';
  } 
  else if (drawerStep === 3) {
    drawerStep = 2;
    document.getElementById('bookingStep3').style.display = 'none';
    document.getElementById('bookingStep2').style.display = 'block';
    document.getElementById('drawerNextBtn').textContent = 'Continue';
    document.getElementById('drawerStepLabel').textContent = 'Step 2 of 4 • Add-ons';
  }
}

function selectPayment(method) {
  drawerPayment = method;
  document.querySelectorAll('.paymentBtn').forEach(btn => btn.classList.remove('paymentBtnActive'));
  document.getElementById(`pay-${method}`).classList.add('paymentBtnActive');
}

// --------------------------------------------------------------------------
// Verified Reviews Slider
// --------------------------------------------------------------------------
const TESTIMONIALS_DATA = [
  {
    author: 'Lady Evelyn Sterling',
    origin: 'London',
    quote: 'Aetheria Haven defies standard description. The sensation of floating amongst cloud peaks while relaxing on the obsidian sun decks is completely unmatched. The butler service is invisibly efficient.'
  },
  {
    author: 'Dr. Alistair Vance',
    origin: 'Zurich',
    quote: 'The architectural design is a structural marvel. The integration of transparent glass overlays and weightless cantilever decks hanging off the mountain creates a beautiful feeling of suspension.'
  },
  {
    author: 'Aria Chen',
    origin: 'Singapore',
    quote: 'The Zero-Gravity Spa ritual is a restorative experience. Floating in high-salinity warm mineral water surrounded by singing bowl acoustics resolved months of stress in hours. Unbelievable.'
  }
];

let activeTestimonialIndex = 0;

function renderTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  container.innerHTML = TESTIMONIALS_DATA.map((test, i) => `
    <div class="slide" style="display: ${i === activeTestimonialIndex ? 'block' : 'none'};">
      <blockquote class="blockquote">
        &ldquo;${test.quote}&rdquo;
      </blockquote>
      <div class="authorMeta">
        <strong class="authorName">${test.author}</strong>
        <span class="authorOrigin">${test.origin}</span>
      </div>
    </div>
  `).join('');

  document.getElementById('testimonialCounter').textContent = `${activeTestimonialIndex + 1} / ${TESTIMONIALS_DATA.length}`;
}

function prevTestimonial() {
  activeTestimonialIndex = (activeTestimonialIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
  renderTestimonials();
}

function nextTestimonial() {
  activeTestimonialIndex = (activeTestimonialIndex + 1) % TESTIMONIALS_DATA.length;
  renderTestimonials();
}

// Init testimonials draw
setTimeout(renderTestimonials, 100);

// --------------------------------------------------------------------------
// Footer VIP Newsletter
// --------------------------------------------------------------------------
function handleSubscribe(e) {
  e.preventDefault();
  const emailInput = document.getElementById('subscribeEmail');
  const errorEl = document.getElementById('subscribeError');
  const successPanel = document.getElementById('subscriptionSuccess');
  const formEl = document.getElementById('subscribeForm');

  const email = emailInput.value.trim();
  errorEl.style.display = 'none';

  if (!email) {
    errorEl.textContent = 'Please enter your email.';
    errorEl.style.display = 'block';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorEl.textContent = 'A valid email address is required.';
    errorEl.style.display = 'block';
    return;
  }

  // Success
  successPanel.style.display = 'flex';
  formEl.style.display = 'none';
  emailInput.value = '';
}

// Section smooth scrolling anchors offset correction
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const yOffset = -80;
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});
