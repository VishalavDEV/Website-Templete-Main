import { useState } from 'react';
import { AudioProvider } from './context/AudioContext';
import { ToastProvider } from './context/ToastContext';
import { LoadingExperience } from './components/LoadingExperience';
import { SplashCursor } from './components/ui/SplashCursor';
import { ToastContainer } from './components/ui/Toast';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { AudioPlayer } from './components/audio/AudioPlayer';
import { SoundSection } from './components/audio/SoundSection';
import { ReleaseSection } from './components/releases/ReleaseSection';
import { VisualGallery } from './components/visuals/VisualGallery';
import { TourSection } from './components/tour/TourSection';
import { ArtistTimeline } from './components/story/ArtistTimeline';
import { StudioSection } from './components/studio/StudioSection';
import { SignalSignup } from './components/contact/SignalSignup';
import { ContactForm } from './components/contact/ContactForm';
import { Footer } from './components/navigation/Footer';

export function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <AudioProvider>
      <ToastProvider>
        {/* Cinematic Loading Overlay (< 1.5s) */}
        {isLoading && (
          <LoadingExperience onComplete={() => setIsLoading(false)} />
        )}

        {/* Global Fluid Energy Custom Cursor */}
        <SplashCursor />

        {/* Dynamic Notification Toast Container */}
        <ToastContainer />

        {/* Main Application Container */}
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
          {/* Navigation Bar */}
          <Navbar />

          {/* Section 05: Hero Section */}
          <Hero />

          {/* Section 07 & 08: Sound Section & Track Explorer */}
          <SoundSection />

          {/* Section 09 & 10: Releases & Interactive Album Showcase */}
          <ReleaseSection />

          {/* Section 11 & 12: Visuals Gallery & Dome 3D View */}
          <VisualGallery />

          {/* Section 13 & 14: Tour Frequencies & Ticket Reservation */}
          <TourSection />

          {/* Section 15: Artist Story & Chronology Timeline */}
          <ArtistTimeline />

          {/* Section 16: Studio Workspace & Signal Chain */}
          <StudioSection />

          {/* Section 17: Newsletter Subscription */}
          <SignalSignup />

          {/* Section 18 & 19: Contact Form & Social Links */}
          <ContactForm />

          {/* Section 20: Minimal Editorial Footer */}
          <Footer />

          {/* Section 06: Global Persistent Audio Mini-Player */}
          <AudioPlayer />
        </div>
      </ToastProvider>
    </AudioProvider>
  );
}

export default App;
