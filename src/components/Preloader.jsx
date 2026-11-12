import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(() => {
    // Check if user already saw it in this session to make reloads instant
    try {
      return sessionStorage.getItem('arch_preloaded') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDone) {
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          try {
            sessionStorage.setItem('arch_preloaded', 'true');
          } catch {}
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 150);
          return 100;
        }
        return prev + 10;
      });
    }, 25);

    // Safety timeout: ensure it definitely dismisses within 900ms under any circumstance
    const safetyTimer = setTimeout(() => {
      clearInterval(interval);
      setIsDone(true);
      if (onComplete) onComplete();
    }, 900);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, [isDone, onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F3F0FF] pointer-events-auto"
        >
          {/* Ambient blurred glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#5B3DF5]/15 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col items-center"
          >
            {/* ARCH Wordmark */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#5B3DF5]">
                ARCH
              </span>
              <span className="w-2 h-2 rounded-full bg-[#5B3DF5] mb-4 animate-ping" />
            </div>

            <p className="text-[11px] uppercase tracking-widest text-[#5B5877] font-semibold mb-5">
              Future Focused Learning
            </p>

            {/* Progress Bar Container */}
            <div className="w-44 h-1 bg-[#E4DDFF] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#5B3DF5] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
