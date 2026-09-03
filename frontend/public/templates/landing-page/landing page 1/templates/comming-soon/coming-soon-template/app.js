/* ==========================================================================
   Orange 16 Launch Website - Master Bright White Interactive Engine
   Author: Antigravity AI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. Global Setup & HD Canvas Renderer Setup
    // ----------------------------------------------------------------------
    const TOTAL_FRAMES = 50;
    const frameImages = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    let firstFrameLoaded = false;

    const canvas = document.getElementById('exploded-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    const canvasLoader = document.getElementById('canvas-loader');
    const loaderBar = document.getElementById('loader-bar');
    const dragHint = document.getElementById('drag-hint');

    let currentFrame = 0;
    let targetFrame = 0;

    // High Definition Canvas Size & DPR Setup
    function resizeCanvas() {
        if (!canvas) return;
        const dpr = Math.max(2, window.devicePixelRatio || 1);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
        }
        renderFrame(Math.round(currentFrame));
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // High Quality Render Canvas Frame
    function renderFrame(index) {
        if (!ctx || !canvas) return;
        let clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, index));
        let img = frameImages[clampedIndex];

        if (!img || !img.complete || img.naturalWidth === 0) {
            for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
                const prev = frameImages[clampedIndex - offset];
                const next = frameImages[clampedIndex + offset];
                if (prev && prev.complete && prev.naturalWidth > 0) { img = prev; break; }
                if (next && next.complete && next.naturalWidth > 0) { img = next; break; }
            }
        }

        if (!img || !img.complete || img.naturalWidth === 0) return;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight, drawX, drawY;

        if (canvasRatio > imgRatio) {
            drawHeight = canvas.height * 0.85;
            drawWidth = drawHeight * imgRatio;
        } else {
            drawWidth = canvas.width * 0.85;
            drawHeight = drawWidth / imgRatio;
        }
        drawX = (canvas.width - drawWidth) / 2;
        drawY = (canvas.height - drawHeight) / 2;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    }

    // Preload Frame Sequence
    function preloadFrames() {
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            const frameNum = String(i).padStart(3, '0');
            const frameIdx = i - 1;
            img.src = `ezgif-2795d339821dd144-jpg/ezgif-frame-${frameNum}.jpg`;

            img.onload = () => {
                loadedCount++;
                const progress = (loadedCount / TOTAL_FRAMES) * 100;
                if (loaderBar) loaderBar.style.width = `${progress}%`;
                if (frameIdx === 0 && !firstFrameLoaded) {
                    firstFrameLoaded = true;
                    renderFrame(0);
                }
                if (loadedCount === TOTAL_FRAMES && canvasLoader) {
                    canvasLoader.classList.add('loaded');
                }
            };

            img.onerror = () => {
                loadedCount++;
                if (loadedCount === TOTAL_FRAMES && canvasLoader) {
                    canvasLoader.classList.add('loaded');
                }
            };

            frameImages[frameIdx] = img;
        }
    }

    // Lerp Frame Loop
    function frameLoop() {
        const diff = targetFrame - currentFrame;
        if (Math.abs(diff) > 0.001) {
            currentFrame += diff * 0.15;
            renderFrame(Math.round(currentFrame));
            updateStageHUD(Math.round(currentFrame));
        }
        requestAnimationFrame(frameLoop);
    }

    preloadFrames();
    requestAnimationFrame(frameLoop);


    // ----------------------------------------------------------------------
    // 2. CINEMA SLOW-MOTION AUTO-PLAY ENGINE
    // ----------------------------------------------------------------------
    let slomoPlaying = false;
    let slomoDirection = 1;           // 1 = forward, -1 = reverse
    let slomoSpeed = 0.25;            // frames per tick (default: 0.25x = very slow)
    let slomoInterval = null;

    const slomoPlayBtn = document.getElementById('slomo-play-btn');
    const slomoPlayIcon = document.getElementById('slomo-play-icon');
    const slomoPlayText = document.getElementById('slomo-play-text');
    const speedBtns = document.querySelectorAll('.speed-btn');

    // Map speed value to frame-advance rate
    const SPEED_MAP = {
        '0.25': 0.18,  // silky slow-motion (0.25x)
        '0.5':  0.35,  // half speed
        '1.0':  0.7    // normal cinematic speed
    };

    function startSlomo() {
        if (slomoInterval) clearInterval(slomoInterval);
        slomoInterval = setInterval(() => {
            targetFrame += slomoSpeed * slomoDirection;

            // Bounce: reverse at ends
            if (targetFrame >= TOTAL_FRAMES - 1) {
                targetFrame = TOTAL_FRAMES - 1;
                slomoDirection = -1;
            } else if (targetFrame <= 0) {
                targetFrame = 0;
                slomoDirection = 1;
            }
        }, 30);
    }

    function stopSlomo() {
        if (slomoInterval) {
            clearInterval(slomoInterval);
            slomoInterval = null;
        }
    }

    if (slomoPlayBtn) {
        slomoPlayBtn.addEventListener('click', () => {
            slomoPlaying = !slomoPlaying;

            if (slomoPlaying) {
                startSlomo();
                slomoPlayBtn.classList.add('playing');
                if (slomoPlayIcon) slomoPlayIcon.className = 'fa-solid fa-pause';
                if (slomoPlayText) slomoPlayText.textContent = 'PAUSE SLOMO';
            } else {
                stopSlomo();
                slomoPlayBtn.classList.remove('playing');
                if (slomoPlayIcon) slomoPlayIcon.className = 'fa-solid fa-play';
                if (slomoPlayText) slomoPlayText.textContent = 'SLOMO AUTO-PLAY';
            }
        });
    }

    // Speed Selector Buttons
    speedBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            speedBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const speedKey = btn.getAttribute('data-speed');
            slomoSpeed = SPEED_MAP[speedKey] || 0.18;

            // Restart if playing to apply new speed
            if (slomoPlaying) {
                stopSlomo();
                startSlomo();
            }
        });
    });


    // ----------------------------------------------------------------------
    // 3. VIDEO PLAYER MODE SWITCHER (Canvas <> Embedded HTML5 Video)
    // ----------------------------------------------------------------------
    const modeSwitchBtn = document.getElementById('mode-switch-btn');
    const modeSwitchText = document.getElementById('mode-switch-text');
    const slomoVideo = document.getElementById('slomo-video');
    let videoModeActive = false;

    if (modeSwitchBtn && canvas && slomoVideo) {
        modeSwitchBtn.addEventListener('click', () => {
            videoModeActive = !videoModeActive;

            if (videoModeActive) {
                // Switch to HTML5 Video player mode
                canvas.style.opacity = '0';
                canvas.style.pointerEvents = 'none';
                slomoVideo.classList.remove('hidden');
                slomoVideo.style.opacity = '1';
                slomoVideo.play();
                slomoVideo.playbackRate = slomoSpeed / 0.18 * 0.25; // Map speed

                modeSwitchBtn.classList.add('active');
                modeSwitchText.textContent = 'FRAME SCRUB MODE';

                // Stop slomo auto-play when in video mode
                if (slomoPlaying) {
                    slomoPlaying = false;
                    stopSlomo();
                    if (slomoPlayBtn) slomoPlayBtn.classList.remove('playing');
                    if (slomoPlayIcon) slomoPlayIcon.className = 'fa-solid fa-play';
                    if (slomoPlayText) slomoPlayText.textContent = 'SLOMO AUTO-PLAY';
                }
            } else {
                // Switch back to canvas frame scrubber mode
                canvas.style.opacity = '1';
                canvas.style.pointerEvents = 'auto';
                slomoVideo.classList.add('hidden');
                slomoVideo.style.opacity = '0';
                slomoVideo.pause();

                modeSwitchBtn.classList.remove('active');
                modeSwitchText.textContent = 'VIDEO PLAYER MODE';
            }
        });

        // Sync video playback rate when speed changes
        speedBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (videoModeActive && slomoVideo) {
                    const speedKey = btn.getAttribute('data-speed');
                    slomoVideo.playbackRate = parseFloat(speedKey);
                }
            });
        });
    }


    // ----------------------------------------------------------------------
    // 4. Stage HUD & Timeline Mapping
    // ----------------------------------------------------------------------
    const STAGE_DATA = [
        { start: 0,  end: 5,  num: '01 / 06', title: 'Meet Orange 16.',                    desc: 'From one beautiful device to everything inside it.',                               cardIndex: 0 },
        { start: 6,  end: 14, num: '02 / 06', title: 'Designed around every detail.',       desc: 'Grade 5 Titanium enclosure with zero-margin micro bezels.',                       cardIndex: 1 },
        { start: 15, end: 26, num: '03 / 06', title: 'Precision inside. Beauty outside.',   desc: 'The rear glass panel separates to reveal thermal diffusion plates.',               cardIndex: 2 },
        { start: 27, end: 40, num: '04 / 06', title: 'Engineered from the inside out.',     desc: 'O18 Pro motherboard, battery cell, and camera array float suspended.',             cardIndex: 3 },
        { start: 41, end: 47, num: '05 / 06', title: 'Symmetrical Harmony.',                desc: 'Complete 50-component technical exploded view visualization.',                    cardIndex: 4 },
        { start: 48, end: 50, num: '06 / 06', title: 'Everything comes together.',          desc: 'Ready for what\'s next. Assembling back into one device.',                        cardIndex: 5 }
    ];

    const hudNum = document.getElementById('hud-stage-num');
    const hudTitle = document.getElementById('hud-stage-title');
    const hudDesc = document.getElementById('hud-stage-desc');
    const scrollCards = document.querySelectorAll('.scroll-card');
    const progressFill = document.getElementById('experience-progress-fill');
    const hotspotsContainer = document.getElementById('hotspots-container');

    function updateStageHUD(frameIdx) {
        const stage = STAGE_DATA.find(s => frameIdx >= s.start && frameIdx <= s.end) || STAGE_DATA[0];
        if (hudNum) hudNum.textContent = stage.num;
        if (hudTitle) hudTitle.textContent = stage.title;
        if (hudDesc) hudDesc.textContent = stage.desc;

        if (progressFill) progressFill.style.height = `${(frameIdx / (TOTAL_FRAMES - 1)) * 100}%`;

        scrollCards.forEach((card, idx) => {
            card.classList.toggle('active', idx === stage.cardIndex);
        });

        if (hotspotsContainer) {
            hotspotsContainer.classList.toggle('active', frameIdx >= 28 && frameIdx <= 48);
        }
    }


    // ----------------------------------------------------------------------
    // 5. Scroll Controller with Reconstruct Loop (when slomo not playing)
    // ----------------------------------------------------------------------
    let isGSAPActive = false;

    function initScrollExperience() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.create({
                trigger: '#experience',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.5,
                onUpdate: (self) => {
                    if (slomoPlaying || videoModeActive) return;
                    isGSAPActive = true;
                    const p = self.progress;
                    if (p <= 0.85) {
                        targetFrame = Math.round((p / 0.85) * (TOTAL_FRAMES - 1));
                    } else {
                        targetFrame = Math.round((1 - (p - 0.85) / 0.15) * (TOTAL_FRAMES - 1));
                    }
                }
            });
        }
    }

    window.addEventListener('scroll', () => {
        if (isGSAPActive || slomoPlaying || videoModeActive) return;
        const el = document.getElementById('experience');
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        if (total <= 0) return;
        const p = Math.max(0, Math.min(1, -rect.top / total));
        if (p <= 0.85) {
            targetFrame = Math.round((p / 0.85) * (TOTAL_FRAMES - 1));
        } else {
            targetFrame = Math.round((1 - (p - 0.85) / 0.15) * (TOTAL_FRAMES - 1));
        }
    });

    initScrollExperience();


    // ----------------------------------------------------------------------
    // 6. X-RAY VIEW Mode Switcher
    // ----------------------------------------------------------------------
    const xrayBtn = document.getElementById('xray-btn');
    const xrayLabel = document.getElementById('xray-label');
    const xrayModes = ['OFF', 'SEMI-TRANSPARENT', 'INTERNAL', 'EXPLODED'];
    let currentXrayIdx = 0;

    if (xrayBtn && canvas) {
        xrayBtn.addEventListener('click', () => {
            currentXrayIdx = (currentXrayIdx + 1) % xrayModes.length;
            const mode = xrayModes[currentXrayIdx];
            if (xrayLabel) xrayLabel.textContent = `X-RAY: ${mode}`;

            if (mode !== 'OFF') {
                xrayBtn.classList.add('active');
                canvas.classList.add('xray-active');
                if (slomoVideo) slomoVideo.style.filter = 'invert(0.9) hue-rotate(180deg) contrast(1.2)';
            } else {
                xrayBtn.classList.remove('active');
                canvas.classList.remove('xray-active');
                if (slomoVideo) slomoVideo.style.filter = '';
            }
        });
    }


    // ----------------------------------------------------------------------
    // 7. Drag & Touch Swipe Controls on Canvas
    // ----------------------------------------------------------------------
    let isDragging = false;
    let startX = 0;

    if (canvas) {
        canvas.addEventListener('mousedown', (e) => {
            if (videoModeActive) return;
            isDragging = true;
            startX = e.clientX;
            if (dragHint) dragHint.style.display = 'none';
            // Stop slomo on manual drag
            if (slomoPlaying) {
                slomoPlaying = false;
                stopSlomo();
                if (slomoPlayBtn) slomoPlayBtn.classList.remove('playing');
                if (slomoPlayIcon) slomoPlayIcon.className = 'fa-solid fa-play';
                if (slomoPlayText) slomoPlayText.textContent = 'SLOMO AUTO-PLAY';
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            startX = e.clientX;
            targetFrame = Math.max(0, Math.min(TOTAL_FRAMES - 1, targetFrame + deltaX * 0.2));
        });

        window.addEventListener('mouseup', () => { isDragging = false; });

        canvas.addEventListener('touchstart', (e) => {
            if (videoModeActive || e.touches.length === 0) return;
            isDragging = true;
            startX = e.touches[0].clientX;
            if (dragHint) dragHint.style.display = 'none';
        });

        window.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length === 0) return;
            const deltaX = e.touches[0].clientX - startX;
            startX = e.touches[0].clientX;
            targetFrame = Math.max(0, Math.min(TOTAL_FRAMES - 1, targetFrame + deltaX * 0.25));
        });

        window.addEventListener('touchend', () => { isDragging = false; });
    }


    // ----------------------------------------------------------------------
    // 8. Segmented Orange Battery Gauge – Scroll-Driven Animator
    // ----------------------------------------------------------------------
    const batterySegments = document.querySelectorAll('.b-segment');
    const batteryText = document.getElementById('battery-pct-text');
    const batteryHours = document.getElementById('battery-hours');

    window.addEventListener('scroll', () => {
        const featuresEl = document.getElementById('features');
        if (!featuresEl || batterySegments.length === 0) return;

        const rect = featuresEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const pct = Math.max(0, Math.min(100, Math.round(((window.innerHeight - rect.top) / (window.innerHeight + rect.height)) * 100)));
            const activeCells = Math.max(1, Math.ceil((pct / 100) * 10));

            batterySegments.forEach((seg, idx) => {
                seg.classList.toggle('active', idx < activeCells);
            });

            if (batteryText) batteryText.textContent = `${pct}%`;
            if (batteryHours) batteryHours.textContent = `${Math.max(3, Math.round((pct / 100) * 29))} hrs`;
        }
    });


    // ----------------------------------------------------------------------
    // 9. Product Color Expression Showcase (White & Black Titanium)
    // ----------------------------------------------------------------------
    const colorPills = document.querySelectorAll('.color-pill');
    const colorPillTriggers = document.querySelectorAll('.color-pill-trigger');
    const colorAmbient = document.getElementById('color-ambient');
    const colorCaptionTitle = document.getElementById('color-caption-title');
    const colorCaptionSub = document.getElementById('color-caption-sub');
    const colorPhoneImg = document.getElementById('color-phone-img');

    const COLOR_INFO = {
        white:   { title: 'White Titanium',       sub: 'Pure silver aerospace titanium enclosure with Ceramic Shield 2.0 glass',    glow: 'rgba(226, 232, 240, 0.7)', frame: '025' },
        black:   { title: 'Space Black Titanium', sub: 'Deep obsidian PVD titanium shell with anti-fingerprint coating',            glow: 'rgba(15, 23, 42, 0.5)',    frame: '038' },
        natural: { title: 'Natural Titanium',     sub: 'Grade 5 titanium alloy with satin micro-blast surface',                     glow: 'rgba(194, 184, 163, 0.4)', frame: '001' },
        desert:  { title: 'Desert Titanium',      sub: 'Warm metallic gold tone with champagne glass reflections',                  glow: 'rgba(212, 175, 55, 0.4)',  frame: '012' }
    };

    function selectColor(colorKey) {
        colorPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-color') === colorKey));
        const info = COLOR_INFO[colorKey] || COLOR_INFO.white;
        if (colorAmbient) colorAmbient.style.background = `radial-gradient(circle, ${info.glow} 0%, transparent 70%)`;
        if (colorCaptionTitle) colorCaptionTitle.textContent = info.title;
        if (colorCaptionSub) colorCaptionSub.textContent = info.sub;
        if (colorPhoneImg) {
            colorPhoneImg.style.opacity = '0';
            setTimeout(() => {
                colorPhoneImg.src = `ezgif-2795d339821dd144-jpg/ezgif-frame-${info.frame}.jpg`;
                colorPhoneImg.style.opacity = '1';
            }, 150);
        }
    }

    colorPills.forEach(pill => pill.addEventListener('click', () => selectColor(pill.getAttribute('data-color'))));
    colorPillTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            selectColor(trigger.getAttribute('data-color'));
            document.getElementById('colors')?.scrollIntoView({ behavior: 'smooth' });
        });
    });


    // ----------------------------------------------------------------------
    // 10. Model Dimension & Weight Comparison Tool
    // ----------------------------------------------------------------------
    const compBtns = document.querySelectorAll('.comp-btn');
    const compScreen = document.getElementById('comp-screen');
    const compWeight = document.getElementById('comp-weight');
    const compThick  = document.getElementById('comp-thick');
    const compBezel  = document.getElementById('comp-bezel');

    const MODEL_DATA = {
        '16pro':    { screen: '6.3"', weight: '199 g', thick: '8.25 mm', bezel: '0.8 mm' },
        '16promax': { screen: '6.9"', weight: '227 g', thick: '8.25 mm', bezel: '0.8 mm' },
        '15pro':    { screen: '6.1"', weight: '187 g', thick: '8.25 mm', bezel: '1.5 mm' }
    };

    compBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            compBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const d = MODEL_DATA[btn.getAttribute('data-model')] || MODEL_DATA['16pro'];
            if (compScreen) compScreen.textContent = d.screen;
            if (compWeight) compWeight.textContent = d.weight;
            if (compThick)  compThick.textContent  = d.thick;
            if (compBezel)  compBezel.textContent  = d.bezel;
        });
    });


    // ----------------------------------------------------------------------
    // 11. Component Inspector Deep-Dive Modal
    // ----------------------------------------------------------------------
    const inspectBtns = document.querySelectorAll('[data-inspect]');
    const inspectorModal = document.getElementById('inspector-modal');
    const modalCloseBtn  = document.getElementById('modal-close-btn');
    const modalImg       = document.getElementById('modal-img');
    const modalTag       = document.getElementById('modal-tag');
    const modalTitle     = document.getElementById('modal-title');
    const modalDesc      = document.getElementById('modal-desc');
    const modalSpecsList = document.getElementById('modal-specs-list');
    const modalCompBar   = document.getElementById('modal-comp-bar');
    const modalCompSub   = document.getElementById('modal-comp-sub');

    const COMPONENT_DETAILS = {
        camera: {
            tag: '48MP FUSION CAMERA OPTICS', title: '48MP Fusion Optics & Telephoto System',
            desc: 'Custom periscope folded glass prism array with 2nd-generation Sensor-Shift OIS.',
            frame: '004',
            specs: [
                { lbl: 'Primary Sensor', val: '48MP Quad-Pixel (24mm, ƒ/1.78)' },
                { lbl: 'Telephoto Array', val: '5x Lossless Optical Zoom (120mm)' },
                { lbl: 'Optical Stabilization', val: '3D Sensor-Shift OIS (10,000 adj/sec)' }
            ],
            gainPct: '92%', gainText: '+50% light capture efficiency vs Orange Phone 15 Pro'
        },
        performance: {
            tag: 'A18 PRO SILICON ARCHITECTURE', title: 'O18 Pro System-on-Chip (3nm)',
            desc: 'TSMC 2nd-gen 3nm fabrication with 19 Billion transistors and 35 TOPS Neural Engine.',
            frame: '038',
            specs: [
                { lbl: 'CPU Architecture', val: '6-Core (2 Perf + 4 Efficiency)' },
                { lbl: 'GPU Accelerator', val: '6-Core with Hardware Ray Tracing' },
                { lbl: 'Neural NPU', val: '16-Core (35 Trillion Ops/Sec)' }
            ],
            gainPct: '88%', gainText: '+20% CPU speed & 2x faster Ray Tracing vs A17 Pro'
        },
        display: {
            tag: 'SUPER RETINA XDR OLED', title: 'Always-On 120Hz ProMotion Display',
            desc: 'Zero-margin micro bezel OLED with 2,000 nits peak outdoor brightness.',
            frame: '042',
            specs: [
                { lbl: 'Resolution & PPI', val: '2868-by-1320 pixels at 460 ppi' },
                { lbl: 'Refresh Dynamics', val: '1Hz to 120Hz Adaptive ProMotion' },
                { lbl: 'Peak Outdoor Brightness', val: '2,000 Nits Outdoor Sunlight' }
            ],
            gainPct: '95%', gainText: '2x tougher front glass vs any competitor'
        },
        battery: {
            tag: 'STACKED CELL BATTERY ARCHITECTURE', title: 'Re-engineered Energy Cell Density',
            desc: '100% recycled cobalt battery with MagSafe 25W fast wireless charging.',
            frame: '032',
            specs: [
                { lbl: 'Video Playback Time', val: 'Up to 29 Hours Continuous' },
                { lbl: 'MagSafe Fast Wireless', val: '25W Wireless Fast Charger' },
                { lbl: 'Recycled Materials', val: '100% Recycled Cobalt & Copper' }
            ],
            gainPct: '85%', gainText: '+4 hours additional battery runtime vs previous gen'
        },
        design: {
            tag: 'GRADE 5 TITANIUM ENCLOSURE', title: 'Aerospace Grade 5 Titanium Chassis',
            desc: 'Micro-blasted satin titanium forged with thermal aluminum subframe. White & Black Titanium finishes.',
            frame: '001',
            specs: [
                { lbl: 'Alloy Material', val: 'Ti-6Al-4V Grade 5 Titanium' },
                { lbl: 'Subframe Structure', val: '100% Recycled Thermal Aluminum' },
                { lbl: 'Water Resistance', val: 'IP68 (6 Meters / 30 Min)' }
            ],
            gainPct: '90%', gainText: 'Highest strength-to-weight ratio of any metal alloy'
        }
    };

    inspectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const key = btn.getAttribute('data-inspect') || 'performance';
            const d = COMPONENT_DETAILS[key] || COMPONENT_DETAILS.performance;

            if (modalTag)   modalTag.textContent  = d.tag;
            if (modalTitle) modalTitle.textContent = d.title;
            if (modalDesc)  modalDesc.textContent  = d.desc;
            if (modalImg)   modalImg.src = `ezgif-2795d339821dd144-jpg/ezgif-frame-${d.frame}.jpg`;

            if (modalSpecsList) {
                modalSpecsList.innerHTML = d.specs.map(s =>
                    `<div class="modal-spec-row"><span class="lbl">${s.lbl}</span><span class="val">${s.val}</span></div>`
                ).join('');
            }
            if (modalCompBar) modalCompBar.style.width = d.gainPct;
            if (modalCompSub) modalCompSub.textContent = d.gainText;
            if (inspectorModal) inspectorModal.classList.add('active');
        });
    });

    if (modalCloseBtn && inspectorModal) {
        modalCloseBtn.addEventListener('click', () => inspectorModal.classList.remove('active'));
        inspectorModal.addEventListener('click', (e) => {
            if (e.target === inspectorModal) inspectorModal.classList.remove('active');
        });
    }


    // ----------------------------------------------------------------------
    // 12. Custom Cursor & Studio Follow Light
    // ----------------------------------------------------------------------
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    const cursorText = document.getElementById('cursor-text');
    const followLight = document.getElementById('follow-light');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursorDot) { cursorDot.style.left = `${mouseX}px`; cursorDot.style.top = `${mouseY}px`; }
        if (followLight) followLight.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        if (cursorRing) { cursorRing.style.left = `${ringX}px`; cursorRing.style.top = `${ringY}px`; }
        requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    document.querySelectorAll('.cursor-interactive').forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-interactive');
            if (cursorText) cursorText.textContent = el.getAttribute('data-cursor') || 'EXPLORE';
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-interactive');
            if (cursorText) cursorText.textContent = '';
        });
    });

    document.querySelectorAll('a, button, .spec-tab-btn, .color-pill, .comp-btn').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });


    // ----------------------------------------------------------------------
    // 13. Countdown Timers (Hero & Launch)
    // ----------------------------------------------------------------------
    const targetDate = new Date(Date.now() + 28 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000);

    function updateCountdowns() {
        const diff = targetDate - Date.now();
        if (diff <= 0) {
            document.getElementById('launch-status-msg')?.classList.remove('hidden');
            document.getElementById('launch-clock')?.classList.add('hidden');
            return;
        }
        const pad = n => String(Math.floor(n)).padStart(2, '0');
        const days  = pad(diff / (1000 * 60 * 60 * 24));
        const hours = pad((diff / (1000 * 60 * 60)) % 24);
        const mins  = pad((diff / (1000 * 60)) % 60);
        const secs  = pad((diff / 1000) % 60);

        ['hero-days','clock-days'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = days; });
        ['hero-hours','clock-hours'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = hours; });
        ['hero-mins','clock-mins'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = mins; });
        ['hero-secs','clock-secs'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = secs; });
    }
    setInterval(updateCountdowns, 1000);
    updateCountdowns();


    // ----------------------------------------------------------------------
    // 14. Specifications Category Tabs
    // ----------------------------------------------------------------------
    const specBtns = document.querySelectorAll('.spec-tab-btn');
    const specContents = document.querySelectorAll('.spec-category-content');

    specBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-category');
            specBtns.forEach(b => b.classList.remove('active'));
            specContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`spec-${cat}`)?.classList.add('active');
        });
    });


    // ----------------------------------------------------------------------
    // 15. Form Submissions (Notify Me & Contact)
    // ----------------------------------------------------------------------
    const notifyForm   = document.getElementById('notify-form');
    const notifySuccess = document.getElementById('notify-success');

    notifyForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('notify-btn');
        if (btn) btn.innerHTML = '<span>Saving...</span>';
        setTimeout(() => {
            notifyForm.classList.add('hidden');
            notifySuccess?.classList.remove('hidden');
        }, 800);
    });

    const contactForm = document.getElementById('contact-form');
    const toastCont   = document.getElementById('toast-container');

    function showToast(msg) {
        if (!toastCont) return;
        const t = document.createElement('div');
        t.className = 'toast';
        t.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#2563eb;"></i> <span>${msg}</span>`;
        toastCont.appendChild(t);
        setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(50px)'; setTimeout(() => t.remove(), 300); }, 4000);
    }

    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('contact-submit-btn');
        if (btn) btn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        setTimeout(() => {
            showToast('Message sent! Our team will get back to you shortly.');
            contactForm.reset();
            if (btn) btn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-paper-plane btn-icon"></i>';
        }, 1000);
    });


    // ----------------------------------------------------------------------
    // 16. Navbar Scroll & Mobile Toggle
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu   = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 50);
    });

    mobileToggle?.addEventListener('click', () => mobileMenu?.classList.toggle('active'));
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => mobileMenu?.classList.remove('active'));
    });

});
