import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Reveal } from '../ui/Reveal';

export const PricingPreview: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-24 bg-[var(--surface-color)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <SectionHeading
          number="06"
          badge="TRANSPARENT ENGAGEMENT"
          title="TRANSPARENT SPRINT TIERS. ZERO HIDDEN FEES."
          align="split"
          description="Choose a predictable sprint model tailored for high-growth tech startups and established global brands."
        />

        {/* Monthly / Annual Toggle Control */}
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

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isRec = plan.recommended;

            return (
              <Reveal key={plan.id} direction="up" delay={index * 0.1} className="h-full">
                <div
                  className={`relative h-full flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 ${
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
                      <p className="text-xs text-[var(--secondary-color)] leading-relaxed mt-3">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-color)] block">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2 text-xs text-[var(--text-color)]">
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

        <div className="text-center pt-4">
          <Button href="/pricing" variant="text">
            Compare All Features & Enterprise Matrix →
          </Button>
        </div>
      </div>
    </section>
  );
};
