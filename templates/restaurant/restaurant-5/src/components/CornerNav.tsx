import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { NOIRE_IMAGES, NOIRE_CONFIG } from '../data/noireData';
import { noireAudio } from '../utils/noireAudio';

interface CornerNavProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenReservation: () => void;
}

export const CornerNav: React.FC<CornerNavProps> = ({ currentSection, onNavigate, onOpenReservation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(noireAudio.getMutedState());

  const isHome = currentSection === 'hero';

  // Handle ESC Key to Close Menu Overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Handle User Interaction for Audio Autoplay Policy & Section Change
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (isHome && !noireAudio.getMutedState()) {
        noireAudio.start();
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isHome]);

  // Audio active on home page only as specified in requirement
  useEffect(() => {
    if (isHome && !isMuted) {
      noireAudio.start();
    } else {
      noireAudio.stop();
    }
  }, [isHome, isMuted]);

  const handleToggleSound = () => {
    const muted = noireAudio.toggleMute();
    setIsMuted(muted);
  };

  const menuItems = [
    { code: '01', name: 'HOME', targetId: 'hero', image: NOIRE_IMAGES.heroBg },
    { code: '02', name: 'RESTAURANT', targetId: 'room', image: NOIRE_IMAGES.roomInterior },
    { code: '03', name: 'MENU', targetId: 'menu', image: NOIRE_IMAGES.signatureSeabass },
    { code: '04', name: 'NIGHT', targetId: 'night', image: NOIRE_IMAGES.cocktail1 },
    { code: '05', name: 'EVENTS', targetId: 'events', image: NOIRE_IMAGES.fireGrill },
    { code: '06', name: 'GALLERY', targetId: 'gallery', image: NOIRE_IMAGES.nightlife },
    { code: '07', name: 'CONTACT', targetId: 'location', image: NOIRE_IMAGES.chefArjun },
  ];

  const handleLinkClick = (targetId: string) => {
    setIsMenuOpen(false);
    onNavigate(targetId);
  };

  return (
    <>
      {/* Top Left: Logo */}
      <div className="fixed top-6 left-6 z-40">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('hero');
          }}
          className="font-display text-2xl font-bold tracking-tighter text-[#F3EBDD] hover:text-[#B87552] transition-colors duration-300"
        >
          NOIRÉ®
        </a>
      </div>

      {/* Top Right: Sound Button + Menu Button */}
      <div className="fixed top-6 right-6 z-40 flex items-center space-x-3">
        {/* Ambient Sound Button (Shown on Home Page) */}
        {isHome && (
          <button
            onClick={handleToggleSound}
            className="group flex items-center space-x-2 bg-[#171512]/90 backdrop-blur-md px-3.5 py-2 border border-[rgba(243,235,221,0.14)] font-mono text-xs tracking-widest text-[#F3EBDD] hover:border-[#B87552] hover:text-[#B87552] transition-all duration-300 shadow-sm"
            title={isMuted ? 'Unmute Ambient Lounge Score' : 'Mute Ambient Lounge Score'}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-[#B8AA98] group-hover:text-[#B87552]" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-[#B87552] animate-pulse" />
            )}
            <span className="hidden sm:inline">
              {isMuted ? '[ SOUND OFF ]' : '[ SOUND ON ]'}
            </span>
          </button>
        )}

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group flex items-center space-x-2 bg-[#171512]/90 backdrop-blur-md px-4 py-2 border border-[rgba(243,235,221,0.14)] font-mono text-xs tracking-widest text-[#F3EBDD] hover:border-[#B87552] hover:text-[#B87552] transition-all duration-300 shadow-sm"
          aria-label="Toggle Menu Overlay"
        >
          <span className="w-2 h-2 rounded-full bg-[#B87552] animate-pulse"></span>
          <span>{isMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}</span>
        </button>
      </div>

      {/* Bottom Left: Coordinates */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block pointer-events-none">
        <div className="font-mono text-[11px] tracking-widest text-[#B8AA98] flex items-center space-x-3 bg-[#171512]/90 backdrop-blur-sm px-3 py-1.5 border border-[rgba(243,235,221,0.14)] shadow-sm">
          <span className="text-[#F3EBDD] font-bold">CHENNAI</span>
          <span>13.0827° N / 80.2707° E</span>
        </div>
      </div>

      {/* Bottom Right: Status Indicator & Quick Reserve */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center space-x-4">
        <button
          onClick={onOpenReservation}
          className="btn-copper text-xs px-5 py-2.5 shadow-lg"
        >
          RESERVE TABLE →
        </button>
        <div className="font-mono text-[11px] tracking-widest text-[#B87552] flex items-center space-x-2 bg-[#171512]/90 backdrop-blur-sm px-3 py-1.5 border border-[#B87552]/40 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B87552] animate-ping"></span>
          <span>OPEN TONIGHT 19:00 — 01:00</span>
        </div>
      </div>

      {/* Full-Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#171512] text-[#F3EBDD] flex flex-col justify-between p-8 md:p-16 overflow-y-auto animate-fadeIn">
          {/* Header Bar inside Menu */}
          <div className="flex justify-between items-center pb-8 border-b border-[rgba(243,235,221,0.14)]">
            <span className="font-display text-2xl font-bold tracking-tight text-[#F3EBDD]">NOIRÉ®</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-sm tracking-widest text-[#B87552] hover:text-[#F3EBDD] transition-colors"
            >
              [ ESC / CLOSE ]
            </button>
          </div>

          {/* Main Navigation Items with Image Previews */}
          <div className="my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Nav list */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {menuItems.map((item, idx) => (
                <div
                  key={item.code}
                  onMouseEnter={() => setActiveHoverIndex(idx)}
                  onMouseLeave={() => setActiveHoverIndex(null)}
                  onClick={() => handleLinkClick(item.targetId)}
                  className="group flex items-baseline space-x-6 cursor-pointer py-2 border-b border-[rgba(243,235,221,0.1)] hover:border-[#B87552] transition-colors"
                >
                  <span className="font-mono text-sm text-[#B8AA98] group-hover:text-[#B87552] transition-colors">
                    {item.code}
                  </span>
                  <span className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#F3EBDD] group-hover:text-[#B87552] group-hover:translate-x-3 transition-all duration-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Hover Image Preview */}
            <div className="hidden lg:block lg:col-span-5 relative h-96 w-full overflow-hidden border border-[rgba(243,235,221,0.14)] rounded-sm bg-[#211D18]">
              {menuItems.map((item, idx) => (
                <img
                  key={item.code}
                  src={item.image}
                  alt={item.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 filter brightness-95 ${
                    activeHoverIndex === idx ? 'opacity-90 scale-105' : 'opacity-0 scale-100'
                  }`}
                  style={{ transition: 'opacity 0.4s ease, transform 0.6s ease' }}
                />
              ))}
              {activeHoverIndex === null && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#211D18]">
                  <p className="font-mono text-xs tracking-widest text-[#B8AA98] uppercase">
                    HOVER OVER MENU ITEMS TO PREVIEW EXPERIENCE
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer Bar inside Menu */}
          <div className="pt-8 border-t border-[rgba(243,235,221,0.14)] flex flex-col md:flex-row justify-between text-xs font-mono text-[#B8AA98] space-y-4 md:space-y-0">
            <div>{NOIRE_CONFIG.city} — {NOIRE_CONFIG.tagline}</div>
            <div>RESERVATIONS: {NOIRE_CONFIG.phone}</div>
            <div className="text-[#B87552]">
              <a href={NOIRE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                INSTAGRAM: @NOIRE.SUPPERCLUB
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
