import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, UserPlus, ShoppingCart, Package, CheckSquare, FolderPlus, FileText, LifeBuoy, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function QuickActionButton() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const actions = [
    { label: 'Create User', icon: UserPlus, path: '/users', color: 'from-blue-500 to-neura-cyan' },
    { label: 'Create Order', icon: ShoppingCart, path: '/orders', color: 'from-purple-500 to-indigo-500' },
    { label: 'Create Product', icon: Package, path: '/products', color: 'from-emerald-400 to-teal-500' },
    { label: 'Create Task', icon: CheckSquare, path: '/tasks', color: 'from-amber-400 to-orange-500' },
    { label: 'Create Project', icon: FolderPlus, path: '/projects', color: 'from-neura-cyan to-blue-600' },
    { label: 'Create Invoice', icon: FileText, path: '/finance/invoices', color: 'from-pink-500 to-rose-500' },
    { label: 'Create Ticket', icon: LifeBuoy, path: '/apps/tickets', color: 'from-cyan-400 to-blue-500' },
    { label: 'Create Event', icon: Calendar, path: '/apps/calendar', color: 'from-violet-500 to-purple-500' },
  ];

  const handleAction = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-4 space-y-2 flex flex-col items-end"
          >
            {actions.map((act) => {
              const Icon = act.icon;
              return (
                <button
                  key={act.label}
                  onClick={() => handleAction(act.path)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-neura-panel/90 backdrop-blur-xl border border-white/10 text-white hover:border-neura-cyan/50 shadow-2xl transition-all group"
                >
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-neura-cyan">{act.label}</span>
                  <div className={`p-1.5 rounded-lg bg-gradient-to-r ${act.color} text-black font-bold`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-neura-cyan to-neura-purple text-black font-bold flex items-center justify-center shadow-glow-cyan hover:scale-105 transition-all"
        title="Quick Actions Menu"
      >
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <Plus className="w-7 h-7 stroke-[3]" />
        </motion.div>
      </button>
    </div>
  );
}
