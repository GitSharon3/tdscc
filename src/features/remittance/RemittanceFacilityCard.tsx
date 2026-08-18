import React from 'react';
import { remittanceFacilities, iconMap, text, type Language } from './remittanceContent';

interface RemittanceFacilityCardProps {
  language: Language;
}

export const RemittanceFacilityCard: React.FC<RemittanceFacilityCardProps> = ({ language }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {remittanceFacilities.map((facility) => {
        const Icon = iconMap[facility.iconName as keyof typeof iconMap];
        return (
          <div
            key={facility.id}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-emerald-500 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#1B4D3E] flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{text(language, facility.title)}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-6">{text(language, facility.description)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
