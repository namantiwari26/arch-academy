import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import { siteContent } from '../data/content';
import { ArrowRight } from 'lucide-react';
import InfoCards from './InfoCards';

export default function FeatureBanner({ onOpenEnroll }) {
  const { featureBanner } = siteContent;

  return (
    <section className="relative pt-16 md:pt-24 pb-28 md:pb-36 bg-[#F3F0FF] overflow-hidden">
      
      {/* Full-width Photo Card Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl shadow-[#5B3DF5]/15 border border-white min-h-[480px] sm:min-h-[540px] flex items-center">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={images.feature.studentHeadphones}
              alt="Student with headphones engaged in deep learning"
              className="w-full h-full object-cover object-[30%_center] sm:object-center"
            />
            {/* Lavender tint gradient overlay specifically emphasizing readability on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3F0FF]/80 via-45% to-[#F3F0FF] sm:to-[#F3F0FF]/95" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F3F0FF]/60 via-transparent to-transparent md:hidden" />
          </div>

          {/* Frosted Text Panel on the Right */}
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 p-6 sm:p-12 lg:p-16">
            <div className="md:col-start-6 lg:col-start-7 md:col-span-7 lg:col-span-6 flex flex-col items-start bg-white/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 sm:p-0 rounded-3xl">
              
              {/* Chip */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-white text-xs font-semibold text-[#14103A] mb-4 shadow-sm"
              >
                <span>{featureBanner.chip}</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl font-black text-[#14103A] tracking-tight leading-[1.12]"
              >
                {featureBanner.headingPart1}
                <br />
                <span className="text-[#5B3DF5]">{featureBanner.headingHighlight}</span>{' '}
                {featureBanner.headingPart2}
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-sm sm:text-base text-[#5B5877] font-normal leading-relaxed max-w-md"
              >
                {featureBanner.description}
              </motion.p>

              {/* Join ARCH Button */}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={() => onOpenEnroll()}
                className="mt-6 px-7 py-3 rounded-full bg-[#5B3DF5] text-white font-semibold text-xs sm:text-sm tracking-wide hover:bg-[#4A2FE0] transition-all duration-300 shadow-xl shadow-[#5B3DF5]/30 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 group"
              >
                <span>{featureBanner.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>

        </div>

        {/* Overlapping Info Cards at Bottom */}
        <div className="relative -mt-10 sm:-mt-14 z-20">
          <InfoCards onOpenEnroll={onOpenEnroll} />
        </div>

      </div>
    </section>
  );
}
