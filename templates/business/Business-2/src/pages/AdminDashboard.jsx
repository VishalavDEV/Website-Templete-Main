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
      <div className="pt-24 pb-20 min-h-screen bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          {/* DASHBOARD HEADER */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white border border-slate-100 rounded-3xl p-6.5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-primaryAccent flex items-center justify-center">
                <LayoutDashboard size={20} />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-primaryText">AuraDigital Admin Portal</h1>
                <p className="text-xs text-secondaryText">Welcome back, Admin</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-4.5 py-2.5 bg-red-50 text-red-500 rounded-xl text-xs font-bold hover:bg-red-100 transition-colors cursor-pointer"
            >
              <LogOut size={14} />
              Log Out
            </button>
          </div>

          {/* STATS OVERVIEW CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-secondaryText tracking-wide">Enquiries</span>
                <div className="text-2xl font-extrabold text-primaryText mt-1">{enquiries.length}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center"><Mail size={18} /></div>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-secondaryText tracking-wide">Projects</span>
                <div className="text-2xl font-extrabold text-primaryText mt-1">{projects.length}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-primaryAccent flex items-center justify-center"><Folder size={18} /></div>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-secondaryText tracking-wide">Services</span>
                <div className="text-2xl font-extrabold text-primaryText mt-1">{services.length}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center"><Layers size={18} /></div>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-secondaryText tracking-wide">Testimonials</span>
                <div className="text-2xl font-extrabold text-primaryText mt-1">{testimonials.length}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center"><MessageSquare size={18} /></div>
            </div>
          </div>

          {/* TAB SELECTION AND TABLE */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
            {/* Tabs Bar */}
            <div className="flex border-b border-slate-100 bg-slate-50/50 p-2 gap-1.5 flex-wrap">
              {[
                { id: 'enquiries', label: 'Enquiries', count: enquiries.length },
                { id: 'projects', label: 'Projects', count: projects.length },
                { id: 'services', label: 'Services', count: services.length },
                { id: 'testimonials', label: 'Testimonials', count: testimonials.length }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === tab.id
                      ? 'bg-white text-primaryAccent shadow-sm'
                      : 'text-secondaryText hover:text-primaryText'
                  }`}
                >
                  {tab.label}
                  <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-[10px]">{tab.count}</span>
                </button>
              ))}
            </div>

            {/* Content Lists */}
            <div className="p-6">
              {/* ENQUIRIES TAB */}
              {activeTab === 'enquiries' && (
                <div className="flex flex-col gap-4">
                  {enquiries.map((e) => (
                    <div key={e.id} className="border border-slate-100 rounded-2xl p-5 flex flex-col gap-3 relative hover:border-slate-200 transition-colors">
                      <button 
                        onClick={() => handleDeleteEnquiry(e.id)}
                        className="absolute top-5 right-5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                        title="Delete enquiry"
                      >
                        <Trash2 size={16} />
                      </button>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                        <span className="text-sm font-extrabold text-primaryText">{e.name}</span>
                        <span className="text-xs text-secondaryText">{e.email}</span>
                        {e.phone && <span className="text-xs text-secondaryText">Phone: {e.phone}</span>}
                        {e.company && <span className="text-xs text-secondaryText">Company: {e.company}</span>}
                      </div>

                      <div className="text-xs font-bold text-primaryAccent uppercase tracking-wide">
                        Subject: {e.subject}
                      </div>

                      <p className="text-xs text-secondaryText leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                        {e.message}
                      </p>

                      <div className="flex items-center gap-1 text-[10px] text-slate-400">
                        <Calendar size={12} />
                        <span>Submitted on {new Date(e.submittedAt).toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                  {enquiries.length === 0 && (
                    <div className="text-center py-10 text-xs text-secondaryText">No visitor enquiries found.</div>
                  )}
                </div>
              )}

              {/* PROJECTS TAB */}
              {activeTab === 'projects' && (
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-secondaryText">Portfolio Items</span>
                    <button 
                      onClick={() => { setModalType('project'); setShowModal(true); }}
                      className="gradient-bg text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1 hover:opacity-95 shadow-md shadow-indigo-500/10 cursor-pointer"
                    >
                      <Plus size={14} /> Add Project
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 text-[10px] font-bold text-secondaryText uppercase tracking-wider">
                          <th className="pb-3 pr-4">Project Name</th>
                          <th className="pb-3 px-4">Category</th>
                          <th className="pb-3 px-4">Tech Stack</th>
                          <th className="pb-3 pl-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs text-primaryText">
                        {projects.map((p) => (
                          <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                            <td className="py-3.5 pr-4 font-bold">{p.name}</td>
                            <td className="py-3.5 px-4 font-semibold text-secondaryText">{p.category}</td>
                            <td className="py-3.5 px-4 truncate max-w-xs">{p.techStack}</td>
                            <td className="py-3.5 pl-4 text-right flex justify-end gap-2.5">
                              <button onClick={() => handleEditProject(p)} className="text-slate-400 hover:text-indigo-600 cursor-pointer"><Edit2 size={14} /></button>
                              <button onClick={() => handleDeleteProject(p.id)} className="text-slate-400 hover:text-red-500 cursor-pointer"><Trash2 size={14} /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SERVICES TAB */}
              {activeTab === 'services' && (
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-secondaryText">Services List</span>
                    <button 
                      onClick={() => { setModalType('service'); setShowModal(true); }}
                      className="gradient-bg text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1 hover:opacity-95 shadow-md shadow-indigo-500/10 cursor-pointer"
                    >
                      <Plus size={14} /> Add Service
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 text-[10px] font-bold text-secondaryText uppercase tracking-wider">
                          <th className="pb-3 pr-4">Order</th>
                          <th className="pb-3 px-4">Title</th>
                          <th className="pb-3 px-4">Icon Name</th>
                          <th className="pb-3 pl-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs text-primaryText">
                        {services.map((s) => (
                          <tr key={s.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                            <td className="py-3.5 pr-4 font-mono">{s.orderIndex}</td>
                            <td className="py-3.5 px-4 font-bold">{s.title}</td>
                            <td className="py-3.5 px-4 text-secondaryText">{s.iconName}</td>
                            <td className="py-3.5 pl-4 text-right flex justify-end gap-2.5">
                              <button onClick={() => handleEditService(s)} className="text-slate-400 hover:text-indigo-600 cursor-pointer"><Edit2 size={14} /></button>
                              <button onClick={() => handleDeleteService(s.id)} className="text-slate-400 hover:text-red-500 cursor-pointer"><Trash2 size={14} /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TESTIMONIALS TAB */}
              {activeTab === 'testimonials' && (
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-secondaryText">Reviews & Feedback</span>
                    <button 
                      onClick={() => { setModalType('testimonial'); setShowModal(true); }}
                      className="gradient-bg text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1 hover:opacity-95 shadow-md shadow-indigo-500/10 cursor-pointer"
                    >
                      <Plus size={14} /> Add Testimonial
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 text-[10px] font-bold text-secondaryText uppercase tracking-wider">
                          <th className="pb-3 pr-4">Client</th>
                          <th className="pb-3 px-4">Position / Company</th>
                          <th className="pb-3 px-4">Rating</th>
                          <th className="pb-3 pl-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs text-primaryText">
                        {testimonials.map((t) => (
                          <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                            <td className="py-3.5 pr-4 font-bold">{t.clientName}</td>
                            <td className="py-3.5 px-4 text-secondaryText">{t.clientPosition}, {t.clientCompany}</td>
                            <td className="py-3.5 px-4 font-semibold">★ {t.rating}</td>
                            <td className="py-3.5 pl-4 text-right flex justify-end gap-2.5">
                              <button onClick={() => handleEditTestimonial(t)} className="text-slate-400 hover:text-indigo-600 cursor-pointer"><Edit2 size={14} /></button>
                              <button onClick={() => handleDeleteTestimonial(t.id)} className="text-slate-400 hover:text-red-500 cursor-pointer"><Trash2 size={14} /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY MODAL FORM */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-xl overflow-hidden border border-slate-100"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4.5 border-b border-slate-100 bg-slate-50/50">
                <span className="font-extrabold text-sm text-primaryText uppercase tracking-wider">
                  {editMode ? 'Edit' : 'Add'} {modalType}
                </span>
                <button onClick={closeModal} className="text-slate-400 hover:text-primaryText transition-colors cursor-pointer"><X size={18} /></button>
              </div>

              {/* Modal Body */}
              <div className="p-6 max-h-[500px] overflow-y-auto">
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
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
                        placeholder="Dashboard design"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Category *</label>
                      <select 
                        value={projectForm.category}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
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
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Tech Stack (comma-separated)</label>
                      <input 
                        type="text" 
                        value={projectForm.techStack}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, techStack: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
                        placeholder="React, Spring Boot, Postgres"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Project live link/URL</label>
                      <input 
                        type="text" 
                        value={projectForm.projectUrl}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, projectUrl: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
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
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white resize-none"
                        placeholder="Describe what this project did..."
                      />
                    </div>

                    <button type="submit" className="gradient-bg text-white py-3 rounded-xl font-semibold text-xs shadow-md mt-2 cursor-pointer">
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
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
                        placeholder="Web Development"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Icon Component Name *</label>
                      <select 
                        value={serviceForm.iconName}
                        onChange={(e) => setServiceForm(prev => ({ ...prev, iconName: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
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
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
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
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white resize-none"
                        placeholder="Service details..."
                      />
                    </div>

                    <button type="submit" className="gradient-bg text-white py-3 rounded-xl font-semibold text-xs shadow-md mt-2 cursor-pointer">
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
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
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
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
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
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
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
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
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
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Testimonial Content *</label>
                      <textarea 
                        required
                        rows={4}
                        value={testimonialForm.content}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, content: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primaryAccent focus:bg-white resize-none"
                        placeholder="What did they write about your services..."
                      />
                    </div>

                    <button type="submit" className="gradient-bg text-white py-3 rounded-xl font-semibold text-xs shadow-md mt-2 cursor-pointer">
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
