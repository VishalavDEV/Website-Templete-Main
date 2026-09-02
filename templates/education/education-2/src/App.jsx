import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import EnrollModal from './components/EnrollModal';
import InstructorModal from './components/InstructorModal';
import EventModal from './components/EventModal';

import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import About from './pages/About';
import Instructors from './pages/Instructors';
import Events from './pages/Events';
import StudentSuccess from './pages/StudentSuccess';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';

export default function App() {
  const [enrollingCourse, setEnrollingCourse] = useState(null);
  const [viewingInstructor, setViewingInstructor] = useState(null);
  const [registeringEvent, setRegisteringEvent] = useState(null);

  const handleEnroll = (course) => {
    setEnrollingCourse(course);
  };

  const handleViewInstructor = (instructor) => {
    setViewingInstructor(instructor);
  };

  const handleRegisterEvent = (event) => {
    setRegisteringEvent(event);
  };

  return (
    <Router basename="/templates/education/education-2">
      <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-primary-500 selection:text-white">
        {/* Scroll Handler & Sticky Button */}
        <ScrollToTop />

        {/* Global Navigation */}
        <Navbar />

        {/* Dynamic Main Routes */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onEnroll={handleEnroll}
                  onViewInstructor={handleViewInstructor}
                  onRegisterEvent={handleRegisterEvent}
                />
              }
            />
            <Route
              path="/index.html"
              element={
                <Home
                  onEnroll={handleEnroll}
                  onViewInstructor={handleViewInstructor}
                  onRegisterEvent={handleRegisterEvent}
                />
              }
            />
            <Route
              path="/courses"
              element={<Courses onEnroll={handleEnroll} />}
            />
            <Route
              path="/courses/:id"
              element={<CourseDetails onEnroll={handleEnroll} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/instructors"
              element={<Instructors onViewProfile={handleViewInstructor} />}
            />
            <Route
              path="/events"
              element={<Events onRegisterEvent={handleRegisterEvent} />}
            />
            <Route path="/student-success" element={<StudentSuccess />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admissions" element={<Admissions />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Overlays / Modals */}
        {enrollingCourse && (
          <EnrollModal
            course={enrollingCourse}
            onClose={() => setEnrollingCourse(null)}
          />
        )}

        {viewingInstructor && (
          <InstructorModal
            instructor={viewingInstructor}
            onClose={() => setViewingInstructor(null)}
            onEnrollCourse={handleEnroll}
          />
        )}

        {registeringEvent && (
          <EventModal
            event={registeringEvent}
            onClose={() => setRegisteringEvent(null)}
          />
        )}
      </div>
    </Router>
  );
}
