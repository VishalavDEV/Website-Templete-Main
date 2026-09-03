import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/projects';
import { SERVICES_DATA } from '../data/services';
import { BLOG_POSTS_DATA } from '../data/blog';
import { 
  Terminal, 
  Layers, 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  Search, 
  Plus, 
  Trash2,
  Edit2,
  TrendingUp,
  Inbox,
  X,
  Check
} from 'lucide-react';

export const AdminDashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'cases' | 'services' | 'blog'>('inquiries');

  // Simulated live leads
  const [inquiries, setInquiries] = useState([
    { id: 'INQ-101', name: 'Dr. Sarah Lin', company: 'Novacare Health', type: 'Clinical AI / RAG', budget: '$100k-$250k', status: 'In Review', date: 'Today 08:30 AM' },
    { id: 'INQ-102', name: 'Marcus Vance', company: 'Aether Logistics', type: 'Autonomous Dispatch Engine', budget: '$50k-$100k', status: 'RFC Sent', date: 'Yesterday' },
    { id: 'INQ-103', name: 'Julian King', company: 'Vanguard Quantitative', type: 'High-Frequency Terminal', budget: '$250k+', status: 'Call Booked', date: '2 days ago' },
    { id: 'INQ-104', name: 'Chloe Dubois', company: 'Lumina CleanEnergy', type: 'IoT Grid Edge Forecasting', budget: '$50k-$100k', status: 'Triaged', date: '3 days ago' },
  ]);

  // Modifiable Case Studies
  const [caseStudies, setCaseStudies] = useState(CASE_STUDIES_DATA);
  const [editingCase, setEditingCase] = useState<{ id: string; title: string; client: string; category: string } | null>(null);
  const [isNewCaseModalOpen, setIsNewCaseModalOpen] = useState(false);
  const [newCaseData, setNewCaseData] = useState({ title: '', client: '', category: 'AI' });

  // Modifiable Articles
  const [articles, setArticles] = useState(BLOG_POSTS_DATA);
  const [editingArticle, setEditingArticle] = useState<{ id: string; title: string; category: string } | null>(null);
  const [isNewArticleModalOpen, setIsNewArticleModalOpen] = useState(false);
  const [newArticleData, setNewArticleData] = useState({ title: '', category: 'AI Architecture' });

  // Services status
  const [servicesStatus, setServicesStatus] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    SERVICES_DATA.forEach(s => { initial[s.id] = true; });
    return initial;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const cycleInquiryStatus = (id: string) => {
    const statuses = ['In Review', 'RFC Sent', 'Call Booked', 'Signed'];
    setInquiries(prev => prev.map(inq => {
      if (inq.id === id) {
        const nextIdx = (statuses.indexOf(inq.status) + 1) % statuses.length;
        const nextStatus = statuses[nextIdx];
        showToast(`Inquiry ${id} updated to status: ${nextStatus}`);
        return { ...inq, status: nextStatus };
      }
      return inq;
    }));
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(i => i.id !== id));
    showToast(`Inquiry ${id} archived.`);
  };

  const handleCreateCase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCaseData.title.trim() || !newCaseData.client.trim()) return;
    const newCase = {
      id: `CS-${Date.now().toString().slice(-4)}`,
      slug: newCaseData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: newCaseData.title,
      client: newCaseData.client,
      clientIndustry: 'Technology',
      category: newCaseData.category,
      featured: true,
      year: '2026',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      shortDescription: 'Custom high-performance deployment with zero-downtime SLA.',
      metrics: [{ label: 'Performance Gain', value: '+450%' }],
      challenge: 'Enterprise scaling constraint.',
      solution: 'Custom distributed microservices architecture.',
      architectureHighlights: ['Distributed consensus', 'Sub-millisecond routing'],
      techStack: ['Rust', 'Kafka', 'React'],
      results: ['Immediate throughput expansion.'],
      testimonial: {
        quote: 'Exceeded all architectural benchmarks.',
        author: 'CTO',
        role: 'Engineering Lead',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
      }
    };
    setCaseStudies([newCase, ...caseStudies]);
    setIsNewCaseModalOpen(false);
    setNewCaseData({ title: '', client: '', category: 'AI' });
    showToast(`Case Study "${newCase.title}" published!`);
  };

  const handleUpdateCase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCase) return;
    setCaseStudies(prev => prev.map(c => c.id === editingCase.id ? { ...c, title: editingCase.title, client: editingCase.client, category: editingCase.category } : c));
    showToast(`Updated "${editingCase.title}"`);
    setEditingCase(null);
  };

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArticleData.title.trim()) return;
    const newArticle = {
      id: `ART-${Date.now().toString().slice(-4)}`,
      slug: newArticleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: newArticleData.title,
      category: newArticleData.category,
      summary: 'Architectural analysis and production implementation notes.',
      readingTime: '6 min read',
      publishedDate: 'Just now',
      author: {
        name: 'Julian Sterling',
        role: 'Principal Research Scientist',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
      },
      tags: ['Engineering', 'Distributed Systems'],
      sections: [{ heading: 'System Design', content: 'Detailed analysis of concurrency controls.' }]
    };
    setArticles([newArticle, ...articles]);
    setIsNewArticleModalOpen(false);
    setNewArticleData({ title: '', category: 'AI Architecture' });
    showToast(`RFC publication "${newArticle.title}" created!`);
  };

  const handleUpdateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;
    setArticles(prev => prev.map(a => a.id === editingArticle.id ? { ...a, title: editingArticle.title, category: editingArticle.category } : a));
    showToast(`Updated RFC "${editingArticle.title}"`);
    setEditingArticle(null);
  };

  const toggleService = (id: string, title: string) => {
    setServicesStatus(prev => {
      const next = !prev[id];
      showToast(`${title} status set to: ${next ? 'ACTIVE' : 'PAUSED'}`);
      return { ...prev, [id]: next };
    });
  };

  return (
    <div id="admin-cms-preview" className="pt-24 pb-20 bg-slate-900 text-slate-100 min-h-screen">
      {/* Top Header */}
      <div className="bg-slate-950 py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-mono font-bold text-white text-xs">
              CMS
            </div>
            <div>
              <h1 className="text-xl font-bold font-display text-white">
                KRAFT Operating Engine &mdash; CMS Console
              </h1>
              <p className="text-xs text-slate-400 font-mono">Environment: kraft-prod-control-us-west-2</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300">Live Sync Enabled &bull; 4 Pending Inquiries</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors flex items-center gap-2 ${
              activeTab === 'inquiries' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Project Inquiries (4)</span>
          </button>
          <button
            onClick={() => setActiveTab('cases')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors flex items-center gap-2 ${
              activeTab === 'cases' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Case Studies ({CASE_STUDIES_DATA.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors flex items-center gap-2 ${
              activeTab === 'services' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Services Directory ({SERVICES_DATA.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors flex items-center gap-2 ${
              activeTab === 'blog' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Engineering RFCs ({BLOG_POSTS_DATA.length})</span>
          </button>
        </div>

        {/* Tab 1: Inquiries Management */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white font-display">
                  Inbound Client Inquiries Queue
                </h3>
                <span className="text-xs font-mono text-emerald-400">All within 24h SLA window</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                      <th className="py-2.5 px-3">LEAD ID</th>
                      <th className="py-2.5 px-3">LEAD NAME</th>
                      <th className="py-2.5 px-3">COMPANY</th>
                      <th className="py-2.5 px-3">PROJECT DISCIPLINE</th>
                      <th className="py-2.5 px-3">EST. BUDGET</th>
                      <th className="py-2.5 px-3">STATUS (CLICK TO CYCLE)</th>
                      <th className="py-2.5 px-3">RECEIVED</th>
                      <th className="py-2.5 px-3 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850">
                    {inquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-slate-900/60 transition-colors">
                        <td className="py-3 px-3 text-blue-400 font-bold">{inq.id}</td>
                        <td className="py-3 px-3 text-white font-sans font-semibold">{inq.name}</td>
                        <td className="py-3 px-3 text-slate-300">{inq.company}</td>
                        <td className="py-3 px-3 text-slate-300">{inq.type}</td>
                        <td className="py-3 px-3 text-emerald-400">{inq.budget}</td>
                        <td className="py-3 px-3">
                          <button
                            onClick={() => cycleInquiryStatus(inq.id)}
                            title="Click to update status"
                            className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/30 text-[10px] cursor-pointer font-bold transition-colors"
                          >
                            {inq.status} &rarr;
                          </button>
                        </td>
                        <td className="py-3 px-3 text-slate-400 text-[11px]">{inq.date}</td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => deleteInquiry(inq.id)}
                            title="Archive inquiry"
                            className="p-1 rounded text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Case Studies Manager */}
        {activeTab === 'cases' && (
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white font-display">Production Case Studies ({caseStudies.length})</h3>
                <p className="text-xs text-slate-400">Click any study to edit or add a new verified client deployment.</p>
              </div>
              <button
                onClick={() => setIsNewCaseModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Case Study</span>
              </button>
            </div>

            <div className="space-y-2 text-xs">
              {caseStudies.map((cs) => (
                <div key={cs.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-blue-400 font-bold text-xs">{cs.client}</span>
                    <p className="font-semibold text-white mt-0.5">{cs.title}</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{cs.category} &bull; {cs.clientIndustry} &bull; {cs.year}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono text-xs">{cs.metrics[0]?.value}</span>
                    <button
                      onClick={() => setEditingCase({ id: cs.id, title: cs.title, client: cs.client, category: cs.category })}
                      className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                      title="Edit case study"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Services Directory */}
        {activeTab === 'services' && (
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white font-display">Active Engineering Disciplines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {SERVICES_DATA.map((srv) => (
                <div key={srv.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{srv.title}</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{srv.category}</p>
                  </div>
                  <button
                    onClick={() => toggleService(srv.id, srv.title)}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold cursor-pointer transition-colors ${
                      servicesStatus[srv.id] !== false
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    STATUS: {servicesStatus[srv.id] !== false ? 'ACTIVE' : 'PAUSED'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Blog CMS */}
        {activeTab === 'blog' && (
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white font-display">Engineering RFCs &amp; Articles ({articles.length})</h3>
                <p className="text-xs text-slate-400">Manage technical research papers and peer-reviewed releases.</p>
              </div>
              <button
                onClick={() => setIsNewArticleModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Publication</span>
              </button>
            </div>
            <div className="space-y-2 text-xs">
              {articles.map((post) => (
                <div key={post.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{post.title}</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{post.category} &bull; {post.readingTime} &bull; {post.publishedDate}</p>
                  </div>
                  <button
                    onClick={() => setEditingArticle({ id: post.id, title: post.title, category: post.category })}
                    className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                    title="Edit article"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs font-mono flex items-center gap-2 animate-in fade-in duration-150">
          <CheckCircle className="w-4 h-4 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Add Case Study Modal */}
      {isNewCaseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white font-display">New Production Case Study</h3>
              <button onClick={() => setIsNewCaseModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleCreateCase} className="space-y-3">
              <div>
                <label className="block text-slate-400 mb-1">Client Name</label>
                <input
                  type="text"
                  required
                  value={newCaseData.client}
                  onChange={(e) => setNewCaseData({ ...newCaseData, client: e.target.value })}
                  placeholder="e.g. Helix Therapeutics"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Case Study Headline</label>
                <input
                  type="text"
                  required
                  value={newCaseData.title}
                  onChange={(e) => setNewCaseData({ ...newCaseData, title: e.target.value })}
                  placeholder="e.g. Real-Time Genomic Variant Analysis Pipeline"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Discipline Category</label>
                <select
                  value={newCaseData.category}
                  onChange={(e) => setNewCaseData({ ...newCaseData, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="AI">Artificial Intelligence</option>
                  <option value="Web">Distributed Web Systems</option>
                  <option value="SaaS">Enterprise SaaS</option>
                  <option value="Mobile">Mobile Applications</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsNewCaseModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold"
                >
                  Save &amp; Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Case Modal */}
      {editingCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white font-display">Edit Case Study</h3>
              <button onClick={() => setEditingCase(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleUpdateCase} className="space-y-3">
              <div>
                <label className="block text-slate-400 mb-1">Client Name</label>
                <input
                  type="text"
                  required
                  value={editingCase.client}
                  onChange={(e) => setEditingCase({ ...editingCase, client: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Case Study Headline</label>
                <input
                  type="text"
                  required
                  value={editingCase.title}
                  onChange={(e) => setEditingCase({ ...editingCase, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingCase(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add / Edit Article Modal */}
      {(isNewArticleModalOpen || editingArticle) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white font-display">
                {isNewArticleModalOpen ? 'Create New Engineering Publication' : 'Edit Publication'}
              </h3>
              <button
                onClick={() => { setIsNewArticleModalOpen(false); setEditingArticle(null); }}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={isNewArticleModalOpen ? handleCreateArticle : handleUpdateArticle} className="space-y-3">
              <div>
                <label className="block text-slate-400 mb-1">Publication Title</label>
                <input
                  type="text"
                  required
                  value={isNewArticleModalOpen ? newArticleData.title : editingArticle?.title || ''}
                  onChange={(e) => isNewArticleModalOpen ? setNewArticleData({ ...newArticleData, title: e.target.value }) : setEditingArticle({ ...editingArticle!, title: e.target.value })}
                  placeholder="e.g. Distributed State Synchronization via Vector Clocks"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => { setIsNewArticleModalOpen(false); setEditingArticle(null); }}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold"
                >
                  {isNewArticleModalOpen ? 'Publish RFC' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
