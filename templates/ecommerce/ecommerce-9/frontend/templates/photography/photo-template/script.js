// Photo Creative Studio — High-Performance Scroll-Driven Background Animation

// --- Configuration & State ---
const canvas = document.getElementById('scroll-canvas');
const ctx = canvas.getContext('2d');
const heroTrack = document.getElementById('hero-track');
const indicatorFill = document.getElementById('indicator-fill');

// Loader UI Elements
const loaderContainer = document.getElementById('canvas-loader');
const loaderPercentText = document.getElementById('loader-percent');

// Sequence parameters (100 frames total, index 0 to 99)
const TOTAL_FRAMES = 100;
const preloadedImages = [];
let loadedCount = 0;
let isLoaded = false;

// Lerping variables for smooth scrubbing
let currentProgress = 0;
let targetProgress = 0;
const easeFactor = 0.05; // Easing catch-up factor for liquid smoothness

// Calculate relative frame path (padded to 6 digits)
function getFramePath(frameIndex) {
  const paddedIndex = String(frameIndex).padStart(6, '0');
  return `frames/frame_${paddedIndex}.jpg`;
}

// --- Image Pre-processor ---
// Bypassed chroma-keying to preserve original image contrast, shading, and details
function processImage(img) {
  return img; 
}

// --- Preload Strategy ---
function preloadSequence() {
  return new Promise((resolve) => {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      
      img.onload = () => {
        // Asynchronously decode image in browser memory before resolution to prevent rendering stutter
        img.decode().then(() => {
          preloadedImages[i] = processImage(img);
          loadedCount++;
          updateLoaderProgress();
          if (loadedCount === TOTAL_FRAMES) {
            onLoadingComplete(resolve);
          }
        }).catch(err => {
          console.warn(`Failed to decode frame ${i}:`, err);
          preloadedImages[i] = processImage(img);
          loadedCount++;
          updateLoaderProgress();
          if (loadedCount === TOTAL_FRAMES) {
            onLoadingComplete(resolve);
          }
        });
      };
      
      img.onerror = () => {
        console.warn(`Frame ${i} failed to load at path: ${img.src}. Using procedural fallback.`);
        loadedCount++;
        updateLoaderProgress();
        if (loadedCount === TOTAL_FRAMES) {
          onLoadingComplete(resolve);
        }
      };
    }
  });
}

function updateLoaderProgress() {
  const percent = Math.round((loadedCount / TOTAL_FRAMES) * 100);
  if (loaderPercentText) {
    loaderPercentText.textContent = `${percent}%`;
  }
  if (loaderContainer) {
    loaderContainer.style.background = `linear-gradient(90deg, rgba(122,154,139,0.15) ${percent}%, rgba(10,10,10,0.85) ${percent}%)`;
  }
}

function onLoadingComplete(resolve) {
  isLoaded = true;
  if (loaderContainer) {
    loaderContainer.style.opacity = '0';
    setTimeout(() => {
      loaderContainer.style.display = 'none';
    }, 500);
  }
  resolve();
}

// --- Scroll & Responsive Metrics State ---
let trackTop = 0;
let trackHeight = 0;
let maxScroll = 0;

function updateScrollMetrics() {
  if (!heroTrack) return;
  const rect = heroTrack.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  trackTop = rect.top + scrollTop;
  trackHeight = rect.height;
  maxScroll = trackHeight - window.innerHeight;
}

// --- Responsive Canvas Resizing ---
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
}

window.addEventListener('resize', () => {
  resizeCanvas();
  updateScrollMetrics();
  const frameIndex = Math.round(currentProgress * (TOTAL_FRAMES - 1));
  renderFrame(frameIndex);
});

// Initialize canvas scale and metrics
resizeCanvas();
updateScrollMetrics();

// --- Scroll Synchronization (Reflow-Free, Passive Listener) ---
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const relativeScroll = scrollTop - trackTop;
  
  if (maxScroll > 0) {
    targetProgress = Math.max(0, Math.min(1, relativeScroll / maxScroll));
  } else {
    targetProgress = 0;
  }
}, { passive: true });

