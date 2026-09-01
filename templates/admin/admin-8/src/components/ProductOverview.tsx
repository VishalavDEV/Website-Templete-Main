/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { 
  Rocket, 
  RefreshCw, 
  ShoppingBag, 
  ArrowLeftRight, 
  Warehouse, 
  Truck,
  DollarSign,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import { Product } from '../types';

interface ProductOverviewProps {
  products: Product[];
}

export default function ProductOverview({ products }: ProductOverviewProps) {
  
  // Calculate specific totals matching the six target states
  const metrics = useMemo(() => {
    const launched = products.filter(p => p.status === 'Launched').length;
    const ongoing = products.filter(p => p.status === 'Ongoing').length;
    const sold = products.filter(p => p.status === 'Sold').length;
    const returned = products.filter(p => p.status === 'Returned').length;
    const inStock = products.filter(p => p.status === 'In Stock').length;
    const pendingShipment = products.filter(p => p.status === 'Pending Shipment').length;

    const totalRevenue = products.reduce((sum, p) => sum + p.revenue, 0);
    const totalUnitsSold = products.reduce((sum, p) => sum + p.unitsSold, 0);

    return {
      launched,
      ongoing,
      sold,
      returned,
      inStock,
      pendingShipment,
      totalRevenue,
      totalUnitsSold
    };
  }, [products]);

  const cards = [
    { label: 'Products Launched', count: metrics.launched, desc: 'Live in public marketplace', icon: Rocket, color: '#ff6a3d', bg: 'bg-[#ff6a3d]/8 border-[#ff6a3d]/15' },
    { label: 'Ongoing Products', count: metrics.ongoing, desc: 'Actively maintained / subscription', icon: RefreshCw, color: '#ffc94d', bg: 'bg-[#ffc94d]/10 border-[#ffc94d]/15' },
    { label: 'Products Sold Out', count: metrics.sold, desc: 'Zero inventory remaining', icon: ShoppingBag, color: '#ff3d77', bg: 'bg-[#ff3d77]/8 border-[#ff3d77]/15' },
    { label: 'Products Returned', count: metrics.returned, desc: 'Flagged return rate thresholds', icon: ArrowLeftRight, color: '#706861', bg: 'bg-black/[0.03] border-black/[0.05]' },
    { label: 'Products In Stock', count: metrics.inStock, desc: 'Available immediately in warehouse', icon: Warehouse, color: '#ff6a3d', bg: 'bg-[#ff6a3d]/8 border-[#ff6a3d]/15' },
    { label: 'Pending Shipment', count: metrics.pendingShipment, desc: 'Awaiting courier logistics', icon: Truck, color: '#ffc94d', bg: 'bg-[#ffc94d]/10 border-[#ffc94d]/15' }
  ];

  return (
    <div id="product-overview-panel" className="space-y-4 sm:space-y-6">
      
      {/* 6 Grid Metrics Card Layout */}
      <div id="product-states-grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div 
              key={i} 
              id={`product-state-card-${i}`}
              className={`p-3.5 sm:p-4 rounded-2xl border flex flex-col justify-between shadow-xs transition-transform hover:scale-[1.01] ${card.bg}`}
            >
              <div className="flex items-center justify-between gap-1.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#706861] uppercase tracking-wider truncate" title={card.label}>{card.label}</span>
                <Icon className="w-4 h-4 shrink-0" style={{ color: card.color }} />
              </div>
              <div className="mt-2.5 sm:mt-3">
                <span className="text-lg sm:text-xl font-extrabold text-[#211d1a] block">{card.count}</span>
                <span className="text-[9px] text-[#9b928a] leading-tight block mt-0.5 truncate">{card.desc}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main product log catalog table */}
      <div className="bg-white/68 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_12px_40px_rgba(63,42,27,0.08)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-[#706861] uppercase tracking-wider">Inventory Analysis</span>
            <h3 className="text-base sm:text-lg font-extrabold text-[#211d1a] tracking-tight mt-0.5">Product Status Catalog</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <span className="text-[#706861]">Sales Volume: <strong className="text-[#211d1a]">{metrics.totalUnitsSold} units</strong></span>
            <span className="w-1.5 h-1.5 rounded-full bg-black/[0.08] hidden sm:inline-block" />
            <span className="text-[#706861]">Valuation: <strong className="text-[#211d1a]">${metrics.totalRevenue.toLocaleString()}</strong></span>
          </div>
        </div>

        {/* Catalog Table for Desktop & Tablet */}
        <div className="hidden md:block overflow-x-auto">
          <table id="product-catalog-table" className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-black/[0.04]">
                <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider">Product</th>
                <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider">Category</th>
                <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider">Price / Stock</th>
                <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider">Sales Velocity</th>
                <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider">Status</th>
                <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider text-right">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.03]">
              {products.map((p) => {
                const maxStock = 200;
                const stockPercent = p.category === 'Software' ? 100 : Math.min(100, (p.unitsSold / maxStock) * 100);
                
                return (
                  <tr key={p.id} className="hover:bg-black/[0.01] transition-all">
                    <td className="py-3 px-3.5">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#211d1a]">{p.name}</span>
                        <span className="text-[10px] text-[#9b928a] font-medium">{p.id}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3.5">
                      <span className="px-2 py-0.5 bg-black/[0.03] text-[#706861] text-[10px] font-semibold rounded">
                        {p.category}
                      </span>
                    </td>
                    <td className="py-3 px-3.5 text-xs font-medium text-[#706861]">
                      <div className="flex flex-col">
                        <span>${p.price} / unit</span>
                        <span className="text-[10px] text-[#9b928a]">
                          {p.category === 'Software' ? 'Unlimited Stock' : `${p.stock} left`}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3.5">
                      <div className="flex items-center gap-2.5 w-28">
                        <div className="flex-1 h-1.5 bg-black/[0.04] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#ff6a3d] to-[#ff3d77] rounded-full" 
                            style={{ width: `${stockPercent}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-[#211d1a]">{p.unitsSold}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3.5">
                      <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold ${
                        p.status === 'Launched' ? 'bg-[#ff6a3d]/10 text-[#ff6a3d]' :
                        p.status === 'Ongoing' ? 'bg-[#ffc94d]/20 text-[#b58514]' :
                        p.status === 'Sold' ? 'bg-[#ff3d77]/10 text-[#ff3d77]' :
                        p.status === 'Returned' ? 'bg-rose-50 text-rose-700 border border-rose-100' :
                        p.status === 'In Stock' ? 'bg-emerald-50 text-emerald-700' :
                        'bg-blue-50 text-blue-700'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3 px-3.5 text-right text-xs font-extrabold text-[#211d1a]">
                      ${p.revenue.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Product Cards for Phones */}
        <div id="mobile-product-cards" className="md:hidden space-y-2.5">
          {products.map((p) => (
            <div key={p.id} className="bg-white/80 border border-black/[0.04] rounded-xl p-3.5 flex flex-col gap-2.5 shadow-xs">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-xs font-bold text-[#211d1a] block truncate">{p.name}</span>
                  <span className="text-[10px] text-[#9b928a] font-medium">{p.id} · {p.category}</span>
                </div>
                <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                  p.status === 'Launched' ? 'bg-[#ff6a3d]/10 text-[#ff6a3d]' :
                  p.status === 'Ongoing' ? 'bg-[#ffc94d]/20 text-[#b58514]' :
                  p.status === 'Sold' ? 'bg-[#ff3d77]/10 text-[#ff3d77]' :
                  p.status === 'Returned' ? 'bg-rose-50 text-rose-700' :
                  p.status === 'In Stock' ? 'bg-emerald-50 text-emerald-700' :
                  'bg-blue-50 text-blue-700'
                }`}>
                  {p.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-1 border-t border-black/[0.03]">
                <span className="text-[#706861] text-[11px]">${p.price}/unit · {p.unitsSold} sold</span>
                <span className="font-extrabold text-[#211d1a]">${p.revenue.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
