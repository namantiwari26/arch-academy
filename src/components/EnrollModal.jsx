import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnrollModal({ isOpen, onClose, preselectedCourse = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: 'Class 11',
    course: preselectedCourse || 'JEE Advanced Pinnacle (2-Year)',
    mode: 'Classroom',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.phone.trim() || formData.phone.length < 10)
      errs.phone = 'Valid 10-digit mobile number required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Valid email address required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5B3DF5', '#A390FF', '#E4DDFF', '#FFFFFF'],
      });
    } catch {
      // fallback
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#14103A]/40 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-white/60 z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#5B5877] hover:text-[#14103A] hover:bg-[#F3F0FF] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Admissions Open 2026-27</span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#14103A] tracking-tight">
                  Reserve Your Seat at ARCH
                </h3>
                <p className="text-sm text-[#5B5877] mt-1.5 mb-6">
                  Fill in your details for a guaranteed counseling session with an IIT/AIIMS academic dean.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#14103A] mb-1.5 uppercase tracking-wide">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aryan Malhotra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.name ? 'border-red-400 bg-red-50/50' : 'border-[#E4DDFF] bg-[#F3F0FF]/40'
                      } text-sm focus:outline-none focus:border-[#5B3DF5] focus:bg-white transition-all`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#14103A] mb-1.5 uppercase tracking-wide">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          errors.phone ? 'border-red-400 bg-red-50/50' : 'border-[#E4DDFF] bg-[#F3F0FF]/40'
                        } text-sm focus:outline-none focus:border-[#5B3DF5] focus:bg-white transition-all`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#14103A] mb-1.5 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="student@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          errors.email ? 'border-red-400 bg-red-50/50' : 'border-[#E4DDFF] bg-[#F3F0FF]/40'
                        } text-sm focus:outline-none focus:border-[#5B3DF5] focus:bg-white transition-all`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#14103A] mb-1.5 uppercase tracking-wide">
                        Current Grade
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E4DDFF] bg-[#F3F0FF]/40 text-sm text-[#14103A] focus:outline-none focus:border-[#5B3DF5] focus:bg-white transition-all cursor-pointer"
                      >
                        <option>Class 8</option>
                        <option>Class 9</option>
                        <option>Class 10</option>
                        <option>Class 11</option>
                        <option>Class 12</option>
                        <option>Class 12 Passed (Dropper)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#14103A] mb-1.5 uppercase tracking-wide">
                        Target Track
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E4DDFF] bg-[#F3F0FF]/40 text-sm text-[#14103A] focus:outline-none focus:border-[#5B3DF5] focus:bg-white transition-all cursor-pointer"
                      >
                        <option>JEE Advanced Pinnacle (2-Year)</option>
                        <option>NEET Medical Pioneer (2-Year)</option>
                        <option>JEE Achievers Dropper Batch</option>
                        <option>STEM Foundation (Grades 8-10)</option>
                        <option>Boards & Olympiad Accelerator</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 px-6 rounded-full bg-[#5B3DF5] text-white font-semibold text-sm hover:bg-[#4A2FE0] transition-all duration-300 shadow-lg shadow-[#5B3DF5]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Submit & Book Free Demo Class</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-16 h-16 rounded-full bg-[#E4DDFF] text-[#5B3DF5] flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-black text-[#14103A] tracking-tight">
                  Application Submitted!
                </h3>
                <p className="text-sm text-[#5B5877] mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#14103A]">{formData.name}</strong>! Your demo pass for{' '}
                  <strong className="text-[#5B3DF5]">{formData.course}</strong> has been created. Our academic counselor will call you at{' '}
                  <span className="font-semibold text-[#14103A]">{formData.phone}</span> within 2 hours.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-[#F3F0FF] border border-[#E4DDFF] text-left text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#5B5877]">Pass ID:</span>
                    <span className="font-mono font-bold text-[#5B3DF5]">ARCH-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B5877]">Campus Visit:</span>
                    <span className="font-semibold text-[#14103A]">21 Future Avenue, Innovation District</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B5877]">Status:</span>
                    <span className="font-semibold text-emerald-600">Counseling Confirmed</span>
                  </div>
                </div>

                <button
                  onClick={resetAndClose}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#5B3DF5] text-white font-semibold text-xs hover:bg-[#4A2FE0] transition-all cursor-pointer"
                >
                  Close & Continue Browsing
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
