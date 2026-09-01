import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl text-white p-10 sm:p-16 lg:p-20 shadow-2xl overflow-hidden bg-[#1A1918]"
        >
          {/* Background Photography Image */}
          <img
            src="images/pexels-rdne-7947660.jpg"
            alt="AURELIA Studio Consultation"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1918] via-[#1A1918]/85 to-[#D96B43]/40" />

          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D96B43]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs uppercase tracking-widest font-bold text-[#D96B43]">
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-tight">
              Have something worth building?
            </h2>

            <p className="text-base sm:text-xl text-gray-200 leading-relaxed max-w-2xl font-light">
              Let’s transform your next idea into an experience people remember. We are currently accepting new client engagements for the upcoming quarter.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => navigate('/contact')}
                className="bg-[#D96B43] text-white hover:bg-[#C25832] shadow-xl"
              >
                Start a Conversation
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                onClick={() => navigate('/work')}
                className="text-white hover:bg-white/10 hover:text-white border border-white/20"
              >
                Explore Portfolio Case Studies
              </Button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
