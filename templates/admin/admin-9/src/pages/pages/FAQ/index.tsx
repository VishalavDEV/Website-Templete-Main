import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { PageHeader } from '../../../components/common';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
  category: 'core' | 'security' | 'billing';
}

export default function FAQPage() {
  const [qQuery, setQQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'security' | 'billing'>('all');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    { q: 'How do we synchronize the Wayne Staging database clusters?', a: 'Navigate to the Projects or Database Dashboard, ensure your SSH keys are authenticated, and click Sync Database Caches.', category: 'core' },
    { q: 'Where can we verify VAT tax numbers for client billing?', a: 'VAT and invoicing settings can be set inside FormSections components or reviewed under Invoices pages.', category: 'billing' },
    { q: 'What is class-3 security clearance on credential keychains?', a: 'Class-3 security restricts access to SSL private pem keys, allowing only Administrators to delete or revoke active credential nodes.', category: 'security' }
  ];

  const filteredFaqs = faqs.filter(f => {
    const matchesCat = activeCategory === 'all' || f.category === activeCategory;
    const matchesQ = f.q.toLowerCase().includes(qQuery.toLowerCase()) || f.a.toLowerCase().includes(qQuery.toLowerCase());
    return matchesCat && matchesQ;
  });

  return (
    <div className="space-y-6 select-none max-w-4xl mx-auto">
      <PageHeader title="Knowledge Base FAQ" subtitle="Browse categorizations, search topics, and expand typical accordion answers." />

      {/* Search Header */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input 
          type="search" 
          placeholder="Search staging queries, security questions..." 
          value={qQuery}
          onChange={(e) => setQQuery(e.target.value)}
          className="w-full text-xs h-10 pl-11 pr-4 rounded-xl border border-border bg-card text-foreground focus:outline-none" 
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Category Sidebar */}
        <div className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1 shadow-sm h-fit">
          {(['all', 'core', 'security', 'billing'] as const).map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground hover:bg-accent/40'
              }`}
            >
              <span className="capitalize">{cat === 'all' ? 'All Questions' : cat}</span>
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="lg:col-span-3 space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border border-border bg-card rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-xs font-bold text-foreground text-left cursor-pointer hover:bg-accent/10"
                >
                  <span className="flex items-center gap-2"><HelpCircle className="h-4.5 w-4.5 text-primary shrink-0" /> {faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-muted-foreground border-t border-border/40 leading-relaxed bg-muted/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
