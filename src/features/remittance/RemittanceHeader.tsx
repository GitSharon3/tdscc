import React from 'react';
import remittanceImage from '../../assets/images/remittance.jpeg';
import { remittanceContent, text, type Language } from './remittanceContent';

interface RemittanceHeaderProps {
  language: Language;
}

export const RemittanceHeader: React.FC<RemittanceHeaderProps> = ({ language }) => {
  return (
    <div className="bg-[#1B4D3E] text-white rounded-2xl overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <span className="text-xs font-bold bg-[#D4AF37] text-slate-950 px-3 py-1 rounded-full uppercase w-fit">
            {text(language, remittanceContent.header.eyebrow)}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-4 leading-tight">
            {text(language, remittanceContent.header.title)}
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 mt-4 leading-relaxed">
            {text(language, remittanceContent.header.description)}
          </p>
        </div>
        <div className="relative min-h-[200px] lg:min-h-[300px]">
          <img
            src={remittanceImage}
            alt="Remittance Service"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4D3E] to-transparent lg:hidden" />
        </div>
      </div>
    </div>
  );
};
