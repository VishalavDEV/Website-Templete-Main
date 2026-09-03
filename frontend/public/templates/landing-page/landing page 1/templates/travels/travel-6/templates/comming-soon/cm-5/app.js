/**
 * AURELIA CHRONOS — NEXT-GEN LUXURY HAUTE HORLOGERIE UI/UX (CM-5)
 * Features: Interactive Hotspot Annotations, Material Customizer, Audio Equalizer Synthesizer,
 * Real-time Foil Certificate Generator, 3D Inertia Turntable & Zoom Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    initCursorFlare();
    initAdaptiveParticleCanvas();
    init3DTurntableAndZoom();
    initMaterialCustomizer();
    initHotspotAnnotations();
    initAudioEqualizerEngine();
    initChronoCountdown();
    initFoilCertificateLivePreview();
    initMacroInspectorModal();
});

/* ==========================================================================
   1. DYNAMIC CURSOR LIGHT FLARE
   ========================================================================== */
function initCursorFlare() {
    const flare = document.getElementById('cursor-light-flare');
    if (!flare) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateFlare() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        flare.style.left = `${currentX}px`;
        flare.style.top = `${currentY}px`;
        requestAnimationFrame(updateFlare);
    }
    updateFlare();
}

/* ==========================================================================
   2. ADAPTIVE PARTICLE NEBULA CANVAS
   ========================================================================== */
let particleHue = 42; // Default Gold

function initAdaptiveParticleCanvas() {
    const canvas = document.getElementById('gold-particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = 70;

    class Sparkle {
        constructor() {
            this.reset(true);
        }

        reset(init = false) {
            this.x = Math.random() * width;
            this.y = init ? Math.random() * height : height + 10;
            this.size = Math.random() * 2.2 + 0.6;
            this.speedY = Math.random() * 0.4 + 0.15;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.alpha = Math.random() * 0.7 + 0.2;
            this.pulse = Math.random() * 0.02 + 0.01;
            this.pulseDir = 1;
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;

            this.alpha += this.pulse * this.pulseDir;
            if (this.alpha >= 0.9) this.pulseDir = -1;
            if (this.alpha <= 0.15) this.pulseDir = 1;

            if (this.y < -20 || this.x < -20 || this.x > width + 20) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${particleHue}, 80%, 65%, ${this.alpha})`;
            ctx.shadowColor = `hsla(${particleHue}, 90%, 55%, 0.8)`;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < count; i++) {
        particles.push(new Sparkle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   3. 3D TURNTABLE, INERTIA DRAG & ZOOM ENGINE
   ========================================================================== */
function init3DTurntableAndZoom() {
    const stage = document.getElementById('watch-stage-container');
    const visual = document.getElementById('watch-hero-render');
    const zoomSlider = document.getElementById('watch-zoom-slider');
    const zoomValText = document.getElementById('zoom-val-text');
    const angleBtns = document.querySelectorAll('.turntable-btn');
    if (!stage || !visual) return;

    let currentAngle = 0;
    let targetAngle = 0;
    let isDragging = false;
    let startX = 0;
    let velocity = 0;
    let currentZoom = 1.0;

    let tiltX = 0;
    let tiltY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;

    // Mouse Parallax Perspective
    stage.addEventListener('mousemove', (e) => {
        if (isDragging) return;
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        targetTiltX = (y / (rect.height / 2)) * -14;
        targetTiltY = (x / (rect.width / 2)) * 18;
    });

    stage.addEventListener('mouseleave', () => {
        targetTiltX = 0;
        targetTiltY = 0;
    });

    // Drag Orbit
    stage.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        velocity = 0;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        velocity = deltaX * 0.45;
        targetAngle += velocity;
        startX = e.clientX;
        clearActiveAngleBtns();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch Support
    stage.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].clientX;
            velocity = 0;
        }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - startX;
        velocity = deltaX * 0.45;
        targetAngle += velocity;
        startX = e.touches[0].clientX;
        clearActiveAngleBtns();
    }, { passive: true });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Zoom Slider
    if (zoomSlider) {
        zoomSlider.addEventListener('input', (e) => {
            currentZoom = parseFloat(e.target.value);
            if (zoomValText) zoomValText.textContent = `${currentZoom.toFixed(1)}x`;
        });
    }

    // Render Animation Loop
    function render() {
        if (!isDragging && Math.abs(velocity) > 0.05) {
            targetAngle += velocity;
            velocity *= 0.94; // Inertia decay
        }

        currentAngle += (targetAngle - currentAngle) * 0.12;
        tiltX += (targetTiltX - tiltX) * 0.08;
        tiltY += (targetTiltY - tiltY) * 0.08;

        visual.style.transform = `scale(${currentZoom}) rotateX(${tiltX}deg) rotateY(${tiltY + currentAngle}deg)`;
        requestAnimationFrame(render);
    }
    render();

    // Preset Angle Buttons
    angleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const angle = parseInt(btn.dataset.angle, 10);
            targetAngle = angle;
            velocity = 0;
            clearActiveAngleBtns();
            btn.classList.add('active');
        });
    });

    function clearActiveAngleBtns() {
        angleBtns.forEach(b => b.classList.remove('active'));
    }
}

/* ==========================================================================
   4. BESPOKE MATERIAL CUSTOMIZER
   ========================================================================== */
function initMaterialCustomizer() {
    const swatches = document.querySelectorAll('.material-swatch');
    const materialNameEl = document.getElementById('current-material-name');
    const certMetalEl = document.getElementById('cert-metal-badge');
    const formSelect = document.getElementById('collector-metal');

    const materials = {
        'yellow-gold': {
            name: '18K Yellow Gold (2N Classic)',
            hue: 42,
            themeClass: '',
            certText: '18K YELLOW GOLD'
        },
        'everose': {
            name: '18K Everose Gold (5N Pink)',
            hue: 12,
            themeClass: 'theme-everose',
            certText: '18K EVEROSE GOLD'
        },
        'platinum': {
            name: '950 Platinum (Ice Blue Core)',
            hue: 200,
            themeClass: 'theme-platinum',
            certText: '950 PLATINUM REF'
        },
        'stealth': {
            name: 'Obsidian DLC Carbon (All-Black)',
            hue: 220,
            themeClass: 'theme-stealth',
            certText: 'OBSIDIAN DLC CARBON'
        }
    };

    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const matKey = swatch.dataset.material || 'yellow-gold';
            const mat = materials[matKey];
            if (!mat) return;

            swatches.forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');

            // Set Body Theme
            document.body.className = `bg-[#040508] text-slate-100 overflow-x-hidden font-sans ${mat.themeClass}`;
            particleHue = mat.hue;

            if (materialNameEl) materialNameEl.textContent = mat.name;
            if (certMetalEl) certMetalEl.textContent = mat.certText;
            if (formSelect) formSelect.value = mat.name;
        });
    });
}

