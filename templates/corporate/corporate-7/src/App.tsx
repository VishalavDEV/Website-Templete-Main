import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import { MainLayout } from './components/layout/MainLayout';
import { AuthLayout } from './components/layout/AuthLayout';

// Pages
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';
import { ServicesPage } from './pages/Services/ServicesPage';
import { ServiceDetailPage } from './pages/Services/ServiceDetailPage';
import { SolutionsPage } from './pages/Solutions/SolutionsPage';
import { SolutionDetailPage } from './pages/Solutions/SolutionDetailPage';
import { IndustriesPage } from './pages/Industries/IndustriesPage';
import { IndustryDetailPage } from './pages/Industries/IndustryDetailPage';
import { CaseStudiesPage } from './pages/CaseStudies/CaseStudiesPage';
import { CaseStudyDetailPage } from './pages/CaseStudies/CaseStudyDetailPage';
import { TeamPage } from './pages/Team/TeamPage';
import { TeamDetailPage } from './pages/Team/TeamDetailPage';
import { CareersPage } from './pages/Careers/CareersPage';
import { JobDetailPage } from './pages/Careers/JobDetailPage';
import { BlogPage } from './pages/Blog/BlogPage';
import { BlogDetailPage } from './pages/Blog/BlogDetailPage';
import { ResourcesPage } from './pages/Resources/ResourcesPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { SearchPage } from './pages/Search/SearchPage';

// Auth Pages
import { LoginPage } from './pages/Auth/LoginPage';
import { RegisterPage } from './pages/Auth/RegisterPage';
import { ForgotPasswordPage } from './pages/Auth/ForgotPasswordPage';

// Utility Pages
import { PrivacyPolicyPage } from './pages/Utility/PrivacyPolicyPage';
import { TermsPage } from './pages/Utility/TermsPage';
import { CookiePolicyPage } from './pages/Utility/CookiePolicyPage';
import { NotFoundPage } from './pages/Utility/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter basename="/templates/cooperate/cooperate-7">
      <Routes>
        {/* Main Website Flow */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Services */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          
          {/* Solutions */}
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          
          {/* Industries */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          
          {/* Case Studies */}
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          
          {/* Team */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:id" element={<TeamDetailPage />} />
          
          {/* Careers */}
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:jobId" element={<JobDetailPage />} />
          
          {/* Blog / Insights */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          
          {/* Resources */}
          <Route path="/resources" element={<ResourcesPage />} />
          
          {/* Contact & Search */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage />} />
          
          {/* Legal / Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          
          {/* 404 Catch-all */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Authentication Flow */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
