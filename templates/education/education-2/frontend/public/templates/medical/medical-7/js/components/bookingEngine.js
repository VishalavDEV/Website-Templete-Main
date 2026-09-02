/* Multi-Step Interactive Appointment Booking Wizard Component */

window.PulseCareBookingEngine = {
  currentStep: 1,
  bookingData: {
    doctor: null,
    consultationType: 'In-Person', // 'In-Person' or 'Video Consultation'
    date: 'Today',
    timeSlot: '',
    patientName: 'Madhav Narayan',
    patientEmail: 'madhav@example.com',
    patientPhone: '+91 98765 43210',
    notes: ''
  },

  openBookingModal(doctorId, initialDate = 'Today', initialSlot = '') {
    const doctor = window.PulseCareApp.state.doctors.find(d => d.id === doctorId) || window.PulseCareApp.state.doctors[0];
    this.bookingData.doctor = doctor;
    this.bookingData.date = initialDate;
    this.bookingData.timeSlot = initialSlot || (doctor.todaySlots && doctor.todaySlots[0]) || '10:00 AM';
    this.currentStep = 1;

    this.renderModal();
    const backdrop = document.getElementById('booking-modal-backdrop');
    if (backdrop) backdrop.classList.add('open');
  },

  closeModal() {
    const backdrop = document.getElementById('booking-modal-backdrop');
    if (backdrop) backdrop.classList.remove('open');
  },

  nextStep() {
    if (this.currentStep < 6) {
      this.currentStep++;
      this.renderStepContent();
    } else if (this.currentStep === 6) {
      // Finalize Booking
      this.confirmBooking();
    }
  },

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.renderStepContent();
    }
  },

  selectType(type) {
    this.bookingData.consultationType = type;
    this.renderStepContent();
  },

  selectDate(date) {
    this.bookingData.date = date;
    const slots = date === 'Today' ? this.bookingData.doctor.todaySlots : this.bookingData.doctor.tomorrowSlots;
    this.bookingData.timeSlot = slots[0] || '10:00 AM';
    this.renderStepContent();
  },

  selectSlot(slot) {
    this.bookingData.timeSlot = slot;
    this.renderStepContent();
  },

  confirmBooking() {
    const newAppointment = {
      id: `apt-${Date.now()}`,
      doctorId: this.bookingData.doctor.id,
      doctorName: this.bookingData.doctor.name,
      specialty: this.bookingData.doctor.specialty,
      date: this.bookingData.date,
      time: this.bookingData.timeSlot,
      type: this.bookingData.consultationType,
      patientName: this.bookingData.patientName,
      status: "Upcoming",
      fee: this.bookingData.doctor.fee,
      hospital: this.bookingData.doctor.hospital
    };

    // Add to app state & LocalStorage
    window.PulseCareApp.addAppointment(newAppointment);

    // Close Modal & Toast
    this.closeModal();
    window.PulseCareApp.showToast(`🎉 Appointment confirmed with ${this.bookingData.doctor.name} for ${this.bookingData.date} at ${this.bookingData.timeSlot}!`, 'success');

    // Switch to Patient Portal view if user wants to check
    window.location.hash = '#patient-dashboard';
  },

  renderModal() {
    let backdrop = document.getElementById('booking-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'booking-modal-backdrop';
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);
    }

    backdrop.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <div>
            <h3 class="modal-title">Book Doctor Appointment</h3>
            <p style="font-size:0.85rem; color:var(--gray-500);">Instant Healthcare Slot Reservation</p>
          </div>
          <button class="modal-close-btn" onclick="PulseCareBookingEngine.closeModal()"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body" id="booking-modal-body">
          <!-- Stepper & Dynamic Step Content -->
        </div>
        <div class="modal-footer" id="booking-modal-footer">
          <!-- Buttons -->
        </div>
      </div>
    `;

    this.renderStepContent();
  },

  renderStepContent() {
    const body = document.getElementById('booking-modal-body');
    const footer = document.getElementById('booking-modal-footer');
    if (!body || !footer) return;

    const steps = [
      { num: 1, label: 'Doctor' },
      { num: 2, label: 'Type' },
      { num: 3, label: 'Date & Slot' },
      { num: 4, label: 'Patient Info' },
      { num: 5, label: 'Payment' },
      { num: 6, label: 'Confirmation' }
    ];

    let stepperHtml = `<div class="stepper-container">`;
    steps.forEach(s => {
      const activeClass = s.num === this.currentStep ? 'active' : (s.num < this.currentStep ? 'completed' : '');
      stepperHtml += `
        <div class="step-item ${activeClass}">
          <div class="step-number">${s.num < this.currentStep ? '<i class="fas fa-check"></i>' : s.num}</div>
          <div class="step-label">${s.label}</div>
        </div>
      `;
    });
    stepperHtml += `</div>`;

    let stepBodyHtml = '';
    const doc = this.bookingData.doctor;

    if (this.currentStep === 1) {
      stepBodyHtml = `
        <div class="flex items-center gap-4" style="background:var(--gray-50); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--gray-200);">
          <img src="${doc.avatar}" alt="${doc.name}" style="width:80px; height:80px; border-radius:var(--radius-md); object-fit:cover;">
          <div>
            <h4 style="font-size:1.2rem;">${doc.name}</h4>
            <p style="color:var(--teal-600); font-weight:600;">${doc.specialty}</p>
            <p style="font-size:0.85rem; color:var(--gray-600);">${doc.hospital}</p>
            <p style="font-size:0.95rem; font-weight:700; color:var(--primary-900); margin-top:0.3rem;">Consultation Fee: $${doc.fee}</p>
          </div>
        </div>
      `;
    } else if (this.currentStep === 2) {
      stepBodyHtml = `
        <h4 style="margin-bottom:1rem;">Select Consultation Mode</h4>
        <div class="grid grid-cols-2 gap-4">
          <div onclick="PulseCareBookingEngine.selectType('In-Person')" class="card" style="padding:1.5rem; text-align:center; cursor:pointer; border:2px solid ${this.bookingData.consultationType === 'In-Person' ? 'var(--teal-500)' : 'var(--gray-200)'}; background:${this.bookingData.consultationType === 'In-Person' ? 'var(--teal-100)' : 'var(--white)'};">
            <i class="fas fa-hospital-user" style="font-size:2.2rem; color:var(--teal-500); margin-bottom:0.75rem;"></i>
            <h5 style="font-size:1.1rem; margin-bottom:0.3rem;">In-Person Clinic Visit</h5>
            <p style="font-size:0.82rem; color:var(--gray-600);">Visit ${doc.hospital}</p>
          </div>
          <div onclick="PulseCareBookingEngine.selectType('Video Consultation')" class="card" style="padding:1.5rem; text-align:center; cursor:pointer; border:2px solid ${this.bookingData.consultationType === 'Video Consultation' ? 'var(--teal-500)' : 'var(--gray-200)'}; background:${this.bookingData.consultationType === 'Video Consultation' ? 'var(--teal-100)' : 'var(--white)'};">
            <i class="fas fa-video" style="font-size:2.2rem; color:var(--teal-500); margin-bottom:0.75rem;"></i>
            <h5 style="font-size:1.1rem; margin-bottom:0.3rem;">HD Video Call</h5>
            <p style="font-size:0.82rem; color:var(--gray-600);">Connect remotely via PulseCare Telehealth</p>
          </div>
        </div>
      `;
    } else if (this.currentStep === 3) {
      const activeSlots = this.bookingData.date === 'Today' ? doc.todaySlots : doc.tomorrowSlots;
      stepBodyHtml = `
        <h4 style="margin-bottom:1rem;">Select Date & Time Slot</h4>
        <div class="slot-day-tabs">
          <button onclick="PulseCareBookingEngine.selectDate('Today')" class="slot-day-tab ${this.bookingData.date === 'Today' ? 'active' : ''}">Today</button>
          <button onclick="PulseCareBookingEngine.selectDate('Tomorrow')" class="slot-day-tab ${this.bookingData.date === 'Tomorrow' ? 'active' : ''}">Tomorrow</button>
        </div>
        <div class="slots-grid">
          ${activeSlots.map(slot => `
            <div onclick="PulseCareBookingEngine.selectSlot('${slot}')" class="slot-chip ${this.bookingData.timeSlot === slot ? 'selected' : ''}">${slot}</div>
          `).join('')}
        </div>
      `;
    } else if (this.currentStep === 4) {
      stepBodyHtml = `
        <h4 style="margin-bottom:1rem;">Patient Details</h4>
        <div class="form-group" style="margin-bottom:1rem;">
          <label class="form-label">Full Name</label>
          <input type="text" class="form-input" id="patient-name-input" value="${this.bookingData.patientName}" oninput="PulseCareBookingEngine.bookingData.patientName = this.value">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" value="${this.bookingData.patientEmail}" oninput="PulseCareBookingEngine.bookingData.patientEmail = this.value">
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input type="tel" class="form-input" value="${this.bookingData.patientPhone}" oninput="PulseCareBookingEngine.bookingData.patientPhone = this.value">
          </div>
        </div>
      `;
    } else if (this.currentStep === 5) {
      stepBodyHtml = `
        <h4 style="margin-bottom:1rem;">Payment Summary</h4>
        <div style="background:var(--gray-50); padding:1.5rem; border-radius:var(--radius-lg); border:1px solid var(--gray-200);">
          <div class="flex justify-between" style="margin-bottom:0.75rem;">
            <span>Consultation Fee</span>
            <span style="font-weight:700;">$${doc.fee}</span>
          </div>
          <div class="flex justify-between" style="margin-bottom:0.75rem;">
            <span>Platform Service Fee</span>
            <span style="font-weight:700; color:var(--accent-green);">FREE</span>
          </div>
          <hr style="border:none; border-top:1px solid var(--gray-200); margin:0.8rem 0;">
          <div class="flex justify-between" style="font-size:1.1rem; font-weight:800; color:var(--primary-900);">
            <span>Total Payable</span>
            <span>$${doc.fee}</span>
          </div>
        </div>
        <div style="margin-top:1.25rem;">
          <label class="form-label" style="margin-bottom:0.5rem; display:block;">Select Payment Method</label>
          <div class="grid grid-cols-3 gap-3">
            <button class="btn btn-outline btn-sm active" style="border-color:var(--teal-500);"><i class="fas fa-credit-card"></i> UPI / Card</button>
            <button class="btn btn-outline btn-sm"><i class="fas fa-hospital"></i> Pay at Hospital</button>
            <button class="btn btn-outline btn-sm"><i class="fas fa-shield-heart"></i> Health Insurance</button>
          </div>
        </div>
      `;
    } else if (this.currentStep === 6) {
      stepBodyHtml = `
        <div style="text-align:center; padding:1rem 0;">
          <div style="width:64px; height:64px; background:var(--accent-green-bg); color:var(--accent-green); border-radius:var(--radius-full); display:flex; align-items:center; justify-content:center; font-size:2rem; margin:0 auto 1rem auto;">
            <i class="fas fa-check"></i>
          </div>
          <h3 style="margin-bottom:0.4rem;">Ready to Confirm!</h3>
          <p style="color:var(--gray-600); margin-bottom:1.5rem;">Review your booking details before confirming appointment.</p>
          <div style="background:var(--primary-50); padding:1.25rem; border-radius:var(--radius-lg); text-align:left; font-size:0.92rem;">
            <p><strong>Doctor:</strong> ${doc.name} (${doc.specialty})</p>
            <p><strong>Schedule:</strong> ${this.bookingData.date} at ${this.bookingData.timeSlot}</p>
            <p><strong>Mode:</strong> ${this.bookingData.consultationType}</p>
            <p><strong>Patient:</strong> ${this.bookingData.patientName}</p>
          </div>
        </div>
      `;
    }

    body.innerHTML = stepperHtml + stepBodyHtml;

    footer.innerHTML = `
      ${this.currentStep > 1 ? `<button class="btn btn-outline" onclick="PulseCareBookingEngine.prevStep()">Back</button>` : ''}
      <button class="btn btn-primary" onclick="PulseCareBookingEngine.nextStep()">
        ${this.currentStep === 6 ? 'Confirm & Book Appointment' : 'Continue'} <i class="fas fa-arrow-right"></i>
      </button>
    `;
  }
};
