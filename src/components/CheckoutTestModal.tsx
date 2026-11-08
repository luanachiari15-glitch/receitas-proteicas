import React, { useState } from 'react';
import { X, CheckCircle2, QrCode, CreditCard, Copy, Check, ShieldCheck } from 'lucide-react';
import { OfferConfig } from '../types/offer';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  config: OfferConfig;
}

export const CheckoutTestModal: React.FC<Props> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [tab, setTab] = useState<'pix' | 'cartao'>('pix');
  const [copied, setCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const simulatedPixCode = "00020126580014br.gov.bcb.pix0136receitas-proteicas-pobre-exemplo-520400005303986540529.905802BR5925RECEITAS PROTEICAS5303986";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(simulatedPixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulatePayment = () => {
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm tracking-wide">Checkout 100% Seguro</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar checkout"
            className="p-1 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-black text-lg text-stone-900 uppercase">
                  Pagamento Confirmado!
                </h3>
                <p className="text-xs text-stone-600 mt-1 max-w-xs mx-auto">
                  Acesso ao material e aos 2 bônus enviado para o e-mail informado.
                </p>
              </div>
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-500">Produto:</span>
                  <span className="font-bold text-stone-800">{config.productName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Valor pago:</span>
                  <span className="font-bold text-emerald-700">R$ {config.pricePromotional}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Garantia:</span>
                  <span className="font-bold text-stone-800">{config.guaranteeDays} dias incondicional</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                Voltar à Página
              </button>
            </div>
          ) : (
            <>
              {/* Product summary */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div>
                  <h3 className="font-bold text-sm text-stone-900">
                    {config.productName}
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Acesso Imediato + 2 Bônus Exclusivos
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs line-through text-stone-400 block">
                    R$ {config.priceOriginal}
                  </span>
                  <span className="text-base font-black text-emerald-700">
                    R$ {config.pricePromotional}
                  </span>
                </div>
              </div>

              {/* Payment Tabs */}
              <div className="grid grid-cols-2 gap-2 mt-4 mb-4">
                <button
                  type="button"
                  onClick={() => setTab('pix')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tab === 'pix'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-xs'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-emerald-600" />
                  Pix (Aprovação imediata)
                </button>
                <button
                  type="button"
                  onClick={() => setTab('cartao')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tab === 'cartao'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-xs'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-emerald-600" />
                  Cartão de Crédito
                </button>
              </div>

              {tab === 'pix' ? (
                <div className="space-y-4 text-center">
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 inline-block">
                    {/* Simulated QR Code box */}
                    <div className="w-36 h-36 mx-auto bg-white p-2 border border-stone-300 rounded-lg flex items-center justify-center">
                      <QrCode className="w-32 h-32 text-stone-900" />
                    </div>
                    <span className="text-[10px] text-stone-500 block mt-2">
                      Abra o app do seu banco e escaneie o código
                    </span>
                  </div>

                  <div>
                    <button
                      onClick={handleCopyPix}
                      className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Código Pix Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copiar Código Pix
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={handleSimulatePayment}
                    className="w-full py-2 px-3 text-stone-500 hover:text-stone-800 text-[11px] underline cursor-pointer"
                  >
                    Simular confirmação de pagamento Pix
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-emerald-500 bg-stone-50"
                      defaultValue="4532 1234 5678 9012"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                        Validade
                      </label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-emerald-500 bg-stone-50"
                        defaultValue="12/28"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-emerald-500 bg-stone-50"
                        defaultValue="890"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSimulatePayment}
                    className="w-full mt-2 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs uppercase rounded-xl border-b-2 border-amber-600 shadow-md cursor-pointer"
                  >
                    Pagar R$ {config.pricePromotional} Agora
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
