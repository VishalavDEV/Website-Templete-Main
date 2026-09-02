import React, { useState } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';
import { CursorType } from '../../types';

interface ShareArticleProps {
  articleTitle: string;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ShareArticle: React.FC<ShareArticleProps> = ({
  articleTitle,
  setCursorType,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    try {
      if (typeof window !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
      }
    } catch {
      // Fallback
    }

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2400);
  };

  const handleSocialShare = (platform: 'linkedin' | 'x') => {
    const url = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '');
    const title = encodeURIComponent(articleTitle);

    if (platform === 'linkedin') {
      const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    } else if (platform === 'x') {
      const shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-4 py-8 border-b border-white/10">
      <div className="flex items-center gap-2">
        <Share2 className="w-3.5 h-3.5 text-[#0066FF]" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF9F6] font-semibold">
          SHARE ARTICLE
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Copy Link Button */}
        <button
          type="button"
          onClick={handleCopyLink}
          onMouseEnter={() => setCursorType('button', 'COPY ↗')}
          onMouseLeave={() => setCursorType('default')}
          className={`flex items-center gap-2 px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
            copied
              ? 'bg-[#0066FF] border-[#0066FF] text-white'
              : 'bg-white/[0.03] border-white/15 text-[#CCCCCC] hover:border-[#0066FF] hover:text-[#FAF9F6]'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>LINK COPIED</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>COPY LINK</span>
            </>
          )}
        </button>

        {/* LinkedIn */}
        <button
          type="button"
          onClick={() => handleSocialShare('linkedin')}
          onMouseEnter={() => setCursorType('button')}
          onMouseLeave={() => setCursorType('default')}
          className="px-4 py-2.5 bg-white/[0.03] border border-white/15 text-[#888888] hover:text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
        >
          LINKEDIN
        </button>

        {/* X */}
        <button
          type="button"
          onClick={() => handleSocialShare('x')}
          onMouseEnter={() => setCursorType('button')}
          onMouseLeave={() => setCursorType('default')}
          className="px-4 py-2.5 bg-white/[0.03] border border-white/15 text-[#888888] hover:text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  );
};
