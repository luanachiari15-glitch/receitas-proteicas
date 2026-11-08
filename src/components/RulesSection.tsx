import React from 'react';
import { Sparkles, DollarSign, Utensils, Flame } from 'lucide-react';
import { OfferConfig } from '../types/offer';

interface Props {
  config: OfferConfig;
}

export const RulesSection: React.FC<Props> = ({ config }) => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-300/60 bg-[#faf8f4]">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-100 px-3 py-1 rounded-full">
          COMO FUNCIONA
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1c1917] tracking-tight uppercase mt-3 mb-10 leading-tight">
          {config.rulesTitle}
        </h2>

        {/* Responsive 3 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Rule 1 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="font-extrabold text-base text-stone-900 mb-2">
                {config.rule1Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {config.rule1Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-bold text-emerald-700 uppercase">
              R$ 1 a R$ 3 por refeição
            </div>
          </div>

          {/* Rule 2 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Utensils className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="font-extrabold text-base text-stone-900 mb-2">
                {config.rule2Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {config.rule2Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-bold text-emerald-700 uppercase">
              Sem açúcar e com textura real
            </div>
          </div>

          {/* Rule 3 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="font-extrabold text-base text-stone-900 mb-2">
                {config.rule3Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {config.rule3Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-bold text-emerald-700 uppercase">
              Pronto em até 15 minutos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
