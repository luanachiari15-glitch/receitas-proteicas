import React from 'react';
import { BonusItem } from '../types/offer';

interface Props {
  bonuses: BonusItem[];
}

export const BonusesSection: React.FC<Props> = ({ bonuses }) => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-300/60 bg-[#faf8f4]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1c1917] tracking-tight uppercase mb-2 leading-tight">
          COMPRANDO HOJE VOCÊ LEVA 2 BÔNUS
        </h2>

        <p className="text-xs sm:text-sm text-stone-600 mb-10 max-w-xl mx-auto">
          Entram junto com as 150 receitas, no mesmo acesso, sem pagar nada a mais.
        </p>

        {/* Responsive 2 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-stone-200/90 flex flex-col justify-between hover:shadow-xl transition-shadow text-center relative overflow-hidden"
            >
              {/* Bonus Image / Mockup */}
              <div className="max-w-[220px] mx-auto mb-3 overflow-hidden rounded-xl">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 mx-auto"
                  loading="lazy"
                />
              </div>

              {/* Bonus Title & Description */}
              <div className="space-y-2 mt-2 mb-6">
                <h3 className="font-extrabold text-base sm:text-lg text-stone-900">
                  {bonus.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm mx-auto">
                  {bonus.description}
                </p>
              </div>

              {/* Strikethrough & Free Today */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-center gap-3">
                <span className="line-through text-stone-400 font-semibold text-xs sm:text-sm">
                  {bonus.originalPrice}
                </span>
                <span className="font-black text-emerald-700 text-xs sm:text-sm uppercase bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200/80">
                  grátis hoje
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
