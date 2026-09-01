import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Users, Package, ShoppingBag, Headphones, UserCheck, ArrowRight } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { customerService } from '../../services/customerService';
import { productService } from '../../services/productService';
import { orderService } from '../../services/orderService';
import { ticketService } from '../../services/ticketService';
import { employeeService } from '../../services/employeeService';
import { NAV_ITEMS } from '../../routes/routesConfig';

export const GlobalSearchModal: React.FC = () => {
  const { isOpen, closeSearch, query, setQuery } = useSearch();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search Results
  const customerResults = q
    ? customerService.getCustomers().filter((c) => c.name.toLowerCase().includes(q) || c.company.toLowerCase().includes(q))
    : [];

  const productResults = q
    ? productService.getProducts().filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q))
    : [];

  const orderResults = q
    ? orderService.getOrders().filter((o) => o.orderNumber.toLowerCase().includes(q) || o.customerName.toLowerCase().includes(q))
    : [];

  const ticketResults = q
    ? ticketService.getTickets().filter((t) => t.ticketNumber.toLowerCase().includes(q) || t.subject.toLowerCase().includes(q))
    : [];

  const employeeResults = q
    ? employeeService.getEmployees().filter((e) => e.name.toLowerCase().includes(q) || e.department.toLowerCase().includes(q))
    : [];

  // Navigation Items Search
  const navResults = q
    ? NAV_ITEMS.flatMap((item) => item.subItems || []).filter((sub) => sub.name.toLowerCase().includes(q))
    : [];

  const hasResults =
    customerResults.length > 0 ||
    productResults.length > 0 ||
    orderResults.length > 0 ||
    ticketResults.length > 0 ||
    employeeResults.length > 0 ||
    navResults.length > 0;

  const handleSelect = (path: string) => {
    navigate(path);
    closeSearch();
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeSearch}
      />

      <div className="flex min-h-full items-start justify-center p-4 pt-16">
        <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10">
          {/* Input Header */}
          <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800">
            <Search className="w-5 h-5 text-slate-400 mr-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type to search customers, products, orders, tickets, pages... (ESC to exit)"
              className="w-full bg-transparent text-sm focus:outline-none text-slate-900 dark:text-white placeholder-slate-400"
            />
            <button
              onClick={closeSearch}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
            {!q && (
              <div className="text-center py-8 text-xs text-slate-400">
                Type anything to search across all enterprise entities or navigate directly.
              </div>
            )}

            {q && !hasResults && (
              <div className="text-center py-8 text-sm text-slate-500">
                No matching results found for "<span className="font-semibold">{query}</span>"
              </div>
            )}

            {/* Customers */}
            {customerResults.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Customers ({customerResults.length})
                </h4>
                <div className="space-y-1">
                  {customerResults.slice(0, 3).map((c) => (
                    <div
                      key={c.id}
                      onClick={() => handleSelect(`/crm/customers/${c.id}`)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">{c.name}</div>
                          <div className="text-xs text-slate-500">{c.company} • {c.email}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Products */}
            {productResults.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5" /> Products ({productResults.length})
                </h4>
                <div className="space-y-1">
                  {productResults.slice(0, 3).map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelect(`/products/${p.id}`)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="w-8 h-8 rounded-lg object-cover" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">{p.name}</div>
                          <div className="text-xs text-slate-500">SKU: {p.sku} • ${p.price.toFixed(2)}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Orders */}
            {orderResults.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" /> Sales Orders ({orderResults.length})
                </h4>
                <div className="space-y-1">
                  {orderResults.slice(0, 3).map((o) => (
                    <div
                      key={o.id}
                      onClick={() => handleSelect(`/sales/orders/${o.id}`)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">{o.orderNumber}</div>
                        <div className="text-xs text-slate-500">{o.customerName} • ${o.totalAmount.toFixed(2)}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tickets */}
            {ticketResults.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Headphones className="w-3.5 h-3.5" /> Support Tickets ({ticketResults.length})
                </h4>
                <div className="space-y-1">
                  {ticketResults.slice(0, 3).map((t) => (
                    <div
                      key={t.id}
                      onClick={() => handleSelect(`/support/tickets/${t.id}`)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">{t.ticketNumber}: {t.subject}</div>
                        <div className="text-xs text-slate-500">{t.customerName} • Status: {t.status}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pages / Navigation */}
            {navResults.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  System Navigation ({navResults.length})
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {navResults.slice(0, 6).map((nav) => (
                    <div
                      key={nav.path}
                      onClick={() => handleSelect(nav.path)}
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-500 hover:bg-brand-50/50 dark:hover:bg-brand-950/30 cursor-pointer transition-colors text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between"
                    >
                      <span>{nav.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
