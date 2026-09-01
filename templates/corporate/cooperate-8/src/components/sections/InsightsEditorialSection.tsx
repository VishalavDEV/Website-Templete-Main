import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { insightsData } from "../../data/insights";
import { SectionHeader } from "../common/SectionHeader";

export const InsightsEditorialSection: React.FC = () => {
  const featuredArticle = insightsData[0];
  const secondaryArticles = insightsData.slice(1, 4);

  return (
    <section className="py-20 md:py-32 border-b border-[#E6E2D8] bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="09"
          tag="Editorial & Research"
          title="Insights for technology leadership."
          description="Peer-reviewed perspectives on enterprise artificial intelligence, cloud resilience, and the future of distributed systems."
          actionText="All Publications"
          actionTo="/insights"
        />

        {/* Magazine Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main Featured Article (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group flex flex-col justify-between">
            <div className="relative h-64 sm:h-80 overflow-hidden bg-[#121316]">
              <img
                src={featuredArticle.coverImage}
                alt={featuredArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#0A2E23] text-[#CCF34A] text-[11px] font-mono-tech uppercase font-bold rounded-xs">
                FEATURED RESEARCH
              </div>
            </div>

            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3 font-mono-tech text-xs text-[#7C828D]">
                  <span className="text-[#0A2E23] font-bold">{featuredArticle.category}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] leading-tight group-hover:text-[#0A2E23] transition-colors">
                  <Link to={`/insights/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h3>

                <p className="text-sm sm:text-base text-[#5E636E] leading-relaxed">
                  {featuredArticle.subtitle}
                </p>
              </div>

              {/* Author & Arrow */}
              <div className="pt-6 border-t border-[#E6E2D8] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover grayscale"
                  />
                  <div className="font-mono-tech text-xs">
                    <div className="font-bold text-[#121316]">{featuredArticle.author.name}</div>
                    <div className="text-[#7C828D] text-[11px]">{featuredArticle.author.role}</div>
                  </div>
                </div>

                <Link
                  to={`/insights/${featuredArticle.slug}`}
                  className="p-3 rounded-full border border-[#E6E2D8] group-hover:bg-[#0A2E23] group-hover:text-[#CCF34A] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary Articles Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {secondaryArticles.map((art) => (
              <div
                key={art.id}
                className="bg-white border border-[#E6E2D8] p-6 rounded-xs hover:border-[#0A2E23] transition-colors group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono-tech text-[11px] text-[#7C828D]">
                    <span className="text-[#0A2E23] font-bold uppercase">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h4 className="font-serif-editorial text-xl sm:text-2xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                    <Link to={`/insights/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-[#5E636E] line-clamp-2 leading-relaxed">
                    {art.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6E2D8]/60 flex items-center justify-between font-mono-tech text-xs">
                  <span className="text-[#7C828D]">{art.date}</span>
                  <Link
                    to={`/insights/${art.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-[#0A2E23] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
