import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Bookmark } from "lucide-react";
import { insightsData } from "../data/insights";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button } from "../components/common/Button";

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const otherArticles = insightsData.filter((a) => a.id !== article.id);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Insights", to: "/insights" },
            { label: article.title }
          ]}
        />

        {/* Article Metadata Header */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-3 font-mono-tech text-xs text-[#7C828D]">
            <span className="text-[#0A2E23] font-bold uppercase">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-[#121316] tracking-tight leading-[1.08]">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#5E636E] leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author Byline Bar */}
          <div className="pt-6 border-t border-[#E6E2D8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover grayscale"
              />
              <div>
                <div className="font-mono-tech text-xs font-bold text-[#121316]">
                  {article.author.name}
                </div>
                <div className="font-mono-tech text-[11px] text-[#7C828D]">
                  {article.author.role}
                </div>
              </div>
            </div>

            <div className="font-mono-tech text-[11px] text-[#0A2E23] uppercase font-bold px-2.5 py-1 bg-[#F5F2EB] border border-[#E6E2D8] rounded-xs">
              PEER-REVIEWED
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative h-72 sm:h-96 rounded-xs overflow-hidden border border-[#E6E2D8] mb-12 bg-[#121316]">
          <img
            src={article.coverImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale contrast-125 opacity-90"
          />
        </div>

        {/* Key Takeaways Box (if available) */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="bg-[#F5F2EB] border border-[#E6E2D8] p-6 sm:p-8 rounded-xs mb-12 space-y-3">
            <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
              EXECUTIVE ABSTRACT // KEY TAKEAWAYS
            </div>
            <ul className="space-y-2 font-mono-tech text-xs text-[#121316]">
              {article.keyTakeaways.map((takeaway) => (
                <li key={takeaway} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A2E23] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <div className="space-y-8 text-[#121316] leading-relaxed text-base sm:text-lg">
          {article.content.map((section, idx) => (
            <div key={idx} id={section.sectionId} className="space-y-4">
              <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316] pt-4">
                {section.heading}
              </h2>
              {Array.isArray(section.body) ? (
                section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-[#5E636E] text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-[#5E636E] text-base leading-relaxed">
                  {section.body}
                </p>
              )}

              {section.callout && (
                <div className="my-6 p-6 bg-[#0A2E23] text-[#FAF8F5] border border-[#0A2E23] rounded-xs space-y-2">
                  <div className="font-mono-tech text-xs uppercase text-[#CCF34A] font-bold">
                    {section.callout.title}
                  </div>
                  <p className="font-serif-editorial text-lg italic text-[#FAF8F5]">
                    "{section.callout.text}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-12 mt-12 border-t border-[#E6E2D8] flex flex-wrap items-center gap-2">
          <span className="font-mono-tech text-xs text-[#7C828D] mr-2">TOPICS:</span>
          {article.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white border border-[#E6E2D8] font-mono-tech text-xs text-[#5E636E] rounded-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            referrerPolicy="no-referrer"
            className="w-16 h-16 rounded-full object-cover grayscale shrink-0"
          />
          <div className="space-y-1 font-mono-tech">
            <div className="text-xs uppercase text-[#7C828D]">PUBLICATION AUTHOR</div>
            <div className="font-serif-editorial text-2xl text-[#121316]">{article.author.name}</div>
            <div className="text-xs text-[#0A2E23]">{article.author.role}</div>
            <p className="text-xs text-[#5E636E] pt-2">
              Principal architect and researcher specializing in large-scale concurrent architectures and enterprise machine learning pipelines.
            </p>
          </div>
        </div>

        {/* Related Articles Strip */}
        <div className="mt-16 pt-12 border-t border-[#E6E2D8] space-y-6">
          <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
            MORE FROM VERTEXA RESEARCH
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherArticles.slice(0, 2).map((art) => (
              <div key={art.id} className="bg-white border border-[#E6E2D8] p-6 rounded-xs space-y-3 hover:border-[#0A2E23] transition-colors">
                <div className="font-mono-tech text-[10px] uppercase text-[#7C828D]">{art.category}</div>
                <h3 className="font-serif-editorial text-xl text-[#121316]">
                  <Link to={`/insights/${art.slug}`}>{art.title}</Link>
                </h3>
                <Link to={`/insights/${art.slug}`} className="inline-flex items-center gap-1 font-mono-tech text-xs text-[#0A2E23] font-bold">
                  <span>Read Paper</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
