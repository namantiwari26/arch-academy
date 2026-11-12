import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import TestimonialSlider from '../components/TestimonialSlider';
import { Trophy, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Results({ onOpenEnroll }) {
  const [activeYear, setActiveYear] = useState('2026');

  const stats = [
    { value: 'AIR 14', label: 'Highest JEE Advanced Rank', sub: 'Kabir Singhal (2-Yr Pinnacle)' },
    { value: 'AIR 27', label: 'Highest NEET UG Rank', sub: 'Divya Rao (Medical Pioneer)' },
    { value: '96.4%', label: 'JEE Main Qualification Rate', sub: 'Across All Classroom Batches' },
    { value: '380+', label: 'Selections in Premier IITs/AIIMS', sub: 'Consecutive track record' },
  ];

  const yearWiseData = {
    '2026': [
      { exam: 'JEE Advanced', selections: 142, topRanks: 'AIR 14, 52, 165, 280, 410', avgPercentile: '98.8%' },
      { exam: 'NEET UG', selections: 184, topRanks: 'AIR 27, 79, 112, 198, 305', avgPercentile: '665/720 Avg' },
      { exam: 'JEE Main', selections: 310, topRanks: '100%ile (x3), 99.9%ile (x18)', avgPercentile: '99.1%' },
      { exam: 'Olympiads (INPhO/INChO)', selections: 28, topRanks: '2 Gold Medals, 5 Silver', avgPercentile: 'Top 1% Nationally' },
    ],
    '2025': [
      { exam: 'JEE Advanced', selections: 128, topRanks: 'AIR 31, 88, 192, 340', avgPercentile: '98.4%' },
      { exam: 'NEET UG', selections: 162, topRanks: 'AIR 45, 94, 143, 220', avgPercentile: '658/720 Avg' },
      { exam: 'JEE Main', selections: 280, topRanks: '99.9%ile (x12)', avgPercentile: '98.9%' },
      { exam: 'Olympiads (INPhO/INChO)', selections: 22, topRanks: '1 Gold Medal, 4 Silver', avgPercentile: 'Top 1% Nationally' },
    ],
    '2024': [
      { exam: 'JEE Advanced', selections: 110, topRanks: 'AIR 48, 102, 215, 390', avgPercentile: '98.1%' },
      { exam: 'NEET UG', selections: 145, topRanks: 'AIR 61, 118, 175, 290', avgPercentile: '652/720 Avg' },
      { exam: 'JEE Main', selections: 240, topRanks: '99.8%ile (x10)', avgPercentile: '98.6%' },
      { exam: 'Olympiads (INPhO/INChO)', selections: 19, topRanks: '3 Silver Medals', avgPercentile: 'Top 1% Nationally' },
    ],
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-[#F3F0FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-xs font-semibold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#14103A] tracking-tight">
            Hall of Champions.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5B5877] leading-relaxed">
            Every year, ARCH students rewrite rank histories with crystalline concepts, consistent discipline, and unmatched exam temperament.
          </p>
        </div>

        {/* Big Animated Count-Up Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-white p-7 shadow-lg shadow-[#5B3DF5]/5 border border-white"
            >
              <span className="block text-3xl sm:text-4xl font-black text-[#5B3DF5] tracking-tight mb-1">
                {item.value}
              </span>
              <span className="block text-sm font-bold text-[#14103A] mb-1">
                {item.label}
              </span>
              <span className="block text-xs text-[#5B5877]">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Toppers Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14103A]">
                Recent All-India Rankers
              </h2>
              <p className="text-xs sm:text-sm text-[#5B5877] mt-1">
                Real students, authentic ranks, all classroom batch alumni.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.toppers.map((topper, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl overflow-hidden bg-white p-3 shadow-md hover:shadow-xl hover:border-[#5B3DF5]/30 border border-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-[#EEEAFF]">
                    <img
                      src={topper.image}
                      alt={topper.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#5B3DF5] text-white text-xs font-black shadow-md">
                      {topper.rank}
                    </div>
                  </div>

                  <div className="p-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-[10px] font-bold uppercase tracking-wide mb-1.5">
                      {topper.exam}
                    </span>
                    <h3 className="text-lg font-bold text-[#14103A]">{topper.name}</h3>
                    <p className="text-xs text-[#5B5877] mb-3">{topper.course}</p>
                    <p className="text-xs text-[#14103A]/80 italic line-clamp-3">
                      "{topper.quote}"
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-3 pt-2 border-t border-[#F3F0FF] flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Classroom Alum</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Year-Wise Results Table */}
        <div className="rounded-[32px] bg-white p-8 sm:p-12 shadow-xl shadow-[#5B3DF5]/5 border border-white mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#14103A]">
                Year-on-Year Performance Audit
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5877] mt-1">
                Audited selection counts and top ranks across consecutive batches.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#F3F0FF] p-1.5 rounded-full">
              {['2026', '2025', '2024'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setActiveYear(yr)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeYear === yr
                      ? 'bg-[#5B3DF5] text-white shadow-sm'
                      : 'text-[#5B5877] hover:text-[#14103A]'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#E4DDFF] text-xs font-bold uppercase text-[#5B5877] tracking-wider">
                  <th className="pb-4">Competitive Exam</th>
                  <th className="pb-4">Total Selections</th>
                  <th className="pb-4">Key Ranks</th>
                  <th className="pb-4">Cohort Metric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F0FF]">
                {yearWiseData[activeYear].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F3F0FF]/50 transition-colors">
                    <td className="py-4 font-bold text-[#14103A]">{row.exam}</td>
                    <td className="py-4 font-mono font-bold text-[#5B3DF5]">{row.selections} Students</td>
                    <td className="py-4 text-xs font-semibold text-[#14103A]">{row.topRanks}</td>
                    <td className="py-4 text-xs text-[#5B5877]">{row.avgPercentile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialSlider />

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenEnroll()}
            className="px-8 py-3.5 rounded-full bg-[#5B3DF5] text-white font-semibold text-sm hover:bg-[#4A2FE0] transition-all shadow-xl shadow-[#5B3DF5]/25 cursor-pointer"
          >
            Become Our Next Success Story — Enroll Now
          </button>
        </div>

      </div>
    </div>
  );
}
