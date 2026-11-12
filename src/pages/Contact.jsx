import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: 'Class 11',
    course: 'JEE Preparation',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10)
      errs.phone = 'Valid 10-digit mobile number required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Valid email is required';
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
    setSent(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#5B3DF5', '#A390FF', '#E4DDFF'],
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-[#F3F0FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4DDFF] text-[#5B3DF5] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#14103A] tracking-tight">
            Begin Your Journey at ARCH.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5B5877] leading-relaxed">
            Have questions about our syllabus, hostel facilities, batch timings or scholarship tests? Our counseling wing is available 7 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 rounded-[32px] bg-white p-8 sm:p-12 shadow-xl shadow-[#5B3DF5]/5 border border-white">
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#14103A]">
                    Book a Free Counseling & Demo Session
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B5877] mt-1">
                    Receive 2 complimentary days of live classroom access and a free diagnostic rank assessment.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#14103A] mb-1.5">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Priyanshu Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.name ? 'border-red-400 bg-red-50/50' : 'border-[#E4DDFF] bg-[#F3F0FF]/40'
                    } text-sm focus:outline-none focus:border-[#5B3DF5] focus:bg-white transition-all`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14103A] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        errors.phone ? 'border-red-400 bg-red-50/50' : 'border-[#E4DDFF] bg-[#F3F0FF]/40'
                      } text-sm focus:outline-none focus:border-[#5B3DF5] focus:bg-white transition-all`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14103A] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        errors.email ? 'border-red-400 bg-red-50/50' : 'border-[#E4DDFF] bg-[#F3F0FF]/40'
                      } text-sm focus:outline-none focus:border-[#5B3DF5] focus:bg-white transition-all`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14103A] mb-1.5">
                      Current Grade
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E4DDFF] bg-[#F3F0FF]/40 text-sm focus:outline-none focus:border-[#5B3DF5] focus:bg-white cursor-pointer"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#14103A] mb-1.5">
                      Interested Stream
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E4DDFF] bg-[#F3F0FF]/40 text-sm focus:outline-none focus:border-[#5B3DF5] focus:bg-white cursor-pointer"
                    >
                      <option>JEE Preparation</option>
                      <option>NEET Coaching</option>
                      <option>Foundation Courses</option>
                      <option>Boards / Olympiads</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#14103A] mb-1.5">
                    Questions or Specific Goals (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your target exams, current challenges, or preferred visit dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#E4DDFF] bg-[#F3F0FF]/40 text-sm focus:outline-none focus:border-[#5B3DF5] focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#5B3DF5] text-white font-semibold text-sm hover:bg-[#4A2FE0] transition-all shadow-lg shadow-[#5B3DF5]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Submit Inquiry & Reserve Free Demo Pass</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#E4DDFF] text-[#5B3DF5] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#14103A]">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-[#5B5877] mt-2 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been routed to our Senior Academic Counselor for <strong className="text-[#5B3DF5]">{formData.course}</strong>. We will contact you at <strong>{formData.phone}</strong> today.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-6 py-2 rounded-full bg-[#5B3DF5] text-white text-xs font-semibold hover:bg-[#4A2FE0]"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Campus Address, Class Timings & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Info Card */}
            <div className="rounded-[32px] bg-white p-7 sm:p-8 shadow-xl shadow-[#5B3DF5]/5 border border-white">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#E4DDFF] text-[#5B3DF5] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#14103A]">Visit Campus</h4>
                  <span className="text-xs text-emerald-600 font-semibold">Campus Open for Tours</span>
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-[#5B5877]">
                <p className="text-[#14103A] font-medium leading-relaxed">
                  {siteContent.infoCards.visitCampus.address}
                </p>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#5B3DF5]" />
                  <a href={`tel:${siteContent.infoCards.visitCampus.phone}`} className="font-semibold text-[#14103A] hover:text-[#5B3DF5]">
                    {siteContent.infoCards.visitCampus.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#5B3DF5]" />
                  <a href={`mailto:${siteContent.infoCards.visitCampus.email}`} className="font-semibold text-[#14103A] hover:text-[#5B3DF5]">
                    {siteContent.infoCards.visitCampus.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="rounded-[32px] bg-white p-7 sm:p-8 shadow-xl shadow-[#5B3DF5]/5 border border-white">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#E4DDFF] text-[#5B3DF5] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#14103A]">Class & Office Timings</h4>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                {siteContent.infoCards.classTimings.schedules.map((s, i) => (
                  <div key={i} className="flex justify-between py-1.5 border-b border-[#F3F0FF] last:border-0">
                    <span className="text-[#5B5877] font-medium">{s.days}</span>
                    <span className="font-bold text-[#14103A]">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized Modern Interactive Map Placeholder */}
            <div className="rounded-[32px] overflow-hidden bg-white p-3 shadow-xl shadow-[#5B3DF5]/5 border border-white">
              <div className="relative h-48 rounded-[24px] bg-[#EEEAFF] overflow-hidden flex flex-col items-center justify-center text-center p-4">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#5B3DF5 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />
                
                <div className="w-12 h-12 rounded-full bg-[#5B3DF5] text-white flex items-center justify-center shadow-lg shadow-[#5B3DF5]/30 mb-2 z-10 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-[#14103A] text-sm z-10">ARCH Flagship Academic Center</h5>
                <p className="text-xs text-[#5B5877] z-10 mt-0.5">21 Future Avenue, Metro Station Gate 3 (200m)</p>
                <span className="mt-2 text-[11px] font-semibold text-[#5B3DF5] bg-white/80 px-3 py-1 rounded-full z-10 shadow-sm">
                  Valet Parking & Metro Access Available
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