// --- Continuous Animation/Lerping Loop ---
let lastRenderedProgress = -1;

function animationLoop() {
  const progressDifference = targetProgress - currentProgress;
  
  if (Math.abs(progressDifference) > 0.0001) {
    currentProgress += progressDifference * easeFactor;
  } else {
    currentProgress = targetProgress;
  }
  
  // Only render and update if smoothed progress has changed significantly
  if (Math.abs(currentProgress - lastRenderedProgress) > 0.0001) {
    const frameIndex = Math.round(currentProgress * (TOTAL_FRAMES - 1));
    renderFrame(frameIndex);
    updateSlides(currentProgress);
    
    if (indicatorFill) {
      indicatorFill.style.width = `${currentProgress * 100}%`;
    }
    
    lastRenderedProgress = currentProgress;
  }
  
  requestAnimationFrame(animationLoop);
}

// --- Main Drawing Function ---
function renderFrame(frameIndex) {
  const width = canvas.width;
  const height = canvas.height;
  const dpr = window.devicePixelRatio || 1;
  
  // Clear screen
  ctx.clearRect(0, 0, width, height);
  
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  
  const activeImage = preloadedImages[frameIndex];
  const progress = frameIndex / (TOTAL_FRAMES - 1);
  
  // 1. Draw image background scaled to cover viewport (object-fit: cover logic)
  if (activeImage) {
    drawImageCover(activeImage, ctx, width, height);
  } else {
    // 2. Procedural Fallback
    drawProceduralFallback(ctx, width, height, progress);
  }
  
  // 3. Draw Viewfinder HUD Overlay (scaled for DPR)
  ctx.save();
  ctx.scale(dpr, dpr);
  drawViewfinder(ctx, window.innerWidth, window.innerHeight, frameIndex);
  ctx.restore();
}

// Draw image cover helper (similar to CSS background-size: cover)
function drawImageCover(img, context, w, h) {
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
  
  context.drawImage(img, sourceX, sourceY, sourceW, sourceH, 0, 0, w, h);
}

// Procedural background drawing fallback
function drawProceduralFallback(context, w, h, progress) {
  const bgGrad = context.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, Math.max(w, h) * 0.8);
  bgGrad.addColorStop(0, '#0a0a0a');
  bgGrad.addColorStop(1, '#050505');
  context.fillStyle = bgGrad;
  context.fillRect(0, 0, w, h);
  
  // Rotating lens grid
  context.save();
  context.translate(w / 2, h / 2);
  context.rotate(progress * Math.PI * 4);
  
  context.strokeStyle = 'rgba(122, 154, 139, 0.15)';
  context.lineWidth = 1.5;
  
  for (let i = 0; i < 8; i++) {
    context.rotate(Math.PI / 4);
    context.beginPath();
    context.arc(50 * Math.sin(progress * Math.PI), 0, 120 + 30 * Math.cos(progress * Math.PI), 0, Math.PI * 2);
    context.stroke();
  }
  context.restore();
}

