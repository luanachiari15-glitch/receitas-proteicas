import { Check, Sparkles } from 'lucide-react';
import { OfferConfig } from '../types/offer';

interface Props {
  config: OfferConfig;
  onCtaClick?: () => void;
}

export const PricingSection: React.FC<Props> = ({ config }) => {
  return (
    <section id="checkout" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-300/60 bg-[#f4efe5]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-100 px-3 py-1 rounded-full">
          OPORTUNIDADE ÚNICA
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1c1917] tracking-tight uppercase mt-3 mb-2 leading-tight">
          GARANTA A SUA OFERTA
        </h2>

        <p className="text-xs sm:text-sm text-stone-600 mb-10">
          Comece hoje mesmo a comer bem, bater sua meta de proteína e gastar pouco
        </p>

        {/* Main Pricing Box */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-600 text-center relative max-w-3xl mx-auto">
          {/* Top Green Banner */}
          <div className="bg-emerald-600 text-white font-black text-xs sm:text-sm py-3 px-6 uppercase tracking-wider flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{config.offerBadge}</span>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Bundle Mockup on Desktop */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-[280px] mx-auto mb-3">
                  <img
                    src="/assets/aistudio/Mockup_de_Receitas_Proteicas_Econ_micas_2c2965a0.png"
                    alt="Pacote Completo 150 Receitas Proteicas de Pobre Premium"
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block bg-amber-100 text-amber-900 font-bold text-[11px] px-3 py-1 rounded-full uppercase">
                    Acesso Imediato no E-mail
                  </span>
                </div>
              </div>

              {/* Right Column: Title, Checklist, Price & CTA */}
              <div className="md:col-span-7 text-left space-y-5">
                <div>
                  <h3 className="font-black text-lg sm:text-xl text-stone-900 tracking-tight uppercase leading-tight">
                    {config.offerTitle}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Livro Digital Oficial + Atualizações + 2 Bônus
                  </p>
                </div>

                {/* Features Checkmarks List */}
                <div className="space-y-2.5 bg-stone-50 p-4 rounded-2xl border border-stone-200/80 text-xs sm:text-[13px]">
                  {config.offerFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center mt-0.5 shadow-2xs">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span className="text-stone-700 font-semibold leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price Container */}
                <div className="pt-2">
                  <p className="text-xs text-stone-500 mb-1">
                    De <span className="line-through font-semibold text-stone-400">R$ {config.priceOriginal}</span> • {config.installmentsText}
                  </p>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-700 tracking-tight flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold">R$</span>
                    <span>{config.pricePromotional}</span>
                    <span className="text-xs font-bold text-stone-500 uppercase">à vista</span>
                  </div>
                </div>

                {/* Large CTA Button */}
                <div>
                  <a
                    href={config.checkoutUrl || "https://pay.cakto.com.br/ok5vtcu_1299020"}
                    className="w-full py-4 px-6 rounded-xl font-black text-base sm:text-lg tracking-wide uppercase transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-xl hover:shadow-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 border-b-4 border-amber-600 hover:border-amber-500 text-center animate-pulse-subtle block"
                  >
                    {config.offerCtaText}
                  </a>

                  {/* Payment Methods and Security Badges Image */}
                  <div className="mt-4 flex justify-center">
                    <img
                      src="/assets/aistudio/metodos-pagamento-seguranca_9916f763.svg"
                      alt="Formas de Pagamento e Compra Segura"
                      className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-contain opacity-90"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
