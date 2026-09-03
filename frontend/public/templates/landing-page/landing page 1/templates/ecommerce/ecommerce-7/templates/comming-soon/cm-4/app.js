/* ==========================================================================
   BOTANICAL STUDIES: THE HERITAGE FOLIO — MASTER CONTROLLER (CM-4)
   Features: 
   1. Cinematic Looping Background Video Engine (bg-book.gif)
   2. Ultra-precise Live Countdown Timer with Millisecond Pulse
   3. Antiquarian Ambient Web Audio Synthesizer (Warm organ drone & paper rustle)
   4. Interactive 3D Book Experience & Botanical Plate Modal Inspector
   5. VIP Early-Access Reservation & Chapter Sampler Download
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. ATMOSPHERIC WEB AUDIO ENGINE
    // ----------------------------------------------------------------------
    class AntiquarianAudioEngine {
        constructor() {
            this.ctx = null;
            this.droneOsc1 = null;
            this.droneOsc2 = null;
            this.filter = null;
            this.gainNode = null;
            this.isInitialized = false;
            this.isPlaying = false;
        }

        init() {
            if (this.isInitialized) return;
            try {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                this.ctx = new AudioContextClass();

                // Warm Low Harmonic Organ/Cello Drone (D2 & A2)
                this.droneOsc1 = this.ctx.createOscillator();
                this.droneOsc1.type = 'sine';
                this.droneOsc1.frequency.value = 73.42; // D2

                this.droneOsc2 = this.ctx.createOscillator();
                this.droneOsc2.type = 'triangle';
                this.droneOsc2.frequency.value = 110.00; // A2

                this.filter = this.ctx.createBiquadFilter();
                this.filter.type = 'lowpass';
                this.filter.frequency.value = 220;
                this.filter.Q.value = 3;

                this.gainNode = this.ctx.createGain();
                this.gainNode.gain.value = 0.0;

                this.droneOsc1.connect(this.filter);
                this.droneOsc2.connect(this.filter);
                this.filter.connect(this.gainNode);
                this.gainNode.connect(this.ctx.destination);

                this.droneOsc1.start();
                this.droneOsc2.start();

                this.isInitialized = true;
            } catch (e) {
                console.warn('Web Audio API not supported or blocked:', e);
            }
        }

        toggleAudio() {
            if (!this.isInitialized) this.init();
            if (!this.ctx) return false;

            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }

            this.isPlaying = !this.isPlaying;
            const targetGain = this.isPlaying ? 0.07 : 0.0;
            this.gainNode.gain.linearRampToValueAtTime(targetGain, this.ctx.currentTime + 1.2);
            return this.isPlaying;
        }

        playPageTurn() {
            if (!this.isInitialized) this.init();
            if (!this.ctx || !this.isPlaying) return;

            try {
                // Synthesize soft parchment paper rustle
                const bufferSize = this.ctx.sampleRate * 0.12;
                const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
                }

                const noise = this.ctx.createBufferSource();
                noise.buffer = buffer;

                const bandpass = this.ctx.createBiquadFilter();
                bandpass.type = 'bandpass';
                bandpass.frequency.value = 1400;
                bandpass.Q.value = 1.2;

                const noiseGain = this.ctx.createGain();
                noiseGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
                noiseGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

                noise.connect(bandpass);
                bandpass.connect(noiseGain);
                noiseGain.connect(this.ctx.destination);

                noise.start();
            } catch (e) {
                // Silent fail
            }
        }

        playGoldChime() {
            if (!this.isInitialized) this.init();
            if (!this.ctx || !this.isPlaying) return;

            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(1760, this.ctx.currentTime); // A6 bell chime
                osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.3);

                gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start();
                osc.stop(this.ctx.currentTime + 0.45);
            } catch (e) {
                // Silent fail
            }
        }
    }

    const audio = new AntiquarianAudioEngine();

    // Sound toggle button
    const soundToggleBtn = document.getElementById('sound-toggle-btn');
    const soundIcon = document.getElementById('sound-icon');
    const soundLabel = document.getElementById('sound-label');

    if (soundToggleBtn) {
        soundToggleBtn.addEventListener('click', () => {
            const isPlaying = audio.toggleAudio();
            if (isPlaying) {
                soundIcon.className = 'fas fa-volume-high text-emerald-400';
                soundLabel.textContent = 'Audio: Antiquarian On';
                soundToggleBtn.classList.add('border-emerald-500/50');
            } else {
                soundIcon.className = 'fas fa-volume-xmark text-stone-400';
                soundLabel.textContent = 'Audio: Muted';
                soundToggleBtn.classList.remove('border-emerald-500/50');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 2. BACKGROUND VIDEO SMOOTH FADE IN
    // ----------------------------------------------------------------------
    const bgVideo = document.getElementById('bg-video');
    if (bgVideo) {
        if (bgVideo.complete) {
            bgVideo.classList.remove('opacity-0');
        } else {
            bgVideo.addEventListener('load', () => {
                bgVideo.classList.remove('opacity-0');
            });
        }
    }

    // ----------------------------------------------------------------------
    // 3. LIVE COUNTDOWN TIMER ENGINE (Precise to Milliseconds)
    // ----------------------------------------------------------------------
    const launchTarget = new Date(Date.now() + (32 * 24 * 60 * 60 + 14 * 3600 + 38 * 60) * 1000);

    const daysEl = document.getElementById('timer-days');
    const hoursEl = document.getElementById('timer-hours');
    const minutesEl = document.getElementById('timer-minutes');
    const secondsEl = document.getElementById('timer-seconds');
    const msEl = document.getElementById('timer-ms');

    function updateCountdown() {
        const now = new Date();
        const diff = launchTarget - now;

        if (diff <= 0) {
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
            if (msEl) msEl.textContent = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        const ms = Math.floor((diff % 1000) / 10);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        if (msEl) msEl.textContent = String(ms).padStart(2, '0');

        requestAnimationFrame(updateCountdown);
    }

    requestAnimationFrame(updateCountdown);

    // ----------------------------------------------------------------------
    // 4. INTERACTIVE 3D BOOK & BOTANICAL PLATE MODAL
    // ----------------------------------------------------------------------
    const plateModal = document.getElementById('plate-modal');
    const plateModalTitle = document.getElementById('modal-plate-title');
    const plateModalSubtitle = document.getElementById('modal-plate-subtitle');
    const plateModalDesc = document.getElementById('modal-plate-desc');
    const modalPlateImg = document.getElementById('modal-plate-img');
    const downloadPlateBtn = document.getElementById('btn-download-plate');
    const closeModalBtn = document.getElementById('close-plate-modal');

    let activePlateKey = 'rosa';

    const BOTANICAL_PLATES = {
        'rosa': {
            title: 'Plate IV: Rosa Canina (Wild Dog Rose)',
            subtitle: 'Specimen collected in Berkshire Foothills, 1884',
            desc: 'Renowned for its delicate five-petaled blush corolla, curative rosehips high in botanical oils, and serrated oval leaflets. Hand-engraved copper plate with original watercolor wash.',
            image: 'rosa-canina.jpg',
            filename: 'Plate_IV_Rosa_Canina_Botanical_Studies_1884.jpg'
        },
        'lavandula': {
            title: 'Plate VII: Lavandula Angustifolia (English Lavender)',
            subtitle: 'Specimen from Royal Botanical Greenhouse, 1891',
            desc: 'Features slender whorled purple inflorescence spikelets and aromatic linear leaves. Coveted by Victorian herbalists for essential oil distillation and calmative tisanes.',
            image: 'lavandula.jpg',
            filename: 'Plate_VII_Lavandula_Angustifolia_Botanical_Studies_1891.jpg'
        },
        'fagus': {
            title: 'Plate V: Fagus Sylvatica (European Beech Folio)',
            subtitle: 'Arboreal Collection, Black Forest Expedition, 1887',
            desc: 'Depicting autumnal golden venation and pressed foliage specimens. Demonstrates cellular leaf architecture and ancient preservation drying methods.',
            image: 'fagus-sylvatica.jpg',
            filename: 'Plate_V_Fagus_Sylvatica_Botanical_Studies_1887.jpg'
        },
        'cover': {
            title: 'Hand-Tooled Calfskin Heritage Binding',
            subtitle: 'Guild of London Bookbinders, Master Exemplar',
            desc: 'Full grain Moroccan leather with 24-karat gold leaf foil stamping, raised spine bands, hand-marbled Italian endpapers, and hand-gilded page deckles.',
            image: 'book.jpg',
            filename: 'Botanical_Studies_Heritage_Binding_Cover.jpg'
        }
    };

    // Open plate inspector on card click
    document.querySelectorAll('.open-plate-trigger').forEach(btn => {
        btn.addEventListener('click', () => {
            activePlateKey = btn.dataset.plate || 'rosa';
            const data = BOTANICAL_PLATES[activePlateKey] || BOTANICAL_PLATES['rosa'];

            if (plateModalTitle) plateModalTitle.textContent = data.title;
            if (plateModalSubtitle) plateModalSubtitle.textContent = data.subtitle;
            if (plateModalDesc) plateModalDesc.textContent = data.desc;
            if (modalPlateImg) {
                modalPlateImg.src = data.image;
                modalPlateImg.alt = data.title;
            }

            audio.playPageTurn();

            if (plateModal) {
                plateModal.classList.add('active');
            }
        });
    });

    if (downloadPlateBtn) {
        downloadPlateBtn.addEventListener('click', () => {
            const data = BOTANICAL_PLATES[activePlateKey] || BOTANICAL_PLATES['rosa'];
            const link = document.createElement('a');
            link.href = data.image;
            link.download = data.filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            audio.playGoldChime();
        });
    }

    if (closeModalBtn && plateModal) {
        closeModalBtn.addEventListener('click', () => {
            plateModal.classList.remove('active');
        });
        plateModal.addEventListener('click', (e) => {
            if (e.target === plateModal) {
                plateModal.classList.remove('active');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 5. VIP RESERVATION & CHAPTER 1 SAMPLER FORM
    // ----------------------------------------------------------------------
    const preorderForm = document.getElementById('vip-preorder-form');
    const toast = document.getElementById('vip-toast');
    const toastMessage = document.getElementById('toast-message');
    const remainingSlotsEl = document.getElementById('remaining-slots');

    let remainingSlots = 142;

    if (preorderForm) {
        preorderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = preorderForm.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : '';

            if (!email) return;

            remainingSlots = Math.max(1, remainingSlots - 1);
            if (remainingSlotsEl) remainingSlotsEl.textContent = remainingSlots;

            audio.playGoldChime();

            // Show confirmation toast
            if (toast && toastMessage) {
                toastMessage.innerHTML = `<strong>Priority Confirmed!</strong> VIP Invitation & Chapter 1 Sampler sent to <span class="text-amber-400">${email}</span>. Collector Number <strong>#${1000 - remainingSlots}</strong> assigned!`;
                toast.classList.remove('translate-y-24', 'opacity-0');
                toast.classList.add('translate-y-0', 'opacity-100');

                emailInput.value = '';

                setTimeout(() => {
                    toast.classList.add('translate-y-24', 'opacity-0');
                    toast.classList.remove('translate-y-0', 'opacity-100');
                }, 5500);
            }
        });
    }

    // ----------------------------------------------------------------------
    // 6. CHAPTER ACCORDION EXPANSION
    // ----------------------------------------------------------------------
    document.querySelectorAll('.chapter-toggle').forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const icon = header.querySelector('.chapter-icon');
            const isOpen = !body.classList.contains('hidden');

            // Close all
            document.querySelectorAll('.chapter-body').forEach(b => b.classList.add('hidden'));
            document.querySelectorAll('.chapter-icon').forEach(i => i.style.transform = 'rotate(0deg)');

            if (!isOpen) {
                body.classList.remove('hidden');
                if (icon) icon.style.transform = 'rotate(180deg)';
                audio.playPageTurn();
            }
        });
    });

});
