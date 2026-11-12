import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../data/content';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenEnroll }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Opacity change
      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
          setVisible(false); // scrolling down
        } else if (lastScrollY - currentScrollY > 8) {
          setVisible(true); // scrolling up
        }
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-4 md:top-6 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
        }`}
      >
        <nav
          className={`flex items-center justify-between gap-4 md:gap-8 px-5 md:px-7 py-3 md:py-3.5 rounded-full transition-all duration-300 w-full max-w-4xl ${
            scrolled
              ? 'bg-white/85 backdrop-blur-xl border border-white/90 shadow-xl shadow-[#5B3DF5]/10'
              : 'bg-white/60 backdrop-blur-md border border-white/70 shadow-lg shadow-[#5B3DF5]/5'
          }`}
        >
          {/* Logo ARCH in violet */}
          <NavLink
            to="/"
            className="flex items-center gap-1 text-2xl font-black tracking-tighter text-[#5B3DF5] hover:opacity-90 transition-opacity select-none group"
          >
            <span>{siteContent.brand.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B3DF5] mt-1 transition-transform group-hover:scale-150" />
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {siteContent.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#5B3DF5] font-semibold'
                      : 'text-[#14103A]/80 hover:text-[#5B3DF5]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5B3DF5] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Enroll Now Button (Pill) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenEnroll()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#5B3DF5] text-white text-xs md:text-sm font-semibold tracking-wide hover:bg-[#4A2FE0] transition-all duration-300 shadow-md shadow-[#5B3DF5]/20 hover:shadow-lg hover:shadow-[#5B3DF5]/30 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#14103A] hover:bg-white/80 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Animated Full Screen / Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#F3F0FF]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-10 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4 mt-6">
              <span className="text-xs uppercase tracking-widest text-[#5B5877] font-semibold px-2">
                Navigation
              </span>
              {siteContent.nav.map((item, idx) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-2xl font-bold py-3 px-4 rounded-2xl transition-all ${
                      isActive
                        ? 'bg-white text-[#5B3DF5] shadow-sm'
                        : 'text-[#14103A] hover:bg-white/50'
                    }`
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </motion.div>
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-[#5B3DF5]/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnroll();
                }}
                className="w-full py-3.5 rounded-full bg-[#5B3DF5] text-white font-semibold text-center text-sm shadow-lg shadow-[#5B3DF5]/25 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enroll Now — Admissions Open</span>
              </button>
              <p className="text-xs text-center text-[#5B5877]">
                Call admissions directly: <a href="tel:+18004568280" className="font-semibold text-[#5B3DF5]">{siteContent.brand.phone}</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
