import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';
import { Clock, Users, Calendar, Check, ArrowRight, Sparkles, Filter } from 'lucide-react';

export default function Courses({ onOpenEnroll }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'JEE', 'NEET', 'Foundation', 'Boards'];

  const filteredCourses =
    selectedCategory === 'All'
      ? siteContent.coursesData
      : siteContent.coursesData.filter((c) => c.category === selectedCategory);

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-[#F3F0FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#14103A] tracking-tight">
            Programs Engineered for Victory.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5B5877] leading-relaxed">
            Every curriculum is battle-tested, paced for high conceptual retention, and reinforced with micro-batch IIT/AIIMS mentorship.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#5B3DF5] text-white shadow-md shadow-[#5B3DF5]/30'
                    : 'bg-white text-[#5B5877] hover:text-[#14103A] hover:bg-white/80 border border-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses List */}
        <div className="space-y-8">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-[32px] bg-white p-7 sm:p-10 shadow-xl shadow-[#5B3DF5]/5 border border-white hover:border-[#5B3DF5]/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-xs font-bold uppercase tracking-wider">
                      {course.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F3F0FF] text-[#14103A] text-xs font-semibold">
                      {course.class}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#14103A] tracking-tight mb-3">
                    {course.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5B5877] leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Highlights Grid */}
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#14103A] mb-3">
                    Curriculum Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {course.syllabus.map((s, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#14103A]/80">
                        <Check className="w-4 h-4 text-[#5B3DF5] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Metadata & Enroll Box */}
                <div className="lg:col-span-5 rounded-2xl bg-[#F3F0FF] p-6 sm:p-7 border border-[#E4DDFF] flex flex-col justify-between h-full">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-xs text-[#5B5877] pb-2 border-b border-[#E4DDFF]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#5B3DF5]" />
                        <span>Duration</span>
                      </span>
                      <span className="font-bold text-[#14103A]">{course.duration}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#5B5877] pb-2 border-b border-[#E4DDFF]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Users className="w-3.5 h-3.5 text-[#5B3DF5]" />
                        <span>Cohort Capacity</span>
                      </span>
                      <span className="font-bold text-[#14103A]">{course.batchSize}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#5B5877] pb-2 border-b border-[#E4DDFF]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#5B3DF5]" />
                        <span>Schedule</span>
                      </span>
                      <span className="font-bold text-[#14103A]">{course.schedule}</span>
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#5B5877] font-semibold block">
                        Annual Investment
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#5B3DF5]">
                        {course.fee}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => onOpenEnroll(course.title)}
                      className="w-full py-3 px-6 rounded-full bg-[#5B3DF5] text-white text-xs sm:text-sm font-semibold hover:bg-[#4A2FE0] transition-all shadow-md shadow-[#5B3DF5]/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Enroll in {course.title.split(' ')[0]} Track</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-center text-[#5B5877]">
                      Up to 100% scholarships available via ADST exam
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
