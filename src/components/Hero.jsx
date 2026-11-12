import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import { siteContent } from '../data/content';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero({ onOpenEnroll }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / rect.height) * -12,
      y: (x / rect.width) * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Hero Image with Left Lavender Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          src={images.hero.bg}
          alt="ARCH Students learning"
          className="w-full h-full object-cover object-center md:object-[65%_center] opacity-35 md:opacity-45"
        />
        {/* Lavender gradient overlay tuned for supreme text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3F0FF] via-[#F3F0FF]/95 via-45% md:via-55% to-[#F3F0FF]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F3F0FF] via-transparent to-transparent opacity-80" />
      </div>

      {/* Floating decorative ambient light blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-[#5B3DF5]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#E4DDFF]/40 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, copy, actions */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-2xl">
            {/* Tag chip: Future Focused Learning */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white shadow-sm shadow-[#5B3DF5]/5 text-xs sm:text-sm font-semibold text-[#14103A] mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
              <span>{siteContent.hero.chip}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#14103A] leading-[1.08] sm:leading-[1.06]"
            >
              <span>{siteContent.hero.titleLine1}</span>
              <br />
              <span className="text-[#5B3DF5] relative inline-block animate-shimmer">
                {siteContent.hero.titleHighlight}
              </span>
              <br />
              <span>{siteContent.hero.titleLine2}</span>
            </motion.h1>

            {/* Sub-paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-base sm:text-lg text-[#5B5877] font-normal leading-relaxed max-w-xl"
            >
              {siteContent.hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Violet Button: Start Learning */}
              <button
                onClick={() => onOpenEnroll()}
                className="px-7 py-3.5 rounded-full bg-[#5B3DF5] text-white font-semibold text-sm tracking-wide hover:bg-[#4A2FE0] transition-all duration-300 shadow-xl shadow-[#5B3DF5]/30 hover:shadow-2xl hover:shadow-[#5B3DF5]/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2 group"
              >
                <span>{siteContent.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* White Button: Explore Courses */}
              <button
                onClick={() => navigate('/courses')}
                className="px-7 py-3.5 rounded-full bg-white/90 text-[#14103A] font-semibold text-sm tracking-wide border border-white hover:bg-white hover:border-[#5B3DF5]/20 transition-all duration-300 shadow-md shadow-black/5 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2 group"
              >
                <BookOpen className="w-4 h-4 text-[#5B3DF5]" />
                <span>{siteContent.hero.ctaSecondary}</span>
              </button>
            </motion.div>

            {/* Trust badge icons below buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex items-center gap-3 text-xs text-[#5B5877]"
            >
              <div className="flex -space-x-2">
                <img
                  src="/images/avatars/a1.jpg"
                  alt="Student"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/images/avatars/a2.jpg"
                  alt="Student"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/images/avatars/a3.jpg"
                  alt="Student"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="flex items-center gap-1 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#5B3DF5]" />
                <span>Rated 4.9/5 by 3,200+ students & parents</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Library Photo Card with Frosted Stats Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-sm sm:max-w-md rounded-[32px] overflow-hidden p-2.5 bg-white/70 backdrop-blur-md border border-white shadow-2xl shadow-[#5B3DF5]/15 group select-none"
            >
              {/* Photo Card Image */}
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-[24px] overflow-hidden">
                <img
                  src={images.hero.libraryCard}
                  alt="Students studying in library"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Frosted Glass Stats Panel at bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl glass-card-stats backdrop-blur-xl border border-white/90">
                <div className="grid grid-cols-2 divide-x divide-[#5B3DF5]/20 text-center">
                  <div className="pr-3">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#14103A] tracking-tight">
                      {siteContent.hero.statsCard.studentsTrained}
                    </span>
                    <span className="block text-xs font-semibold text-[#5B5877] mt-0.5">
                      {siteContent.hero.statsCard.studentsTrainedLabel}
                    </span>
                  </div>
                  <div className="pl-3">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#5B3DF5] tracking-tight">
                      {siteContent.hero.statsCard.successRate}
                    </span>
                    <span className="block text-xs font-semibold text-[#5B5877] mt-0.5">
                      {siteContent.hero.statsCard.successRateLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
