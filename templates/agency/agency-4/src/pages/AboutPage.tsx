import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AboutSection } from '../components/sections/AboutSection';
import { CtaSection } from '../components/sections/CtaSection';
import { Compass, Heart, ShieldCheck, Users } from 'lucide-react';

const TEAM = [
  {
    name: 'Julian Sterling',
    role: 'Founder & Executive Creative Director',
    avatar: 'images/pexels-julia-m-cameron-4144294.jpg',
    bio: 'Former Art Director at leading Scandinavian design houses with 14 years shaping iconic global brand systems.'
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'Partner & Head of Brand Strategy',
    avatar: 'images/pexels-olia-danilevich-4974914.jpg',
    bio: 'Ph.D. in Consumer Psychology, guiding qualitative positioning frameworks for venture-backed unicorns.'
  },
  {
    name: 'Marcus Lindqvist',
    role: 'Chief Technology Officer',
    avatar: 'images/pexels-mikael-blomkvist-6476257.jpg',
    bio: 'Pioneer in 60fps WebGL canvas rendering, high-performance React architectures, and headless e-commerce.'
  },
  {
    name: 'Astrid Vane',
    role: 'Design Director — Digital Products',
    avatar: 'images/pexels-cottonbro-4709285.jpg',
    bio: 'Specializing in complex component design systems, tactile haptic interfaces, and micro-animations.'
  }
];

const VALUES = [
  {
    icon: Compass,
    title: 'Aesthetic Authority',
    description: 'We believe design is not decorative paint; it is strategic architecture that establishes commercial authority.'
  },
  {
    icon: ShieldCheck,
    title: 'Speed & Engineering Rigor',
    description: 'Zero visual compromise paired with 100/100 Lighthouse performance metrics across all web platforms.'
  },
  {
    icon: Users,
    title: 'Radical Transparency',
    description: 'No account manager layers. Our clients talk directly to the partners and senior craftspeople building their project.'
  },
  {
    icon: Heart,
    title: 'Craftsmanship & Empathy',
    description: 'We care deeply about the human emotional response when interacting with every brand touchpoint.'
  }
];

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Our Story & Culture"
          title="Crafting digital legacies since 2018."
          subtitle="AURELIA was established in Copenhagen with a singular mandate: to bridge high-fashion editorial art direction with cutting-edge web performance."
        />

        {/* Embedded About Core Section */}
        <AboutSection />

        {/* Studio Values Grid */}
        <div className="my-24">
          <SectionHeader
            badge="Operating Principles"
            title="The beliefs that guide our studio craft."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-[#EAE6DF] shadow-sm space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F9EFEA] text-[#D96B43] flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#1A1918]">{val.title}</h3>
                  <p className="text-xs text-[#6B6863] leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team Grid */}
        <div className="mb-24">
          <SectionHeader
            badge="Leadership & Craft"
            title="Meet our multidisciplinary studio leaders."
            subtitle="Senior practitioners who bring intense focus, strategic clarity, and hands-on craftsmanship to every partnership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-sm flex flex-col justify-between"
              >
                <div className="aspect-[4/5] bg-[#EAE6DF] overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-lg font-bold font-display text-[#1A1918]">{member.name}</h4>
                  <p className="text-xs font-semibold text-[#D96B43]">{member.role}</p>
                  <p className="text-xs text-[#6B6863] leading-relaxed pt-2 border-t border-[#EAE6DF]">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <CtaSection />
    </div>
  );
};
