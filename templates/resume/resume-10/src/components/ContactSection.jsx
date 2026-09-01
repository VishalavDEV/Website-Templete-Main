import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { directorProfile } from '../data/directorData';
import { Send, Mail, MapPin, Globe, CheckCircle, Clapperboard } from 'lucide-react';
import confetti from 'canvas-confetti';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'Narrative Feature',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Director or Contact name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please include a project message';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Contact Heading & Direct Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono-meta text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">
                DIRECTORIAL INQUIRIES
              </span>

              <h2 className="font-serif-title text-4xl sm:text-6xl font-normal text-neutral-950 uppercase tracking-tight leading-none mb-6">
                WHAT SHOULD<br />WE MAKE<br />NEXT?
              </h2>

              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light mb-10">
                "Open to original storytelling collaborations, creative direction, visual narrative projects, and conversations about new ideas."
              </p>

              {/* Direct Info List */}
              <div className="space-y-6 font-mono-meta text-xs">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-neutral-100 border border-neutral-200 shrink-0">
                    <Mail className="w-4 h-4 text-neutral-900" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-0.5">
                      EMAIL
                    </span>
                    <a href={`mailto:${directorProfile.email}`} className="text-neutral-950 font-bold hover:underline">
                      {directorProfile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-neutral-100 border border-neutral-200 shrink-0">
                    <MapPin className="w-4 h-4 text-neutral-900" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-0.5">
                      LOCATION
                    </span>
                    <span className="text-neutral-950 font-bold">
                      {directorProfile.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-neutral-100 border border-neutral-200 shrink-0">
                    <Globe className="w-4 h-4 text-neutral-900" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-0.5">
                      PROFESSIONAL NETWORK
                    </span>
                    <a href={directorProfile.linkedin} target="_blank" rel="noreferrer" className="text-neutral-950 font-bold hover:underline">
                      Elias Rowan (LinkedIn Placeholder)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-neutral-200 font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest">
              DIRECTOR ARCHIVE • INQUIRY SLATE 2026
            </div>
          </div>

          {/* RIGHT: Minimalist Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-neutral-50/80 border border-neutral-200 shadow-xs relative">
              
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-8">
                <span className="font-mono-meta text-xs tracking-widest text-neutral-900 font-bold uppercase">
                  DIRECTOR CONTACT SLATE
                </span>
                <Clapperboard className="w-4 h-4 text-neutral-400" />
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-12 h-12 bg-neutral-950 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="font-serif-title text-3xl font-normal text-neutral-950 uppercase mb-2">
                    CONVERSATION INITIATED
                  </h3>
                  <p className="text-sm text-neutral-600 font-light max-w-md mx-auto mb-6">
                    Thank you for reaching out, {formData.name}. Your fictional project inquiry has been recorded in Elias Rowan's archive.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', projectType: 'Narrative Feature', message: '' });
                    }}
                    className="px-6 py-3 bg-neutral-950 text-white font-mono-meta text-xs uppercase tracking-widest hover:bg-neutral-800"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono-meta text-[11px] tracking-widest text-neutral-700 uppercase mb-2">
                        NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name or Studio"
                        className={`w-full p-3.5 bg-white border text-sm font-sans focus:outline-none focus:border-neutral-950 transition-colors ${
                          errors.name ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 font-mono-meta text-[10px] mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block font-mono-meta text-[11px] tracking-widest text-neutral-700 uppercase mb-2">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@example.com"
                        className={`w-full p-3.5 bg-white border text-sm font-sans focus:outline-none focus:border-neutral-950 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 font-mono-meta text-[10px] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono-meta text-[11px] tracking-widest text-neutral-700 uppercase mb-2">
                        PRODUCTION / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Studio / Independent"
                        className="w-full p-3.5 bg-white border border-neutral-300 text-sm font-sans focus:outline-none focus:border-neutral-950 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-meta text-[11px] tracking-widest text-neutral-700 uppercase mb-2">
                        PROJECT TYPE
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full p-3.5 bg-white border border-neutral-300 text-sm font-sans focus:outline-none focus:border-neutral-950 transition-colors"
                      >
                        <option value="Narrative Feature">Narrative Feature</option>
                        <option value="Short Film">Short Film</option>
                        <option value="Creative Direction">Creative Direction</option>
                        <option value="Visual Direction">Visual Direction</option>
                        <option value="Speaking / Lecture">Speaking / Lecture</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono-meta text-[11px] tracking-widest text-neutral-700 uppercase mb-2">
                      MESSAGE / PROJECT CONTEXT *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell Elias about your narrative vision or collaboration idea..."
                      className={`w-full p-3.5 bg-white border text-sm font-sans focus:outline-none focus:border-neutral-950 transition-colors ${
                        errors.message ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.message && <p className="text-red-500 font-mono-meta text-[10px] mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-neutral-950 text-white font-mono-meta text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center gap-3 shadow-sm"
                  >
                    <span>BEGIN A CONVERSATION</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
