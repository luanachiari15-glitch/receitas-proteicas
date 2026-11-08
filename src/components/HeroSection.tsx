import React from 'react';
import { ShieldCheck, Zap, Lock, CheckCircle2 } from 'lucide-react';
import { OfferConfig } from '../types/offer';

interface Props {
  config: OfferConfig;
  onCtaClick: () => void;
}

export const HeroSection: React.FC<Props> = ({ config, onCtaClick }) => {
  return (
    <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-center lg:text-left">
          
          {/* Left Column / Copy & Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Headline */}
            <h1 className="font-extrabold tracking-tight text-3xl sm:text-5xl md:text-5xl lg:text-[3.25rem] text-[#1c1917] leading-[1.12] uppercase">
              RECEITAS PROTEICAS <br className="hidden sm:inline" />
              DE{' '}
              <span className="text-[#b87900] font-black tracking-tight uppercase">
                POBRE PREMIUM
              </span>
            </h1>

            {/* Subtitles */}
            <div className="space-y-2 text-stone-700 max-w-xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                {config.headlineSubtitle}
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {config.headlineDescription}
              </p>
            </div>

            {/* Mobile / Tablet Mockup Preview (shown here only on screens < lg) */}
            <div className="lg:hidden my-6 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
                <img
                  src="/assets/aistudio/Mockup_de_Receitas_Proteicas_Econ_micas_2c2965a0.png"
                  alt="Mockup Receitas Proteicas de Pobre Premium"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 pb-1 text-left max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm font-semibold text-stone-800">
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-stone-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Calorias e macros exatos calculados</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-stone-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custo médio por porção</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-stone-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ingredientes do mercadinho da esquina</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-stone-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>2 Bônus Inclusos Hoje Sem Pagar a Mais</span>
              </div>
            </div>

            {/* Primary Hero CTA Button */}
            <div className="pt-2 max-w-md mx-auto lg:mx-0">
              <button
                onClick={onCtaClick}
                className="w-full py-4 px-6 rounded-xl font-black text-base sm:text-lg tracking-wide uppercase transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-xl hover:shadow-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 border-b-4 border-amber-600 hover:border-amber-500 hover:-translate-y-0.5 text-center"
              >
                {config.ctaTextHero}
              </button>

              {/* Trust markers */}
              <div className="mt-3.5 flex items-center justify-center lg:justify-start gap-3 text-xs text-stone-600 font-medium">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Acesso imediato
                </span>
                <span className="text-stone-300">•</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  Pagamento único
                </span>
                <span className="text-stone-300">•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  7 dias de garantia
                </span>
              </div>
            </div>
          </div>

          {/* Right Column / Desktop Transparent PNG Mockup */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <div className="relative w-full max-w-[460px] group">
              {/* Subtle ambient backdrop radial highlight */}
              <div className="absolute inset-0 bg-radial from-amber-200/40 via-emerald-100/20 to-transparent blur-3xl -z-10 transform scale-90" />
              <img
                src="/assets/aistudio/Mockup_de_Receitas_Proteicas_Econ_micas_2c2965a0.png"
                alt="Mockup Receitas Proteicas de Pobre Premium"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={onCtaClick}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
