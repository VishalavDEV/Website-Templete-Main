/* Health Vault & Vertical Health Timeline Component */

window.PulseCareHealthVault = {
  renderTimeline(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const timelineData = window.PulseCareApp.state.healthVault.timeline || [];

    let html = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
        <div>
          <h3 style="font-size:1.4rem;">Patient Health Journey</h3>
          <p style="font-size:0.88rem; color:var(--gray-600);">Chronological Medical History & Activity</p>
        </div>
        <button class="btn btn-outline btn-sm" onclick="PulseCareHealthVault.addTimelineEvent()"><i class="fas fa-plus"></i> Log Medical Event</button>
      </div>
      <div class="timeline-wrapper">
    `;

    timelineData.forEach(item => {
      html += `
        <div class="timeline-node">
          <div class="timeline-content-card">
            <div class="flex justify-between items-center" style="margin-bottom:0.4rem;">
              <span class="timeline-date"><i class="fas ${item.icon || 'fa-notes-medical'}"></i> ${item.date}</span>
              <span class="badge badge-teal">${item.category}</span>
            </div>
            <h4 class="timeline-title">${item.title}</h4>
            <p style="font-size:0.88rem; color:var(--gray-600);">${item.desc}</p>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  },

  viewPrescriptionModal(rxId) {
    const rx = window.PulseCareApp.state.healthVault.prescriptions.find(p => p.id === rxId) || window.PulseCareApp.state.healthVault.prescriptions[0];
    
    let backdrop = document.getElementById('rx-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'rx-modal-backdrop';
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);
    }

    backdrop.innerHTML = `
      <div class="modal-card">
        <div class="modal-header" style="background:var(--primary-800); color:var(--white);">
          <div>
            <h3 class="modal-title" style="color:var(--white);"><i class="fas fa-prescription"></i> Digital Rx Prescription</h3>
            <p style="font-size:0.82rem; color:var(--teal-100);">${rx.doctorName} • Date: ${rx.date}</p>
          </div>
          <button class="modal-close-btn" style="background:rgba(255,255,255,0.2); color:var(--white);" onclick="document.getElementById('rx-modal-backdrop').classList.remove('open')"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
          <div style="background:var(--primary-50); padding:1rem; border-radius:var(--radius-md); margin-bottom:1.25rem;">
            <p style="font-size:0.85rem; font-weight:700; color:var(--gray-600); text-transform:uppercase;">Diagnosis</p>
            <p style="font-size:1.05rem; font-weight:700; color:var(--primary-900);">${rx.diagnosis}</p>
          </div>
          <h4 style="margin-bottom:0.75rem;">Prescribed Medication</h4>
          <div class="data-table-container" style="margin-bottom:1.25rem;">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Medicine Name</th>
                  <th>Dosage Schedule</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                ${rx.medicines.map(m => `
                  <tr>
                    <td><strong>${m.name}</strong></td>
                    <td>${m.dosage}</td>
                    <td><span class="badge badge-blue">${m.duration}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          <div style="background:var(--accent-amber-bg); padding:1rem; border-radius:var(--radius-md); font-size:0.88rem; color:var(--gray-800);">
            <strong style="color:var(--accent-amber);"><i class="fas fa-info-circle"></i> Doctor's Advice:</strong> ${rx.instructions}
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline" onclick="window.PulseCareApp.showToast('📥 Downloading PDF Prescription...', 'info')"><i class="fas fa-download"></i> Download PDF</button>
          <button class="btn btn-primary" onclick="document.getElementById('rx-modal-backdrop').classList.remove('open')">Close Viewer</button>
        </div>
      </div>
    `;

    backdrop.classList.add('open');
  },

  addTimelineEvent() {
    const newEvent = {
      date: "Today",
      title: "Self-Logged Symptom Check",
      desc: "Logged normal blood pressure readings and mild fatigue symptoms.",
      icon: "fa-heartbeat",
      category: "Patient Note"
    };
    window.PulseCareApp.state.healthVault.timeline.unshift(newEvent);
    window.PulseCareApp.saveState();
    this.renderTimeline('timeline-mount');
    window.PulseCareApp.showToast('Logged new event in Health Vault!', 'success');
  }
};
