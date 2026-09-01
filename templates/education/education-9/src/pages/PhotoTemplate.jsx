import React, { useState, useEffect, useRef } from 'react';
import './PhotoTemplate.css';

const TOTAL_FRAMES = 100;

export default function PhotoTemplate() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Refs for animation loop
  const canvasRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const preloadedImages = useRef([]);
  
  const currentProgress = useRef(0);
  const targetProgress = useRef(0);
  const requestRef = useRef(null);



  // Preload images sequence
  useEffect(() => {
    let loaded = 0;
    const imagesArray = [];

    const getFramePath = (index) => {
      const paddedIndex = String(index).padStart(6, '0');
      return `/templates/photography/photo-template/frames/frame_${paddedIndex}.jpg`;
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        img.decode().then(() => {
          imagesArray[i] = img;
          loaded++;
          setLoadedCount(loaded);
          if (loaded === TOTAL_FRAMES) {
            preloadedImages.current = imagesArray;
            setIsLoaded(true);
          }
        }).catch(() => {
          imagesArray[i] = img;
          loaded++;
          setLoadedCount(loaded);
          if (loaded === TOTAL_FRAMES) {
            preloadedImages.current = imagesArray;
            setIsLoaded(true);
          }
        });
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          preloadedImages.current = imagesArray;
          setIsLoaded(true);
        }
      };
    }
  }, []);

  // Handle scroll to calculate progress
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTrackRef.current) return;
      const rect = scrollTrackRef.current.getBoundingClientRect();
      const trackHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      const relativeScroll = -rect.top;
      const maxScroll = trackHeight - viewportHeight;
      
      if (maxScroll > 0) {
        targetProgress.current = Math.max(0, Math.min(1, relativeScroll / maxScroll));
      } else {
        targetProgress.current = 0;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resize canvas helper
  const resizeCanvas = (canvas) => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
  };

  // Draw image cover helper
  const drawImageCover = (img, ctx, w, h) => {
    const imgW = img.width;
    const imgH = img.height;
    const imgRatio = imgW / imgH;
    const screenRatio = w / h;
    
    let sourceX = 0;
    let sourceY = 0;
    let sourceW = imgW;
    let sourceH = imgH;
    
    if (imgRatio > screenRatio) {
      sourceW = imgH * screenRatio;
      sourceX = (imgW - sourceW) / 2;
    } else {
      sourceH = imgW / screenRatio;
      sourceY = (imgH - sourceH) / 2;
    }
    
    ctx.drawImage(img, sourceX, sourceY, sourceW, sourceH, 0, 0, w, h);
  };

  // Draw procedural fallback
  const drawProceduralFallback = (ctx, w, h, progress) => {
    const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, Math.max(w, h) * 0.8);
    bgGrad.addColorStop(0, '#0a0a0a');
    bgGrad.addColorStop(1, '#050505');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);
    
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(progress * Math.PI * 4);
    ctx.strokeStyle = 'rgba(122, 154, 139, 0.15)';
    ctx.lineWidth = 1.5;
    
    for (let i = 0; i < 8; i++) {
      ctx.rotate(Math.PI / 4);
      ctx.beginPath();
      ctx.arc(50 * Math.sin(progress * Math.PI), 0, 120 + 30 * Math.cos(progress * Math.PI), 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  };

  // Viewfinder HUD Drawing
  const drawViewfinder = (ctx, w, h, frameIndex) => {
    const progress = frameIndex / (TOTAL_FRAMES - 1);
    ctx.strokeStyle = 'rgba(244, 240, 232, 0.15)';
    ctx.fillStyle = 'rgba(244, 240, 232, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.font = '500 10px "Plus Jakarta Sans"';
    
    const padding = 40;
    const len = 15;
    
    // Corners
    ctx.beginPath();
    ctx.moveTo(padding, padding + len);
    ctx.lineTo(padding, padding);
    ctx.lineTo(padding + len, padding);
    ctx.moveTo(w - padding, padding + len);
    ctx.lineTo(w - padding, padding);
    ctx.lineTo(w - padding - len, padding);
    ctx.moveTo(padding, h - padding - len);
    ctx.lineTo(padding, h - padding);
    ctx.lineTo(padding + len, h - padding);
    ctx.moveTo(w - padding, h - padding - len);
    ctx.lineTo(w - padding, h - padding);
    ctx.lineTo(w - padding - len, h - padding);
    ctx.stroke();
    
    // Central Focus Star
    const cx = w / 2;
    const cy = h / 2;
    const starRadius = 24;
    
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(progress * Math.PI * 0.5);
    ctx.beginPath();
    ctx.moveTo(0, -starRadius);
    ctx.quadraticCurveTo(0, 0, starRadius, 0);
    ctx.quadraticCurveTo(0, 0, 0, starRadius);
    ctx.quadraticCurveTo(0, 0, -starRadius, 0);
    ctx.quadraticCurveTo(0, 0, 0, -starRadius);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'rgba(244, 240, 232, 0.05)';
    ctx.fill();
    ctx.restore();
    
    // HUD Details
    ctx.fillText('F/4.0', padding + 10, h - padding - 15);
    ctx.fillText('ISO 200', padding + 70, h - padding - 15);
    ctx.fillText(`FRAME ${String(frameIndex).padStart(6, '0')}`, w - padding - 95, padding + 18);
    
    // Exposure line
    const sliderWidth = 100;
    const sliderX = w - padding - sliderWidth - 10;
    const sliderY = h - padding - 18;
    
    ctx.beginPath();
    ctx.moveTo(sliderX, sliderY);
    ctx.lineTo(sliderX + sliderWidth, sliderY);
    ctx.moveTo(sliderX + sliderWidth / 2, sliderY - 3);
    ctx.lineTo(sliderX + sliderWidth / 2, sliderY + 3);
    ctx.stroke();
    
    const nodeX = sliderX + (sliderWidth * progress);
    ctx.beginPath();
    ctx.arc(nodeX, sliderY, 3, 0, Math.PI * 2);
    ctx.fill();
    
    const shutterSpeed = Math.round(125 + progress * 875);
    ctx.fillText(`1/${shutterSpeed}`, w / 2 - 15, padding + 18);
  };

  // Update Foreground Slides opacity & translate
  const updateSlidesDom = (progress) => {
    updateSingleSlideDom('photo-slide-0', 0.0, 0.05, 0.18, 0.23, progress);
    updateSingleSlideDom('photo-slide-1', 0.25, 0.30, 0.43, 0.48, progress);
    updateSingleSlideDom('photo-slide-2', 0.50, 0.55, 0.68, 0.73, progress);
    updateSingleSlideDom('photo-slide-3', 0.75, 0.80, 0.95, 1.00, progress);
  };

  const updateSingleSlideDom = (id, start, peakStart, peakEnd, end, progress) => {
    const el = document.getElementById(id);
    if (!el) return;
    
    let opacity = 0;
    let translateY = 40;
    
    if (progress >= start && progress <= end) {
      if (progress < peakStart) {
        const factor = (progress - start) / (peakStart - start);
        opacity = factor;
        translateY = 40 - (40 * factor);
      } else if (progress > peakEnd) {
        const factor = (progress - peakEnd) / (end - peakEnd);
        opacity = 1 - factor;
        translateY = -40 * factor;
      } else {
        opacity = 1;
        translateY = 0;
      }
    } else {
      opacity = 0;
      translateY = progress < start ? 40 : -40;
    }
    
    el.style.opacity = opacity;
    el.style.transform = `translateY(${translateY}px)`;
    el.style.pointerEvents = opacity > 0.1 ? 'all' : 'none';
    el.style.visibility = opacity > 0.01 ? 'visible' : 'hidden';
  };

  // Continuous Canvas Draw Loop
  useEffect(() => {
    if (!isLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    resizeCanvas(canvas);

    const animationLoop = () => {
      const diff = targetProgress.current - currentProgress.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgress.current += diff * 0.05;
      } else {
        currentProgress.current = targetProgress.current;
      }

      const frameIdx = Math.round(currentProgress.current * (TOTAL_FRAMES - 1));
      
      // Draw frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      const img = preloadedImages.current[frameIdx];
      if (img) {
        drawImageCover(img, ctx, canvas.width, canvas.height);
      } else {
        drawProceduralFallback(ctx, canvas.width, canvas.height, currentProgress.current);
      }

      // Viewfinder
      ctx.save();
      const dpr = window.devicePixelRatio || 1;
      ctx.scale(dpr, dpr);
      drawViewfinder(ctx, window.innerWidth, window.innerHeight, frameIdx);
      ctx.restore();

      // Timeline Fill
      const fill = document.getElementById('photo-indicator-fill');
      if (fill) {
        fill.style.width = `${currentProgress.current * 100}%`;
      }

      // Update slide transparency
      updateSlidesDom(currentProgress.current);

      requestRef.current = requestAnimationFrame(animationLoop);
    };

    animationLoop();

    const handleResize = () => {
      resizeCanvas(canvas);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded]);

  const loadPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <div className="photo-body">
      
      {/* Preloader Overlay */}
      {!isLoaded && (
        <div className="photo-canvas-loader">
          <div className="photo-loader-content">
            <h2 className="photo-serif photo-loader-brand">PHOTO STUDIO</h2>
            <p className="photo-loader-status">Preloading Creative Frames... <span style={{ color: '#7A9A8B', fontWeight: 700 }}>{loadPercent}%</span></p>
          </div>
        </div>
      )}

      {/* Canvas Container */}
      <div className="photo-canvas-container">
        <canvas ref={canvasRef} id="photo-scroll-canvas"></canvas>
        <div className="photo-canvas-overlay"></div>
      </div>

      {/* Header */}
      <header className="photo-editorial-header">
        <div className="photo-header-logo">
          <a href="#">Photo</a>
        </div>
        <nav className="photo-header-nav">
          <a href="#" className="photo-nav-link active">Home</a>
          <a href="#about" className="photo-nav-link">Pages</a>
          <a href="#albums" className="photo-nav-link">Albums</a>
          <a href="#galleries" className="photo-nav-link">Galleries</a>
          <a href="#blog" className="photo-nav-link">Blog</a>
          <a href="#contact" className="photo-nav-link">Contact</a>
          <a href="#" className="photo-nav-btn-buy">Buy Now</a>
        </nav>
        <div className="photo-header-socials">
          {['facebook-f', 'twitter', 'instagram', 'envelope'].map((icon, i) => (
            <a key={i} href="#" aria-label={icon}>
              <i className={`fa-brands fa-${icon === 'envelope' ? 'envelope' : icon} text-lg`}></i>
            </a>
          ))}
        </div>
      </header>

      {/* Main Track */}
      <main className="photo-scroll-wrapper">
        
        {/* Scroll Track */}
        <section ref={scrollTrackRef} className="photo-hero-scroll-track" id="hero-track">
          <div className="photo-hero-sticky-container">
            <div className="photo-editorial-slides-container">
              
              {/* Slide 01 */}
              <div className="photo-editorial-slide" id="photo-slide-0">
                <div className="photo-hero-split-layout">
                  <div className="hero-left photo-glass-column">
                    <span className="photo-card-glass-label">01 / FOCUS</span>
                    <h1 className="photo-slide-title">The Essence of <em>Light</em></h1>
                    <p className="photo-slide-desc">
                      Capturing organic forms and golden shadows with visual minimalism, creating high-contrast imagery with authentic emotional weight.
                    </p>
                    <div className="flex gap-4">
                      <a href="#about" className="photo-nav-btn-buy">Explore Studio</a>
                      <a href="#albums" className="photo-btn-arrow">Portfolios →</a>
                    </div>
                  </div>
                  <div className="hero-right flex justify-center">
                    <div className="photo-glass-section rounded-3xl overflow-hidden aspect-[4/5] max-w-sm w-full">
                      <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80" alt="Focus Portrait" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 02 */}
              <div className="photo-editorial-slide" id="photo-slide-1">
                <div className="photo-hero-split-layout">
                  <div className="hero-left photo-glass-column">
                    <span className="photo-card-glass-label">02 / MOVEMENT</span>
                    <h1 className="photo-slide-title">Cinematic <em>Stillness</em></h1>
                    <p className="photo-slide-desc">
                      Freezing motions and natural interactions to tell detailed stories that resonate far beyond the boundary of a single frame.
                    </p>
                    <div className="flex gap-4">
                      <a href="#about" className="photo-nav-btn-buy">Read Narrative</a>
                      <a href="#albums" className="photo-btn-arrow">View Showcase →</a>
                    </div>
                  </div>
                  <div className="hero-right flex justify-center">
                    <div className="photo-glass-section rounded-3xl overflow-hidden aspect-[4/5] max-w-sm w-full">
                      <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" alt="Cinematic Motion" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 03 */}
              <div className="photo-editorial-slide" id="photo-slide-2">
                <div className="photo-hero-split-layout">
                  <div className="hero-left photo-glass-column">
                    <span className="photo-card-glass-label">03 / HARMONY</span>
                    <h1 className="photo-slide-title">Tonal <em>Elegance</em></h1>
                    <p className="photo-slide-desc">
                      Carefully balancing contrast, depth, and shadow values to showcase the natural beauty of silhouettes and environments.
                    </p>
                    <div className="flex gap-4">
                      <a href="#about" className="photo-nav-btn-buy">Our Process</a>
                      <a href="#albums" className="photo-btn-arrow">Gallery Albums →</a>
                    </div>
                  </div>
                  <div className="hero-right flex justify-center">
                    <div className="photo-glass-section rounded-3xl overflow-hidden aspect-[4/5] max-w-sm w-full">
                      <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80" alt="Tonal Silhouette" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 04 */}
              <div className="photo-editorial-slide" id="photo-slide-3">
                <div className="photo-hero-split-layout">
                  <div className="hero-left photo-glass-column">
                    <span className="photo-card-glass-label">04 / CREATION</span>
                    <h1 className="photo-slide-title">Art & <em>Collaboration</em></h1>
                    <p className="photo-slide-desc">
                      Co-creating with global agencies, designers, and visual stylists to construct custom, premium visual campaigns.
                    </p>
                    <div className="flex gap-4">
                      <a href="#contact" className="photo-nav-btn-buy">Book Consultation</a>
                      <a href="#galleries" className="photo-btn-arrow">View Albums →</a>
                    </div>
                  </div>
                  <div className="hero-right flex justify-center">
                    <div className="photo-glass-section rounded-3xl overflow-hidden aspect-[4/5] max-w-sm w-full">
                      <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" alt="Aesthetic Capture" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Timeline Progress Bar */}
            <div className="photo-timeline-indicator">
              <div className="photo-indicator-fill" id="photo-indicator-fill"></div>
            </div>

          </div>
        </section>

        {/* Static Content wrapper */}
        <div className="photo-content-wrapper">
          
          {/* About */}
          <section className="photo-section" id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="photo-glass-column">
                <span className="photo-card-glass-label">About Photo</span>
                <h2 className="photo-heading">Capturing the Essence of <em>Light & Movement</em></h2>
                <p className="photo-slide-desc">
                  We believe photography is more than capturing a frame—it is an elegant preservation of space, feeling, and time. Photo was founded on the philosophy of visual minimalism, using natural shadows and golden hour tones to highlight authentic emotions.
                </p>
                <div className="flex flex-col gap-6 pt-4">
                  <div className="flex gap-4 border-l border-zinc-700 pl-4">
                    <span className="font-extrabold text-indigo-400">01 /</span>
                    <div>
                      <h4 className="font-semibold text-[#f3f4f6]">Artistic Portraits</h4>
                      <p className="text-zinc-500 text-xs mt-1">High-end creative photography with custom light sculpture setup.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 border-l border-zinc-700 pl-4">
                    <span className="font-extrabold text-indigo-400">02 /</span>
                    <div>
                      <h4 className="font-semibold text-[#f3f4f6]">Cinematic Weddings</h4>
                      <p className="text-zinc-500 text-xs mt-1">Discreet documentary-style romantic captures across the globe.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
                <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" alt="Behind the Lens" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Master Collection */}
          <section className="photo-section" id="albums">
            <div className="text-center space-y-4 mb-16">
              <span className="photo-card-glass-label mx-auto">Featured Work</span>
              <h2 className="photo-heading mx-auto text-center">The <em>Master Collection</em></h2>
              <p className="text-zinc-500 text-sm max-w-lg mx-auto">A handpicked collection of editorial portfolios, highlighting visual narrative and tonal harmony.</p>
            </div>
            
            <div className="photo-services-grid">
              {[
                { img: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80', num: '01.', title: 'Monochrome Silhouette', cat: 'Portraits / Fine Art' },
                { img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80', num: '02.', title: 'Ethereal Concert Tones', cat: 'Cinematic / Editorial' },
                { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', num: '03.', title: 'Timeless Vows', cat: 'Weddings / Lifestyle' }
              ].map((album, i) => (
                <div key={i} className="photo-glass-section-small p-6 rounded-3xl flex flex-col gap-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src={album.img} alt={album.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="text-xl font-bold text-indigo-400">{album.num}</span>
                    <div>
                      <h3 className="photo-serif text-lg text-white font-semibold">{album.title}</h3>
                      <p className="text-zinc-500 text-xs mt-0.5">{album.cat}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Galleries Grid */}
          <section className="photo-section" id="galleries">
            <div className="text-center space-y-4 mb-16">
              <span className="photo-card-glass-label mx-auto">Visual Galleries</span>
              <h2 className="photo-heading mx-auto text-center">Curated <em>Visual Narratives</em></h2>
              <p className="text-zinc-500 text-sm max-w-lg mx-auto">Explore detailed albums categorized by visual emotion, style, and art direction.</p>
            </div>
            
            <div className="photo-showcase-grid">
              {[
                { img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80', title: 'Fine Art Shadows', count: '24 Photos', cls: 'photo-s1' },
                { img: 'https://images.unsplash.com/photo-1513829096960-ef04829846e4?auto=format&fit=crop&w=800&q=80', title: 'Whispering Forests', count: '18 Photos', cls: 'photo-s2' },
                { img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80', title: 'Vogue Editorial', count: '32 Photos', cls: 'photo-s3' },
                { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', title: 'Architectural Lines', count: '15 Photos', cls: 'photo-s4' }
              ].map((grid, i) => (
                <div key={i} className={`photo-showcase-item ${grid.cls}`}>
                  <img src={grid.img} alt={grid.title} />
                  <div className="photo-showcase-info">
                    <span>{grid.count}</span>
                    <h4>{grid.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Journal */}
          <section className="photo-section" id="blog">
            <div className="space-y-4 mb-16">
              <span className="photo-card-glass-label">Editorial Journal</span>
              <h2 className="photo-heading">Insights & <em>Photographic Journeys</em></h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { img: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80', date: 'August 12, 2026', title: 'Chasing Light in the Scottish Highlands', desc: 'An exploration of patience, shifting weather conditions, and capturing dynamic shadows across the dramatic peaks of Glen Coe.' },
                { img: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=800&q=80', date: 'July 28, 2026', title: 'The Art of Subtle Shadows in Studio Portraits', desc: 'How utilizing a single light source and black reflector boards creates dramatic, emotional depth in minimalist studio layouts.' }
              ].map((post, i) => (
                <div key={i} className="photo-glass-section-small rounded-3xl p-6 flex flex-col gap-4">
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-102 transition-all duration-300" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">{post.date} — Journal</span>
                    <h3 className="photo-serif text-xl text-white hover:text-indigo-400 cursor-pointer font-semibold leading-snug">{post.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{post.desc}</p>
                    <a href="#" className="text-xs font-semibold text-indigo-400 hover:text-white transition-colors inline-block mt-2">Read Journal →</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="photo-section pb-24" id="contact">
            <div className="photo-contact-grid">
              <div className="photo-glass-column">
                <span className="photo-card-glass-label">Get in Touch</span>
                <h2 className="photo-heading">Let's Frame Your <em>Story</em></h2>
                <p className="photo-slide-desc">
                  Whether you are planning a high-end editorial showcase, a commercial launch, or looking to preserve cinematic personal milestones, we would love to collaborate.
                </p>
                <div className="photo-contact-details">
                  <div className="photo-contact-method">
                    <span className="photo-method-icon"><i className="fa-solid fa-map-pin"></i></span>
                    <div>
                      <h4>Studio Address</h4>
                      <p>244 Golden Hour Boulevard, Suite 100, Los Angeles, CA</p>
                    </div>
                  </div>
                  <div className="photo-contact-method">
                    <span className="photo-method-icon"><i className="fa-solid fa-envelope"></i></span>
                    <div>
                      <h4>General Inquiry</h4>
                      <p>inquire@photostudio.com</p>
                    </div>
                  </div>
                  <div className="photo-contact-method">
                    <span className="photo-method-icon"><i className="fa-solid fa-phone"></i></span>
                    <div>
                      <h4>Direct Phone</h4>
                      <p>+1 (310) 555-0198</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="photo-contact-form-col">
                <form onSubmit={(e) => { e.preventDefault(); alert('Booking request sent successfully!'); }} className="photo-glass-form">
                  <div className="photo-form-row">
                    <div className="photo-input-group">
                      <label>Your Name</label>
                      <input type="text" required placeholder="Alexander Vance" />
                    </div>
                    <div className="photo-input-group">
                      <label>Email Address</label>
                      <input type="email" required placeholder="alex@vance.com" />
                    </div>
                  </div>
                  
                  <div className="photo-input-group">
                    <label>Select Project Type</label>
                    <select>
                      <option value="editorial">Editorial & Fine Art</option>
                      <option value="wedding">Cinematic Wedding</option>
                      <option value="portrait">Studio Portrait Session</option>
                      <option value="commercial">Commercial Campaign</option>
                    </select>
                  </div>
                  
                  <div className="photo-input-group">
                    <label>Describe Your Vision</label>
                    <textarea rows="5" required placeholder="Tell us about your project, timeline, and aesthetic goals..."></textarea>
                  </div>
                  
                  <button type="submit" className="photo-btn-submit">Send Booking Request</button>
                </form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="photo-editorial-footer">
            <div className="photo-footer-grid">
              <div>
                <span className="photo-footer-logo">Photo</span>
                <p className="text-[10px] text-zinc-600 mt-2">
                  &copy; 2026 Photo Creative Studio. All Rights Reserved.<br />
                  Designed for high-end web platforms.
                </p>
              </div>
              <div className="photo-footer-links">
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-[10px] uppercase text-zinc-500 tracking-wider">Studio</span>
                  <a href="#about" className="text-xs text-zinc-600 hover:text-white">About Us</a>
                  <a href="#albums" className="text-xs text-zinc-600 hover:text-white">Portfolios</a>
                  <a href="#blog" className="text-xs text-zinc-600 hover:text-white">Journal</a>
                </div>
                <div className="flex flex-col gap-2 pl-6">
                  <span className="font-semibold text-[10px] uppercase text-zinc-500 tracking-wider">Connect</span>
                  <a href="#" className="text-xs text-zinc-600 hover:text-white">Instagram</a>
                  <a href="#" className="text-xs text-zinc-600 hover:text-white">Pinterest</a>
                  <a href="#" className="text-xs text-zinc-600 hover:text-white">Contact</a>
                </div>
              </div>
            </div>
          </footer>

        </div>

      </main>

    </div>
  );
}
