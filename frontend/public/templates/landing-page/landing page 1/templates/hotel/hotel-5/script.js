/**
 * SUARA ULU WELLNESS & SPA RESORT — INTERACTIVE ENGINE
 * Uluwatu, Bali, Indonesia
 */

// DATA SETS
const SUARA_ROOMS = [
  {
    id: "cliffside-residence",
    name: "The Royal Cliffside Residence",
    subtitle: "Perched 100m atop Uluwatu's sacred ocean limestone cliffs",
    category: "Signature Villa",
    priceUSD: 1450,
    squareMeters: 380,
    maxGuests: 4,
    bedType: "King Master Suite + Private Guest Wing",
    rating: 4.98,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85",
    amenities: ["24-Hour Dedicated Butler", "Private Infinity Plunge Pool", "Bose & Bang Olufsen Acoustics", "Daily In-Villa Organic Breakfast"]
  },
  {
    id: "ocean-pool-villa",
    name: "Oceanfront Sunset Sanctuary Villa",
    subtitle: "Direct front-row vantage point for Bali's most revered sunsets",
    category: "Signature Villa",
    priceUSD: 1150,
    squareMeters: 260,
    maxGuests: 3,
    bedType: "Grand King Bed with Silk Linens",
    rating: 4.96,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
    amenities: ["Private Saltwater Infinity Pool", "Wine Cellar with Curated Grand Crus", "Daily Sound Healing in Villa", "Outdoor Rainfall Shower"]
  },
  {
    id: "garden-pavilion",
    name: "Ayurvedic Botanical Garden Pavilion",
    subtitle: "Enveloped in ancient sacred banyan trees and herbal gardens",
    category: "Sanctuary Suite",
    priceUSD: 820,
    squareMeters: 195,
    maxGuests: 2,
    bedType: "Handcrafted Teak King Bed",
    rating: 4.93,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    amenities: ["Volcanic Stone Hot Bath", "Private Meditation Deck", "In-Suite Steam Room", "Organic Custom Herbal Infusions"]
  },
  {
    id: "waterfront-villa",
    name: "Azure Waterfront Coral Villa",
    subtitle: "Gentle ocean waves soundscape with private cliff-path access",
    category: "Waterfront Villa",
    priceUSD: 1280,
    squareMeters: 310,
    maxGuests: 4,
    bedType: "Two Deluxe King Bedrooms",
    rating: 4.97,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85",
    amenities: ["Direct Private Beach Path Access", "Cliffside Fire Pit Service", "Glass-Bottom Lounge Pavilion", "Chauffeured Buggy Service"]
  },
  {
    id: "canopy-forest-suite",
    name: "Canopy Cloud Penthouse Suite",
    subtitle: "Elevated above the Uluwatu tree canopy with 360-degree vistas",
    category: "Sanctuary Suite",
    priceUSD: 960,
    squareMeters: 220,
    maxGuests: 2,
    bedType: "Floating Circular King Bed",
    rating: 4.95,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    amenities: ["Cedarwood Onsen Soaking Tub", "High-Definition Stargazing Telescope", "Retractable Curved Glass Walls", "Craft Kombucha Bar"]
  },
  {
    id: "presidential-ulu-estate",
    name: "The Uluwatu Presidential Ocean Estate",
    subtitle: "The pinnacle of luxury in Southeast Asia, spanning 850 sqm",
    category: "Signature Villa",
    priceUSD: 3200,
    squareMeters: 850,
    maxGuests: 8,
    bedType: "4 Master Suites with Ocean Balconies",
    rating: 5.00,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
    amenities: ["35m Multi-Level Infinity Pool", "Dedicated Michelin Private Chef", "24/7 Team of 3 Private Butlers", "Private Subterranean Wine Cave"]
  }
];

const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  IDR: { symbol: 'Rp ', rate: 16200.0 }
};

let currentCurrency = localStorage.getItem('suara_currency') || 'USD';
let currentTheme = localStorage.getItem('suara_theme') || 'light';

