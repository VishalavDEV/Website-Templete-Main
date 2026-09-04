import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { SERVICES_DATA } from './data/services';
import { CASE_STUDIES_DATA } from './data/projects';
import { INDUSTRIES_DATA } from './data/industries';
import { BLOG_POSTS_DATA } from './data/blog';

// Layout Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Page & Feature Components
import { Hero } from './components/Hero';
import { ClientTrustSection } from './components/ClientTrustSection';
import { ServicesOverview } from './components/ServicesOverview';
import { ServiceDetailView } from './components/ServiceDetailView';
import { IndustriesSection } from './components/IndustriesSection';
import { IndustryDetailView } from './components/IndustryDetailView';
import { PortfolioSection } from './components/PortfolioSection';
import { CaseStudyDetailView } from './components/CaseStudyDetailView';
import { ProcessWorkflow } from './components/ProcessWorkflow';
import { TechnologyMatrix } from './components/TechnologyMatrix';
import { AboutView } from './components/AboutView';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsightsView } from './components/InsightsView';
import { ArticleDetailView } from './components/ArticleDetailView';
import { CareersView } from './components/CareersView';
import { FAQView } from './components/FAQView';
import { ContactSection } from './components/ContactSection';
import { MultiStepInquiryModal } from './components/MultiStepInquiryModal';
import { ClientPortalPreview } from './components/ClientPortalPreview';
import { AdminDashboardPreview } from './components/AdminDashboardPreview';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [currentSlug, setCurrentSlug] = useState<string | undefined>(undefined);
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);

  const navigateTo = (route: PageRoute, slug?: string) => {
    setCurrentRoute(route);
    setCurrentSlug(slug);
    if (slug) {
      window.location.hash = `#/${route}/${slug}`;
    } else if (route !== 'home') {
      window.location.hash = `#/${route}`;
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync state with URL hash on load and hash change
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace(/^#\/?/, '');
      if (!rawHash) return;
      const [route, slug] = rawHash.split('/');
      if (route) {
        setCurrentRoute(route as PageRoute);
        if (slug) setCurrentSlug(slug);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Resolve current item by slug if on detail views
  const currentService = currentSlug
    ? SERVICES_DATA.find((s) => s.slug === currentSlug) || SERVICES_DATA[0]
    : SERVICES_DATA[0];

  const currentCaseStudy = currentSlug
    ? CASE_STUDIES_DATA.find((p) => p.slug === currentSlug) || CASE_STUDIES_DATA[0]
    : CASE_STUDIES_DATA[0];

  const currentIndustry = currentSlug
    ? INDUSTRIES_DATA.find((i) => i.slug === currentSlug) || INDUSTRIES_DATA[0]
    : INDUSTRIES_DATA[0];

  const currentArticle = currentSlug
    ? BLOG_POSTS_DATA.find((b) => b.slug === currentSlug) || BLOG_POSTS_DATA[0]
    : BLOG_POSTS_DATA[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar
        currentRoute={currentRoute}
        currentSlug={currentSlug}
        onNavigate={navigateTo}
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {/* 1. HOME ROUTE */}
        {currentRoute === 'home' && (
          <div>
            <Hero
              onNavigate={navigateTo}
              onOpenInquiry={() => setInquiryModalOpen(true)}
            />
            <ClientTrustSection />
            <ServicesOverview
              onViewService={(slug) => navigateTo('service-detail', slug)}
              onOpenInquiry={() => setInquiryModalOpen(true)}
            />
            <IndustriesSection
              onViewIndustry={(slug) => navigateTo('solution-detail', slug)}
              onOpenInquiry={() => setInquiryModalOpen(true)}
            />
            <PortfolioSection
              onViewCaseStudy={(slug) => navigateTo('case-study-detail', slug)}
              onOpenInquiry={() => setInquiryModalOpen(true)}
              featuredOnly={true}
            />
            <ProcessWorkflow
              onOpenInquiry={() => setInquiryModalOpen(true)}
            />
            <TechnologyMatrix />
            <TestimonialsSection />
          </div>
        )}

        {/* 2. SERVICES OVERVIEW */}
        {currentRoute === 'services' && (
          <div className="pt-24 sm:pt-28">
            <ServicesOverview
              onViewService={(slug) => navigateTo('service-detail', slug)}
              onOpenInquiry={() => setInquiryModalOpen(true)}
            />
            <ProcessWorkflow onOpenInquiry={() => setInquiryModalOpen(true)} />
            <TestimonialsSection />
          </div>
        )}

        {/* 3. SERVICE DETAIL PAGE */}
        {currentRoute === 'service-detail' && (
          <ServiceDetailView
            service={currentService}
            onBack={() => navigateTo('services')}
            onViewCaseStudy={(slug) => navigateTo('case-study-detail', slug)}
            onOpenInquiry={() => setInquiryModalOpen(true)}
          />
        )}

        {/* 4. SOLUTIONS / INDUSTRIES */}
        {currentRoute === 'solutions' && (
          <div className="pt-24 sm:pt-28">
            <IndustriesSection
              onViewIndustry={(slug) => navigateTo('solution-detail', slug)}
              onOpenInquiry={() => setInquiryModalOpen(true)}
            />
            <TechnologyMatrix />
          </div>
        )}

        {/* 5. INDUSTRY DETAIL PAGE */}
        {currentRoute === 'solution-detail' && (
          <IndustryDetailView
            industry={currentIndustry}
            onBack={() => navigateTo('solutions')}
            onOpenInquiry={() => setInquiryModalOpen(true)}
          />
        )}

        {/* 6. PORTFOLIO / WORK */}
        {currentRoute === 'work' && (
          <div className="pt-24 sm:pt-28">
            <PortfolioSection
              onViewCaseStudy={(slug) => navigateTo('case-study-detail', slug)}
              onOpenInquiry={() => setInquiryModalOpen(true)}
              featuredOnly={false}
            />
            <TestimonialsSection />
          </div>
        )}

        {/* 7. CASE STUDY DETAIL PAGE */}
        {currentRoute === 'case-study-detail' && (
          <CaseStudyDetailView
            caseStudy={currentCaseStudy}
            onBack={() => navigateTo('work')}
            onViewCaseStudy={(slug) => navigateTo('case-study-detail', slug)}
            onOpenInquiry={() => setInquiryModalOpen(true)}
          />
        )}

        {/* 8. PROCESS PAGE */}
        {currentRoute === 'process' && (
          <div className="pt-24 sm:pt-28">
            <ProcessWorkflow onOpenInquiry={() => setInquiryModalOpen(true)} />
            <TechnologyMatrix />
          </div>
        )}

        {/* 9. ABOUT PAGE */}
        {currentRoute === 'about' && (
          <AboutView onOpenInquiry={() => setInquiryModalOpen(true)} />
        )}

        {/* 10. INSIGHTS / BLOG */}
        {currentRoute === 'insights' && (
          <InsightsView
            onViewArticle={(slug) => navigateTo('article-detail', slug)}
          />
        )}

        {/* 11. ARTICLE DETAIL */}
        {currentRoute === 'article-detail' && (
          <ArticleDetailView
            post={currentArticle}
            onBack={() => navigateTo('insights')}
            onViewArticle={(slug) => navigateTo('article-detail', slug)}
            onOpenInquiry={() => setInquiryModalOpen(true)}
          />
        )}

        {/* 12. CAREERS PAGE */}
        {currentRoute === 'careers' && <CareersView />}

        {/* 13. FAQ PAGE */}
        {currentRoute === 'faq' && (
          <FAQView onOpenInquiry={() => setInquiryModalOpen(true)} />
        )}

        {/* 14. CONTACT PAGE */}
        {currentRoute === 'contact' && <ContactSection />}

        {/* 15. CLIENT PORTAL ARCHITECTURE PREVIEW */}
        {currentRoute === 'client-portal' && <ClientPortalPreview />}

        {/* 16. ADMIN CMS PREVIEW */}
        {currentRoute === 'admin-portal' && <AdminDashboardPreview />}
      </main>

      {/* Global Multi-Column Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      {/* Multi-Step Inquiry Modal */}
      <MultiStepInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </div>
  );
}
