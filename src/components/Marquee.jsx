import React from 'react';
import { siteContent } from '../data/content';
import { Sparkles } from 'lucide-react';

export default function Marquee() {
  const items = siteContent.marquee;

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-[#5B3DF5]/10 bg-white/40 backdrop-blur-sm select-none">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4 whitespace-nowrap">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#14103A]/80">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#5B3DF5] fill-[#5B3DF5]/20" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
