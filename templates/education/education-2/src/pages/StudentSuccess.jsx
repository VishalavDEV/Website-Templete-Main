import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Building, CheckCircle2, ArrowRight, Star, Quote } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { successStoriesData, placementStats } from '../data/successStories';
import { testimonialsData } from '../data/testimonials';

export default function StudentSuccess() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen space-y-20">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Verified Career Outcomes"
          title="Transformative Student"
          highlight="Success Stories"
          subtitle="Real career transitions, salary growths, and landing engineering roles at global tech giants."
          center
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {placementStats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
              <span className="text-3xl sm:text-4xl font-black text-primary-600 block mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-slate-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After Career Journeys */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Featured Career Transitions"
            title="From Non-Tech Backgrounds to"
            highlight="Senior Engineering Roles"
            subtitle="Explore how our structured tracks turned career changers into high-earning leaders."
          />

          <div className="space-y-8 mt-12">
            {successStoriesData.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-4 text-center lg:text-left">
                  <img
                    src={story.image}
                    alt={story.studentName}
                    className="w-24 h-24 rounded-2xl object-cover mx-auto lg:mx-0 border-2 border-primary-500 shadow mb-4"
                  />
                  <h3 className="text-2xl font-extrabold text-slate-900">{story.studentName}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200 inline-block mt-2">
                    {story.salaryBump}
                  </span>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  {/* Transition path pill */}
                  <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs font-bold">
                    <span className="text-slate-500 line-through">{story.previousRole}</span>
                    <ArrowRight className="w-4 h-4 text-primary-600" />
                    <span className="text-primary-600 font-extrabold text-sm">{story.newRole}</span>
                    <span className="ml-auto text-slate-400 font-normal">at {story.company}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    "{story.story}"
                  </p>

                  <div className="p-3.5 rounded-xl bg-primary-50 border border-primary-100 text-xs text-primary-900 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span><strong className="font-bold">Key Strategy:</strong> {story.keyTakeaway}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Verified Reviews"
          title="What Our Alumni Say About"
          highlight="Their Learning Journey"
          subtitle="Read honest feedback from graduates working across Google, Stripe, Figma, and CrowdStrike."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonialsData.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

    </div>
  );
}
