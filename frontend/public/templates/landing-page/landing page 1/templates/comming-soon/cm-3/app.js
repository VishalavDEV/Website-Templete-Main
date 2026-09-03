/* ==========================================================================
   AURA SKY RESIDENCES - Master Luxury Controller Script (Vanilla JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. DYNAMIC LUXURY AMBIENT SYNTHESIS (Web Audio API)
    // ----------------------------------------------------------------------
    class AmbientAudioEngine {
        constructor() {
            this.ctx = null;
            this.osc1 = null;
            this.osc2 = null;
            this.gainNode = null;
            this.filter = null;
            this.lfo = null;
            this.lfoGain = null;
            this.isInitialized = false;
        }

        init() {
            if (this.isInitialized) return;
            try {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                this.ctx = new AudioContextClass();
                
                // Synth Low Luxury Pad (C2 & G2 chord)
                this.osc1 = this.ctx.createOscillator();
                this.osc1.type = 'sine';
                this.osc1.frequency.value = 65.41; // C2

                this.osc2 = this.ctx.createOscillator();
                this.osc2.type = 'triangle';
                this.osc2.frequency.value = 98.00; // G2

                this.filter = this.ctx.createBiquadFilter();
                this.filter.type = 'lowpass';
                this.filter.frequency.value = 180;
                this.filter.Q.value = 4;

                // Slow LFO for filter wash sweep
                this.lfo = this.ctx.createOscillator();
                this.lfo.type = 'sine';
                this.lfo.frequency.value = 0.15; // very slow wash

                this.lfoGain = this.ctx.createGain();
                this.lfoGain.gain.value = 60; // sweep filter between 120Hz and 240Hz

                this.gainNode = this.ctx.createGain();
                this.gainNode.gain.value = 0.0;

                // Connections
                this.osc1.connect(this.filter);
                this.osc2.connect(this.filter);
                this.lfo.connect(this.lfoGain);
                this.lfoGain.connect(this.filter.frequency); // modulate filter frequency
                
                this.filter.connect(this.gainNode);
                this.gainNode.connect(this.ctx.destination);

                this.osc1.start();
                this.osc2.start();
                this.lfo.start();
                
                this.isInitialized = true;
            } catch (e) {
                console.warn("Web Audio API failed to load:", e);
            }
        }

        setVolume(vol, fadeDuration = 0.8) {
            if (!this.isInitialized) this.init();
            if (!this.ctx) return;
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            const targetVal = Math.max(0, Math.min(0.08, vol)); // low background ambient volume
            this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
            this.gainNode.gain.linearRampToValueAtTime(targetVal, this.ctx.currentTime + fadeDuration);
        }

        playClick() {
            if (!this.isInitialized) this.init();
            if (!this.ctx) return;
            if (this.ctx.state === 'suspended') this.ctx.resume();

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.05);

            gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + 0.06);
        }
    }

    const audio = new AmbientAudioEngine();

    // ----------------------------------------------------------------------
    // 2. HERO BACKGROUND PRELOAD SHOW
    // ----------------------------------------------------------------------
    const bgVideo = document.getElementById('bg-video');
    if (bgVideo) {
        // Fade in background video once loaded
        bgVideo.onload = () => {
            bgVideo.classList.remove('opacity-0');
            bgVideo.classList.add('opacity-100');
        };
        // Trigger fallback if load completes cached
        if (bgVideo.complete) {
            bgVideo.classList.remove('opacity-0');
            bgVideo.classList.add('opacity-100');
        }
    }

    // ----------------------------------------------------------------------
    // 3. LENIS SMOOTH SCROLL SYSTEM
    // ----------------------------------------------------------------------
    const lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Bind navigation smooth clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            audio.playClick();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target);
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.add('translate-x-full');
                }
            }
        });
    });

    // ----------------------------------------------------------------------
    // 4. NAVIGATION TRANSLUCENT SOLIDIFY ON SCROLL
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('nav-solidify');
        } else {
            navbar.classList.remove('nav-solidify');
        }
    });

    // ----------------------------------------------------------------------
    // 5. MOBILE MENU PANEL TOGGLE
    // ----------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            audio.playClick();
            mobileMenu.classList.remove('translate-x-full');
        });
    }

    if (mobileCloseBtn && mobileMenu) {
        mobileCloseBtn.addEventListener('click', () => {
            audio.playClick();
            mobileMenu.classList.add('translate-x-full');
        });
    }

    // ----------------------------------------------------------------------
    // 6. AUDIO SOUND EFFECTS ON/OFF TOGGLE
    // ----------------------------------------------------------------------
    const audioToggle = document.getElementById('audio-toggle');
    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            const isOff = audioToggle.textContent.includes('OFF');
            audio.playClick();

            if (isOff) {
                audio.init();
                audio.setVolume(0.08); // activate low hum
                audioToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i> SOUND ON';
                audioToggle.classList.remove('text-zinc-400');
                audioToggle.classList.add('text-brand-gold');
            } else {
                audio.setVolume(0.0); // mute low hum
                audioToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> SOUND OFF';
                audioToggle.classList.remove('text-brand-gold');
                audioToggle.classList.add('text-zinc-400');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 7. ARCHITECTURAL COUNTDOWN CLOCK HUD
    // ----------------------------------------------------------------------
    // Set target date 118 days ahead (as per standard coming soon mockup status)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 118);
    targetDate.setHours(targetDate.getHours() + 7);
    targetDate.setMinutes(targetDate.getMinutes() + 42);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        if (difference <= 0) {
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minsEl) minsEl.textContent = '00';
            if (secsEl) secsEl.textContent = '00';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
        if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // ----------------------------------------------------------------------
    // 8. ENQUIRY FORM submission capture
    // ----------------------------------------------------------------------
    const enquiryForm = document.getElementById('enquiry-form');
    const formContainer = document.getElementById('enquiry-form-container');
    const successMessage = document.getElementById('enquiry-success-message');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            audio.playClick();

            if (formContainer && successMessage) {
                formContainer.style.display = 'none';
                successMessage.classList.remove('hidden');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 9. MAP GET DIRECTIONS INTERACTION
    // ----------------------------------------------------------------------
    const getDirectionsBtn = document.getElementById('get-directions-btn');
    if (getDirectionsBtn) {
        getDirectionsBtn.addEventListener('click', () => {
            audio.playClick();
            alert("Fetching real-estate coordinates... opening directions overlay.");
        });
    }

    // ----------------------------------------------------------------------
    // 10. GALLERY LIGHTBOX MODAL CONTROLLER
    // ----------------------------------------------------------------------
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            audio.playClick();
            const imgSrc = item.getAttribute('data-image');
            const imgTitle = item.getAttribute('data-title');

            if (lightbox && lightboxImg && lightboxTitle) {
                lightboxImg.src = imgSrc;
                lightboxTitle.textContent = imgTitle;
                lightbox.classList.add('active');
            }
        });
    });

    if (lightboxCloseBtn && lightbox) {
        lightboxCloseBtn.addEventListener('click', () => {
            audio.playClick();
            lightbox.classList.remove('active');
        });
        // Click overlay background to close
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                audio.playClick();
                lightbox.classList.remove('active');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 11. GSAP ENTRANCE ANIMATIONS
    // ----------------------------------------------------------------------
    gsap.registerPlugin(ScrollTrigger);

    // Animate About Section
    gsap.from('#about h2, #about p, #about .grid', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out'
    });

    // Animate Features Section Cards
    gsap.from('#features .glass-panel', {
        scrollTrigger: {
            trigger: '#features',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power2.out'
    });

    // Animate Project Details Grid
    gsap.from('#details .glass-panel', {
        scrollTrigger: {
            trigger: '#details',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: 40,
        duration: 1,
        ease: 'power2.out'
    });
});
