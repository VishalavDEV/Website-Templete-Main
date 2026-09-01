import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { AboutSection } from './components/AboutSection';
import { PopularCoursesSection } from './components/PopularCoursesSection';
import { PortfolioGallerySection } from './components/PortfolioGallerySection';
import { StatsBanner } from './components/StatsBanner';
import { EventsSection } from './components/EventsSection';
import { NewsSection } from './components/NewsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

// Modals
import { AdmissionsModal } from './components/AdmissionsModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CartModal } from './components/CartModal';
import { LoginModal } from './components/LoginModal';
import { FaqModal } from './components/FaqModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { ArticleModal } from './components/ArticleModal';

import { 
  COURSES_DATA, 
  UNIVERSITY_STATS, 
  TEACHERS_DATA,
  UPCOMING_EVENTS, 
  NEWS_STORIES,
  TESTIMONIALS 
} from './data/universityData';
import { Course, CartItem, UniversityEvent, NewsItem, Teacher } from './types';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: COURSES_DATA[0].id,
      title: COURSES_DATA[0].title,
      price: 180,
      image: COURSES_DATA[0].image,
      category: COURSES_DATA[0].category
    }
  ]);

  // Modal states
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<Course | null>(null);

  const [isCourseDetailOpen, setIsCourseDetailOpen] = useState(false);
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  // Global Keyboard Shortcuts (Cmd+K or Ctrl+K for Search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cart Handlers
  const handleAddToCart = (course: Course) => {
    const numPrice = parseInt(course.price.replace(/[^0-9]/g, ''), 10) || 120;
    if (cartItems.some((item) => item.id === course.id)) {
      // Remove if already in cart
      setCartItems((prev) => prev.filter((item) => item.id !== course.id));
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          id: course.id,
          title: course.title,
          price: numPrice,
          image: course.image,
          category: course.category
        }
      ]);
    }
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  // Admissions / Enrollment Handlers
  const handleOpenAdmissions = (course?: Course | null) => {
    setSelectedCourseForEnroll(course || null);
    setIsAdmissionsOpen(true);
  };

  const handleSelectCourseDetail = (course: Course) => {
    setSelectedCourseForDetail(course);
    setIsCourseDetailOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReadArticle = (article: NewsItem) => {
    setSelectedArticle(article);
    setIsArticleModalOpen(true);
  };

  const handleRSVPEvent = (event: UniversityEvent) => {
    // RSVP event feedback
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#ffb606] selection:text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Header (Top Navy Contact Bar with APPLY NOW + White Branding & Navigation) */}
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAdmissions={() => handleOpenAdmissions()}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 2. Hero Banner with "START A COURSE" & 3 Bottom Overlaid Navy Feature Boxes */}
        <HeroSlider
          onOpenAdmissions={() => handleOpenAdmissions()}
          onLearnMore={() => handleNavigateSection('courses')}
          onNavigateSection={handleNavigateSection}
        />

        {/* 3. "Welcome To Our Campus" 2-Column Section */}
        <AboutSection
          onOpenAdmissions={() => handleOpenAdmissions()}
          onExploreCourses={() => handleNavigateSection('courses')}
        />

        {/* 4. Popular Courses Section with Category filters, Pricing Badges & Cart */}
        <PopularCoursesSection
          courses={COURSES_DATA}
          onSelectCourse={handleSelectCourseDetail}
          onAddToCart={handleAddToCart}
          cartCourseIds={cartItems.map((i) => i.id)}
        />

        {/* 5. Campus Life & Gallery with Lightbox */}
        <PortfolioGallerySection />

        {/* 7. Key Impact Statistics & Counters */}
        <StatsBanner stats={UNIVERSITY_STATS} />

        {/* 8. Upcoming Events & Seminars Calendar */}
        <EventsSection
          onRSVPEvent={handleRSVPEvent}
        />

        {/* 9. Latest Research & Campus Blog */}
        <NewsSection
          onReadArticle={handleReadArticle}
        />

        {/* 10. Student Voices & Alumni Testimonials */}
        <TestimonialsSection />
      </main>

      {/* 11. Eikra Footer with Newsletter, Links & Socials */}
      <Footer
        onOpenAdmissions={() => handleOpenAdmissions()}
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Modals */}
      <AdmissionsModal
        isOpen={isAdmissionsOpen}
        onClose={() => setIsAdmissionsOpen(false)}
        preselectedCourse={selectedCourseForEnroll}
      />

      <CourseDetailModal
        course={selectedCourseForDetail}
        isOpen={isCourseDetailOpen}
        onClose={() => setIsCourseDetailOpen(false)}
        onEnroll={(c) => handleOpenAdmissions(c)}
        onAddToCart={(c) => handleAddToCart(c)}
        isInCart={selectedCourseForDetail ? cartItems.some((i) => i.id === selectedCourseForDetail.id) : false}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <FaqModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
        onOpenAdmissions={() => handleOpenAdmissions()}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={handleSelectCourseDetail}
        onSelectEvent={handleRSVPEvent}
        onSelectNews={handleReadArticle}
      />

      <ArticleModal
        article={selectedArticle}
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
      />
    </div>
  );
}
