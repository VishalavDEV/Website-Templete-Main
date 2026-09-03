import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { SOLUTIONS_DATA } from '../data/solutions';
import { FEATURES_DATA } from '../data/features';
import { CASE_STUDIES_DATA } from '../data/caseStudies';
import { INSIGHTS_DATA } from '../data/insights';
import {
  Search,
  X,
  Sparkles,
  ArrowRight,
  FileText,
  Workflow,
  Cpu,
  ShieldCheck,
  Building,
  Terminal
} from 'lucide-react';

interface SearchResultItem {
  id: string;
  type: 'solution' | 'feature' | 'case-study' | 'insight' | 'workflow' | 'section';
  title: string;
  category: string;
  description: string;
  dataRef?: any;
  action: () => void;
}

export const SearchCommand: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    setActiveSolutionModal,
    setActiveCaseStudyModal,
    setActiveArticleModal,
    setActiveFeatureModal,
    setIsConsultationModalOpen,
    setIsOperationsConsoleOpen,
    workflows
  } = useApp();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  // Index all searchable entities
  const allSearchItems: SearchResultItem[] = useMemo(() => {
    const items: SearchResultItem[] = [];

    // Sections
    const sections = [
      { id: 'sec-overview', title: 'Executive Overview', desc: 'Real-time metrics, live stats, and revenue pulse', target: 'overview' },
      { id: 'sec-dashboard', title: 'Interactive BI Dashboard', desc: 'Interactive charts, date filters, and AI insight generator', target: 'dashboard' },
      { id: 'sec-solutions', title: 'Strategic Solutions Matrix', desc: 'Enterprise AI, automation, cloud architecture & cyber defense', target: 'solutions' },
      { id: 'sec-ai', title: 'AI Assistant & Intelligence Layer', desc: 'Interactive natural language Q&A and predictive telemetry', target: 'ai-platform' },
      { id: 'sec-automation', title: 'Workflow Automation Builder', desc: 'Create, test, duplicate and orchestrate multi-agent pipelines', target: 'automation' },
      { id: 'sec-features', title: 'Platform Capabilities Grid', desc: 'Full-stack enterprise infrastructure & zero-trust sovereign cloud', target: 'features' },
      { id: 'sec-cases', title: 'Enterprise Case Studies', desc: 'Audited client implementations across FinTech, Health & Retail', target: 'case-studies' },
      { id: 'sec-about', title: 'About NEXORA & Company Timeline', desc: '15+ years of engineering innovation and historical milestones', target: 'about' },
      { id: 'sec-insights', title: 'Insights & Research Center', desc: 'Thought leadership on causal AI, agents & distributed data mesh', target: 'insights' },
      { id: 'sec-contact', title: 'Contact & Advisory Inquiries', desc: 'Global offices, direct channels, and consultation scheduling', target: 'contact' }
    ];

    sections.forEach(s => {
      items.push({
        id: s.id,
        type: 'section',
        title: s.title,
        category: 'Navigation',
        description: s.desc,
        action: () => {
          setIsSearchOpen(false);
          const el = document.getElementById(s.target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Solutions
    SOLUTIONS_DATA.forEach(sol => {
      items.push({
        id: `sol-${sol.id}`,
        type: 'solution',
        title: sol.title,
        category: `Solution: ${sol.category}`,
        description: sol.description,
        dataRef: sol,
        action: () => {
          setIsSearchOpen(false);
          setActiveSolutionModal(sol);
        }
      });
    });

    // Features
    FEATURES_DATA.forEach(f => {
      items.push({
        id: `feat-${f.id}`,
        type: 'feature',
        title: f.title,
        category: `Platform: ${f.category}`,
        description: f.shortDescription,
        dataRef: f,
        action: () => {
          setIsSearchOpen(false);
          setActiveFeatureModal(f);
        }
      });
    });

    // Case Studies
    CASE_STUDIES_DATA.forEach(cs => {
      items.push({
        id: `cs-${cs.id}`,
        type: 'case-study',
        title: `${cs.company} - ${cs.title}`,
        category: `Case Study: ${cs.industry}`,
        description: `ROI: ${cs.roi} | ${cs.summary}`,
        dataRef: cs,
        action: () => {
          setIsSearchOpen(false);
          setActiveCaseStudyModal(cs);
        }
      });
    });

    // Insights
    INSIGHTS_DATA.forEach(art => {
      items.push({
        id: `art-${art.id}`,
        type: 'insight',
        title: art.title,
        category: `Insight: ${art.category}`,
        description: `${art.readTime} | ${art.summary}`,
        dataRef: art,
        action: () => {
          setIsSearchOpen(false);
          setActiveArticleModal(art);
        }
      });
    });

    // Workflows
    workflows.forEach(w => {
      items.push({
        id: `wf-${w.id}`,
        type: 'workflow',
        title: w.name,
        category: `Workflow (${w.status.toUpperCase()})`,
        description: w.description,
        action: () => {
          setIsSearchOpen(false);
          const el = document.getElementById('automation');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Quick Command actions
    items.push({
      id: 'cmd-consult',
      type: 'section',
      title: 'Book a Strategy Consultation',
      category: 'Action',
      description: 'Schedule a tailored architecture & AI advisory session with our specialists',
      action: () => {
        setIsSearchOpen(false);
        setIsConsultationModalOpen(true);
      }
    });

    items.push({
      id: 'cmd-ops',
      type: 'section',
      title: 'Open Operations Console (Leads & Telemetry)',
      category: 'Admin / Console',
      description: 'Review simulated backend leads, audit logs, and export CSV reports',
      action: () => {
        setIsSearchOpen(false);
        setIsOperationsConsoleOpen(true);
      }
    });

    return items;
  }, [
    workflows,
    setIsSearchOpen,
    setActiveSolutionModal,
    setActiveCaseStudyModal,
    setActiveArticleModal,
    setActiveFeatureModal,
    setIsConsultationModalOpen,
    setIsOperationsConsoleOpen
  ]);

  // Filter items
  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return allSearchItems.slice(0, 8); // show top popular items
    }
    const q = query.toLowerCase();
    return allSearchItems.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [allSearchItems, query]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        filteredResults[selectedIndex].action();
      }
    }
  };

  if (!isSearchOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'solution':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'feature':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'case-study':
        return <Building className="w-4 h-4 text-indigo-400" />;
      case 'insight':
        return <FileText className="w-4 h-4 text-amber-400" />;
      case 'workflow':
        return <Workflow className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-[#0C0C12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search input bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/5 bg-[#08080A]">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search solutions, features, case studies, insights, workflows..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div ref={listRef} className="overflow-y-auto p-2 space-y-1 flex-1">
          {filteredResults.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              <Search className="w-8 h-8 mx-auto text-slate-600 mb-2" />
              <p className="text-sm font-medium">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for &lsquo;AI&rsquo;, &lsquo;FinTech&rsquo;, &lsquo;Automation&rsquo;, or &lsquo;Security&rsquo;</p>
            </div>
          ) : (
            filteredResults.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-indigo-500/15 border border-indigo-500/30 text-white'
                      : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="p-2 rounded-lg bg-[#08080A] border border-white/5 shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold truncate">{item.title}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10 shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{item.description}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-indigo-400 translate-x-0.5' : 'text-slate-600'
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#08080A] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              Navigate <kbd className="px-1 py-0.5 bg-white/5 border border-white/10 rounded font-mono">↑</kbd>{' '}
              <kbd className="px-1 py-0.5 bg-white/5 border border-white/10 rounded font-mono">↓</kbd>
            </span>
            <span>
              Select <kbd className="px-1 py-0.5 bg-white/5 border border-white/10 rounded font-mono">↵</kbd>
            </span>
            <span>
              Close <kbd className="px-1 py-0.5 bg-white/5 border border-white/10 rounded font-mono">ESC</kbd>
            </span>
          </div>
          <span className="text-indigo-400/80 font-mono">{filteredResults.length} index matches</span>
        </div>
      </div>
    </div>
  );
};
