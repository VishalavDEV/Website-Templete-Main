import { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, Play, RefreshCw, Sparkles, CheckCircle, ShieldAlert, Cpu, Eye, BarChart3, BookOpen } from 'lucide-react';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDemoModal({ project, onClose }: ProjectDemoModalProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [demoStep, setDemoStep] = useState(0);

  // NeuralDesk State
  const [selectedDoc, setSelectedDoc] = useState('Quarterly_AI_Research_Report.pdf');
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summaryOutput, setSummaryOutput] = useState<string | null>(null);

  // VisionGuard State
  const [detectedObjects, setDetectedObjects] = useState([
    { class: 'Person', conf: 0.94, box: [120, 80, 260, 320] },
    { class: 'Laptop', conf: 0.89, box: [300, 210, 420, 310] },
    { class: 'Access Card', conf: 0.91, box: [180, 140, 220, 190] },
  ]);
  const [latency, setLatency] = useState(31);

  // StudyPilot State
  const [quizSubject, setQuizSubject] = useState('Backpropagation & Loss Gradients');
  const [generatedQuiz, setGeneratedQuiz] = useState<{ q: string; opts: string[]; answer: number } | null>(null);

  // MarketLens State
  const [selectedTicker, setSelectedTicker] = useState('NVDA');
  const [timeframe, setTimeframe] = useState('1M');

  useEffect(() => {
    if (project?.id === 'visionguard') {
      const interval = setInterval(() => {
        setLatency(28 + Math.floor(Math.random() * 8));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [project]);

  if (!project) return null;

  const handleRunNeuralDesk = () => {
    setIsSummarizing(true);
    setSummaryOutput(null);
    setTimeout(() => {
      setIsSummarizing(false);
      setSummaryOutput(
        "Key Takeaway: The hybrid RAG architecture reduces context window cost by 44% while maintaining 98.4% retrieval accuracy on technical benchmarks. 3 primary action items detected for Q4 release."
      );
    }, 1200);
  };

  const handleGenerateQuiz = () => {
    setIsRunning(true);
    setGeneratedQuiz(null);
    setTimeout(() => {
      setIsRunning(false);
      setGeneratedQuiz({
        q: "In gradient descent optimization, why is momentum added to the standard weight update rule?",
        opts: [
          "To accelerate gradients in the relevant direction and dampen high-frequency oscillations.",
          "To force the learning rate to decay to zero automatically.",
          "To convert non-convex loss functions into purely convex quadratic surfaces.",
          "To avoid computing partial derivatives altogether."
        ],
        answer: 0
      });
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#090d1c] border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <span>{project.title} — Live Interactive Sandbox</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  {project.status}
                </span>
              </h3>
              <p className="font-mono text-xs text-slate-400">
                Interactive real-time execution environment
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Sandbox Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* 1. NeuralDesk Demo */}
          {project.id === 'neuraldesk' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="font-mono text-xs uppercase text-cyan-400 font-bold block">
                  Select Document to Vectorize & Summarize
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Quarterly_AI_Research_Report.pdf',
                    'Edge_Vision_System_Architecture.docx',
                    'Transformer_Quantization_Paper.pdf'
                  ].map((doc) => (
                    <button
                      key={doc}
                      onClick={() => setSelectedDoc(doc)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                        selectedDoc === doc
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold'
                          : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                      }`}
                    >
                      {doc}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={handleRunNeuralDesk}
                  disabled={isSummarizing}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 transition-all disabled:opacity-50"
                >
                  {isSummarizing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  <span>{isSummarizing ? 'Processing Chunks...' : 'Run Neural Summarizer'}</span>
                </button>
                <span className="font-mono text-xs text-slate-400">Embedding: text-embedding-3-small</span>
              </div>

              {summaryOutput && (
                <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span className="font-bold flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      SYNTHESIS COMPLETE (1.18s)
                    </span>
                    <span>1,420 Tokens Processed</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed font-sans">{summaryOutput}</p>
                </div>
              )}
            </div>
          )}

          {/* 2. VisionGuard Demo */}
          {project.id === 'visionguard' && (
            <div className="space-y-6">
              <div className="relative aspect-video rounded-2xl bg-black border border-cyan-500/30 overflow-hidden flex items-center justify-center">
                {/* Background Simulated Feed */}
                <img
                  src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80"
                  alt="Security Camera Feed"
                  className="w-full h-full object-cover opacity-60"
                />

                {/* Simulated Bounding Boxes Overlay */}
                <div className="absolute inset-0 pointer-events-none p-4">
                  {/* Bounding Box 1 */}
                  <div className="absolute top-[20%] left-[25%] w-[25%] h-[55%] border-2 border-cyan-400 rounded bg-cyan-400/10">
                    <span className="absolute -top-5 left-0 px-1.5 py-0.5 bg-cyan-500 text-[10px] font-mono font-bold text-slate-950 rounded">
                      Person: 94%
                    </span>
                  </div>

                  {/* Bounding Box 2 */}
                  <div className="absolute bottom-[25%] right-[20%] w-[28%] h-[35%] border-2 border-emerald-400 rounded bg-emerald-400/10">
                    <span className="absolute -top-5 left-0 px-1.5 py-0.5 bg-emerald-500 text-[10px] font-mono font-bold text-slate-950 rounded">
                      Laptop: 89%
                    </span>
                  </div>
                </div>

                {/* Telemetry Bar */}
                <div className="absolute bottom-3 left-3 right-3 px-4 py-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      STREAM: 60 FPS
                    </span>
                    <span>LATENCY: {latency} ms</span>
                  </div>
                  <span className="text-cyan-400 font-bold">MODEL: YOLOv8s TensorRT</span>
                </div>
              </div>
            </div>
          )}

          {/* 3. StudyPilot Demo */}
          {project.id === 'studypilot' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="font-mono text-xs uppercase text-violet-400 font-bold block">
                  Select STEM Subject for Dynamic Quiz
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Backpropagation & Loss Gradients',
                    'Convolutional Neural Networks',
                    'Transformer Self-Attention'
                  ].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setQuizSubject(sub)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                        quizSubject === sub
                          ? 'bg-violet-500/20 text-violet-300 border-violet-400 font-bold'
                          : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerateQuiz}
                disabled={isRunning}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-violet-400 to-fuchsia-300 hover:from-violet-300 transition-all"
              >
                {isRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <BookOpen className="w-4 h-4" />}
                <span>{isRunning ? 'Formulating Question...' : 'Generate Adaptive Question'}</span>
              </button>

              {generatedQuiz && (
                <div className="p-5 rounded-2xl bg-violet-950/20 border border-violet-500/30 space-y-4 animate-in fade-in">
                  <span className="font-mono text-xs text-violet-400 uppercase tracking-wider font-bold">
                    Target Bloom Level: Analyze / Evaluate
                  </span>
                  <p className="font-heading font-bold text-base text-white">{generatedQuiz.q}</p>
                  <div className="space-y-2">
                    {generatedQuiz.opts.map((opt, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl text-xs font-mono border transition-colors cursor-pointer ${
                          i === generatedQuiz.answer
                            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200 font-semibold'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="text-violet-400 font-bold mr-2">[{String.fromCharCode(65 + i)}]</span>
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 4. MarketLens Demo */}
          {project.id === 'marketlens' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  <span className="font-heading font-bold text-sm text-white">NVDA // NVIDIA Corp</span>
                </div>
                <div className="flex gap-2">
                  {['1D', '1W', '1M', '1Y'].map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`px-2.5 py-1 rounded text-xs font-mono ${
                        timeframe === tf ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-3xl font-heading font-extrabold text-emerald-400">$128.45</span>
                    <span className="text-xs font-mono text-emerald-400 ml-2">+4.2% (Today)</span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">FinBERT Sentiment: +0.78 (Strong Bullish)</span>
                </div>

                {/* Simulated Chart Bars */}
                <div className="h-36 flex items-end gap-1.5 pt-4">
                  {[45, 52, 48, 60, 58, 65, 72, 70, 85, 80, 92, 98, 110, 105, 120, 128].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                      <div
                        className="w-full bg-cyan-400/60 group-hover:bg-cyan-300 rounded-t transition-all"
                        style={{ height: `${(val / 130) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800">
                  <span>RSI (14): 64.2</span>
                  <span>MACD: Bullish Divergence</span>
                  <span>Predicted Volatility: Low</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
