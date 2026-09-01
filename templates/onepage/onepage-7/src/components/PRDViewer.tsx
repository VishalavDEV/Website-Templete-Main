import React, { useState } from 'react';
import { PRD_SECTIONS, PRD_METADATA, PRD_MARKDOWN_EXPORT } from '../data/prdContent';
import { PRDSection } from '../types';
import { 
  FileText, 
  Copy, 
  Check, 
  Download, 
  Search, 
  Sparkles, 
  Layers, 
  Zap, 
  Eye, 
  Cpu, 
  CheckCircle2, 
  Sliders,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const PRDViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | '3d-artists' | 'designers' | 'developers'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'executive-summary': true,
    'visual-direction': true,
    'motion-interaction': true,
    'page-structure': true,
    'technical-performance': true,
    'differentiation': true,
  });

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(PRD_MARKDOWN_EXPORT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([PRD_MARKDOWN_EXPORT], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `FONIX_PRD_DOCUMENT_v1.0.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Filter sections based on discipline tab and search term
  const filteredSections = PRD_SECTIONS.filter(section => {
    const matchesAudience = activeTab === 'all' || section.audience === activeTab || section.audience === 'all';
    const matchesSearch = 
      searchQuery === '' ||
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.some(c => 
        c.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.paragraphs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesAudience && matchesSearch;
  });

  return (
    <div id="prd-master-document-view" className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-zinc-200">
      {/* PRD Header Banner */}
      <div className="bg-[#050505]/85 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-3xl shadow-[0_0_80px_rgba(45,212,191,0.1)] relative overflow-hidden mb-8">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-teal-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-mono font-semibold uppercase tracking-[0.2em] rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                <FileText className="w-3.5 h-3.5" />
                Official Studio PRD
              </span>
              <span className="px-2.5 py-0.5 bg-white/[0.06] border border-white/15 text-zinc-300 text-xs font-mono rounded-full">
                {PRD_METADATA.version}
              </span>
              <span className="px-2.5 py-0.5 bg-teal-500/10 border border-teal-400/20 text-teal-300 text-xs font-medium font-mono rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-teal-400" />
                {PRD_METADATA.status}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {PRD_METADATA.title}
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
              {PRD_METADATA.tagline} — Detailed architectural design brief and technical blueprint for AI Studio implementation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-center">
            <button
              onClick={handleCopyMarkdown}
              id="copy-prd-markdown-btn"
              className="flex items-center gap-2 px-5 py-2.5 bg-teal-400 hover:bg-teal-300 text-black font-bold rounded-xl text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(45,212,191,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              {copied ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4 text-black" />}
              <span>{copied ? 'PRD Copied to Clipboard!' : 'Copy Full PRD (Markdown)'}</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              id="download-prd-file-btn"
              className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-medium rounded-xl text-xs sm:text-sm transition-all"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>Download .md</span>
            </button>
          </div>
        </div>

        {/* PRD Metadata Quick Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-white/10 text-xs font-mono">
          <div>
            <span className="text-zinc-500 block">Target Studio</span>
            <span className="text-zinc-200 font-medium">{PRD_METADATA.targetStudio}</span>
          </div>
          <div>
            <span className="text-zinc-500 block">Author & Discipline</span>
            <span className="text-zinc-200 font-medium">{PRD_METADATA.author}</span>
          </div>
          <div>
            <span className="text-zinc-500 block">Target Timeline</span>
            <span className="text-zinc-200 font-medium">{PRD_METADATA.targetDate}</span>
          </div>
          <div>
            <span className="text-zinc-500 block">Document Scope</span>
            <span className="text-zinc-200 font-medium">6 Comprehensive Sections</span>
          </div>
        </div>
      </div>

      {/* Control Bar: Discipline Filters & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Audience Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#050505]/80 border border-white/15 rounded-2xl w-full sm:w-auto overflow-x-auto backdrop-blur-2xl">
          {[
            { id: 'all', label: 'Complete PRD', icon: BookOpen },
            { id: '3d-artists', label: '3D Art & Shaders', icon: Eye },
            { id: 'designers', label: 'Motion & UX', icon: Zap },
            { id: 'developers', label: 'WebGL & Engineering', icon: Cpu },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white/[0.1] text-teal-300 shadow-sm border border-teal-400/30'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Field */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search specs, shaders, metrics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[#050505]/80 border border-white/15 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-teal-400/60 transition-colors backdrop-blur-2xl font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Quick Visual Tokens Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-teal-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
            <span>Core Color Tokens</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-[10px] text-center font-mono">
            <div className="bg-[#050505] border border-white/15 p-2 rounded-lg text-zinc-400">#050505<br/><span className="text-[9px] text-zinc-500">Obsidian</span></div>
            <div className="bg-[#2DD4BF] p-2 rounded-lg text-black font-bold">#2DD4BF<br/><span className="text-[9px] text-zinc-900">Lumens</span></div>
            <div className="bg-[#A855F7] p-2 rounded-lg text-white font-bold">#A855F7<br/><span className="text-[9px] text-zinc-100">Nebula</span></div>
            <div className="bg-[#F59E0B] p-2 rounded-lg text-black font-bold">#F59E0B<br/><span className="text-[9px] text-zinc-900">Amber</span></div>
          </div>
        </div>

        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <span>Target WebGL Performance</span>
          </div>
          <div className="flex justify-between items-center text-xs font-mono bg-black/60 p-2.5 rounded-lg border border-white/10">
            <div>
              <span className="text-teal-400 font-bold block">60 FPS</span>
              <span className="text-[10px] text-zinc-500">&lt;11ms frame</span>
            </div>
            <div>
              <span className="text-purple-300 font-bold block">&lt;240 KB</span>
              <span className="text-[10px] text-zinc-500">3D Payload</span>
            </div>
            <div>
              <span className="text-amber-400 font-bold block">&lt;14</span>
              <span className="text-[10px] text-zinc-500">Draw Calls</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <span>Motion Core Signature</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            <strong className="text-white">Viscoelastic Inertia</strong> with 432Hz harmonic dampening and continuous spatial background thread across all sections.
          </p>
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-6">
        {filteredSections.map((section) => {
          const isExpanded = expandedSections[section.id] ?? true;
          return (
            <div
              key={section.id}
              id={`prd-section-${section.id}`}
              className="bg-[#050505]/80 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-3xl transition-all shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              {/* Section Header Accordion */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-white/[0.06] text-teal-300 text-[11px] font-mono font-semibold rounded-lg uppercase tracking-widest border border-white/10">
                    {section.badge}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-500 hidden sm:inline">{isExpanded ? 'Collapse' : 'Expand'}</span>
                  <div className={`w-6 h-6 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-zinc-400 text-xs transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </div>
                </div>
              </button>

              {/* Section Content */}
              {isExpanded && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/10 space-y-6 text-sm text-zinc-300">
                  <p className="text-zinc-400 italic text-xs leading-relaxed border-l-2 border-teal-400/50 pl-3">
                    {section.summary}
                  </p>

                  {section.content.map((block, idx) => (
                    <div key={idx} className="space-y-4 pt-2">
                      <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
                        {block.heading}
                      </h3>

                      {block.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="leading-relaxed text-zinc-300 font-normal">
                          {p}
                        </p>
                      ))}

                      {/* Specs Table */}
                      {block.specs && block.specs.length > 0 && (
                        <div className="bg-black/60 rounded-2xl border border-white/10 overflow-hidden my-4">
                          <table className="w-full text-xs text-left">
                            <thead className="bg-white/[0.04] text-zinc-400 font-mono border-b border-white/10">
                              <tr>
                                <th className="py-2.5 px-4">Parameter / Property</th>
                                <th className="py-2.5 px-4">Requirement / Value</th>
                                <th className="py-2.5 px-4">Implementation Notes</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 font-sans">
                              {block.specs.map((spec, sIdx) => (
                                <tr key={sIdx} className="hover:bg-white/[0.02]">
                                  <td className="py-2.5 px-4 font-medium text-white">{spec.label}</td>
                                  <td className="py-2.5 px-4 font-mono text-teal-300 font-semibold">{spec.value}</td>
                                  <td className="py-2.5 px-4 text-zinc-400">{spec.note || '—'}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Bullet points */}
                      {block.bulletPoints && block.bulletPoints.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                          {block.bulletPoints.map((bp, bpIdx) => (
                            <div key={bpIdx} className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl space-y-1">
                              <h4 className="font-semibold text-zinc-200 text-xs flex items-center gap-1.5">
                                <span className="text-teal-400 font-bold">▪</span>
                                {bp.title}
                              </h4>
                              <p className="text-xs text-zinc-400 leading-relaxed">
                                {bp.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Callout box */}
                      {block.callout && (
                        <div className="p-4 bg-teal-950/20 border border-teal-400/30 rounded-2xl text-xs text-teal-200 flex items-start gap-2.5 my-3 shadow-[0_0_20px_rgba(45,212,191,0.08)]">
                          <Sparkles className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <p className="leading-relaxed">{block.callout.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
