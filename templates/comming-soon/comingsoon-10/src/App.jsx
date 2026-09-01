import React, { useState } from 'react';
import TopNav from './components/TopNav';
import PromptModal from './components/PromptModal';
import EarlyBirdTicket from './components/EarlyBirdTicket';
import VideoModal from './components/VideoModal';
import SpeakerModal from './components/SpeakerModal';
import MinimalistView from './variations/MinimalistCountdown/MinimalistView';
import VibrantView from './variations/VibrantIllustration/VibrantView';
import ElegantView from './variations/ElegantTypography/ElegantView';
import { eventData } from './data/eventData';

export default function App() {
  const [variation, setVariation] = useState('minimalist'); // 'minimalist' | 'vibrant' | 'elegant'
  const [viewport, setViewport] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [ticketData, setTicketData] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  const currentData = eventData[variation];

  const handleRegisterSuccess = (userCreds) => {
    setTicketData(userCreds);
  };

  return (
    <div className="app-root">
      {/* Top Controller Bar */}
      <TopNav
        activeVariation={variation}
        onSelectVariation={setVariation}
        viewportMode={viewport}
        onSelectViewport={setViewport}
        onOpenPromptModal={() => setShowPromptModal(true)}
      />

      {/* Simulated Device Viewport Container */}
      <main className={`viewport-wrapper viewport-${viewport}`}>
        {variation === 'minimalist' && (
          <MinimalistView
            data={currentData}
            onRegisterSuccess={handleRegisterSuccess}
            onOpenVideoModal={setActiveVideo}
            onOpenSpeakerModal={setActiveSpeaker}
          />
        )}

        {variation === 'vibrant' && (
          <VibrantView
            data={currentData}
            onRegisterSuccess={handleRegisterSuccess}
            onOpenVideoModal={setActiveVideo}
            onOpenSpeakerModal={setActiveSpeaker}
          />
        )}

        {variation === 'elegant' && (
          <ElegantView
            data={currentData}
            onRegisterSuccess={handleRegisterSuccess}
            onOpenVideoModal={setActiveVideo}
            onOpenSpeakerModal={setActiveSpeaker}
          />
        )}
      </main>

      {/* Modals & Dialogs */}
      {showPromptModal && (
        <PromptModal onClose={() => setShowPromptModal(false)} />
      )}

      {ticketData && (
        <EarlyBirdTicket
          ticketData={ticketData}
          eventTitle={currentData.title}
          onClose={() => setTicketData(null)}
        />
      )}

      {activeVideo && (
        <VideoModal
          teaser={activeVideo}
          eventTitle={currentData.title}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {activeSpeaker && (
        <SpeakerModal
          speaker={activeSpeaker}
          eventTitle={currentData.title}
          onClose={() => setActiveSpeaker(null)}
        />
      )}
    </div>
  );
}