function formatCurrency(amountUSD) {
  const conf = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const val = amountUSD * conf.rate;
  if (currentCurrency === 'IDR') {
    return `${conf.symbol}${Math.round(val).toLocaleString('id-ID')}`;
  }
  return `${conf.symbol}${Math.round(val).toLocaleString('en-US')}`;
}

// TOAST HELPER
function showToast(message) {
  const toast = document.getElementById('suToast');
  const msgEl = document.getElementById('toastMessage');
  if (toast && msgEl) {
    msgEl.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  }
}

// THEME TOGGLE
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('suara_theme', currentTheme);
  initTheme();
}

// CURRENCY SELECT
function initCurrency() {
  const select = document.getElementById('currencySelect');
  if (select) {
    select.value = currentCurrency;
    select.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      localStorage.setItem('suara_currency', currentCurrency);
      renderRooms();
      updateModalBill();
    });
  }
}

// SCROLL HEADER
window.addEventListener('scroll', () => {
  const header = document.getElementById('suHeader');
  if (header) {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// ACCOMMODATIONS RENDER
let currentCategory = 'all';

function renderRooms() {
  const grid = document.getElementById('suitesGrid');
  if (!grid) return;

  const filtered = currentCategory === 'all' 
    ? SUARA_ROOMS 
    : SUARA_ROOMS.filter(r => r.category.toLowerCase().includes(currentCategory.toLowerCase()));

  grid.innerHTML = filtered.map(room => `
    <div class="glass-panel card-elevation-3d sheen-container" style="border-radius: 28px; background: var(--bg-card); overflow: hidden; display: flex; flex-direction: column; border: 1px solid var(--border-luxury);">
      
      <!-- Top Arched Photo -->
      <div style="position: relative; height: 280px; margin: 0.85rem 0.85rem 0 0.85rem; overflow: hidden;">
        <img src="${room.image}" alt="${room.name}" class="arch-top" style="width: 100%; height: 100%; object-fit: cover;">
        
        <div style="position: absolute; top: 1rem; left: 1rem; background: rgba(13,12,10,0.8); backdrop-filter: blur(10px); color: var(--accent-gold); padding: 0.35rem 0.9rem; border-radius: 9999px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; border: 1px solid rgba(216,183,141,0.3);">
          ${room.category}
        </div>

        <div style="position: absolute; top: 1rem; right: 1rem; background: rgba(13,12,10,0.8); backdrop-filter: blur(10px); color: #FFF; padding: 0.35rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; display: flex; align-items: center; gap: 0.3rem;">
          <span style="color: var(--accent-gold);">★</span> ${room.rating.toFixed(2)} <span style="opacity: 0.6;">(${room.reviews})</span>
        </div>
      </div>

      <!-- Details -->
      <div style="padding: 1.6rem; display: flex; flex-direction: column; flex-grow: 1;">
        <h3 style="font-size: 1.48rem; font-weight: 600; margin-bottom: 0.35rem; color: var(--text-primary); font-family: var(--font-serif);">${room.name}</h3>
        <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 1.2rem; min-height: 38px; line-height: 1.5;">${room.subtitle}</p>

        <!-- Specs -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; padding: 0.85rem 0.5rem; background: var(--bg-secondary); border-radius: 14px; margin-bottom: 1.2rem; text-align: center;">
          <div><strong style="font-size: 0.76rem; color: var(--text-primary); display: block;">${room.squareMeters} m²</strong><span style="font-size: 0.7rem; color: var(--text-muted);">Area</span></div>
          <div><strong style="font-size: 0.76rem; color: var(--text-primary); display: block;">${room.maxGuests} Guests</strong><span style="font-size: 0.7rem; color: var(--text-muted);">Capacity</span></div>
          <div><strong style="font-size: 0.76rem; color: var(--text-primary); display: block;">King Suite</strong><span style="font-size: 0.7rem; color: var(--text-muted);">Bedding</span></div>
        </div>

        <!-- Amenities -->
        <div style="display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 1.5rem; flex-grow: 1;">
          ${room.amenities.map(a => `
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-secondary);">
              <span style="color: var(--accent-gold); font-size: 0.8rem;">✓</span>
              <span>${a}</span>
            </div>
          `).join('')}
        </div>

        <!-- Price & Trigger -->
        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1.2rem; border-top: 1px solid var(--border-subtle); margin-top: auto;">
          <div>
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted);">Starting From</div>
            <div style="font-size: 1.45rem; font-weight: 700; color: var(--accent-gold); font-family: var(--font-serif);">${formatCurrency(room.priceUSD)} <span style="font-size: 0.76rem; font-family: var(--font-sans); color: var(--text-muted); font-weight: 400;">/ night</span></div>
          </div>
          <button onclick="openBookingModal('${room.id}')" class="btn-gold" style="padding: 0.65rem 1.3rem; font-size: 0.76rem;">
            <span>Reserve</span> →
          </button>
        </div>

      </div>
    </div>
  `).join('');
}

// FILTER TABS
function setCategoryFilter(cat, btnElement) {
  currentCategory = cat;
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.style.background = 'transparent';
    btn.style.color = 'var(--text-primary)';
    btn.style.fontWeight = '500';
  });
  if (btnElement) {
    btnElement.style.background = 'var(--accent-gold)';
    btnElement.style.color = '#0D0C0A';
    btnElement.style.fontWeight = '600';
  }
  renderRooms();
}

