import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';
import { Award, Users, LineChart, Sparkles } from 'lucide-react';

const icons = {
  Award: Award,
  Users: Users,
  LineChart: LineChart,
  Sparkles: Sparkles,
};

export default function WhyChooseArch() {
  const { whyChooseArch } = siteContent;
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="relative py-24 md:py-32 bg-[#F3F0FF] border-t border-[#5B3DF5]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{whyChooseArch.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14103A] tracking-tight">
            {whyChooseArch.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5B5877] font-normal leading-relaxed">
            {whyChooseArch.subheading}
          </p>
        </div>

        {/* 4 Pillars Grid with Interactive Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseArch.pillars.map((pillar, idx) => {
            const IconComponent = icons[pillar.icon] || Sparkles;
            const isSelected = activePillar === idx;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActivePillar(idx)}
                className={`cursor-pointer rounded-[28px] p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white shadow-xl shadow-[#5B3DF5]/15 border-2 border-[#5B3DF5] -translate-y-2'
                    : 'bg-white/70 hover:bg-white shadow-md border border-white hover:border-[#5B3DF5]/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-[#5B3DF5]/60">
                      {pillar.number}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#5B3DF5] text-white'
                          : 'bg-[#E4DDFF] text-[#5B3DF5]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#14103A] tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#5B5877] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F3F0FF] flex items-center gap-1.5 text-xs font-semibold text-[#5B3DF5]">
                  <span>Proven standard</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B3DF5]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
