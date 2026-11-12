import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqAccordion() {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#EEEAFF]/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14103A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#5B5877] max-w-xl mx-auto">
            Everything you need to know about our admissions, batch sizes, methodology and scholarship tests.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl sm:rounded-3xl bg-white border border-white shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left text-base sm:text-lg font-bold text-[#14103A] hover:text-[#5B3DF5] transition-colors cursor-pointer gap-4"
                >
                  <span>{item.q}</span>
                  <div
                    className={`w-9 h-9 rounded-full bg-[#F3F0FF] text-[#5B3DF5] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#5B3DF5] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-7 sm:px-7 text-sm sm:text-base text-[#5B5877] leading-relaxed border-t border-[#F3F0FF] pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