// BOOKING MODAL LOGIC
let selectedRoomIdForModal = 'cliffside-residence';

function openBookingModal(roomId = 'cliffside-residence') {
  selectedRoomIdForModal = roomId;
  const select = document.getElementById('modalRoomSelect');
  if (select) select.value = selectedRoomIdForModal;
  
  document.getElementById('bookingFormView').style.display = 'block';
  document.getElementById('bookingSuccessView').style.display = 'none';
  document.getElementById('bookingModal').classList.add('active');
  updateModalBill();
}

function closeBookingModal() {
  document.getElementById('bookingModal').classList.remove('active');
}

function updateModalBill() {
  const select = document.getElementById('modalRoomSelect');
  if (!select) return;
  const room = SUARA_ROOMS.find(r => r.id === select.value) || SUARA_ROOMS[0];

  const checkIn = new Date(document.getElementById('modalCheckIn').value || '2026-09-15');
  const checkOut = new Date(document.getElementById('modalCheckOut').value || '2026-09-19');
  const diffTime = Math.abs(checkOut - checkIn);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 4);

  const roomTotal = room.priceUSD * nights;

  let addOns = 0;
  if (document.getElementById('addonMercedes')?.checked) addOns += 220;
  if (document.getElementById('addonDom')?.checked) addOns += 480;
  if (document.getElementById('addonSpa')?.checked) addOns += (350 * nights);

  const subtotal = roomTotal + addOns;
  const tax = subtotal * 0.15;
  const grand = subtotal + tax;

  document.getElementById('billNights').textContent = `${nights} Nights`;
  document.getElementById('billRoomRate').textContent = formatCurrency(roomTotal);
  document.getElementById('billAddons').textContent = formatCurrency(addOns);
  document.getElementById('billTax').textContent = formatCurrency(tax);
  document.getElementById('billGrandTotal').textContent = formatCurrency(grand);
}

// SUBMIT SUITE RESERVATION
function handleBookingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('guestName').value;
  const email = document.getElementById('guestEmail').value;
  const room = SUARA_ROOMS.find(r => r.id === document.getElementById('modalRoomSelect').value) || SUARA_ROOMS[0];
  const code = 'SU-' + Math.floor(100000 + Math.random() * 900000);

  document.getElementById('successCode').textContent = code;
  document.getElementById('successGuest').textContent = `Om Swastyastu, ${name}`;
  document.getElementById('successRoom').textContent = room.name;

  document.getElementById('bookingFormView').style.display = 'none';
  document.getElementById('bookingSuccessView').style.display = 'block';

  showToast(`Sanctuary Reservation ${code} Confirmed!`);
}

