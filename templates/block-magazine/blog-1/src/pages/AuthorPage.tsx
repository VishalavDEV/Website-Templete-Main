import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Author, Post } from '../types';
import { getAuthorById, getPostsByAuthor } from '../services/api';
import PostCard from '../components/PostCard';
import { PostCardSkeleton } from '../components/LoadingSkeleton';
import { Twitter, Linkedin, BookOpen } from 'lucide-react';

export default function AuthorPage() {
  const { id } = useParams<{ id: string }>();
  const [author, setAuthor] = useState<Author | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAuthorData() {
      if (!id) return;
      setLoading(true);
      try {
        const [authData, authorPosts] = await Promise.all([
          getAuthorById(id),
          getPostsByAuthor(id)
        ]);
        setAuthor(authData);
        setPosts(authorPosts);
      } catch (err) {
        console.error('Failed to load author profile:', err);
      } finally {
        setLoading(false);
      }
    }
    loadAuthorData();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">
        <div className="h-48 bg-neutral-200 rounded-2xl mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PostCardSkeleton />
          <PostCardSkeleton />
        </div>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-2">Author Not Found</h2>
        <p className="text-neutral-500">The requested editorial correspondent does not exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Author Profile Header */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-8 sm:p-12 mb-12 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg border-4 border-white flex-shrink-0"
          />
          <div className="flex-1 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2 block">
              {author.role}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
              {author.name}
            </h1>
            <p className="text-neutral-600 text-base max-w-2xl font-sans leading-relaxed mb-6">
              {author.bio}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>{posts.length} Publications</span>
              </span>
              {author.twitter && (
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-full transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-full transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Author Articles */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8 pb-3 border-b border-neutral-200">
            Publications by {author.name}
          </h2>

          {posts.length === 0 ? (
            <p className="text-neutral-500 text-sm">No articles published by this author yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
