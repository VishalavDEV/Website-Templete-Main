import React from 'react';
import { motion } from 'framer-motion';
import { creativeConversations } from '../data/directorData';
import { Mic, Calendar, MapPin, ExternalLink } from 'lucide-react';

const CreativeConversations = () => {
  return (
    <section id="conversations" className="py-24 bg-neutral-50/50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono-meta text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-2">
            ACT VII / CONVERSATIONS
          </span>
          <h2 className="font-serif-title text-4xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight">
            Beyond the Screen
          </h2>
          <p className="text-neutral-600 text-base font-light mt-2 max-w-xl">
            Lectures, keynotes, and public dialogues on visual narrative architecture.
          </p>
          <div className="w-16 h-[1.5px] bg-neutral-900 mt-4" />
        </div>

        {/* POSTER-WALL INSPIRED LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {creativeConversations.map((talk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                  <span className="font-mono-meta text-xs tracking-widest text-neutral-950 font-bold bg-neutral-100 px-3 py-1 border border-neutral-200">
                    {talk.year}
                  </span>
                  <Mic className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900 transition-colors" />
                </div>

                <h3 className="font-serif-title text-2xl font-normal text-neutral-950 uppercase mb-3 leading-snug">
                  "{talk.title}"
                </h3>

                <div className="font-mono-meta text-xs text-neutral-700 font-bold uppercase tracking-wider mb-1">
                  {talk.forum}
                </div>
                
                <div className="font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest mb-4">
                  {talk.location}
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {talk.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest">
                <span>TALK POSTER 0{idx + 1}</span>
                <span className="text-neutral-900 font-bold">FICTIONAL</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mandatory Disclaimer Box */}
        <div className="text-center p-4 bg-white border border-neutral-200 max-w-2xl mx-auto font-mono-meta text-[11px] text-neutral-500 uppercase tracking-widest">
          All events and organizations shown are fictional demonstration content.
        </div>

      </div>
    </section>
  );
};

export default CreativeConversations;