// DINING MODAL
function openDiningModal(venueName = 'Amarta Cliff Lounge & Degustation') {
  document.getElementById('diningVenueTitle').textContent = venueName;
  document.getElementById('diningFormView').style.display = 'block';
  document.getElementById('diningSuccessView').style.display = 'none';
  document.getElementById('diningModal').classList.add('active');
}

function closeDiningModal() {
  document.getElementById('diningModal').classList.remove('active');
}

function handleDiningSubmit(e) {
  e.preventDefault();
  const code = 'DINE-' + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('diningSuccessCode').textContent = code;
  document.getElementById('diningFormView').style.display = 'none';
  document.getElementById('diningSuccessView').style.display = 'block';
  showToast(`Table confirmed! Reservation code: ${code}`);
}

// SPA MODAL
function openSpaModal(ritualName = 'Sacred Shirodhara & Chakra Realignment') {
  document.getElementById('spaRitualTitle').textContent = ritualName;
  document.getElementById('spaFormView').style.display = 'block';
  document.getElementById('spaSuccessView').style.display = 'none';
  document.getElementById('spaModal').classList.add('active');
}

function closeSpaModal() {
  document.getElementById('spaModal').classList.remove('active');
}

function handleSpaSubmit(e) {
  e.preventDefault();
  const code = 'SPA-' + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('spaSuccessCode').textContent = code;
  document.getElementById('spaFormView').style.display = 'none';
  document.getElementById('spaSuccessView').style.display = 'block';
  showToast(`Spa Ritual confirmed! Voucher code: ${code}`);
}

// GALLERY LIGHTBOX
const GALLERY_PHOTOS = [
  { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85", title: "Cantilevered Infinity Pool at Twilight", cat: "Sanctuary" },
  { url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85", title: "Royal Cliffside Master Suite", cat: "Villas" },
  { url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85", title: "Amarta Cliff Tasting Degustation", cat: "Dining" },
  { url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=85", title: "Tibetan Sound Floatation Sanctuary", cat: "Wellness" },
  { url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85", title: "The Subterranean Wine Cave Vault", cat: "Dining" },
  { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85", title: "Ayurvedic Botanical Courtyard", cat: "Wellness" }
];

let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightbox();
  document.getElementById('galleryLightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('galleryLightbox').style.display = 'none';
}

function nextLightbox(e) {
  if (e) e.stopPropagation();
  currentLightboxIndex = (currentLightboxIndex + 1) % GALLERY_PHOTOS.length;
  updateLightbox();
}

function prevLightbox(e) {
  if (e) e.stopPropagation();
  currentLightboxIndex = (currentLightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
  updateLightbox();
}

function updateLightbox() {
  const item = GALLERY_PHOTOS[currentLightboxIndex];
  document.getElementById('lightboxImg').src = item.url;
  document.getElementById('lightboxTitle').textContent = item.title;
  document.getElementById('lightboxCat').textContent = item.cat;
}

// NEWSLETTER
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('newsletterEmail');
  if (input && input.value) {
    showToast('You have been warmly subscribed to The Sanctuary Journal.');
    input.value = '';
  }
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCurrency();
  renderRooms();

  // Populate room select in modal
  const select = document.getElementById('modalRoomSelect');
  if (select) {
    select.innerHTML = SUARA_ROOMS.map(r => `
      <option value="${r.id}">${r.name} — ${formatCurrency(r.priceUSD)} / night</option>
    `).join('');
    select.addEventListener('change', updateModalBill);
  }

  // Bind change events to modal inputs for live calculation
  ['modalCheckIn', 'modalCheckOut', 'addonMercedes', 'addonDom', 'addonSpa'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updateModalBill);
  });
});
