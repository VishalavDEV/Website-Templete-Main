/* Doctor Portal View Renders - Doctor Agenda, Consultation Notes & Schedule Manager */

window.PulseCareDoctorViews = {
  renderDashboard() {
    const doc = window.PulseCareApp.state.doctors[0]; // Dr. Priya Sharma
    const appointments = window.PulseCareApp.state.appointments;

    return `
      <div class="container">
        <div class="portal-layout">
          <!-- Doctor Sidebar -->
          <div class="portal-sidebar">
            <div class="user-profile-summary">
              <img src="${doc.avatar}" style="width:44px; height:44px; border-radius:50%; object-fit:cover;">
              <div>
                <div class="user-meta-name">${doc.name}</div>
                <div class="user-meta-role">${doc.specialty}</div>
              </div>
            </div>

            <ul class="sidebar-menu">
              <li class="sidebar-item active"><i class="fas fa-calendar-day"></i> Today's Schedule</li>
              <li class="sidebar-item" onclick="window.PulseCareApp.showToast('Opening Patient EHR Registry...', 'info')"><i class="fas fa-users"></i> Patient Roster</li>
              <li class="sidebar-item" onclick="window.PulseCareApp.showToast('Slot Schedule Updated!', 'success')"><i class="fas fa-clock"></i> Slot Manager</li>
            </ul>
          </div>

          <!-- Doctor Main Interface -->
          <div>
            <!-- Metrics Row -->
            <div class="admin-metrics-grid">
              <div class="metric-card">
                <div>
                  <span style="font-size:0.82rem; color:var(--gray-500); font-weight:700;">TODAY'S PATIENTS</span>
                  <div class="metric-value">12</div>
                </div>
                <div class="metric-icon"><i class="fas fa-user-clock"></i></div>
              </div>

              <div class="metric-card">
                <div>
                  <span style="font-size:0.82rem; color:var(--gray-500); font-weight:700;">COMPLETED</span>
                  <div class="metric-value">8</div>
                </div>
                <div class="metric-icon" style="color:var(--accent-green);"><i class="fas fa-check-circle"></i></div>
              </div>

              <div class="metric-card">
                <div>
                  <span style="font-size:0.82rem; color:var(--gray-500); font-weight:700;">UPCOMING</span>
                  <div class="metric-value">4</div>
                </div>
                <div class="metric-icon" style="color:var(--accent-amber);"><i class="fas fa-hourglass-half"></i></div>
              </div>

              <div class="metric-card">
                <div>
                  <span style="font-size:0.82rem; color:var(--gray-500); font-weight:700;">ACTIVE SLOTS</span>
                  <div class="metric-value">8</div>
                </div>
                <div class="metric-icon"><i class="fas fa-calendar-check"></i></div>
              </div>
            </div>

            <!-- Doctor Agenda Queue -->
            <div style="display:flex; justify-between; align-items:center; margin-bottom:1rem;">
              <h3>Today's Consultation Schedule</h3>
              <span class="badge badge-teal"><i class="fas fa-circle" style="font-size:0.5rem;"></i> Live Schedule</span>
            </div>

            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Patient Name</th>
                    <th>Mode</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${appointments.map((a, idx) => `
                    <tr>
                      <td><strong>${a.time}</strong></td>
                      <td>
                        <div class="flex items-center gap-2">
                          <div style="width:32px; height:32px; background:var(--primary-100); color:var(--primary-800); border-radius:50%; font-size:0.8rem; font-weight:700; display:flex; align-items:center; justify-content:center;">
                            ${a.patientName[0]}
                          </div>
                          <span>${a.patientName}</span>
                        </div>
                      </td>
                      <td><span class="badge badge-blue">${a.type}</span></td>
                      <td><span class="badge ${a.status === 'Upcoming' ? 'badge-amber' : 'badge-green'}">${a.status}</span></td>
                      <td>
                        <button class="btn btn-primary btn-sm" onclick="PulseCareDoctorViews.openConsultationModal('${a.patientName}')">
                          <i class="fas fa-notes-medical"></i> Start Session
                        </button>
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

  openConsultationModal(patientName) {
    let backdrop = document.getElementById('doc-consult-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'doc-consult-backdrop';
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);
    }

    backdrop.innerHTML = `
      <div class="modal-card">
        <div class="modal-header" style="background:var(--primary-800); color:var(--white);">
          <div>
            <h3 class="modal-title" style="color:var(--white);"><i class="fas fa-stethoscope"></i> Clinical Consultation Room</h3>
            <p style="font-size:0.82rem; color:var(--teal-100);">Patient: ${patientName}</p>
          </div>
          <button class="modal-close-btn" style="background:rgba(255,255,255,0.2); color:var(--white);" onclick="document.getElementById('doc-consult-backdrop').classList.remove('open')"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
          <div class="form-group" style="margin-bottom:1rem;">
            <label class="form-label">Clinical Observations & Diagnosis</label>
            <textarea class="form-input" rows="3" placeholder="Enter clinical notes, symptoms, and diagnosis..."></textarea>
          </div>
          <div class="form-group" style="margin-bottom:1rem;">
            <label class="form-label">Add Prescribed Medication</label>
            <div class="grid grid-cols-3 gap-2">
              <input type="text" class="form-input" placeholder="Medicine Name (e.g. Paracetamol)">
              <input type="text" class="form-input" placeholder="Dosage (e.g. 1-0-1)">
              <input type="text" class="form-input" placeholder="Duration (e.g. 5 Days)">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline" onclick="document.getElementById('doc-consult-backdrop').classList.remove('open')">Cancel</button>
          <button class="btn btn-primary" onclick="document.getElementById('doc-consult-backdrop').classList.remove('open'); window.PulseCareApp.showToast('✅ Prescription uploaded to patient Health Vault!', 'success');">
            Save & Publish Prescription
          </button>
        </div>
      </div>
    `;

    backdrop.classList.add('open');
  }
};
