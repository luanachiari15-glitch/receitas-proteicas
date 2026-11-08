import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { OfferConfig } from '../types/offer';

interface Props {
  config: OfferConfig;
}

export const ProblemSection: React.FC<Props> = ({ config }) => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-300/60 bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            {/* Headline with CARO E CHATO in bold red */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1c1917] tracking-tight uppercase leading-[1.12]">
              BATER A META DE PROTEÍNA FICOU <br className="hidden sm:inline" />
              <span className="text-[#dc2626] inline-block font-black tracking-tight">
                CARO E CHATO
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {config.problemParagraph1}
            </p>

            {/* Red Callout Box with Solid Red Icon */}
            <div className="bg-red-50 border-2 border-red-200/90 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs text-left">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <AlertTriangle className="w-5 h-5 stroke-[2.5]" />
              </div>
              <p className="font-extrabold text-red-950 text-sm sm:text-base leading-snug">
                {config.problemHighlight}
              </p>
            </div>

            {/* Solution Card with Green Check Icon */}
            <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-4 flex items-center gap-3 text-left shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <p className="font-bold text-emerald-950 text-xs sm:text-sm leading-snug">
                {config.problemSolution}
              </p>
            </div>
          </div>

          {/* Comparison Image Column with User's Uploaded Antes e Depois */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-2 border-stone-200 bg-white group hover:shadow-3xl transition-all duration-300">
              <img
                src="/assets/aistudio/antes_depois_optimized.webp"
                alt="Antes e Depois - Transformação Saborosa e Econômica"
                className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={600}
                height={600}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
