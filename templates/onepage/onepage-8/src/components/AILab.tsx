import React, { useState, useEffect, useRef } from 'react';
import { SectionHeader } from './SectionHeader';
import { Play, RotateCcw, Plus, Sliders, Activity, Eye, Zap, Layers, Sparkles } from 'lucide-react';
import { CursorState } from '../types';

interface AILabProps {
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
  onClickSound: () => void;
  onNeuralSound: () => void;
}

interface Point {
  x: number;
  y: number;
  label: 0 | 1; // 0: Class A (Cyan), 1: Class B (Purple)
}

export const AILab: React.FC<AILabProps> = ({
  setCursorState,
  onHoverSound,
  onClickSound,
  onNeuralSound,
}) => {
  const [activeTab, setActiveTab] = useState<'classifier' | 'neural' | 'kernel'>('classifier');

  // --- Experiment 1: Decision Boundary State ---
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([
    { x: 0.25, y: 0.3, label: 0 },
    { x: 0.35, y: 0.45, label: 0 },
    { x: 0.2, y: 0.6, label: 0 },
    { x: 0.4, y: 0.2, label: 0 },
    { x: 0.75, y: 0.7, label: 1 },
    { x: 0.8, y: 0.55, label: 1 },
    { x: 0.65, y: 0.8, label: 1 },
    { x: 0.85, y: 0.4, label: 1 },
  ]);
  const [selectedClassToAdd, setSelectedClassToAdd] = useState<0 | 1>(0);
  const [kernelType, setKernelType] = useState<'rbf' | 'linear' | 'poly'>('rbf');
  const [gamma, setGamma] = useState(4.0);
  const [threshold, setThreshold] = useState(0.5);
  const [accuracy, setAccuracy] = useState(100);

  // Render & Calculate Decision Boundary on Canvas
  useEffect(() => {
    if (activeTab !== 'classifier') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const resolution = 20; // Grid step for boundary contour

    // Compute RBF / Distance prediction function
    const predict = (px: number, py: number): number => {
      if (points.length === 0) return 0.5;

      let score = 0;
      let totalWeight = 0;

      for (const p of points) {
        let distSq = (px - p.x) ** 2 + (py - p.y) ** 2;
        let weight = 0;

        if (kernelType === 'linear') {
          weight = (px * p.x + py * p.y);
        } else if (kernelType === 'poly') {
          weight = (px * p.x + py * p.y + 0.1) ** 2;
        } else {
          // RBF
          weight = Math.exp(-gamma * distSq);
        }

        const target = p.label === 1 ? 1 : -1;
        score += weight * target;
        totalWeight += Math.abs(weight);
      }

      const normalized = totalWeight > 0 ? (score / totalWeight + 1) / 2 : 0.5;
      return Math.min(1, Math.max(0, normalized));
    };

    // Draw Heatmap Decision Landscape
    for (let x = 0; x < width; x += resolution) {
      for (let y = 0; y < height; y += resolution) {
        const nx = x / width;
        const ny = y / height;
        const pred = predict(nx, ny);

        if (pred >= threshold) {
          // Class B (Violet/Purple)
          const alpha = (pred - threshold) * 0.45;
          ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
        } else {
          // Class A (Cyan)
          const alpha = (threshold - pred) * 0.45;
          ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
        }
        ctx.fillRect(x, y, resolution, resolution);
      }
    }

    // Draw Decision Boundary Line (Iso-contour)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);

    for (let x = 0; x < width; x += resolution) {
      for (let y = 0; y < height; y += resolution) {
        const nx = x / width;
        const ny = y / height;
        const val = predict(nx, ny);
        if (Math.abs(val - threshold) < 0.04) {
          ctx.strokeRect(x, y, resolution, resolution);
        }
      }
    }
    ctx.setLineDash([]);

    // Draw Data Points
    let correctCount = 0;
    points.forEach((p) => {
      const px = p.x * width;
      const py = p.y * height;
      const pred = predict(p.x, p.y);
      const isCorrect = (pred >= threshold ? 1 : 0) === p.label;
      if (isCorrect) correctCount++;

      // Outer halo
      ctx.beginPath();
      ctx.arc(px, py, 11, 0, Math.PI * 2);
      ctx.fillStyle = p.label === 0 ? 'rgba(6, 182, 212, 0.3)' : 'rgba(168, 85, 247, 0.3)';
      ctx.fill();

      // Core point
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fillStyle = p.label === 0 ? '#22d3ee' : '#c084fc';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.fill();
      ctx.stroke();
    });

    const acc = points.length > 0 ? Math.round((correctCount / points.length) * 100) : 100;
    setAccuracy(acc);
  }, [points, kernelType, gamma, threshold, activeTab]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setPoints([...points, { x, y, label: selectedClassToAdd }]);
    onNeuralSound();
  };

  const resetPoints = () => {
    onClickSound();
    setPoints([
      { x: 0.25, y: 0.3, label: 0 },
      { x: 0.35, y: 0.45, label: 0 },
      { x: 0.2, y: 0.6, label: 0 },
      { x: 0.75, y: 0.7, label: 1 },
      { x: 0.8, y: 0.55, label: 1 },
      { x: 0.65, y: 0.8, label: 1 },
    ]);
  };

  // --- Experiment 2: Neural Net Visualizer State ---
  const [inputValA, setInputValA] = useState(0.85);
  const [inputValB, setInputValB] = useState(0.42);
  const [isPropagating, setIsPropagating] = useState(false);

  const runForwardPass = () => {
    setIsPropagating(true);
    onNeuralSound();
    setTimeout(() => setIsPropagating(false), 900);
  };

  // Compute mock forward propagation logits
  const hidden1 = Math.tanh(inputValA * 0.7 + inputValB * -0.4 + 0.1);
  const hidden2 = Math.tanh(inputValA * -0.5 + inputValB * 0.8 + 0.2);
  const hidden3 = Math.tanh(inputValA * 0.9 + inputValB * 0.6 - 0.3);
  const outputLogit = 1 / (1 + Math.exp(-(hidden1 * 0.6 + hidden2 * 0.8 + hidden3 * -0.5)));

  // --- Experiment 3: Convolution Kernel Sandbox ---
  const [selectedKernel, setSelectedKernel] = useState<'sobel' | 'sharpen' | 'ridge' | 'gaussian'>('sobel');

  const kernels = {
    sobel: [
      [-1, 0, 1],
      [-2, 0, 2],
      [-1, 0, 1],
    ],
    sharpen: [
      [0, -1, 0],
      [-1, 5, -1],
      [0, -1, 0],
    ],
    ridge: [
      [-1, -1, -1],
      [-1, 8, -1],
      [-1, -1, -1],
    ],
    gaussian: [
      [1 / 16, 2 / 16, 1 / 16],
      [2 / 16, 4 / 16, 2 / 16],
      [1 / 16, 2 / 16, 1 / 16],
    ],
  };

  return (
    <section id="ailab" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        index="06"
        category="INTERACTIVE EXPERIMENTS"
        title="AI LAB // SANDBOX"
        subtitle="Explore real-time computational models, decision boundary topologies, and forward-pass activations directly in the browser."
      />

      {/* Experiment Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 w-fit">
        <button
          onClick={() => {
            onClickSound();
            setActiveTab('classifier');
          }}
          onMouseEnter={onHoverSound}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all ${
            activeTab === 'classifier'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>01_DECISION_CLASSIFIER</span>
        </button>

        <button
          onClick={() => {
            onClickSound();
            setActiveTab('neural');
          }}
          onMouseEnter={onHoverSound}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all ${
            activeTab === 'neural'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>02_NEURAL_FORWARD_PASS</span>
        </button>

        <button
          onClick={() => {
            onClickSound();
            setActiveTab('kernel');
          }}
          onMouseEnter={onHoverSound}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all ${
            activeTab === 'kernel'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>03_CONV_KERNEL_ENGINE</span>
        </button>
      </div>

      {/* Tab 1: Interactive Decision Boundary Classifier */}
      {activeTab === 'classifier' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 rounded-2xl glass-panel-glow border border-cyan-500/30">
          {/* Left Canvas */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-3">
              <span className="text-cyan-400 font-bold">// 2D FEATURE EMBEDDING SPACE</span>
              <span>CLICK TO ADD POINTS</span>
            </div>

            <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-slate-700 bg-[#060910]">
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                onClick={handleCanvasClick}
                onMouseEnter={() => setCursorState({ variant: 'interact', text: 'ADD POINT' })}
                onMouseLeave={() => setCursorState({ variant: 'default', text: '' })}
                className="w-full h-full cursor-crosshair"
              />

              <div className="absolute bottom-3 left-3 flex items-center space-x-3 px-3 py-1.5 rounded-lg bg-[#070c14]/90 border border-slate-800 font-mono text-xs">
                <span className="flex items-center space-x-1.5 text-cyan-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span>Class 0</span>
                </span>
                <span className="flex items-center space-x-1.5 text-purple-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  <span>Class 1</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Controls & Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-display text-xl font-bold text-slate-100">
                  HYPERPARAMETER TUNING
                </h4>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-400 font-bold">
                  ACCURACY: {accuracy}%
                </div>
              </div>

              {/* Add Point Class Selector */}
              <div className="mt-6 space-y-2">
                <span className="font-mono text-xs text-slate-400 uppercase">ACTIVE PLACEMENT CLASS:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedClassToAdd(0)}
                    className={`py-2 px-3 rounded-lg font-mono text-xs font-semibold flex items-center justify-center space-x-2 border transition-all ${
                      selectedClassToAdd === 0
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span>CLASS A (CYAN)</span>
                  </button>
                  <button
                    onClick={() => setSelectedClassToAdd(1)}
                    className={`py-2 px-3 rounded-lg font-mono text-xs font-semibold flex items-center justify-center space-x-2 border transition-all ${
                      selectedClassToAdd === 1
                        ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                    <span>CLASS B (VIOLET)</span>
                  </button>
                </div>
              </div>

              {/* Kernel Selection */}
              <div className="mt-6 space-y-2">
                <span className="font-mono text-xs text-slate-400 uppercase">KERNEL FUNCTION:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['rbf', 'poly', 'linear'] as const).map((k) => (
                    <button
                      key={k}
                      onClick={() => {
                        onClickSound();
                        setKernelType(k);
                      }}
                      className={`py-2 rounded-lg font-mono text-xs font-bold uppercase border transition-all ${
                        kernelType === k
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="mt-6 space-y-4 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>GAMMA / BANDWIDTH:</span>
                    <span className="text-cyan-400 font-bold">{gamma.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.5"
                    value={gamma}
                    onChange={(e) => setGamma(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>DECISION THRESHOLD:</span>
                    <span className="text-cyan-400 font-bold">{threshold.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="0.9"
                    step="0.05"
                    value={threshold}
                    onChange={(e) => setThreshold(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <span className="font-mono text-xs text-slate-500">TOTAL SAMPLES: {points.length}</span>
              <button
                onClick={resetPoints}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 font-mono text-xs text-slate-300"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET SAMPLES</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Neural Forward Pass Visualizer */}
      {activeTab === 'neural' && (
        <div className="p-6 md:p-8 rounded-2xl glass-panel-glow border border-cyan-500/30 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="font-display text-2xl font-bold text-slate-100 uppercase">
                FORWARD PROPAGATION ENGINE
              </h4>
              <p className="text-sm text-slate-400 font-body">
                Observe live tensor transformations through fully connected hidden layers to the Sigmoid classifier.
              </p>
            </div>
            <button
              onClick={runForwardPass}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-mono text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:brightness-110 transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>RUN INFERENCE PULSE</span>
            </button>
          </div>

          {/* Interactive Input Vectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#060910] border border-slate-800">
              <div className="flex justify-between text-slate-300 mb-2">
                <span>INPUT X₁ (FEATURE 1):</span>
                <span className="text-cyan-400 font-bold">{inputValA.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="-1"
                max="1"
                step="0.05"
                value={inputValA}
                onChange={(e) => setInputValA(parseFloat(e.target.value))}
                className="w-full accent-cyan-400"
              />
            </div>
            <div className="p-4 rounded-xl bg-[#060910] border border-slate-800">
              <div className="flex justify-between text-slate-300 mb-2">
                <span>INPUT X₂ (FEATURE 2):</span>
                <span className="text-purple-400 font-bold">{inputValB.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="-1"
                max="1"
                step="0.05"
                value={inputValB}
                onChange={(e) => setInputValB(parseFloat(e.target.value))}
                className="w-full accent-purple-400"
              />
            </div>
          </div>

          {/* Neural Architecture Schematic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {/* Input Layer */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="text-slate-400 uppercase font-bold">// INPUT TENSOR [2x1]</div>
              <div className="p-2.5 rounded bg-[#060a12] border border-cyan-500/30 text-cyan-300">
                x₁ = {inputValA.toFixed(3)}
              </div>
              <div className="p-2.5 rounded bg-[#060a12] border border-purple-500/30 text-purple-300">
                x₂ = {inputValB.toFixed(3)}
              </div>
            </div>

            {/* Hidden Layer with Tanh Activation */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="text-slate-400 uppercase font-bold">// HIDDEN LAYER [Tanh 3x1]</div>
              <div className={`p-2 rounded bg-[#060a12] border ${isPropagating ? 'border-cyan-400 animate-pulse text-cyan-300' : 'border-slate-800 text-slate-300'}`}>
                h₁ = {hidden1.toFixed(3)}
              </div>
              <div className={`p-2 rounded bg-[#060a12] border ${isPropagating ? 'border-cyan-400 animate-pulse text-cyan-300' : 'border-slate-800 text-slate-300'}`}>
                h₂ = {hidden2.toFixed(3)}
              </div>
              <div className={`p-2 rounded bg-[#060a12] border ${isPropagating ? 'border-cyan-400 animate-pulse text-cyan-300' : 'border-slate-800 text-slate-300'}`}>
                h₃ = {hidden3.toFixed(3)}
              </div>
            </div>

            {/* Output Sigmoid */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="text-slate-400 uppercase font-bold">// OUTPUT [Sigmoid]</div>
              <div className="p-4 rounded-xl bg-[#060a12] border border-emerald-500/40 text-center">
                <div className="text-2xl font-bold text-emerald-400">
                  {(outputLogit * 100).toFixed(1)}%
                </div>
                <div className="text-[10px] text-slate-500 mt-1">CLASSIFICATION CONFIDENCE</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Convolution Kernel Sandbox */}
      {activeTab === 'kernel' && (
        <div className="p-6 md:p-8 rounded-2xl glass-panel-glow border border-cyan-500/30 space-y-6 font-mono text-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="font-display text-2xl font-bold text-slate-100 uppercase">
                SPATIAL CONVOLUTION MATRIX
              </h4>
              <p className="text-sm text-slate-400 font-body">
                Select standard computer vision kernels and inspect 3x3 mathematical convolution weight stencils.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {(['sobel', 'sharpen', 'ridge', 'gaussian'] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => {
                    onClickSound();
                    setSelectedKernel(k);
                  }}
                  className={`px-3 py-1.5 rounded-lg uppercase font-bold border transition-all ${
                    selectedKernel === k
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {/* 3x3 Grid Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="flex flex-col items-center">
              <span className="text-slate-400 mb-4">// 3x3 KERNEL WEIGHTS (W)</span>
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#060910] border border-cyan-500/30">
                {kernels[selectedKernel].map((row, rIdx) =>
                  row.map((val, cIdx) => (
                    <div
                      key={`${rIdx}-${cIdx}`}
                      className="w-16 h-16 rounded-lg bg-slate-900/80 border border-slate-700 flex items-center justify-center text-sm font-bold text-cyan-300"
                    >
                      {typeof val === 'number' && val % 1 !== 0 ? val.toFixed(2) : val}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-4">
              <div className="text-cyan-400 font-bold uppercase">// MATHEMATICAL FORMULATION</div>
              <p className="text-slate-300 font-sans leading-relaxed text-sm">
                S(i, j) = (I * K)(i, j) = Σ Σ I(i - m, j - n) · K(m, n)
              </p>
              <div className="p-3 rounded bg-[#060a12] border border-slate-800 text-slate-400 text-xs">
                Applied during feature map extraction in Convolutional Neural Networks (CNNs) to isolate high-frequency spatial gradients, contours, and edge orientations.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
