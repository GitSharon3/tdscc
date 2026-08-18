import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { remittanceContent, text, type Language } from './remittanceContent';

interface CommitmentSectionProps {
  language: Language;
}

export const CommitmentSection: React.FC<CommitmentSectionProps> = ({ language }) => {
  return (
    <div className="bg-[#1B4D3E] text-white rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <HeartHandshake className="w-8 h-8 text-[#D4AF37]" />
        <h2 className="text-xl font-bold">
          {text(language, remittanceContent.commitment.title)}
        </h2>
      </div>
      <p className="text-sm sm:text-base text-emerald-100 leading-relaxed mb-6">
        {text(language, remittanceContent.commitment.description)}
      </p>
      <div className="bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20">
        <p className="text-sm sm:text-base text-white leading-relaxed italic">
          {text(language, remittanceContent.commitment.closing)}
        </p>
      </div>
    </div>
  );
};
