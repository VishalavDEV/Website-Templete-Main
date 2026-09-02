import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  X, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import { HubArticle, FAQItem, NavigationTab } from '../../types';

interface HealthHubContentProps {
  articles: HubArticle[];
  faqs: FAQItem[];
  onNavigate: (tab: NavigationTab) => void;
  selectedArticle: HubArticle | null;
  onSelectArticle: (article: HubArticle | null) => void;
}

export const HealthHubContent: React.FC<HealthHubContentProps> = ({
  articles,
  faqs,
  onNavigate,
  selectedArticle,
  onSelectArticle,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = [
    'All',
    'Preventive Healthcare',
    'Cardiology',
    'Mental Health',
    'Metabolic Health',
    'Longevity',
    'Sleep Science',
  ];

  const filteredArticles = (articles || []).filter(art => {
    if (!art) return false;
    const cat = art.category || '';
    const title = art.title || '';
    const desc = art.description || '';
    const tags = Array.isArray(art.tags) ? art.tags : [];
    const query = (searchQuery || '').toLowerCase();
    const selCat = (selectedCategory || 'All').toLowerCase();

    const matchesCat = selectedCategory === 'All' || cat.toLowerCase().includes(selCat);
    const matchesSearch = title.toLowerCase().includes(query) ||
                          desc.toLowerCase().includes(query) ||
                          tags.some(t => typeof t === 'string' && t.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-10 pb-16">
      
      {/* Banner */}
      <div className="bg-[#2D2A26] text-white p-8 rounded-3xl border border-[#E5E2D9]/30 relative overflow-hidden shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5E7153]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#5E7153]/30 border border-[#A3B18A]/40 text-[#E5E2D9] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-[#A3B18A]" />
            <span>Peer-Reviewed Clinical Health Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] tracking-tight text-white">
            Evidence-Based Health Knowledge
          </h1>
          <p className="text-sm text-[#E5E2D9]/85 leading-relaxed">
            Understand your biology, navigate preventative protocols, and debunk wellness myths with clinical literature authored by leading physicians.
          </p>
        </div>
      </div>

      {/* 1. Search & Categories Filter */}
      <div className="bg-white p-4 rounded-2xl border border-[#E5E2D9] shadow-xs space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-[#7A766F] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search health articles, clinical topics, or longevity guides (e.g. Zone-2, Fasting glucose, REM sleep)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-[#F9F8F6] border border-[#E5E2D9] rounded-xl text-xs sm:text-sm text-[#2D2A26] focus:bg-white focus:border-[#5E7153] outline-none transition-colors"
          />
        </div>

        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#5E7153] text-white shadow-xs'
                  : 'bg-[#F9F8F6] text-[#2D2A26] border border-[#E5E2D9] hover:bg-[#F1F3EE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((art) => (
          <div
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="bg-white rounded-3xl border border-[#E5E2D9] overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-48 overflow-hidden bg-[#F9F8F6]">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#2D2A26] border border-[#E5E2D9]">
                  {art.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2 text-[10px] text-[#7A766F] font-medium">
                  <Clock className="w-3 h-3 text-[#7A766F]" />
                  <span>{art.readTime}</span>
                  <span>•</span>
                  <span>{art.date}</span>
                </div>

                <h3 className="text-base font-bold text-[#2D2A26] group-hover:text-[#5E7153] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-[#7A766F] line-clamp-2 leading-relaxed">
                  {art.description}
                </p>

                {/* Author row */}
                <div className="pt-2 flex items-center space-x-2.5 border-t border-[#E5E2D9]">
                  <img 
                    src={art.author.avatar} 
                    alt={art.author.name} 
                    className="w-7 h-7 rounded-full object-cover border border-[#E5E2D9]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#2D2A26]">{art.author.name}</div>
                    <div className="text-[10px] text-[#7A766F]">{art.author.role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-5 pt-1 flex items-center justify-between text-xs font-bold text-[#5E7153]">
              <span>Read Full Clinical Guide</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#5E7153]" />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Frequently Asked Health Questions Accordion */}
      <div className="bg-white rounded-3xl border border-[#E5E2D9] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 bg-[#F1F3EE] text-[#5E7153] border border-[#E5E2D9] rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2D2A26] font-['Outfit',sans-serif]">
              Frequently Asked Health & Service Questions
            </h2>
            <p className="text-xs text-[#7A766F]">Clarifications on tele-consultations, lab results, and pharmacy delivery</p>
          </div>
        </div>

        <div className="divide-y divide-[#E5E2D9]">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={faq.id} className="py-4">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left text-sm font-bold text-[#2D2A26] hover:text-[#5E7153] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#7A766F]">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#5E7153] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#7A766F] shrink-0" />}
                </button>

                {isOpen && (
                  <p className="text-xs text-[#7A766F] mt-2.5 leading-relaxed pl-6 animate-in fade-in">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E5E2D9] overflow-hidden max-h-[88vh] flex flex-col">
            
            {/* Header Image */}
            <div className="relative h-56 bg-[#2D2A26] shrink-0">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover opacity-85" />
              <button
                onClick={() => onSelectArticle(null)}
                className="absolute top-4 right-4 p-2 bg-[#2D2A26]/80 text-white rounded-full hover:bg-[#2D2A26] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#5E7153] rounded text-white">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif] mt-1 text-white drop-shadow-sm">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#2D2A26] text-xs sm:text-sm">
              
              {/* Author & Verification */}
              <div className="flex items-center justify-between p-3 bg-[#F1F3EE] rounded-2xl border border-[#E5E2D9] text-xs">
                <div className="flex items-center space-x-2.5">
                  <img src={selectedArticle.author.avatar} alt={selectedArticle.author.name} className="w-8 h-8 rounded-full object-cover border border-[#E5E2D9]" />
                  <div>
                    <div className="font-bold text-[#2D2A26]">{selectedArticle.author.name}</div>
                    <div className="text-[10px] text-[#7A766F]">{selectedArticle.author.role}</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#5E7153] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5E7153]" /> Medically Reviewed
                </span>
              </div>

              {/* Key Takeaways Box */}
              <div className="p-4 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9] space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2A26]">
                  Key Clinical Takeaways
                </h4>
                <ul className="space-y-1.5 text-xs text-[#7A766F]">
                  {selectedArticle.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5E7153] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Markdown / Article paragraphs */}
              <div className="space-y-3 leading-relaxed text-[#2D2A26]">
                {(selectedArticle.content || '').split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Consult related doctor CTA */}
              <div className="p-4 bg-[#2D2A26] text-white rounded-2xl flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-sm font-['Outfit',sans-serif] text-white">Have questions regarding this topic?</h5>
                  <p className="text-xs text-[#E5E2D9]/80 mt-0.5">Schedule a video consultation with {selectedArticle.author.name}.</p>
                </div>
                <button
                  onClick={() => {
                    onSelectArticle(null);
                    onNavigate('appointments');
                  }}
                  className="px-4 py-2 bg-[#5E7153] hover:bg-[#4D5E44] text-white font-bold rounded-xl text-xs shadow-sm transition-colors shrink-0 cursor-pointer"
                >
                  Book Visit
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
