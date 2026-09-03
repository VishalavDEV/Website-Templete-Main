/* ══════════════════════════════════════════════════
   VillaBliss — Luxury Mediterranean Resort Script
   ══════════════════════════════════════════════════ */

const roomsData = [
  {
    id: 1,
    name: "Grand Mediterranean Living Suite",
    category: "Living area",
    subtitle: "Airy open-concept design with panoramic estate views",
    description: "Designed with natural stone finishes, handcrafted teak woodwork, and plush lounge furnishings. Features floor-to-ceiling glass doors opening directly to the private pool terrace.",
    pricePerNight: 650,
    capacity: "6 Guests",
    size: "140 m²",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Sonos Sound System", "Private Sunken Lounge", "Fireplace", "High-speed Wi-Fi 6", "Butler Service"]
  },
  {
    id: 2,
    name: "Executive Cedar Studio",
    category: "Work space",
    subtitle: "Quiet acoustic-treated sanctuary for focus and creation",
    description: "Equipped with ergonomic Herman Miller seating, dual 4K monitors, artisan espresso bar, and private garden patio for peaceful breaks between productive sessions.",
    pricePerNight: 480,
    capacity: "2 Guests",
    size: "65 m²",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Gigabit Fiber Optic", "Espresso Bar", "Ergonomic Setup", "Sound Insulation", "Video Conference Suite"]
  },
  {
    id: 3,
    name: "Canopy Royal Master Suite",
    category: "Bedroom",
    subtitle: "Crisp Egyptian cotton linens and ambient evening lighting",
    description: "An oasis of restorative sleep featuring custom architectural canopy framing, marble en-suite bathroom with deep soaking stone bathtub, and private sunrise balcony.",
    pricePerNight: 780,
    capacity: "2 Guests",
    size: "95 m²",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Freestanding Soaking Tub", "Pillow Menu", "Walk-in Dressing Room", "Dyson Supersonic Care", "Private Terrace"]
  },
  {
    id: 4,
    name: "Artisan Al Fresco Dining Pavilion",
    category: "Dining room",
    subtitle: "Gourmet chef kitchen and chandelier-lit indoor/outdoor dining",
    description: "Handmade 12-seat solid walnut dining table accompanied by custom crystal lighting, integrated wine cellar, and dedicated private chef prep kitchen.",
    pricePerNight: 590,
    capacity: "12 Guests",
    size: "110 m²",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Sub-Zero Wine Climate Cellar", "Gourmet Induction Cooktop", "Private Sommelier Service", "Indoor-Outdoor Terrace", "Chef Station"]
  },
  {
    id: 5,
    name: "Infinity Azure Pool Villa",
    category: "Private Pool",
    subtitle: "Sunken lounge cabanas and temperature-controlled salt water",
    description: "Private heated infinity pool surrounded by sun loungers, outdoor rain showers, and evening fire pits overlooking the serene landscape.",
    pricePerNight: 950,
    capacity: "8 Guests",
    size: "220 m²",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Heated Saltwater Infinity Pool", "Sunken Cocktail Pit", "Outdoor Rain Shower", "Daybed Cabanas", "Floating Breakfast Service"]
  }
];

const experiencesData = [
  {
    title: "Snorkeling & Diving",
    category: "Marine Life",
    icon: "bi-water",
    duration: "4 Hours",
    price: "Included / On Request",
    desc: "Private chartered boat expedition with certified PADI dive masters to pristine coral reefs and hidden sea caves.",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Outdoor adventures",
    category: "Exploration",
    icon: "bi-compass",
    duration: "3-5 Hours",
    price: "Gear Included",
    desc: "Guided mountain biking, coastal cliff trekking, and secluded beach picnics curated by our local outdoor specialists.",
    img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Wellness & Spa",
    category: "Restoration",
    icon: "bi-flower1",
    duration: "Flexible",
    price: "Signature Rituals",
    desc: "Bespoke botanical massages, sound healing baths, morning yoga sessions overlooking the infinity pool, and hydrotherapy.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Shopping & Dining",
    category: "Culinary",
    icon: "bi-cup-hot",
    duration: "Evening",
    price: "Curated Tour",
    desc: "VIP access to local artisanal markets, Michelin-starred wine pairings, and private sommelier tastings directly in the villa.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cultural landmarks",
    category: "Heritage",
    icon: "bi-bank",
    duration: "Half Day",
    price: "Chauffeur Included",
    desc: "Chauffeured historical tours to ancient Mediterranean architecture, historic olive estates, and authentic local crafts.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sunset Yacht Charters",
    category: "Private Cruise",
    icon: "bi-tsunami",
    duration: "3 Hours",
    price: "Private Charter",
    desc: "Golden hour champagne cruises along the coastline with fresh seafood appetizers and panoramic sunset vistas.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
  }
];

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
  renderRooms('All');
  renderExperiences();
  setupHeaderScroll();
  setupTabs();
  setupMobileDrawer();
});

// Header scroll effect
function setupHeaderScroll() {
  const header = document.getElementById('vbHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile drawer toggle
function setupMobileDrawer() {
  const toggle = document.getElementById('vbMobileToggle');
  const drawer = document.getElementById('vbMobileDrawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('active');
    });
  }
}

// Category Tabs
function setupTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');
      renderRooms(cat);
    });
  });
}

