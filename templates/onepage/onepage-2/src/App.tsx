import React, { useEffect, useRef, useState } from 'react';
import { Globe, ArrowRight, Check, ArrowUp, Loader2 } from 'lucide-react';
import { AboutSection } from './components/AboutSection';
import { FeaturedVideoSection } from './components/FeaturedVideoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Video crossfade engine
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeAnimationId: number;
    
    const fadeTo = (targetOpacity: number, duration = 500) => {
      const startOpacity = parseFloat(video.style.opacity || "0");
      const startTime = performance.now();
      
      const animateFade = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
        video.style.opacity = currentOpacity.toString();
        
        if (progress < 1) {
          fadeAnimationId = requestAnimationFrame(animateFade);
        }
      };
      
      cancelAnimationFrame(fadeAnimationId);
      fadeAnimationId = requestAnimationFrame(animateFade);
    };

    const handleCanPlay = () => {
      video.play().catch(e => console.log("Autoplay prevented:", e));
      fadeTo(1, 500);
    };

    let isFadingOut = false;
    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remainingTime = video.duration - video.currentTime;
      if (remainingTime <= 0.55 && !isFadingOut) {
        isFadingOut = true;
        fadeTo(0, 500);
      } else if (remainingTime > 0.55) {
        isFadingOut = false;
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(e => console.log("Autoplay prevented:", e));
        fadeTo(1, 500);
      }, 100);
    };

    video.style.opacity = "0";
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(fadeAnimationId);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate reliable async subscription
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
      }, 6000);
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-white/30">
      {/* SECTION 1 -- HERO */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        
        {/* Sticky/Floating Navbar */}
        <header className="sticky top-0 z-30 px-6 py-6 w-full pointer-events-none">
          <nav 
            aria-label="Main Navigation"
            className="liquid-glass rounded-full max-w-4xl mx-auto px-6 py-3.5 flex justify-between items-center pointer-events-auto backdrop-blur-md"
          >
            <a href="#" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
              <Globe className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-lg tracking-tight">Asme</span>
            </a>

            <div className="flex items-center gap-6 sm:gap-8">
              <a href="#about" className="text-white/70 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors">
                About
              </a>
              <a href="#philosophy" className="text-white/70 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors">
                Vision
              </a>
              <a href="#services" className="text-white/70 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors">
                Services
              </a>
              <a 
                href="#newsletter" 
                className="hidden sm:inline-flex liquid-glass rounded-full px-4 py-1.5 text-white text-xs font-medium hover:bg-white/10 transition-colors"
              >
                Join
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[6%] md:-translate-y-[10%]">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-serif mb-10">
            Know it then <em className="italic">all</em>.
          </h1>
          
          {/* Interactive Newsletter Form */}
          <div id="newsletter" className="max-w-xl w-full mb-6">
            {status === 'success' ? (
              <div 
                role="status"
                aria-live="polite"
                className="liquid-glass rounded-full px-6 py-3.5 flex items-center justify-center gap-3 text-white border border-white/20 bg-white/5 animate-fade-in"
              >
                <Check className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium tracking-wide">You&apos;re on the list. Welcome to Asme.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 focus-within:ring-2 focus-within:ring-white/40 transition-all">
                  <label htmlFor="hero-email" className="sr-only">Email address</label>
                  <input 
                    id="hero-email"
                    type="email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email" 
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm md:text-base"
                    disabled={status === 'loading'}
                  />
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    aria-label="Subscribe to newsletter"
                    className="bg-white rounded-full p-3 text-black hover:scale-105 active:scale-95 transition-all flex-shrink-0 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {status === 'error' && (
                  <p role="alert" className="text-rose-400 text-xs mt-2 pl-4 text-left">
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>
          
          <p className="text-white/80 text-sm leading-relaxed max-w-md px-4">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
          </p>
        </div>
      </section>

      {/* CORE CONTENT SECTIONS */}
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />

      {/* MINIMAL FOOTER & CLOSURE */}
      <footer className="border-t border-white/10 bg-black px-6 py-16 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-white/80" />
              <span className="text-lg font-semibold tracking-tight">Asme</span>
            </div>
            <p className="text-white/50 text-xs tracking-wide text-center md:text-left">
              Pioneering ideas for minds that create, build, and inspire.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/60">
            <a 
              href="mailto:hello@asme.studio" 
              className="hover:text-white transition-colors"
            >
              hello@asme.studio
            </a>
            <span className="text-white/20">•</span>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Asme Studio. All rights reserved.</p>
          <p className="tracking-wide">Designed with craft &amp; conviction.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
