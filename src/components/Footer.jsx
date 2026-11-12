import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import { ArrowRight, CheckCircle2, Heart } from 'lucide-react';

export default function Footer({ onOpenEnroll }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#14103A] text-white pt-20 pb-12 overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#5B3DF5]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#5B3DF5]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-1.5 text-3xl font-black tracking-tighter text-white mb-4">
              <span>{siteContent.brand.name}</span>
              <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
              Empowering ambitious minds for JEE, NEET, and Olympiad excellence through modern pedagogy, deep concept visualization, and mentorship.
            </p>
            <button
              onClick={() => onOpenEnroll()}
              className="px-6 py-2.5 rounded-full bg-[#5B3DF5] text-white text-xs font-semibold hover:bg-[#4A2FE0] transition-all shadow-md shadow-[#5B3DF5]/30 cursor-pointer"
            >
              Book Campus Tour & Counseling
            </button>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E4DDFF] font-bold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {siteContent.nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E4DDFF] font-bold mb-3">
              ARCH Academic Dispatch
            </h4>
            <p className="text-xs text-white/60 mb-5 leading-relaxed">
              Get weekly JEE/NEET formula cheat sheets, problem breakdowns, and scholarship test alerts directly in your inbox.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#5B3DF5] flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#5B3DF5] text-white text-xs font-semibold hover:bg-[#4A2FE0] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/10 text-emerald-400 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You're subscribed! Check your inbox soon.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} ARCH Academy. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#5B3DF5] fill-[#5B3DF5]" />
            <span>for future achievers</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
