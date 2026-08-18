import React from 'react';
import { Globe } from 'lucide-react';
import { remittanceContent, text, type Language } from './remittanceContent';

interface ForNepaleseAbroadProps {
  language: Language;
}

export const ForNepaleseAbroad: React.FC<ForNepaleseAbroadProps> = ({ language }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#1B4D3E] flex items-center justify-center">
          <Globe className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">
          {text(language, remittanceContent.forNepaleseAbroad.title)}
        </h2>
      </div>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
        {text(language, remittanceContent.forNepaleseAbroad.description)}
      </p>
    </div>
  );
};
