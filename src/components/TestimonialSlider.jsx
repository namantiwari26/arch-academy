import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../data/content';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialSlider() {
  const { testimonials } = siteContent;
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#F3F0FF] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 text-amber-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14103A] tracking-tight">
            Voices of Trust & Achievement
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5B5877]">
            Real feedback from students and families who experienced the ARCH transformation.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative rounded-[32px] bg-white p-8 sm:p-14 shadow-xl shadow-[#5B3DF5]/10 border border-white">
          <div className="absolute top-8 right-8 text-[#E4DDFF]">
            <Quote className="w-16 h-16 opacity-50" />
          </div>

          <div className="relative z-10 min-h-[160px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-lg sm:text-2xl font-medium text-[#14103A] leading-relaxed italic mb-8">
                  "{testimonials[current].content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E4DDFF] text-[#5B3DF5] font-bold flex items-center justify-center text-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#14103A]">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5B5877]">
                      {testimonials[current].relation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 pt-6 border-t border-[#F3F0FF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current ? 'w-8 bg-[#5B3DF5]' : 'w-2 bg-[#E4DDFF]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="p-2.5 rounded-full bg-[#F3F0FF] text-[#14103A] hover:bg-[#5B3DF5] hover:text-white transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-full bg-[#F3F0FF] text-[#14103A] hover:bg-[#5B3DF5] hover:text-white transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
