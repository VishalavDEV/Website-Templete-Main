import React, { useState } from 'react';
import { pricingPlans, featureComparisonMatrix } from '../data/pricing';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Reveal } from '../components/ui/Reveal';
import { Check, X, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="space-y-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <Breadcrumb items={[{ label: 'Pricing & Plans' }]} />

        <Reveal direction="up">
          <div className="space-y-6">
            <Badge variant="accent">TRANSPARENT SPRINT INVESTMENT</Badge>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display max-w-5xl leading-none">
              PREDICTABLE ENGAGEMENT TIERS. NO HIDDEN SURPRISES.
            </h1>
            <p className="text-lg md:text-2xl text-[var(--secondary-color)] leading-relaxed font-light max-w-3xl">
              Choose a focused sprint plan or ongoing studio retainer model engineered for rapid deployment.
            </p>
          </div>
        </Reveal>

        {/* Billing Toggle */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold uppercase tracking-wider ${!isAnnual ? 'text-[var(--text-color)]' : 'text-[var(--secondary-color)]'}`}>
              Monthly Billing
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle Monthly or Annual Billing"
              className="relative w-16 h-8 rounded-full p-1 bg-[var(--card-bg)] border border-[var(--border-color)] transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[var(--accent-color)] shadow-md transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold uppercase tracking-wider ${isAnnual ? 'text-[var(--text-color)]' : 'text-[var(--secondary-color)]'}`}>
                Annual Billing
              </span>
              <Badge variant="accent" size="sm">
                Save 20%
              </Badge>
            </div>
          </div>
        </Reveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isRec = plan.recommended;

            return (
              <Reveal key={plan.id} direction="up" delay={idx * 0.1} className="h-full">
                <div
                  className={`relative h-full flex flex-col justify-between p-8 md:p-10 rounded-3xl transition-all duration-300 ${
                    isRec
                      ? 'bg-[var(--card-bg)] border-2 border-[var(--accent-color)] shadow-2xl md:scale-105 z-10'
                      : 'bg-[var(--card-bg)]/50 border border-[var(--border-color)] hover:border-[var(--text-color)]'
                  }`}
                >
                {isRec && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="accent" size="md">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Most Popular Choice</span>
                    </Badge>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold uppercase text-[var(--text-color)] font-display">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[var(--secondary-color)] font-mono mt-1">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="py-4 border-y border-[var(--border-color)]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-black text-[var(--text-color)] font-display">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs font-mono text-[var(--secondary-color)]">
                        / month {isAnnual ? '(billed annually)' : ''}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--secondary-color)] leading-relaxed mt-3 font-light">
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-color)] block">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2.5 text-xs text-[var(--text-color)]">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    href="/contact"
                    variant={isRec ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            </Reveal>
          );
          })}
        </div>

        {/* Feature Comparison Matrix Table */}
        <Reveal direction="up">
          <div className="space-y-8 pt-12">
            <SectionHeading
              number="01"
              badge="FEATURE MATRIX"
              title="SIDE-BY-SIDE FEATURE COMPARISON."
              align="split"
              description="Full breakdown of capabilities, SLAs, dedicated partner availability, and codebase handoffs across all engagement tiers."
            />

            <div className="overflow-x-auto rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-[var(--border-color)] bg-[var(--surface-color)] text-xs font-mono uppercase text-[var(--accent-color)]">
                    <th className="p-6">Feature / Capability</th>
                    <th className="p-6">Starter Plan</th>
                    <th className="p-6">Growth Plan</th>
                    <th className="p-6">Signature Plan</th>
                  </tr>
                </thead>
              <tbody className="divide-y divide-[var(--border-color)] text-sm">
                {featureComparisonMatrix.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-[var(--bg-color)]/60">
                      <td colSpan={4} className="p-4 px-6 text-xs font-mono uppercase font-bold text-[var(--text-color)] tracking-wider">
                        // {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((f, fIdx) => (
                      <tr key={fIdx} className="hover:bg-[var(--surface-color)]/50 transition-colors">
                        <td className="p-6 text-[var(--text-color)] font-medium">{f.name}</td>
                        <td className="p-6 text-[var(--secondary-color)] font-mono text-xs">
                          {typeof f.starter === 'boolean' ? (
                            f.starter ? <Check className="w-4 h-4 text-[var(--accent-color)]" /> : <X className="w-4 h-4 text-rose-500 opacity-40" />
                          ) : (
                            f.starter
                          )}
                        </td>
                        <td className="p-6 text-[var(--secondary-color)] font-mono text-xs">
                          {typeof f.growth === 'boolean' ? (
                            f.growth ? <Check className="w-4 h-4 text-[var(--accent-color)]" /> : <X className="w-4 h-4 text-rose-500 opacity-40" />
                          ) : (
                            f.growth
                          )}
                        </td>
                        <td className="p-6 text-[var(--secondary-color)] font-mono text-xs font-bold text-[var(--accent-color)]">
                          {typeof f.signature === 'boolean' ? (
                            f.signature ? <Check className="w-4 h-4 text-[var(--accent-color)]" /> : <X className="w-4 h-4 text-rose-500 opacity-40" />
                          ) : (
                            f.signature
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </div>

      <FAQSection />
      <FinalCTA />
    </div>
  );
};
