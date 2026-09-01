import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-10 sm:py-16 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large White Rounded Container Card matching Image 5 */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] p-5 sm:p-10 lg:p-12 shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, subtitle, and input box */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#24285D] tracking-tight leading-tight">
                  Subscribe to our <br />
                  newsletter
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-lg">
                  Get in touch with us to get your dream teacher. Your preference is our first priority.
                </p>
              </div>

              {submitted ? (
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3 text-emerald-800 text-xs sm:text-sm font-semibold max-w-md">
                  <CheckCircle2 className="w-5 h-5 text-[#0F8A5F] shrink-0" />
                  <span>Thank you for subscribing! We'll be in touch soon.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#FAF7F2] p-1.5 sm:p-2 rounded-full border border-slate-200/80 flex items-center shadow-inner max-w-md w-full"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="w-full min-w-0 px-3.5 sm:px-5 py-2 sm:py-3 bg-transparent text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    className="px-4 sm:px-8 py-2.5 sm:py-3 min-h-[40px] sm:min-h-[44px] bg-[#0F8A5F] hover:bg-[#0D7A53] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-full shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center whitespace-nowrap"
                  >
                    Get Started
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Photo of student with yellow shirt holding red books */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[260px] sm:max-w-xs sm:max-w-sm aspect-4/3 sm:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                  alt="Student with binders on university campus"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
