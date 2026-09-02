/* Admin SaaS Portal View Renderers - Analytics, Doctor Roster Management, Revenue Charts */

window.PulseCareAdminViews = {
  renderDashboard() {
    const stats = window.PulseCareApp.state.adminStats;
    const doctors = window.PulseCareApp.state.doctors;

    return `
      <div class="container">
        <div class="portal-layout">
          <!-- Admin Sidebar -->
          <div class="portal-sidebar">
            <div class="user-profile-summary" style="background:var(--primary-900); color:var(--white);">
              <div class="user-avatar-sm" style="background:var(--teal-500);">AD</div>
              <div>
                <div class="user-meta-name" style="color:var(--white);">PulseCare Admin</div>
                <div class="user-meta-role" style="color:var(--teal-400);">System Administrator</div>
              </div>
            </div>

            <ul class="sidebar-menu">
              <li class="sidebar-item active"><i class="fas fa-chart-pie"></i> Platform Overview</li>
              <li class="sidebar-item" onclick="window.PulseCareApp.showToast('Opening Doctor Management Console...', 'info')"><i class="fas fa-user-md"></i> Doctor Roster</li>
              <li class="sidebar-item" onclick="window.PulseCareApp.showToast('Opening Patient Registry...', 'info')"><i class="fas fa-users"></i> Patient Directory</li>
              <li class="sidebar-item" onclick="window.PulseCareApp.showToast('Generating Revenue Reports...', 'info')"><i class="fas fa-file-invoice-dollar"></i> Billing & Revenue</li>
            </ul>
          </div>

          <!-- Admin Main SaaS Workspace -->
          <div>
            <!-- Metrics Row -->
            <div class="admin-metrics-grid">
              <div class="metric-card">
                <div>
                  <span style="font-size:0.82rem; color:var(--gray-500); font-weight:700;">TOTAL PATIENTS</span>
                  <div class="metric-value">${stats.totalPatients}</div>
                  <div class="metric-trend"><i class="fas fa-arrow-up"></i> +14% vs last mo</div>
                </div>
                <div class="metric-icon"><i class="fas fa-users"></i></div>
              </div>

              <div class="metric-card">
                <div>
                  <span style="font-size:0.82rem; color:var(--gray-500); font-weight:700;">ACTIVE DOCTORS</span>
                  <div class="metric-value">${stats.totalDoctors}</div>
                  <div class="metric-trend"><i class="fas fa-arrow-up"></i> +4 new</div>
                </div>
                <div class="metric-icon"><i class="fas fa-user-md"></i></div>
              </div>

              <div class="metric-card">
                <div>
                  <span style="font-size:0.82rem; color:var(--gray-500); font-weight:700;">APPOINTMENTS</span>
                  <div class="metric-value">${stats.totalAppointments}</div>
                  <div class="metric-trend"><i class="fas fa-arrow-up"></i> +22%</div>
                </div>
                <div class="metric-icon"><i class="fas fa-calendar-check"></i></div>
              </div>

              <div class="metric-card">
                <div>
                  <span style="font-size:0.82rem; color:var(--gray-500); font-weight:700;">MONTHLY REVENUE</span>
                  <div class="metric-value">${stats.monthlyRevenue}</div>
                  <div class="metric-trend"><i class="fas fa-arrow-up"></i> +18% growth</div>
                </div>
                <div class="metric-icon" style="color:var(--accent-green);"><i class="fas fa-wallet"></i></div>
              </div>
            </div>

            <!-- CSS Bar Chart Component -->
            <div class="chart-card">
              <div class="flex justify-between items-center" style="margin-bottom:1rem;">
                <div>
                  <h3>2026 Appointment Growth Trends</h3>
                  <p style="font-size:0.85rem; color:var(--gray-500);">Monthly consultation bookings across all departments</p>
                </div>
                <span class="badge badge-teal">Live Metrics</span>
              </div>
              <div class="chart-bars-container">
                ${stats.chartData.map(d => `
                  <div class="chart-bar-group">
                    <div class="chart-bar" style="height:${(d.count / 300) * 100}%;" title="${d.count} appointments"></div>
                    <span class="chart-bar-label">${d.month}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Doctor Management Table -->
            <div style="display:flex; justify-between; align-items:center; margin-bottom:1rem;">
              <h3>Doctor Roster Management</h3>
              <button class="btn btn-primary btn-sm" onclick="window.PulseCareApp.showToast('Add Doctor Modal Opened', 'info')"><i class="fas fa-plus"></i> Add New Doctor</button>
            </div>

            <div class="data-table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Doctor Name</th>
                    <th>Specialty</th>
                    <th>Hospital Location</th>
                    <th>Consultation Fee</th>
                    <th>Rating</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${doctors.map(d => `
                    <tr>
                      <td>
                        <div class="flex items-center gap-2">
                          <img src="${d.avatar}" style="width:34px; height:34px; border-radius:50%; object-fit:cover;">
                          <strong>${d.name}</strong>
                        </div>
                      </td>
                      <td>${d.specialty}</td>
                      <td>${d.location.split(' ')[0]}</td>
                      <td>$${d.fee}</td>
                      <td>⭐ ${d.rating}</td>
                      <td><span class="badge badge-green">Active</span></td>
                      <td>
                        <button class="btn btn-outline btn-sm" onclick="window.PulseCareApp.showToast('Editing ${d.name}...', 'info')">Edit</button>
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
  }
};
