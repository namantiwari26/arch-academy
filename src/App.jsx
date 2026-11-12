import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { ScrollProgress, BackToTop } from './components/ScrollProgress';
import EnrollModal from './components/EnrollModal';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Mentors from './pages/Mentors';
import Results from './pages/Results';
import Contact from './pages/Contact';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Wrapper to handle route transitions and scroll reset
function AnimatedRoutes({ onOpenEnroll }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      try {
        ScrollTrigger.refresh();
      } catch {}
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Home onOpenEnroll={onOpenEnroll} />} />
          <Route path="/courses" element={<Courses onOpenEnroll={onOpenEnroll} />} />
          <Route path="/mentors" element={<Mentors onOpenEnroll={onOpenEnroll} />} />
          <Route path="/results" element={<Results onOpenEnroll={onOpenEnroll} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState('');

  // Initialize Lenis smooth scroll safely
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lenisInstance = null;
    let tickerCallback = null;

    try {
      lenisInstance = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      lenisInstance.on('scroll', ScrollTrigger.update);

      tickerCallback = (time) => {
        lenisInstance.raf(time * 1000);
      };

      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    } catch (err) {
      console.warn('Lenis smooth scroll initialization skipped:', err);
    }

    return () => {
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      if (lenisInstance) {
        try {
          lenisInstance.destroy();
        } catch {}
      }
    };
  }, []);

  const handleOpenEnroll = (courseName = '') => {
    setPreselectedCourse(courseName);
    setModalOpen(true);
  };

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-[#F3F0FF] text-[#14103A] font-sans antialiased selection:bg-[#5B3DF5] selection:text-white">
        {/* Preloader */}
        <Preloader />

        {/* Custom cursor (desktop) */}
        <Cursor />

        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Floating Glass Navbar */}
        <Navbar onOpenEnroll={handleOpenEnroll} />

        {/* Page Content with AnimatePresence */}
        <div className="flex-1 w-full">
          <AnimatedRoutes onOpenEnroll={handleOpenEnroll} />
        </div>

        {/* Footer */}
        <Footer onOpenEnroll={handleOpenEnroll} />

        {/* Back to top button */}
        <BackToTop />

        {/* Global Enrollment & Counseling Modal */}
        <EnrollModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          preselectedCourse={preselectedCourse}
        />
      </div>
    </Router>
  );
}
