import React, { useState } from 'react';
import { servicesData } from '../data/services';
import { Plus, Minus, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string>('ux-research');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="space-y-4">
      {servicesData.map((service) => {
        const isOpen = openId === service.id;

        return (
          <div
            key={service.id}
            id={service.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'border-blue-600 dark:border-blue-500 bg-white dark:bg-neutral-900 shadow-xl'
                : 'border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 hover:border-neutral-400'
            }`}
          >
            {/* Header Trigger */}
            <button
              onClick={() => toggleAccordion(service.id)}
              className="flex w-full items-center justify-between p-6 md:p-8 text-left transition-colors"
            >
              <div className="flex items-center space-x-4 md:space-x-8">
                <span className="font-mono text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-neutral-500 font-light hidden sm:block">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </div>
            </button>

            {/* Expandable Content */}
            {isOpen && (
              <div className="px-6 pb-8 md:px-8 md:pb-8 pt-2 border-t border-neutral-100 dark:border-neutral-800/80 animate-slide-down">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                      {service.description}
                    </p>

                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                        SERVICE DELIVERABLES:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 font-medium">
                        {service.deliverables.map((deliv) => (
                          <li key={deliv} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="font-mono text-[10px] uppercase text-neutral-400 font-bold mr-2">
                        TECH & TOOLS:
                      </span>
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 font-mono text-[11px] text-neutral-700 dark:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center space-x-2 rounded-full bg-blue-600 text-white px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-500 transition-colors shadow-md"
                      >
                        <span>Request {service.title} Proposal</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded font-mono text-xs text-blue-400 font-bold">
                      BENCHMARK: {service.metric}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
