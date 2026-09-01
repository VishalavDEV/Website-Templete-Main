import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ShoppingCart, User, Package, CheckSquare, Command, Navigation, BarChart3, Settings } from 'lucide-react';
import { MOCK_ORDERS, MOCK_PRODUCTS, MOCK_TASKS, MOCK_TEAM_MEMBERS } from '../../services/mockData';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (path) => {
    navigate(path);
    onClose(false);
  };

  const lowerQuery = query.toLowerCase().trim();

  // Navigation pages search
  const PAGES = [
    { name: 'Dashboard', path: '/', icon: Navigation },
    { name: 'Analytics & Telemetry', path: '/analytics', icon: BarChart3 },
    { name: 'Orders & Transactions', path: '/orders', icon: ShoppingCart },
    { name: 'Product Inventory', path: '/products', icon: Package },
    { name: 'Task Command Board', path: '/tasks', icon: CheckSquare },
    { name: 'Users & Team', path: '/users', icon: User },
    { name: 'System Settings', path: '/settings', icon: Settings },
  ];

  const filteredPages = lowerQuery
    ? PAGES.filter(p => p.name.toLowerCase().includes(lowerQuery))
    : PAGES.slice(0, 3);

  const filteredOrders = lowerQuery
    ? MOCK_ORDERS.filter(o => o.id.toLowerCase().includes(lowerQuery) || o.customer.toLowerCase().includes(lowerQuery) || o.product.toLowerCase().includes(lowerQuery) || lowerQuery.includes('order'))
    : MOCK_ORDERS.slice(0, 2);

  const filteredProducts = lowerQuery
    ? MOCK_PRODUCTS.filter(p => p.name.toLowerCase().includes(lowerQuery) || p.category.toLowerCase().includes(lowerQuery) || lowerQuery.includes('product'))
    : MOCK_PRODUCTS.slice(0, 2);

  const filteredTasks = lowerQuery
    ? MOCK_TASKS.filter(t => t.title.toLowerCase().includes(lowerQuery) || lowerQuery.includes('task'))
    : MOCK_TASKS.slice(0, 2);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-neura-panel border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header Input */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
            <Search className="w-5 h-5 text-neura-cyan mr-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Pages, Users, Orders, Products, Tasks... (Press Esc to close)"
              className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm font-medium"
            />
            <button
              onClick={() => onClose(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results Area */}
          <div className="max-h-96 overflow-y-auto p-4 space-y-4 text-sm">
            {/* Quick Page Navigation */}
            {filteredPages.length > 0 && (
              <div>
                <div className="flex items-center text-xs font-semibold text-neura-cyan uppercase tracking-wider mb-2">
                  <Navigation className="w-3.5 h-3.5 mr-1.5" /> Navigation Pages
                </div>
                <div className="space-y-1">
                  {filteredPages.map(page => {
                    const Icon = page.icon;
                    return (
                      <div
                        key={page.name}
                        onClick={() => handleSelect(page.path)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-neura-cyan/10 border border-transparent hover:border-neura-cyan/30 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-4 h-4 text-neura-cyan group-hover:scale-110 transition-transform" />
                          <span className="font-medium text-white">{page.name}</span>
                        </div>
                        <span className="text-xs text-slate-400 group-hover:text-neura-cyan font-mono">Go to page →</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Orders */}
            {filteredOrders.length > 0 && (
              <div>
                <div className="flex items-center text-xs font-semibold text-neura-purple uppercase tracking-wider mb-2">
                  <ShoppingCart className="w-3.5 h-3.5 mr-1.5" /> Orders
                </div>
                <div className="space-y-1">
                  {filteredOrders.map(order => (
                    <div
                      key={order.id}
                      onClick={() => handleSelect('/orders')}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-neura-cyan font-medium">{order.id}</span>
                        <span className="text-slate-200">{order.customer}</span>
                        <span className="text-xs text-slate-400">• {order.product}</span>
                      </div>
                      <span className="font-medium text-white">${order.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Products */}
            {filteredProducts.length > 0 && (
              <div>
                <div className="flex items-center text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  <Package className="w-3.5 h-3.5 mr-1.5" /> Products
                </div>
                <div className="space-y-1">
                  {filteredProducts.map(prod => (
                    <div
                      key={prod.name}
                      onClick={() => handleSelect('/products')}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
                    >
                      <div>
                        <div className="font-medium text-white">{prod.name}</div>
                        <div className="text-xs text-slate-400">{prod.category}</div>
                      </div>
                      <span className="font-medium text-neura-cyan">{prod.revenue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tasks */}
            {filteredTasks.length > 0 && (
              <div>
                <div className="flex items-center text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  <CheckSquare className="w-3.5 h-3.5 mr-1.5" /> Tasks
                </div>
                <div className="space-y-1">
                  {filteredTasks.map(task => (
                    <div
                      key={task.id}
                      onClick={() => handleSelect('/tasks')}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
                    >
                      <span className="text-slate-200">{task.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${task.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/10 bg-white/[0.01] flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-mono text-slate-300">Click</kbd>
              <span>or press item to navigate</span>
            </div>
            <div className="flex items-center space-x-1">
              <Command className="w-3.5 h-3.5 text-neura-cyan" />
              <span>TS ADMIN Command Palette</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
