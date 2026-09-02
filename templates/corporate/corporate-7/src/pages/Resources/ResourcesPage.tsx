import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Download, 
  FileText, 
  BookOpen, 
  Layers, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { resourcesData } from '../../data/resources';
import { Button } from '../../components/common/Button';
import { staggerContainer, fadeUp } from '../../utils/animations';

export const ResourcesPage: React.FC = () => {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const handleDownload = (id: string, title: string) => {
    setDownloadedId(id);
    setTimeout(() => {
      setDownloadedId(null);
    }, 3000);
  };

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Header Banner */}
      <section className="pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">Resources</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Whitepapers, E-Books &amp; Architecture Guides
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our comprehensive library of technical research papers, enterprise benchmark studies, and security frameworks.
            </p>
          </div>

        </div>
      </section>

      {/* Resources Cards Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {resourcesData.map((res) => (
              <motion.div
                key={res.id}
                variants={fadeUp}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-400 transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-full border border-slate-200">
                      {res.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{res.fileSize}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-zinc-800 transition mb-3">
                    {res.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {res.description}
                  </p>

                  <div className="mb-6">
                    <span className="px-2.5 py-1 bg-white text-slate-700 text-xs rounded-lg border border-slate-200">
                      {res.category}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <Button
                    variant={downloadedId === res.id ? 'secondary' : 'primary'}
                    size="sm"
                    className="w-full"
                    icon={downloadedId === res.id ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Download className="w-4 h-4" />}
                    onClick={() => handleDownload(res.id, res.title)}
                  >
                    {downloadedId === res.id ? 'Download Initialized!' : 'Download PDF Guide'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
};
