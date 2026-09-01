import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useTemplateEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Scroll to top or to hash element on route change
    if (hash) {
      setTimeout(() => {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }

    // 2. Page load hero entrance
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      setTimeout(() => {
        heroSection.classList.add('hero-loaded');
      }, 60);
    }

    // 3. Scroll Reveal Observer
    const selector = '.reveal-up, .reveal-left, .reveal-right, .scale-reveal, .image-reveal, .text-reveal, .stagger-container, .reveal-fade-up, .reveal-fade-in, .reveal-fade-right, .reveal-fade-left, .about-editorial-wrap';
    const revealElements = document.querySelectorAll(selector);

    function revealElement(el: Element) {
      if (!el) return;
      el.classList.add('revealed');
      const nestedables = el.querySelectorAll('.image-reveal, .scale-reveal, .text-reveal, .stagger-item, .reveal-up, .reveal-left, .reveal-right, .reveal-fade-up, .reveal-fade-in, .reveal-fade-right, .reveal-fade-left, img');
      nestedables.forEach((child) => child.classList.add('revealed'));
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: '100px 0px 100px 0px' }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150 && rect.bottom > -150) {
        revealElement(el);
      } else {
        observer.observe(el);
      }
    });

    const revealFallbackTimer = setTimeout(() => {
      document.querySelectorAll('.image-reveal, .about-editorial-wrap, .about-main-img-box, .about-secondary-img-box, .hero-media-wrapper').forEach(revealElement);
    }, 100);

    // 4. Statistics Counter Animation
    const counterElements = document.querySelectorAll('.stat-number[data-target]');
    const counterObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target') || '0', 10);
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 1800;
            const startTime = performance.now();

            function updateCount(currentTime: number) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 4);
              const currentVal = Math.floor(easeProgress * target);

              counter.textContent = currentVal + suffix;

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                counter.textContent = target + suffix;
              }
            }

            requestAnimationFrame(updateCount);
            obs.unobserve(counter);
          }
        });
      },
      { threshold: 0.2 }
    );

    counterElements.forEach((counter) => counterObserver.observe(counter));

    // Cleanup observers
    return () => {
      clearTimeout(revealFallbackTimer);
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, [pathname, hash]);

  // Global Header Scroll & Parallax Effect Listener
  useEffect(() => {
    const header = document.querySelector('.site-header');
    const progressBar = document.querySelector('.scroll-progress-bar') as HTMLElement;
    const backToTopBtn = document.querySelector('.back-to-top');

    const heroMediaImg = document.querySelector('.hero-media-img') as HTMLElement || document.querySelector('.hero-bg-img') as HTMLElement;
    const aboutPrimaryImg = document.querySelector('.about-img-primary') as HTMLElement;
    const aboutSecondaryImg = document.querySelector('.about-img-secondary') as HTMLElement;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Header scrolled class
      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // Scroll Progress Bar
      if (progressBar) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
      }

      // Back to top button
      if (backToTopBtn) {
        if (scrollY > 450) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      }

      // Parallax
      if (!prefersReducedMotion) {
        if (heroMediaImg && scrollY < window.innerHeight) {
          const parallaxY = Math.min(35, scrollY * 0.12);
          heroMediaImg.style.transform = `translate3d(0, ${-parallaxY}px, 0)`;
        }

        if (aboutPrimaryImg && aboutPrimaryImg.getBoundingClientRect().top < window.innerHeight) {
          const offset = (window.innerHeight - aboutPrimaryImg.getBoundingClientRect().top) * 0.04;
          aboutPrimaryImg.style.transform = `translate3d(0, ${-offset}px, 0)`;
        }

        if (aboutSecondaryImg && aboutSecondaryImg.getBoundingClientRect().top < window.innerHeight) {
          const offset = (window.innerHeight - aboutSecondaryImg.getBoundingClientRect().top) * 0.09;
          aboutSecondaryImg.style.transform = `translate3d(0, ${-offset}px, 0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
