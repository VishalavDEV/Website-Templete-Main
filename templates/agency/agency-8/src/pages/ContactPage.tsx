import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ContactHero } from '../components/contact/ContactHero';
import { InquiryFlow } from '../components/contact/InquiryFlow';
import { DirectContact } from '../components/contact/DirectContact';
import { Availability } from '../components/contact/Availability';
import { ContactStatement } from '../components/contact/ContactStatement';
import { CursorType } from '../types';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenProjectModal,
  setCursorType,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleScrollToInquiry = () => {
    const el = document.getElementById('inquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#080808] text-[#FAF9F6]"
    >
      {/* 1. Contact Hero */}
      <ContactHero
        setCursorType={setCursorType}
        onScrollToInquiry={handleScrollToInquiry}
      />

      {/* 2. Interactive Inquiry Flow */}
      <InquiryFlow
        setCursorType={setCursorType}
        onNavigateHome={() => onNavigate('/')}
      />

      {/* 3. Direct Contact Channels */}
      <DirectContact setCursorType={setCursorType} />

      {/* 4. Project Availability */}
      <Availability setCursorType={setCursorType} />

      {/* 5. Final Editorial Statement */}
      <ContactStatement setCursorType={setCursorType} />
    </motion.div>
  );
};
