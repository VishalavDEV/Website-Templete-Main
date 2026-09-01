import React from 'react';
import { Link } from 'react-router-dom';
import { authors } from '../../data/authors';
import { Quote, ArrowRight } from 'lucide-react';

export function OpinionColumnists() {
  const opinions = [
    {
      author: authors[0], // Elena
      headline: 'The fetishization of smart glass is blinding us to passive thermal physics.',
      category: 'Architecture Critique',
      articleSlug: 'sacred-minimalism-kyoto',
    },
    {
      author: authors[1], // Marcus
      headline: 'Synthesized intelligence creates frictionless consensus at the cost of original heresy.',
      category: 'Technology & Mind',
      articleSlug: 'ai-epistemic-frontiers',
    },
    {
      author: authors[4], // Clara
      headline: 'When everything can be 3D printed overnight, human error becomes the sole luxury.',
      category: 'Craft Philosophy',
      articleSlug: 'nordic-textiles-craft',
    },
  ];

  return (
    <section className="my-12 py-8 bg-[#F4F1EA] border-y-2 border-[#141413] px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 border-b border-[#D1CDC4] pb-3">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#141413]"></span>
            <h3 className="font-serif-headline text-xl md:text-2xl font-bold uppercase tracking-tight text-[#141413]">
              Columns & Viewpoints
            </h3>
          </div>
          <span className="text-xs font-mono text-[#73736C] uppercase tracking-wider">
            Critical Perspectives
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opinions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-[#E8E5DC] shadow-xs flex flex-col justify-between group hover:border-[#141413] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#D43825]">
                    {item.category}
                  </span>
                  <Quote className="w-5 h-5 text-[#D1CDC4] group-hover:text-[#D43825] transition-colors" />
                </div>

                <Link to={`/article/${item.articleSlug}`}>
                  <p className="font-serif-reading text-lg italic text-[#141413] group-hover:text-[#D43825] transition-colors leading-snug mb-6">
                    "{item.headline}"
                  </p>
                </Link>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#E8E5DC]">
                <Link to={`/author/${item.author.id}`}>
                  <img
                    src={item.author.avatar}
                    alt={item.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#D1CDC4]"
                  />
                </Link>
                <div>
                  <Link
                    to={`/author/${item.author.id}`}
                    className="text-xs font-bold text-[#141413] hover:underline block"
                  >
                    {item.author.name}
                  </Link>
                  <span className="text-[0.6875rem] text-[#73736C] block">
                    {item.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
