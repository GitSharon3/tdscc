import React from 'react';
import { remittanceContent, text, type Language } from './remittanceContent';

interface IntroductionSectionProps {
  language: Language;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ language }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        {text(language, remittanceContent.introduction.title)}
      </h2>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
        {text(language, remittanceContent.introduction.description)}
      </p>
    </div>
  );
};