// Render Rooms
function renderRooms(category) {
  const container = document.getElementById('roomGrid');
  if (!container) return;

  const filtered = category === 'All' 
    ? roomsData 
    : roomsData.filter(r => r.category.toLowerCase() === category.toLowerCase());

  container.innerHTML = filtered.map(room => `
    <div class="room-card">
      <div class="room-card-img-wrap">
        <img src="${room.img}" alt="${room.name}">
        <div class="room-card-overlay"></div>
        <span class="room-category-pill">${room.category}</span>
        <div class="room-card-info">
          <div class="room-specs">
            <span><i class="bi bi-people"></i> ${room.capacity}</span>
            <span>${room.size}</span>
          </div>
          <h3 class="room-card-title">${room.name}</h3>
        </div>
      </div>
      <div class="room-card-footer">
        <div class="price-tag">
          $${room.pricePerNight} <span>/ night</span>
        </div>
        <div class="room-actions">
          <button class="btn-detail" onclick="openRoomModal(${room.id})">Details</button>
          <button class="btn-book-icon" onclick="openBookingModal(${room.id})" title="Reserve">
            <i class="bi bi-arrow-up-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Experiences
function renderExperiences() {
  const container = document.getElementById('experiencesGrid');
  if (!container) return;

  container.innerHTML = experiencesData.map(exp => `
    <div class="exp-card">
      <div class="exp-card-img-wrap">
        <img src="${exp.img}" alt="${exp.title}">
        <div class="exp-card-overlay"></div>
        <span class="exp-badge">${exp.category}</span>
        <div class="exp-duration"><i class="bi bi-clock"></i> ${exp.duration}</div>
      </div>
      <div class="exp-card-body">
        <div class="exp-title-row">
          <i class="bi ${exp.icon}"></i>
          <span>${exp.title}</span>
        </div>
        <p>${exp.desc}</p>
        <div class="exp-card-foot">
          <span>${exp.price}</span>
          <button class="btn-inquire" onclick="openBookingModal()">Inquire <i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

// Modals
function openBookingModal(roomId) {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('active');
    if (roomId) {
      document.getElementById('modalRoomSelect').value = roomId;
    }
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.remove('active');
}

function openRoomModal(roomId) {
  const room = roomsData.find(r => r.id === roomId);
  if (!room) return;

  const content = document.getElementById('roomDetailContent');
  content.innerHTML = `
    <div style="aspect-ratio: 16/9; overflow: hidden; position: relative;">
      <img src="${room.img}" alt="${room.name}" style="width: 100%; height: 100%; object-fit: cover;">
      <div style="position: absolute; bottom: 16px; left: 24px; color: #fff;">
        <span class="room-category-pill">${room.category}</span>
        <h2 style="font-family: var(--font-serif); font-size: 26px; margin-top: 8px;">${room.name}</h2>
      </div>
    </div>
    <div style="padding: 32px;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-cream); padding-bottom: 16px; margin-bottom: 16px;">
        <p style="font-size: 13px; color: var(--color-clay); text-transform: uppercase; font-weight: 700;">${room.subtitle}</p>
        <div class="price-tag">$${room.pricePerNight} <span>/ night</span></div>
      </div>
      <p style="font-size: 14px; color: var(--color-muted); line-height: 1.8; margin-bottom: 20px;">${room.description}</p>
      <div style="margin-bottom: 24px;">
        <h5 style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700; margin-bottom: 12px;">Included Signature Amenities</h5>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${room.amenities.map(a => `<span style="background: var(--bg-cream); padding: 6px 14px; border-radius: 50px; font-size: 11px; font-weight: 600;"><i class="bi bi-stars"></i> ${a}</span>`).join('')}
        </div>
      </div>
      <button class="vb-btn-reserve" style="width: 100%; justify-content: center; padding: 14px;" onclick="closeRoomModal(); openBookingModal(${room.id});">
        Reserve This Suite
      </button>
    </div>
  `;

  document.getElementById('roomModal').classList.add('active');
}

function closeRoomModal() {
  document.getElementById('roomModal').classList.remove('active');
}

// Hero Search Submit
function handleHeroSearch(e) {
  e.preventDefault();
  const cat = document.getElementById('searchCategory').value;
  const matched = roomsData.find(r => r.category.toLowerCase() === cat.toLowerCase());
  openBookingModal(matched ? matched.id : 1);
}

// Submit Booking
function submitBooking(e) {
  e.preventDefault();
  const name = document.getElementById('modalGuestName').value;
  const ref = 'VB-' + Math.floor(100000 + Math.random() * 900000);
  
  const content = document.getElementById('bookingContent');
  content.innerHTML = `
    <div style="padding: 40px; text-align: center;">
      <div style="width: 60px; height: 60px; border-radius: 50%; background: #e6f4ea; color: #137333; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 16px;">
        ✓
      </div>
      <h3 style="font-family: var(--font-serif); font-size: 24px;">Thank you, ${name}!</h3>
      <p style="font-size: 14px; color: var(--color-muted); margin-top: 8px;">
        Your reservation reference is <strong style="color: var(--color-clay);">${ref}</strong>.
      </p>
      <p style="font-size: 12px; color: var(--color-muted); margin-top: 4px;">
        We have reserved your sanctuary and our concierge will contact you shortly.
      </p>
      <button class="vb-btn-reserve" style="margin-top: 24px; padding: 12px 30px;" onclick="closeBookingModal()">
        Return to VillaBliss
      </button>
    </div>
  `;
}

// Newsletter
function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById('priveEmail');
  if (input) {
    alert('Thank you for subscribing to the VillaBliss Privé list.');
    input.value = '';
  }
}

// Smooth scroll helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
