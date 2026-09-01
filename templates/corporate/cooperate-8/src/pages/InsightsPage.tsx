import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search, Clock, Calendar } from "lucide-react";
import { insightsData } from "../data/insights";
import { Breadcrumb } from "../components/common/Breadcrumb";

export const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "AI Architecture", "Data Engineering", "Cloud Infrastructure", "Cybersecurity"];

  const filteredArticles = insightsData.filter((art) => {
    const matchesCat = selectedCategory === "All" || art.category.toLowerCase().includes(selectedCategory.toLowerCase().split(" ")[0]);
    const matchesSearch = searchQuery === "" ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  const featured = filteredArticles[0] || insightsData[0];
  const others = filteredArticles.slice(1);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Insights & Research" }]} />

        {/* Hero Header */}
        <div className="mb-12 md:mb-16 max-w-4xl space-y-6">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0A2E23] flex items-center gap-2">
            <span className="w-2 h-2 rounded-xs bg-[#0A2E23]" />
            <span>EDITORIAL PUBLICATIONS & SYSTEMS RESEARCH</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#121316] tracking-tight leading-[1.05]">
            Perspectives on intelligent infrastructure.
          </h1>

          <p className="text-base sm:text-xl text-[#5E636E] font-normal leading-relaxed max-w-2xl">
            Rigorous engineering analysis, architectural whitepapers, and strategic essays from Vertexa researchers and practice leads.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="bg-white border border-[#E6E2D8] p-4 sm:p-6 rounded-xs mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 font-mono-tech text-xs rounded-xs border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0A2E23] text-[#CCF34A] border-[#0A2E23] font-bold"
                    : "bg-[#FAF8F5] text-[#5E636E] border-[#E6E2D8] hover:border-[#121316]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-[#7C828D] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-xs text-[#121316] rounded-xs font-mono-tech"
            />
          </div>
        </div>

        {/* Featured Big Article */}
        {featured && (
          <div className="bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 font-mono-tech text-xs text-[#7C828D]">
                    <span className="text-[#0A2E23] font-bold uppercase">{featured.category}</span>
                    <span>•</span>
                    <span>{featured.date}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>

                  <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#121316] leading-tight group-hover:text-[#0A2E23] transition-colors">
                    <Link to={`/insights/${featured.slug}`}>
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-base text-[#5E636E] leading-relaxed">
                    {featured.subtitle}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E6E2D8] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featured.author.avatar}
                      alt={featured.author.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover grayscale"
                    />
                    <div className="font-mono-tech text-xs">
                      <div className="font-bold text-[#121316]">{featured.author.name}</div>
                      <div className="text-[#7C828D] text-[11px]">{featured.author.role}</div>
                    </div>
                  </div>

                  <Link
                    to={`/insights/${featured.slug}`}
                    className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase font-bold text-[#0A2E23] pb-1 border-b border-[#0A2E23]/30 hover:border-[#0A2E23]"
                  >
                    <span>Read Publication</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[440px] bg-[#121316] overflow-hidden">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        )}

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {others.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group flex flex-col justify-between hover:border-[#0A2E23] transition-colors"
            >
              <div className="h-48 overflow-hidden bg-[#121316]">
                <img
                  src={art.coverImage}
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono-tech text-[10px] text-[#7C828D]">
                    <span className="text-[#0A2E23] font-bold uppercase">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                    <Link to={`/insights/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#5E636E] line-clamp-3 leading-relaxed">
                    {art.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between font-mono-tech text-xs">
                  <span className="text-[#7C828D]">{art.date}</span>
                  <Link
                    to={`/insights/${art.slug}`}
                    className="p-2 rounded-full border border-[#E6E2D8] group-hover:bg-[#0A2E23] group-hover:text-[#CCF34A] transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
