import React, { useState, useEffect } from 'react';
import { PageId, Course, StudentProfile } from './types';
import { EduNavbar } from './components/EduNavbar';
import { EduFooter } from './components/EduFooter';
import { AuthModal } from './components/AuthModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';

// EduPath Pages
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { LearningPathsPage } from './pages/LearningPathsPage';
import { MentorshipPage } from './pages/MentorshipPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { CreatePlanPage } from './pages/CreatePlanPage';
import { TrackProgressPage } from './pages/TrackProgressPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [courseDetailOpen, setCourseDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Student Auth
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<StudentProfile | null>(null);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setCourseDetailOpen(true);
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('courses');
  };

  const handleAuthSuccess = (student: StudentProfile | string) => {
    if (typeof student === 'object') {
      setCurrentStudent(student);
    } else {
      setCurrentStudent({
        studentId: 'SKL-2026-8891',
        name: student,
        email: `${student.toLowerCase().replace(/\s+/g, '.')}@skillora.edu`,
        passwordHint: 'student123',
        program: 'Full-Stack AI Engineering',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        enrolledCoursesCount: 5,
        completedHours: 38,
        currentStreakDays: 14,
        badge: 'Honor Scholar',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
      {/* 1. Pill Navigation matching Skillora light design system */}
      <EduNavbar
        currentPage={currentPage}
        currentStudent={currentStudent}
        onNavigate={handleNavigate}
        onOpenAuth={handleOpenAuth}
        onLogout={() => setCurrentStudent(null)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 2. Main Active Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCourse={handleSelectCourse}
            onOpenAuth={handleOpenAuth}
            onSearchSubmit={handleSearchSubmit}
          />
        )}
        {currentPage === 'courses' && (
          <CoursesPage
            initialSearchQuery={searchQuery}
            onNavigate={handleNavigate}
            onSelectCourse={handleSelectCourse}
          />
        )}
        {currentPage === 'paths' && (
          <LearningPathsPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'mentorship' && (
          <MentorshipPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'resources' && (
          <ResourcesPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'about' && (
          <AboutUsPage
            onNavigate={handleNavigate}
            onOpenAuth={handleOpenAuth}
          />
        )}
        {currentPage === 'create-plan' && (
          <CreatePlanPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'track-progress' && (
          <TrackProgressPage
            currentStudent={currentStudent}
            onNavigate={handleNavigate}
            onOpenAuth={handleOpenAuth}
            onLoginStudent={handleAuthSuccess}
            onLogout={() => setCurrentStudent(null)}
          />
        )}
      </main>

      {/* 3. EduPath Footer */}
      <EduFooter
        onNavigate={handleNavigate}
        onOpenAuth={handleOpenAuth}
      />

      {/* 4. Global Interactive Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        initialMode={authMode}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onSelectCourse={handleSelectCourse}
      />

      <CourseDetailModal
        course={selectedCourse}
        isOpen={courseDetailOpen}
        onClose={() => setCourseDetailOpen(false)}
      />
    </div>
  );
}
