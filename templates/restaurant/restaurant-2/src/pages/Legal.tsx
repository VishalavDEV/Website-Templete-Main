import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Copy, Check } from 'lucide-react';

export const Legal: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const licenseContent = `MIT License

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
    navigator.clipboard.writeText(licenseContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#0E0E10] text-[#F3EFEA]">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#C59B27] hover:text-[#e0b743] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Ember & Olive Home</span>
          </Link>
        </div>

        {/* Header section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C59B27]/10 flex items-center justify-center text-[#C59B27] border border-[#C59B27]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                License & Legal Notice
              </h1>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Ember & Olive Commercial Template · Released under MIT License
              </p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center self-start sm:self-auto gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 hover:text-white transition-colors border border-neutral-800"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy License'}</span>
          </button>
        </div>

        {/* Explanatory Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#C59B27] mb-1">
              Permissions
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Commercial use, modification, distribution, private use, and sublicensing are fully permitted.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#C59B27] mb-1">
              Conditions
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Include the original copyright and license notice in any substantial copy or distribution of this software.
            </p>
          </div>
        </div>

        {/* License Text Block */}
        <div className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
            Full License Text
          </h2>
          <div className="font-mono text-xs sm:text-sm leading-relaxed bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 whitespace-pre-wrap select-all overflow-x-auto">
            {licenseContent}
          </div>
        </div>

        {/* Attribution Notice */}
        <div className="mt-8 p-4 rounded-xl bg-[#C59B27]/5 border border-[#C59B27]/20 text-xs text-neutral-400 leading-relaxed flex items-center justify-between">
          <span>© 2026 Ember & Olive Commercial Template. All rights reserved.</span>
          <Link to="/" className="text-[#C59B27] hover:underline underline-offset-4 font-medium">
            Visit Restaurant
          </Link>
        </div>
      </div>
    </div>
  );
};
