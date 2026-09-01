import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingElements from './components/FloatingElements';
import AIChat from './components/AIChat';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Dashboard from './pages/Dashboard';
import Instructors from './pages/Instructors';
import Programs from './pages/Programs';
import LiveLearning from './pages/LiveLearning';
import Resources from './pages/Resources';
import Quiz from './pages/Quiz';
import Achievements from './pages/Achievements';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Background Simulation Layer */}
      <AnimatedBackground />

      {/* Floating dynamic tip elements */}
      <FloatingElements />

      {/* Interactive AI chatbot assistant */}
      <AIChat />

      {/* Navigation bar */}
      <Navbar />

      {/* Main Content Router */}
      <main className="flex-grow z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/live" element={<LiveLearning />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer link index */}
      <Footer />
    </div>
  );
}
