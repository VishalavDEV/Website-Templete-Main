import React from "react";
import { teamMembers } from "../../data/team";
import { SectionHeader } from "../common/SectionHeader";
import { ArrowUpRight } from "lucide-react";

export const LeadershipSection: React.FC = () => {
  const executives = teamMembers.slice(0, 4);

  return (
    <section className="py-20 md:py-32 border-b border-[#E6E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="10"
          tag="Executive Team"
          title="Architectural leadership."
          description="Experienced systems architects, AI researchers, and enterprise strategists from leading technology and consulting institutions."
          actionText="Meet Full Leadership"
          actionTo="/about#leadership"
        />

        {/* Large Editorial Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {executives.map((leader) => (
            <div
              key={leader.id}
              className="bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group flex flex-col justify-between hover:border-[#0A2E23] transition-colors"
            >
              {/* Large Portrait Image */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#121316]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="font-mono-tech text-[10px] uppercase text-[#CCF34A]">
                    {leader.role}
                  </div>
                  <h3 className="font-serif-editorial text-2xl">
                    {leader.name}
                  </h3>
                </div>
              </div>

              {/* Bio & Credentials */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#5E636E] leading-relaxed line-clamp-4">
                  {leader.bio}
                </p>

                {/* Credentials */}
                <div className="pt-3 border-t border-[#E6E2D8] space-y-1">
                  {leader.credentials.slice(0, 2).map((cred) => (
                    <div key={cred} className="font-mono-tech text-[10px] text-[#7C828D] truncate">
                      • {cred}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
