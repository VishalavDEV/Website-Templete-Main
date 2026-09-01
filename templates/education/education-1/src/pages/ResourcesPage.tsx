import React, { useState } from 'react';
import { PageId } from '../types';
import { RESOURCES_DATA } from '../data/edupathData';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';
import { GradientText } from '../components/reactbits/GradientText';
import {
  FolderDown,
  Download,
  Star,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResourcesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<string>('All');

  const formats = ['All', 'PDF', 'Figma', 'Notion', 'GitHub', 'Interactive'];

  const handleDownload = (id: string) => {
    setDownloadedIds((prev) => [...prev, id]);
    try {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    } catch (e) {}
  };

  const filteredResources = RESOURCES_DATA.filter(
    (res) => selectedFormat === 'All' || res.format === selectedFormat
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider border border-indigo-200">
            <FolderDown className="w-3.5 h-3.5" />
            <span>OPEN ACADEMIC & ENGINEERING VAULT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
            Free Developer & Design{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Resources
            </GradientText>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Production cheat sheets, tokenized Figma design systems, engineering templates, and algorithmic playbooks curated by faculty.
          </p>
        </div>
      </section>

      {/* Resource Cards & Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Format selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {formats.map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSelectedFormat(fmt)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFormat === fmt
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {fmt === 'All' ? 'All Asset Formats' : `${fmt} Files`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => {
            const isDownloaded = downloadedIds.includes(res.id);
            return (
              <SpotlightCard
                key={res.id}
                spotlightColor="rgba(99, 102, 241, 0.08)"
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-5 text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-mono font-bold uppercase rounded-md border border-indigo-200">
                      {res.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded">
                      {res.format}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {res.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 font-mono text-[11px]">
                    <span>By {res.author}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{res.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    {res.downloadsCount.toLocaleString()} downloads
                  </span>

                  {isDownloaded ? (
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Downloaded!</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDownload(res.id)}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Free</span>
                    </button>
                  )}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>
    </div>
  );
};
