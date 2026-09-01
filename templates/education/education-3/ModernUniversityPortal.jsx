import React, { useState, useEffect, useRef } from 'react';
import useStylesheet from '../../../frontend/src/services/useStylesheet';

export default function Home() {
  useStylesheet('/templates/education/education-3/style.css');
  /* ==========================================
     1. Hero Background Carousel Slider
     ========================================== */
  const backgrounds = [
    '/templates/education/education-3/campus.jpg',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80'
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [autoSlide]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setAutoSlide(false); // Disable auto sliding once user interacts
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
    setAutoSlide(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    setAutoSlide(false);
  };

  /* ==========================================
     2. Command Palette (Ctrl+K / ⌘K)
     ========================================== */
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cmdQuery, setCmdQuery] = useState('');
  const cmdInputRef = useRef(null);

  const commandItems = [
    { name: 'Go to Admissions Portal', link: '#admission-portal' },
    { name: 'Calculate Tuition Fees', link: '#tuition-calc' },
    { name: 'View Degree Catalog', link: '#degree-finder' },
    { name: 'Book In-Person Campus Tour', link: '#tour-section' },
    { name: 'Meet Distinguished Faculty', link: '#faculty-showcase' },
    { name: 'Academic Calendar & Events', link: '#calendar-events' },
    { name: 'Read Research Stories', link: '#gazette' },
    { name: 'Subscribe to Newsletter', link: '#newsletter-section' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setCmdOpen(true);
      }
      if (e.key === 'Escape') {
        setCmdOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (cmdOpen && cmdInputRef.current) {
      cmdInputRef.current.focus();
    }
  }, [cmdOpen]);

  const filteredCommands = commandItems.filter(item =>
    item.name.toLowerCase().includes(cmdQuery.toLowerCase().trim())
  );

  /* ==========================================
     3. Academic Degree Finder Filters
     ========================================== */
  const [degreeLevel, setDegreeLevel] = useState('all');
  const [academicSchool, setAcademicSchool] = useState('all');

  const degreeCatalog = [
    { level: 'bachelor', school: 'engineering', title: 'B.Sc. Computer Science & AI', desc: 'A rigorous foundation in algorithm engineering, machine learning pipelines, and software systems.', tuition: '$45,000/yr', pathway: 'AI Architect, Software Director' },
    { level: 'bachelor', school: 'business', title: 'BBA — Business Operations', desc: 'Develop strategies for international corporate management, logistics, and investment finance.', tuition: '$42,000/yr', pathway: 'Operations Lead, Venture Analyst' },
    { level: 'master', school: 'engineering', title: 'M.Sc. Cybersecurity Engineering', desc: 'Advanced cryptography, defensive threat detection, secure cloud architecture, and network audits.', tuition: '$48,000/yr', pathway: 'CISO, Cryptographer' },
    { level: 'master', school: 'business', title: 'MBA — Institutional Finance', desc: 'Executive training in algorithmic portfolio modeling, corporate governance, and venture capital economics.', tuition: '$52,000/yr', pathway: 'Investment Partner, CFO' },
    { level: 'doctorate', school: 'sciences', title: 'Ph.D. Bio-Engineering & Genomics', desc: 'Pioneering molecular biology research, CRISPR cell engineering, and bioinformatics analytics.', tuition: 'Fully Funded', pathway: 'Principal Scientist, Professor' },
    { level: 'doctorate', school: 'humanities', title: 'Ph.D. Classical Literature', desc: 'Historical analysis of comparative epics, ancient manuscript conservation, and philosophical prose.', tuition: 'Fully Funded', pathway: 'Curator, Archival Director' },
    { level: 'certificate', school: 'sciences', title: 'Data Analytics Bootcamp', desc: 'Practical analytics using Python databases, advanced SQL queries, and interactive Tableau dashboards.', tuition: '$8,000 (total)', pathway: 'Systems Analyst, BI Analyst' },
    { level: 'certificate', school: 'business', title: 'Digital Growth Marketing', desc: 'A modern program targeting conversion optimization, viral loops, search index audits, and ad spend.', tuition: '$6,500 (total)', pathway: 'Performance Marketer' }
  ];

  const filteredDegrees = degreeCatalog.filter(deg => {
    const matchLevel = degreeLevel === 'all' || deg.level === degreeLevel;
    const matchSchool = academicSchool === 'all' || deg.school === academicSchool;
    return matchLevel && matchSchool;
  });

  /* ==========================================
     4. Net Price Attendance Calculator
     ========================================== */
  const [residency, setResidency] = useState('instate');
  const [scholarship, setScholarship] = useState(0);
  const [needGrant, setNeedGrant] = useState(0);
  const [includeRoomBoard, setIncludeRoomBoard] = useState(true);

  const getBaseTuition = () => {
    if (residency === 'outstate') return 45000;
    if (residency === 'international') return 50000;
    return 40000;
  };

  const baseTuition = getBaseTuition();
  const roomBoardCost = includeRoomBoard ? 15000 : 0;
  const netCost = Math.max(0, baseTuition + roomBoardCost - scholarship - needGrant);

  /* ==========================================
     5. Multi-Step Admissions Wizard
     ========================================== */
  const [wizardStep, setWizardStep] = useState(1); // 1, 2, 3, or 'receipt'
  const [appFirstName, setAppFirstName] = useState('');
  const [appLastName, setAppLastName] = useState('');
  const [appEmail, setAppEmail] = useState('');
  const [appPhone, setAppPhone] = useState('');
  const [appDegree, setAppDegree] = useState('Bachelor of Science in Computer Science & AI');
  const [appTerm, setAppTerm] = useState('Fall 2026 (Priority)');
  const [appAid, setAppAid] = useState(true);
  const [appAgree, setAppAgree] = useState(false);

  // Submitted Receipt State
  const [submittedReceipt, setSubmittedReceipt] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleNextStep = (step) => {
    if (step === 2) {
      if (!appFirstName.trim() || !appLastName.trim() || !appEmail.trim() || !appPhone.trim()) {
        alert('Please fill out all fields in Step 1.');
        return;
      }
    }
    setWizardStep(step);
  };

  const handlePrevStep = (step) => {
    setWizardStep(step);
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    if (!appAgree) {
      alert('You must certify and agree to the integrity policies to proceed.');
      return;
    }

    setSubmitting(true);
    const trackingId = 'MU-' + Math.floor(100000 + Math.random() * 900000);

    const payload = {
      fullName: `${appFirstName.trim()} ${appLastName.trim()}`,
      email: appEmail.trim(),
      targetProgram: appDegree,
      counselorNotes: `Target Term: ${appTerm}. Financial Aid Requested: ${appAid ? 'Yes' : 'No'}. Phone: ${appPhone.trim()}`
    };

    try {
      const response = await fetch('http://localhost:8080/api/admissions/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        setSubmittedReceipt({
          name: data.fullName,
          trackingId: data.trackingId,
          degree: data.targetProgram,
          term: appTerm
        });
      } else {
        throw new Error('Server returned error status');
      }
    } catch (err) {
      console.warn('Backend API connection failed, falling back to local simulation:', err);
      // Fallback local receipt generation
      setSubmittedReceipt({
        name: `${appFirstName} ${appLastName}`,
        trackingId: trackingId,
        degree: appDegree,
        term: appTerm
      });
    } finally {
      setSubmitting(false);
      setWizardStep('receipt');
    }
  };

  const handleRestartWizard = () => {
    setAppFirstName('');
    setAppLastName('');
    setAppEmail('');
    setAppPhone('');
    setAppAgree(false);
    setSubmittedReceipt(null);
    setWizardStep(1);
  };

  /* ==========================================
     6. Campus Tour & Visit Scheduler
     ========================================== */
  const [activeLandmark, setActiveLandmark] = useState('quad');
  const [tourBooked, setTourBooked] = useState(false);
  const [tourDate, setTourDate] = useState('');
  const [tourTime, setTourTime] = useState('10:00 AM');

  const facilityDetails = {
    quad: {
      title: 'Historic Central Quadrangle',
      desc: 'The iconic gothic heart of the university campus. Built in 1895, featuring green lawns and classic stone arches.',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
    },
    library: {
      title: 'Sterling Memorial Library',
      desc: 'Housing over 4.5 million print volumes, manuscript collections, and cathedral-style quiet study halls.',
      img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80'
    },
    discovery: {
      title: 'Discovery Center',
      desc: 'Our bio-tech and robotics research laboratory housing multi-photon imaging microscopes and cleanroom grids.',
      img: 'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&w=600&q=80'
    },
    residence: {
      title: 'Residence Commons',
      desc: 'Premium student housing clusters offering collaborative lounges, cafes, and dining spaces.',
      img: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=80'
    }
  };

  const handleBookTour = (e) => {
    e.preventDefault();
    setTourBooked(true);
  };

  /* ==========================================
     7. Academic Calendar Event RSVPs
     ========================================== */
  const [rsvpEvents, setRsvpEvents] = useState({});
  const [toastMessage, setToastMessage] = useState('');

  const handleRsvp = (eventId, eventTitle) => {
    setRsvpEvents(prev => ({ ...prev, [eventId]: true }));
    setToastMessage(`Registered successfully for: ${eventTitle}`);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const [activeEventTab, setActiveEventTab] = useState('all');

  const calendarEvents = [
    { id: 1, date: 'Oct 12, 2026', time: '10:00 AM', title: 'Generative AI & LLM Ethics Summit', desc: 'Panel debate addressing computational alignments, copyright bounds, and deployment safety.', category: 'seminar' },
    { id: 2, date: 'Oct 28, 2026', time: '02:00 PM', title: 'Cello & Chamber Music Concert', desc: 'An evening of classical string arrangements inside Sterling Cathedral Hall.', category: 'culture' },
    { id: 3, date: 'Nov 09, 2026', time: '09:00 AM', title: 'Bio-Genomics Discovery Fair', desc: 'Interactive display of research models from target CRISPR CRISPR labs.', category: 'exhibits' },
    { id: 4, date: 'Nov 20, 2026', time: '11:30 AM', title: 'Autonomous Robotics Expo', desc: 'Live showcase of sensor arrays, obstacle routes, and robotic mapping.', category: 'exhibits' }
  ];

  const filteredEvents = calendarEvents.filter(evt =>
    activeEventTab === 'all' || evt.category === activeEventTab
  );

  /* ==========================================
     8. Research Stories Gazette Fullscreen Modals
     ========================================== */
  const [activeStory, setActiveStory] = useState(null);

  const storyDatabase = {
    "1": {
      title: "Entangled States Achieved Across Meadows Network",
      meta: "Sciences | Research Story | August 14, 2026",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Researchers in the theoretical physics group at Modern University have managed to stabilize quantum entangled networks across a record-breaking 15 miles of standard fiber optic layout. The team, directed by Nobel Laureate Dr. Albert Einstein, utilized a new crystalline waveguide configuration that minimizes decoherence traps caused by kinetic noise and temperature fluxes.</p>
        <p>This achievement represents a significant milestone in quantum network architectures, bringing us closer to a fully secure, unhackable quantum internet structure. The research team has already successfully transmitted test packets across the Meadows loop, verifying quantum parity feedback in real-time.</p>
      `
    },
    "2": {
      title: "CRISPR Cell Editing Enhances Lifespan Indicators",
      meta: "Biomedical | Research Story | July 19, 2026",
      image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>The genomics research division at the Modern University Discovery Center has reported successful cell editing results using a revised CRISPR-Cas12 target structure. In laboratory modeling, the modifications demonstrated a 30% longevity increase in telomeric indicators without altering standard genetic behaviors.</p>
        <p>Led by Endowed Chair Dr. Jane Goodall, the research focuses on cellular repair mechanisms that decay during aging. The Cas12 waveguide configuration allows for targeted sequence insertions with 99.4% accuracy, mitigating the risks of off-target edits that have challenged previous genomic models.</p>
      `
    },
    "3": {
      title: "14th-Century Gothic Manuscripts Translated",
      meta: "History & Linguistics | Research Story | June 05, 2026",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Our archival division, in collaboration with linguistic historians, has completed the digital translation index of recently unearthed 14th-century Gothic parchments. The manuscripts, found during renovations of a monastery near Prague, detail administrative logs, philosophical essays, and classical translations.</p>
        <p>Using advanced multispectral imaging pipelines developed at our CompSci department, researchers under the humanities directorate recovered text hidden beneath decades of water degradation and ink fading.</p>
      `
    }
  };

  /* ==========================================
     9. Newsletter Subscriptions
     ========================================== */
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSuccess(true);
      setNewsEmail('');
    }
  };

  return (
    <div id="home" style={{ position: 'relative' }}>
      {/* Top Executive Utility Bar */}
      <div className="utility-bar">
        <div className="container utility-container">
          <div className="utility-left">
            <span className="utility-item"><i className="fa-solid fa-star"></i> Fall 2026 Admissions Open — Early Decision Deadline Nov 15</span>
            <span className="utility-separator">|</span>
            <span className="utility-item"><i className="fa-solid fa-cloud-sun"></i> Cambridge Meadows: 68°F / 20°C Sunny</span>
          </div>
          <div className="utility-right">
            <span className="utility-item"><i className="fa-solid fa-phone"></i> +1 (800) 555-UNIV</span>
            <span className="utility-separator">|</span>
            <a href="/college" className="utility-link" style={{ color: '#fbbf24', fontWeight: 'bold' }}>College Portal</a>
            <span className="utility-separator">|</span>
            <a href="/myschool" className="utility-link" style={{ color: '#fde047', fontWeight: 'bold' }}>MySchool Portal</a>
            <span className="utility-separator">|</span>
            <a href="/admin" className="utility-link"><i className="fa-solid fa-user-graduate"></i> Staff Console</a>
          </div>
        </div>
      </div>

      {/* Transparent Header */}
      <header className="header" style={{ position: 'absolute', top: '40px' }}>
        <div className="container nav-container">
          <a href="/" className="logo-wrapper">
            <div className="crest-logo">
              <i className="fa-solid fa-graduation-cap" style={{ color: '#eab308' }}></i>
            </div>
            <div className="logo-text">
              <h3>Modern</h3>
              <p>University</p>
            </div>
          </a>
          
          <nav className="nav-menu">
            <div className="nav-dropdown-item"><a href="#home" className="active">Home</a></div>
            <div className="nav-dropdown-item"><a href="#admission-portal">Admission</a></div>
            <div className="nav-dropdown-item"><a href="#degree-finder">Academics</a></div>
            <div className="nav-dropdown-item"><a href="#tour-section">Campus Life</a></div>
            <div className="nav-dropdown-item"><a href="#faculty-showcase">Faculty</a></div>
            <div className="nav-dropdown-item"><a href="#calendar-events">Events</a></div>
            <div className="nav-dropdown-item"><a href="#gazette">News</a></div>
          </nav>
          
          <div className="header-right-side">
            <a href="#admission-portal" className="btn-apply-now">APPLY NOW</a>
          </div>
        </div>
      </header>
      {/* ==========================================
           1. Hero Background Slider
           ========================================== */}
      <div 
        className="hero-wrapper" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.5)), url('${backgrounds[currentSlide]}')`
        }}
      >
        {/* Slider Navigation Arrows */}
        <button className="slider-arrow prev-arrow" onClick={handlePrevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="slider-arrow next-arrow" onClick={handleNextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="container hero-container-inner">
            <div className="hero-badge">
              <i className="fa-solid fa-seedling"></i> Tier 1 Research Institution
            </div>
            <h1 className="hero-title" style={{ color: '#fff' }}>Pioneering Research & Future Technology</h1>
            <p className="hero-subtitle">Join collaborative research clusters spanning Artificial Intelligence, Sustainable Energy Systems, and Translational Medicine on our state-of-the-art campus.</p>
            <div className="hero-buttons">
              <a href="#faculty-showcase" className="btn btn-labs">Explore Research Labs <i className="fa-solid fa-arrow-right"></i></a>
              <a href="#degree-finder" className="btn btn-green">View Degree Catalog</a>
            </div>
          </div>
        </div>

        {/* Hero Bottom Area */}
        <div className="hero-bottom-area">
          <div className="hero-indicators">
            <span className="indicator-item"><i className="fa-regular fa-circle-check"></i> 100% Need-Met Financial Aid</span>
            <span className="indicator-item"><i className="fa-regular fa-circle-check"></i> Top Tier Global Accreditation</span>
            <span className="indicator-item"><i className="fa-regular fa-circle-check"></i> 14:1 Student to Faculty Ratio</span>
          </div>
          <div className="slider-dots">
            {backgrounds.map((_, idx) => (
              <span 
                key={idx} 
                className={`dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => handleSlideChange(idx)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Global Rankings & Eminence Strip */}
      <section className="rankings-strip">
        <div className="container strip-grid">
          <div className="strip-item">
            <h2>#12</h2>
            <p>QS World University Ranking</p>
          </div>
          <div className="strip-item">
            <h2>#1</h2>
            <p>Graduate Career Employability</p>
          </div>
          <div className="strip-item">
            <h2>100%</h2>
            <p>Need-Blind Financial Aid Policy</p>
          </div>
        </div>
      </section>

      {/* ==========================================
           3. Academic Degree Finder Filters
           ========================================== */}
      <section id="degree-finder" className="degree-finder">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-tag">Academics</span>
            <h2 class="section-title">Academic Degree Finder</h2>
            <p class="section-desc">Search through our diverse portfolio of programs, curriculum roadmaps, and career pathways.</p>
          </div>

          <div className="finder-filters">
            <div className="filter-group">
              <label htmlFor="degree-level">Degree Level</label>
              <select 
                id="degree-level" 
                className="filter-select"
                value={degreeLevel}
                onChange={(e) => setDegreeLevel(e.target.value)}
              >
                <option value="all">All Degrees</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="doctorate">Doctorate</option>
                <option value="certificate">Certificate</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="academic-school">Academic School</label>
              <select 
                id="academic-school" 
                className="filter-select"
                value={academicSchool}
                onChange={(e) => setAcademicSchool(e.target.value)}
              >
                <option value="all">All Schools</option>
                <option value="engineering">School of Engineering</option>
                <option value="business">School of Business</option>
                <option value="humanities">School of Humanities</option>
                <option value="sciences">School of Sciences</option>
              </select>
            </div>
          </div>

          <div className="catalog-grid">
            {filteredDegrees.map((deg, idx) => (
              <div key={idx} className="catalog-card">
                <span className="catalog-badge">{deg.level.toUpperCase()}</span>
                <h3>{deg.title}</h3>
                <p className="catalog-text">{deg.desc}</p>
                <div className="catalog-details">
                  <span><strong>Tuition:</strong> {deg.tuition}</span>
                  <span><strong>Pathway:</strong> {deg.pathway}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
           4. Net Price Attendance Calculator
           ========================================== */}
      <section id="tuition-calc" className="tuition-calc">
        <div className="container calculator-wrapper">
          <div className="calc-info">
            <span className="section-tag">Finance</span>
            <h2 className="section-title">Net Price Calculator</h2>
            <p className="section-desc">Estimate your personalized annual attendance cost, including tuition, merit-based scholarships, and need-based institutional grants.</p>
            <div className="ranking-badge">
              <i className="fa-solid fa-award"></i>
              <p>100% of demonstrated financial need met for all admitted students.</p>
            </div>
          </div>
          
          <div className="calc-box">
            <div className="form-group">
              <label htmlFor="residency">Residency Status</label>
              <select 
                id="residency" 
                className="calc-input"
                value={residency}
                onChange={(e) => setResidency(e.target.value)}
              >
                <option value="instate">In-State Student ($40,000 base)</option>
                <option value="outstate">Out-of-State Student ($45,000 base)</option>
                <option value="international">International Student ($50,000 base)</option>
              </select>
            </div>
            
            <div className="form-group">
              <div className="slider-label-row">
                <label htmlFor="scholarship">Merit Scholarship Estimate</label>
                <span>${scholarship.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                id="scholarship" 
                min="0" 
                max="30000" 
                step="1000" 
                value={scholarship} 
                className="calc-slider"
                onChange={(e) => setScholarship(parseInt(e.target.value))}
              />
            </div>

            <div className="form-group">
              <div className="slider-label-row">
                <label htmlFor="need-grant">Need-Based Endowment Grant</label>
                <span>${needGrant.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                id="need-grant" 
                min="0" 
                max="40000" 
                step="1000" 
                value={needGrant} 
                className="calc-slider"
                onChange={(e) => setNeedGrant(parseInt(e.target.value))}
              />
            </div>

            <div className="form-group checkbox-row" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <input 
                type="checkbox" 
                id="room-board" 
                checked={includeRoomBoard}
                onChange={(e) => setIncludeRoomBoard(e.target.checked)}
              />
              <label htmlFor="room-board">Include On-Campus Room & Board (+$15,000)</label>
            </div>

            <div className="calc-results">
              <div className="result-row">
                <span>Base Tuition</span>
                <span>${baseTuition.toLocaleString()}</span>
              </div>
              <div className="result-row">
                <span>Room & Board</span>
                <span>+${roomBoardCost.toLocaleString()}</span>
              </div>
              <div className="result-row discount">
                <span>Scholarship Award</span>
                <span>- ${scholarship.toLocaleString()}</span>
              </div>
              <div className="result-row discount">
                <span>Endowment Grant</span>
                <span>- ${needGrant.toLocaleString()}</span>
              </div>
              <div className="result-divider"></div>
              <div className="result-row total">
                <span>Estimated Net Price</span>
                <span>${netCost.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
           5. Multi-Step Admissions Wizard
           ========================================== */}
      <section id="admission-portal" className="admission-portal">
        <div className="container portal-wrapper">
          
          <div className="portal-intro">
            <span className="section-tag">Enrollment</span>
            <h2 className="section-title">Admissions & Semester Enrollment Portal</h2>
            <p className="section-desc">Submit your admissions application using our multi-step wizard. Track your progress with a dynamic candidate ID.</p>
            
            {wizardStep !== 'receipt' && (
              <div className="flow-steps">
                <div className={`flow-step ${wizardStep >= 1 ? 'active' : ''}`}>
                  <div className="step-num">1</div>
                  <p>Applicant Info</p>
                </div>
                <div className={`flow-step ${wizardStep >= 2 ? 'active' : ''}`}>
                  <div className="step-num">2</div>
                  <p>Academic Program</p>
                </div>
                <div className={`flow-step ${wizardStep >= 3 ? 'active' : ''}`}>
                  <div className="step-num">3</div>
                  <p>Verification</p>
                </div>
              </div>
            )}
          </div>

          <div className="portal-form-container">
            {/* Step 1 Form */}
            {wizardStep === 1 && (
              <div className="wizard-step active">
                <h3>Step 1: Contact Information</h3>
                <p>Please enter your name and contact details.</p>
                <div className="form-group-grid">
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text" 
                      placeholder="John" 
                      value={appFirstName}
                      onChange={(e) => setAppFirstName(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      value={appLastName}
                      onChange={(e) => setAppLastName(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="johndoe@example.com" 
                    value={appEmail}
                    onChange={(e) => setAppEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 019-9988" 
                    value={appPhone}
                    onChange={(e) => setAppPhone(e.target.value)}
                    required 
                  />
                </div>
                <button className="btn btn-black step-next" onClick={() => handleNextStep(2)}>
                  Next Step <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )}

            {/* Step 2 Form */}
            {wizardStep === 2 && (
              <div className="wizard-step active">
                <h3>Step 2: Degree Select & Target Term</h3>
                <p>Choose your academic school, degree program, and the target start term.</p>
                <div className="form-group">
                  <label htmlFor="app-degree">Intended Degree Level</label>
                  <select 
                    id="app-degree" 
                    className="wizard-input"
                    value={appDegree}
                    onChange={(e) => setAppDegree(e.target.value)}
                  >
                    <option value="Bachelor of Science in Computer Science & AI">Bachelor of Science in Computer Science & AI</option>
                    <option value="Bachelor of Business Administration">Bachelor of Business Administration</option>
                    <option value="Master of Science in Cybersecurity Engineering">Master of Science in Cybersecurity Engineering</option>
                    <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
                    <option value="Ph.D. Bio-Engineering & Genomics">Ph.D. Bio-Engineering & Genomics</option>
                    <option value="Ph.D. Classical Literature">Ph.D. Classical Literature</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="app-term">Target Term</label>
                  <select 
                    id="app-term" 
                    className="wizard-input"
                    value={appTerm}
                    onChange={(e) => setAppTerm(e.target.value)}
                  >
                    <option value="Fall 2026 (Priority)">Fall 2026 (Priority)</option>
                    <option value="Spring 2027">Spring 2027</option>
                    <option value="Fall 2027">Fall 2027</option>
                  </select>
                </div>
                <div className="form-group checkbox-row" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    id="app-aid" 
                    checked={appAid}
                    onChange={(e) => setAppAid(e.target.checked)}
                  />
                  <label htmlFor="app-aid">I wish to be considered for institutional need-blind financial aid grants.</label>
                </div>
                <div className="wizard-buttons">
                  <button className="btn btn-outline step-prev" onClick={() => handlePrevStep(1)}>
                    <i className="fa-solid fa-arrow-left"></i> Back
                  </button>
                  <button className="btn btn-black step-next" onClick={() => handleNextStep(3)}>
                    Next Step <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 Form */}
            {wizardStep === 3 && (
              <div className="wizard-step active">
                <h3>Step 3: Submit Application</h3>
                <p>Review the details below and agree to academic integrity policies before submitting.</p>
                <div className="review-box">
                  <div className="review-row"><span>Full Name</span><strong>{appFirstName} {appLastName}</strong></div>
                  <div className="review-row"><span>Degree Level</span><strong>{appDegree}</strong></div>
                  <div className="review-row"><span>Target Term</span><strong>{appTerm}</strong></div>
                  <div className="review-row"><span>Financial Aid Requested</span><strong>{appAid ? 'Yes' : 'No'}</strong></div>
                </div>
                <div className="form-group checkbox-row" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    id="app-agree" 
                    checked={appAgree}
                    onChange={(e) => setAppAgree(e.target.checked)}
                    required 
                  />
                  <label htmlFor="app-agree">I certify that all details submitted are legally accurate and represent my own credentials.</label>
                </div>
                <div className="wizard-buttons">
                  <button className="btn btn-outline step-prev" onClick={() => handlePrevStep(2)}>
                    <i className="fa-solid fa-arrow-left"></i> Back
                  </button>
                  <button className="btn btn-green" onClick={handleSubmitApplication} disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Application'} <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Success Receipt */}
            {wizardStep === 'receipt' && submittedReceipt && (
              <div className="wizard-success-card" style={{ display: 'flex' }}>
                <div className="success-icon-wrap"><i className="fa-solid fa-circle-check"></i></div>
                <h3>Application Submitted Successfully!</h3>
                <p>Your enrollment packet has been registered in the system. Copy your tracking ID for status updates.</p>
                
                <div className="receipt-details">
                  <div className="receipt-row">
                    <span>Candidate Name</span>
                    <strong>{submittedReceipt.name}</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Candidate Tracking ID</span>
                    <strong className="tracking-id" style={{ color: 'var(--primary)' }}>{submittedReceipt.trackingId}</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Degree Selected</span>
                    <strong>{submittedReceipt.degree}</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Target Semester</span>
                    <strong>{submittedReceipt.term}</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Review Stage</span>
                    <span className="status-badge" style={{ background: '#ecfdf5', color: '#047857', padding: '4px 10px', borderRadius: '4px' }}>Document Integrity Verification</span>
                  </div>
                </div>
                
                <button className="btn btn-black" onClick={handleRestartWizard}>Submit Another Application</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
           6. Campus Tour & Visit Scheduler
           ========================================== */}
      <section id="tour-section" class="campus-tour">
        <div className="container">
          <div className="section-heading-block text-center">
            <span className="section-tag">Campus Life</span>
            <h2 className="section-title">Virtual Campus Tour & Facilities Explorer</h2>
            <p className="section-desc">Experience our historic and advanced landmarks. Explore online or schedule an in-person tour.</p>
          </div>

          <div className="facilities-grid">
            {Object.keys(facilityDetails).map((key) => {
              const fac = facilityDetails[key];
              return (
                <div 
                  key={key} 
                  className={`facility-card ${activeLandmark === key ? 'active' : ''}`}
                  onClick={() => setActiveLandmark(key)}
                >
                  <img src={fac.img} alt={fac.title} />
                  <div className="facility-body">
                    <h3>{fac.title}</h3>
                    <p>{fac.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="visit-scheduler">
            <div className="scheduler-intro">
              <h3>In-Person Tour Booking</h3>
              <p>Choose an available slot to book a guided campus tour with our student heralds.</p>
            </div>
            
            {!tourBooked ? (
              <form className="scheduler-form" onSubmit={handleBookTour}>
                <div className="form-row" style={{ display: 'flex', gap: 20 }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Select Tour Date</label>
                    <input 
                      type="date" 
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Select Time Slot</label>
                    <select 
                      value={tourTime}
                      onChange={(e) => setTourTime(e.target.value)}
                    >
                      <option value="10:00 AM">10:00 AM (Morning Tour)</option>
                      <option value="01:30 PM">01:30 PM (Midday Tour)</option>
                      <option value="04:00 PM">04:00 PM (Sunset Tour)</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-green">Book In-Person Tour</button>
              </form>
            ) : (
              <div className="tour-success-msg" style={{ display: 'block', padding: '20px', background: '#ecfdf5', color: '#047857', borderRadius: '12px' }}>
                Tour booked successfully for {tourDate} at {tourTime}! Check your email for details.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
           7. Distinguished Faculty Showcase
           ========================================== */}
      <section id="faculty-showcase" className="faculty-showcase" style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-heading-block">
            <span className="section-tag">Faculty</span>
            <h2 className="section-title">Distinguished Laureates & Faculty</h2>
            <p className="section-desc">Study under internationally recognized thinkers, Nobel Prize laureates, and industry pioneers.</p>
          </div>
          
          <div className="faculty-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
            <div className="faculty-card" style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div className="crest-logo" style={{ marginBottom: 20 }}><i className="fa-solid fa-flask"></i></div>
              <h3>Dr. Albert Einstein</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 10 }}>Nobel Laureate, Physics</p>
              <p style={{ color: 'var(--slate-muted)', fontSize: '0.85rem' }}>Leading the quantum entanglement research divisions across metropolitan meadows fibers.</p>
            </div>
            <div className="faculty-card" style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div className="crest-logo" style={{ marginBottom: 20 }}><i className="fa-solid fa-dna"></i></div>
              <h3>Dr. Jane Goodall</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 10 }}>Endowed Chair, Bio-Genomics</p>
              <p style={{ color: 'var(--slate-muted)', fontSize: '0.85rem' }}>Pioneering target CRISPR cell manipulation research inside our advanced Discovery Center.</p>
            </div>
            <div className="faculty-card" style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div className="crest-logo" style={{ marginBottom: 20 }}><i className="fa-solid fa-feather"></i></div>
              <h3>Prof. Adam Smith</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 10 }}>Archival Lead, Classical Literature</p>
              <p style={{ color: 'var(--slate-muted)', fontSize: '0.85rem' }}>Translating Gothic parchments and Czech historical manuscript indexes for digital archives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
           8. Academic Calendar & Events RSVPs
           ========================================== */}
      <section id="calendar-events" className="calendar-events" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-heading-block">
            <span className="section-tag">Calendar</span>
            <h2 className="section-title">Academic Events & RSVPs</h2>
            <p className="section-desc">Join interactive symposiums, panels, and showcases held on campus.</p>
          </div>

          <div id="events-tabs" style={{ display: 'flex', gap: 10, marginBottom: 30 }}>
            {['all', 'seminar', 'culture', 'exhibits'].map((tab) => (
              <button 
                key={tab}
                className={`tab-btn ${activeEventTab === tab ? 'active' : ''}`}
                onClick={() => setActiveEventTab(tab)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '99px',
                  border: '1px solid #e2e8f0',
                  background: activeEventTab === tab ? 'var(--primary)' : '#fff',
                  color: activeEventTab === tab ? '#fff' : '#0f172a',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="events-list" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {filteredEvents.map((evt) => (
              <div 
                key={evt.id} 
                className="event-card"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#fff',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700 }}>{evt.date} | {evt.time}</span>
                  <h3 style={{ margin: '8px 0' }}>{evt.title}</h3>
                  <p style={{ color: 'var(--slate-muted)', fontSize: '0.85rem' }}>{evt.desc}</p>
                </div>
                <button 
                  className="btn-rsvp"
                  onClick={() => handleRsvp(evt.id, evt.title)}
                  disabled={rsvpEvents[evt.id]}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: '1px solid var(--primary)',
                    background: rsvpEvents[evt.id] ? 'transparent' : 'var(--primary)',
                    color: rsvpEvents[evt.id] ? '#10b981' : '#fff',
                    borderColor: rsvpEvents[evt.id] ? '#10b981' : 'var(--primary)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {rsvpEvents[evt.id] ? 'Registered ✓' : 'Register RSVP'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
           9. Research Stories Gazette
           ========================================== */}
      <section id="gazette" className="gazette" style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-heading-block">
            <span className="section-tag">Gazette</span>
            <h2 className="section-title">Research Gazette Stories</h2>
            <p className="section-desc">Latest breakthroughs from our research hubs and discovery clusters.</p>
          </div>

          <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 30 }}>
            <div className="story-card" onClick={() => setActiveStory("1")} style={{ cursor: 'pointer' }}>
              <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80" alt="Story 1" style={{ width: '100%', borderRadius: '12px', height: '200px', objectFit: 'cover' }} />
              <h3 style={{ marginTop: 15 }}>Entangled States Achieved Across Meadows Network</h3>
              <p style={{ color: 'var(--slate-muted)', fontSize: '0.85rem', marginTop: 10 }}>Quantum theoretical physics stabilized across 15 miles fiber loop.</p>
            </div>
            <div className="story-card" onClick={() => setActiveStory("2")} style={{ cursor: 'pointer' }}>
              <img src="https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&q=80" alt="Story 2" style={{ width: '100%', borderRadius: '12px', height: '200px', objectFit: 'cover' }} />
              <h3 style={{ marginTop: 15 }}>CRISPR Cell Editing Enhances Lifespan Indicators</h3>
              <p style={{ color: 'var(--slate-muted)', fontSize: '0.85rem', marginTop: 10 }}>Discovery Center reports Cas12 molecular telomere accuracy.</p>
            </div>
            <div className="story-card" onClick={() => setActiveStory("3")} style={{ cursor: 'pointer' }}>
              <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80" alt="Story 3" style={{ width: '100%', borderRadius: '12px', height: '200px', objectFit: 'cover' }} />
              <h3 style={{ marginTop: 15 }}>14th-Century Gothic Manuscripts Translated</h3>
              <p style={{ color: 'var(--slate-muted)', fontSize: '0.85rem', marginTop: 10 }}>Multispectral imaging deciphers CZ monastic parchments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
           story Fullscreen Modal Overlay
           ========================================== */}
      {activeStory && storyDatabase[activeStory] && (
        <div 
          className="modal" 
          style={{ 
            display: 'flex', 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'rgba(15,23,42,0.85)', 
            zIndex: 2000, 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveStory(null)}
        >
          <div 
            className="modal-content"
            style={{ 
              background: '#fff', 
              maxWidth: '700px', 
              width: '100%', 
              maxHeight: '90vh', 
              overflowY: 'auto', 
              borderRadius: '24px', 
              padding: '40px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveStory(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <h2>{storyDatabase[activeStory].title}</h2>
            <span style={{ display: 'block', margin: '10px 0', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
              {storyDatabase[activeStory].meta}
            </span>
            <img 
              src={storyDatabase[activeStory].image} 
              alt="Story" 
              style={{ width: '100%', borderRadius: '12px', margin: '20px 0', maxHeight: '300px', objectFit: 'cover' }} 
            />
            <div 
              dangerouslySetInnerHTML={{ __html: storyDatabase[activeStory].content }} 
              style={{ lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}
            />
          </div>
        </div>
      )}

      {/* ==========================================
           10. Newsletter Section
           ========================================== */}
      <section id="newsletter-section" style={{ padding: '80px 0', background: 'var(--primary-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <span className="section-tag">Newsletter</span>
          <h2 className="section-title">Subscribe to Gazette News</h2>
          <p className="section-desc" style={{ margin: '0 auto 30px auto' }}>Get weekly email briefings of quantum research discoveries, cultural events, and admission dates.</p>
          
          {!newsSuccess ? (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 10 }}>
              <input 
                type="email" 
                placeholder="enter your email address" 
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: '14px 20px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  outline: 'none'
                }}
                required 
              />
              <button type="submit" className="btn btn-green" style={{ margin: 0 }}>Subscribe</button>
            </form>
          ) : (
            <div style={{ padding: '20px', background: '#ecfdf5', color: '#047857', borderRadius: '12px', fontWeight: 600 }}>
              Thank you for subscribing to Modern University Gazette!
            </div>
          )}
        </div>
      </section>

      {/* ==========================================
           RSVP Registration Toast Alert
           ========================================== */}
      {toastMessage && (
        <div 
          id="rsvp-toast" 
          style={{ 
            position: 'fixed', 
            bottom: '24px', 
            right: '24px', 
            background: '#0f172a', 
            color: '#fff', 
            padding: '16px 24px', 
            borderRadius: '12px', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: '0.9rem',
            fontWeight: 600,
            animation: 'slideUp 0.3s ease-out'
          }}
        >
          <i className="fa-solid fa-circle-check" style={{ color: '#10b981' }}></i>
          {toastMessage}
        </div>
      )}

      {/* ==========================================
           2. Command Palette Overlay
           ========================================== */}
      {cmdOpen && (
        <div 
          id="cmd-palette" 
          style={{ 
            display: 'flex', 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'rgba(15,23,42,0.6)', 
            zIndex: 4000, 
            alignItems: 'flex-start', 
            justifyContent: 'center',
            paddingTop: '15vh'
          }}
          onClick={() => setCmdOpen(false)}
        >
          <div 
            className="cmd-box"
            style={{ 
              background: '#fff', 
              maxWidth: '600px', 
              width: '100%', 
              borderRadius: '16px', 
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #e2e8f0', padding: '16px 20px' }}>
              <i className="fa-solid fa-magnifying-glass" style={{ color: '#64748b', marginRight: 12 }}></i>
              <input 
                ref={cmdInputRef}
                type="text" 
                placeholder="Search command shortcut or navigation..." 
                value={cmdQuery}
                onChange={(e) => setCmdQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  fontSize: '1rem',
                  color: '#0f172a'
                }}
              />
              <kbd style={{ fontSize: '0.75rem', padding: '4px 8px', background: '#f1f5f9', borderRadius: '4px', color: '#64748b' }}>ESC</kbd>
            </div>
            
            <div className="cmd-list" style={{ padding: '8px', maxHeight: '300px', overflowY: 'auto' }}>
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, idx) => (
                  <a 
                    key={idx}
                    href={cmd.link}
                    className="cmd-item"
                    onClick={() => setCmdOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: '#334155',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'background 0.2s'
                    }}
                  >
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem', marginRight: 12, color: '#94a3b8' }}></i>
                    {cmd.name}
                  </a>
                ))
              ) : (
                <div style={{ padding: '20px', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
                  No matching shortcuts found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer id="footer" style={{
        background: '#0f172a',
        color: 'white',
        padding: '60px 40px 30px 40px',
        marginTop: 80,
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 50
        }}>
          <div>
            <div className="logo-wrapper" style={{ marginBottom: 20 }}>
              <div className="crest-logo">
                <i className="fa-solid fa-graduation-cap" style={{ color: '#eab308' }}></i>
              </div>
              <div className="logo-text">
                <h3 style={{ color: '#fff' }}>Modern</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>University</p>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6' }}>
              Pioneering Tier 1 research, state-of-the-art technologies, and future leadership from our Cambridge Meadows campus.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: 20, fontSize: '1rem', fontFamily: 'var(--accent-font)' }}>Admissions</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem', padding: 0 }}>
              <li><a href="#admission-portal" style={{ color: '#cbd5e1' }}>Enrollment Portal</a></li>
              <li><a href="#tuition-calc" style={{ color: '#cbd5e1' }}>Tuition Calculator</a></li>
              <li><a href="#tour-section" style={{ color: '#cbd5e1' }}>Campus Visits</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: 20, fontSize: '1rem', fontFamily: 'var(--accent-font)' }}>Academics</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem', padding: 0 }}>
              <li><a href="#degree-finder" style={{ color: '#cbd5e1' }}>Degree Finder</a></li>
              <li><a href="#faculty-showcase" style={{ color: '#cbd5e1' }}>Distinguished Faculty</a></li>
              <li><a href="#gazette" style={{ color: '#cbd5e1' }}>Research Gazette</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: 20, fontSize: '1rem', fontFamily: 'var(--accent-font)' }}>Portals</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem', padding: 0 }}>
              <li><a href="/admin" style={{ color: '#cbd5e1' }}>Staff Console</a></li>
              <li><a href="/college" style={{ color: '#cbd5e1' }}>College Portal</a></li>
              <li><a href="/myschool" style={{ color: '#cbd5e1' }}>MySchool Portal</a></li>
            </ul>
          </div>
        </div>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          paddingTop: 30,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
          fontSize: '0.8rem',
          color: '#94a3b8'
        }}>
          <span>&copy; {new Date().getFullYear()} Modern University. All Rights Reserved.</span>
          <span>Built with React + Java Spring Boot + MySQL.</span>
        </div>
      </footer>
    </div>
  );
}
