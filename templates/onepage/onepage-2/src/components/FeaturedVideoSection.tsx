import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function FeaturedVideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden flex justify-center">
      <div className="w-full max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-video"
        >
          <video
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-6 md:p-10">
            <div className="liquid-glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-md backdrop-blur-md">
              <p className="text-white/50 text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3 font-medium">
                Our Approach
              </p>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
