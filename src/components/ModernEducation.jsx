import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import { siteContent } from '../data/content';
import { Sparkles } from 'lucide-react';

export default function ModernEducation() {
  const { modernEducation } = siteContent;

  return (
    <section className="relative py-20 md:py-28 bg-[#EEEAFF]/70 overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 bg-[#5B3DF5]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Rounded Photo Card */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-full max-w-md sm:max-w-lg rounded-[32px] overflow-hidden p-2.5 bg-white/70 backdrop-blur-md border border-white shadow-xl shadow-[#5B3DF5]/10 group"
            >
              <div className="relative w-full h-[320px] sm:h-[400px] rounded-[24px] overflow-hidden">
                <img
                  src={images.about.students}
                  alt="Students collaborating at wooden table"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating micro chip */}
              <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white text-xs font-semibold text-[#5B3DF5] shadow-md shadow-[#5B3DF5]/10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Concept First</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content & Big Stats */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Chip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-xs font-semibold tracking-wide uppercase mb-4"
            >
              {modernEducation.chip}
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-[#14103A] tracking-tight leading-[1.12]"
            >
              {modernEducation.headlinePart1}
              <br />
              {modernEducation.headlinePart2}
            </motion.h2>

            {/* Short violet underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '48px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="h-1 bg-[#5B3DF5] rounded-full my-5"
            />

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#5B5877] font-normal leading-relaxed max-w-xl"
            >
              {modernEducation.description}
            </motion.p>

            {/* Two Big Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 pt-8 border-t border-[#5B3DF5]/15 w-full flex items-center gap-8 sm:gap-14"
            >
              <div>
                <span className="block text-4xl sm:text-5xl font-black text-[#14103A] tracking-tight">
                  {modernEducation.stats[0].value}
                </span>
                <span className="block text-sm font-semibold text-[#5B5877] mt-1">
                  {modernEducation.stats[0].label}
                </span>
              </div>

              <div className="w-[1px] h-14 bg-[#5B3DF5]/20" />

              <div>
                <span className="block text-4xl sm:text-5xl font-black text-[#14103A] tracking-tight">
                  {modernEducation.stats[1].value}
                </span>
                <span className="block text-sm font-semibold text-[#5B5877] mt-1">
                  {modernEducation.stats[1].label}
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
