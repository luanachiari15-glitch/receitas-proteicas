import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface PurchaseEvent {
  name: string;
  city: string;
  state: string;
  amount: string;
  timeAgo: string;
}

const PURCHASE_LIST: PurchaseEvent[] = [
  { name: 'Lucas Silva', city: 'São Paulo', state: 'SP', amount: 'R$ 29,90', timeAgo: 'agora mesmo' },
  { name: 'Camila Santos', city: 'Belo Horizonte', state: 'MG', amount: 'R$ 29,90', timeAgo: 'há 1 min' },
  { name: 'Rodrigo Oliveira', city: 'Curitiba', state: 'PR', amount: 'R$ 29,90', timeAgo: 'agora mesmo' },
  { name: 'Juliana Souza', city: 'Rio de Janeiro', state: 'RJ', amount: 'R$ 29,90', timeAgo: 'há 2 min' },
  { name: 'Matheus Costa', city: 'Porto Alegre', state: 'RS', amount: 'R$ 29,90', timeAgo: 'agora mesmo' },
  { name: 'Beatriz Lima', city: 'Brasília', state: 'DF', amount: 'R$ 29,90', timeAgo: 'há 1 min' },
  { name: 'Gabriel Ferreira', city: 'Campinas', state: 'SP', amount: 'R$ 29,90', timeAgo: 'agora mesmo' },
  { name: 'Larissa Alves', city: 'Fortaleza', state: 'CE', amount: 'R$ 29,90', timeAgo: 'há 3 min' },
  { name: 'Felipe Rocha', city: 'Salvador', state: 'BA', amount: 'R$ 29,90', timeAgo: 'agora mesmo' },
  { name: 'Mariana Ribeiro', city: 'Goiânia', state: 'GO', amount: 'R$ 29,90', timeAgo: 'há 1 min' },
];

export const PurchaseNotification: React.FC = () => {
  const [currentPurchase, setCurrentPurchase] = useState<PurchaseEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [purchaseIndex, setPurchaseIndex] = useState(0);

  const showNotification = () => {
    setPurchaseIndex((prevIndex) => {
      const nextPurchase = PURCHASE_LIST[prevIndex % PURCHASE_LIST.length];
      setCurrentPurchase(nextPurchase);
      setIsVisible(true);
      return prevIndex + 1;
    });

    // Hide after 5.5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5500);
  };

  useEffect(() => {
    // Initial natural delay before the first notification appears (14s)
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 14000);

    // Medium frequency: recurring every ~1m45s (105,000 ms)
    const interval = setInterval(() => {
      showNotification();
    }, 105000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible || !currentPurchase) return null;

  return (
    <div className="fixed top-12 sm:top-14 right-3 sm:right-6 z-50 max-w-[320px] w-full animate-fade-in transition-all duration-300">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-stone-200/90 flex items-start gap-3 relative hover:shadow-3xl">
        {/* Pix / Check Icon Badge */}
        <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
          <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 pr-4">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-extrabold text-xs text-stone-900 leading-tight">
              {currentPurchase.name}
            </span>
            <span className="text-[10px] text-stone-400">•</span>
            <span className="text-[11px] text-stone-500 font-medium leading-tight">
              {currentPurchase.city}, {currentPurchase.state}
            </span>
          </div>

          <div className="mt-1 flex items-center gap-1.5 text-[11px]">
            <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] border border-emerald-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Pix
            </span>
            <span className="font-extrabold text-stone-800">
              {currentPurchase.amount}
            </span>
            <span className="text-stone-400 text-[10px]">
              ({currentPurchase.timeAgo})
            </span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 text-stone-400 hover:text-stone-700 rounded-lg transition-colors cursor-pointer"
          title="Fechar notificação"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
