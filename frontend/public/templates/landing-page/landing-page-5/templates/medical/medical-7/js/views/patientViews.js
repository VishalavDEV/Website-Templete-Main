/* Patient Portal View Renders - Patient Dashboard, Appointments, Health Vault */

window.PulseCarePatientViews = {
  renderDashboard() {
    const appointments = window.PulseCareApp.state.appointments;
    const upcoming = appointments.find(a => a.status === 'Upcoming');

    return `
      <div class="container">
        <div class="portal-layout">
          <!-- Sidebar -->
          <div class="portal-sidebar">
            <div class="user-profile-summary">
              <div class="user-avatar-sm">MN</div>
              <div>
                <div class="user-meta-name">Madhav Narayan</div>
                <div class="user-meta-role">Patient ID: #PAT-8829</div>
              </div>
            </div>

            <ul class="sidebar-menu">
              <li class="sidebar-item active" onclick="window.location.hash = '#patient-dashboard'"><i class="fas fa-chart-line"></i> Dashboard</li>
              <li class="sidebar-item" onclick="window.location.hash = '#patient-appointments'"><i class="fas fa-calendar-alt"></i> My Appointments</li>
              <li class="sidebar-item" onclick="window.location.hash = '#patient-vault'"><i class="fas fa-vault"></i> Health Vault</li>
              <li class="sidebar-item" onclick="window.location.hash = '#find-doctor'"><i class="fas fa-user-md"></i> Find Doctor</li>
            </ul>
          </div>

          <!-- Main Content -->
          <div>
            <!-- Greeting Banner -->
            <div class="greeting-header">
              <div>
                <h2 style="color:var(--white); font-size:1.8rem; margin-bottom:0.3rem;">Good Morning, Madhav 👋</h2>
                <p style="color:var(--teal-100);">How can we assist your health journey today?</p>
              </div>
              <button class="btn btn-primary" style="background:var(--white); color:var(--primary-800);" onclick="window.location.hash = '#find-doctor'">
                <i class="fas fa-plus"></i> Book New Appointment
              </button>
            </div>

            <!-- Upcoming Appointment Hero -->
            ${upcoming ? `
              <div class="upcoming-appointment-hero">
                <div class="appointment-meta">
                  <div class="quick-icon" style="background:var(--primary-100); color:var(--primary-800); width:56px; height:56px;">
                    <i class="fas fa-calendar-day" style="font-size:1.5rem;"></i>
                  </div>
                  <div>
                    <span class="badge badge-green" style="margin-bottom:0.3rem;">Upcoming Consultation</span>
                    <h3 style="font-size:1.25rem;">${upcoming.doctorName}</h3>
                    <p style="font-size:0.88rem; color:var(--gray-600);">${upcoming.specialty} • ${upcoming.date} at ${upcoming.time} (${upcoming.type})</p>
                  </div>
                </div>

                <div class="flex gap-2">
                  <button class="btn btn-primary btn-sm" onclick="window.PulseCareApp.showToast('🎥 Joining Secure HD Telehealth Room...', 'info')">
                    <i class="fas fa-video"></i> Join Consultation
                  </button>
                  <button class="btn btn-outline btn-sm" onclick="PulseCarePatientViews.rescheduleModal('${upcoming.id}')">
                    Reschedule
                  </button>
                </div>
              </div>
            ` : `
              <div class="card" style="padding:1.5rem; margin-bottom:2rem; text-align:center; color:var(--gray-500);">
                <p>No upcoming appointments scheduled.</p>
              </div>
            `}

            <!-- Quick Actions Grid -->
            <h3 style="margin-bottom:1rem; font-size:1.2rem;">Quick Health Actions</h3>
            <div class="grid grid-cols-4 gap-4" style="margin-bottom:2rem;">
              <div class="card" style="padding:1.25rem; text-align:center; cursor:pointer;" onclick="window.location.hash = '#patient-appointments'">
                <i class="fas fa-calendar-check" style="font-size:1.8rem; color:var(--teal-500); margin-bottom:0.5rem;"></i>
                <h4 style="font-size:0.95rem;">Appointments</h4>
                <p style="font-size:0.78rem; color:var(--gray-500);">${appointments.length} Total</p>
              </div>
              <div class="card" style="padding:1.25rem; text-align:center; cursor:pointer;" onclick="window.location.hash = '#patient-vault'">
                <i class="fas fa-file-medical-alt" style="font-size:1.8rem; color:var(--teal-500); margin-bottom:0.5rem;"></i>
                <h4 style="font-size:0.95rem;">Health Reports</h4>
                <p style="font-size:0.78rem; color:var(--gray-500);">Lab Results</p>
              </div>
              <div class="card" style="padding:1.25rem; text-align:center; cursor:pointer;" onclick="PulseCareHealthVault.viewPrescriptionModal('rx-101')">
                <i class="fas fa-prescription-bottle-alt" style="font-size:1.8rem; color:var(--teal-500); margin-bottom:0.5rem;"></i>
                <h4 style="font-size:0.95rem;">Prescriptions</h4>
                <p style="font-size:0.78rem; color:var(--gray-500);">Active Rx</p>
              </div>
              <div class="card" style="padding:1.25rem; text-align:center; cursor:pointer;" onclick="window.location.hash = '#find-doctor'">
                <i class="fas fa-user-md" style="font-size:1.8rem; color:var(--teal-500); margin-bottom:0.5rem;"></i>
                <h4 style="font-size:0.95rem;">Top Doctors</h4>
                <p style="font-size:0.78rem; color:var(--gray-500);">Directory</p>
              </div>
            </div>

            <!-- Health History Preview -->
            <div id="timeline-dashboard-mount"></div>
          </div>
        </div>
      </div>
    `;
  },

  renderAppointments() {
    const appointments = window.PulseCareApp.state.appointments;

    return `
      <div class="container">
        <div class="portal-layout">
          <!-- Sidebar -->
          <div class="portal-sidebar">
            <ul class="sidebar-menu">
              <li class="sidebar-item" onclick="window.location.hash = '#patient-dashboard'"><i class="fas fa-chart-line"></i> Dashboard</li>
              <li class="sidebar-item active" onclick="window.location.hash = '#patient-appointments'"><i class="fas fa-calendar-alt"></i> My Appointments</li>
              <li class="sidebar-item" onclick="window.location.hash = '#patient-vault'"><i class="fas fa-vault"></i> Health Vault</li>
            </ul>
          </div>

          <!-- Appointments List -->
          <div>
            <div class="flex justify-between items-center" style="margin-bottom:1.5rem;">
              <h2>My Appointments</h2>
              <button class="btn btn-primary btn-sm" onclick="window.location.hash = '#find-doctor'"><i class="fas fa-plus"></i> Book Slot</button>
            </div>

            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>Specialty</th>
                    <th>Date & Time</th>
                    <th>Mode</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${appointments.map(a => `
                    <tr>
                      <td><strong>${a.doctorName}</strong></td>
                      <td>${a.specialty}</td>
                      <td>${a.date} • ${a.time}</td>
                      <td><span class="badge badge-blue">${a.type}</span></td>
                      <td><span class="badge ${a.status === 'Upcoming' ? 'badge-green' : 'badge-teal'}">${a.status}</span></td>
                      <td>
                        ${a.status === 'Upcoming' ? `
                          <button class="btn btn-outline btn-sm" onclick="PulseCarePatientViews.rescheduleModal('${a.id}')">Reschedule</button>
                          <button class="btn btn-outline btn-sm" style="color:var(--emergency-red);" onclick="PulseCarePatientViews.cancelAppointment('${a.id}')">Cancel</button>
                        ` : `
                          <button class="btn btn-outline btn-sm" onclick="PulseCareHealthVault.viewPrescriptionModal('rx-101')">View Rx</button>
                        `}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderVault() {
    const reports = window.PulseCareApp.state.healthVault.reports;

    setTimeout(() => {
      window.PulseCareHealthVault.renderTimeline('timeline-mount');
    }, 50);

    return `
      <div class="container">
        <div class="portal-layout">
          <!-- Sidebar -->
          <div class="portal-sidebar">
            <ul class="sidebar-menu">
              <li class="sidebar-item" onclick="window.location.hash = '#patient-dashboard'"><i class="fas fa-chart-line"></i> Dashboard</li>
              <li class="sidebar-item" onclick="window.location.hash = '#patient-appointments'"><i class="fas fa-calendar-alt"></i> My Appointments</li>
              <li class="sidebar-item active" onclick="window.location.hash = '#patient-vault'"><i class="fas fa-vault"></i> Health Vault</li>
            </ul>
          </div>

          <!-- Vault Content -->
          <div>
            <div style="margin-bottom:2rem;">
              <h2 style="margin-bottom:0.5rem;">Digital Health Vault</h2>
              <p style="color:var(--gray-600);">Encrypted medical records, diagnostic lab reports, and digitized prescriptions.</p>
            </div>

            <!-- Lab Reports Table -->
            <h3 style="margin-bottom:1rem; font-size:1.2rem;">Diagnostic Lab Reports</h3>
            <div class="data-table-container" style="margin-bottom:2.5rem;">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Document Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Physician</th>
                    <th>File Size</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${reports.map(r => `
                    <tr>
                      <td><strong><i class="fas fa-file-medical" style="color:var(--teal-500);"></i> ${r.title}</strong></td>
                      <td><span class="badge badge-teal">${r.category}</span></td>
                      <td>${r.date}</td>
                      <td>${r.doctor}</td>
                      <td>${r.fileSize}</td>
                      <td>
                        <button class="btn btn-outline btn-sm" onclick="window.PulseCareApp.showToast('📄 Opening PDF Document Viewer...', 'info')">
                          <i class="fas fa-eye"></i> View Report
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Vertical Timeline Container -->
            <div id="timeline-mount"></div>
          </div>
        </div>
      </div>
    `;
  },

  rescheduleModal(aptId) {
    const apt = window.PulseCareApp.state.appointments.find(a => a.id === aptId);
    if (!apt) return;
    window.PulseCareApp.showToast(`Rescheduling appointment #${aptId} for ${apt.doctorName}...`, 'info');
    PulseCareBookingEngine.openBookingModal(apt.doctorId);
  },

  cancelAppointment(aptId) {
    window.PulseCareApp.state.appointments = window.PulseCareApp.state.appointments.filter(a => a.id !== aptId);
    window.PulseCareApp.saveState();
    window.PulseCareApp.showToast('Appointment cancelled successfully.', 'info');
    window.PulseCareApp.route();
  }
};
