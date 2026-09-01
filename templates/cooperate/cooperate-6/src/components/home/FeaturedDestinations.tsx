import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Sparkles, MapPin } from 'lucide-react';
import { destinationsData } from '../../data/destinations';
import SectionHeading from '../ui/SectionHeading';

export default function FeaturedDestinations() {
  const featuredList = destinationsData.slice(0, 6); // Tokyo, Singapore, Dubai, London, New York, Paris

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            badge="Strategic Metropolises"
            title="Editorial Destination Showcase"
            subtitle="The world's key centers of trade, governance, and capital — curated with executive housing, discrete boardrooms, and local protocol expertise."
            align="left"
            className="mb-0"
          />

          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#0F382E] hover:text-[#165042] flex-shrink-0 group"
          >
            <span>View All Global Hubs</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid with Different Image Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Item 1: Tokyo (Large Feature, 7 cols) */}
          <div className="md:col-span-7 group">
            <Link
              to={`/destinations/${featuredList[0].slug}`}
              className="block relative rounded-3xl overflow-hidden shadow-xl aspect-[16/10] bg-[#0E1412]"
            >
              <img
                src={featuredList[0].heroImage}
                alt={featuredList[0].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1412] via-[#0E1412]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#DFBA58]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{featuredList[0].country}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
                  {featuredList[0].name}
                </h3>
                <p className="text-xs sm:text-sm text-[#D8C3A8]/90 italic font-serif max-w-xl">
                  "{featuredList[0].tagline}"
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredList[0].bestFor.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-medium text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFBA58] group-hover:underline">
                  <span>Explore {featuredList[0].name} Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>

          {/* Item 2: Singapore (Tall Portrait Feature, 5 cols) */}
          <div className="md:col-span-5 group">
            <Link
              to={`/destinations/${featuredList[1].slug}`}
              className="block relative rounded-3xl overflow-hidden shadow-xl aspect-[4/4.5] md:aspect-[4/5.1] bg-[#0E1412]"
            >
              <img
                src={featuredList[1].heroImage}
                alt={featuredList[1].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1412] via-[#0E1412]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#DFBA58]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{featuredList[1].country}</span>
                </div>
                <h3 className="font-serif text-3xl font-medium tracking-tight">
                  {featuredList[1].name}
                </h3>
                <p className="text-xs text-[#D8C3A8]/90 italic font-serif">
                  "{featuredList[1].tagline}"
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredList[1].bestFor.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-medium text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFBA58] group-hover:underline">
                  <span>Explore {featuredList[1].name}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>

          {/* Item 3: Dubai (4 cols) */}
          <div className="md:col-span-4 group">
            <Link
              to={`/destinations/${featuredList[2].slug}`}
              className="block relative rounded-3xl overflow-hidden shadow-xl aspect-[4/4] bg-[#0E1412]"
            >
              <img
                src={featuredList[2].heroImage}
                alt={featuredList[2].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1412] via-[#0E1412]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#DFBA58]">{featuredList[2].country}</div>
                <h3 className="font-serif text-2xl font-medium">{featuredList[2].name}</h3>
                <div className="text-xs text-[#D8C3A8]/80 line-clamp-2">{featuredList[2].description}</div>
                <div className="pt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFBA58]">
                  <span>Explore {featuredList[2].name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </div>

          {/* Item 4: London (4 cols) */}
          <div className="md:col-span-4 group">
            <Link
              to={`/destinations/${featuredList[3].slug}`}
              className="block relative rounded-3xl overflow-hidden shadow-xl aspect-[4/4] bg-[#0E1412]"
            >
              <img
                src={featuredList[3].heroImage}
                alt={featuredList[3].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1412] via-[#0E1412]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#DFBA58]">{featuredList[3].country}</div>
                <h3 className="font-serif text-2xl font-medium">{featuredList[3].name}</h3>
                <div className="text-xs text-[#D8C3A8]/80 line-clamp-2">{featuredList[3].description}</div>
                <div className="pt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFBA58]">
                  <span>Explore {featuredList[3].name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </div>

          {/* Item 5 & 6: New York & Paris (4 cols) */}
          <div className="md:col-span-4 group">
            <Link
              to={`/destinations/${featuredList[4].slug}`}
              className="block relative rounded-3xl overflow-hidden shadow-xl aspect-[4/4] bg-[#0E1412]"
            >
              <img
                src={featuredList[4].heroImage}
                alt={featuredList[4].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1412] via-[#0E1412]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#DFBA58]">{featuredList[4].country}</div>
                <h3 className="font-serif text-2xl font-medium">{featuredList[4].name}</h3>
                <div className="text-xs text-[#D8C3A8]/80 line-clamp-2">{featuredList[4].description}</div>
                <div className="pt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFBA58]">
                  <span>Explore {featuredList[4].name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
