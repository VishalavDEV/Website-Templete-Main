import React, { useState } from "react";
import { Search, Calendar, Clock, User, ArrowRight, X } from "lucide-react";
import PageTransition from "../components/PageTransition";
import BlogCard from "../components/BlogCard";
import { blogsData } from "../data/blogsData";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const categories = ["All", ...new Set(blogsData.map(b => b.category))];

  const filteredBlogs = blogsData.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      {/* Blog Article Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl glass-card p-6 md:p-10 rounded-3xl border border-cyan-500/30 text-white my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase font-semibold">
              {selectedBlog.category}
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4 leading-snug">
              {selectedBlog.title}
            </h2>

            <div className="flex items-center space-x-4 text-xs text-slate-400 my-4 font-mono">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-cyan-400" /> {selectedBlog.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> {selectedBlog.readTime}</span>
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-cyan-400" /> {selectedBlog.author}</span>
            </div>

            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 md:h-80 object-cover rounded-2xl my-4 border border-white/10"
            />

            <div className="text-slate-300 text-sm leading-relaxed space-y-4 whitespace-pre-line font-light">
              {selectedBlog.content}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-xs"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      <section className="relative pt-32 pb-16 border-b border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Clinical Research & Medical Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            AICarePlus Medical Journal
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Insights on AI diagnostics, cardiovascular breakthroughs, longevity protocols, and family pediatric care written by hospital leads.
          </p>

          {/* Search & Categories */}
          <div className="max-w-xl mx-auto pt-4 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by title, author, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-cyan-500 text-white shadow-md glow-cyan"
                      : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} onClick={() => setSelectedBlog(blog)} className="cursor-pointer">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
