import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let rafFn: ((time: number) => void) | null = null;

/** Initialise Lenis smooth scrolling and bridge it to GSAP's ticker.
 *  Returns null when the user prefers reduced motion (native scroll stays). */
export function initSmoothScroll(): Lenis | null {
  if (lenis) return lenis;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    ScrollTrigger.refresh();
    return null;
  }
  lenis = new Lenis({ autoRaf: false, lerp: 0.11 });
  lenis.on("scroll", ScrollTrigger.update);
  rafFn = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(rafFn);
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

export function scrollToTop(immediate = true) {
  if (lenis) {
    lenis.scrollTo(0, { immediate });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
  }
}

/** Stop / start page scroll while an overlay is open. */
export function lockScroll(lock: boolean) {
  if (!lenis) {
    document.documentElement.style.overflow = lock ? "hidden" : "";
    return;
  }
  if (lock) lenis.stop();
  else lenis.start();
}
