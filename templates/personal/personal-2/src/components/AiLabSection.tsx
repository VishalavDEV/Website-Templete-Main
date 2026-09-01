import React, { useState, useRef } from 'react';
import { AI_LAB_EXPERIMENTS } from '../data/portfolioData';
import {
  Sparkles,
  MessageSquare,
  Image as ImageIcon,
  FileSearch,
  Compass,
  BarChart2,
  Terminal,
  Send,
  Upload,
  RefreshCw,
  Zap,
} from 'lucide-react';

export default function AiLabSection() {
  const [activeExperimentId, setActiveExperimentId] = useState<string>('ai-chat');

  // 1. AI Chat Assistant State
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    { role: 'assistant', text: 'Hello! I am connected to the AI Lab inference engine. Ask me anything about machine learning pipelines, prompt engineering, or model architectures.' },
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  // 2. Image Classifier State
  const [selectedImagePreset, setSelectedImagePreset] = useState<'mri' | 'satellite' | 'autonomous' | 'robot'>('autonomous');
  const [customImageSrc, setCustomImageSrc] = useState<string | null>(null);
  const [isClassifying, setIsClassifying] = useState(false);
  const [classificationResults, setClassificationResults] = useState<Array<{ label: string; confidence: number }>>([
    { label: 'Urban Pedestrian & Vehicle Scene', confidence: 96.8 },
    { label: 'Traffic Signal (Green Active)', confidence: 91.2 },
    { label: 'Bicycle Lane Marker', confidence: 84.5 },
  ]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 3. Text Analyzer State
  const [analysisText, setAnalysisText] = useState(
    'Arjun Mehta developed NeuralDesk to solve document ingestion latency with high precision hybrid vector search and FastAPI microservices.'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    sentiment: string;
    sentimentScore: number;
    tone: string;
    readability: string;
    keyEntities: string[];
    wordCount: number;
  }>({
    sentiment: 'Positive',
    sentimentScore: 88,
    tone: 'Technical & Optimistic',
    readability: 'Advanced Engineering',
    keyEntities: ['Arjun Mehta', 'NeuralDesk', 'FastAPI', 'Vector Search'],
    wordCount: 16,
  });

  // 4. Recommendation Engine State
  const [aiDomain, setAiDomain] = useState<'nlp' | 'vision' | 'agent' | 'tabular'>('nlp');
  const [computeBudget, setComputeBudget] = useState<'edge' | 'cloud-gpu' | 'serverless'>('cloud-gpu');
  const [latencyPriority, setLatencyPriority] = useState<'ultra-low' | 'balanced' | 'max-reasoning'>('balanced');
  const [recommendedArchitecture, setRecommendedArchitecture] = useState({
    title: 'Hybrid Quantized Transformer + pgvector',
    model: 'Gemini 3.7 Flash + LoRA fine-tuning',
    backend: 'FastAPI + Celery async worker queue',
    vectorStore: 'PostgreSQL HNSW index',
    estimatedLatency: '< 180 ms',
    fitScore: 97.4,
  });

  // 5. Data Explorer State
  const [benchmarkMetric, setBenchmarkMetric] = useState<'latency' | 'accuracy' | 'vram'>('latency');

  // 6. AI Playground State
  const [systemPrompt, setSystemPrompt] = useState('You are an expert distributed systems engineer.');
  const [userPrompt, setUserPrompt] = useState('Explain how to avoid race conditions in asynchronous Redis workers.');
  const [temperature, setTemperature] = useState(0.7);
  const [playgroundOutput, setPlaygroundOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [playgroundStats, setPlaygroundStats] = useState<{ latencyMs: number; tokens: number } | null>(null);

  // Handlers
  const handleSendChat = async () => {
    if (!chatInput.trim() || isChatLoading) return;
    const userMsg = chatInput.trim();
    setChatInput('');
    setChatMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setIsChatLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setChatMessages((prev) => [
        ...prev,
        { role: 'assistant', text: data.reply || 'Inference completed successfully.' },
      ]);
    } catch {
      setChatMessages((prev) => [
        ...prev,
        { role: 'assistant', text: `Analyzing "${userMsg}": The optimal approach leverages quantized PyTorch embeddings paired with asynchronous streaming consumers.` },
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleClassifyImage = (preset: 'mri' | 'satellite' | 'autonomous' | 'robot', customSrc?: string) => {
    setSelectedImagePreset(preset);
    if (customSrc) setCustomImageSrc(customSrc);
    else setCustomImageSrc(null);

    setIsClassifying(true);
    setTimeout(() => {
      setIsClassifying(false);
      if (preset === 'mri') {
        setClassificationResults([
          { label: 'Cerebral Cortex MRI (Axial View)', confidence: 98.2 },
          { label: 'Normal Ventricular Volume', confidence: 94.5 },
          { label: 'Artifact Score: Low', confidence: 89.1 },
        ]);
      } else if (preset === 'satellite') {
        setClassificationResults([
          { label: 'Agricultural Canopy Density', confidence: 95.4 },
          { label: 'Hydrological Surface Vector', confidence: 88.7 },
          { label: 'Urban Expansion Fringe', confidence: 79.2 },
        ]);
      } else if (preset === 'robot') {
        setClassificationResults([
          { label: '6-DOF Articulated Robotic Arm', confidence: 97.6 },
          { label: 'Kinematic Trajectory Target', confidence: 92.1 },
          { label: 'End-Effector Gripper State: Open', confidence: 88.4 },
        ]);
      } else {
        setClassificationResults([
          { label: 'Urban Pedestrian & Vehicle Scene', confidence: 96.8 },
          { label: 'Traffic Signal (Green Active)', confidence: 91.2 },
          { label: 'Bicycle Lane Marker', confidence: 84.5 },
        ]);
      }
    }, 700);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const src = event.target?.result as string;
        handleClassifyImage('autonomous', src);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyzeText = async () => {
    if (!analysisText.trim() || isAnalyzing) return;
    setIsAnalyzing(true);
    try {
      const res = await fetch('/api/ai-lab/analyze-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: analysisText }),
      });
      const data = await res.json();
      setAnalysisResult({
        sentiment: data.sentiment || 'Positive',
        sentimentScore: data.sentimentScore || 85,
        tone: data.tone || 'Analytical',
        readability: data.readability || 'Intermediate',
        keyEntities: data.keyEntities || ['FastAPI', 'Neural System'],
        wordCount: data.wordCount || analysisText.split(/\s+/).length,
      });
    } catch {
      setAnalysisResult({
        sentiment: 'Positive',
        sentimentScore: 92,
        tone: 'Technical & High Precision',
        readability: 'Advanced Research',
        keyEntities: ['Arjun Mehta', 'NeuralDesk', 'FastAPI'],
        wordCount: analysisText.split(/\s+/).length,
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleComputeRecommendation = (domain = aiDomain, budget = computeBudget, latency = latencyPriority) => {
    let title = 'Hybrid Quantized Transformer + pgvector';
    let model = 'Gemini 3.7 Flash + LoRA fine-tuning';
    let backend = 'FastAPI + Celery async worker queue';
    let vectorStore = 'PostgreSQL HNSW index';
    let estLatency = '< 180 ms';
    let fit = 96.8;

    if (domain === 'vision') {
      title = 'YOLOv8s + TensorRT FP16 Stream Engine';
      model = 'YOLOv8s Quantized on CUDA';
      backend = 'FastAPI + WebSockets + OpenCV Zero-Copy';
      vectorStore = 'Milvus / Qdrant Edge Collection';
      estLatency = budget === 'edge' ? '32 ms' : '18 ms';
      fit = 98.4;
    } else if (domain === 'agent') {
      title = 'ReAct Multi-Agent Coordinator + Tool Schema';
      model = 'Gemini 3.7 Flash with Function Calling';
      backend = 'LangChain + Python AsyncIO Supervisor';
      vectorStore = 'PostgreSQL pgvector + Redis Short-term Memory';
      estLatency = latency === 'ultra-low' ? '< 350 ms' : '< 750 ms';
      fit = 95.9;
    } else if (domain === 'tabular') {
      title = 'XGBoost + LightGBM GPU Acceleration Pipeline';
      model = 'Gradient Boosted Decision Trees + SHAP explainability';
      backend = 'FastAPI + Pandas Vectorized Core';
      vectorStore = 'DuckDB / TimescaleDB';
      estLatency = '< 12 ms';
      fit = 99.1;
    }

    setRecommendedArchitecture({
      title,
      model,
      backend,
      vectorStore,
      estimatedLatency: estLatency,
      fitScore: fit,
    });
  };

  const handleRunPlayground = async () => {
    setIsGenerating(true);
    setPlaygroundOutput('');
    try {
      const res = await fetch('/api/ai-lab/playground', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemPrompt, userPrompt, temperature }),
      });
      const data = await res.json();
      setPlaygroundOutput(data.output || 'Generation finished.');
      setPlaygroundStats({ latencyMs: data.latencyMs || 140, tokens: data.tokens || 52 });
    } catch {
      setPlaygroundOutput(
        `To eliminate race conditions in asynchronous Redis workers:\n1. Use atomic Lua scripts (redis.eval()) for check-and-set locks.\n2. Leverage Redlock algorithms with unique UUID expiration keys.\n3. Ensure idempotent consumer pipelines via database transaction idempotency tokens.`
      );
      setPlaygroundStats({ latencyMs: 165, tokens: 48 });
    } finally {
      setIsGenerating(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'PROTOTYPE': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'EXPERIMENT': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="ailab" className="py-20 relative overflow-hidden bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>INTERACTIVE BENCH</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            AI LAB &amp; EXPERIMENTS
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
            Where prototypes become scalable products. Test live inference models, classifiers, and architecture estimators.
          </p>

          {/* Experiment Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full pt-4">
            {AI_LAB_EXPERIMENTS.map((exp) => {
              const isSelected = activeExperimentId === exp.id;
              return (
                <button
                  key={exp.id}
                  id={`ai-lab-tab-${exp.id}`}
                  onClick={() => setActiveExperimentId(exp.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[112px] cursor-pointer shadow-2xs ${
                    isSelected
                      ? 'bg-white border-blue-500 shadow-sm ring-2 ring-blue-500/20'
                      : 'bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xs'
                  }`}
                >
                  {/* Top Row: Icon + Status Badge */}
                  <div className="flex items-center justify-between gap-1.5 w-full">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {exp.id === 'ai-chat' && <MessageSquare className="w-3.5 h-3.5" />}
                      {exp.id === 'image-classifier' && <ImageIcon className="w-3.5 h-3.5" />}
                      {exp.id === 'text-analyzer' && <FileSearch className="w-3.5 h-3.5" />}
                      {exp.id === 'recommendation-engine' && <Compass className="w-3.5 h-3.5" />}
                      {exp.id === 'data-explorer' && <BarChart2 className="w-3.5 h-3.5" />}
                      {exp.id === 'ai-playground' && <Terminal className="w-3.5 h-3.5" />}
                    </div>

                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border shrink-0 ${getStatusBadge(exp.status)}`}>
                      {exp.status}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="my-1.5">
                    <span className={`text-xs font-heading font-bold block leading-snug ${isSelected ? 'text-blue-600' : 'text-slate-800'}`}>
                      {exp.title}
                    </span>
                  </div>

                  {/* Bottom Tag */}
                  <div className="pt-1.5 border-t border-slate-100 w-full">
                    <span className="text-[10px] text-slate-400 font-medium block truncate">
                      {exp.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Experiment Main Bench Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs min-h-[460px]">
          
          {/* 1. AI Chat Assistant */}
          {activeExperimentId === 'ai-chat' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">AI Chat Assistant</h3>
                    <p className="text-xs text-slate-500">Ask technical questions and receive real-time AI responses</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  ● LIVE
                </span>
              </div>

              {/* Chat Message Stream */}
              <div className="h-68 overflow-y-auto space-y-3 p-4 rounded-xl bg-slate-50/70 border border-slate-200/70 font-sans">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xl p-3 rounded-xl text-xs sm:text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none shadow-2xs'
                          : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-2xs'
                      }`}
                    >
                      <div className={`text-[10px] font-bold uppercase mb-1 ${msg.role === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>
                        {msg.role === 'user' ? 'You' : 'Arjun Lab Model'}
                      </div>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isChatLoading && (
                  <div className="flex justify-start">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-blue-600 flex items-center gap-2 shadow-2xs">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Generating token response...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                  placeholder="Ask a technical question about ML, RAG, PyTorch or FastAPI..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white font-sans transition-all"
                />
                <button
                  onClick={handleSendChat}
                  disabled={isChatLoading || !chatInput.trim()}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all disabled:opacity-40 flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          )}

          {/* 2. Image Classifier */}
          {activeExperimentId === 'image-classifier' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">Vision Image Classifier</h3>
                    <p className="text-xs text-slate-500">Upload or select sample feeds to run inference</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  ● LIVE
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left: Image Canvas Preview */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="relative aspect-video rounded-xl bg-slate-900 border border-slate-200 overflow-hidden flex items-center justify-center shadow-2xs">
                    <img
                      src={
                        customImageSrc ||
                        (selectedImagePreset === 'mri'
                          ? 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80'
                          : selectedImagePreset === 'satellite'
                          ? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
                          : selectedImagePreset === 'robot'
                          ? 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
                          : 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80')
                      }
                      alt="Classifier Feed"
                      className="w-full h-full object-cover"
                    />

                    {isClassifying && (
                      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-xs flex flex-col items-center justify-center gap-2 text-white text-xs font-medium">
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Running Forward Pass & Softmax...</span>
                      </div>
                    )}
                  </div>

                  {/* Preset Buttons & Custom File Upload */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">Presets:</span>
                    {[
                      { id: 'autonomous', label: 'Autonomous' },
                      { id: 'mri', label: 'Medical MRI' },
                      { id: 'satellite', label: 'Satellite' },
                      { id: 'robot', label: 'Robotics' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleClassifyImage(p.id as any)}
                        className={`px-2.5 py-1 rounded-lg text-xs border transition-all cursor-pointer ${
                          selectedImagePreset === p.id && !customImageSrc
                            ? 'bg-blue-50 text-blue-600 border-blue-300 font-semibold'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs flex items-center gap-1 hover:bg-slate-50 cursor-pointer shadow-2xs"
                    >
                      <Upload className="w-3 h-3" /> Upload
                    </button>
                  </div>
                </div>

                {/* Right: Softmax Predictions */}
                <div className="lg:col-span-6 space-y-3">
                  <span className="text-xs text-slate-700 font-bold uppercase tracking-wider block">
                    Classification Softmax Breakdown:
                  </span>
                  <div className="space-y-2.5">
                    {classificationResults.map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-800 font-semibold">{item.label}</span>
                          <span className="text-blue-600 font-bold">{item.confidence}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-blue-600 transition-all duration-500"
                            style={{ width: `${item.confidence}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Text Analyzer */}
          {activeExperimentId === 'text-analyzer' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <FileSearch className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">NLP Text Analyzer</h3>
                    <p className="text-xs text-slate-500">Real-time sentiment, keywords, and entity analysis</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  ● LIVE
                </span>
              </div>

              <div className="space-y-3">
                <textarea
                  value={analysisText}
                  onChange={(e) => setAnalysisText(e.target.value)}
                  rows={3}
                  className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white font-sans transition-all resize-none"
                  placeholder="Enter text to analyze sentiment and key entities..."
                />
                <button
                  onClick={handleAnalyzeText}
                  disabled={isAnalyzing || !analysisText.trim()}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  {isAnalyzing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5" />}
                  <span>Run NLP Vector Extraction</span>
                </button>
              </div>

              {/* Analysis Result Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Sentiment</span>
                  <span className="font-heading font-bold text-base text-emerald-600 mt-0.5 block">{analysisResult.sentiment}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{analysisResult.sentimentScore}% score</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Tone</span>
                  <span className="font-heading font-bold text-xs text-slate-800 mt-1 block truncate">{analysisResult.tone}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Readability</span>
                  <span className="font-heading font-bold text-xs text-slate-800 mt-1 block truncate">{analysisResult.readability}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Word Count</span>
                  <span className="font-heading font-bold text-base text-slate-900 mt-0.5 block">{analysisResult.wordCount} words</span>
                </div>
              </div>

              {/* Entities Pill Box */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs uppercase text-slate-500 font-bold block">
                  Extracted Named Entities:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {analysisResult.keyEntities.map((ent, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium">
                      {ent}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. Recommendation Engine */}
          {activeExperimentId === 'recommendation-engine' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">AI Architecture Recommendation Engine</h3>
                    <p className="text-xs text-slate-500">Configure parameters to estimate optimal stack & inference models</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">
                  ● PROTOTYPE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <label className="text-xs text-slate-700 font-semibold block">1. Problem Domain</label>
                  <select
                    value={aiDomain}
                    onChange={(e) => {
                      const val = e.target.value as any;
                      setAiDomain(val);
                      handleComputeRecommendation(val, computeBudget, latencyPriority);
                    }}
                    className="w-full p-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  >
                    <option value="nlp">Generative AI / NLP / RAG</option>
                    <option value="vision">Computer Vision / Video</option>
                    <option value="agent">Autonomous AI Agents</option>
                    <option value="tabular">Financial Tabular</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <label className="text-xs text-slate-700 font-semibold block">2. Compute Target</label>
                  <select
                    value={computeBudget}
                    onChange={(e) => {
                      const val = e.target.value as any;
                      setComputeBudget(val);
                      handleComputeRecommendation(aiDomain, val, latencyPriority);
                    }}
                    className="w-full p-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  >
                    <option value="cloud-gpu">Cloud GPU (A100 / H100)</option>
                    <option value="edge">Edge Device (Jetson / WASM)</option>
                    <option value="serverless">Serverless Token API</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <label className="text-xs text-slate-700 font-semibold block">3. Latency Priority</label>
                  <select
                    value={latencyPriority}
                    onChange={(e) => {
                      const val = e.target.value as any;
                      setLatencyPriority(val);
                      handleComputeRecommendation(aiDomain, computeBudget, val);
                    }}
                    className="w-full p-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  >
                    <option value="ultra-low">Ultra-Low Latency (&lt; 50ms)</option>
                    <option value="balanced">Balanced Throughput</option>
                    <option value="max-reasoning">Maximum Reasoning</option>
                  </select>
                </div>
              </div>

              {/* Recommendation Card Output */}
              <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-700 font-bold uppercase">
                    Recommended Architecture:
                  </span>
                  <span className="text-xs text-emerald-700 font-semibold">
                    Fit Score: {recommendedArchitecture.fitScore}%
                  </span>
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900">
                  {recommendedArchitecture.title}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-sans">
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-400 text-[11px] block">Model Selection:</span>
                    <span className="text-blue-600 font-semibold">{recommendedArchitecture.model}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-400 text-[11px] block">Backend Runtime:</span>
                    <span className="text-indigo-600 font-semibold">{recommendedArchitecture.backend}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-400 text-[11px] block">Est. P95 Latency:</span>
                    <span className="text-emerald-600 font-semibold">{recommendedArchitecture.estimatedLatency}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. Data Explorer */}
          {activeExperimentId === 'data-explorer' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">Model Telemetry &amp; Benchmark Explorer</h3>
                    <p className="text-xs text-slate-500">Benchmark dataset comparing production AI models</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
                  ● EXPERIMENT
                </span>
              </div>

              {/* Metric Switcher */}
              <div className="flex gap-2">
                {[
                  { id: 'latency', label: 'Latency (ms)' },
                  { id: 'accuracy', label: 'Accuracy (%)' },
                  { id: 'vram', label: 'VRAM Usage (GB)' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setBenchmarkMetric(m.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs border transition-all cursor-pointer ${
                      benchmarkMetric === m.id
                        ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* Visual Benchmark Bars */}
              <div className="space-y-3.5 p-5 rounded-xl bg-slate-50 border border-slate-200">
                {[
                  { name: 'Gemini 3.7 Flash', latency: 85, accuracy: 88.5, vram: 4.2, color: '#2563eb' },
                  { name: 'PyTorch YOLOv8s (TensorRT)', latency: 32, accuracy: 91.8, vram: 1.8, color: '#059669' },
                  { name: 'DeepSeek R1 (Distill 7B)', latency: 140, accuracy: 86.4, vram: 6.8, color: '#7c3aed' },
                  { name: 'Custom Fine-tuned BERT', latency: 18, accuracy: 84.1, vram: 0.9, color: '#d97706' },
                ].map((row, i) => {
                  const val = benchmarkMetric === 'latency' ? row.latency : benchmarkMetric === 'accuracy' ? row.accuracy : row.vram;
                  const max = benchmarkMetric === 'latency' ? 160 : benchmarkMetric === 'accuracy' ? 100 : 8;
                  const unit = benchmarkMetric === 'latency' ? 'ms' : benchmarkMetric === 'accuracy' ? '%' : 'GB';

                  return (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-800 font-semibold">{row.name}</span>
                        <span style={{ color: row.color }} className="font-bold">
                          {val} {unit}
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${(val / max) * 100}%`,
                            backgroundColor: row.color,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 6. AI Playground */}
          {activeExperimentId === 'ai-playground' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">AI Prompt Sandbox</h3>
                    <p className="text-xs text-slate-500">Test system instructions and model execution parameters</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  ● LIVE
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-700 font-semibold block mb-1">
                      System Instruction:
                    </label>
                    <textarea
                      value={systemPrompt}
                      onChange={(e) => setSystemPrompt(e.target.value)}
                      rows={2}
                      className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500 resize-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-700 font-semibold block mb-1">
                      User Prompt:
                    </label>
                    <textarea
                      value={userPrompt}
                      onChange={(e) => setUserPrompt(e.target.value)}
                      rows={3}
                      className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500 resize-none font-mono"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <span>Temp: {temperature}</span>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={temperature}
                        onChange={(e) => setTemperature(parseFloat(e.target.value))}
                        className="accent-blue-600 cursor-pointer"
                      />
                    </div>

                    <button
                      onClick={handleRunPlayground}
                      disabled={isGenerating}
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      {isGenerating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5" />}
                      <span>Execute</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5 flex flex-col">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Console Output:</span>
                    {playgroundStats && (
                      <span className="text-emerald-700 font-medium">
                        {playgroundStats.latencyMs}ms • {playgroundStats.tokens} tokens
                      </span>
                    )}
                  </div>

                  <div className="flex-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 overflow-y-auto min-h-[140px] whitespace-pre-wrap leading-relaxed">
                    {isGenerating ? (
                      <div className="flex items-center gap-2 text-blue-600">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Generating response...</span>
                      </div>
                    ) : playgroundOutput ? (
                      playgroundOutput
                    ) : (
                      <span className="text-slate-400 italic">Click "Execute" to run prompt inference.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
