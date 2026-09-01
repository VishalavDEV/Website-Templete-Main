import React from 'react';
import { MapPin, Award, Globe, Mail } from 'lucide-react';

export function AuthorProfile({ author }) {
  if (!author) return null;

  return (
    <header className="bg-white border-2 border-[#141413] p-6 sm:p-10 mb-10 shadow-xs">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-[#141413] shadow-sm shrink-0"
        />

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D43825] block">
                Contributing Critic & Essayist
              </span>
              <h1 className="font-serif-headline text-3xl sm:text-4xl font-black text-[#141413]">
                {author.name}
              </h1>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {author.twitter && (
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#FAF9F5] border border-[#D1CDC4] hover:border-[#141413] text-[#141413] transition-colors"
                  title="Twitter / X"
                  aria-label="Author Twitter"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {author.website && (
                <a
                  href={author.website}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#FAF9F5] border border-[#D1CDC4] hover:border-[#141413] text-[#141413] transition-colors"
                  title="Author Website"
                  aria-label="Author Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Biography */}
          <p className="font-serif-reading text-lg text-[#4A4A45] leading-relaxed mb-4 italic">
            "{author.bio}"
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E8E5DC] text-xs font-mono text-[#73736C]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C28B38]" />
              <span>{author.location}</span>
            </div>
            {author.awards && author.awards[0] && (
              <div className="flex items-center gap-1.5 text-[#2D5A46]">
                <Award className="w-4 h-4" />
                <span>{author.awards[0]}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
