import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import { ArrowRight, Award, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MentorsTeaser() {
  const featuredMentors = images.mentors.slice(0, 3);

  return (
    <section className="relative py-24 md:py-32 bg-[#EEEAFF]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-xs font-semibold uppercase tracking-wider mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>World-Class Faculty</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14103A] tracking-tight">
              Taught By The Nation’s Best.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5B5877] max-w-xl">
              Our faculty members aren't just teachers; they are IIT rankers, AIIMS doctors, and Olympiad mentors dedicated to your personal breakthrough.
            </p>
          </div>

          <Link
            to="/mentors"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#5B3DF5] font-semibold text-sm shadow-md hover:shadow-lg hover:bg-[#5B3DF5] hover:text-white transition-all duration-300 self-start md:self-auto cursor-pointer group"
          >
            <span>Meet All Faculty</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredMentors.map((mentor, idx) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-[32px] overflow-hidden bg-white p-3 shadow-xl shadow-[#5B3DF5]/5 border border-white hover:border-[#5B3DF5]/30 transition-all duration-300"
            >
              <div className="relative w-full h-80 rounded-[24px] overflow-hidden bg-[#EEEAFF]">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold mb-1">
                    {mentor.role}
                  </span>
                  <h3 className="text-xl font-bold">{mentor.name}</h3>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5B3DF5] mb-2">
                  <Award className="w-4 h-4" />
                  <span>{mentor.credential}</span>
                </div>
                <p className="text-xs text-[#5B5877] font-medium leading-relaxed mb-4">
                  {mentor.specialty}
                </p>
                <div className="pt-3 border-t border-[#F3F0FF] flex items-center justify-between text-xs text-[#5B5877]">
                  <span>Students Guided</span>
                  <span className="font-bold text-[#14103A]">{mentor.studentsMentored}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
