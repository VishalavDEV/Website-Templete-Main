import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Send, 
  CheckCircle2, 
  X,
  Briefcase,
  GraduationCap,
  ArrowUp
} from 'lucide-react';
import { editorialData } from './data/editorialData';
import NavBar from './components/NavBar';

// Reusable Scroll to Top floating action
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-black hover:bg-zinc-800 text-white flex items-center justify-center shadow-lg transition-colors border border-white/5 cursor-pointer focus:outline-none"
    >
      <ArrowUp size={16} />
    </button>
  );
}

// Reusable Section Heading
function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="mb-16 text-left font-sans">
      <span className="text-[10px] tracking-[0.25em] text-[#1a1a1a]/55 uppercase font-bold block mb-3">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-serif-normal font-black text-black tracking-tight leading-tight uppercase">
        {title}
      </h2>
      {accent && <p className="mt-4 text-xs md:text-sm text-zinc-500 leading-relaxed max-w-xl">{accent}</p>}
      <div className="w-12 h-[1px] bg-black mt-4" />
    </div>
  );
}

// Reusable count-up counter component
function CounterItem({ endVal, label, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(endVal);
    if (isNaN(end)) return;
    
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endVal]);

  return (
    <div className="flex flex-col text-left font-sans">
      <span className="text-3xl md:text-5xl font-serif-normal font-black text-black tracking-tight">
        {count}{suffix}
      </span>
      <span className="text-[9px] font-bold tracking-wider uppercase text-zinc-400 mt-1">
        {label}
      </span>
    </div>
  );
}

