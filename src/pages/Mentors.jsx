import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import { Award, Users, BookOpen, Sparkles, MessageSquare } from 'lucide-react';

export default function Mentors({ onOpenEnroll }) {
  return (
    <div className="pt-28 md:pt-36 pb-24 bg-[#F3F0FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Distinguished Faculty</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#14103A] tracking-tight">
            Mentors Who Walked The Path.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5B5877] leading-relaxed">
            Our educators are top 100 IIT rankers, AIIMS gold medalists, and research scholars who believe real education is about sparking relentless curiosity.
          </p>
        </div>

        {/* 6 Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.mentors.map((mentor, idx) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-[32px] overflow-hidden bg-white p-3.5 shadow-xl shadow-[#5B3DF5]/5 border border-white hover:border-[#5B3DF5]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative w-full h-80 rounded-[24px] overflow-hidden bg-[#EEEAFF]">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold mb-1.5">
                      {mentor.role}
                    </span>
                    <h3 className="text-2xl font-bold">{mentor.name}</h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#5B3DF5] mb-2.5">
                    <Award className="w-4 h-4 shrink-0" />
                    <span>{mentor.credential}</span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[#14103A] mb-3">
                    {mentor.specialty}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-[#F3F0FF] border border-[#E4DDFF] mb-4">
                    <p className="text-xs text-[#5B5877] italic leading-relaxed">
                      "{mentor.quote}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-4 pt-2 border-t border-[#F3F0FF] flex items-center justify-between text-xs text-[#5B5877]">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#5B3DF5]" />
                  <span>Mentored</span>
                </span>
                <span className="font-bold text-[#14103A]">{mentor.studentsMentored}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentorship Guarantee Card */}
        <div className="mt-16 rounded-[32px] bg-gradient-to-r from-[#5B3DF5] to-[#4A2FE0] text-white p-8 sm:p-12 shadow-2xl shadow-[#5B3DF5]/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-3">
              Direct Mentor Access
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Every Enrolled Student Has 1-on-1 Cabin Hours Every Week.
            </h2>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              No junior teaching assistants. Your doubts are answered by the master faculty member who authored your lecture.
            </p>
          </div>

          <button
            onClick={() => onOpenEnroll()}
            className="px-8 py-3.5 rounded-full bg-white text-[#5B3DF5] font-bold text-sm hover:bg-[#F3F0FF] transition-all shadow-lg shrink-0 cursor-pointer"
          >
            Meet With a Faculty Dean
          </button>
        </div>

      </div>
    </div>
  );
}
