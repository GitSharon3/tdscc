import React from 'react';
import { type Language } from './homeContent';

interface HomeStatsProps {
  language: Language;
}

export const HomeStats: React.FC<HomeStatsProps> = ({ language }) => {
  const isNe = language === 'ne';

  const stats = [
    { value: isNe ? '५,०००+' : '5,000+', label: isNe ? 'सक्रिय सदस्यहरू' : 'Active Members' },
    { value: isNe ? '५० करोड+' : '50 Cr+', label: isNe ? 'कुल निक्षेप' : 'Total Deposits' },
    { value: isNe ? '४५ करोड+' : '45 Cr+', label: isNe ? 'कर्जा लगानी' : 'Loan Investment' },
    { value: '100%', label: isNe ? 'पारदर्शी सेवा' : 'Transparent Service' },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-28 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 px-3 py-6 text-center shadow-md transition-transform hover:scale-105 hover:shadow-lg sm:min-h-32 sm:px-4 sm:py-8"
            >
              <div className="text-2xl font-bold leading-none text-amber-400 sm:text-3xl lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-semibold leading-4 text-emerald-50 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
