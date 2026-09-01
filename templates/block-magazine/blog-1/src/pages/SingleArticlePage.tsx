import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Post, Comment } from '../types';
import { getPostBySlug, getCommentsForPost, addComment, getPosts } from '../services/api';
import { Clock, Eye, Heart, MessageSquare, Share2, Bookmark, ArrowLeft, Send, CheckCircle2, Sparkles, BookOpen, Lock, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import ReadingProgressBar from '../components/ReadingProgressBar';
import RecentlyViewed from '../components/RecentlyViewed';
import AdSlot from '../components/AdSlot';

export default function SingleArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  // New features state
  const [readingMode, setReadingMode] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  // Comment form state
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentContent, setNewCommentContent] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  // Paywall unlock state
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!slug) return;
    setLoading(true);

    async function loadArticle() {
      try {
        const fetchedPost = await getPostBySlug(slug!);
        if (fetchedPost) {
          setPost(fetchedPost);
          setLikesCount(fetchedPost.likes);
          const postComments = await getCommentsForPost(fetchedPost.id);
          setComments(postComments);

          // Track recently viewed in localStorage
          try {
            const stored = localStorage.getItem('recently_viewed_posts');
            let slugs: string[] = stored ? JSON.parse(stored) : [];
            slugs = [slug!, ...slugs.filter(s => s !== slug!)].slice(0, 5);
            localStorage.setItem('recently_viewed_posts', JSON.stringify(slugs));
          } catch {
            // ignore
          }

          // Check bookmark status
          try {
            const storedBookmarks = localStorage.getItem('bookmarked_posts');
            if (storedBookmarks) {
              const ids: string[] = JSON.parse(storedBookmarks);
              setBookmarked(ids.includes(fetchedPost.id));
            }
          } catch {
            // ignore
          }

          // Generate Table of Contents headings from content
          const generatedHeadings = fetchedPost.content.map((para, idx) => {
            const words = para.split(' ');
            const titleText = words.slice(0, 6).join(' ') + (words.length > 6 ? '...' : '');
            return {
              id: `section-${idx}`,
              text: titleText,
              level: idx === 0 ? 2 : 3
            };
          });
          setHeadings(generatedHeadings);
        }

        const all = await getPosts();
        setRelatedPosts(all.filter(p => p.slug !== slug).slice(0, 3));
      } catch (err) {
        console.error('Failed to load article:', err);
      } finally {
        setLoading(false);
      }
    }

    loadArticle();
  }, [slug]);

  const toggleBookmark = () => {
    if (!post) return;
    try {
      const stored = localStorage.getItem('bookmarked_posts');
      let ids: string[] = stored ? JSON.parse(stored) : [];
      if (bookmarked) {
        ids = ids.filter(id => id !== post.id);
        setBookmarked(false);
      } else {
        ids.push(post.id);
        setBookmarked(true);
      }
      localStorage.setItem('bookmarked_posts', JSON.stringify(ids));
    } catch {
      // ignore
    }
  };

  const handleLike = () => {
    if (!liked) {
      setLikesCount(prev => prev + 1);
      setLiked(true);
    } else {
      setLikesCount(prev => prev - 1);
      setLiked(false);
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentContent.trim() || !post) return;
    try {
      const newComm = await addComment(post.id, newCommentContent, newCommentName);
      setComments([newComm, ...comments]);
      setNewCommentName('');
      setNewCommentContent('');
      setCommentSubmitted(true);
      setTimeout(() => setCommentSubmitted(false), 4000);
    } catch (err) {
      console.error('Failed to add comment:', err);
    }
  };

  if (loading || !post) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Check if article is premium and locked
  const isLocked = (post as any).isPremium && !unlocked;

  return (
    <div className={`min-h-screen transition-colors duration-500 ${readingMode ? 'bg-amber-50/40 text-neutral-900' : 'bg-white text-neutral-900'}`}>
      <ReadingProgressBar />

      {/* SEO Helmet */}
      <Helmet>
        <title>{post.title} — AURA Magazine</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.imageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "image": [post.imageUrl],
            "datePublished": post.publishedDate,
            "author": [{
              "@type": "Person",
              "name": post.author.name
            }]
          })}
        </script>
      </Helmet>

      {/* Reading Mode Floating Control Bar */}
      <div className="sticky top-20 z-30 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 py-2.5 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-amber-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Sanctuaries</span>
          </Link>

          <div className="flex items-center space-x-3 text-xs">
            {/* Font Size Adjuster */}
            <div className="hidden sm:flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-lg p-0.5">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${fontSize === 'normal' ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${fontSize === 'large' ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${fontSize === 'xlarge' ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500'}`}
              >
                A+
              </button>
            </div>

            {/* Reading Mode Toggle */}
            <button
              onClick={() => setReadingMode(!readingMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors ${readingMode ? 'bg-amber-700 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200'}`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{readingMode ? 'Exit Reading Mode' : 'Reading Mode'}</span>
            </button>

            {/* Bookmark button */}
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-lg transition-colors ${bookmarked ? 'text-amber-700 bg-amber-50' : 'text-neutral-500 hover:bg-neutral-100'}`}
              title={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Table of Contents Sticky Sidebar on Desktop */}
          {!readingMode && (
            <aside className="hidden lg:block lg:col-span-3 space-y-6">
              <div className="sticky top-32 bg-neutral-50 border border-neutral-200/80 rounded-2xl p-6 shadow-sm">
                <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                  Table of Contents
                </h4>
                <nav className="space-y-2">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className="block text-xs font-medium text-neutral-600 hover:text-amber-700 transition-colors py-1 leading-snug"
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar AdSlot */}
              <AdSlot variant="sidebar" title="Nordic Biophilic Acoustic Panels" sponsorName="Aura Architecture" />
            </aside>
          )}

          {/* Main Article Content */}
          <article className={`${readingMode ? 'lg:col-span-12 max-w-3xl mx-auto' : 'lg:col-span-9'} transition-all`}>
            
            {/* Header info */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Link
                  to={`/category/${post.category.slug}`}
                  className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider hover:bg-amber-200 transition-colors"
                >
                  {post.category.name}
                </Link>
                {(post as any).isPremium && (
                  <span className="bg-neutral-900 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Lock className="w-3 h-3" /> Premium Sanctuary
                  </span>
                )}
                <span className="text-neutral-500 text-xs flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
                <span className="text-neutral-500 text-xs flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {post.views} views
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-neutral-600 text-lg sm:text-xl font-sans leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Author Row */}
              <div className="flex items-center justify-between py-4 border-t border-b border-neutral-200">
                <Link to={`/author/${post.author.id}`} className="flex items-center space-x-3 group">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm border border-neutral-200"
                  />
                  <div>
                    <span className="block text-sm font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors">
                      {post.author.name}
                    </span>
                    <span className="block text-xs text-neutral-500">{post.author.role} • {post.publishedDate}</span>
                  </div>
                </Link>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleLike}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-colors ${liked ? 'bg-red-50 text-red-600' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'}`}
                  >
                    <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                    <span>{likesCount}</span>
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Article link copied to clipboard!');
                    }}
                    className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                    title="Share article"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden mb-10 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15)] bg-neutral-100">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Body Content with Paywall / Premium Guard */}
            <div className={`space-y-6 font-sans leading-relaxed text-neutral-800 ${
              fontSize === 'xlarge' ? 'text-xl' : fontSize === 'large' ? 'text-lg' : 'text-base'
            }`}>
              {post.content.map((paragraph, idx) => {
                const isBlurred = isLocked && idx > 0;
                const headingInfo = headings[idx];

                return (
                  <div key={idx} id={headingInfo?.id} className={`relative ${isBlurred ? 'filter blur-sm select-none opacity-40' : ''}`}>
                    <p className="mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                    {idx === 1 && <AdSlot variant="in-content" title="Handcrafted Ceramic & Stoneware" sponsorName="Kyoto Atelier" />}
                  </div>
                );
              })}

              {/* Paywall Banner if locked */}
              {isLocked && (
                <div className="my-12 p-8 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl shadow-2xl border border-neutral-800 text-center relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
                  <div className="w-12 h-12 bg-amber-600/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    Unlock Full Editorial Access
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto mb-6 font-sans leading-relaxed">
                    This article is part of our curated Premium Sanctuaries collection. Subscribe or unlock instantly to continue reading.
                  </p>
                  <button
                    onClick={() => setUnlocked(true)}
                    className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors shadow-lg"
                  >
                    Unlock Full Article Instantly
                  </button>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 my-10 pt-6 border-t border-neutral-200">
              {post.tags.map(tag => (
                <Link
                  key={tag}
                  to={`/search?q=${encodeURIComponent(tag)}`}
                  className="text-xs font-medium bg-neutral-100 hover:bg-amber-50 hover:text-amber-700 text-neutral-700 px-3 py-1.5 rounded-lg transition-colors border border-neutral-200/50"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Recently Viewed Strip */}
            <RecentlyViewed currentSlug={post.slug} />

            {/* Comments Section */}
            <div className="mt-16 pt-10 border-t border-neutral-200">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-2xl font-bold text-neutral-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-700" />
                  <span>Reader Reflections ({comments.length})</span>
                </h3>
              </div>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 mb-10 space-y-4">
                <h4 className="font-serif text-sm font-bold text-neutral-900">Share your perspective</h4>
                {commentSubmitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Your reflection has been added successfully.</span>
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={newCommentName}
                    onChange={(e) => setNewCommentName(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 text-neutral-900"
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="Write your reflection..."
                    value={newCommentContent}
                    onChange={(e) => setNewCommentContent(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 text-neutral-900"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-neutral-900 hover:bg-amber-700 text-white font-medium px-6 py-2.5 rounded-xl text-xs transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publish Reflection</span>
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map(comm => (
                  <div key={comm.id} className="p-5 bg-white border border-neutral-200/80 rounded-2xl shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src={comm.authorAvatar} alt={comm.authorName} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <span className="text-xs font-bold text-neutral-900 block">{comm.authorName}</span>
                          <span className="text-[10px] text-neutral-400 block">{comm.publishedDate}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed font-sans pt-1">
                      {comm.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </article>
        </div>
      </main>
    </div>
  );
}
