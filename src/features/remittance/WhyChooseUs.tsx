import React from 'react';
import { remittanceContent, text, whyChooseUsIcons, type Language } from './remittanceContent';

interface WhyChooseUsProps {
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        {text(language, remittanceContent.whyChooseUs.title)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {remittanceContent.whyChooseUs.items.map((item, index) => {
          const Icon = whyChooseUsIcons[item.icon as keyof typeof whyChooseUsIcons];
          return (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#1B4D3E] flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {text(language, item.title)}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {text(language, item.description)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
