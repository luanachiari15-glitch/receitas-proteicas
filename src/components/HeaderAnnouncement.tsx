import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';

export const HeaderAnnouncement: React.FC = () => {
  // 17 minutes = 17 * 60 = 1020 seconds
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('receitas_timer_17m');
      if (saved) {
        const remaining = parseInt(saved, 10);
        if (!isNaN(remaining) && remaining > 0 && remaining <= 1020) {
          return remaining;
        }
      }
    } catch {
      // ignore
    }
    return 1020;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev > 0 ? prev - 1 : 1020; // loop back to 17m if ends
        try {
          localStorage.setItem('receitas_timer_17m', next.toString());
        } catch {
          // ignore
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <aside
      aria-label="Aviso da oferta"
      className="bg-[#d31212] text-white py-2.5 px-4 text-center font-extrabold tracking-wide shadow-md sticky top-0 z-50 border-b border-red-800"
    >
      <div className="max-w-xl mx-auto flex items-center justify-center gap-2.5 text-xs sm:text-sm">
        <span className="uppercase tracking-wider font-black flex items-center gap-1.5">
          <Flame className="w-4 h-4 fill-amber-300 text-amber-300 animate-pulse" />
          OFERTA RELÂMPAGO
        </span>
        <span className="text-white/60 font-normal">•</span>
        <span className="font-mono tabular-nums bg-black/35 text-amber-200 px-2.5 py-0.5 rounded-md font-black text-sm sm:text-base tracking-wider border border-white/20 shadow-inner">
          {formattedTime}
        </span>
      </div>
    </aside>
  );
};
