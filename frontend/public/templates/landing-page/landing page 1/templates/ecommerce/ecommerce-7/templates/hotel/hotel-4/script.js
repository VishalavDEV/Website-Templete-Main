document.addEventListener('DOMContentLoaded', () => {
  /* --- Data --- */
  const TOUR_SCENES = [
    {
      id: 'scene-trail',
      title: 'I. The Forest Trail',
      desc: 'A winding pathway through ancient redwood forests, designed to isolate the senses and invite deep calm.',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'scene-cabin',
      title: 'II. Solitude Lake Lodge',
      desc: 'Our main sanctuary sitting silently at the edge of cold glacial waters, surrounded by snow-dusted alpine ridges.',
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'scene-spa',
      title: 'III. Mineral Hot Springs',
      desc: 'Soaking tubs fed directly by underground alpine hot springs, carved from forest basalt stone.',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'scene-night',
      title: 'IV. Unconnected Cosmic Sky',
      desc: 'Zero light pollution allows clear visibility of the cosmos. Sleep under the canopy of the Milky Way.',
      image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const EXPERIENCES = [
    {
      id: 'hydrotherapy',
      num: '01',
      name: 'Hydrotherapy & Forest Spa',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      tag: 'WELLNESS RITUALS',
      description: 'Thermal stone massages, pine-scented steam chambers, and natural cedar hot tubs fed by pure alpine mineral springs. Designed to synchronize with the forest atmosphere.'
    },
    {
      id: 'gastronomy',
      num: '02',
      name: 'Forest Gastronomy & Dining',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
      tag: 'MICHELIN DINING',
      description: 'Bespoke outdoor gastronomy. Organic ingredients sourced directly from the estate’s greenhouse, cooked over open pine embers by award-winning chefs.'
    },
    {
      id: 'acoustic',
      num: '03',
      name: 'Acoustic Twilight Sessions',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1000&q=80',
      tag: 'CURATED SOUND',
      description: 'Delicate classical and acoustic strings under starry night skies. Unplugged, intimate performances by visiting soloists in our open-air forest amphitheater.'
    },
    {
      id: 'safari',
      num: '04',
      name: 'Wild Alpine Expeditions',
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1000&q=80',
      tag: 'NATURE SAFARI',
      description: 'Chaperoned treks through ancient redwood forests, twilight lake kayaking, and wild foraging sessions with our resident botanists.'
    }
  ];

  const REVIEWS = [
    {
      id: 1,
      quote: "Solitude Haven is an otherworldly retreat. Sleeping under the starlit sky inside the Glass Villa felt like floating in the cosmos. Every detail was absolute perfection.",
      author: "Evelyn & Liam K.",
      stayDate: "The Glass Villa · July 2026"
    },
    {
      id: 2,
      quote: "The quiet here is physical. It wraps around you. The hydrotherapy spa cured months of deep city burnout in three days. We'll make this an annual pilgrimage.",
      author: "Arthur M.",
      stayDate: "The Forest Pavilion · June 2026"
    },
    {
      id: 3,
      quote: "A masterclass in quiet luxury. No gaudiness, just raw nature paired with pristine hospitality. The lake-side sauna and open-air michelin dining were sublime.",
      author: "Sophia V.",
      stayDate: "Overwater Sanctuary · August 2026"
    }
  ];

  const SUITES_DATA = [
    { id: 'glass-villa', name: 'The Glass Villa' },
    { id: 'forest-pavilion', name: 'The Forest Pavilion' },
    { id: 'overwater-sanctuary', name: 'Overwater Sanctuary' }
  ];

  lucide.createIcons();

  /* --- Clock & Weather --- */
  let temperature = 16.4;
  let windSpeed = 4;
  const timeEl = document.getElementById('live-time');
  const tempEl = document.getElementById('temperature');
  const windEl = document.getElementById('wind-speed');

  setInterval(() => {
    const date = new Date();
    timeEl.innerText = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }, 1000);

  setInterval(() => {
    temperature = +(temperature + (Math.random() * 0.4 - 0.2)).toFixed(1);
    windSpeed = Math.max(1, Math.min(12, Math.round(windSpeed + (Math.random() * 2 - 1))));
    tempEl.innerText = temperature;
    windEl.innerText = windSpeed;
  }, 4000);

  /* --- Scroll Reveal --- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sh-visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.sh-reveal').forEach(el => observer.observe(el));

  /* --- Mobile Drawer --- */
  const drawer = document.getElementById('mobile-drawer');
  document.getElementById('mobile-menu-open-btn').addEventListener('click', () => {
    drawer.classList.add('sh-open');
  });
  document.getElementById('mobile-menu-close-btn').addEventListener('click', () => {
    drawer.classList.remove('sh-open');
  });

  /* --- Magnetic Buttons --- */
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
    });
  });

  /* --- Suites Slider --- */
  let activeSuiteIdx = 0;
  const suitesTrack = document.getElementById('suites-track');
  const prevSuiteBtn = document.getElementById('suite-prev-btn');
  const nextSuiteBtn = document.getElementById('suite-next-btn');
  const suiteProgressBar = document.getElementById('suite-progress-bar');
  const numSuites = SUITES_DATA.length;

  function updateSuitesSlider() {
    suitesTrack.style.transform = `translateX(calc(-${activeSuiteIdx * (100 / numSuites)}% - ${activeSuiteIdx * 10}px))`;
    prevSuiteBtn.disabled = activeSuiteIdx === 0;
    nextSuiteBtn.disabled = activeSuiteIdx === numSuites - 1;
    suiteProgressBar.style.width = `${((activeSuiteIdx + 1) / numSuites) * 100}%`;
  }

  prevSuiteBtn.addEventListener('click', () => {
    if (activeSuiteIdx > 0) {
      activeSuiteIdx--;
      updateSuitesSlider();
    }
  });

  nextSuiteBtn.addEventListener('click', () => {
    if (activeSuiteIdx < numSuites - 1) {
      activeSuiteIdx++;
      updateSuitesSlider();
    }
  });

  /* --- Suite Tabs --- */
  document.querySelectorAll('.suite-tabs-nav').forEach((nav) => {
    const suiteIdx = nav.getAttribute('data-suite');
    const btns = nav.querySelectorAll('.sh-habitat-tab-btn');
    const contentBox = document.getElementById(`suite-content-${suiteIdx}`);
    const contents = contentBox.querySelectorAll('.sh-tab-fade');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('sh-active'));
        btn.classList.add('sh-active');
        const tabName = btn.getAttribute('data-tab');
        
        contents.forEach(c => {
          if (c.getAttribute('data-content') === tabName) {
            c.style.display = (c.tagName === 'DIV' && c.classList.contains('sh-inclusions-grid')) ? 'grid' : (c.tagName === 'DIV' ? 'flex' : 'block');
          } else {
            c.style.display = 'none';
          }
        });
      });
    });
  });

  /* --- Experiences Switcher --- */
  let activeExpIdx = 0;
  const expBg = document.getElementById('exp-bg');
  const expTag = document.getElementById('exp-tag');
  const expTitle = document.getElementById('exp-title');
  const expDesc = document.getElementById('exp-desc');
  const expListContainer = document.querySelector('.sh-exp-index-list');

  function renderExpList() {
    expListContainer.innerHTML = '';
    EXPERIENCES.forEach((exp, idx) => {
      const btn = document.createElement('button');
      btn.className = `sh-exp-index-item ${idx === activeExpIdx ? 'sh-active' : ''}`;
      btn.innerHTML = `
        <div class="sh-exp-index-header">
          <span class="sh-exp-index-num">${exp.num}.</span>
          <span class="sh-exp-index-name">${exp.name}</span>
          <span style="font-size: 1.2rem; color: ${idx === activeExpIdx ? 'var(--sh-accent-gold)' : '#c0c8c6'}">${idx === activeExpIdx ? '−' : '+'}</span>
        </div>
        <div class="sh-exp-index-body">
          <p class="sh-exp-index-desc">${exp.description}</p>
        </div>
      `;
      btn.addEventListener('click', () => {
        activeExpIdx = idx;
        renderExpList();
        
        expBg.style.backgroundImage = `url('${exp.image}')`;
        expTag.innerText = exp.tag;
        expTitle.innerText = exp.name;
        expDesc.innerText = exp.description;
      });
      expListContainer.appendChild(btn);
    });
  }
  renderExpList();

  /* --- Testimonials Slider --- */
  let activeReviewIdx = 0;
  const quoteEl = document.getElementById('test-quote');
  const authorEl = document.getElementById('test-author');
  const dateEl = document.getElementById('test-date');
  const dotsContainer = document.getElementById('test-dots');

  function renderTestimonial() {
    quoteEl.innerText = REVIEWS[activeReviewIdx].quote;
    authorEl.innerText = REVIEWS[activeReviewIdx].author;
    dateEl.innerText = REVIEWS[activeReviewIdx].stayDate;

    dotsContainer.innerHTML = '';
    REVIEWS.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `sh-test-dot ${idx === activeReviewIdx ? 'sh-active' : ''}`;
      dot.addEventListener('click', () => {
        activeReviewIdx = idx;
        renderTestimonial();
      });
      dotsContainer.appendChild(dot);
    });
  }
  renderTestimonial();

  setInterval(() => {
    activeReviewIdx = (activeReviewIdx + 1) % REVIEWS.length;
    renderTestimonial();
  }, 7000);

  /* --- Booking Modal --- */
  const bookingModal = document.getElementById('booking-modal');
  const bookingForm = document.getElementById('booking-form');
  const bookingSuccess = document.getElementById('booking-success');
  const suiteSelect = document.getElementById('booking-suite');
  const bookedSuiteName = document.getElementById('booked-suite-name');

  const openBooking = (suiteId) => {
    if (suiteId) {
      suiteSelect.value = suiteId;
    }
    bookingForm.style.display = 'flex';
    bookingSuccess.style.display = 'none';
    bookingModal.style.display = 'flex';
  };

  document.querySelectorAll('.btn-book-stay').forEach(btn => {
    btn.addEventListener('click', () => openBooking());
  });

  document.querySelectorAll('.btn-book-suite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      openBooking(e.currentTarget.getAttribute('data-suite-id'));
    });
  });

  document.getElementById('close-booking-btn').addEventListener('click', () => {
    bookingModal.style.display = 'none';
  });

  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) bookingModal.style.display = 'none';
  });

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedText = suiteSelect.options[suiteSelect.selectedIndex].text.split(' (')[0];
    bookedSuiteName.innerText = selectedText;
    bookingForm.style.display = 'none';
    bookingSuccess.style.display = 'flex';
  });

  document.getElementById('return-sanctuary-btn').addEventListener('click', () => {
    bookingModal.style.display = 'none';
  });

  /* --- Cinematic Tour --- */
  const tourModal = document.getElementById('tour-modal');
  let tourPlaying = true;
  let tourSceneIdx = 0;
  let tourProgress = 0;
  let tourTimer = null;

  const tourSlideshow = document.getElementById('tour-slideshow');
  const tourProgressContainer = document.getElementById('tour-progress-container');
  const tourTitle = document.getElementById('tour-title');
  const tourDesc = document.getElementById('tour-desc');
  const playPauseBtn = document.getElementById('tour-play-pause-btn');

  function initTour() {
    tourSlideshow.innerHTML = '';
    tourProgressContainer.innerHTML = '';

    TOUR_SCENES.forEach((scene, idx) => {
      const slide = document.createElement('div');
      slide.className = `sh-tour-slide ${idx === tourSceneIdx ? 'sh-active' : ''}`;
      slide.style.backgroundImage = `url('${scene.image}')`;
      slide.id = `tour-slide-${idx}`;
      tourSlideshow.appendChild(slide);

      const track = document.createElement('div');
      track.className = 'sh-tour-progress-track';
      const fill = document.createElement('div');
      fill.className = 'sh-tour-progress-fill';
      fill.id = `tour-fill-${idx}`;
      track.appendChild(fill);
      tourProgressContainer.appendChild(track);
    });
    updateTourUI();
  }

  function updateTourUI() {
    tourTitle.innerText = TOUR_SCENES[tourSceneIdx].title;
    tourDesc.innerText = TOUR_SCENES[tourSceneIdx].desc;

    for (let i = 0; i < TOUR_SCENES.length; i++) {
      const slide = document.getElementById(`tour-slide-${i}`);
      const fill = document.getElementById(`tour-fill-${i}`);
      
      if (i === tourSceneIdx) {
        slide.classList.add('sh-active');
        fill.style.width = `${tourProgress}%`;
      } else {
        slide.classList.remove('sh-active');
        if (i < tourSceneIdx) {
          fill.style.width = '100%';
        } else {
          fill.style.width = '0%';
        }
      }
    }

    if (tourPlaying) {
      playPauseBtn.innerHTML = '<span class="sh-pause-icon"></span>';
    } else {
      playPauseBtn.innerHTML = '<i data-lucide="play" style="width: 12px; height: 12px; fill: currentColor"></i>';
      lucide.createIcons();
    }
  }

  function startTourTimer() {
    if (tourTimer) clearInterval(tourTimer);
    tourTimer = setInterval(() => {
      if (tourPlaying) {
        tourProgress += 1;
        if (tourProgress >= 100) {
          tourProgress = 0;
          tourSceneIdx = (tourSceneIdx + 1) % TOUR_SCENES.length;
        }
        updateTourUI();
      }
    }, 50);
  }

  document.getElementById('open-tour-btn').addEventListener('click', () => {
    tourModal.style.display = 'flex';
    tourSceneIdx = 0;
    tourProgress = 0;
    tourPlaying = true;
    initTour();
    startTourTimer();
  });

  document.getElementById('close-tour-btn').addEventListener('click', () => {
    tourModal.style.display = 'none';
    if (tourTimer) clearInterval(tourTimer);
  });

  tourModal.addEventListener('click', (e) => {
    if (e.target === tourModal) {
      tourModal.style.display = 'none';
      if (tourTimer) clearInterval(tourTimer);
    }
  });

  document.getElementById('tour-prev-btn').addEventListener('click', () => {
    tourSceneIdx = (tourSceneIdx - 1 + TOUR_SCENES.length) % TOUR_SCENES.length;
    tourProgress = 0;
    updateTourUI();
  });

  document.getElementById('tour-next-btn').addEventListener('click', () => {
    tourSceneIdx = (tourSceneIdx + 1) % TOUR_SCENES.length;
    tourProgress = 0;
    updateTourUI();
  });

  playPauseBtn.addEventListener('click', () => {
    tourPlaying = !tourPlaying;
    updateTourUI();
  });

  /* --- Newsletter --- */
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSuccess = document.getElementById('newsletter-success');
  const newsletterEmail = document.getElementById('newsletter-email');

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (newsletterEmail.value.trim()) {
      newsletterSuccess.style.display = 'block';
      setTimeout(() => {
        newsletterSuccess.style.display = 'none';
        newsletterEmail.value = '';
      }, 4000);
    }
  });

  /* --- Web Audio Ambience --- */
  let ambiencePlaying = false;
  let audioCtx = null;
  let noiseNode = null;
  let filterNode = null;
  let gainNode = null;
  let lfoNode = null;
  const toggleAmbienceBtn = document.getElementById('toggle-ambience-btn');
  const ambienceIcon = document.getElementById('ambience-icon');
  const ambienceText = document.getElementById('ambience-text');
  const visualizerWave = document.getElementById('visualizer-wave');

  toggleAmbienceBtn.addEventListener('click', () => {
    if (ambiencePlaying) {
      // Stop
      if (gainNode && audioCtx) {
        gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.8);
        setTimeout(() => {
          if (noiseNode) { noiseNode.stop(); noiseNode.disconnect(); }
          if (lfoNode) { lfoNode.stop(); lfoNode.disconnect(); }
          if (audioCtx) { audioCtx.close(); }
          audioCtx = null;
          noiseNode = null;
          filterNode = null;
          gainNode = null;
          lfoNode = null;
        }, 800);
      }
      ambiencePlaying = false;
      toggleAmbienceBtn.classList.remove('sh-playing');
      ambienceIcon.setAttribute('data-lucide', 'volume-x');
      ambienceText.innerText = 'SOUNDSCAPES';
      visualizerWave.style.display = 'none';
      lucide.createIcons();
    } else {
      // Play
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();

        const bufferSize = 4 * audioCtx.sampleRate;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + (0.02 * white)) / 1.02;
          lastOut = output[i];
          output[i] *= 3.5;
        }

        noiseNode = audioCtx.createBufferSource();
        noiseNode.buffer = noiseBuffer;
        noiseNode.loop = true;

        filterNode = audioCtx.createBiquadFilter();
        filterNode.type = 'lowpass';
        filterNode.frequency.value = 350;

        gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 2.0);

        lfoNode = audioCtx.createOscillator();
        lfoNode.frequency.value = 0.08;

        const lfoGain = audioCtx.createGain();
        lfoGain.gain.value = 150;

        lfoNode.connect(lfoGain);
        lfoGain.connect(filterNode.frequency);
        noiseNode.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        lfoNode.start();
        noiseNode.start();

        ambiencePlaying = true;
        toggleAmbienceBtn.classList.add('sh-playing');
        ambienceIcon.setAttribute('data-lucide', 'volume-2');
        ambienceText.innerText = 'AMBIENCE ON';
        visualizerWave.style.display = 'inline-flex';
        lucide.createIcons();
      } catch (e) {
        console.error("Web Audio synthesis failed:", e);
      }
    }
  });

});
