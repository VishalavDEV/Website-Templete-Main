import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-28 pb-16 bg-slate-950 px-4">
      <div className="max-w-md text-center">
        <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-4 font-mono">
          404
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The requested engineering asset, service module, or article cannot be located. It may have been relocated or archived.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button to="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
          <Button to="/search" variant="secondary" size="md" icon={<Search className="w-4 h-4" />}>
            Search Directory
          </Button>
        </div>
      </div>
    </div>
  );
};
