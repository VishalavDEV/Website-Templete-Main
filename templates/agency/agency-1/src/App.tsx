import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import { initSmoothScroll, scrollToTop } from "@/lib/scroll";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

import { HomePage } from "@/pages/home/HomePage";
import { WorkIndexPage } from "@/pages/WorkIndexPage";
import { CaseStudyPage } from "@/pages/CaseStudyPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { StudioPage } from "@/pages/StudioPage";
import { JournalIndexPage } from "@/pages/JournalIndexPage";
import { ArticlePage } from "@/pages/ArticlePage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const location = useLocation();

  /* Smooth scrolling lives for the whole app session. */
  useEffect(() => {
    initSmoothScroll();
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 600);
    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div className="grain flex min-h-dvh flex-col bg-cream text-ink">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <CustomCursor />
      <Nav />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => {
          scrollToTop(true);
          requestAnimationFrame(() => {
            document.getElementById("main")?.focus({ preventScroll: true });
            ScrollTrigger.refresh();
          });
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkIndexPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/journal" element={<JournalIndexPage />} />
          <Route path="/journal/:slug" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
