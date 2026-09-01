import React, { useState } from 'react';
import { X, Send, Sparkles, RefreshCw, Sliders, CheckCircle2, Play, Cpu } from 'lucide-react';
import { AiExperiment } from '../types';

interface AiExperimentModalProps {
  experiment: AiExperiment | null;
  onClose: () => void;
  darkMode: boolean;
}

export const AiExperimentModal: React.FC<AiExperimentModalProps> = ({
  experiment,
  onClose,
  darkMode,
}) => {
  if (!experiment) return null;

  // State for Chat Assistant
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: "Hello! I'm Arjun's AI Assistant. How can I help you explore machine learning, full-stack development, or recent research today?" },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // State for Text Analyzer
  const [analyzerText, setAnalyzerText] = useState('Machine learning and AI systems are revolutionizing modern software engineering by enabling autonomous reasoning and hyper-personalized digital experiences.');

  // State for Playground
  const [temperature, setTemperature] = useState(0.7);
  const [topP, setTopP] = useState(0.9);
  const [playgroundOutput, setPlaygroundOutput] = useState('');
  const [isSimulatingPlayground, setIsSimulatingPlayground] = useState(false);

  // State for Vision classifier
  const [selectedVisionImage, setSelectedVisionImage] = useState<string>('scene1');

  const handleSendChat = () => {
    if (!inputQuery.trim()) return;
    const userMsg = inputQuery;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInputQuery('');
    setIsGenerating(true);

    setTimeout(() => {
      let aiReply = "That's an interesting technical question! In modern AI engineering, combining vector embeddings with structured metadata filtering creates robust hybrid search with low hallucination.";
      if (userMsg.toLowerCase().includes('vision') || userMsg.toLowerCase().includes('yolo')) {
        aiReply = "For real-time computer vision, running quantized YOLOv9 ONNX models on edge accelerators allows sub-20ms inference with high mean Average Precision (mAP).";
      } else if (userMsg.toLowerCase().includes('project') || userMsg.toLowerCase().includes('built')) {
        aiReply = "Arjun has engineered high-impact systems like NeuralDesk (AI doc workspace), VisionGuard (real-time surveillance), and StudyPilot (adaptive tutor). Check out the Projects section!";
      } else if (userMsg.toLowerCase().includes('stack') || userMsg.toLowerCase().includes('skills')) {
        aiReply = "Arjun specializes in Python, PyTorch, LangChain, FastAPI, TypeScript, React, and PostgreSQL/pgvector.";
      }
      setChatMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
      setIsGenerating(false);
    }, 700);
  };

  const handleRunPlayground = () => {
    setIsSimulatingPlayground(true);
    setPlaygroundOutput('');
    setTimeout(() => {
      setPlaygroundOutput(`[Model: Gemini-Flash-v2 | Temp: ${temperature} | Top_P: ${topP}]\n\nSynthesized Output:\n"Autonomous multi-agent architectures leverage decentralized state-machines where each agent executes specialized tool calls with isolated memory contexts."\n\nLatency: 284ms | Tokens: 42 | Throughput: 148 tok/s`);
      setIsSimulatingPlayground(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div
        className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh] ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-blue-600">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base">{experiment.title}</span>
              <span className="text-xs text-slate-400">Interactive AI Lab Demo</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Experiment Content */}
        <div className="p-6 overflow-y-auto text-left space-y-6">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {experiment.description}
          </p>

          {/* CHAT ASSISTANT INTERFACE */}
          {experiment.demoType === 'chat' && (
            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 flex flex-col h-[380px]">
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none shadow-sm'
                          : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 rounded-bl-none shadow-xs'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isGenerating && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs text-slate-400 animate-pulse flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-spin" />
                      <span>Generating response...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                  placeholder="Ask about AI architecture, projects, or machine learning..."
                  className="flex-1 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent"
                />
                <button
                  onClick={handleSendChat}
                  disabled={!inputQuery.trim() || isGenerating}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          )}

          {/* TEXT ANALYZER INTERFACE */}
          {experiment.demoType === 'sentiment' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5">Input Text for Real-Time NLP Evaluation:</label>
                <textarea
                  value={analyzerText}
                  onChange={(e) => setAnalyzerText(e.target.value)}
                  rows={3}
                  className="w-full p-3 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Sentiment</span>
                  <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">Positive (96.4%)</p>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Readability</span>
                  <p className="text-base font-bold text-blue-600 dark:text-blue-400">Grade 11.2</p>
                </div>

                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Tone</span>
                  <p className="text-base font-bold text-purple-600 dark:text-purple-400">Technical / Confident</p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Named Entities</span>
                  <p className="text-base font-bold text-amber-600 dark:text-amber-400">4 Detected</p>
                </div>
              </div>
            </div>
          )}

          {/* IMAGE CLASSIFIER INTERFACE */}
          {experiment.demoType === 'vision' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
                    alt="Detected Scene"
                    className="w-full h-full object-cover"
                  />
                  {/* Bounding Box Overlays */}
                  <div className="absolute top-8 left-12 w-28 h-20 border-2 border-emerald-400 rounded bg-emerald-400/10 flex items-start p-1 text-[10px] font-mono text-emerald-300 font-bold">
                    person: 98.2%
                  </div>
                  <div className="absolute bottom-6 right-16 w-32 h-16 border-2 border-blue-400 rounded bg-blue-400/10 flex items-start p-1 text-[10px] font-mono text-blue-300 font-bold">
                    laptop: 95.7%
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <h4 className="font-bold text-slate-700 dark:text-slate-300">Model Inference Telemetry</h4>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Backbone:</span>
                      <span className="font-bold text-blue-600">YOLOv9-CSP</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Inference Time:</span>
                      <span className="font-bold text-emerald-600">18.4 ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Objects Count:</span>
                      <span className="font-bold">2 bounding boxes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Confidence Threshold:</span>
                      <span className="font-bold">0.75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI PLAYGROUND INTERFACE */}
          {(experiment.demoType === 'playground' || experiment.demoType === 'recommendation') && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold">Temperature</span>
                    <span className="font-mono text-blue-600">{temperature}</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="1.5"
                    step="0.05"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full accent-blue-600"
                  />

                  <div className="flex justify-between items-center text-xs pt-2">
                    <span className="font-bold">Top_P (Nucleus Sampling)</span>
                    <span className="font-mono text-indigo-600">{topP}</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.05"
                    value={topP}
                    onChange={(e) => setTopP(parseFloat(e.target.value))}
                    className="w-full accent-indigo-600"
                  />

                  <button
                    onClick={handleRunPlayground}
                    disabled={isSimulatingPlayground}
                    className="w-full mt-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{isSimulatingPlayground ? 'Sampling Model...' : 'Execute Hyperparameter Run'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs overflow-y-auto h-48 border border-slate-800 flex flex-col justify-center">
                  {playgroundOutput ? (
                    <pre className="whitespace-pre-wrap">{playgroundOutput}</pre>
                  ) : (
                    <span className="text-slate-500 text-center">Click Execute to trigger model token generation.</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
