import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingCart, 
  ArrowRight, 
  CheckCircle, 
  Tag, 
  CreditCard,
  Sparkles
} from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onCheckout
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.15) : 0;
  const total = Math.max(0, subtotal - discount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'STUDY15' || couponCode.trim().length > 2) {
      setCouponApplied(true);
    }
  };

  const handleConfirmCheckout = () => {
    setIsSuccess(true);
    setTimeout(() => {
      onCheckout();
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative text-slate-900 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#ec1c4e] flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Selected Courses Cart</h3>
              <p className="text-xs text-slate-400">
                {items.length} Course{items.length !== 1 ? 's' : ''} in your cart
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-10 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Enrollment Completed!</h3>
            <p className="text-sm text-slate-600 max-w-sm mb-4">
              Welcome to StudyPress University. Course access credentials and lecture links have been dispatched to your email.
            </p>
            <span className="text-xs text-slate-400">Redirecting to your student dashboard...</span>
          </div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center">
            <ShoppingCart className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800 mb-1">Your cart is empty</h4>
            <p className="text-xs text-slate-500 mb-6">
              Explore our popular courses catalog to select top rated modules.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#ec1c4e] hover:bg-[#d81544] text-white text-xs font-bold rounded-lg transition-colors"
            >
              Browse Courses
            </button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-14 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#ec1c4e] uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.title}
                    </h4>
                    <span className="text-xs font-extrabold text-slate-900 mt-1 block">
                      ${item.price}
                    </span>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-slate-400 hover:text-rose-600 p-2 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Coupon & Summary Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter Coupon: STUDY15"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#ec1c4e]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Apply
                </button>
              </form>

              {couponApplied && (
                <div className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>15% Student Discount Applied!</span>
                </div>
              )}

              {/* Cost Math */}
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-slate-800">${subtotal}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount (15%):</span>
                    <span>-${discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-300">
                  <span>Total Amount:</span>
                  <span className="text-[#ec1c4e]">${total}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleConfirmCheckout}
                className="w-full py-3.5 bg-[#ec1c4e] hover:bg-[#d81544] text-white text-xs uppercase tracking-wider font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>Complete Enrollment (${total})</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
