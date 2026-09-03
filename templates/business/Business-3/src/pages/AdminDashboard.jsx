import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, 
  Layers, 
  MessageSquare, 
  Mail, 
  Plus, 
  Edit2, 
  Trash2, 
  X, 
  LayoutDashboard, 
  LogOut, 
  Calendar 
} from 'lucide-react';
import { api } from '../utils/api';
import AnimatedPage from '../components/AnimatedPage';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('enquiries'); // 'enquiries', 'projects', 'services', 'testimonials'
  const [enquiries, setEnquiries] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  // Modal controls
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('project'); // 'project', 'service', 'testimonial'
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Form states
  const [projectForm, setProjectForm] = useState({ name: '', category: 'Web Development', description: '', imageUrl: '', techStack: '', projectUrl: '' });
  const [serviceForm, setServiceForm] = useState({ title: '', iconName: 'Globe', description: '', orderIndex: 1 });
  const [testimonialForm, setTestimonialForm] = useState({ clientName: '', clientPosition: '', clientCompany: '', clientAvatarUrl: '', rating: 5, content: '' });

  const navigate = useNavigate();

  // Route protection check
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      loadData();
    }
  }, [navigate]);

  const loadData = () => {
    api.getEnquiries().then(setEnquiries).catch(err => console.log('Enquiries failed:', err));
    api.getProjects().then(setProjects).catch(err => console.log('Projects failed:', err));
    api.getServices().then(setServices).catch(err => console.log('Services failed:', err));
    api.getTestimonials().then(setTestimonials).catch(err => console.log('Testimonials failed:', err));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
    window.location.reload();
  };

  // ENQUIRIES ACTION
  const handleDeleteEnquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      await api.deleteEnquiry(id);
      setEnquiries(prev => prev.filter(e => e.id !== id));
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  // PROJECT ACTIONS
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const res = await api.updateProject(editingId, projectForm);
        setProjects(prev => prev.map(p => p.id === editingId ? res : p));
      } else {
        const res = await api.createProject(projectForm);
        setProjects(prev => [...prev, res]);
      }
      closeModal();
    } catch (err) {
      alert('Submit failed: ' + err.message);
    }
  };

  const handleEditProject = (p) => {
    setProjectForm({
      name: p.name,
      category: p.category,
      description: p.description,
      imageUrl: p.imageUrl,
      techStack: p.techStack || '',
      projectUrl: p.projectUrl || ''
    });
    setEditingId(p.id);
    setEditMode(true);
    setModalType('project');
    setShowModal(true);
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await api.deleteProject(id);
      setProjects(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  // SERVICE ACTIONS
  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const res = await api.updateService(editingId, serviceForm);
        setServices(prev => prev.map(s => s.id === editingId ? res : s));
      } else {
        const res = await api.createService(serviceForm);
        setServices(prev => [...prev, res]);
      }
      closeModal();
    } catch (err) {
      alert('Submit failed: ' + err.message);
    }
  };

  const handleEditService = (s) => {
    setServiceForm({
      title: s.title,
      iconName: s.iconName,
      description: s.description,
      orderIndex: s.orderIndex
    });
    setEditingId(s.id);
    setEditMode(true);
    setModalType('service');
    setShowModal(true);
  };

  const handleDeleteService = async (id) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;
    try {
      await api.deleteService(id);
      setServices(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  // TESTIMONIAL ACTIONS
  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const res = await api.updateTestimonial(editingId, testimonialForm);
        setTestimonials(prev => prev.map(t => t.id === editingId ? res : t));
      } else {
        const res = await api.createTestimonial(testimonialForm);
        setTestimonials(prev => [...prev, res]);
      }
      closeModal();
    } catch (err) {
      alert('Submit failed: ' + err.message);
    }
  };

  const handleEditTestimonial = (t) => {
    setTestimonialForm({
      clientName: t.clientName,
      clientPosition: t.clientPosition,
      clientCompany: t.clientCompany,
      clientAvatarUrl: t.clientAvatarUrl || '',
      rating: t.rating,
      content: t.content
    });
    setEditingId(t.id);
    setEditMode(true);
    setModalType('testimonial');
    setShowModal(true);
  };

  const handleDeleteTestimonial = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      await api.deleteTestimonial(id);
      setTestimonials(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  // Helper closing modals
  const closeModal = () => {
    setShowModal(false);
    setEditMode(false);
    setEditingId(null);
    setProjectForm({ name: '', category: 'Web Development', description: '', imageUrl: '', techStack: '', projectUrl: '' });
    setServiceForm({ title: '', iconName: 'Globe', description: '', orderIndex: 1 });
    setTestimonialForm({ clientName: '', clientPosition: '', clientCompany: '', clientAvatarUrl: '', rating: 5, content: '' });
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[#1E1033] flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* LEFT PANEL - FIXED CONTROLLER & STATS */}
        <div className="w-full lg:w-[40%] lg:fixed lg:top-0 lg:left-0 lg:h-screen pt-28 pb-12 px-6 sm:px-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-customBorder bg-[#180A2B] z-10 overflow-y-auto custom-scrollbar">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E1033] text-primaryAccent flex items-center justify-center border border-customBorder">
                <LayoutDashboard size={20} />
              </div>
              <div>
                <h1 className="text-lg font-extrabold text-primaryText">Admin Dashboard</h1>
                <p className="text-xs text-secondaryText">Welcome back, Administrator</p>
              </div>
            </div>

            {/* STATS OVERVIEW CARDS (Vertical list/grid) */}
            <div className="grid grid-cols-2 gap-4.5 mt-4">
              <div className="bg-[#1E1033] border border-customBorder p-4.5 rounded-2xl shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase font-bold text-secondaryText tracking-wide">Enquiries</span>
                  <div className="text-xl font-extrabold text-primaryText mt-0.5">{enquiries.length}</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#2E1A47] text-sky-400 flex items-center justify-center border border-customBorder/30"><Mail size={14} /></div>
              </div>

              <div className="bg-[#1E1033] border border-customBorder p-4.5 rounded-2xl shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase font-bold text-secondaryText tracking-wide">Projects</span>
                  <div className="text-xl font-extrabold text-primaryText mt-0.5">{projects.length}</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#2E1A47] text-primaryAccent flex items-center justify-center border border-customBorder/30"><Folder size={14} /></div>
              </div>

              <div className="bg-[#1E1033] border border-customBorder p-4.5 rounded-2xl shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase font-bold text-secondaryText tracking-wide">Services</span>
                  <div className="text-xl font-extrabold text-primaryText mt-0.5">{services.length}</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#2E1A47] text-emerald-400 flex items-center justify-center border border-customBorder/30"><Layers size={14} /></div>
              </div>

              <div className="bg-[#1E1033] border border-customBorder p-4.5 rounded-2xl shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase font-bold text-secondaryText tracking-wide">Reviews</span>
                  <div className="text-xl font-extrabold text-primaryText mt-0.5">{testimonials.length}</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#2E1A47] text-purple-400 flex items-center justify-center border border-customBorder/30"><MessageSquare size={14} /></div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-customBorder/50 mt-10">
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 w-full py-3 bg-red-950/20 text-red-400 border border-red-900/50 rounded-xl text-xs font-bold hover:bg-red-900/30 transition-colors cursor-pointer"
            >
              <LogOut size={14} />
              Log Out of Session
            </button>
          </div>

        </div>

        {/* RIGHT PANEL - SCROLLING CONTROL BOARDS */}
        <div className="w-full lg:w-[60%] lg:ml-[40%] pt-12 lg:pt-28 pb-20 px-6 sm:px-10 flex flex-col gap-10 overflow-x-hidden">

          {/* 1. VISITOR ENQUIRIES BOARD */}
          <div className="bg-lightAccent border border-customBorder rounded-3xl p-6.5 shadow-sm flex flex-col gap-4 max-h-[500px]">
            <div className="flex justify-between items-center border-b border-customBorder pb-3">
              <span className="text-xs font-bold text-primaryText uppercase tracking-wider flex items-center gap-1.5">
                <Mail size={14} className="text-sky-400" />
                Visitor Messages
              </span>
              <span className="bg-[#1E1033] text-secondaryText px-2 py-0.5 rounded-full text-[10px] border border-customBorder font-mono font-bold">{enquiries.length}</span>
            </div>
            
            <div className="flex flex-col gap-4 overflow-y-auto pr-1 flex-1 custom-scrollbar">
              {enquiries.map((e) => (
                <div key={e.id} className="border border-customBorder rounded-2xl p-4.5 flex flex-col gap-2.5 relative hover:border-[#7C3AED] transition-colors bg-[#180A2B]/40">
                  <button 
                    onClick={() => handleDeleteEnquiry(e.id)}
                    className="absolute top-4.5 right-4.5 text-secondaryText hover:text-red-500 transition-colors cursor-pointer"
                    title="Delete enquiry"
                  >
                    <Trash2 size={14} />
                  </button>
                  
                  <div className="flex flex-col gap-1 pr-6">
                    <span className="text-xs font-bold text-primaryText">{e.name}</span>
                    <span className="text-[10px] text-secondaryText font-mono">{e.email}</span>
                    {e.phone && <span className="text-[10px] text-secondaryText">Phone: {e.phone}</span>}
                    {e.company && <span className="text-[10px] text-secondaryText">Company: {e.company}</span>}
                  </div>

                  <div className="text-[11px] font-bold text-primaryAccent uppercase tracking-wide">
                    Subject: {e.subject}
                  </div>

                  <p className="text-[11px] text-secondaryText leading-relaxed bg-[#1E1033] p-3 rounded-lg border border-customBorder">
                    {e.message}
                  </p>

                  <div className="flex items-center gap-1 text-[9px] text-secondaryText/60">
                    <Calendar size={10} />
                    <span>{new Date(e.submittedAt).toLocaleString()}</span>
                  </div>
                </div>
              ))}
              {enquiries.length === 0 && (
                <div className="text-center py-16 text-xs text-secondaryText">No visitor enquiries found.</div>
              )}
            </div>
          </div>

          {/* 2. PROJECTS CATALOG TABLE */}
          <div className="bg-lightAccent border border-customBorder rounded-3xl p-6.5 shadow-sm flex flex-col gap-4 max-h-[380px]">
            <div className="flex justify-between items-center border-b border-customBorder pb-3">
              <span className="text-xs font-bold text-primaryText uppercase tracking-wider flex items-center gap-1.5">
                <Folder size={14} className="text-primaryAccent" />
                Portfolio Projects
              </span>
              <button 
                onClick={() => { setModalType('project'); setShowModal(true); }}
                className="gradient-bg text-white px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1 hover:opacity-95 cursor-pointer"
              >
                <Plus size={12} /> Add Project
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-1 custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-customBorder text-[9px] font-bold text-secondaryText uppercase tracking-wider">
                    <th className="pb-2 pr-2">Project</th>
                    <th className="pb-2 px-2">Category</th>
                    <th className="pb-2 px-2">Tech Stack</th>
                    <th className="pb-2 pl-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] text-primaryText">
                  {projects.map((p) => (
                    <tr key={p.id} className="border-b border-customBorder/30 hover:bg-[#1E1033]/50">
                      <td className="py-2.5 pr-2 font-bold max-w-[120px] truncate">{p.name}</td>
                      <td className="py-2.5 px-2 font-semibold text-secondaryText max-w-[100px] truncate">{p.category}</td>
                      <td className="py-2.5 px-2 truncate max-w-[140px] text-secondaryText/70">{p.techStack}</td>
                      <td className="py-2.5 pl-2 text-right flex justify-end gap-2 shrink-0">
                        <button onClick={() => handleEditProject(p)} className="text-secondaryText hover:text-primaryAccent cursor-pointer"><Edit2 size={12} /></button>
                        <button onClick={() => handleDeleteProject(p.id)} className="text-secondaryText hover:text-red-500 cursor-pointer"><Trash2 size={12} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. SERVICES LIST & CRUD */}
          <div className="bg-lightAccent border border-customBorder rounded-3xl p-6.5 shadow-sm flex flex-col gap-4 max-h-[380px]">
            <div className="flex justify-between items-center border-b border-customBorder pb-3">
              <span className="text-xs font-bold text-primaryText uppercase tracking-wider flex items-center gap-1.5">
                <Layers size={14} className="text-emerald-400" />
                Service Configurations
              </span>
              <button 
                onClick={() => { setModalType('service'); setShowModal(true); }}
                className="gradient-bg text-white px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1 hover:opacity-95 cursor-pointer"
              >
                <Plus size={12} /> Add Service
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-1 custom-scrollbar">
              <div className="flex flex-col gap-2.5">
                {services.map((s) => (
                  <div key={s.id} className="flex justify-between items-center bg-[#180A2B]/40 p-3 rounded-xl border border-customBorder/30">
                    <div className="flex flex-col truncate pr-2">
                      <span className="text-[11px] font-bold text-primaryText truncate">{s.title}</span>
                      <span className="text-[9px] text-secondaryText font-mono">Order Index: {s.orderIndex}</span>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => handleEditService(s)} className="text-secondaryText hover:text-primaryAccent cursor-pointer"><Edit2 size={11} /></button>
                      <button onClick={() => handleDeleteService(s.id)} className="text-secondaryText hover:text-red-500 cursor-pointer"><Trash2 size={11} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. TESTIMONIALS CONFIG */}
          <div className="bg-lightAccent border border-customBorder rounded-3xl p-6.5 shadow-sm flex flex-col gap-4 max-h-[380px]">
            <div className="flex justify-between items-center border-b border-customBorder pb-3">
              <span className="text-xs font-bold text-primaryText uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare size={14} className="text-purple-400" />
                Client Testimonial Reviews
              </span>
              <button 
                onClick={() => { setModalType('testimonial'); setShowModal(true); }}
                className="gradient-bg text-white px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1 hover:opacity-95 cursor-pointer"
              >
                <Plus size={12} /> Add Review
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-1 custom-scrollbar">
              <div className="flex flex-col gap-2.5">
                {testimonials.map((t) => (
                  <div key={t.id} className="flex justify-between items-center bg-[#180A2B]/40 p-3 rounded-xl border border-customBorder/30">
                    <div className="flex flex-col truncate pr-2">
                      <span className="text-[11px] font-bold text-primaryText truncate">{t.clientName}</span>
                      <span className="text-[9px] text-amber-400">★ {t.rating} rating</span>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => handleEditTestimonial(t)} className="text-secondaryText hover:text-primaryAccent cursor-pointer"><Edit2 size={11} /></button>
                      <button onClick={() => handleDeleteTestimonial(t.id)} className="text-secondaryText hover:text-red-500 cursor-pointer"><Trash2 size={11} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* OVERLAY MODAL FORM */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-[#1E1033]/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-lightAccent rounded-3xl w-full max-w-lg shadow-xl overflow-hidden border border-customBorder"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4.5 border-b border-customBorder bg-[#180A2B]">
                <span className="font-extrabold text-sm text-primaryText uppercase tracking-wider">
                  {editMode ? 'Edit' : 'Add'} {modalType}
                </span>
                <button onClick={closeModal} className="text-secondaryText hover:text-primaryText transition-colors cursor-pointer"><X size={18} /></button>
              </div>

              {/* Modal Body */}
              <div className="p-6 max-h-[500px] overflow-y-auto custom-scrollbar">
                {/* PROJECT FORM */}
                {modalType === 'project' && (
                  <form onSubmit={handleProjectSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Project Name *</label>
                      <input 
                        type="text" 
                        required
                        value={projectForm.name}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] placeholder-secondaryText/30"
                        placeholder="Dashboard design"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Category *</label>
                      <select 
                        value={projectForm.category}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47]"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Cloud Solutions">Cloud Solutions</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Image URL *</label>
                      <input 
                        type="text" 
                        required
                        value={projectForm.imageUrl}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, imageUrl: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] placeholder-secondaryText/30"
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Tech Stack (comma-separated)</label>
                      <input 
                        type="text" 
                        value={projectForm.techStack}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, techStack: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] placeholder-secondaryText/30"
                        placeholder="React, Spring Boot, Postgres"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Project live link/URL</label>
                      <input 
                        type="text" 
                        value={projectForm.projectUrl}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, projectUrl: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] placeholder-secondaryText/30"
                        placeholder="https://example.com"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Description *</label>
                      <textarea 
                        required
                        rows={4}
                        value={projectForm.description}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] resize-none placeholder-secondaryText/30"
                        placeholder="Describe what this project did..."
                      />
                    </div>

                    <button type="submit" className="gradient-bg text-white py-3 rounded-xl font-semibold text-xs shadow-md mt-2 cursor-pointer border border-transparent">
                      {editMode ? 'Update' : 'Create'} Project
                    </button>
                  </form>
                )}

                {/* SERVICE FORM */}
                {modalType === 'service' && (
                  <form onSubmit={handleServiceSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Service Title *</label>
                      <input 
                        type="text" 
                        required
                        value={serviceForm.title}
                        onChange={(e) => setServiceForm(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] placeholder-secondaryText/30"
                        placeholder="Web Development"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Icon Component Name *</label>
                      <select 
                        value={serviceForm.iconName}
                        onChange={(e) => setServiceForm(prev => ({ ...prev, iconName: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47]"
                      >
                        <option value="Globe">Globe (Web)</option>
                        <option value="Smartphone">Smartphone (Mobile)</option>
                        <option value="Layers">Layers (UI/UX)</option>
                        <option value="Cloud">Cloud (Cloud)</option>
                        <option value="Cpu">Cpu (Digital Transformation)</option>
                        <option value="Zap">Zap (Automation)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Order Sequence Index</label>
                      <input 
                        type="number" 
                        required
                        value={serviceForm.orderIndex}
                        onChange={(e) => setServiceForm(prev => ({ ...prev, orderIndex: parseInt(e.target.value, 10) }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] placeholder-secondaryText/30"
                        placeholder="1"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Description *</label>
                      <textarea 
                        required
                        rows={4}
                        value={serviceForm.description}
                        onChange={(e) => setServiceForm(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] resize-none placeholder-secondaryText/30"
                        placeholder="Service details..."
                      />
                    </div>

                    <button type="submit" className="gradient-bg text-white py-3 rounded-xl font-semibold text-xs shadow-md mt-2 cursor-pointer border border-transparent">
                      {editMode ? 'Update' : 'Create'} Service
                    </button>
                  </form>
                )}

                {/* TESTIMONIAL FORM */}
                {modalType === 'testimonial' && (
                  <form onSubmit={handleTestimonialSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Client Name *</label>
                      <input 
                        type="text" 
                        required
                        value={testimonialForm.clientName}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, clientName: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] placeholder-secondaryText/30"
                        placeholder="Johnathan Doe"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Position *</label>
                        <input 
                          type="text" 
                          required
                          value={testimonialForm.clientPosition}
                          onChange={(e) => setTestimonialForm(prev => ({ ...prev, clientPosition: e.target.value }))}
                          className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] placeholder-secondaryText/30"
                          placeholder="Co-Founder"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Company *</label>
                        <input 
                          type="text" 
                          required
                          value={testimonialForm.clientCompany}
                          onChange={(e) => setTestimonialForm(prev => ({ ...prev, clientCompany: e.target.value }))}
                          className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] placeholder-secondaryText/30"
                          placeholder="SaaS Corp"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Client Avatar Image URL</label>
                      <input 
                        type="text" 
                        value={testimonialForm.clientAvatarUrl}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, clientAvatarUrl: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] placeholder-secondaryText/30"
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Rating (1 to 5 stars) *</label>
                      <input 
                        type="number" 
                        min={1}
                        max={5}
                        required
                        value={testimonialForm.rating}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, rating: parseInt(e.target.value, 10) }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47]"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Testimonial Content *</label>
                      <textarea 
                        required
                        rows={4}
                        value={testimonialForm.content}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, content: e.target.value }))}
                        className="w-full bg-[#1E1033] border border-customBorder rounded-xl px-4 py-2.5 text-xs text-primaryText focus:outline-none focus:border-primaryAccent focus:bg-[#2E1A47] resize-none placeholder-secondaryText/30"
                        placeholder="What did they write about your services..."
                      />
                    </div>

                    <button type="submit" className="gradient-bg text-white py-3 rounded-xl font-semibold text-xs shadow-md mt-2 cursor-pointer border border-transparent">
                      {editMode ? 'Update' : 'Create'} Testimonial
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default AdminDashboard;
