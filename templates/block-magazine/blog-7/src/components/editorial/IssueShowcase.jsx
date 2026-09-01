import React, { useState } from 'react';
import { issues } from '../../data/issues';
import { ShoppingBag, Sparkles, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useMagazine } from '../../context/MagazineContext';

export function IssueShowcase() {
  const currentIssue = issues[0];
  const { showToast } = useMagazine();
  const [activeTab, setActiveTab] = useState('toc'); // 'toc' | 'specs'

  const handleOrder = (type) => {
    showToast(`Added ${currentIssue.number} (${type}) to checkout order.`);
  };

  return (
    <section className="my-20 bg-white border-2 border-[#141413] p-6 sm:p-10 md:p-12 shadow-md relative overflow-hidden">
      {/* Decorative Gold Header Tag */}
      <div className="absolute top-0 right-0 bg-[#C28B38] text-white text-[0.625rem] font-mono font-bold uppercase tracking-widest px-4 py-1">
        Biannual Print Archive
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: Magazine 3D Cover Display with Realistic Spine & Lighting */}
        <div className="lg:col-span-5 flex justify-center magazine-3d-wrap py-4">
          <div className="relative group max-w-[300px] w-full">
            <div className="magazine-3d-book relative aspect-[3/4] overflow-hidden bg-[#141413] border-2 border-[#141413]">
              <img
                src={currentIssue.coverImage}
                alt={currentIssue.title}
                className="w-full h-full object-cover"
              />

              {/* Cover Masthead Header Overlay */}
              <div className="absolute top-4 left-4 right-4 text-center bg-white/95 backdrop-blur-xs py-2 px-3 border border-[#141413] shadow-xs">
                <span className="font-serif-headline text-lg font-black uppercase tracking-widest text-[#141413] block">
                  THE BLOG OBSERVER
                </span>
                <span className="text-[0.65rem] uppercase font-bold tracking-widest text-[#D43825] block">
                  {currentIssue.number} &bull; {currentIssue.season}
                </span>
              </div>

              {/* Cover Bottom Foil Title Stamp */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#141413]/90 text-white p-3.5 text-left border-t border-white/20">
                <span className="text-[0.625rem] uppercase font-mono tracking-widest text-[#C28B38] block mb-0.5">
                  ✦ Special Folio Edition
                </span>
                <span className="font-serif-headline text-sm font-bold block leading-snug">
                  {currentIssue.title}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Issue Details & Clean Structured Table */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-[#D43825] text-xs font-bold uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Print Edition Vol. 48 &bull; Available Worldwide</span>
            </div>
            <h2 className="font-serif-headline text-2xl sm:text-3xl md:text-4xl font-black text-[#141413] leading-tight">
              {currentIssue.title}
            </h2>
            <p className="text-sm text-[#52524E] mt-3 leading-relaxed font-serif-reading text-[1.125rem]">
              {currentIssue.tagline}
            </p>
          </div>

          {/* Tab Switcher (Folio Contents / Print Specs) */}
          <div className="border border-[#E8E5DC] bg-[#FAF9F5]">
            <div className="flex items-center border-b border-[#E8E5DC] text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => setActiveTab('toc')}
                className={`flex-1 py-2.5 text-center transition-colors cursor-pointer ${
                  activeTab === 'toc'
                    ? 'bg-white text-[#141413] border-b-2 border-[#D43825]'
                    : 'text-[#73736C] hover:text-[#141413]'
                }`}
              >
                Table of Contents ({currentIssue.tableOfContents.length} Folios)
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`flex-1 py-2.5 text-center transition-colors cursor-pointer ${
                  activeTab === 'specs'
                    ? 'bg-white text-[#141413] border-b-2 border-[#D43825]'
                    : 'text-[#73736C] hover:text-[#141413]'
                }`}
              >
                Physical Printing Specs
              </button>
            </div>

            <div className="p-0 overflow-x-auto">
              {activeTab === 'toc' ? (
                <table className="editorial-table m-0">
                  <thead>
                    <tr>
                      <th className="w-16">Folio</th>
                      <th>Article Title</th>
                      <th className="text-right">Contributing Critic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentIssue.tableOfContents.map((toc, idx) => (
                      <tr key={idx}>
                        <td className="font-mono text-[#D43825] font-extrabold text-xs whitespace-nowrap">
                          p.{toc.page}
                        </td>
                        <td className="font-serif-headline font-bold text-[#141413]">
                          {toc.title}
                        </td>
                        <td className="text-right font-mono text-[0.6875rem] text-[#73736C] whitespace-nowrap">
                          {toc.author}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="editorial-table m-0">
                  <thead>
                    <tr>
                      <th className="w-1/3">Specification</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-[#141413]">Dimensions</td>
                      <td className="font-mono text-xs">230 x 300 mm, 240 Pages, Perfect Bound</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-[#141413]">Paper Stock</td>
                      <td className="font-mono text-xs">140gsm Munken Lynx Uncoated Rough FSC Certified</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-[#141413]">Printing Process</td>
                      <td className="font-mono text-xs">Offset Lithography with Metallic Foil Stamping (Bruges, Belgium)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-[#141413]">Global Dispatch</td>
                      <td className="font-mono text-xs">Carbon-neutral worldwide shipping in custom linen sleeves</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Pricing & CTA Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#E8E5DC]">
            <div className="text-xs font-mono text-[#73736C]">
              <span className="text-[#141413] font-black text-xl">{currentIssue.price}</span>
              <span className="mx-2">&bull;</span>
              <span>Free global priority shipping</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleOrder('Digital PDF Folio')}
                className="px-4 py-2.5 border border-[#141413] bg-white text-[#141413] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF9F5] transition-colors cursor-pointer"
              >
                Digital Edition ($12)
              </button>
              <button
                onClick={() => handleOrder('Print Edition Softcover')}
                className="px-6 py-2.5 bg-[#141413] text-[#FAF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#D43825] transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Print Copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
