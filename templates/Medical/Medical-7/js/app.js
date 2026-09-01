/* Main Application Controller, Router & State Store */

window.PulseCareApp = {
  state: {
    currentRole: 'guest', // 'guest', 'patient', 'doctor', 'admin'
    doctors: [],
    specialties: [],
    appointments: [],
    healthVault: { reports: [], prescriptions: [], timeline: [] },
    articles: [],
    adminStats: {}
  },

  init() {
    this.loadState();
    this.bindEvents();
    
    // Sync active role switcher pills with currentRole state
    document.querySelectorAll('.role-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.role === this.state.currentRole);
    });

    this.renderHeaderNav();
    this.route();
  },

  loadState() {
    const saved = localStorage.getItem('pulsecare_state_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      } catch (e) {
        this.state = { ...this.state, ...INITIAL_MOCK_DATA };
      }
    } else {
      this.state = { ...this.state, ...INITIAL_MOCK_DATA };
      this.saveState();
    }
  },

  saveState() {
    localStorage.setItem('pulsecare_state_v2', JSON.stringify(this.state));
  },

  bindEvents() {
    window.addEventListener('hashchange', () => this.route());
  },

  switchRole(role) {
    this.state.currentRole = role;
    this.saveState();

    // Update active UI pills
    document.querySelectorAll('.role-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.role === role);
    });

    // Update nav links depending on role
    this.renderHeaderNav();

    // Redirect to role entry hash
    if (role === 'patient') {
      window.location.hash = '#patient-dashboard';
    } else if (role === 'doctor') {
      window.location.hash = '#doctor-dashboard';
    } else if (role === 'admin') {
      window.location.hash = '#admin-dashboard';
    } else {
      window.location.hash = '#home';
    }

    this.showToast(`Switched view to: ${role.toUpperCase()} PORTAL`, 'info');
  },

  renderHeaderNav() {
    const navMenu = document.getElementById('main-nav-menu');
    if (!navMenu) return;

    if (this.state.currentRole === 'patient') {
      navMenu.innerHTML = `
        <li><a href="#patient-dashboard" class="nav-link">Dashboard</a></li>
        <li><a href="#find-doctor" class="nav-link">Find Doctor</a></li>
        <li><a href="#patient-appointments" class="nav-link">My Appointments</a></li>
        <li><a href="#patient-vault" class="nav-link">Health Vault</a></li>
        <li><a href="#health-hub" class="nav-link">Health Hub</a></li>
      `;
    } else if (this.state.currentRole === 'doctor') {
      navMenu.innerHTML = `
        <li><a href="#doctor-dashboard" class="nav-link">Doctor Agenda</a></li>
        <li><a href="#find-doctor" class="nav-link">Directory</a></li>
      `;
    } else if (this.state.currentRole === 'admin') {
      navMenu.innerHTML = `
        <li><a href="#admin-dashboard" class="nav-link">SaaS Dashboard</a></li>
        <li><a href="#find-doctor" class="nav-link">Doctor Management</a></li>
      `;
    } else {
      navMenu.innerHTML = `
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#find-doctor" class="nav-link">Find Doctor</a></li>
        <li><a href="#specialties" class="nav-link">Specialties</a></li>
        <li><a href="#health-hub" class="nav-link">Health Hub</a></li>
        <li><a href="#emergency" class="nav-link" style="color:var(--emergency-red);">Emergency 24/7</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      `;
    }
  },

  route() {
    const viewport = document.getElementById('app-viewport');
    if (!viewport) return;

    const hash = window.location.hash || '#home';
    const [path, queryString] = hash.split('?');
    const params = new URLSearchParams(queryString || '');

    // Highlight active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === path);
    });

    let viewHtml = '';

    switch (path) {
      case '#home':
        viewHtml = PulseCarePublicViews.renderHome();
        break;

      case '#find-doctor':
        viewHtml = PulseCarePublicViews.renderFindDoctor();
        break;

      case '#doctor-profile':
        const docId = params.get('id') || 'doc-1';
        viewHtml = PulseCarePublicViews.renderDoctorProfile(docId);
        break;

      case '#specialties':
        viewHtml = PulseCarePublicViews.renderSpecialties();
        break;

      case '#health-hub':
        viewHtml = PulseCarePublicViews.renderHealthHub();
        break;

      case '#emergency':
        viewHtml = PulseCarePublicViews.renderEmergency();
        break;

      case '#about':
        viewHtml = PulseCarePublicViews.renderAbout();
        break;

      case '#contact':
        viewHtml = PulseCarePublicViews.renderContact();
        break;

      case '#patient-dashboard':
        viewHtml = PulseCarePatientViews.renderDashboard();
        break;

      case '#patient-appointments':
        viewHtml = PulseCarePatientViews.renderAppointments();
        break;

      case '#patient-vault':
        viewHtml = PulseCarePatientViews.renderVault();
        break;

      case '#doctor-dashboard':
        viewHtml = PulseCareDoctorViews.renderDashboard();
        break;

      case '#admin-dashboard':
        viewHtml = PulseCareAdminViews.renderDashboard();
        break;

      default:
        viewHtml = PulseCarePublicViews.renderHome();
    }

    viewport.innerHTML = viewHtml;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  addAppointment(apt) {
    this.state.appointments.unshift(apt);
    this.state.healthVault.timeline.unshift({
      date: apt.date,
      title: `Booked Consultation: ${apt.doctorName}`,
      desc: `Scheduled for ${apt.time} (${apt.type}). Fee: $${apt.fee}.`,
      icon: 'fa-calendar-check',
      category: 'Appointment'
    });
    this.saveState();
  },

  showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};

// Initialize App on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.PulseCareApp.init();
});
