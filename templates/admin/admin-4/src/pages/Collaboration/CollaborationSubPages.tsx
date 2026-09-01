import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Modal } from '../../components/Common/Modal';
import { useApp } from '../../context/AppContext';
import {
  FolderDown,
  MessageSquare,
  Bell,
  Layers,
  BookOpen,
  Search,
  Send,
  Download,
  Trash2,
  CheckCircle2,
  Upload,
  FileText,
  Bookmark,
  ExternalLink
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SUB_TABS = [
  { name: 'File Vault Storage', path: '/collaboration/files', icon: FolderDown },
  { name: 'Team Chat & Channels', path: '/collaboration/chat', icon: MessageSquare },
  { name: 'Notifications Center', path: '/collaboration/notifications', icon: Bell },
  { name: 'Project Templates', path: '/collaboration/templates', icon: Layers },
  { name: 'Knowledge Base', path: '/collaboration/knowledge', icon: BookOpen }
];

export const CollaborationSubPages: React.FC<{ subPage: string }> = ({ subPage }) => {
  const { files, addFile, notifications, markAllNotificationsRead, addToast } = useApp();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChannel, setActiveChannel] = useState('#general');
  const [chatMessages, setChatMessages] = useState([
    { id: '1', author: 'Alexandra Vance', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', text: 'Team, please review the Q3 Cloud Migration architecture draft.', time: '10:14 AM' },
    { id: '2', author: 'Sophia Chen', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', text: 'Reviewed! The PostgreSQL read replicas setup looks super clean.', time: '10:18 AM' }
  ]);
  const [newMessageText, setNewMessageText] = useState('');

  // Upload File Modal State
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadFileName, setUploadFileName] = useState('');
  const [uploadProjectName, setUploadProjectName] = useState('Enterprise Cloud Migration');
  const [uploadSizeMB, setUploadSizeMB] = useState('4.8');

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFileName.trim()) return;

    addFile({
      name: uploadFileName.trim(),
      projectName: uploadProjectName,
      sizeBytes: (parseFloat(uploadSizeMB) || 3) * 1024 * 1024,
      size: `${uploadSizeMB} MB`,
      type: 'pdf',
      uploadedBy: 'Marcus Sterling',
      folder: 'Documents'
    });

    addToast(`File "${uploadFileName}" uploaded to repository.`, 'success');
    setIsUploadModalOpen(false);
    setUploadFileName('');
  };

  const handleDownloadFile = (fileName: string) => {
    const blob = new Blob([`CoreVista Admin Workspace Asset Content for: ${fileName}\nGenerated on: ${new Date().toISOString()}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName.endsWith('.pdf') || fileName.endsWith('.zip') ? fileName : `${fileName}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    addToast(`Downloaded file "${fileName}".`, 'success');
  };

  const handleUseBlueprint = (title: string) => {
    addToast(`Initialized project workspace from "${title}" template.`, 'success');
    navigate('/projects/active');
  };

  const handleSendMessage = () => {
    if (!newMessageText.trim()) return;
    const msg = {
      id: Date.now().toString(),
      author: 'Marcus Sterling',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      text: newMessageText,
      time: 'Just now'
    };
    setChatMessages(prev => [...prev, msg]);
    setNewMessageText('');
    addToast('Message posted to channel.', 'success');
  };

  const storageUsageData = [
    { name: 'PDF Documents', value: 45, color: '#ef4444' },
    { name: 'Images & Assets', value: 25, color: '#3b82f6' },
    { name: 'Source Code Repos', value: 18, color: '#10b981' },
    { name: 'Video Recordings', value: 12, color: '#8b5cf6' }
  ];

  const templatesList = [
    { id: 'tpl-1', title: 'Enterprise Cloud Migration Scaffold', category: 'DevOps', tasks: 18, duration: '12 Weeks' },
    { id: 'tpl-2', title: 'FinTech Payment Vault Blueprint', category: 'Security', tasks: 24, duration: '16 Weeks' },
    { id: 'tpl-3', title: 'Mobile React Native Starter App', category: 'Mobile', tasks: 12, duration: '6 Weeks' }
  ];

  const knowledgeArticles = [
    { id: 'kb-1', title: 'Microservices Communication Guidelines (gRPC vs REST)', author: 'Sophia Chen', reads: '1.2k' },
    { id: 'kb-2', title: 'SOC2 Type II Security Standard Compliance Standard', author: 'Alexandra Vance', reads: '840' },
    { id: 'kb-3', title: 'Continuous Delivery Pipeline & Zero-Downtime Deployment', author: 'Marcus Sterling', reads: '2.1k' }
  ];

  const filteredFiles = files.filter(f => 
    (f.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
    (f.projectName || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-app pb-4">
        <div>
          <h1 className="text-2xl font-bold text-app-primary flex items-center gap-2">
            <FolderDown className="w-6 h-6 text-blue-500" />
            Team Collaboration & Content Vault
          </h1>
          <p className="text-xs text-app-muted mt-1">
            Central file repository, chat message volume, notifications audit, and knowledge documentation.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-app-secondary/40 p-1 rounded-xl border border-app overflow-x-auto">
          {SUB_TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = subPage === tab.path.split('/')[2];
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-app-secondary hover:text-app-primary hover:bg-app-hover'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* SUBPAGE 1: FILE VAULT STORAGE */}
      {(subPage === 'files' || !subPage) && (
        <div className="space-y-6">
          <Card title="Collaboration Assets & File Storage Vault">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-app-muted absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search file name or project..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full bg-app-hover border border-app rounded-xl pl-9 pr-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                  />
                </div>
                <Button size="sm" variant="primary" icon={<Upload className="w-3.5 h-3.5" />} onClick={() => setIsUploadModalOpen(true)}>
                  Upload New File
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">File / Asset Name</th>
                      <th className="p-3">Project</th>
                      <th className="p-3">Size</th>
                      <th className="p-3">Uploader</th>
                      <th className="p-3">Date</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-app">
                    {filteredFiles.map(f => (
                      <tr key={f.id} className="hover:bg-app-hover/50">
                        <td className="p-3 font-semibold text-app-primary">{f.name}</td>
                        <td className="p-3 text-app-secondary">{f.projectName || 'Workspace Files'}</td>
                        <td className="p-3 text-app-secondary font-mono">{(f.sizeBytes ? (f.sizeBytes / (1024 * 1024)).toFixed(2) : f.size || '2.4')} MB</td>
                        <td className="p-3 text-app-secondary">{f.uploadedBy || 'System Admin'}</td>
                        <td className="p-3 text-app-muted font-mono">{f.uploadedAt}</td>
                        <td className="p-3 text-right">
                          <Button size="sm" variant="outline" icon={<Download className="w-3 h-3" />} onClick={() => handleDownloadFile(f.name)}>
                            Download
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* SUBPAGE 2: TEAM CHAT & CHANNELS */}
      {subPage === 'chat' && (
        <Card title="Interactive Team Chat Channels">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-96">
            <div className="md:col-span-1 p-3 rounded-xl bg-app-secondary/30 border border-app space-y-2">
              <span className="text-xs font-bold text-app-muted uppercase">Channels</span>
              {['#general', '#engineering', '#design-system', '#announcements'].map(ch => (
                <button
                  key={ch}
                  onClick={() => setActiveChannel(ch)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold ${
                    activeChannel === ch ? 'bg-blue-600 text-white' : 'text-app-secondary hover:bg-app-hover'
                  }`}
                >
                  {ch}
                </button>
              ))}
            </div>

            <div className="md:col-span-3 flex flex-col justify-between p-3 rounded-xl bg-app-secondary/20 border border-app">
              <div className="space-y-3 overflow-y-auto max-h-72 pr-2">
                <span className="text-xs font-bold text-blue-400 block border-b border-app pb-1">
                  Active Channel: {activeChannel}
                </span>
                {chatMessages.map(msg => (
                  <div key={msg.id} className="flex items-start gap-3 bg-app-surface/60 p-2.5 rounded-xl border border-app">
                    <img src={msg.avatar} alt={msg.author} className="w-7 h-7 rounded-full object-cover" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-app-primary">{msg.author}</span>
                        <span className="text-[10px] text-app-muted">{msg.time}</span>
                      </div>
                      <p className="text-xs text-app-secondary mt-0.5">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-3 pt-2 border-t border-app">
                <input
                  type="text"
                  placeholder={`Message ${activeChannel}...`}
                  value={newMessageText}
                  onChange={e => setNewMessageText(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-app-hover border border-app rounded-xl px-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                />
                <Button size="sm" variant="primary" icon={<Send className="w-3.5 h-3.5" />} onClick={handleSendMessage}>
                  Send
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* SUBPAGE 3: NOTIFICATIONS CENTER */}
      {subPage === 'notifications' && (
        <Card title="Activity & Event Notifications Center">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-app-primary">Recent Notifications</span>
              <Button size="sm" variant="outline" onClick={markAllNotificationsRead}>
                Mark All as Read
              </Button>
            </div>

            <div className="space-y-2">
              {notifications.map(n => (
                <div key={n.id} className={`p-3 rounded-xl border text-xs flex items-center justify-between ${n.read ? 'bg-app-surface border-app text-app-secondary' : 'bg-blue-500/10 border-blue-500/30 text-app-primary font-semibold'}`}>
                  <div>
                    <span className="font-bold text-blue-400 block">{n.title}</span>
                    <p className="text-[11px] text-app-muted">{n.message}</p>
                  </div>
                  <span className="text-[10px] text-app-muted font-mono">{n.timestamp}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* SUBPAGE 4: PROJECT TEMPLATES */}
      {subPage === 'templates' && (
        <Card title="Pre-configured Project & Task Templates">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {templatesList.map(t => (
              <div key={t.id} className="p-4 rounded-xl bg-app-secondary/30 border border-app space-y-3">
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 font-bold text-[10px] uppercase">
                  {t.category}
                </span>
                <h4 className="font-bold text-sm text-app-primary">{t.title}</h4>
                <div className="text-xs text-app-muted space-y-1">
                  <p>Pre-configured Tasks: <strong className="text-blue-400 font-mono">{t.tasks} Tasks</strong></p>
                  <p>Est. Duration: <strong className="text-emerald-400 font-mono">{t.duration}</strong></p>
                </div>
                <Button size="sm" variant="primary" className="w-full" onClick={() => handleUseBlueprint(t.title)}>
                  Use Blueprint
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* SUBPAGE 5: KNOWLEDGE BASE */}
      {subPage === 'knowledge' && (
        <Card title="Engineering Knowledge Base & Wiki Articles">
          <div className="space-y-3">
            {knowledgeArticles.map(a => (
              <div key={a.id} className="p-4 rounded-xl bg-app-secondary/30 border border-app flex items-center justify-between hover:bg-app-hover/50 transition-colors">
                <div>
                  <h4 className="font-bold text-xs text-app-primary flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    {a.title}
                  </h4>
                  <p className="text-[11px] text-app-muted mt-1">Author: {a.author} • {a.reads} total reads</p>
                </div>
                <Button size="sm" variant="outline" icon={<ExternalLink className="w-3.5 h-3.5" />} onClick={() => addToast(`Opened article "${a.title}"`, 'info')}>
                  Read Article
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Upload File Modal */}
      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Upload New Asset / File"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsUploadModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUploadSubmit}>
              Upload Asset
            </Button>
          </>
        }
      >
        <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">File Name *</label>
            <input
              type="text"
              required
              value={uploadFileName}
              onChange={e => setUploadFileName(e.target.value)}
              placeholder="e.g. Architecture_Diagram_v2.pdf"
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Associated Project</label>
              <input
                type="text"
                value={uploadProjectName}
                onChange={e => setUploadProjectName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-app-primary mb-1">File Size (MB)</label>
              <input
                type="number"
                value={uploadSizeMB}
                onChange={e => setUploadSizeMB(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};


