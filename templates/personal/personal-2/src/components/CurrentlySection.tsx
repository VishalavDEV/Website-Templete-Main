import { BookOpen, Layers, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CurrentlySection() {
  const currentItems = [
    {
      id: 'building',
      type: 'BUILDING',
      typeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      title: 'Multi-Modal Agent Pipeline',
      subtitle: 'Agentic AI & Computer Vision',
      description: 'Developing an autonomous visual reasoning framework combining Gemini Flash with local edge models for real-time video analytics and automated defect detection.',
      status: 'Active Development',
      progress: 75,
      tags: ['Gemini 2.5', 'FastAPI', 'WebSockets', 'PyTorch'],
    },
    {
      id: 'reading',
      type: 'READING',
      typeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      title: 'High-Performance ML Systems',
      subtitle: 'Paper & Architecture Studies',
      description: 'Deep-diving into FlashAttention-3 kernel optimizations, speculative decoding algorithms, and distributed Mixture of Experts (MoE) training topologies.',
      status: 'In Progress',
      progress: 50,
      tags: ['FlashAttention', 'MoE', 'vLLM', 'CUDA Basics'],
    },
    {
      id: 'exploring',
      type: 'EXPLORING',
      typeBg: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: <Compass className="w-5 h-5 text-rose-600" />,
      title: 'WebGPU & Edge Inference',
      subtitle: 'Browser-Native Machine Learning',
      description: 'Benchmarking quantized transformer models running completely client-side in the browser using ONNX runtime and WebGPU for zero-server latency.',
      status: 'Researching',
      progress: 60,
      tags: ['WebGPU', 'ONNX Runtime', 'Transformers.js', 'Wasm'],
    },
  ];

  return (
    <section id="currently" className="py-20 relative overflow-hidden bg-[#f8fafc] border-t border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>LIVE STATUS</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            WHAT I'M WORKING ON
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
            Current focus, learning objectives and active projects.
          </p>
        </div>

        {/* 3 Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <div
              key={item.id}
              id={`currently-card-${item.id}`}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-slate-300"
            >
              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.typeBg}`}>
                    {item.type}
                  </span>
                </div>

                {/* Titles */}
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-blue-600 font-semibold block mt-0.5">
                    {item.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress & Status Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {item.status}
                  </span>
                  <span className="font-semibold text-slate-500">{item.progress}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

