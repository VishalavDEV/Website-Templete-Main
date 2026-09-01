import React, { useEffect } from 'react';
import { NoireMenuItem } from '../types';
import { X, Calendar } from 'lucide-react';

interface DishDetailModalProps {
  dish: NoireMenuItem | null;
  onClose: () => void;
  onReserveForDish: (dish: NoireMenuItem) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onReserveForDish }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (dish) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#171512]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#211D18] text-[#F3EBDD] rounded-sm overflow-hidden border border-[#B87552]/40 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-[#B8AA98] hover:text-[#B87552] bg-[#171512]/80 p-2 rounded-sm border border-[rgba(243,235,221,0.14)] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Plated Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#171512]">
          <img src={dish.image} alt={dish.name} className="w-full h-full object-cover filter brightness-[0.9]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211D18] via-transparent to-transparent" />

          {/* Code & Badges */}
          <div className="absolute top-4 left-4 flex gap-2 font-mono text-xs">
            <span className="bg-[#171512] text-[#B87552] border border-[#B87552]/40 px-3 py-1 uppercase tracking-widest font-bold shadow-sm">
              {dish.code}
            </span>
            {dish.isSignature && (
              <span className="bg-[#B87552] text-[#F3EBDD] font-bold px-3 py-1 uppercase tracking-widest shadow-sm">
                SIGNATURE DISH
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 -mt-6 relative z-10">
          <div className="flex items-start justify-between gap-4 mb-3 border-b border-[rgba(243,235,221,0.14)] pb-4">
            <div>
              <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase block mb-1 font-bold">
                {dish.category}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#F3EBDD]">
                {dish.name}
              </h3>
            </div>
            <span className="font-mono text-2xl font-bold text-[#B87552]">
              {dish.price}
            </span>
          </div>

          <p className="font-body text-sm text-[#B8AA98] leading-relaxed mb-6">
            {dish.description}
          </p>

          <div className="mb-6 p-4 bg-[#171512] border border-[rgba(243,235,221,0.14)] rounded-sm">
            <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase block mb-2 font-bold">
              INGREDIENT BREAKDOWN:
            </span>
            <p className="font-mono text-xs text-[#F3EBDD] font-medium">{dish.ingredients}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[rgba(243,235,221,0.14)]">
            <button
              onClick={() => {
                onClose();
                onReserveForDish(dish);
              }}
              className="btn-copper flex-1 py-4 text-xs font-bold tracking-widest flex items-center justify-center space-x-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVE TABLE FOR THIS DISH →</span>
            </button>
            <button
              onClick={onClose}
              className="sm:w-32 border border-[rgba(243,235,221,0.14)] text-[#B8AA98] hover:text-[#F3EBDD] hover:border-[#F3EBDD] py-4 font-mono text-xs uppercase tracking-widest transition-colors bg-[#171512]"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
