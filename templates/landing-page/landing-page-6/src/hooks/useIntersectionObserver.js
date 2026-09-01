import { useEffect } from 'react';

export function useIntersectionObserver(
  selector = '.reveal-on-scroll',
  options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, options);

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, options]);
}
