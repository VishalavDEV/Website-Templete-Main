import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SubscribeModal from './components/SubscribeModal';
import ProfileDrawer from './components/ProfileDrawer';
import ToolDetailModal from './components/ToolDetailModal';
import ModelDetailModal from './components/ModelDetailModal';
import CompanyDetailModal from './components/CompanyDetailModal';
import LegalModal from './components/LegalModal';
import AuraBackground from './components/AuraBackground';

import Home from './pages/Home';
import Latest from './pages/Latest';
import ArticleDetail from './pages/ArticleDetail';
import Tools from './pages/Tools';
import Models from './pages/Models';
import Companies from './pages/Companies';
import Rankings from './pages/Rankings';
import Magazine from './pages/Magazine';
import Search from './pages/Search';
import Interactive from './pages/Interactive';
import Category from './pages/Category';

function App() {
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [legalState, setLegalState] = useState({ isOpen: false, type: 'privacy' });
  const [activeTool, setActiveTool] = useState(null);
  const [activeModel, setActiveModel] = useState(null);
  const [activeCompany, setActiveCompany] = useState(null);

  const openSubscribe = () => setSubscribeOpen(true);
  const openProfile = () => setProfileOpen(true);
  const openLegal = (type) => setLegalState({ isOpen: true, type });
  const openToolModal = (tool) => setActiveTool(tool);
  const openModelModal = (model) => setActiveModel(model);
  const openCompanyModal = (company) => setActiveCompany(company);

  return (
    <Router>
      <div className="aura-bg app-container flex flex-col" style={{ minHeight: '100vh', position: 'relative' }}>
        <AuraBackground />
        
        <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Header 
            onOpenSubscribe={openSubscribe} 
            onOpenProfile={openProfile} 
          />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <Home 
                onOpenSubscribe={openSubscribe} 
                onOpenTool={openToolModal} 
                onOpenModel={openModelModal}
                onOpenCompany={openCompanyModal}
              />
            } />
            <Route path="/latest" element={<Latest />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/article/:slug" element={<ArticleDetail onOpenSubscribe={openSubscribe} />} />
            <Route path="/tools" element={<Tools onOpenTool={openToolModal} />} />
            <Route path="/tools/:id" element={<Tools onOpenTool={openToolModal} />} />
            <Route path="/models" element={<Models onOpenModel={openModelModal} />} />
            <Route path="/models/:id" element={<Models onOpenModel={openModelModal} />} />
            <Route path="/companies" element={<Companies onOpenCompany={openCompanyModal} />} />
            <Route path="/companies/:id" element={<Companies onOpenCompany={openCompanyModal} />} />
            <Route path="/rankings" element={<Rankings onOpenCompany={openCompanyModal} />} />
            <Route path="/magazine" element={<Magazine onOpenSubscribe={openSubscribe} />} />
            <Route path="/magazine/:id" element={<Magazine onOpenSubscribe={openSubscribe} />} />
            <Route path="/search" element={
              <Search 
                onOpenTool={openToolModal} 
                onOpenModel={openModelModal} 
                onOpenCompany={openCompanyModal} 
              />
            } />
            <Route path="/interactive/rise-of-intelligence" element={<Interactive />} />
          </Routes>
        </main>

        <Footer 
          onOpenSubscribe={openSubscribe} 
          onOpenLegal={openLegal} 
        />

        {/* Global Modals */}
        <SubscribeModal 
          isOpen={subscribeOpen} 
          onClose={() => setSubscribeOpen(false)} 
        />

        <ProfileDrawer 
          isOpen={profileOpen} 
          onClose={() => setProfileOpen(false)} 
          onOpenSubscribe={() => { setProfileOpen(false); setSubscribeOpen(true); }}
        />

        <ToolDetailModal 
          tool={activeTool} 
          isOpen={!!activeTool} 
          onClose={() => setActiveTool(null)} 
        />

        <ModelDetailModal 
          model={activeModel} 
          isOpen={!!activeModel} 
          onClose={() => setActiveModel(null)} 
        />

        <CompanyDetailModal 
          company={activeCompany} 
          isOpen={!!activeCompany} 
          onClose={() => setActiveCompany(null)} 
        />

        <LegalModal 
          type={legalState.type} 
          isOpen={legalState.isOpen} 
          onClose={() => setLegalState({ isOpen: false, type: 'privacy' })} 
        />
        </div>
      </div>
    </Router>
  );
}

export default App;
