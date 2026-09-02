import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Building, Utensils, Plane, ShieldCheck, ArrowLeft, ArrowRight, CheckCircle2, Star, Calendar, Clock, Globe } from 'lucide-react';
import { destinationsData } from '../../data/destinations';
import SectionHeading from '../../components/ui/SectionHeading';

interface DestinationDetailProps {
  onOpenConsultation: () => void;
}

export default function DestinationDetail({ onOpenConsultation }: DestinationDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const destination = destinationsData.find((d) => d.slug === slug);

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero Header */}
      <section className="relative min-h-[60vh] flex items-end pb-16 bg-[#0E1412] text-white overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover opacity-45 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1412] via-[#0E1412]/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DFBA58] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Global Destinations
          </Link>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              <MapPin className="w-3.5 h-3.5" />
              {destination.country} • {destination.region}
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              {destination.name}
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#EADBCA] italic">
              "{destination.tagline}"
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {destination.bestFor.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Business Relevance Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <SectionHeading
              badge="Commercial Context"
              title={`The Business Landscape of ${destination.name}`}
              subtitle={destination.businessRelevance}
              align="left"
              className="mb-4"
            />
            <p className="text-sm sm:text-base text-[#3E5049] leading-relaxed">
              {destination.description}
            </p>

            {/* Key Business Districts */}
            <div className="pt-4 space-y-3">
              <h4 className="font-serif text-xl font-semibold text-[#0E1412]">Key Business & Financial Districts</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.businessDistricts.map((dist, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#D8C3A8]/60 text-xs flex items-center gap-2.5">
                    <Building className="w-4 h-4 text-[#0F382E] flex-shrink-0" />
                    <span className="font-medium text-[#25332E]">{dist}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#0A261F] text-white border border-[#165042] space-y-5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA58]">
              Aurelia Desk in {destination.name}
            </div>
            <div className="space-y-3 text-xs text-[#D8C3A8]/90">
              <div className="flex justify-between py-1.5 border-b border-[#165042]">
                <span className="text-[#8FA29A]">Airport Code:</span>
                <span className="font-semibold text-white">{destination.airportCode}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#165042]">
                <span className="text-[#8FA29A]">Timezone:</span>
                <span className="font-semibold text-white">{destination.timezone}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#165042]">
                <span className="text-[#8FA29A]">Flight Connectivity:</span>
                <span className="font-semibold text-white">{destination.flightHubStatus}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#165042]">
                <span className="text-[#8FA29A]">Partner Luxury Hotels:</span>
                <span className="font-semibold text-white">{destination.recommendedHotels.length} Properties</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-3 rounded-xl bg-[#C29B38] text-[#0E1412] text-xs font-bold uppercase tracking-wider hover:bg-[#DFBA58] transition-colors cursor-pointer"
            >
              Plan Travel to {destination.name}
            </button>
          </div>
        </section>

        {/* Recommended Hotels */}
        <section className="space-y-8">
          <SectionHeading
            badge="Accommodations"
            title="Preferred Executive Hotels"
            subtitle={`Curated properties in ${destination.name} with guaranteed early check-in, boardroom suites, and preferred corporate rate tiers.`}
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.recommendedHotels.map((hotel, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white border border-[#D8C3A8]/60 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C29B38]">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#0F382E] uppercase px-2.5 py-0.5 rounded-full bg-[#0F382E]/10">
                    {hotel.category}
                  </span>
                </div>

                <h4 className="font-serif text-xl font-semibold text-[#0E1412]">{hotel.name}</h4>
                <p className="text-xs text-[#62756D] leading-relaxed">{hotel.perk}</p>
                <div className="pt-2 text-[11px] font-bold text-[#0F382E] uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B38]" />
                  <span>Aurelia Preferred Partner Tier</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Curated Corporate Experiences */}
        <section className="space-y-8">
          <SectionHeading
            badge="Bespoke Immersion"
            title={`Signature Corporate Experiences in ${destination.name}`}
            subtitle="Exclusive private access for client entertainment, leadership retreats, and bilateral meetings."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.corporateExperiences.map((exp, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#F8F5EE] border border-[#D8C3A8]/50 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0F382E]">
                  Experience 0{i + 1}
                </div>
                <p className="text-xs sm:text-sm text-[#25332E] leading-relaxed">{exp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Airport & Ground Transit Protocol */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D8C3A8]/70 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F382E]">
            <Plane className="w-4 h-4" />
            <span>VIP Airport & Ground Transit Infrastructure</span>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-[#0E1412]">
            Ground Logistics & Protocol Options
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {destination.transportOptions.map((opt, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#F8F5EE] border border-[#D8C3A8]/40 text-xs font-semibold text-[#25332E] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C29B38]" />
                <span>{opt}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#D8C3A8]/40 space-y-2">
            <h5 className="font-serif text-base font-semibold text-[#0E1412]">Local Business Protocol & Tips</h5>
            <ul className="space-y-1.5 text-xs text-[#62756D]">
              {destination.travelTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#0F382E] font-bold mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
