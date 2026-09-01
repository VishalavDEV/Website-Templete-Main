import React from 'react';
import { useMagazine } from '../../context/MagazineContext';
import { Sparkles, CheckCircle2, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ArticleBody({ article }) {
  const { fontSize } = useMagazine();

  if (!article) return null;

  const fontSizeClass =
    fontSize === 'sm' ? 'text-size-sm' : fontSize === 'lg' ? 'text-size-lg' : 'text-size-md';

  return (
    <div className={`article-content ${fontSizeClass} text-[#222220]`}>
      {/* Featured Cover Hero Image */}
      <div className="my-8">
        <div className="aspect-[16/10] overflow-hidden bg-[#EAE7DF] border border-[#E8E5DC]">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        {article.coverCaption && (
          <p className="text-xs text-[#73736C] italic mt-2.5 text-center font-serif-reading">
            {article.coverCaption}
          </p>
        )}
      </div>

      {/* Excerpt with Drop Cap */}
      <div className="editorial-drop-cap font-serif-reading text-xl md:text-2xl text-[#141413] leading-relaxed mb-8">
        <p>{article.excerpt}</p>
      </div>

      {/* Sections Content */}
      {article.sections &&
        article.sections.map((section, idx) => (
          <div key={idx} id={section.id} className="scroll-mt-24">
            <h2>{section.heading}</h2>
            {section.content.split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}

            {/* Mid-Article Pull Quote between section 1 and 2 */}
            {idx === 0 && article.pullQuote && (
              <blockquote className="editorial-pull-quote my-10">
                "{article.pullQuote}"
              </blockquote>
            )}

            {/* Key Takeaways Box after section 2 */}
            {idx === 1 && article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <div className="my-10 p-6 sm:p-8 bg-[#F4F1EA] border-l-4 border-[#141413]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141413] mb-4">
                  <Sparkles className="w-4 h-4 text-[#D43825]" />
                  <span>Key Editorial Takeaways</span>
                </div>
                <ul className="space-y-3 font-sans text-sm text-[#4A4A45] list-none pl-0">
                  {article.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#D43825] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

      {/* Article Tags Footer */}
      <div className="mt-12 pt-8 border-t border-[#E8E5DC]">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#73736C] mb-3">
          <Tag className="w-3.5 h-3.5" />
          <span>Filed Under</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {article.tags?.map((tag, idx) => (
            <Link
              key={idx}
              to={`/search?q=${encodeURIComponent(tag)}`}
              className="px-3 py-1 bg-[#FAF9F5] border border-[#D1CDC4] text-xs font-medium text-[#52524E] hover:border-[#141413] hover:text-[#141413] transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