/* ==========================================================================
   5. INTERACTIVE WATCH HOTSPOTS
   ========================================================================== */
function initHotspotAnnotations() {
    const hotspots = document.querySelectorAll('.watch-hotspot');
    hotspots.forEach(spot => {
        spot.addEventListener('click', (e) => {
            e.stopPropagation();
            const view = spot.dataset.view;
            if (view) {
                const trigger = document.querySelector(`.haute-inspect-trigger[data-view="${view}"]`);
                if (trigger) trigger.click();
            }
        });
    });
}

/* ==========================================================================
   6. AUDIO EQUALIZER & HIGH-BEAT ESCAPEMENT SYNTHESIZER
   ========================================================================== */
function initAudioEqualizerEngine() {
    const audioBtn = document.getElementById('haute-audio-btn');
    const audioLabel = document.getElementById('haute-audio-label');
    const eqContainer = document.getElementById('audio-eq-bars');
    const freqToggle = document.getElementById('audio-freq-toggle');
    if (!audioBtn) return;

    let ctx = null;
    let isPlaying = false;
    let intervalId = null;
    let currentFreq = 250; // 4Hz = 28,800 vph

    function playTick(isTick) {
        if (!ctx) return;
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(isTick ? 1520 : 1050, now);
        osc.frequency.exponentialRampToValueAtTime(130, now + 0.028);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(isTick ? 2700 : 1950, now);
        filter.Q.setValueAtTime(5, now);

        gain.gain.setValueAtTime(0.045, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.028);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.028);
    }

    function toggleAudio() {
        if (!ctx) {
            ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        if (!isPlaying) {
            isPlaying = true;
            let alternate = true;
            intervalId = setInterval(() => {
                playTick(alternate);
                alternate = !alternate;
            }, currentFreq);

            if (eqContainer) eqContainer.classList.add('audio-playing');
            if (audioLabel) audioLabel.textContent = currentFreq === 250 ? 'Escapement: 28.8k vph' : 'Hi-Beat: 36k vph';
            audioBtn.classList.add('border-amber-400');
        } else {
            isPlaying = false;
            if (intervalId) clearInterval(intervalId);
            if (eqContainer) eqContainer.classList.remove('audio-playing');
            if (audioLabel) audioLabel.textContent = 'Audio: Muted';
            audioBtn.classList.remove('border-amber-400');
        }
    }

    audioBtn.addEventListener('click', toggleAudio);

    if (freqToggle) {
        freqToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            currentFreq = (currentFreq === 250) ? 200 : 250; // Toggle 4Hz vs 5Hz (36k vph)
            freqToggle.textContent = currentFreq === 250 ? '4Hz (28.8k vph)' : '5Hz (36k vph)';
            if (isPlaying) {
                clearInterval(intervalId);
                let alt = true;
                intervalId = setInterval(() => {
                    playTick(alt);
                    alt = !alt;
                }, currentFreq);
                if (audioLabel) audioLabel.textContent = currentFreq === 250 ? 'Escapement: 28.8k vph' : 'Hi-Beat: 36k vph';
            }
        });
    }
}

