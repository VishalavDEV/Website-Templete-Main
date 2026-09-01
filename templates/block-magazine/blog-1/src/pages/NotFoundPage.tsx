import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-amber-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-amber-700 shadow-sm border border-amber-100">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 bg-amber-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Error 404
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
          Sanctuary Not Found
        </h1>
        <p className="text-neutral-600 text-base leading-relaxed mb-8 font-sans">
          The page or article you are searching for may have been archived, relocated, or exists beyond the digital horizon.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-2xl text-sm transition-colors shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home Sanctuary</span>
        </Link>
      </div>
    </div>
  );
}
