import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';
import { MapPin, Phone, Mail, Calendar, Clock, Globe } from 'lucide-react';

export default function InfoCards() {
  const { infoCards } = siteContent;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      
      {/* Visit Campus Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[28px] bg-white/95 backdrop-blur-xl p-7 sm:p-8 shadow-xl shadow-[#5B3DF5]/10 border border-white hover:border-[#5B3DF5]/30 transition-all duration-300"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#E4DDFF] text-[#5B3DF5] flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#14103A] tracking-tight">
            {infoCards.visitCampus.title}
          </h3>
        </div>

        <div className="space-y-4 text-sm text-[#5B5877]">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#5B3DF5] shrink-0 mt-1" />
            <span className="leading-relaxed whitespace-pre-line text-[#14103A]">
              {infoCards.visitCampus.address}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#5B3DF5] shrink-0" />
            <a
              href={`tel:${infoCards.visitCampus.phone}`}
              className="text-[#14103A] font-medium hover:text-[#5B3DF5] transition-colors"
            >
              {infoCards.visitCampus.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#5B3DF5] shrink-0" />
            <a
              href={`mailto:${infoCards.visitCampus.email}`}
              className="text-[#14103A] font-medium hover:text-[#5B3DF5] transition-colors"
            >
              {infoCards.visitCampus.email}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Class Timings Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-[28px] bg-white/95 backdrop-blur-xl p-7 sm:p-8 shadow-xl shadow-[#5B3DF5]/10 border border-white hover:border-[#5B3DF5]/30 transition-all duration-300"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#E4DDFF] text-[#5B3DF5] flex items-center justify-center shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#14103A] tracking-tight">
            {infoCards.classTimings.title}
          </h3>
        </div>

        <div className="space-y-3.5 text-sm">
          {infoCards.classTimings.schedules.map((schedule, i) => (
            <div key={i} className="flex items-center justify-between py-1 border-b border-[#F3F0FF] last:border-0">
              <div className="flex items-center gap-2.5 text-[#5B5877] font-medium">
                <Clock className="w-4 h-4 text-[#5B3DF5]" />
                <span>{schedule.days}</span>
              </div>
              <span className="font-semibold text-[#14103A]">{schedule.time}</span>
            </div>
          ))}

          <div className="pt-2 flex items-center gap-2 text-xs text-[#5B3DF5] font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>Digital Library & Doubt Portal open 24/7 for enrolled students</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
