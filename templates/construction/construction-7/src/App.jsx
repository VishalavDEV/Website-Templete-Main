import React, { useState, useRef } from 'react';
import '../style.css';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  // Before / After Slider state
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef(null);

  // Estimator state
  const [era, setEra] = useState('18th-century');
  const [areaSqFt, setAreaSqFt] = useState(4500);
  const [tier, setTier] = useState('museum');

  // Handle slider mouse / touch move
  const handleSliderMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  // Estimator calculation
  const calculateEstimate = () => {
    let baseRate = 320;
    if (era === 'medieval') baseRate = 480;
    if (era === 'renaissance') baseRate = 410;
    if (era === '18th-century') baseRate = 360;
    if (era === 'victorian') baseRate = 290;

    let tierMultiplier = 1.0;
    if (tier === 'museum') tierMultiplier = 1.35;
    if (tier === 'monument') tierMultiplier = 1.65;

    const total = Math.round(areaSqFt * baseRate * tierMultiplier);
    const masonry = Math.round(total * 0.42);
    const timber = Math.round(total * 0.28);
    const gilding = Math.round(total * 0.30);
    const months = Math.round(Math.sqrt(areaSqFt) * 0.18 + 6);

    return { total, masonry, timber, gilding, months };
  };

  const estimate = calculateEstimate();

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalSuccess(true);
    setTimeout(() => {
      setModalSuccess(false);
      setIsModalOpen(false);
    }, 2500);
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Château de Montmirail',
      era: '17th Century Baroque',
      location: 'Loire Valley, France',
      desc: 'Complete seismic consolidation, French limestone facade carving, and gold-leaf restoration across 14 historic salons.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      badge: 'UNESCO Heritage Partner'
    },
    {
      id: 2,
      title: 'Palazzo Ducale Conservatory',
      era: '16th Century Venetian Renaissance',
      location: 'Venice, Italy',
      desc: 'Submerged pilings consolidation, Venetian marmorino plaster rehabilitation, and antique Murano chandelier structural anchorages.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      badge: 'Europa Nostra Award'
    },
    {
      id: 3,
      title: 'Kensington Manor & Orangery',
      era: 'Victorian Classical Revival',
      location: 'London, United Kingdom',
      desc: 'Structural timber beam consolidation, slate roof restoration, and bespoke cast-iron conservatory thermal retrofit.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      badge: 'Grade I Listed'
    }
  ];

  return (
    <div className={`wrapper w-full max-w-full overflow-x-hidden min-h-screen ${isLightMode ? 'lightMode' : ''}`}>
      {/* Top Sticky Navigation */}
      <header className="topBar sticky top-0 z-50 w-full border-b border-[var(--burgundy-border)] bg-[rgba(27,5,8,0.96)] backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
          <a href="#hero" className="brandLogo flex flex-col text-left group no-underline">
            <span className="brandTitle font-serif text-lg sm:text-xl lg:text-2xl font-black tracking-widest text-[var(--text-main)] leading-none">
              AURELIUS
            </span>
            <span className="brandSub text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[var(--gold-light)] font-bold mt-1 uppercase">
              HERITAGE ATELIER • EST. 1988
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 list-none m-0 p-0">
            <a href="#hero" className="navLink text-xs font-mono font-bold tracking-widest text-[var(--text-body)] hover:text-[var(--gold-light)] uppercase transition-colors">
              Atelier
            </a>
            <a href="#comparison" className="navLink text-xs font-mono font-bold tracking-widest text-[var(--text-body)] hover:text-[var(--gold-light)] uppercase transition-colors">
              Restoration
            </a>
            <a href="#portfolio" className="navLink text-xs font-mono font-bold tracking-widest text-[var(--text-body)] hover:text-[var(--gold-light)] uppercase transition-colors">
              Monuments
            </a>
            <a href="#estimator" className="navLink text-xs font-mono font-bold tracking-widest text-[var(--text-body)] hover:text-[var(--gold-light)] uppercase transition-colors">
              Estimator
            </a>
          </nav>

          {/* Actions */}
          <div className="topActions flex items-center gap-2 sm:gap-3">
            <button
              className="themeToggleBtn px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs font-mono font-bold border border-[var(--gold-primary)] bg-[rgba(253,230,138,0.1)] hover:bg-[var(--gold-primary)] hover:text-[#1b0508] text-[var(--text-main)] transition-all cursor-pointer flex items-center gap-1.5"
              onClick={() => setIsLightMode(!isLightMode)}
              aria-label="Toggle Theme"
            >
              {isLightMode ? '🌙 DARK' : '☀️ LIGHT'}
            </button>

            <button
              className="consultationBtn hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-mono font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#fde68a] via-[#d4a373] to-[#b45309] text-[#1b0508] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              COMMISSION ATELIER
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="mobileMenuBtn lg:hidden p-2 rounded-lg text-[var(--text-main)] hover:bg-[rgba(253,230,138,0.1)] transition-colors border border-[var(--burgundy-border)] cursor-pointer flex flex-col justify-center items-center gap-1.5 w-10 h-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <span className={`w-5 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--burgundy-border)] bg-[var(--burgundy-surface)] px-4 py-6 shadow-2xl transition-all">
            <div className="flex flex-col gap-4">
              <a
                href="#hero"
                className="text-sm font-mono font-bold tracking-wider text-[var(--text-main)] hover:text-[var(--gold-light)] uppercase py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                🏛️ Atelier
              </a>
              <a
                href="#comparison"
                className="text-sm font-mono font-bold tracking-wider text-[var(--text-main)] hover:text-[var(--gold-light)] uppercase py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                🔍 Restoration
              </a>
              <a
                href="#portfolio"
                className="text-sm font-mono font-bold tracking-wider text-[var(--text-main)] hover:text-[var(--gold-light)] uppercase py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                🏰 Archival Monuments
              </a>
              <a
                href="#estimator"
                className="text-sm font-mono font-bold tracking-wider text-[var(--text-main)] hover:text-[var(--gold-light)] uppercase py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                📊 Cost Estimator
              </a>

              <div className="pt-2 border-t border-[var(--burgundy-border)] flex flex-col gap-3">
                <button
                  className="w-full text-center py-3 px-4 rounded-lg bg-gradient-to-r from-[#fde68a] via-[#d4a373] to-[#b45309] text-[#1b0508] font-mono font-extrabold text-xs tracking-wider uppercase shadow-lg cursor-pointer"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  COMMISSION ATELIER
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="heroSection relative w-full overflow-hidden py-10 md:py-16 lg:py-24 bg-[var(--burgundy-dark)]" id="hero">
        <div className="heroOverlay absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[rgba(27,5,8,0.98)] via-[rgba(38,9,13,0.90)] to-[rgba(27,5,8,0.75)] pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hero Left Column */}
            <div className="heroLeft lg:col-span-7 flex flex-col">
              <h1 className="heroTitle text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-[var(--gold-light)] leading-[1.1] mb-3 uppercase">
                SAVING TIMELESS<br />HERITAGE
              </h1>
              <p className="heroSubtitle text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest text-slate-300 uppercase mb-6 sm:mb-8">
                CLASSICAL EUROPEAN MASONRY & HISTORIC MONUMENT CONSERVATION
              </p>

              {/* Sub-cards Split (Facade image + Conservation pillars) */}
              <div className="heroCardRow flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 w-full">
                <div className="heroFacadeImgWrap w-full sm:w-52 md:w-60 h-52 sm:h-auto min-h-[220px] rounded-xl overflow-hidden border border-[var(--burgundy-border)] shadow-xl relative flex-shrink-0 group">
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
                    alt="Historic Facade Restoration"
                    className="heroFacadeImg w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-[10px] font-mono px-2.5 py-1 rounded text-[#fde68a] border border-[var(--burgundy-border)]">
                    ARCHIVAL CHÂTEAU
                  </span>
                </div>

                <div className="renovationBurgundyCard flex-1 bg-gradient-to-br from-[#3d0c11] to-[#220508] border border-[var(--burgundy-border)] rounded-xl p-5 sm:p-6 shadow-xl relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                      <h3 className="renovationCardTitle font-serif text-sm sm:text-base font-bold text-[#fde68a] tracking-wider uppercase">
                        CONSERVATION PILLARS
                      </h3>
                      <span className="estBadge text-[10px] sm:text-xs font-mono font-bold text-[var(--gold-light)] px-2 py-0.5 rounded border border-[var(--gold-primary)]/40">
                        ISO 19650
                      </span>
                    </div>

                    <div className="renovationList space-y-2 mb-5">
                      <div className="renovationItem text-xs sm:text-sm font-mono text-slate-200 flex items-center gap-2">
                        <span className="text-[#fde68a] font-bold">✓</span> Hand-Carved French Limestone
                      </div>
                      <div className="renovationItem text-xs sm:text-sm font-mono text-slate-200 flex items-center gap-2">
                        <span className="text-[#fde68a] font-bold">✓</span> Timber Beam Micro-Consolidation
                      </div>
                      <div className="renovationItem text-xs sm:text-sm font-mono text-slate-200 flex items-center gap-2">
                        <span className="text-[#fde68a] font-bold">✓</span> 24k Gold Leaf Architectural Gilding
                      </div>
                      <div className="renovationItem text-xs sm:text-sm font-mono text-slate-200 flex items-center gap-2">
                        <span className="text-[#fde68a] font-bold">✓</span> Reversible Heritage Mortar Formulas
                      </div>
                    </div>
                  </div>

                  <button
                    className="consultationBtn w-full text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#fde68a] via-[#d4a373] to-[#b45309] text-[#1b0508] font-mono font-extrabold text-xs tracking-wider uppercase hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                  >
                    REQUEST HERITAGE AUDIT →
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Right Column */}
            <div className="heroRight lg:col-span-5 flex flex-col gap-6 w-full">
              {/* White Box: Disciplines */}
              <div className="whiteLeadersBox bg-white text-[#1b0508] rounded-2xl p-5 sm:p-7 shadow-2xl w-full">
                <h3 className="whiteBoxTitle text-sm sm:text-base font-serif font-black tracking-wider text-[#1b0508] border-b-2 border-slate-100 pb-3 mb-4 uppercase">
                  MASTER CRAFTSMANSHIP DISCIPLINES
                </h3>
                <div className="craftsGrid space-y-3">
                  <div className="craftCard flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 hover:translate-x-1 transition-all">
                    <span className="craftIcon text-2xl flex-shrink-0">🏛️</span>
                    <div>
                      <div className="craftName text-xs sm:text-sm font-mono font-extrabold text-[#1b0508]">
                        MONUMENTAL STONECRAFT
                      </div>
                      <div className="craftSub text-[11px] sm:text-xs text-slate-600">
                        Gothic arches, Corinthian capitals, and tracery
                      </div>
                    </div>
                  </div>

                  <div className="craftCard flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 hover:translate-x-1 transition-all">
                    <span className="craftIcon text-2xl flex-shrink-0">🪵</span>
                    <div>
                      <div className="craftName text-xs sm:text-sm font-mono font-extrabold text-[#1b0508]">
                        MEDIEVAL TIMBER CONSOLIDATION
                      </div>
                      <div className="craftSub text-[11px] sm:text-xs text-slate-600">
                        Endoscopic carbon-fiber splines & historic resins
                      </div>
                    </div>
                  </div>

                  <div className="craftCard flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 hover:translate-x-1 transition-all">
                    <span className="craftIcon text-2xl flex-shrink-0">✨</span>
                    <div>
                      <div className="craftName text-xs sm:text-sm font-mono font-extrabold text-[#1b0508]">
                        VENETIAN MARMORINO STUCCO
                      </div>
                      <div className="craftSub text-[11px] sm:text-xs text-slate-600">
                        Natural slaked lime with Carrara marble dust
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges Grid */}
              <div className="specialtiesBox w-full">
                <div className="specialtiesGrid grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div
                    className="specialtyCardGold bg-gradient-to-br from-[#d4a373] to-[#b45309] text-white p-4 sm:p-5 rounded-xl shadow-lg cursor-pointer hover:-translate-y-1 transition-all"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="specialtyTitleTop text-[11px] font-mono font-bold tracking-widest opacity-90">
                      UNESCO COMPLIANCE
                    </div>
                    <div className="specialtyTitleBottom font-serif text-sm sm:text-base font-black tracking-wider mt-1">
                      100% REVERSIBLE
                    </div>
                  </div>
                  <div
                    className="specialtyCardBurgundy bg-gradient-to-br from-[#4a0e14] to-[#1b0508] border border-[var(--burgundy-border)] text-white p-4 sm:p-5 rounded-xl shadow-lg cursor-pointer hover:-translate-y-1 transition-all"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="specialtyTitleTop text-[11px] font-mono font-bold tracking-widest opacity-90">
                      LANDMARK RECORD
                    </div>
                    <div className="specialtyTitleBottom font-serif text-sm sm:text-base font-black tracking-wider mt-1">
                      40+ CHÂTEAUX
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Before / After Interactive Slider Section */}
      <section className="sectionWrapper py-10 md:py-16 lg:py-24 border-t border-[var(--burgundy-border)]/50" id="comparison">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sectionHeadingBox text-center mb-8 sm:mb-12">
            <div className="sectionTag text-xs sm:text-sm font-mono font-extrabold tracking-widest text-[var(--gold-light)] mb-2 uppercase">
              // CRAFTSMANSHIP EVIDENCE
            </div>
            <h2 className="sectionTitle text-2xl sm:text-3xl lg:text-5xl font-serif font-black text-[var(--text-main)] mb-3">
              PRECISION HISTORIC RESTORATION
            </h2>
            <p className="sectionDesc text-xs sm:text-sm md:text-base text-[var(--text-body)] max-w-2xl mx-auto leading-relaxed">
              Drag the interactive slider below to inspect our forensic stone descaling, micro-sandblasting, and mortar stabilization.
            </p>
          </div>

          <div
            className="beforeAfterContainer relative w-full max-w-5xl mx-auto aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-[var(--burgundy-border)] select-none cursor-ew-resize mt-6"
            ref={sliderRef}
            onMouseMove={(e) => handleSliderMove(e.clientX)}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image */}
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
              alt="Before Restoration"
              className="beforeImg absolute inset-0 w-full h-full object-cover filter grayscale sepia-[0.35] brightness-75 pointer-events-none"
            />
            <span className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-sm text-[10px] sm:text-xs font-mono font-bold text-slate-300 px-3 py-1 rounded border border-white/20 pointer-events-none">
              BEFORE RESTORATION
            </span>

            {/* After Image with clip */}
            <div
              className="afterImgWrap absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
                alt="After Restoration"
                className="afterImg absolute inset-0 w-[100vw] max-w-[1080px] h-full object-cover pointer-events-none"
              />
              <span className="absolute top-4 left-4 z-20 bg-[#1b0508]/90 backdrop-blur-sm text-[10px] sm:text-xs font-mono font-bold text-[#fde68a] px-3 py-1 rounded border border-[#fde68a]/40 pointer-events-none whitespace-nowrap">
                AFTER RESTORATION
              </span>
            </div>

            {/* Handle Bar */}
            <div
              className="sliderHandleBar absolute top-0 bottom-0 w-1 bg-[#fde68a] pointer-events-none shadow-[0_0_16px_rgba(253,230,138,0.8)] -translate-x-1/2 z-30"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="sliderHandleKnob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 sm:w-11 h-10 sm:h-11 bg-[#1b0508] text-[#fde68a] border-2 border-[#fde68a] rounded-full flex items-center justify-center text-sm font-bold shadow-2xl">
                ‹ ›
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="sectionWrapper py-10 md:py-16 lg:py-24 border-t border-[var(--burgundy-border)]/50" id="portfolio">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sectionHeadingBox text-center mb-8 sm:mb-12">
            <div className="sectionTag text-xs sm:text-sm font-mono font-extrabold tracking-widest text-[var(--gold-light)] mb-2 uppercase">
              // ARCHIVAL MONUMENTS
            </div>
            <h2 className="sectionTitle text-2xl sm:text-3xl lg:text-5xl font-serif font-black text-[var(--text-main)] mb-3">
              PRESERVED MASTERWORKS
            </h2>
            <p className="sectionDesc text-xs sm:text-sm md:text-base text-[var(--text-body)] max-w-2xl mx-auto leading-relaxed">
              Selected private châteaux, listed cathedrals, and Renaissance palazzos restored under our master conservators.
            </p>
          </div>

          <div className="portfolioGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="portfolioCard flex flex-col bg-[var(--burgundy-surface)] border border-[var(--burgundy-border)] rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
              >
                <div className="portfolioImgWrap relative w-full h-52 sm:h-56 md:h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolioImg w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-[#fde68a] font-mono text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded border border-[var(--burgundy-border)] flex-wrap">
                    {item.badge}
                  </span>
                </div>

                <div className="portfolioBody p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs font-mono font-bold text-[var(--gold-primary)] tracking-wider uppercase block mb-1">
                      {item.era} • {item.location}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-main)] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-5">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    className="consultationBtn w-full text-center py-2.5 px-4 rounded-lg bg-[rgba(253,230,138,0.08)] border border-[var(--burgundy-border)] hover:bg-[var(--gold-primary)] hover:text-[#1b0508] text-[var(--text-main)] font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                  >
                    INSPECT ARCHIVAL LOGS →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parametric Estimator Section */}
      <section className="sectionWrapper py-10 md:py-16 lg:py-24 border-t border-[var(--burgundy-border)]/50" id="estimator">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sectionHeadingBox text-center mb-8 sm:mb-12">
            <div className="sectionTag text-xs sm:text-sm font-mono font-extrabold tracking-widest text-[var(--gold-light)] mb-2 uppercase">
              // HERITAGE FEASIBILITY
            </div>
            <h2 className="sectionTitle text-2xl sm:text-3xl lg:text-5xl font-serif font-black text-[var(--text-main)] mb-3">
              CONSERVATION COST ESTIMATOR
            </h2>
            <p className="sectionDesc text-xs sm:text-sm md:text-base text-[var(--text-body)] max-w-2xl mx-auto leading-relaxed">
              Instant budgetary forecasting for historical architectural restorations based on era classification and square footage.
            </p>
          </div>

          <div className="estimatorContainer bg-[var(--burgundy-surface)] border border-[var(--burgundy-border)] rounded-2xl p-5 sm:p-8 lg:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Controls Column */}
            <div className="estimatorControls lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <label className="block text-xs font-mono font-bold text-[var(--gold-light)] uppercase tracking-wider mb-2">
                  MONUMENT ERA CLASSIFICATION:
                </label>
                <select
                  value={era}
                  onChange={(e) => setEra(e.target.value)}
                  className="w-full p-3 sm:p-3.5 bg-[var(--burgundy-dark)] text-[var(--text-main)] border border-[var(--burgundy-border)] rounded-xl font-mono text-xs sm:text-sm focus:outline-none focus:border-[var(--gold-primary)]"
                >
                  <option value="medieval">Medieval / Gothic Superstructure (Pre-1500)</option>
                  <option value="renaissance">High Renaissance Palazzo (1500–1650)</option>
                  <option value="18th-century">18th-Century Baroque / Neoclassical (1650–1830)</option>
                  <option value="victorian">Victorian & Edwardian Classical Revival (1830–1910)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                  <span className="text-xs font-mono font-bold text-[var(--gold-light)] uppercase tracking-wider">
                    RESTORATION FOOTPRINT:
                  </span>
                  <span className="font-mono font-bold text-xs sm:text-sm text-[var(--gold-light)] bg-[var(--burgundy-dark)] px-2.5 py-1 rounded border border-[var(--burgundy-border)]">
                    {areaSqFt.toLocaleString()} SQ FT
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="25000"
                  step="500"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="w-full accent-[var(--gold-primary)] cursor-pointer h-2 bg-[var(--burgundy-dark)] rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[var(--gold-light)] uppercase tracking-wider mb-2">
                  CRAFTSMANSHIP GRADE:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setTier('standard')}
                    className={`py-2.5 px-3 rounded-lg font-mono text-xs font-bold border transition-all cursor-pointer ${
                      tier === 'standard'
                        ? 'bg-[var(--gold-primary)] text-[#1b0508] border-[var(--gold-primary)] shadow-md'
                        : 'bg-[var(--burgundy-dark)] text-[var(--text-main)] border-[var(--burgundy-border)] hover:border-[var(--gold-primary)]'
                    }`}
                  >
                    PRESERVATION
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier('museum')}
                    className={`py-2.5 px-3 rounded-lg font-mono text-xs font-bold border transition-all cursor-pointer ${
                      tier === 'museum'
                        ? 'bg-[var(--gold-primary)] text-[#1b0508] border-[var(--gold-primary)] shadow-md'
                        : 'bg-[var(--burgundy-dark)] text-[var(--text-main)] border-[var(--burgundy-border)] hover:border-[var(--gold-primary)]'
                    }`}
                  >
                    MUSEUM GRADE
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier('monument')}
                    className={`py-2.5 px-3 rounded-lg font-mono text-xs font-bold border transition-all cursor-pointer ${
                      tier === 'monument'
                        ? 'bg-[var(--gold-primary)] text-[#1b0508] border-[var(--gold-primary)] shadow-md'
                        : 'bg-[var(--burgundy-dark)] text-[var(--text-main)] border-[var(--burgundy-border)] hover:border-[var(--gold-primary)]'
                    }`}
                  >
                    LANDMARK UNESCO
                  </button>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="estimatorResults lg:col-span-5 bg-[var(--burgundy-dark)] border border-[var(--burgundy-border)] rounded-xl p-5 sm:p-7 flex flex-col justify-between shadow-inner">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase block">
                  ESTIMATED CONSERVATION INVESTMENT
                </span>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--gold-light)] my-2 leading-tight">
                  ${estimate.total.toLocaleString()}
                </div>
                <div className="text-xs text-[var(--text-muted)] mb-5">
                  ⏱️ Estimated Schedule: ~{estimate.months} Months with Master Conservators
                </div>

                <div className="space-y-2.5 border-t border-[var(--burgundy-border)] pt-4 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-muted)]">Limestone & Masonry Carving:</span>
                    <strong className="text-[var(--text-main)] font-mono">${estimate.masonry.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-muted)]">Timber & Seismic Consolidation:</span>
                    <strong className="text-[var(--text-main)] font-mono">${estimate.timber.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-muted)]">Stucco, Fresco & Gilding:</span>
                    <strong className="text-[var(--text-main)] font-mono">${estimate.gilding.toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              <button
                className="consultationBtn w-full mt-6 py-3 px-4 rounded-lg bg-gradient-to-r from-[#fde68a] via-[#d4a373] to-[#b45309] text-[#1b0508] font-mono font-extrabold text-xs tracking-wider uppercase text-center shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                COMMISSION HERITAGE FEASIBILITY STUDY →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-10 md:py-16 border-t border-[var(--burgundy-border)] bg-[rgba(27,5,8,0.98)] text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="footerTitle font-serif text-lg sm:text-2xl font-black tracking-widest text-[var(--gold-light)] uppercase">
            AURELIUS HERITAGE RESTORATION
          </h3>
          <p className="footerContact text-xs sm:text-sm text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Head Atelier: 14 Place Vendôme, Paris, France • London Studio: 8 St James's Square, UK<br />
            Official partner to European Heritage Conservators, Historic England & UNESCO Grade Restorations.
          </p>
          <div className="footerBottom text-xs text-[var(--text-muted)] pt-4 border-t border-[var(--burgundy-border)]/40">
            &copy; 2026 Aurelius Heritage Atelier. All rights reserved. Reversible Conservation Excellence.
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div
          className="modalOverlay fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modalContent relative w-full max-w-lg bg-[var(--burgundy-surface)] border-2 border-[var(--gold-primary)] rounded-2xl p-6 sm:p-8 shadow-2xl my-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold p-1 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <span className="text-[11px] font-mono font-bold text-[var(--gold-light)] uppercase tracking-wider block">
              PRIVATE HERITAGE COMMISSION
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-main)] mt-1 mb-4">
              Request Atelier Consultation
            </h3>

            {modalSuccess ? (
              <div className="bg-emerald-950/80 border border-emerald-500 text-emerald-300 p-5 rounded-xl text-center font-mono text-xs sm:text-sm leading-relaxed">
                ✓ Consultation Inquiry Dispatched to Master Conservators!<br />
                Reference ID: AUR-{Math.floor(100000 + Math.random() * 900000)}
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                    ESTATE OR MONUMENT NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Château de Chalon / St. Michael's Rectory"
                    className="w-full p-3 bg-[var(--burgundy-dark)] border border-[var(--burgundy-border)] rounded-lg text-[var(--text-main)] text-xs sm:text-sm focus:outline-none focus:border-[var(--gold-primary)]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                      DIRECTOR / PATRON EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="patron@estate.org"
                      className="w-full p-3 bg-[var(--burgundy-dark)] border border-[var(--burgundy-border)] rounded-lg text-[var(--text-main)] text-xs sm:text-sm focus:outline-none focus:border-[var(--gold-primary)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+33 1 42 68 00 00"
                      className="w-full p-3 bg-[var(--burgundy-dark)] border border-[var(--burgundy-border)] rounded-lg text-[var(--text-main)] text-xs sm:text-sm focus:outline-none focus:border-[var(--gold-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                    RESTORATION SCOPE & REQUIREMENTS
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe required stonecraft, structural stabilization, or archival timber rehabilitation..."
                    className="w-full p-3 bg-[var(--burgundy-dark)] border border-[var(--burgundy-border)] rounded-lg text-[var(--text-main)] text-xs sm:text-sm focus:outline-none focus:border-[var(--gold-primary)] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#fde68a] via-[#d4a373] to-[#b45309] text-[#1b0508] font-mono font-extrabold text-xs tracking-wider uppercase shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  SUBMIT CONFIDENTIAL COMMISSION →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}