/* ==========================================================================
   7. LIVE PREVIEW NUMBERED VAULT CERTIFICATE GENERATOR
   ========================================================================== */
function initFoilCertificateLivePreview() {
    const nameInput = document.getElementById('collector-name');
    const certNameDisplay = document.getElementById('cert-collector-name');
    const certSerialDisplay = document.getElementById('cert-serial-number');
    const form = document.getElementById('allocation-vault-form');
    const toast = document.getElementById('vault-toast');
    const toastMsg = document.getElementById('vault-toast-msg');

    let currentSerial = '042';

    if (nameInput && certNameDisplay) {
        nameInput.addEventListener('input', () => {
            const val = nameInput.value.trim();
            certNameDisplay.textContent = val.length > 0 ? val.toUpperCase() : 'YOUR NAME HERE';
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const collector = nameInput ? nameInput.value.trim() : 'Esteemed Collector';
            const metal = document.getElementById('collector-metal') ? document.getElementById('collector-metal').value : '18K Solid Gold';

            if (toastMsg) {
                toastMsg.innerHTML = `✦ Allocation Confirmed for <strong>${collector}</strong>!<br><span class="text-amber-400 font-mono text-[11px]">Numbered Certificate No. #${currentSerial}/100 [${metal}] dispatched to inbox.</span>`;
            }

            if (toast) {
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 6000);
            }

            // Advance serial number for next collector
            let nextNum = parseInt(currentSerial, 10) + 1;
            currentSerial = String(nextNum).padStart(3, '0');
            if (certSerialDisplay) certSerialDisplay.textContent = `#${currentSerial} / 100`;

            form.reset();
        });
    }
}

/* ==========================================================================
   8. CHRONOMETER COUNTDOWN TIMER
   ========================================================================== */
function initChronoCountdown() {
    const launchTimestamp = new Date(Date.now() + (42 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000)).getTime();

    const d = document.getElementById('cd-days');
    const h = document.getElementById('cd-hours');
    const m = document.getElementById('cd-minutes');
    const s = document.getElementById('cd-seconds');
    const ms = document.getElementById('cd-ms');

    if (!d) return;

    function loop() {
        const now = Date.now();
        const diff = Math.max(0, launchTimestamp - now);

        d.textContent = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
        h.textContent = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        m.textContent = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        s.textContent = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
        if (ms) ms.textContent = String(Math.floor((diff % 1000) / 10)).padStart(2, '0');

        requestAnimationFrame(loop);
    }
    loop();
}

/* ==========================================================================
   9. MACRO INSPECTOR MODAL LIGHTBOX
   ========================================================================== */
function initMacroInspectorModal() {
    const triggers = document.querySelectorAll('.haute-inspect-trigger');
    const modal = document.getElementById('vault-modal');
    const imgEl = document.getElementById('modal-img');
    const titleEl = document.getElementById('modal-title');
    const descEl = document.getElementById('modal-desc');
    const closeBtn = document.getElementById('modal-close-btn');

    if (!modal || !imgEl) return;

    const data = {
        crown: {
            title: 'Fluted 18K Gold Crown & Triple-Gasket Bezel',
            desc: 'Micro-lathed fluted grip ridges with double internal O-ring pressure seals and solid gold crown flank protection.',
            src: 'watch-crown.jpg'
        },
        dial: {
            title: 'Sunburst Rose-Engine Guilloché Dial',
            desc: 'Hand-turned geometric guilloché engraving radiating from center with diamond-faceted solid gold dauphine hands.',
            src: 'watch-dial.jpg'
        },
        caseback: {
            title: 'Calibre TS-9080 Exhibition Sapphire Caseback',
            desc: 'High-beat Swiss automatic movement showcasing 18K gold oscillating weight, perlage circular graining, and 26 synthetic rubies.',
            src: 'watch-caseback.jpg'
        },
        hero: {
            title: '18K Yellow Gold Floating Architecture',
            desc: 'Aurelia Chronos 38.5mm solid gold case floating with weightless antigravity poise and double-domed anti-reflective sapphire crystal.',
            src: 'watch-hero.jpg'
        }
    };

    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const key = btn.dataset.view || 'hero';
            const item = data[key] || data.hero;

            imgEl.src = item.src;
            titleEl.textContent = item.title;
            descEl.textContent = item.desc;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function hide() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (closeBtn) closeBtn.addEventListener('click', hide);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hide();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) hide();
    });
}
