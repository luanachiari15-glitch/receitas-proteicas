import React from 'react';
import { OfferConfig } from '../types/offer';

interface Props {
  config: OfferConfig;
}

export const GuaranteeSection: React.FC<Props> = ({ config }) => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-300/60 bg-[#faf8f4]">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-stone-200/90 text-center">
          {/* 7 Days Guarantee Vector Emblem */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5 relative flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
            >
              {/* Shield Outer */}
              <path
                d="M50 4L88 18V54C88 74 72 90 50 96C28 90 12 74 12 54V18L50 4Z"
                fill="#047857"
                stroke="#10b981"
                strokeWidth="3"
              />
              {/* Shield Inner */}
              <path
                d="M50 11L81 23V53C81 69 68 83 50 89C32 83 19 69 19 53V23L50 11Z"
                fill="#065f46"
              />
              {/* Number 7 */}
              <text
                x="50"
                y="54"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="36"
                fontWeight="900"
                fontFamily="sans-serif"
              >
                7
              </text>
              {/* Text DIAS */}
              <text
                x="50"
                y="71"
                textAnchor="middle"
                fill="#6ee7b7"
                fontSize="11"
                fontWeight="800"
                letterSpacing="1.5"
                fontFamily="sans-serif"
              >
                DIAS
              </text>
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1c1917] tracking-tight uppercase mb-4 leading-snug">
            {config.guaranteeTitle}
          </h2>

          {/* Text */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-lg mx-auto mb-6">
            {config.guaranteeText}
          </p>

          {/* Highlight */}
          <div className="text-xs sm:text-sm font-black text-emerald-800 tracking-wider uppercase border-t border-stone-100 pt-4">
            {config.guaranteeHighlight}
          </div>
        </div>
      </div>
    </section>
  );
};
