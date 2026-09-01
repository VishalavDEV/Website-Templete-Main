import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  Eye,
  Calendar,
  Bookmark,
  Share2,
  Printer,
  Copy,
  Check,
  Twitter,
  Linkedin,
  Facebook,
  Sparkles,
  List,
  ChevronDown,
  Rotate3d,
  ArrowRight
} from 'lucide-react';
import { Article, Author, Category } from '../types';
import { articleService } from '../services/articleService';
import { useBookmarks } from '../hooks/useBookmarks';
import { ReadingProgressBar } from '../components/common/ReadingProgressBar';
import { ArticleCard } from '../components/articles/ArticleCard';
import { StoryDetailSkeleton } from '../components/common/Skeleton';
import { EmptyState } from '../components/common/EmptyState';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Card3D } from '../components/common/Card3D';

export const StoryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  const articleContentRef = useRef<HTMLDivElement>(null);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  useEffect(() => {
    async function loadStory() {
      if (!slug) return;
      setLoading(true);
      try {
        const found = await articleService.getArticleBySlug(slug);
        if (found) {
          setArticle(found);
          const [auth, cat, related] = await Promise.all([
            articleService.getAuthorByIdSync(found.authorId) || null,
            articleService.getCategoryBySlugSync(found.category) || null,
            articleService.getRelatedArticles(found.slug, found.category, 3)
          ]);
          setAuthor(auth);
          setCategory(cat);
          setRelatedArticles(related);
        } else {
          setArticle(null);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    loadStory();
  }, [slug]);

  // Extract table of contents headings
  const headings = article?.content
    .filter((c) => c.type === 'heading')
    .map((c, i) => ({
      id: `heading-${i}`,
      text: c.content || ''
    })) || [];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareTwitter = () => {
    if (!article) return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`"${article.title}" on STORIVA:`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    if (!article) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handleShareFacebook = () => {
    if (!article) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  if (loading) {
    return <StoryDetailSkeleton />;
  }

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <EmptyState
          title="Story Not Found"
          description="The editorial piece you requested could not be located or has been archived."
          actionText="Explore all stories"
          actionLink="/stories"
        />
      </div>
    );
  }

  const bookmarked = isBookmarked(article.id);

  return (
    <article className="animate-in fade-in duration-200">
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Stories', to: '/stories' },
            { label: category?.name || article.category, to: `/category/${article.category}` },
            { label: article.title }
          ]}
        />

        {/* Header Metadata */}
        <div className="pt-6 pb-8 space-y-4">
          <div className="flex items-center space-x-3">
            <Link
              to={`/category/${article.category}`}
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E27453] hover:bg-[#C85A32]/20 transition-colors"
            >
              {category?.name || article.category}
            </Link>
            <span className="text-xs text-[#78716C] dark:text-[#A39C90] font-medium flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#C85A32] dark:text-[#E27453]" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="text-lg sm:text-xl text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              {article.subtitle}
            </p>
          )}

          {/* Author & Timestamp Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#E8E2D5] dark:border-[#3A342E] mt-6">
            {author && (
              <Link
                to={`/author/${author.slug}`}
                className="flex items-center space-x-3 group/auth"
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop';
                  }}
                  className="w-11 h-11 rounded-full object-cover border border-[#E8E2D5] dark:border-[#3A342E]"
                />
                <div>
                  <h3 className="font-display font-bold text-sm text-[#1C1917] dark:text-[#F7F4EE] group-hover/auth:text-[#C85A32] transition-colors">
                    {author.name}
                  </h3>
                  <p className="text-xs text-[#78716C] dark:text-[#A39C90]">{author.role}</p>
                </div>
              </Link>
            )}

            <div className="flex items-center space-x-4 text-xs text-[#78716C] dark:text-[#A39C90] font-medium">
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                {article.date}
              </span>
              <span className="flex items-center">
                <Eye className="w-3.5 h-3.5 mr-1" />
                {article.views.toLocaleString()} reads
              </span>
            </div>
          </div>
        </div>

        {/* 3D Interactive Hero Visual */}
        <div className="my-6">
          <Card3D maxTilt={5} scale={1.01} glareEffect={true}>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E8E2D5] dark:border-[#3A342E] aspect-16/9 bg-[#E8E2D5] dark:bg-[#1E1B18] relative group">
              <img
                src={article.image}
                alt={article.title}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 right-4 bg-[#1C1917]/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold flex items-center space-x-1 border border-white/10 shadow-xs">
                <Rotate3d className="w-3 h-3 text-[#E27453]" />
                <span>3D Spatial View</span>
              </div>
            </div>
          </Card3D>
        </div>

        {/* Action Toolbar (Share, Bookmark, Print) */}
        <div className="flex items-center justify-between py-3 my-6 px-4 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] shadow-xs no-print">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-[#78716C] dark:text-[#A39C90] mr-1 hidden sm:inline">
              Actions:
            </span>

            {/* Bookmark Action */}
            <button
              onClick={() => toggleBookmark(article.id)}
              className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                bookmarked
                  ? 'bg-[#C85A32] text-white border-[#C85A32]'
                  : 'border-[#E8E2D5] dark:border-[#3A342E] text-[#1C1917] dark:text-[#F7F4EE] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-white' : ''}`} />
              <span>{bookmarked ? 'Saved' : 'Save Story'}</span>
            </button>

            {/* Print Action */}
            <button
              onClick={handlePrint}
              aria-label="Print story"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border border-[#E8E2D5] dark:border-[#3A342E] text-[#1C1917] dark:text-[#F7F4EE] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>

          {/* Share Menu Trigger */}
          <div className="relative">
            <button
              onClick={() => setShareMenuOpen(!shareMenuOpen)}
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-xl bg-[#1C1917] hover:bg-[#C85A32] dark:bg-[#C85A32] dark:hover:bg-[#B34722] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>

            {/* Floating Share Dropdown */}
            {shareMenuOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-52 p-2 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] shadow-xl z-30 animate-in fade-in"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] text-[#1C1917] dark:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  <span className="flex items-center">
                    <Copy className="w-3.5 h-3.5 mr-2 text-[#C85A32]" />
                    {copied ? 'Link copied!' : 'Copy link'}
                  </span>
                  {copied && <Check className="w-3.5 h-3.5 text-emerald-500" />}
                </button>

                <button
                  onClick={handleShareTwitter}
                  className="w-full flex items-center px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] text-[#1C1917] dark:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  <Twitter className="w-3.5 h-3.5 mr-2 text-[#00ACEE]" />
                  <span>Share on X (Twitter)</span>
                </button>

                <button
                  onClick={handleShareLinkedIn}
                  className="w-full flex items-center px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] text-[#1C1917] dark:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  <Linkedin className="w-3.5 h-3.5 mr-2 text-[#0A66C2]" />
                  <span>Share on LinkedIn</span>
                </button>

                <button
                  onClick={handleShareFacebook}
                  className="w-full flex items-center px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] text-[#1C1917] dark:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  <Facebook className="w-3.5 h-3.5 mr-2 text-[#1877F2]" />
                  <span>Share on Facebook</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Table of Contents Accordion */}
        {headings.length > 0 && (
          <div className="lg:hidden my-6 border border-[#E8E2D5] dark:border-[#3A342E] rounded-2xl bg-white dark:bg-[#1E1B18] p-4 shadow-xs">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="w-full flex items-center justify-between text-sm font-bold font-display text-[#1C1917] dark:text-[#F7F4EE] cursor-pointer"
            >
              <span className="flex items-center">
                <List className="w-4 h-4 mr-2 text-[#C85A32] dark:text-[#E27453]" /> Table of Contents ({headings.length})
              </span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${
                  tocOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {tocOpen && (
              <div className="mt-3 pt-3 border-t border-[#E8E2D5] dark:border-[#3A342E] space-y-2 text-xs">
                {headings.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    onClick={() => setTocOpen(false)}
                    className="block text-[#44403C] dark:text-[#D7D1C6] hover:text-[#C85A32] dark:hover:text-[#E27453] py-1 font-medium"
                  >
                    • {h.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Main Article Content & Desktop Table of Contents Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Article Main Text */}
          <div
            ref={articleContentRef}
            className="lg:col-span-8 space-y-6 text-[#1C1917] dark:text-[#F7F4EE] leading-relaxed text-base sm:text-lg"
          >
            {article.content.map((section, idx) => {
              switch (section.type) {
                case 'paragraph':
                  return (
                    <p key={idx} className="text-[#44403C] dark:text-[#D7D1C6] leading-[1.8] text-[1.0625rem] font-normal">
                      {section.content}
                    </p>
                  );

                case 'heading': {
                  const headingIndex = headings.findIndex((h) => h.text === section.content);
                  const headingId = headingIndex !== -1 ? `heading-${headingIndex}` : undefined;
                  return (
                    <h2
                      id={headingId}
                      key={idx}
                      className="font-display font-black text-2xl sm:text-3xl text-[#1C1917] dark:text-[#F7F4EE] pt-6 pb-2 scroll-mt-24 tracking-tight"
                    >
                      {section.content}
                    </h2>
                  );
                }

                case 'subheading':
                  return (
                    <h3
                      key={idx}
                      className="font-display font-bold text-xl text-[#1C1917] dark:text-[#F7F4EE] pt-4 pb-1"
                    >
                      {section.content}
                    </h3>
                  );

                case 'quote':
                  return (
                    <Card3D key={idx} maxTilt={4} glareEffect={true}>
                      <blockquote className="my-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E1B18] border-l-4 border-[#C85A32] border border-y-[#E8E2D5] border-r-[#E8E2D5] dark:border-y-[#3A342E] dark:border-r-[#3A342E] shadow-md hover:shadow-lg transition-all">
                        <p className="font-display font-bold italic text-lg sm:text-2xl text-[#1C1917] dark:text-[#F7F4EE] mb-4 leading-snug">
                          "{section.content}"
                        </p>
                        {(section.quoteAuthor || section.quoteRole) && (
                          <cite className="text-xs font-bold text-[#78716C] dark:text-[#A39C90] not-italic block tracking-wide">
                            — {section.quoteAuthor}
                            {section.quoteRole ? `, ${section.quoteRole}` : ''}
                          </cite>
                        )}
                      </blockquote>
                    </Card3D>
                  );

                case 'highlight':
                  return (
                    <Card3D key={idx} maxTilt={3} glareEffect={true}>
                      <div className="my-6 p-6 rounded-2xl bg-[#C85A32]/10 dark:bg-[#C85A32]/20 border border-[#E8E2D5] dark:border-[#3A342E] text-sm sm:text-base text-[#1C1917] dark:text-[#F7F4EE] shadow-md">
                        <div className="flex items-start space-x-3.5">
                          <Sparkles className="w-5 h-5 text-[#C85A32] dark:text-[#E27453] shrink-0 mt-0.5" />
                          <div className="font-semibold leading-relaxed">{section.content}</div>
                        </div>
                      </div>
                    </Card3D>
                  );

                case 'list':
                  return (
                    <ul key={idx} className="space-y-3 my-4 list-disc pl-6 text-sm sm:text-base">
                      {section.listItems?.map((item, liIdx) => (
                        <li key={liIdx} className="text-[#44403C] dark:text-[#D7D1C6] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

                case 'image':
                  return (
                    <figure key={idx} className="my-8 space-y-2">
                      <Card3D maxTilt={4} glareEffect={true}>
                        <div className="rounded-2xl overflow-hidden border border-[#E8E2D5] dark:border-[#3A342E] bg-[#E8E2D5] dark:bg-[#1E1B18] shadow-md">
                          <img
                            src={section.imageUrl}
                            alt={section.imageCaption || 'Editorial visual'}
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop';
                            }}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </Card3D>
                      {section.imageCaption && (
                        <figcaption className="text-xs text-center text-[#78716C] dark:text-[#A39C90] italic pt-1 font-medium">
                          {section.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  );

                default:
                  return null;
              }
            })}

            {/* Tags Bottom Bar */}
            <div className="pt-8 mt-8 border-t border-[#E8E2D5] dark:border-[#3A342E]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#78716C] dark:text-[#A39C90] mr-2">
                  Filed under:
                </span>
                {Array.from(new Set<string>(article.tags)).map((tag, tagIdx) => (
                  <Link
                    key={`${tag}-${tagIdx}`}
                    to={`/stories?tag=${encodeURIComponent(tag)}`}
                    className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#E8E2D5]/60 dark:bg-[#282420] text-[#1C1917] dark:text-[#F7F4EE] hover:bg-[#C85A32] hover:text-white dark:hover:bg-[#C85A32] transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Profile Box with 3D Pop */}
            {author && (
              <Card3D maxTilt={4} glareEffect={true}>
                <div className="my-8 p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] flex flex-col sm:flex-row gap-5 items-start sm:items-center shadow-md">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-[#E8E2D5] dark:border-[#3A342E] shadow-xs"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display font-black text-lg text-[#1C1917] dark:text-[#F7F4EE]">
                          <Link to={`/author/${author.slug}`} className="hover:underline">
                            {author.name}
                          </Link>
                        </h4>
                        <p className="text-xs text-[#C85A32] dark:text-[#E27453] font-bold">{author.role}</p>
                      </div>
                      <Link
                        to={`/author/${author.slug}`}
                        className="text-xs font-bold px-3.5 py-1.5 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] hover:bg-[#1C1917] hover:text-white dark:hover:bg-[#C85A32] transition-colors cursor-pointer"
                      >
                        View Profile
                      </Link>
                    </div>
                    <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] mt-2 leading-relaxed">
                      {author.bio}
                    </p>
                  </div>
                </div>
              </Card3D>
            )}
          </div>

          {/* Desktop Sticky Table of Contents & Metadata Sidebar */}
          <div className="hidden lg:block lg:col-span-4 space-y-6">
            <div className="sticky top-24 p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] shadow-md space-y-6">
              <div>
                <h4 className="font-display font-black text-xs uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE] mb-3 flex items-center">
                  <List className="w-3.5 h-3.5 mr-2 text-[#C85A32] dark:text-[#E27453]" /> Article Sections
                </h4>
                <ul className="space-y-2 text-xs">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="text-[#44403C] dark:text-[#D7D1C6] hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors line-clamp-1 block py-0.5 font-medium"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E8E2D5] dark:border-[#3A342E] space-y-2.5">
                <div className="text-xs font-semibold text-[#78716C] dark:text-[#A39C90]">
                  Reading time: <strong className="text-[#1C1917] dark:text-white">{article.readingTime}</strong>
                </div>
                <div className="text-xs font-semibold text-[#78716C] dark:text-[#A39C90]">
                  Published: <strong className="text-[#1C1917] dark:text-white">{article.date}</strong>
                </div>
                <div className="text-xs font-semibold text-[#78716C] dark:text-[#A39C90]">
                  Desk: <strong className="text-[#1C1917] dark:text-white">{category?.name || article.category}</strong>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E2D5] dark:border-[#3A342E]">
                <Link
                  to="/stories"
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-[#C85A32]/10 hover:bg-[#C85A32] text-[#C85A32] hover:text-white dark:bg-[#C85A32]/25 dark:hover:bg-[#C85A32] dark:text-[#E27453] dark:hover:text-white text-xs font-bold transition-all border border-[#E8E2D5] dark:border-[#3A342E] cursor-pointer"
                >
                  <Rotate3d className="w-3.5 h-3.5" />
                  <span>Explore in 3D Deck</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Exploring Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t border-[#E8E2D5] dark:border-[#3A342E]">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453]">
                  <Rotate3d className="w-3 h-3" />
                  <span>3D Interactive Cards</span>
                </div>
                <h3 className="font-display font-black text-2xl text-[#1C1917] dark:text-[#F7F4EE]">
                  Continue Exploring
                </h3>
              </div>
              <Link
                to={`/category/${article.category}`}
                className="text-xs font-bold text-[#C85A32] dark:text-[#E27453] hover:underline"
              >
                More from this desk →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} variant="grid" />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
