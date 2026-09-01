import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../utils/animations';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "Ready to Build What's Next?",
  subtitle = "Let's turn your ideas into powerful digital products.",
  buttonText = "Start a Conversation",
  buttonLink = "/contact",
  secondaryButtonText = "Explore Solutions",
  secondaryButtonLink = "/solutions"
}) => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-zinc-900 rounded-3xl p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-xl"
        >
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={buttonLink}
                className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-slate-900 px-7 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                {buttonText}
              </Link>
              {secondaryButtonText && (
                <Link
                  to={secondaryButtonLink}
                  className="inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm border border-zinc-700 transition-all duration-200"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
