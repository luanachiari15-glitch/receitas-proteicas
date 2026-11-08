import React from 'react';
import { Check } from 'lucide-react';

interface Props {
  points: string[];
  onCtaClick: () => void;
}

export const TargetAudienceSection: React.FC<Props> = ({ points, onCtaClick }) => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-300/60 bg-[#f6f2e8]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1c1917] tracking-tight uppercase mb-8 leading-tight">
          ESTE MATERIAL É PARA VOCÊ SE...
        </h2>

        {/* Responsive Grid on desktop: 2 columns for points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-10">
          {points.map((point, index) => (
            <div
              key={index}
              className={`bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-2xs flex items-start gap-3.5 hover:shadow-md transition-shadow ${
                index === points.length - 1 ? 'md:col-span-2 md:max-w-xl md:mx-auto md:w-full' : ''
              }`}
            >
              <span className="shrink-0 w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center">
                {index + 1}
              </span>
              <p className="text-xs sm:text-sm text-stone-700 font-semibold leading-relaxed pt-0.5">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <button
            onClick={onCtaClick}
            className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base tracking-wide uppercase transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-xl bg-amber-400 hover:bg-amber-300 text-stone-950 border-b-4 border-amber-600 hover:border-amber-500"
          >
            QUERO AS 150 RECEITAS PREMIUM!
          </button>
        </div>
      </div>
    </section>
  );
};
