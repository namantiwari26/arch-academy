import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';
import { GraduationCap, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Trophy: Trophy,
};

export default function PopularPrograms({ onOpenEnroll }) {
  const { popularPrograms } = siteContent;

  return (
    <section className="relative py-24 md:py-32 bg-[#F3F0FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Centered Heading & Subtext */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#14103A] tracking-tight"
          >
            {popularPrograms.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-[#5B5877] font-normal leading-relaxed"
          >
            {popularPrograms.subtext}
          </motion.p>
        </div>

        {/* 3 White Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {popularPrograms.programs.map((program, idx) => {
            const IconComponent = iconMap[program.icon] || GraduationCap;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-[28px] bg-white p-8 sm:p-9 shadow-lg shadow-[#5B3DF5]/5 border border-white hover:border-[#5B3DF5]/30 hover:shadow-2xl hover:shadow-[#5B3DF5]/12 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Soft violet icon tile */}
                  <div className="w-14 h-14 rounded-2xl bg-[#E4DDFF]/70 text-[#5B3DF5] flex items-center justify-center mb-7 transition-all duration-300 group-hover:bg-[#5B3DF5] group-hover:text-white group-hover:scale-105 group-hover:rotate-3 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#14103A] tracking-tight mb-3">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#5B5877] leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-8">
                    {program.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#14103A]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B3DF5]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-[#F3F0FF] flex items-center justify-between">
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B3DF5] group-hover:text-[#4A2FE0] transition-colors"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => onOpenEnroll(program.title)}
                    className="px-4 py-1.5 rounded-full bg-[#F3F0FF] text-[#14103A] text-xs font-semibold hover:bg-[#5B3DF5] hover:text-white transition-colors cursor-pointer"
                  >
                    Enroll
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