// Camera Viewfinder HUD Overlay
function drawViewfinder(context, w, h, frameIndex) {
  const progress = frameIndex / (TOTAL_FRAMES - 1);
  
  context.strokeStyle = 'rgba(244, 240, 232, 0.15)';
  context.fillStyle = 'rgba(244, 240, 232, 0.4)';
  context.lineWidth = 1.5;
  context.font = '500 10px "Plus Jakarta Sans"';
  
  const padding = 40;
  const len = 15;
  
  // Corner crop lines
  context.beginPath();
  context.moveTo(padding, padding + len);
  context.lineTo(padding, padding);
  context.lineTo(padding + len, padding);
  context.moveTo(w - padding, padding + len);
  context.lineTo(w - padding, padding);
  context.lineTo(w - padding - len, padding);
  context.moveTo(padding, h - padding - len);
  context.lineTo(padding, h - padding);
  context.lineTo(padding + len, h - padding);
  context.moveTo(w - padding, h - padding - len);
  context.lineTo(w - padding, h - padding);
  context.lineTo(w - padding - len, h - padding);
  context.stroke();
  
  // Central focus target (four-pointed sparkle/starburst with dynamic scroll rotation)
  const cx = w / 2;
  const cy = h / 2;
  const starRadius = 24;
  
  context.save();
  context.translate(cx, cy);
  context.rotate(progress * Math.PI * 0.5);
  
  context.beginPath();
  context.moveTo(0, -starRadius);
  context.quadraticCurveTo(0, 0, starRadius, 0);
  context.quadraticCurveTo(0, 0, 0, starRadius);
  context.quadraticCurveTo(0, 0, -starRadius, 0);
  context.quadraticCurveTo(0, 0, 0, -starRadius);
  context.closePath();
  context.stroke();
  
  context.fillStyle = 'rgba(244, 240, 232, 0.05)';
  context.fill();
  context.restore();
  
  // Shutter and ISO values
  context.fillText('F/4.0', padding + 10, h - padding - 15);
  context.fillText('ISO 200', padding + 70, h - padding - 15);
  context.fillText(`FRAME ${String(frameIndex).padStart(6, '0')}`, w - padding - 95, padding + 18);
  
  // Exposure line
  const sliderWidth = 100;
  const sliderX = w - padding - sliderWidth - 10;
  const sliderY = h - padding - 18;
  
  context.beginPath();
  context.moveTo(sliderX, sliderY);
  context.lineTo(sliderX + sliderWidth, sliderY);
  context.moveTo(sliderX + sliderWidth / 2, sliderY - 3);
  context.lineTo(sliderX + sliderWidth / 2, sliderY + 3);
  context.stroke();
  
  const nodeX = sliderX + (sliderWidth * progress);
  context.beginPath();
  context.arc(nodeX, sliderY, 3, 0, Math.PI * 2);
  context.fill();
  
  const shutterSpeed = Math.round(125 + progress * 875);
  context.fillText(`1/${shutterSpeed}`, w / 2 - 15, padding + 18);
  
  // Shutter aperture dial rotation
  context.beginPath();
  context.arc(w - padding - 25, padding + 20, 10, 0, Math.PI * 2);
  context.stroke();
  
  context.save();
  context.translate(w - padding - 25, padding + 20);
  context.rotate(progress * Math.PI * 2);
  for (let i = 0; i < 6; i++) {
    context.rotate(Math.PI / 3);
    context.beginPath();
    context.moveTo(0, -10);
    context.lineTo(5, -5);
    context.stroke();
  }
  context.restore();
}

// --- Foreground Editorial Slides Animations ---
function updateSlides(progress) {
  // Slide 0: active from 0.0 to 0.25 (peak exposure at 0.05 to 0.18)
  updateSingleSlide('slide-0', 0.0, 0.05, 0.18, 0.23, progress);
  // Slide 1: active from 0.25 to 0.50 (peak exposure at 0.30 to 0.43)
  updateSingleSlide('slide-1', 0.25, 0.30, 0.43, 0.48, progress);
  // Slide 2: active from 0.50 to 0.75 (peak exposure at 0.55 to 0.68)
  updateSingleSlide('slide-2', 0.50, 0.55, 0.68, 0.73, progress);
  // Slide 3: active from 0.75 to 1.00 (peak exposure at 0.80 to 1.00)
  updateSingleSlide('slide-3', 0.75, 0.80, 0.95, 1.00, progress);
}

function updateSingleSlide(id, start, peakStart, peakEnd, end, progress) {
  const el = document.getElementById(id);
  if (!el) return;
  
  let opacity = 0;
  let translateY = 40; // start 40px below (slide up)
  
  if (progress >= start && progress <= end) {
    if (progress < peakStart) {
      // Fading in
      const factor = (progress - start) / (peakStart - start);
      opacity = factor;
      translateY = 40 - (40 * factor); // move up to 0px
    } else if (progress > peakEnd) {
      // Fading out
      const factor = (progress - peakEnd) / (end - peakEnd);
      opacity = 1 - factor;
      translateY = -40 * factor; // continue moving up to -40px
    } else {
      // Fully visible
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
}

// --- Initialize and Run ---
preloadSequence().then(() => {
  updateScrollMetrics();
  renderFrame(0);
  animationLoop();
});
