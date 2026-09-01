import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';
import { Search, Filter, Inbox } from 'lucide-react';

export default function SearchResultsPage() {
  const [query, setQuery] = useState('staging');
  const [filterType, setFilterType] = useState<'all' | 'keychains' | 'database'>('all');

  const results = [
    { id: '1', title: 'Staging DB Sync scripts audit', type: 'database', desc: 'Audit staging database caches. Access keys synced with Wayne Enterprises.', date: 'Aug 19, 2026' },
    { id: '2', title: 'MFA login keychains credential setup', type: 'keychains', desc: 'Secure token authentication requirements for staff portal access.', date: 'Aug 18, 2026' },
    { id: '3', title: 'Staging SSL credentials failure', type: 'keychains', desc: 'SSL expiration reports on primary staging certificates.', date: 'Aug 17, 2026' }
  ];

  const filteredResults = results.filter(r => {
    const matchesFilter = filterType === 'all' || r.type === filterType;
    const matchesQuery = r.title.toLowerCase().includes(query.toLowerCase()) || r.desc.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="space-y-6 select-none max-w-4xl mx-auto">
      <PageHeader title="Search Results" subtitle="Continuous indexes lookup search results." />

      {/* Query Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input 
          type="search" 
          placeholder="Search query term..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full text-xs h-10 pl-11 pr-4 rounded-xl border border-border bg-card text-foreground focus:outline-none" 
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Left filters */}
        <div className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1 shadow-sm h-fit">
          {(['all', 'keychains', 'database'] as const).map((t) => (
            <button 
              key={t}
              onClick={() => setFilterType(t)}
              className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterType === t ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground hover:bg-accent/40'
              }`}
            >
              <span className="capitalize">{t === 'all' ? 'All Categories' : t}</span>
            </button>
          ))}
        </div>

        {/* Right lists */}
        <div className="lg:col-span-3 space-y-4">
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Found {filteredResults.length} index matches</p>

          {filteredResults.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center text-muted-foreground bg-card border border-border rounded-xl">
              <Inbox className="h-10 w-10 text-primary mb-3" />
              <p className="text-xs font-semibold">No results match your search parameters.</p>
            </div>
          ) : (
            filteredResults.map((item) => (
              <Card key={item.id} title={item.title}>
                <div className="space-y-2 mt-2">
                  <div className="flex gap-2">
                    <Badge variant="secondary">{item.type}</Badge>
                    <span className="text-[10px] text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
