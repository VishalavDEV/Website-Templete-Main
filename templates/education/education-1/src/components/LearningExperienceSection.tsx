import React, { useState } from 'react';
import { GradientText } from './reactbits/GradientText';
import {
  Code,
  Video,
  CheckCircle2,
  Users2,
  Sparkles,
  Terminal,
} from 'lucide-react';

export const LearningExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sandbox' | 'mentorship' | 'projects' | 'guilds'>('sandbox');

  const tabs = [
    { id: 'sandbox', label: 'Cloud Sandboxes', icon: <Terminal className="w-4 h-4" /> },
    { id: 'mentorship', label: '1:1 Video Mentorship', icon: <Video className="w-4 h-4" /> },
    { id: 'projects', label: 'Capstone Projects', icon: <Code className="w-4 h-4" /> },
    { id: 'guilds', label: 'Collaborative Guilds', icon: <Users2 className="w-4 h-4" /> },
  ] as const;

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PLATFORM ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            An Uncompromising{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Learning Experience
            </GradientText>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to write code, collaborate with peers, and obtain real faculty feedback in one integrated interface.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/25'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-200/80'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Preview Canvas */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          {activeTab === 'sandbox' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-mono font-bold border border-cyan-200">
                  <span>ZERO SETUP REQUIRED</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  Live Browser Code Sandboxes
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Write, run, and debug Python, TypeScript, SQL, and React code directly in your browser with hot reloading, syntax highlighting, and automated unit test validation.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant environment boot with pre-loaded npm/pip packages</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated test runner giving instant grading feedback</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>One-click export to GitHub repository and Vercel</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 shadow-2xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 text-slate-400">classifier_pipeline.py</span>
                    </div>
                    <span className="text-emerald-400 font-bold">● Running Live</span>
                  </div>
                  <pre className="text-indigo-300 overflow-x-auto">
                    <code>{`import torch
import torch.nn as nn
from skillora_ai import NeuralClassifier

model = NeuralClassifier(input_dim=512, hidden_dim=256, num_classes=10)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4)

# Training loop with real-time loss tracking
print("Epoch [10/10] - Loss: 0.042 - Validation Accuracy: 98.4%")
>>> [SUCCESS] All 14 Test Cases Passed!`}</code>
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mentorship' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-mono font-bold border border-purple-200">
                  <span>FACULTY OFFICE HOURS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  1:1 Live Video Mentorship
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Schedule direct 1:1 strategy calls with senior engineering leaders, research directors, and design mentors to unblock complex projects and review architecture.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real-time screen share, live whiteboard & pair programming</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Personalized feedback on resume, portfolio, and code style</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Flexible time slots matching multiple global timezones</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-video bg-slate-900 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                    alt="Live video call mentorship session"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                      <span className="font-bold">Live Session: System Design Review</span>
                    </div>
                    <span className="font-mono bg-black/60 px-2.5 py-1 rounded-md border border-white/10">34:18</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold border border-indigo-200">
                  <span>PRODUCTION ARTIFACTS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  Portfolio-Grade Capstones
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Every path culminates in a production deployment: a full-stack SaaS app, a fine-tuned LLM microservice, or a multi-brand design system.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real production requirements matching industry RFC standards</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated security auditing, lighthouse benchmarks & test coverage</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-mono text-indigo-700 font-bold">
                    <span>CAPSTONE MILESTONE</span>
                    <span className="text-emerald-600">100% COMPLETE</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 font-display">
                    High-Throughput Distributed Microservice with Redis & Docker
                  </h4>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 w-full" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span>Evaluated by Faculty Guild</span>
                    <span className="text-indigo-700 font-bold">Grade: 99/100 (High Distinction)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guilds' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                  <span>GLOBAL COMMUNITY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  Collaborative Peer Guilds
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Join study cohorts, participate in weekend 48-hour buildathons, and build lifelong professional connections across world regions.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Weekly code sprints and group architecture teardowns</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct access to alumni who transitioned to top tier firms</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-left shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                      #AI
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">AI Research Guild</div>
                      <div className="text-xs text-slate-500">1,420 Active members • 3 hackathons ongoing</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    "Next group teardown starts in 45 minutes: Deconstructing deep reinforcement learning reward functions with Professor Vance."
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
