/* ==========================================================================
   NOVA MOTORS NOVA X1 Showroom Template Master Controller (Vanilla JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. DYNAMIC AUDIO SYNTHESIS ENGINE (Web Audio API)
    // ----------------------------------------------------------------------
    class AudioEngine {
        constructor() {
            this.ctx = null;
            this.droneOsc = null;
            this.droneGain = null;
            this.filter = null;
            this.isInitialized = false;
        }

        init() {
            if (this.isInitialized) return;
            try {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                this.ctx = new AudioContextClass();
                
                // Synth Low EV motor hum
                this.droneOsc = this.ctx.createOscillator();
                this.droneOsc.type = 'sawtooth';
                this.droneOsc.frequency.value = 55; // A1 low frequency

                this.filter = this.ctx.createBiquadFilter();
                this.filter.type = 'lowpass';
                this.filter.frequency.value = 120;

                this.droneGain = this.ctx.createGain();
                this.droneGain.gain.value = 0.0;

                this.droneOsc.connect(this.filter);
                this.filter.connect(this.droneGain);
                this.droneGain.connect(this.ctx.destination);

                this.droneOsc.start();
                this.isInitialized = true;
            } catch (e) {
                console.warn("Web Audio failed to load:", e);
            }
        }

        setVolume(vol, fadeDuration = 0.5) {
            if (!this.isInitialized) this.init();
            if (!this.ctx) return;
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            const targetVal = Math.max(0, Math.min(0.2, vol));
            this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, this.ctx.currentTime);
            this.droneGain.gain.linearRampToValueAtTime(targetVal, this.ctx.currentTime + fadeDuration);
        }

        playClick() {
            if (!this.isInitialized) this.init();
            if (!this.ctx) return;
            if (this.ctx.state === 'suspended') this.ctx.resume();

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.08);

            gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + 0.1);
        }
    }

    const audio = new AudioEngine();

    // ----------------------------------------------------------------------
    // 2. CONFIGURATION & PRELOAD GLOBAL VARIABLES
    // ----------------------------------------------------------------------
    const TOTAL_FRAMES = 50;
    const frames = [];
    let loadedCount = 0;
    let activeFrame = 0;
    let currentColor = 'blue';
    let is360Mode = false;
    let isDragging = false;
    let startX = 0;
    let startFrame = 0;
    let isScrolling = false;
    let scrollTimeout = null;

    // DOM References
    const canvas = document.getElementById('frame-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    const loaderBar = document.getElementById('loader-bar');
    const loaderPercent = document.getElementById('loader-percent');
    const loadingOverlay = document.getElementById('loading-overlay');
    const customCursor = document.getElementById('custom-cursor');
    const cursorText = document.getElementById('cursor-text');
    const audioToggle = document.getElementById('audio-toggle');
    const countdownDisplay = document.getElementById('countdown-display');

    // Dynamic color painting filter matrices
    const colorFilters = {
        blue: 'none',
        black: 'grayscale(100%) brightness(35%) contrast(125%)',
        silver: 'grayscale(100%) brightness(105%) contrast(100%)',
        white: 'grayscale(100%) brightness(150%) contrast(85%)',
        red: 'hue-rotate(130deg) saturate(180%) brightness(75%) contrast(110%)'
    };

    const colorThemeGlow = {
        blue: 'from-brand-blueGlow/20 via-transparent to-transparent border-brand-electric/30 hover:border-brand-electric/60 shadow-neon-blue',
        black: 'from-brand-graphite/20 via-transparent to-transparent border-white/10 hover:border-white/30',
        silver: 'from-zinc-600/10 via-transparent to-transparent border-zinc-500/20 hover:border-zinc-400/40',
        white: 'from-white/10 via-transparent to-transparent border-white/20 hover:border-white/50',
        red: 'from-brand-neonRed/20 via-transparent to-transparent border-brand-neonRed/30 hover:border-brand-neonRed/60 shadow-neon-red'
    };

    const colorTextClass = {
        blue: 'text-brand-electric text-glow-cyan',
        black: 'text-zinc-500',
        silver: 'text-zinc-300',
        white: 'text-white',
        red: 'text-brand-neonRed text-glow-red'
    };

    // ----------------------------------------------------------------------
    // 3. CANVAS DRAWING & SCALING CONTROLLER
    // ----------------------------------------------------------------------
    function drawFrame(frameIndex) {
        if (!canvas || !ctx || frames.length === 0) return;
        const img = frames[frameIndex % TOTAL_FRAMES];

        if (img && img.complete && img.naturalWidth > 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Aspect ratio math (Cover layout)
            const imgRatio = img.naturalWidth / img.naturalHeight;
            const canvasRatio = canvas.width / canvas.height;
            let drawWidth, drawHeight, drawX, drawY;

            if (canvasRatio > imgRatio) {
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgRatio;
                drawX = 0;
                drawY = (canvas.height - drawHeight) / 2;
            } else {
                drawHeight = canvas.height;
                drawWidth = canvas.height * imgRatio;
                drawX = (canvas.width - drawWidth) / 2;
                drawY = 0;
            }

            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
    }

    function handleResize() {
        if (!canvas) return;
        canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
        canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
        drawFrame(activeFrame);
    }

    window.addEventListener('resize', handleResize);

    // ----------------------------------------------------------------------
    // 4. IMAGE SEQUENCE PRELOADER
    // ----------------------------------------------------------------------
    function preloadFrames() {
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            const frameNum = String(i).padStart(3, '0');
            img.src = `car-jpg/ezgif-frame-${frameNum}.jpg`;

            img.onload = () => {
                loadedCount++;
                const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
                if (loaderBar) loaderBar.style.width = `${progress}%`;
                if (loaderPercent) loaderPercent.textContent = `${progress}%`;

                if (loadedCount === TOTAL_FRAMES) {
                    // Hide loader once all images are fetched
                    if (loadingOverlay) {
                        loadingOverlay.classList.add('transition-opacity', 'duration-500', 'opacity-0');
                        setTimeout(() => {
                            loadingOverlay.style.display = 'none';
                            // Show and animate canvas
                             const bgGif = document.getElementById('bg-gif');
                             if (bgGif) {
                                 bgGif.classList.remove('opacity-0');
                                 bgGif.classList.add('opacity-100');
                             }
                            handleResize();
                            setupAnimations();
                            startAutoplay();
                        }, 500);
                    }
                }
            };

            img.onerror = () => {
                loadedCount++; // Avoid blocking if frames fails
            };

            frames.push(img);
        }
    }

    preloadFrames();

    // ----------------------------------------------------------------------
    // 5. AUTOPLAY ROTATION (Idle state)
    // ----------------------------------------------------------------------
    let autoplayInterval = null;

    function startAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => {
            // Autoplay loop keeps running continuously at all times,
            // only paused when the user is actively dragging the car in 360 mode
            if (!isDragging) {
                activeFrame = (activeFrame + 1) % TOTAL_FRAMES;
                drawFrame(activeFrame);
            }
        }, 75); // ~15 FPS rotation speed
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    // ----------------------------------------------------------------------
    // 6. GSAP SCROLL-TRIGGER SYSTEM (Smooth Scroll & Custom Section Triggers)
    // ----------------------------------------------------------------------
    function setupAnimations() {
        // Init Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        lenis.on('scroll', () => {
            ScrollTrigger.update();
        });

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Section triggers for highlighting active parts
        const sections = ['hero', 'design', 'performance', 'technology', 'customizer', 'notify'];
        sections.forEach(secId => {
            ScrollTrigger.create({
                trigger: `#${secId}`,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    // Update active section indicators if needed
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // 7. INTERACTIVE 360 DRAG ROTATION
    // ----------------------------------------------------------------------
    if (canvas) {
        // Mouse Down
        canvas.addEventListener('mousedown', (e) => {
            if (!is360Mode) return;
            isDragging = true;
            startX = e.clientX;
            startFrame = activeFrame;
            setCursorState('DRAG', true);
        });

        // Mouse Move
        document.addEventListener('mousemove', (e) => {
            // Update custom cursor positioning
            if (customCursor) {
                customCursor.style.left = `${e.clientX}px`;
                customCursor.style.top = `${e.clientY}px`;
            }
            
            if (!is360Mode || !isDragging) return;
            const deltaX = e.clientX - startX;
            const frameOffset = Math.round(deltaX / 12);
            let nextFrame = (startFrame - frameOffset) % TOTAL_FRAMES;
            if (nextFrame < 0) nextFrame += TOTAL_FRAMES;
            activeFrame = nextFrame;
            drawFrame(activeFrame);
        });

        // Mouse Up
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                setCursorState('', false);
            }
        });

        // Touch support
        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) {
                startX = e.touches[0].clientX;
                startFrame = activeFrame;
                isDragging = true;
            }
        });

        canvas.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length === 0) return;
            const deltaX = e.touches[0].clientX - startX;
            const frameOffset = Math.round(deltaX / 12);
            let nextFrame = (startFrame - frameOffset) % TOTAL_FRAMES;
            if (nextFrame < 0) nextFrame += TOTAL_FRAMES;
            activeFrame = nextFrame;
            drawFrame(activeFrame);
        });

        canvas.addEventListener('touchend', () => {
            isDragging = false;
        });
    }

    // ----------------------------------------------------------------------
    // 8. ACCENT COLOR CUSTOMIZER PAINT SWITCHER
    // ----------------------------------------------------------------------
    const swatches = document.querySelectorAll('.color-swatch');
    const paintName = document.getElementById('paint-name');
    const paintCard = document.getElementById('paint-info-card');

    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            audio.playClick();
            const color = swatch.getAttribute('data-color');
            currentColor = color;

            // Remove border outlines
            swatches.forEach(s => {
                s.classList.remove('border-brand-electric', 'scale-125');
                s.classList.add('border-transparent');
            });
            // Update active swatch
            swatch.classList.remove('border-transparent');
            swatch.classList.add('border-brand-electric', 'scale-125');

            // Apply canvas & GIF filters
            if (canvas) canvas.style.filter = colorFilters[color];
            const bgGif = document.getElementById('bg-gif');
            if (bgGif) bgGif.style.filter = colorFilters[color];

            // Update Card Details
            if (paintName) {
                const labelMap = {
                    blue: 'Electric Blue Paint',
                    black: 'Midnight Black Paint',
                    silver: 'Arctic Silver Paint',
                    white: 'Pearl White Paint',
                    red: 'Crimson Red Paint'
                };
                paintName.textContent = labelMap[color];
            }

            if (paintCard) {
                // Update theme border class
                paintCard.className = `glass-panel border-t-2 p-6 rounded-lg max-w-sm w-full text-center transition-all ${colorThemeGlow[color]}`;
                const glowText = paintCard.querySelector('.text-glow-cyan, .text-glow-red, .text-zinc-500, .text-zinc-300, .text-white');
                if (glowText) {
                    glowText.className = `text-xs font-mono font-bold tracking-widest ${colorTextClass[color]}`;
                }
            }
        });
    });

    // ----------------------------------------------------------------------
    // 9. 360 MODE TOGGLE & HOTSPOT CLOSEUPS
    // ----------------------------------------------------------------------
    const toggle360Btn = document.getElementById('toggle-360');
    const toggle360Hint = document.getElementById('toggle-360-hint');

    if (toggle360Btn) {
        toggle360Btn.addEventListener('click', () => {
            audio.playClick();
            is360Mode = !is360Mode;

             const bgGif = document.getElementById('bg-gif');
             if (is360Mode) {
                 // Swap loop GIF for interactive canvas
                 if (bgGif) {
                     bgGif.classList.remove('opacity-100');
                     bgGif.classList.add('opacity-0');
                 }
                 if (canvas) {
                     canvas.classList.remove('opacity-0', 'pointer-events-none');
                     canvas.classList.add('opacity-100');
                 }
                 drawFrame(activeFrame);

                 toggle360Btn.textContent = 'DRAG TO ROTATE VEHICLE';
                 toggle360Btn.classList.remove('border-white/10', 'text-white');
                 toggle360Btn.classList.add('bg-brand-electric', 'text-black', 'shadow-neon-cyan');
                 if (toggle360Hint) toggle360Hint.textContent = 'Drag on the screen to rotate car';
             } else {
                 // Swap back to loop GIF
                 if (canvas) {
                     canvas.classList.remove('opacity-100');
                     canvas.classList.add('opacity-0', 'pointer-events-none');
                 }
                 if (bgGif) {
                     bgGif.classList.remove('opacity-0');
                     bgGif.classList.add('opacity-100');
                 }

                 toggle360Btn.textContent = 'ENABLE 360° DRAG ORBIT';
                 toggle360Btn.classList.remove('bg-brand-electric', 'text-black', 'shadow-neon-cyan');
                 toggle360Btn.classList.add('border-white/10', 'text-white');
                 if (toggle360Hint) toggle360Hint.textContent = 'Unlock frame swipe interface';
             }
        });
    }

    // Hotspot clicks
    const hotspotBtns = document.querySelectorAll('.hotspot-btn');
    hotspotBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            audio.playClick();
            const part = btn.getAttribute('data-part');
            let targetFrame = 0;

            if (part === 'headlight') targetFrame = 0;
            if (part === 'aerodynamics') targetFrame = 12;
            if (part === 'wheels') targetFrame = 25;
            if (part === 'rear') targetFrame = 38;

             if (!is360Mode) {
                 if (toggle360Btn) toggle360Btn.click();
             }

             // Transition frame smoothly using GSAP
             const frameObj = { frame: activeFrame };
             gsap.to(frameObj, {
                 frame: targetFrame,
                 duration: 0.8,
                 ease: "power2.out",
                 onUpdate: () => {
                     activeFrame = Math.round(frameObj.frame);
                     drawFrame(activeFrame);
                 }
             });
        });
    });

    // ----------------------------------------------------------------------
    // 10. INTERACTION AUDIO CONTROLLER
    // ----------------------------------------------------------------------
    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            const enabled = audioToggle.textContent.includes('OFF');
            audio.playClick();

            if (enabled) {
                audio.init();
                audio.setVolume(0.15);
                audioToggle.textContent = 'SOUND ON';
                audioToggle.classList.remove('text-zinc-500');
                audioToggle.classList.add('text-brand-electric');
            } else {
                audio.setVolume(0.0);
                audioToggle.textContent = 'SOUND OFF';
                audioToggle.classList.remove('text-brand-electric');
                audioToggle.classList.add('text-zinc-500');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 11. CUSTOM GLOWING POINTER CURSOR
    // ----------------------------------------------------------------------
    function setCursorState(text, active) {
        if (!customCursor) return;
        if (active) {
            customCursor.classList.add('active');
            if (cursorText) {
                cursorText.textContent = text;
                cursorText.style.opacity = '1';
            }
        } else {
            customCursor.classList.remove('active');
            if (cursorText) {
                cursorText.textContent = '';
                cursorText.style.opacity = '0';
            }
        }
    }

    // Bind custom hover states
    const hoverElements = document.querySelectorAll('[data-cursor], a, button, .color-swatch');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const hoverText = el.getAttribute('data-cursor') || 'VIEW';
            setCursorState(hoverText, true);
        });
        el.addEventListener('mouseleave', () => {
            setCursorState('', false);
        });
    });

    // ----------------------------------------------------------------------
    // 12. COUNTDOWN HUD CLOCK
    // ----------------------------------------------------------------------
    let cdDays = 118, cdHours = 7, cdMins = 42, cdSecs = 19;

    function updateCountdown() {
        if (cdSecs > 0) {
            cdSecs--;
        } else {
            cdSecs = 59;
            if (cdMins > 0) {
                cdMins--;
            } else {
                cdMins = 59;
                if (cdHours > 0) {
                    cdHours--;
                } else {
                    cdHours = 23;
                    if (cdDays > 0) cdDays--;
                }
            }
        }

        if (countdownDisplay) {
            const d = String(cdDays).padStart(3, '0');
            const h = String(cdHours).padStart(2, '0');
            const m = String(cdMins).padStart(2, '0');
            const s = String(cdSecs).padStart(2, '0');
            countdownDisplay.textContent = `${d} : ${h} : ${m} : ${s}`;
        }
    }

    setInterval(updateCountdown, 1000);

    // ----------------------------------------------------------------------
    // 13. PREBOOK FORM VALIDATION SUBMIT
    // ----------------------------------------------------------------------
    const signupForm = document.getElementById('email-signup-form');
    const formContainer = document.getElementById('email-form-container');
    const successMsg = document.getElementById('email-success-message');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            audio.playClick();

            if (formContainer && successMsg) {
                formContainer.style.display = 'none';
                successMsg.classList.remove('hidden');
            }
        });
    }

    // Calendar & Return links click sound feedback
    const calendarBtn = document.getElementById('calendar-btn');
    const returnBtn = document.getElementById('return-btn');

    if (calendarBtn) {
        calendarBtn.addEventListener('click', () => {
            audio.playClick();
            alert("Launch event added to your calendar!");
        });
    }

    if (returnBtn) {
        returnBtn.addEventListener('click', () => {
            audio.playClick();
            activeFrame = 0;
            drawFrame(0);
        });
    }
});
