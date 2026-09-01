import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Cpu, Zap, Activity, Key, Plus, Play, Pause, RefreshCw, Layers, ShieldCheck, Check } from 'lucide-react';

export default function AiModels() {
  const [showDeployModal, setShowDeployModal] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [selectedKey, setSelectedKey] = useState('');
  const [copied, setCopied] = useState(false);

  const [models, setModels] = useState([
    { id: 1, name: 'Neura-LLM v4.2', type: 'Generative Text', status: 'Active', latency: '64ms', requests: '12.4M', context: '128K', accuracy: '98.4%', gpu: 'NVIDIA H100 x4' },
    { id: 2, name: 'VisionCore-Pro', type: 'Computer Vision', status: 'Active', latency: '42ms', requests: '8.1M', context: 'Multi-Modal', accuracy: '99.1%', gpu: 'NVIDIA A100 x2' },
    { id: 3, name: 'CodeGen-X Enterprise', type: 'Code Synthesis', status: 'Active', latency: '88ms', requests: '4.2M', context: '64K', accuracy: '96.8%', gpu: 'NVIDIA H100 x2' },
    { id: 4, name: 'AudioSynth-v2', type: 'Voice & Audio', status: 'Idle', latency: '120ms', requests: '850K', context: 'Stream', accuracy: '95.2%', gpu: 'NVIDIA L40S x1' },
    { id: 5, name: 'NeuralEmbed-3', type: 'Vector Embedding', status: 'Active', latency: '18ms', requests: '24.5M', context: '1536 dim', accuracy: '99.7%', gpu: 'NVIDIA T4 x4' },
  ]);

  const [newModel, setNewModel] = useState({ name: '', type: 'Generative Text', gpu: 'NVIDIA H100 x2' });

  const handleDeploy = (e) => {
    e.preventDefault();
    if (!newModel.name.trim()) return;
    const model = {
      id: Date.now(),
      name: newModel.name,
      type: newModel.type,
      status: 'Active',
      latency: '50ms',
      requests: '0',
      context: '128K',
      accuracy: '98.0%',
      gpu: newModel.gpu
    };
    setModels([model, ...models]);
    setShowDeployModal(false);
    setNewModel({ name: '', type: 'Generative Text', gpu: 'NVIDIA H100 x2' });
  };

  const generateApiKey = (modelName) => {
    setSelectedKey(`nk_live_${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`);
    setShowKeyModal(true);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout title="AI Neural Models" breadcrumb="Home / AI Models">
      <div className="space-y-6">
        {/* Header Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-neura-cyan/20 text-neura-cyan">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Active Models</span>
              <div className="text-xl font-bold text-white font-mono">{models.filter(m => m.status === 'Active').length} / {models.length}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-neura-purple/20 text-neura-purple">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Avg Latency</span>
              <div className="text-xl font-bold text-white font-mono">66ms</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Inference Today</span>
              <div className="text-xl font-bold text-white font-mono">50.05M</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Cluster Health</span>
              <div className="text-xl font-bold text-emerald-400 font-mono">99.98%</div>
            </div>
          </div>
        </div>

        {/* Action Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <span>Neural Model Directory</span>
              <span className="ml-2 px-2 py-0.5 rounded-full bg-neura-cyan/20 text-neura-cyan text-xs font-mono">
                Cluster v4.2
              </span>
            </h2>
            <p className="text-xs text-slate-400">Manage high-performance AI models deployed across GPU clusters.</p>
          </div>

          <button
            onClick={() => setShowDeployModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan hover:opacity-90 transition-all flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Deploy New Model</span>
          </button>
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {models.slice(0, 3).map((model) => (
            <div key={model.id} className="p-5 rounded-3xl glass-card border border-white/10 space-y-4 relative overflow-hidden group hover:border-neura-cyan/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-neura-cyan/15 text-neura-cyan">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{model.name}</h3>
                    <span className="text-[10px] text-slate-400">{model.type}</span>
                  </div>
                </div>
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                  model.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-slate-500/20 text-slate-400 border-slate-500/40'
                }`}>
                  {model.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-white/10">
                <div>
                  <span className="text-[10px] text-slate-400 block">Avg Latency</span>
                  <span className="font-mono font-bold text-neura-cyan">{model.latency}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Accuracy</span>
                  <span className="font-mono font-bold text-emerald-400">{model.accuracy}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Context Window</span>
                  <span className="font-mono text-slate-200">{model.context}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Hardware</span>
                  <span className="font-mono text-slate-200 text-[10px]">{model.gpu}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => generateApiKey(model.name)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 flex items-center space-x-1"
                >
                  <Key className="w-3.5 h-3.5 text-neura-cyan" />
                  <span>Get API Key</span>
                </button>
                <span className="text-[10px] text-slate-400 font-mono">{model.requests} requests</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Models Table */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white tracking-tight">All Model Telemetry</h3>
          <div className="overflow-x-auto border border-white/10 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.03] text-slate-400 font-semibold border-b border-white/10 uppercase tracking-wider">
                <tr>
                  <th className="p-4">Model Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Latency</th>
                  <th className="p-4">Context</th>
                  <th className="p-4">Requests</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {models.map((m) => (
                  <tr key={m.id} className="hover:bg-white/[0.04] transition-colors">
                    <td className="p-4 font-bold text-white flex items-center space-x-2">
                      <Cpu className="w-4 h-4 text-neura-cyan" />
                      <span>{m.name}</span>
                    </td>
                    <td className="p-4 text-slate-300">{m.type}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold ${
                        m.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-slate-500/20 text-slate-400 border-slate-500/40'
                      }`}>
                        {m.status}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-neura-cyan">{m.latency}</td>
                    <td className="p-4 font-mono">{m.context}</td>
                    <td className="p-4 font-mono">{m.requests}</td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => generateApiKey(m.name)}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-neura-cyan border border-white/10 text-[11px]"
                      >
                        API Key
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deploy Model Modal */}
        {showDeployModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <div className="w-full max-w-md bg-neura-panel border border-white/10 rounded-3xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">Deploy Neural AI Model</h3>
              <form onSubmit={handleDeploy} className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Model Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Neura-Coder-v5"
                    value={newModel.name}
                    onChange={(e) => setNewModel({ ...newModel, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neura-cyan"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Model Type</label>
                  <select
                    value={newModel.type}
                    onChange={(e) => setNewModel({ ...newModel, type: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-neura-panel border border-white/10 text-white focus:outline-none focus:border-neura-cyan"
                  >
                    <option value="Generative Text">Generative Text</option>
                    <option value="Computer Vision">Computer Vision</option>
                    <option value="Code Synthesis">Code Synthesis</option>
                    <option value="Voice & Audio">Voice & Audio</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 font-medium block mb-1">GPU Compute Cluster</label>
                  <select
                    value={newModel.gpu}
                    onChange={(e) => setNewModel({ ...newModel, gpu: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-neura-panel border border-white/10 text-white focus:outline-none focus:border-neura-cyan"
                  >
                    <option value="NVIDIA H100 x4">NVIDIA H100 x4 (High Performance)</option>
                    <option value="NVIDIA A100 x2">NVIDIA A100 x2 (Balanced)</option>
                    <option value="NVIDIA L40S x1">NVIDIA L40S x1 (Low Latency)</option>
                  </select>
                </div>
                <div className="flex items-center justify-end space-x-2 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowDeployModal(false)}
                    className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-neura-cyan text-black font-bold shadow-glow-cyan"
                  >
                    Deploy to Cluster
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* API Key Modal */}
        {showKeyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <div className="w-full max-w-md bg-neura-panel border border-white/10 rounded-3xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center">
                <Key className="w-5 h-5 text-neura-cyan mr-2" />
                <span>Generated API Secret Key</span>
              </h3>
              <p className="text-xs text-slate-400">Keep this key safe. Do not share it in public repositories.</p>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between font-mono text-xs text-neura-cyan">
                <span className="truncate mr-2">{selectedKey}</span>
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-1 rounded-lg bg-neura-cyan/20 text-neura-cyan hover:bg-neura-cyan hover:text-black transition-colors font-sans text-xs font-bold"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setShowKeyModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 text-white font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
