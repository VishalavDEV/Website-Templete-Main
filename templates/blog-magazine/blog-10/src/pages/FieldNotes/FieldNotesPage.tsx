import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Clock, ArrowLeft, ArrowUpRight, Compass, Sparkles, Filter } from 'lucide-react';
import { mockApi } from '../../services/mockApi';
import { FieldNote } from '../../types';
import { Newsletter } from '../../components/Newsletter/Newsletter';

export const FieldNotesPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [fieldNotes, setFieldNotes] = useState<FieldNote[]>([]);
  const [selectedNote, setSelectedNote] = useState<FieldNote | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let isMounted = true;

    const loadNotes = async () => {
      const notes = await mockApi.getFieldNotes();
      if (isMounted) {
        setFieldNotes(notes);
        if (slug) {
          const found = notes.find((n) => n.slug === slug);
          if (found) setSelectedNote(found);
        }
      }
    };

    loadNotes();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  const categories = [
    'all',
    'wildlife',
    'planet',
    'science',
    'space',
    'history',
    'exploration',
    'photography'
  ];

  const filteredNotes = fieldNotes.filter((n) => {
    if (activeCategory === 'all') return true;
    return n.category === activeCategory;
  });

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 select-none space-y-16">
      
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c98a3e]/15 border border-[#c98a3e]/30 text-[#e0a358] text-[10px] font-mono tracking-widest uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>RESEARCH DISPATCHES & TELEMETRY</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white">
          FIELD NOTES
        </h1>

        <p className="font-sans text-base sm:text-lg text-[#d1c7b7] font-light max-w-2xl">
          Direct, unfiltered dispatches from research stations, submersible descents, paleontology trenches, and mountain observatories.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 pt-4 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#c98a3e] text-black font-bold'
                  : 'bg-[#141619] text-[#a8a49c] border border-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Field Notes Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <article
              key={note.id}
              onClick={() => setSelectedNote(note)}
              className="p-6 rounded-2xl bg-[#141619] border border-white/10 hover:border-[#c98a3e]/50 cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl group"
            >
              <div className="space-y-3">
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <img
                    src={note.image}
                    alt={note.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#a8a49c]">
                  <span className="text-[#e0a358] uppercase font-bold">{note.categoryName}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#c98a3e]" />
                    {note.readingTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#e0a358] transition-colors leading-snug">
                  {note.title}
                </h3>

                <p className="font-sans text-xs text-[#a8a49c] line-clamp-3 leading-relaxed">
                  {note.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#d1c7b7]">
                <div className="flex items-center gap-1 text-[10px] text-[#a8a49c]">
                  <MapPin className="w-3 h-3 text-[#e0a358]" />
                  <span>{note.coordinates}</span>
                </div>
                <span className="text-[#e0a358] font-bold group-hover:translate-x-0.5 transition-transform">
                  READ LOG →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Selected Note Modal Reader */}
      {selectedNote && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="w-full max-w-3xl bg-[#111317] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 my-auto max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#c98a3e] text-black text-[10px] font-mono font-bold uppercase">
                  {selectedNote.categoryName}
                </span>
                <span className="font-mono text-xs text-[#a8a49c]">
                  {selectedNote.date}
                </span>
              </div>
              <button
                onClick={() => setSelectedNote(null)}
                className="text-xs font-mono text-[#a8a49c] hover:text-white px-3 py-1 rounded-full bg-white/10"
              >
                CLOSE [ESC]
              </button>
            </div>

            {/* Note Image */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
              <img
                src={selectedNote.image}
                alt={selectedNote.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Author */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#e0a358]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedNote.location} · {selectedNote.coordinates}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {selectedNote.title}
              </h2>
              <div className="text-xs font-mono text-[#a8a49c]">
                DISPATCH BY: <span className="text-white">{selectedNote.author}</span>
              </div>
            </div>

            {/* Note Content */}
            <div className="font-sans text-sm sm:text-base text-[#e5e2dc] leading-[1.8] font-light space-y-4 border-t border-white/10 pt-4">
              <p>{selectedNote.content}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#16181d] border border-white/10 flex items-center justify-between text-xs font-mono text-[#a8a49c]">
              <span>STATION TELEMETRY: LOGGED AND ENCRYPTED</span>
              <span>TERRA FIELD BUREAU</span>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
};
