import React, { useState } from 'react';
import { 
  Server, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Check, 
  Send, 
  X, 
  Cloud, 
  Network, 
  ArrowRight 
} from 'lucide-react';

export default function App() {
  const [activeCodeLang, setActiveCodeLang] = useState('curl');
  const [copied, setCopied] = useState(false);
  const [nodeCount, setNodeCount] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clusterSubmitted, setClusterSubmitted] = useState(false);

  const codeSnippets = {
    curl: `curl -X POST https://api.orbital-cloud.io/v1/clusters \\
  -H "Authorization: Bearer orb_live_9981273x" \\
  -H "Content-Type: application/json" \\
  -d '{"region": "us-east-1", "nodes": ${nodeCount}, "autoscale": true}'`,
    node: `import { Orbital } from '@orbital/sdk';

const client = new Orbital({ apiKey: process.env.ORBITAL_KEY });
const cluster = await client.clusters.create({
  region: 'us-east-1',
  nodes: ${nodeCount},
  autoHealing: true,
});`,
    python: `from orbital import OrbitalClient

client = OrbitalClient(api_key="orb_live_9981273x")
cluster = client.clusters.create(
    region="us-east-1",
    node_count=${nodeCount},
    high_availability=True
)`,
    go: `package main

import (
	"context"
	"github.com/orbital/sdk-go"
)

func main() {
	client := orbital.NewClient("orb_live_9981273x")
	cluster, _ := client.CreateCluster(context.Background(), orbital.ClusterOpts{
		Region: "us-east-1",
		Nodes:  ${nodeCount},
	})
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#060a12] text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060a12]/85 backdrop-blur-lg border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-black text-xl">
              <Cloud size={20} />
            </div>
            <span className="font-extrabold text-xl tracking-wider text-white">ORBITAL <span className="text-xs font-mono text-emerald-400 font-normal">// CLOUD</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#regions" className="hover:text-emerald-400 transition-colors">Regions</a>
            <a href="#playground" className="hover:text-emerald-400 transition-colors">API Playground</a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">Cluster Builder</a>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-emerald px-5 py-2.5 rounded-lg text-sm flex items-center gap-2"
          >
            <Server size={16} />
            <span>Deploy Cluster</span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-8">
            <Network size={14} className="text-emerald-400 animate-pulse" />
            <span>MULTI-REGION CLOUD INFRASTRUCTURE // HIGH THROUGHPUT</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Cloud Infrastructure Built For <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500">
              Extreme Throughput & Scale.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
            Deploy sharded database clusters, AI inference nodes, and edge APIs across 40+ global regions in under 60 seconds with 99.999% SLA.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-emerald px-8 py-4 rounded-xl text-base flex items-center gap-3"
            >
              <span>Provision Instant Cluster</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#playground"
              className="px-8 py-4 rounded-xl text-base font-semibold bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
            >
              <Terminal size={18} />
              <span>Explore SDK Docs</span>
            </a>
          </div>
        </div>
      </section>

      {/* Region Status Grid */}
      <section id="regions" className="py-16 px-6 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Global Region Health</h2>
            <p className="text-slate-400 text-xs md:text-sm">Real-time status across primary edge datacenters.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cloud-card p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-slate-400">US-EAST (VIRGINIA)</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">9ms TTFB</div>
              <p className="text-xs text-slate-400">4,200 Nodes Active</p>
            </div>

            <div className="cloud-card p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-slate-400">EU-CENTRAL (FRANKFURT)</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">11ms TTFB</div>
              <p className="text-xs text-slate-400">3,800 Nodes Active</p>
            </div>

            <div className="cloud-card p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-slate-400">AP-SOUTH (MUMBAI)</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">14ms TTFB</div>
              <p className="text-xs text-slate-400">2,950 Nodes Active</p>
            </div>

            <div className="cloud-card p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-slate-400">AP-EAST (TOKYO)</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">12ms TTFB</div>
              <p className="text-xs text-slate-400">3,100 Nodes Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Playground */}
      <section id="playground" className="py-24 px-6 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">Provision via API & SDKs</h2>
            <p className="text-slate-400 text-sm">Deploy high-performance infrastructure with 5 lines of code.</p>
          </div>

          <div className="cloud-card rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="bg-slate-900/90 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {['curl', 'node', 'python', 'go'].map(lang => (
                  <button 
                    key={lang}
                    onClick={() => setActiveCodeLang(lang)}
                    className={`px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase transition-all ${
                      activeCodeLang === lang 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <button 
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            <div className="p-6 bg-slate-950 overflow-x-auto">
              <pre className="font-mono-code text-xs md:text-sm text-emerald-300 leading-relaxed">
                <code>{codeSnippets[activeCodeLang]}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sizing Calculator */}
      <section id="calculator" className="py-20 px-6 border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-4xl mx-auto cloud-card p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Cluster Sizing Calculator</h2>
            <p className="text-slate-400 text-xs md:text-sm">Configure compute nodes and instant storage allocation.</p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div>
              <div className="flex justify-between items-center text-sm font-semibold mb-2">
                <span className="text-slate-300">Compute Node Count</span>
                <span className="text-emerald-400 font-mono text-base">{nodeCount} Dedicated Instances</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="64" 
                value={nodeCount} 
                onChange={(e) => setNodeCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-center">
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Total RAM</span>
                <div className="text-xl font-bold text-white mt-1">{nodeCount * 32} GB DDR5</div>
              </div>
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase">NVMe Storage</span>
                <div className="text-xl font-bold text-emerald-400 mt-1">{nodeCount * 2} TB NVMe</div>
              </div>
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Est. Monthly Cost</span>
                <div className="text-xl font-bold text-white mt-1">${nodeCount * 45} / mo</div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-emerald px-8 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2"
              >
                <span>Deploy This Cluster Configuration</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/80 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-bold text-white text-sm">
            ORBITAL <span className="text-emerald-400">CLOUD</span> &copy; {new Date().getFullYear()}
          </div>
          <p>Global Multi-Region Cloud & Distributed Database Platform.</p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-slate-900 border border-emerald-500/30 rounded-2xl p-8 shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <X size={20} />
            </button>

            {!clusterSubmitted ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <Server className="text-emerald-400" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white">Deploy Orbital Cluster</h3>
                    <p className="text-xs text-slate-400">Provision dedicated high-throughput nodes in 60s.</p>
                  </div>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setClusterSubmitted(true); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Acme Corp" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">DevOps Email</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="devops@company.com" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                  <button type="submit" className="w-full btn-emerald py-3 rounded-lg text-sm flex items-center justify-center gap-2">
                    <span>Provision Nodes ({nodeCount} Dedicated)</span>
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Provisioning Initialized</h3>
                <p className="text-sm text-slate-300">API keys and cluster credentials sent to email.</p>
                <button 
                  onClick={() => { setIsModalOpen(false); setClusterSubmitted(false); }}
                  className="btn-emerald px-6 py-2 rounded-lg text-xs"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
