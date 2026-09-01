import React from 'react';
import { Link } from 'react-router-dom';
import { Award, MapPin, Globe, ArrowRight } from 'lucide-react';

export function AuthorBio({ author }) {
  if (!author) return null;

  return (
    <div className="my-12 p-6 sm:p-8 bg-white border-2 border-[#141413] shadow-xs">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-[#141413] shrink-0"
        />
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div>
              <span className="text-[0.6875rem] font-mono text-[#D43825] uppercase tracking-wider font-bold block">
                Featured Essayist
              </span>
              <h3 className="font-serif-headline text-xl font-bold text-[#141413]">
                {author.name}
              </h3>
            </div>

            <Link
              to={`/author/${author.id}`}
              className="px-3 py-1 bg-[#FAF9F5] border border-[#141413] text-xs font-bold text-[#141413] hover:bg-[#141413] hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Author Folio</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <p className="text-xs text-[#52524E] leading-relaxed mb-4 font-serif-reading text-[1.0625rem]">
            {author.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#73736C] pt-3 border-t border-[#E8E5DC]">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C28B38]" />
              <span>{author.location}</span>
            </div>
            {author.awards && author.awards[0] && (
              <div className="flex items-center gap-1 text-[#2D5A46]">
                <Award className="w-3.5 h-3.5" />
                <span>{author.awards[0]}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
