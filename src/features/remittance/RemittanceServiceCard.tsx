import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { remittancePartners, text, type Language } from './remittanceContent';

interface RemittanceServiceCardProps {
  language: Language;
}

export const RemittanceServiceCard: React.FC<RemittanceServiceCardProps> = ({ language }) => {
  const isNe = language === 'ne';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {remittancePartners.map((partner) => {
        const Icon = partner.icon;
        return (
          <div
            key={partner.id}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-emerald-500 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-black text-lg">
                {partner.logo}
              </div>
              <span className="text-xs font-extrabold bg-emerald-50 text-[#1B4D3E] px-3 py-1 rounded-full border border-emerald-200">
                {text(language, partner.type)}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{text(language, partner.name)}</h3>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="text-[#1B4D3E] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {isNe ? 'अधिकृत साझेदार' : 'Authorized Partner'}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
