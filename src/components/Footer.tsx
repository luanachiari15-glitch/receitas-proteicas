import React from 'react';
import { OfferConfig } from '../types/offer';

interface Props {
  config: OfferConfig;
}

export const Footer: React.FC<Props> = ({ config }) => {
  return (
    <footer className="bg-[#111111] text-stone-400 py-10 px-4 sm:px-6 lg:px-8 text-center border-t border-stone-800">
      <div className="max-w-4xl mx-auto space-y-3">
        <h4 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider">
          {config.productName}
        </h4>

        <p className="text-xs text-stone-400">
          {config.footerCopyright}
        </p>

        <p className="text-[11px] text-stone-500 leading-relaxed border-t border-stone-800 pt-4 max-w-2xl mx-auto">
          {config.footerDisclaimer}
        </p>
      </div>
    </footer>
  );
};
