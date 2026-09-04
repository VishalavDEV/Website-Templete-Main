import React from 'react';
import { X, ShieldCheck, Copy, Check } from 'lucide-react';

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const licenseText = `MIT License

Copyright (c) 2026 Ember & Olive Commercial Template

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="license-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#141416] text-[#F3EFEA] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-[#1A1A1D]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27] border border-[#C59B27]/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 id="license-modal-title" className="text-base font-semibold text-white tracking-wide">
                License & Attribution
              </h3>
              <p className="text-xs text-neutral-400">
                Ember & Olive Commercial Template
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-700 hover:text-white transition-colors border border-neutral-700/60"
              title="Copy license text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="text-xs text-neutral-300 leading-relaxed">
            This template is released under the standard <strong className="text-white">MIT License</strong>. You are permitted to freely use, modify, and distribute this template in personal and commercial projects.
          </div>

          <div className="font-mono text-xs sm:text-sm leading-relaxed bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 whitespace-pre-wrap select-all">
            {licenseText}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-800/80 bg-[#1A1A1D] text-xs text-neutral-400">
          <span>© 2026 Ember & Olive Commercial Template</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#C59B27] hover:bg-[#b08920] text-black font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
