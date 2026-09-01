/* Public View Renders - Home, Discovery, Profile, Specialties, Health Hub, Emergency, About, Contact */

window.PulseCarePublicViews = {
  renderHome() {
    const doctors = window.PulseCareApp.state.doctors.slice(0, 3);
    const specialties = window.PulseCareApp.state.specialties;
    const articles = window.PulseCareApp.state.articles;

    return `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div>
              <div class="hero-badge">
                <i class="fas fa-shield-pulse"></i> Next-Gen Healthcare Platform
              </div>
              <h1 class="hero-title">Healthcare that fits your life.</h1>
              <p class="hero-subtitle">
                Discover top specialists, compare availability, book instant video or in-clinic consultations, and securely track your health vault—all in one place.
              </p>
              <div class="flex gap-4" style="margin-top:2rem;">
                <a href="#find-doctor" class="btn btn-primary btn-lg"><i class="fas fa-search"></i> Find a Doctor</a>
                <a href="#emergency" class="btn btn-emergency btn-lg"><i class="fas fa-phone-volume"></i> 24/7 Emergency Care</a>
              </div>
            </div>

            <!-- Smart Doctor Search Card inside Hero -->
            <div class="smart-search-card">
              <h3 style="margin-bottom:0.3rem; font-size:1.3rem;">Instant Slot Finder</h3>
              <p style="font-size:0.85rem; color:var(--gray-500); margin-bottom:1.2rem;">Find available doctors in 30 seconds</p>
              <div class="form-group" style="margin-bottom:0.85rem;">
                <label class="form-label">Specialty or Doctor Name</label>
                <input type="text" id="hero-search-query" class="form-input" placeholder="e.g. Cardiology, Dr. Priya Sharma">
              </div>
              <div class="form-group" style="margin-bottom:1.2rem;">
                <label class="form-label">Preferred Location</label>
                <select id="hero-search-location" class="form-select">
                  <option value="All">All Locations</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>
              <button class="btn btn-primary" style="width:100%;" onclick="PulseCarePublicViews.executeHeroSearch()">
                <i class="fas fa-search"></i> Search Available Slots
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Access Bar -->
      <div class="container">
        <div class="quick-access-bar">
          <div class="quick-card" onclick="window.location.hash = '#find-doctor'">
            <div class="quick-icon"><i class="fas fa-user-md"></i></div>
            <div>
              <div class="quick-title">Find a Doctor</div>
              <div class="quick-desc">Search by specialty & rating</div>
            </div>
          </div>
          <div class="quick-card" onclick="PulseCareBookingEngine.openBookingModal('doc-1')">
            <div class="quick-icon"><i class="fas fa-calendar-check"></i></div>
            <div>
              <div class="quick-title">Book Appointment</div>
              <div class="quick-desc">Instant online slot booking</div>
            </div>
          </div>
          <div class="quick-card" onclick="window.location.hash = '#patient-vault'">
            <div class="quick-icon"><i class="fas fa-vault"></i></div>
            <div>
              <div class="quick-title">Health Vault</div>
              <div class="quick-desc">Access reports & prescriptions</div>
            </div>
          </div>
          <div class="quick-card" onclick="window.location.hash = '#emergency'">
            <div class="quick-icon" style="background:var(--emergency-bg); color:var(--emergency-red);"><i class="fas fa-ambulance"></i></div>
            <div>
              <div class="quick-title">Emergency 24/7</div>
              <div class="quick-desc">Immediate medical assistance</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Specialties -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div class="section-tagline">Interactive Healthcare</div>
            <h2 class="section-title">Explore Specialties</h2>
            <p class="section-subtitle">Click on a medical domain to discover specialized treatments and matching doctors.</p>
          </div>
          <div class="grid grid-cols-4 gap-6">
            ${specialties.map(s => `
              <div class="specialty-card" onclick="window.location.hash = '#specialties'">
                <div class="specialty-icon-circle"><i class="fas ${s.icon}"></i></div>
                <h3 style="font-size:1.2rem; margin-bottom:0.4rem;">${s.emoji} ${s.name}</h3>
                <p style="font-size:0.85rem; color:var(--gray-600);">${s.description.slice(0, 60)}...</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Featured Doctors -->
      <section class="section" style="background:var(--primary-50);">
        <div class="container">
          <div class="section-header">
            <div class="section-tagline">Top Rated Specialists</div>
            <h2 class="section-title">Meet Our Leading Physicians</h2>
            <p class="section-subtitle">Highly qualified medical experts committed to personalized patient care.</p>
          </div>
          <div>
            ${doctors.map(d => this.renderDoctorCardMarkup(d)).join('')}
          </div>
          <div style="text-align:center; margin-top:2rem;">
            <a href="#find-doctor" class="btn btn-navy"><i class="fas fa-th-list"></i> View All Doctors & Filters</a>
          </div>
        </div>
      </section>

      <!-- Health Knowledge Hub Teaser -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div class="section-tagline">Preventive Wellness</div>
            <h2 class="section-title">Health Knowledge Hub</h2>
            <p class="section-subtitle">Expert articles written by our medical specialists.</p>
          </div>
          <div class="grid grid-cols-3 gap-6">
            ${articles.map(art => `
              <div class="hub-card">
                <img src="${art.image}" alt="${art.title}" class="hub-img">
                <div class="hub-body">
                  <span class="hub-category">${art.category}</span>
                  <h3 class="hub-title">${art.title}</h3>
                  <p style="font-size:0.88rem; color:var(--gray-600); margin-bottom:1rem;">${art.snippet}</p>
                  <div class="hub-meta">
                    <span>By ${art.author}</span>
                    <span><i class="far fa-clock"></i> ${art.readTime}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },

  renderFindDoctor() {
    const doctors = window.PulseCareSearchFilter.init(window.PulseCareApp.state.doctors).filterDoctors();

    return `
      <section class="section">
        <div class="container">
          <div class="section-header" style="margin-bottom:2rem;">
            <h2 class="section-title">Doctor Discovery</h2>
            <p class="section-subtitle">Filter by specialty, experience, location, and fee to find your ideal physician.</p>
          </div>

          <div class="discovery-layout">
            <!-- Filter Sidebar -->
            <div class="filter-sidebar">
              <div class="filter-header">
                <h3 class="filter-title"><i class="fas fa-sliders-h"></i> Filters</h3>
                <button class="btn btn-outline btn-sm" onclick="PulseCarePublicViews.resetSearchFilters()">Reset</button>
              </div>

              <div class="filter-group">
                <div class="filter-group-title">Search Keyword</div>
                <input type="text" class="form-input" id="filter-query-input" placeholder="Doctor name or hospital..." oninput="PulseCarePublicViews.handleFilterChange('query', this.value)">
              </div>

              <div class="filter-group">
                <div class="filter-group-title">Specialty</div>
                <select class="form-select" id="filter-specialty-select" onchange="PulseCarePublicViews.handleFilterChange('specialty', this.value)">
                  <option value="All">All Specialties</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Dermatology">Dermatology</option>
                </select>
              </div>

              <div class="filter-group">
                <div class="filter-group-title">Location</div>
                <select class="form-select" id="filter-location-select" onchange="PulseCarePublicViews.handleFilterChange('location', this.value)">
                  <option value="All">All Locations</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>

              <div class="filter-group">
                <div class="filter-group-title">Gender</div>
                <label class="checkbox-label">
                  <input type="radio" name="gender-filter" value="All" checked onchange="PulseCarePublicViews.handleFilterChange('gender', 'All')"> All Genders
                </label>
                <label class="checkbox-label">
                  <input type="radio" name="gender-filter" value="Female" onchange="PulseCarePublicViews.handleFilterChange('gender', 'Female')"> Female Doctors
                </label>
                <label class="checkbox-label">
                  <input type="radio" name="gender-filter" value="Male" onchange="PulseCarePublicViews.handleFilterChange('gender', 'Male')"> Male Doctors
                </label>
              </div>

              <div class="filter-group">
                <div class="filter-group-title">Max Consultation Fee</div>
                <input type="range" min="30" max="200" step="10" value="200" style="width:100%; accent-color:var(--teal-500);" oninput="document.getElementById('fee-val-display').innerText = '$' + this.value; PulseCarePublicViews.handleFilterChange('maxFee', parseInt(this.value))">
                <div style="font-size:0.85rem; text-align:right; font-weight:700;" id="fee-val-display">Up to $200</div>
              </div>
            </div>

            <!-- Doctor List -->
            <div id="doctor-list-results">
              ${doctors.length > 0 ? doctors.map(d => this.renderDoctorCardMarkup(d)).join('') : `
                <div class="card" style="padding:3rem; text-align:center; color:var(--gray-500);">
                  <i class="fas fa-user-slash" style="font-size:3rem; margin-bottom:1rem;"></i>
                  <h3>No Doctors Found Matching Filters</h3>
                  <p>Try widening your search radius or resetting filters.</p>
                </div>
              `}
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderDoctorProfile(doctorId) {
    const doc = window.PulseCareApp.state.doctors.find(d => d.id === doctorId) || window.PulseCareApp.state.doctors[0];

    return `
      <section class="section">
        <div class="container">
          <!-- Doctor Profile Header -->
          <div class="doctor-profile-hero">
            <img src="${doc.avatar}" alt="${doc.name}" class="doctor-profile-img">
            <div>
              <span class="badge badge-teal">${doc.specialty}</span>
              <h2 style="font-size:2rem; margin-top:0.3rem;">${doc.name}</h2>
              <p style="color:var(--gray-600); font-weight:600; margin-bottom:0.75rem;">${doc.title}</p>
              
              <div class="doctor-meta-list">
                <span class="doctor-meta-item"><i class="fas fa-briefcase"></i> ${doc.experience} Years Exp</span>
                <span class="doctor-meta-item"><i class="fas fa-star" style="color:#f59e0b;"></i> ${doc.rating} (${doc.reviewsCount} reviews)</span>
                <span class="doctor-meta-item"><i class="fas fa-language"></i> ${doc.languages.join(', ')}</span>
              </div>
              <p style="font-size:0.9rem; color:var(--gray-600);"><i class="fas fa-hospital"></i> ${doc.hospital}</p>
            </div>
            
            <div style="text-align:right;">
              <div class="doctor-fee" style="font-size:1.8rem; margin-bottom:0.75rem;">$${doc.fee} <span style="font-size:0.85rem; color:var(--gray-500); font-weight:normal;">/ session</span></div>
              <button class="btn btn-primary btn-lg" onclick="PulseCareBookingEngine.openBookingModal('${doc.id}')">
                <i class="fas fa-calendar-alt"></i> Book Appointment Now
              </button>
            </div>
          </div>

          <!-- Doctor Profile Tabs / Grid -->
          <div class="grid grid-cols-3 gap-6">
            <div style="grid-column: span 2;">
              <div class="card" style="padding:1.75rem; margin-bottom:1.5rem;">
                <h3 style="margin-bottom:0.75rem; font-size:1.25rem;">About Doctor</h3>
                <p style="color:var(--gray-700); line-height:1.6;">${doc.about}</p>
              </div>

              <div class="card" style="padding:1.75rem; margin-bottom:1.5rem;">
                <h3 style="margin-bottom:0.75rem; font-size:1.25rem;">Education & Training</h3>
                <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem;">
                  ${doc.education.map(e => `<li style="font-size:0.92rem; color:var(--gray-700);"><i class="fas fa-graduation-cap" style="color:var(--teal-500);"></i> ${e}</li>`).join('')}
                </ul>
              </div>

              <div class="card" style="padding:1.75rem;">
                <h3 style="margin-bottom:0.75rem; font-size:1.25rem;">Patient Experience & Reviews</h3>
                <div class="flex items-center gap-4" style="margin-bottom:1.2rem; background:var(--primary-50); padding:1rem; border-radius:var(--radius-md);">
                  <div style="font-size:2.5rem; font-weight:800; color:var(--primary-900);">${doc.rating}</div>
                  <div>
                    <div class="rating-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <div style="font-size:0.85rem; color:var(--gray-600);">Based on ${doc.reviewsCount} verified patient consultations</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dynamic Live Slot Picker Card -->
            <div>
              <div class="card" style="padding:1.5rem; position:sticky; top:90px;">
                <h3 style="font-size:1.15rem; margin-bottom:0.4rem;"><i class="far fa-clock"></i> Today's Live Slots</h3>
                <p style="font-size:0.82rem; color:var(--gray-500); margin-bottom:1rem;">Select a slot to reserve instantly</p>
                <div class="slots-grid" style="grid-template-columns: 1fr 1fr;">
                  ${doc.todaySlots.map(slot => `
                    <div onclick="PulseCareBookingEngine.openBookingModal('${doc.id}', 'Today', '${slot}')" class="slot-chip">
                      ${slot}
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderSpecialties() {
    const specialties = window.PulseCareApp.state.specialties;
    return `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Specialty Explorer</h2>
            <p class="section-subtitle">Learn about our core clinical departments and available procedures.</p>
          </div>
          <div class="grid grid-cols-2 gap-6">
            ${specialties.map(s => `
              <div class="card" style="padding:2rem;">
                <div class="flex items-center gap-3" style="margin-bottom:1rem;">
                  <div class="specialty-icon-circle" style="margin:0;"><i class="fas ${s.icon}"></i></div>
                  <div>
                    <h3 style="font-size:1.3rem;">${s.emoji} ${s.name}</h3>
                    <p style="font-size:0.85rem; color:var(--teal-600); font-weight:600;">Full Clinical Department</p>
                  </div>
                </div>
                <p style="color:var(--gray-700); margin-bottom:1rem; line-height:1.6;">${s.description}</p>
                
                <h4 style="font-size:0.9rem; margin-bottom:0.4rem; color:var(--primary-900);">Available Treatments</h4>
                <div class="flex gap-2" style="flex-wrap:wrap; margin-bottom:1.2rem;">
                  ${s.treatments.map(t => `<span class="badge badge-teal">${t}</span>`).join('')}
                </div>

                <a href="#find-doctor" class="btn btn-outline btn-sm"><i class="fas fa-user-md"></i> Find ${s.name} Doctors</a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },

  renderHealthHub() {
    const articles = window.PulseCareApp.state.articles;
    return `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Health Knowledge Hub</h2>
            <p class="section-subtitle">Evidence-based health guides and medical insights.</p>
          </div>
          <div class="grid grid-cols-3 gap-6">
            ${articles.map(art => `
              <div class="hub-card">
                <img src="${art.image}" alt="${art.title}" class="hub-img">
                <div class="hub-body">
                  <span class="hub-category">${art.category}</span>
                  <h3 class="hub-title">${art.title}</h3>
                  <p style="font-size:0.88rem; color:var(--gray-600); margin-bottom:1rem;">${art.snippet}</p>
                  <div class="hub-meta">
                    <span>By ${art.author}</span>
                    <span><i class="far fa-clock"></i> ${art.readTime}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },

  renderEmergency() {
    return `
      <section class="section">
        <div class="container">
          <div class="emergency-banner">
            <div style="font-size:3rem; margin-bottom:0.5rem;">🚨</div>
            <h1 class="emergency-title">24/7 Emergency Medical Response</h1>
            <p style="font-size:1.2rem; max-width:700px; margin:0 auto 1.5rem auto;">
              If you or someone around you is experiencing severe chest pain, breathlessness, or traumatic injury, request emergency dispatch immediately.
            </p>
            <div class="flex justify-center gap-4">
              <a href="tel:108" class="btn btn-emergency btn-lg" style="background:var(--white); color:var(--emergency-red); font-weight:800;">
                <i class="fas fa-phone-alt"></i> Call Emergency 108
              </a>
              <button class="btn btn-outline btn-lg" style="border-color:var(--white); color:var(--white);" onclick="window.PulseCareApp.showToast('Dispatching Hospital Ambulance Unit...', 'error')">
                <i class="fas fa-ambulance"></i> Request Ambulance Hotline
              </button>
            </div>
          </div>

          <div class="emergency-grid">
            <div class="emergency-card">
              <h3 style="font-size:1.2rem; color:var(--emergency-red); margin-bottom:0.5rem;"><i class="fas fa-heartbeat"></i> Cardiac Emergency</h3>
              <p style="font-size:0.9rem; color:var(--gray-700);">Chest pressure, radiating pain down left arm, cold sweats.</p>
            </div>
            <div class="emergency-card">
              <h3 style="font-size:1.2rem; color:var(--emergency-red); margin-bottom:0.5rem;"><i class="fas fa-brain"></i> Stroke Triage</h3>
              <p style="font-size:0.9rem; color:var(--gray-700);">Facial drooping, arm weakness, slurred speech (F.A.S.T protocol).</p>
            </div>
            <div class="emergency-card">
              <h3 style="font-size:1.2rem; color:var(--emergency-red); margin-bottom:0.5rem;"><i class="fas fa-bone"></i> Trauma & Fractures</h3>
              <p style="font-size:0.9rem; color:var(--gray-700);">Accident trauma unit ready 24 hours with dedicated OT teams.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderAbout() {
    return `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Our Healthcare Journey</h2>
            <p class="section-subtitle">Transforming healthcare delivery with digital convenience and clinical rigor.</p>
          </div>
          <div class="grid grid-cols-4 gap-6" style="margin-bottom:3rem;">
            <div class="card" style="padding:1.5rem; text-align:center;">
              <h3 style="font-size:2rem; color:var(--teal-500);">2018</h3>
              <p style="font-weight:700;">Founded</p>
              <p style="font-size:0.82rem; color:var(--gray-500);">Started first hospital clinic</p>
            </div>
            <div class="card" style="padding:1.5rem; text-align:center;">
              <h3 style="font-size:2rem; color:var(--teal-500);">2020</h3>
              <p style="font-weight:700;">10,000+ Patients</p>
              <p style="font-size:0.82rem; color:var(--gray-500);">Telehealth expansion</p>
            </div>
            <div class="card" style="padding:1.5rem; text-align:center;">
              <h3 style="font-size:2rem; color:var(--teal-500);">2023</h3>
              <p style="font-weight:700;">50+ Doctors</p>
              <p style="font-size:0.82rem; color:var(--gray-500);">Multi-specialty network</p>
            </div>
            <div class="card" style="padding:1.5rem; text-align:center;">
              <h3 style="font-size:2rem; color:var(--teal-500);">2026</h3>
              <p style="font-weight:700;">PulseCare SaaS Platform</p>
              <p style="font-size:0.82rem; color:var(--gray-500);">Complete digital healthcare</p>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderContact() {
    return `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">How Can We Help You?</h2>
            <p class="section-subtitle">Reach out to our hospital support teams or visit our multi-city centers.</p>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div class="card" style="padding:2rem;">
              <h3 style="margin-bottom:1rem;">Send Us a Message</h3>
              <div class="form-group" style="margin-bottom:1rem;">
                <label class="form-label">Name</label>
                <input type="text" class="form-input" placeholder="Your name">
              </div>
              <div class="form-group" style="margin-bottom:1rem;">
                <label class="form-label">Email</label>
                <input type="email" class="form-input" placeholder="name@example.com">
              </div>
              <div class="form-group" style="margin-bottom:1.5rem;">
                <label class="form-label">Message</label>
                <textarea class="form-input" rows="4" placeholder="How can we assist you?"></textarea>
              </div>
              <button class="btn btn-primary" onclick="window.PulseCareApp.showToast('Message sent! Our support team will call you back.', 'success')">Submit Enquiry</button>
            </div>

            <div class="card" style="padding:2rem;">
              <h3 style="margin-bottom:1rem;">Clinic Locations</h3>
              <div style="display:flex; flex-direction:column; gap:1.25rem;">
                <div>
                  <h4 style="color:var(--teal-600);"><i class="fas fa-map-marker-alt"></i> Chennai Center</h4>
                  <p style="font-size:0.9rem; color:var(--gray-700);">No. 42, Nungambakkam High Road, Chennai - 600034</p>
                </div>
                <div>
                  <h4 style="color:var(--teal-600);"><i class="fas fa-map-marker-alt"></i> Bengaluru Hub</h4>
                  <p style="font-size:0.9rem; color:var(--gray-700);">100 Feet Road, Indiranagar, Bengaluru - 560038</p>
                </div>
                <div>
                  <h4 style="color:var(--teal-600);"><i class="fas fa-map-marker-alt"></i> Hyderabad Facility</h4>
                  <p style="font-size:0.9rem; color:var(--gray-700);">Road No. 36, Jubilee Hills, Hyderabad - 500033</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderDoctorCardMarkup(d) {
    return `
      <div class="doctor-card">
        <div class="doctor-avatar-wrapper">
          <img src="${d.avatar}" alt="${d.name}" class="doctor-avatar">
        </div>
        <div class="doctor-info">
          <div>
            <div class="doctor-header-row">
              <div>
                <h3 class="doctor-name">${d.name}</h3>
                <div class="doctor-specialty">${d.specialty} • ${d.title}</div>
              </div>
              <div class="doctor-fee">$${d.fee}</div>
            </div>
            
            <div class="doctor-meta-list">
              <span class="doctor-meta-item"><i class="fas fa-briefcase"></i> ${d.experience} Yrs Exp</span>
              <span class="doctor-meta-item"><i class="fas fa-star" style="color:#f59e0b;"></i> ${d.rating} (${d.reviewsCount})</span>
              <span class="doctor-meta-item"><i class="fas fa-map-marker-alt"></i> ${d.location.split(' ')[0]}</span>
            </div>
          </div>

          <div class="flex justify-between items-center" style="margin-top:1rem; padding-top:0.8rem; border-top:1px solid var(--gray-100);">
            <div style="font-size:0.82rem; color:var(--accent-green); font-weight:700;">
              <i class="fas fa-calendar-check"></i> Available Today
            </div>
            <div class="flex gap-2">
              <button class="btn btn-outline btn-sm" onclick="window.location.hash = '#doctor-profile?id=${d.id}'">
                View Profile
              </button>
              <button class="btn btn-primary btn-sm" onclick="PulseCareBookingEngine.openBookingModal('${d.id}')">
                Book Slot
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  executeHeroSearch() {
    const query = document.getElementById('hero-search-query').value;
    const location = document.getElementById('hero-search-location').value;
    window.PulseCareSearchFilter.filterState.query = query;
    window.PulseCareSearchFilter.filterState.location = location;
    window.location.hash = '#find-doctor';
  },

  handleFilterChange(key, value) {
    window.PulseCareSearchFilter.setFilter(key, value);
    const container = document.getElementById('doctor-list-results');
    if (container) {
      const doctors = window.PulseCareSearchFilter.filterDoctors();
      container.innerHTML = doctors.length > 0 ? doctors.map(d => this.renderDoctorCardMarkup(d)).join('') : `
        <div class="card" style="padding:3rem; text-align:center; color:var(--gray-500);">
          <i class="fas fa-user-slash" style="font-size:3rem; margin-bottom:1rem;"></i>
          <h3>No Doctors Found</h3>
        </div>
      `;
    }
  },

  resetSearchFilters() {
    window.PulseCareSearchFilter.resetFilters();
    
    // Reset DOM elements in the UI
    const queryInput = document.getElementById('filter-query-input');
    if (queryInput) queryInput.value = '';
    
    const specialtySelect = document.getElementById('filter-specialty-select');
    if (specialtySelect) specialtySelect.value = 'All';
    
    const locationSelect = document.getElementById('filter-location-select');
    if (locationSelect) locationSelect.value = 'All';
    
    const genderRadios = document.getElementsByName('gender-filter');
    if (genderRadios) {
      genderRadios.forEach(radio => {
        radio.checked = (radio.value === 'All');
      });
    }

    const feeInput = document.querySelector('input[type="range"]');
    if (feeInput) {
      feeInput.value = 200;
      const display = document.getElementById('fee-val-display');
      if (display) display.innerText = 'Up to $200';
    }

    this.handleFilterChange('query', '');
  }
};
