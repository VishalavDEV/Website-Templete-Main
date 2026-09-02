import React from 'react';

interface ArticleAuthorProps {
  authorName?: string;
  role?: string;
}

export const ArticleAuthor: React.FC<ArticleAuthorProps> = ({
  authorName = 'STUDIO EDITORIAL',
  role = 'Ideas, perspectives and observations from the people shaping our work.',
}) => {
  return (
    <div className="py-10 border-y border-white/10 my-12">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#888888] block mb-1">
            WRITTEN & CURATED BY
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FAF9F6] uppercase tracking-tight">
            {authorName}
          </h3>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#888888] font-light max-w-md">
          {role}
        </p>
      </div>
    </div>
  );
};
