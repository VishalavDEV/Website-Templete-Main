import React, { useState } from 'react';
import {
  Search,
  Filter,
  Star,
  Layers,
  TrendingUp,
  ArrowUpDown,
  CheckCircle2,
  Plus,
  Scale,
  DollarSign,
  Shield,
  Eye,
  X
} from 'lucide-react';
import { ActiveTab, Currency, InvestmentProduct, RiskLevel } from '../../types';
import { INVESTMENT_PRODUCTS } from '../../data/mockData';
import { formatCurrency, formatPercent } from '../../utils/formatters';

interface DiscoveryViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  openBookingModal: () => void;
  selectedCompareIds: string[];
  setSelectedCompareIds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const DiscoveryView: React.FC<DiscoveryViewProps> = ({
  setActiveTab,
  currency,
  openBookingModal,
  selectedCompareIds,
  setSelectedCompareIds,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('All');
  const [selectedRisk, setSelectedRisk] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'return5y' | 'return3y' | 'expenseRatio' | 'aum' | 'rating'>('return5y');
  const [previewProduct, setPreviewProduct] = useState<InvestmentProduct | null>(null);

  const toggleCompare = (id: string) => {
    if (selectedCompareIds.includes(id)) {
      setSelectedCompareIds((prev) => prev.filter((i) => i !== id));
    } else {
      if (selectedCompareIds.length >= 4) {
        alert('You can compare a maximum of 4 investment products simultaneously.');
        return;
      }
      setSelectedCompareIds((prev) => [...prev, id]);
    }
  };

  const filteredProducts = INVESTMENT_PRODUCTS.filter((prod) => {
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === 'All' || prod.assetClass === selectedClass;
    const matchesRisk = selectedRisk === 'All' || prod.riskLevel === selectedRisk;
    return matchesSearch && matchesClass && matchesRisk;
  }).sort((a, b) => {
    if (sortBy === 'return5y') return b.return5Y - a.return5Y;
    if (sortBy === 'return3y') return b.return3Y - a.return3Y;
    if (sortBy === 'expenseRatio') return a.expenseRatio - b.expenseRatio;
    if (sortBy === 'aum') return b.aum - a.aum;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="w-full py-10 space-y-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Institutional Product Screener
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Investment Discovery &amp; Fund Marketplace
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Filter and screen across active equities, AAA fixed income bonds, private credit, and venture vehicles.
            </p>
          </div>

          {/* Compare Bar Floating Trigger */}
          {selectedCompareIds.length > 0 && (
            <div className="flex items-center gap-3 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-lg border border-slate-800 animate-in fade-in">
              <span className="text-xs font-bold text-amber-400">
                {selectedCompareIds.length} Products Selected
              </span>
              <button
                onClick={() => setActiveTab('comparison')}
                className="px-3 py-1 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Launch Side-by-Side Comparison</span>
              </button>
              <button
                onClick={() => setSelectedCompareIds([])}
                className="text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Filters Toolbar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative md:col-span-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search fund name, category, ticker..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
              />
            </div>

            {/* Asset Class Filter */}
            <div>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-medium"
              >
                <option value="All">All Asset Classes</option>
                <option value="Equity">Equity Strategies</option>
                <option value="Debt">Fixed Income (Debt)</option>
                <option value="Alternative">Alternative &amp; Private Credit</option>
                <option value="Mutual Fund">Mutual Funds</option>
              </select>
            </div>

            {/* Risk Level Filter */}
            <div>
              <select
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value)}
                className="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-medium"
              >
                <option value="All">All Risk Profiles</option>
                <option value="Low">Low Risk (Capital Preservation)</option>
                <option value="Moderate">Moderate Risk</option>
                <option value="Moderate-High">Moderate-High Growth</option>
                <option value="High">High Alpha / Growth</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-500 font-medium">
              Found <strong className="text-slate-900">{filteredProducts.length}</strong> Qualified Investment Products
            </span>

            <div className="flex items-center gap-2">
              <span className="text-slate-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-1 px-2.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-800 bg-slate-50"
              >
                <option value="return5y">Highest 5Y CAGR</option>
                <option value="return3y">Highest 3Y CAGR</option>
                <option value="expenseRatio">Lowest Expense Ratio</option>
                <option value="aum">Largest AUM</option>
                <option value="rating">Morningstar Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => {
            const isCompared = selectedCompareIds.includes(prod.id);
            return (
              <div
                key={prod.id}
                className={`bg-white rounded-2xl border transition-all p-6 flex flex-col justify-between shadow-xs hover:shadow-lg ${
                  isCompared ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-slate-200'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-800">
                      {prod.category}
                    </span>
                    <div className="flex items-center text-amber-500 gap-0.5">
                      {[...Array(prod.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{prod.description}</p>
                  </div>

                  {/* Return Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center font-mono">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-sans font-semibold">
                        1Y Return
                      </span>
                      <span className="font-bold text-xs text-emerald-600">+{prod.return1Y}%</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-sans font-semibold">
                        3Y CAGR
                      </span>
                      <span className="font-bold text-xs text-slate-900">+{prod.return3Y}%</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-sans font-semibold">
                        5Y CAGR
                      </span>
                      <span className="font-bold text-xs text-amber-700 font-bold">+{prod.return5Y}%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                    <div>
                      <span className="text-slate-400">Min. Investment: </span>
                      <strong className="text-slate-800 font-mono">
                        {formatCurrency(prod.minInvestment, currency)}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Expense Ratio: </span>
                      <strong className="text-slate-800 font-mono">{prod.expenseRatio}%</strong>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleCompare(prod.id)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 ${
                      isCompared
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5" />
                    <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                  </button>

                  <button
                    onClick={() => setPreviewProduct(prod)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="View Factsheet"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={openBookingModal}
                    className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold transition-colors"
                  >
                    Invest &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Factsheet Modal */}
      {previewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setPreviewProduct(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-xl font-bold"
            >
              &times;
            </button>

            <div className="space-y-4">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                {previewProduct.category}
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                {previewProduct.name}
              </h2>
              <p className="text-xs text-slate-600">{previewProduct.description}</p>

              <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-xs border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Asset Class:</span>
                  <span className="font-bold text-slate-900">{previewProduct.assetClass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Risk Profile:</span>
                  <span className="font-bold text-amber-700">{previewProduct.riskLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Strategy AUM:</span>
                  <span className="font-mono font-bold text-slate-900">
                    {formatCurrency(previewProduct.aum, currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Expense Ratio:</span>
                  <span className="font-mono font-bold text-slate-900">{previewProduct.expenseRatio}%</span>
                </div>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  onClick={() => {
                    toggleCompare(previewProduct.id);
                    setPreviewProduct(null);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold"
                >
                  Add to Comparison Matrix
                </button>
                <button
                  onClick={() => {
                    setPreviewProduct(null);
                    openBookingModal();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-amber-400 text-slate-950 text-xs font-bold"
                >
                  Deploy Capital
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
