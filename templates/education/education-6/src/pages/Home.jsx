import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import SidebarForm from '../components/SidebarForm';

/**
 * Home Page Component
 * Arranges Hero section and a two-column body layout containing Features,
 * Testimonials Carousel, and the Sticky Lead Enrollment Form.
 */
export default function Home() {
  const handleFormSubmit = (data) => {
    console.log('Enrollment request submitted on Home Page:', data);
  };

  return (
    <div className="home-page fade-in">
      {/* Full-width Hero */}
      <Hero />

      {/* Main Grid Layout Container */}
      <div className="container section-padding">
        <div className="home-layout">
          {/* Main content column */}
          <div className="main-content-column">
            {/* Features Section */}
            <Features />

            {/* Testimonials Section */}
            <Testimonials limit={3} />
          </div>

          {/* Sticky Sidebar Form Column */}
          <div className="sticky-sidebar">
            <SidebarForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