export default function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errors.message = 'Message is required.';
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setFormStatus('idle');
        setShowBookingModal(false);
      }, 2500);
    }, 1500);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfb] text-[#1a1a1a] flex flex-col selection:bg-black selection:text-white">
      
      {/* NAVBAR */}
      <NavBar />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center px-6 md:px-12 py-16 border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="font-serif-italic text-3xl md:text-5xl text-zinc-500 block mb-4">
              {editorialData.hero.scriptTitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif-normal font-black text-black tracking-tight leading-[1.05] uppercase">
              {editorialData.hero.mainSubtitle}
            </h1>
            <p className="mt-8 text-xs md:text-sm text-zinc-500 max-w-xl leading-relaxed text-justify font-sans">
              {editorialData.hero.supportingParagraph}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 font-sans">
              <button
                onClick={() => setShowBookingModal(true)}
                className="px-8 py-3.5 bg-black hover:bg-zinc-800 text-white font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer border-none"
              >
                {editorialData.hero.ctaPrimary}
              </button>
              <button
                onClick={() => handleScrollTo('services')}
                className="px-8 py-3.5 bg-transparent hover:bg-zinc-100 text-black border border-black font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
              >
                {editorialData.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Portrait rounded card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[400px] md:w-[340px] md:h-[450px] overflow-hidden rounded-3xl shadow-2xl border border-zinc-200/50">
              <img 
                src={editorialData.hero.photo} 
                alt="Evelyn support photo" 
                className="w-full h-full object-cover filter grayscale contrast-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES OFFERED SECTION */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-200/40">
        <SectionHeading 
          eyebrow="Tiers" 
          title={editorialData.services.heading} 
          accent={editorialData.services.accent} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {editorialData.services.packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border p-8 md:p-10 flex flex-col justify-between transition-all relative ${
                pkg.featured
                  ? 'bg-black text-white border-black scale-102 shadow-2xl z-10'
                  : 'bg-white text-black border-zinc-200 hover:border-zinc-300'
              }`}
            >
              {pkg.featured && (
                <span className="absolute top-4 right-4 bg-zinc-800 text-white text-[8px] font-sans tracking-widest font-black uppercase px-2.5 py-1">
                  POPULAR
                </span>
              )}

              <div>
                <h3 className="text-xl font-serif-normal font-black uppercase tracking-tight mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl md:text-4xl font-serif-normal font-black">{pkg.price}</span>
                  <span className={`text-[10px] font-sans tracking-wider uppercase ${pkg.featured ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    / {pkg.period}
                  </span>
                </div>

                <div className={`w-8 h-[1px] mb-8 ${pkg.featured ? 'bg-zinc-800' : 'bg-zinc-200'}`} />

                <ul className="flex flex-col gap-4 font-sans text-xs mb-10 text-left">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5">
                      <Check size={14} className={pkg.featured ? 'text-white' : 'text-black'} />
                      <span className={pkg.featured ? 'text-zinc-300' : 'text-zinc-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setShowBookingModal(true)}
                className={`w-full py-3.5 text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer border-none ${
                  pkg.featured
                    ? 'bg-white hover:bg-zinc-100 text-black'
                    : 'bg-black hover:bg-zinc-800 text-white'
                }`}
              >
                {pkg.ctaText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / INTRO SECTION */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-200/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait Photo */}
          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-[300px] h-[380px] md:w-[340px] md:h-[420px] overflow-hidden rounded-2xl border border-zinc-200/50 shadow-xl">
              <img 
                src={editorialData.about.photo} 
                alt="Executive desk" 
                className="w-full h-full object-cover filter grayscale brightness-95"
              />
            </div>
          </div>

          {/* Copy details */}
          <div className="col-span-12 lg:col-span-7 text-left flex flex-col items-start font-sans">
            <span className="text-[10px] tracking-[0.25em] text-[#1a1a1a]/55 uppercase font-bold block mb-3">
              {editorialData.about.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-normal font-black text-black tracking-tight leading-tight uppercase mb-6">
              {editorialData.about.heading}
            </h2>
            <p className="text-xs md:text-sm text-zinc-500 font-sans leading-relaxed text-justify mb-10">
              {editorialData.about.bio}
            </p>

            {/* Stat row counters */}
            <div className="grid grid-cols-3 gap-8 w-full border-t border-zinc-100 pt-8 mb-10">
              {editorialData.about.stats.map((stat, idx) => (
                <CounterItem 
                  key={idx}
                  endVal={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>

            <button
              onClick={() => setShowBookingModal(true)}
              className="px-8 py-3.5 bg-black hover:bg-zinc-800 text-white font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer border-none"
            >
              {editorialData.about.ctaText}
            </button>
          </div>

        </div>
      </section>

      {/* WORK EXPERIENCE & EDUCATION SECTION */}
      <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-200/40">
        <SectionHeading eyebrow="History" title={editorialData.experience.heading} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Work Experience */}
          <div className="col-span-12 lg:col-span-5 text-left flex flex-col gap-8 font-sans">
            <h3 className="text-xl font-serif-normal font-black uppercase tracking-tight border-b border-zinc-200 pb-3 flex items-center gap-2">
              <Briefcase size={16} /> Professional Career
            </h3>
            <div className="flex flex-col gap-8">
              {editorialData.experience.work.map((wk, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="text-sm font-bold text-black uppercase">{wk.role}</h4>
                    <span className="text-[10px] font-sans font-medium text-zinc-400">{wk.dates}</span>
                  </div>
                  <span className="text-[10px] font-sans text-zinc-400 font-bold uppercase mt-0.5 tracking-wider">{wk.company}</span>
                  <p className="text-xs text-zinc-500 font-sans mt-2.5 text-justify leading-relaxed">{wk.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education list */}
          <div className="col-span-12 lg:col-span-5 text-left flex flex-col gap-8 font-sans">
            <h3 className="text-xl font-serif-normal font-black uppercase tracking-tight border-b border-zinc-200 pb-3 flex items-center gap-2">
              <GraduationCap size={18} /> Education & Studies
            </h3>
            <div className="flex flex-col gap-8">
              {editorialData.experience.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="text-sm font-bold text-black uppercase">{edu.degree}</h4>
                    <span className="text-[10px] font-sans font-medium text-zinc-400">{edu.dates}</span>
                  </div>
                  <span className="text-[10px] font-sans text-zinc-400 font-bold uppercase mt-0.5 tracking-wider">{edu.institution}</span>
                  <p className="text-xs text-zinc-500 font-sans mt-2.5 text-justify leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Circular side image */}
          <div className="col-span-12 lg:col-span-2 flex justify-center lg:justify-end">
            <img 
              src={editorialData.experience.circularPhoto} 
              alt="Evelyn profile thumbnail" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover filter grayscale border-2 border-zinc-200 shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading eyebrow="Expertise" title={editorialData.skills.heading} />

        <div className="flex flex-wrap gap-3 font-sans">
          {editorialData.skills.list.map((skill, idx) => (
            <div 
              key={idx} 
              className="border border-zinc-200 hover:border-black bg-white hover:bg-black text-zinc-700 hover:text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all"
            >
              {skill.label}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL BAND & CLOSING CTA */}
      <section id="contact" className="relative py-32 px-6 md:px-12 bg-black text-white text-center overflow-hidden">
        
        {/* Silhouette bg overlay */}
        <div className="absolute inset-0 z-0 bg-black/60" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="font-serif-italic text-2xl md:text-3xl text-zinc-400 mb-6 font-sans">
            " {editorialData.testimonials.quote} "
          </span>
          <span className="text-[9px] font-sans tracking-widest text-[#fbfbfb]/40 uppercase font-black mb-12">
            — {editorialData.testimonials.author}
          </span>

          <div className="w-12 h-[1px] bg-zinc-800 mb-12" />

          <h3 className="text-3xl md:text-5xl font-serif-normal font-black uppercase mb-6 leading-tight max-w-xl">
            Sustaining Administrative Clarity
          </h3>
          <p className="text-xs text-zinc-500 font-sans leading-relaxed max-w-md mb-8">
            Partner with us to create operational workflows, audit databases, and organize corporate logistics.
          </p>

          <button
            onClick={() => setShowBookingModal(true)}
            className="px-8 py-3.5 bg-white hover:bg-zinc-100 text-black font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer border-none"
          >
            Start Operations Sync
          </button>
        </div>

        {/* Footer brand lines */}
        <div className="max-w-7xl mx-auto border-t border-zinc-900 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center text-[8px] tracking-widest text-zinc-600 uppercase font-bold relative z-10 font-sans">
          <span>© {new Date().getFullYear()} EVELYN OSWALD OPERATIONS. ALL RIGHTS RESERVED.</span>
          <span>HIGH-CONTRAST EDITORIAL</span>
        </div>
      </section>

      {/* Floating scroll to top button */}
      <ScrollToTopButton />

      {/* Booking Form Lightbox modal */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="absolute inset-0" onClick={() => setShowBookingModal(false)} />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="relative bg-white border border-zinc-200 w-full max-w-md z-10 p-8 flex flex-col text-black font-sans shadow-2xl"
            >
              <button
                onClick={() => setShowBookingModal(false)}
                className="absolute top-4 right-4 p-2 bg-black hover:bg-zinc-800 text-white transition-colors z-20 cursor-pointer border-none"
              >
                <X size={15} />
              </button>

              <h3 className="text-2xl font-serif-normal font-black uppercase mb-2 text-left">Book Consultation</h3>
              <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider text-left mb-6">Operations Alignment Sync</p>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-left font-sans">
                <div className="flex flex-col">
                  <label className="text-[8px] tracking-widest text-zinc-500 uppercase font-black mb-1">YOUR NAME</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className="w-full bg-[#fbfbfb] border border-zinc-200 focus:border-black px-4 py-2.5 text-xs text-black outline-none transition-colors"
                  />
                  {formErrors.name && <span className="text-[9px] text-rose-500 mt-1 font-bold">{formErrors.name}</span>}
                </div>

                <div className="flex flex-col">
                  <label className="text-[8px] tracking-widest text-zinc-500 uppercase font-black mb-1">BUSINESS EMAIL</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="growth@enterprise.com"
                    className="w-full bg-[#fbfbfb] border border-zinc-200 focus:border-black px-4 py-2.5 text-xs text-black outline-none transition-colors"
                  />
                  {formErrors.email && <span className="text-[9px] text-rose-500 mt-1 font-bold">{formErrors.email}</span>}
                </div>

                <div className="flex flex-col">
                  <label className="text-[8px] tracking-widest text-zinc-500 uppercase font-black mb-1">SYSTEM REQUIREMENTS</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly state your calendar, ops, or inbox goals"
                    rows={3}
                    className="w-full bg-[#fbfbfb] border border-zinc-200 focus:border-black px-4 py-2.5 text-xs text-black outline-none transition-colors resize-none"
                  />
                  {formErrors.message && <span className="text-[9px] text-rose-500 mt-1 font-bold">{formErrors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full py-3.5 bg-black hover:bg-zinc-800 disabled:bg-zinc-200 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all border-none cursor-pointer mt-4"
                >
                  {formStatus === 'loading' ? (
                    <span>Scheduling Slot...</span>
                  ) : formStatus === 'success' ? (
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={13} /> Slot Scheduled!</span>
                  ) : (
                    <span>Schedule Session</span>
                  )}
                </button>
              </form>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
