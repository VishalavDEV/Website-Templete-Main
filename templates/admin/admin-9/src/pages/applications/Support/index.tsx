/* src/pages/applications/Support/index.tsx */
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Modal } from '../../../components/ui/Modal';
import { useToast } from '../../../app/providers/ToastProvider';
import { 
  Plus, Search, Filter, RefreshCw, MoreVertical, Calendar, 
  MessageSquare, CheckSquare, Paperclip, Grid, List, AlertCircle, 
  HelpCircle, Shield, CreditCard, User, Bell, LifeBuoy, BookOpen, 
  Clock, CheckCircle, ChevronRight, X, ArrowUpRight, ArrowDownRight, Send, Smile
} from 'lucide-react';

interface SupportMessage {
  sender: string;
  text: string;
  time: string;
}

interface RequestTicket {
  id: string; // e.g. "#1024"
  subject: string;
  description: string;
  requester: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Waiting' | 'Resolved';
  assignee: string;
  category: string;
  updated: string;
  created: string;
  attachments: string[];
  messages: SupportMessage[];
}

export default function SupportPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'requests' | 'kb'>('requests');
  
  // Toolbar states
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterAssignee, setFilterAssignee] = useState('All');
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  // Drawer / Modal triggers
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [drawerTab, setDrawerTab] = useState<'conversation' | 'activity'>('conversation');
  const [replyText, setReplyText] = useState('');

  // Form states for creating a request
  const [createSubject, setCreateSubject] = useState('');
  const [createDescription, setCreateDescription] = useState('');
  const [createCategory, setCreateCategory] = useState('Account & Security');
  const [createPriority, setCreatePriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [createRequester, setCreateRequester] = useState('Alex Morgan');
  const [createAssignee, setCreateAssignee] = useState('Sarah Johnson');
  const [createDueDate, setCreateDueDate] = useState('2026-08-28');
  const [createAttachments, setCreateAttachments] = useState('');

  // Central tickets dataset
  const [tickets, setTickets] = useState<RequestTicket[]>([
    {
      id: '#1024',
      subject: 'Unable to access my account',
      description: 'I am unable to access my account since yesterday. Every time I try to login, it shows an invalid credentials error even after resetting the password.',
      requester: 'Alex Morgan',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Sarah Johnson',
      category: 'Account & Security',
      updated: '5m ago',
      created: 'May 21, 2024 10:30 AM',
      attachments: ['error-screenshot.png', 'account-log.txt'],
      messages: [
        { sender: 'Alex Morgan', text: 'I have tried resetting my password but still getting the same error.', time: '10:30 AM' },
        { sender: 'Sarah Johnson', text: "I'm checking this for you in the Wayne database clusters. Please allow me some time.", time: '10:35 AM' }
      ]
    },
    {
      id: '#1023',
      subject: 'Invoice clarification for last payment',
      description: 'Please verify the VAT tax numbers associated with Vance Refrigerations on last invoice INV-2026-002.',
      requester: 'Priya Shah',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Michael Brown',
      category: 'Billing',
      updated: '20m ago',
      created: 'May 21, 2024 10:10 AM',
      attachments: ['invoice-inv002.pdf'],
      messages: [
        { sender: 'Priya Shah', text: 'The billing address shows Chicago instead of Scranton office.', time: '10:10 AM' }
      ]
    },
    {
      id: '#1022',
      subject: 'Update profile information',
      description: 'Requesting to update the secondary recovery email address associated with portal security profiles.',
      requester: 'John Smith',
      priority: 'Low',
      status: 'Waiting',
      assignee: 'Sarah Johnson',
      category: 'Profile',
      updated: '1h ago',
      created: 'May 21, 2024 09:20 AM',
      attachments: [],
      messages: [
        { sender: 'John Smith', text: 'Please change recovery email to john.smith.backup@company.com.', time: '09:20 AM' },
        { sender: 'Sarah Johnson', text: 'I have queued this for the security workspace supervisor review.', time: '09:30 AM' }
      ]
    },
    {
      id: '#1021',
      subject: 'Feature request – Dark mode',
      description: 'Clients are requesting global layout dark mode feature flags inside catalog template pages.',
      requester: 'Emily Davis',
      priority: 'Low',
      status: 'In Progress',
      assignee: 'Michael Brown',
      category: 'Profile',
      updated: '2h ago',
      created: 'May 21, 2024 08:15 AM',
      attachments: [],
      messages: [
        { sender: 'Emily Davis', text: 'Is this scheduled for the next staging package release?', time: '08:15 AM' }
      ]
    },
    {
      id: '#1020',
      subject: 'Payment failed but amount deducted',
      description: 'Corporate visa card transaction was declined at checkout, but bank statement registers deduction.',
      requester: 'Daniel Lee',
      priority: 'High',
      status: 'Open',
      assignee: 'Sarah Johnson',
      category: 'Billing',
      updated: '3h ago',
      created: 'May 21, 2024 07:30 AM',
      attachments: ['bank-receipt.jpg'],
      messages: [
        { sender: 'Daniel Lee', text: 'Receipt from bank attached showing the deducted status.', time: '07:30 AM' }
      ]
    }
  ]);

  // Selected Ticket details binding
  const selectedTicket = tickets.find(t => t.id === selectedTicketId) || null;

  // 1. Dynamic Summary Statistics Counts
  const stats = useMemo(() => {
    return {
      open: tickets.filter(t => t.status === 'Open').length,
      inProgress: tickets.filter(t => t.status === 'In Progress').length,
      waiting: tickets.filter(t => t.status === 'Waiting').length,
      resolved: tickets.filter(t => t.status === 'Resolved').length
    };
  }, [tickets]);

  // Filters Options lists
  const assigneesList = ['Sarah Johnson', 'Michael Brown'];
  const categoriesList = ['Account & Security', 'Billing', 'Profile', 'Notifications', 'Troubleshooting'];

  // Table row checkbox collection (Template mock checkbox behavior)
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const toggleRowSelect = (id: string) => {
    setSelectedRowIds(prev => 
      prev.includes(id) ? prev.filter(rId => rId !== id) : [...prev, id]
    );
  };
  const toggleSelectAll = () => {
    if (selectedRowIds.length === filteredTickets.length) {
      setSelectedRowIds([]);
    } else {
      setSelectedRowIds(filteredTickets.map(t => t.id));
    }
  };

  // Filter & Search Logic
  const filteredTickets = useMemo(() => {
    return tickets.filter(t => {
      // Search
      const query = searchQuery.toLowerCase().trim();
      if (query) {
        const matchesSubject = t.subject.toLowerCase().includes(query);
        const matchesDesc = t.description.toLowerCase().includes(query);
        const matchesRequester = t.requester.toLowerCase().includes(query);
        const matchesAssignee = t.assignee.toLowerCase().includes(query);
        const matchesId = t.id.toLowerCase().includes(query);
        if (!matchesSubject && !matchesDesc && !matchesRequester && !matchesAssignee && !matchesId) {
          return false;
        }
      }

      // Status
      if (filterStatus !== 'All' && t.status !== filterStatus) return false;
      // Priority
      if (filterPriority !== 'All' && t.priority !== filterPriority) return false;
      // Category
      if (filterCategory !== 'All' && t.category !== filterCategory) return false;
      // Assignee
      if (filterAssignee !== 'All' && t.assignee !== filterAssignee) return false;

      return true;
    });
  }, [tickets, searchQuery, filterStatus, filterPriority, filterCategory, filterAssignee]);

  // Create Request Action handler
  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!createSubject.trim() || !createDescription.trim()) return;

    const newTicket: RequestTicket = {
      id: `#${Math.floor(Math.random() * 900) + 1025}`,
      subject: createSubject,
      description: createDescription,
      requester: createRequester,
      priority: createPriority,
      status: 'Open',
      assignee: createAssignee,
      category: createCategory,
      updated: 'Just now',
      created: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
      attachments: createAttachments ? [createAttachments] : [],
      messages: [{ sender: createRequester, text: createDescription, time: 'Just now' }]
    };

    setTickets(prev => [newTicket, ...prev]);
    setIsCreateOpen(false);

    // Clear form inputs
    setCreateSubject('');
    setCreateDescription('');
    setCreateCategory('Account & Security');
    setCreatePriority('Medium');
    setCreateRequester('Alex Morgan');
    setCreateAssignee('Sarah Johnson');
    setCreateAttachments('');

    toast.success('Support request filed successfully.');
  };

  // Reply message sender handler
  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedTicketId) return;

    const newMsg: SupportMessage = {
      sender: 'Sarah Johnson', // Simulated Support Agent avatar
      text: replyText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setTickets(prev => prev.map(t => {
      if (t.id === selectedTicketId) {
        return {
          ...t,
          updated: 'Just now',
          messages: [...t.messages, newMsg]
        };
      }
      return t;
    }));

    setReplyText('');
    toast.success('Reply submitted.');
  };

  // Dynamic Status editor callback handler
  const handleStatusChange = (ticketId: string, nextStatus: any) => {
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status: nextStatus, updated: 'Just now' } : t));
    toast.success(`Request status updated to ${nextStatus}.`);
  };

  // Dynamic Priority editor callback handler
  const handlePriorityChange = (ticketId: string, nextPriority: any) => {
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, priority: nextPriority, updated: 'Just now' } : t));
    toast.success(`Priority set to ${nextPriority}.`);
  };

  // Reset Filters toolbar
  const handleClearFilters = () => {
    setSearchQuery('');
    setFilterStatus('All');
    setFilterPriority('All');
    setFilterCategory('All');
    setFilterAssignee('All');
    toast.success('Filters cleared.');
  };

  // Knowledge Base Mock Data
  const [kbSearch, setKbSearch] = useState('');
  const [kbCategory, setKbCategory] = useState('All');

  const kbCategories = [
    { name: 'Getting Started', count: 12, icon: <BookOpen className="h-4 w-4" /> },
    { name: 'Account & Security', count: 8, icon: <Shield className="h-4 w-4" /> },
    { name: 'Billing', count: 6, icon: <CreditCard className="h-4 w-4" /> },
    { name: 'Profile', count: 4, icon: <User className="h-4 w-4" /> },
    { name: 'Notifications', count: 5, icon: <Bell className="h-4 w-4" /> },
    { name: 'Troubleshooting', count: 14, icon: <LifeBuoy className="h-4 w-4" /> }
  ];

  const kbArticles = [
    { title: 'How to reset your password', desc: 'Secure instructions to update account login credentials.', cat: 'Account & Security' },
    { title: 'How to update account details', desc: 'Manage secondary backup email notifications.', cat: 'Profile' },
    { title: 'How to manage notifications', desc: 'Configure webhook channels triggers parameters.', cat: 'Notifications' },
    { title: 'How to change billing information', desc: 'Verify Scranton regional Scranton invoices tax fields.', cat: 'Billing' },
    { title: 'How to contact support', desc: 'Guidelines for submitting critical high priority alerts.', cat: 'Getting Started' }
  ];

  const filteredArticles = kbArticles.filter(art => {
    if (kbCategory !== 'All' && art.cat !== kbCategory) return false;
    if (kbSearch.trim()) {
      const q = kbSearch.toLowerCase();
      return art.title.toLowerCase().includes(q) || art.desc.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="space-y-6 select-none relative pb-12">
      {/* 1. Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-foreground tracking-tight">Support Center</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage support requests, track conversations, and find helpful resources.
          </p>
        </div>
        <Button 
          variant="primary" 
          size="sm" 
          leftIcon={<Plus className="h-4 w-4" />}
          onClick={() => setIsCreateOpen(true)}
          className="h-8.5 text-xs shadow-sm"
        >
          Create Request
        </Button>
      </div>

      {/* 2. Statistic Summary Cards */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-5">
        {[
          { label: 'Open', count: stats.open, color: 'text-primary', icon: <HelpCircle className="h-4.5 w-4.5 text-primary" />, trend: '↑ 8% vs last 7 days', trendUp: true },
          { label: 'In Progress', count: stats.inProgress, color: 'text-blue-500', icon: <Clock className="h-4.5 w-4.5 text-blue-500" />, trend: '↓ 2 vs last 7 days', trendUp: false },
          { label: 'Waiting', count: stats.waiting, color: 'text-warning-foreground', icon: <AlertCircle className="h-4.5 w-4.5 text-warning-foreground" />, trend: '1 overdue', trendUp: false, urgent: true },
          { label: 'Resolved', count: stats.resolved, color: 'text-success', icon: <CheckCircle className="h-4.5 w-4.5 text-success" />, trend: '↑ 14% vs last 7 days', trendUp: true },
          { label: 'Avg. Response', count: '18m', color: 'text-purple-500', icon: <Clock className="h-4.5 w-4.5 text-purple-500" />, trend: '↓ 5m vs last 7 days', trendUp: true }
        ].map((stat, i) => (
          <div key={i} className="bg-card border border-border p-4 rounded-xl shadow-sm flex flex-col justify-between min-h-[95px]">
            <div className="flex justify-between items-center text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
              <span>{stat.label}</span>
              {stat.icon}
            </div>
            <p className="text-xl font-black text-foreground mt-1.5">{stat.count}</p>
            <p className={`text-[9px] font-bold mt-1.5 flex items-center gap-1 ${
              stat.urgent ? 'text-destructive' :
              stat.trendUp ? 'text-success' : 'text-muted-foreground'
            }`}>
              {stat.trendUp ? <ArrowUpRight className="h-3 w-3 shrink-0" /> : <ArrowDownRight className="h-3 w-3 shrink-0" />}
              {stat.trend}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Main View Switcher Tabs */}
      <div className="flex border-b border-border/80 gap-6 text-xs font-semibold pb-0">
        <button 
          onClick={() => setActiveTab('requests')}
          className={`pb-3 border-b-2 px-1 cursor-pointer transition-all ${
            activeTab === 'requests' ? 'border-primary text-primary font-bold' : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Requests
        </button>
        <button 
          onClick={() => setActiveTab('kb')}
          className={`pb-3 border-b-2 px-1 cursor-pointer transition-all ${
            activeTab === 'kb' ? 'border-primary text-primary font-bold' : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Knowledge Base
        </button>
      </div>

      {/* 4. Tab Views Contents */}
      {activeTab === 'kb' ? (
        <div className="space-y-6">
          {/* Knowledge Base Search */}
          <div className="bg-card border border-border p-6 rounded-xl shadow-sm text-center max-w-xl mx-auto space-y-4">
            <h3 className="text-sm font-extrabold text-foreground">How can we help you today?</h3>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="search" 
                placeholder="Search knowledge articles..." 
                value={kbSearch}
                onChange={e => setKbSearch(e.target.value)}
                className="w-full text-xs h-10 pl-9 pr-3 rounded-lg border border-border bg-muted/10 focus:outline-none focus:border-primary text-foreground"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* KB categories */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide px-1">Categories</h4>
              <div className="bg-card border border-border rounded-xl p-2 space-y-1 shadow-sm">
                <button 
                  onClick={() => setKbCategory('All')}
                  className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex justify-between items-center cursor-pointer transition-colors ${
                    kbCategory === 'All' ? 'bg-primary/5 text-primary' : 'hover:bg-accent/40 text-foreground'
                  }`}
                >
                  <span className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> All Articles</span>
                  <Badge variant="secondary">{kbArticles.length}</Badge>
                </button>
                {kbCategories.map((c, i) => (
                  <button 
                    key={i}
                    onClick={() => setKbCategory(c.name)}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex justify-between items-center cursor-pointer transition-colors ${
                      kbCategory === c.name ? 'bg-primary/5 text-primary' : 'hover:bg-accent/40 text-foreground'
                    }`}
                  >
                    <span className="flex items-center gap-2">{c.icon} {c.name}</span>
                    <Badge variant="secondary">{c.count}</Badge>
                  </button>
                ))}
              </div>
            </div>

            {/* Articles List */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide px-1">Popular Articles</h4>
              <div className="space-y-3">
                {filteredArticles.map((art, idx) => (
                  <div key={idx} className="bg-card border border-border p-4 rounded-xl shadow-sm hover:border-primary/45 transition-colors cursor-pointer flex justify-between items-center">
                    <div>
                      <h5 className="text-xs font-extrabold text-foreground">{art.title}</h5>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{art.desc}</p>
                      <Badge variant="secondary" className="mt-2 text-[8px] bg-muted">{art.cat}</Badge>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}

                {/* Empty State KB */}
                {filteredArticles.length === 0 && (
                  <div className="bg-card border border-dashed border-border/80 rounded-xl p-8 text-center text-muted-foreground shadow-sm">
                    <BookOpen className="h-8 w-8 mx-auto text-muted-foreground/50 mb-2" />
                    <span className="text-xs font-bold block">No knowledge base articles</span>
                    <p className="text-[10px] text-muted-foreground/80 mt-1">
                      No matches found for your current search term.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* 5. Request Toolbar */}
          <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center bg-card p-3 border border-border rounded-xl shadow-sm">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search requests..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full text-xs h-8.5 pl-8 pr-3 border border-border bg-muted/10 rounded-lg focus:outline-none focus:border-primary text-foreground"
              />
            </div>

            {/* Dropdowns filters */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 items-center">
              <select 
                value={filterStatus} 
                onChange={e => setFilterStatus(e.target.value)}
                className="text-xs h-8.5 border border-border bg-background px-2.5 rounded-lg focus:outline-none text-foreground font-semibold"
              >
                <option value="All">Status: All</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Waiting">Waiting</option>
                <option value="Resolved">Resolved</option>
              </select>

              <select 
                value={filterPriority} 
                onChange={e => setFilterPriority(e.target.value)}
                className="text-xs h-8.5 border border-border bg-background px-2.5 rounded-lg focus:outline-none text-foreground font-semibold"
              >
                <option value="All">Priority: All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>

              <select 
                value={filterCategory} 
                onChange={e => setFilterCategory(e.target.value)}
                className="text-xs h-8.5 border border-border bg-background px-2.5 rounded-lg focus:outline-none text-foreground font-semibold"
              >
                <option value="All">Category: All</option>
                {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
              </select>

              <select 
                value={filterAssignee} 
                onChange={e => setFilterAssignee(e.target.value)}
                className="text-xs h-8.5 border border-border bg-background px-2.5 rounded-lg focus:outline-none text-foreground font-semibold animate-in fade-in"
              >
                <option value="All">Assignee: All</option>
                {assigneesList.map(a => <option key={a} value={a}>{a}</option>)}
              </select>

              <Button 
                variant="outline" 
                size="sm" 
                className="h-8.5 text-xs text-muted-foreground hover:text-foreground"
                onClick={handleClearFilters}
              >
                Clear
              </Button>
            </div>
          </div>

          {/* 6. Requests Grid lists / Table queue */}
          <div className="flex gap-6 items-start">
            {/* Desktop Table View & Mobile cards Viewport */}
            <div className="flex-1 min-w-0 bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              {/* Desktop view table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs">
                  <thead>
                    <tr className="border-b border-border bg-muted/15 font-extrabold text-muted-foreground uppercase text-[10px] tracking-wider select-none">
                      <th className="p-4 w-12 text-center">
                        <input 
                          type="checkbox" 
                          checked={selectedRowIds.length === filteredTickets.length && filteredTickets.length > 0} 
                          onChange={toggleSelectAll} 
                          className="rounded border-border text-primary focus:ring-primary h-3.5 w-3.5"
                        />
                      </th>
                      <th className="p-4 w-16">ID</th>
                      <th className="p-4">Subject</th>
                      <th className="p-4">Requester</th>
                      <th className="p-4">Priority</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Assignee</th>
                      <th className="p-4">Updated</th>
                      <th className="p-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredTickets.map(ticket => (
                      <tr 
                        key={ticket.id} 
                        className={`hover:bg-accent/20 transition-colors cursor-pointer ${
                          selectedTicketId === ticket.id ? 'bg-primary/5' : ''
                        }`}
                        onClick={() => setSelectedTicketId(ticket.id)}
                      >
                        <td className="p-4 text-center" onClick={e => e.stopPropagation()}>
                          <input 
                            type="checkbox" 
                            checked={selectedRowIds.includes(ticket.id)}
                            onChange={() => toggleRowSelect(ticket.id)}
                            className="rounded border-border text-primary focus:ring-primary h-3.5 w-3.5 cursor-pointer"
                          />
                        </td>
                        <td className="p-4 font-bold text-muted-foreground">{ticket.id}</td>
                        <td className="p-4 font-extrabold text-foreground">{ticket.subject}</td>
                        <td className="p-4 font-semibold text-foreground flex items-center gap-1.5 pt-4">
                          <span className="h-5 w-5 rounded-full bg-primary/10 text-primary text-[8px] font-black flex items-center justify-center">👤</span>
                          {ticket.requester}
                        </td>
                        <td className="p-4 font-semibold">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                            ticket.priority === 'High' ? 'bg-destructive/10 text-destructive' :
                            ticket.priority === 'Medium' ? 'bg-warning/10 text-warning-foreground' : 'bg-muted text-muted-foreground'
                          }`}>
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="p-4">
                          <Badge variant={
                            ticket.status === 'Resolved' ? 'success' :
                            ticket.status === 'Waiting' ? 'warning' :
                            ticket.status === 'In Progress' ? 'info' : 'default'
                          }>
                            {ticket.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-muted-foreground font-semibold">{ticket.assignee}</td>
                        <td className="p-4 text-muted-foreground font-semibold">{ticket.updated}</td>
                        <td className="p-4 text-center" onClick={e => e.stopPropagation()}>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-7 text-[10px]"
                            onClick={() => setSelectedTicketId(ticket.id)}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card Layout list */}
              <div className="block md:hidden divide-y divide-border">
                {filteredTickets.map(ticket => (
                  <div 
                    key={ticket.id} 
                    onClick={() => setSelectedTicketId(ticket.id)}
                    className={`p-4 hover:bg-accent/15 cursor-pointer flex flex-col gap-2 ${
                      selectedTicketId === ticket.id ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-extrabold text-muted-foreground">{ticket.id}</span>
                      <Badge variant={
                        ticket.status === 'Resolved' ? 'success' :
                        ticket.status === 'Waiting' ? 'warning' :
                        ticket.status === 'In Progress' ? 'info' : 'default'
                      }>
                        {ticket.status}
                      </Badge>
                    </div>
                    <h4 className="text-xs font-bold text-foreground line-clamp-1">{ticket.subject}</h4>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground mt-1">
                      <span className="flex items-center gap-1 font-semibold">
                        <span className="h-4.5 w-4.5 rounded-full bg-primary/10 text-primary text-[8px] font-black flex items-center justify-center">👤</span>
                        {ticket.requester}
                      </span>
                      <span>Updated {ticket.updated}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty state requests lists */}
              {filteredTickets.length === 0 && (
                <div className="p-12 text-center flex flex-col items-center justify-center gap-3">
                  <LifeBuoy className="h-10 w-10 text-muted-foreground/40" />
                  <div>
                    <h3 className="text-xs font-extrabold text-foreground">No support requests</h3>
                    <p className="text-[10px] text-muted-foreground/80 mt-1">
                      Everything is under control. New requests will appear here.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* 7. Right-Side Request Detail Drawer */}
            {selectedTicket && (
              <div className="w-full lg:w-96 shrink-0 bg-card border border-border rounded-xl shadow-lg flex flex-col overflow-hidden animate-in slide-in-from-right duration-200">
                {/* Drawer Header */}
                <div className="p-4 border-b border-border flex items-center justify-between bg-muted/5 shrink-0">
                  <div>
                    <span className="text-[10px] font-extrabold text-muted-foreground">{selectedTicket.id}</span>
                    <h3 className="text-xs font-extrabold text-foreground mt-0.5 line-clamp-1">{selectedTicket.subject}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedTicketId(null)}
                    className="p-1 rounded hover:bg-muted text-muted-foreground cursor-pointer border-none bg-transparent"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Drawer details parameters */}
                <div className="p-4 border-b border-border/80 space-y-3.5 text-xs bg-card shrink-0">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Status</label>
                      <select 
                        value={selectedTicket.status}
                        onChange={e => handleStatusChange(selectedTicket.id, e.target.value as any)}
                        className="w-full text-xs h-8 border border-border bg-background px-2.5 rounded-lg focus:outline-none text-foreground font-semibold"
                      >
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Waiting">Waiting</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Priority</label>
                      <select 
                        value={selectedTicket.priority}
                        onChange={e => handlePriorityChange(selectedTicket.id, e.target.value as any)}
                        className="w-full text-xs h-8 border border-border bg-background px-2.5 rounded-lg focus:outline-none text-foreground font-semibold"
                      >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Requester:</span>
                      <span className="font-bold text-foreground">{selectedTicket.requester}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Created:</span>
                      <span className="font-bold text-foreground">{selectedTicket.created}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Assignee:</span>
                      <span className="font-bold text-foreground">{selectedTicket.assignee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-bold text-foreground">{selectedTicket.category}</span>
                    </div>
                  </div>

                  {/* Description text area info */}
                  <div className="border-t border-border/40 pt-3">
                    <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Description</span>
                    <p className="text-[11px] leading-relaxed text-foreground/80 bg-muted/10 p-2.5 rounded-lg border border-border/40 mb-3">
                      {selectedTicket.description}
                    </p>
                    <Button 
                      variant="primary" 
                      className="w-full text-xs h-8.5"
                      leftIcon={<MessageSquare className="h-4 w-4" />}
                      onClick={() => {
                        setSelectedTicketId(null);
                        navigate(`/apps/chat?user=${encodeURIComponent(selectedTicket.requester)}`);
                        toast.success(`Redirected to chat with ${selectedTicket.requester}`);
                      }}
                    >
                      Start Chat with {selectedTicket.requester}
                    </Button>
                  </div>

                  {/* Attachment links */}
                  {selectedTicket.attachments.length > 0 && (
                    <div className="border-t border-border/40 pt-3">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1.5">Attachments</span>
                      <div className="flex flex-col gap-1">
                        {selectedTicket.attachments.map((file, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-[10px] text-primary font-semibold hover:underline cursor-pointer">
                            <Paperclip className="h-3.5 w-3.5" />
                            <span>{file}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        </div>
      )}

      {/* 9. Request Creator Modal Dialog */}
      <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Support Request">
        <form onSubmit={handleCreateRequest} className="space-y-4 pt-2">
          <div>
            <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Subject</label>
            <input 
              type="text" 
              placeholder="e.g. System payment declined error" 
              value={createSubject}
              onChange={e => setCreateSubject(e.target.value)}
              className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none"
              required 
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Description</label>
            <textarea 
              placeholder="Describe the issue detail parameters..." 
              value={createDescription}
              onChange={e => setCreateDescription(e.target.value)}
              className="w-full text-xs min-h-[80px] border border-border bg-background px-3 py-2 rounded-lg text-foreground focus:outline-none"
              required 
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Category</label>
              <select 
                value={createCategory} 
                onChange={e => setCreateCategory(e.target.value)}
                className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none font-semibold"
              >
                {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Priority</label>
              <select 
                value={createPriority} 
                onChange={e => setCreatePriority(e.target.value as any)}
                className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none font-semibold"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Requester</label>
              <input 
                type="text" 
                value={createRequester} 
                onChange={e => setCreateRequester(e.target.value)}
                className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none" 
                required 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Assignee</label>
              <select 
                value={createAssignee} 
                onChange={e => setCreateAssignee(e.target.value)}
                className="w-full text-xs h-9 border border-border bg-background px-2 rounded-lg text-foreground focus:outline-none font-semibold"
              >
                {assigneesList.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Due Date</label>
              <input 
                type="date" 
                value={createDueDate} 
                onChange={e => setCreateDueDate(e.target.value)}
                className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none" 
                required 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Attachments</label>
              <input 
                type="text" 
                placeholder="e.g. error-screenshot.png"
                value={createAttachments} 
                onChange={e => setCreateAttachments(e.target.value)}
                className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none" 
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end pt-3 border-t border-border/40">
            <Button variant="outline" size="sm" type="button" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
            <Button variant="primary" size="sm" type="submit">Create Request</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
