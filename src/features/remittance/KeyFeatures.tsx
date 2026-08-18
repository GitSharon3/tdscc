import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { remittanceContent, text, type Language } from './remittanceContent';

interface KeyFeaturesProps {
  language: Language;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ language }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        {text(language, remittanceContent.keyFeatures.title)}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {remittanceContent.keyFeatures.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 leading-relaxed">
              {text(language, feature)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
