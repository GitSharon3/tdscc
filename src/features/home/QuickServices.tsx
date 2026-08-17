import React from 'react';
import { type Language, quickServices, t } from './homeContent';

interface QuickServicesProps {
  language: Language;
  setActiveTab: (tab: string, sub?: string) => void;
}

export const QuickServices: React.FC<QuickServicesProps> = ({ language, setActiveTab }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-6 lg:gap-5 [&::-webkit-scrollbar]:hidden">
          {quickServices.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveTab(service.tab, service.sub)}
                className="group relative flex min-h-[180px] w-[220px] shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600 hover:shadow-xl sm:w-auto sm:min-h-[210px] lg:min-h-[230px]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 text-sm font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700 sm:text-base lg:text-lg">
                  {t(language, service.label)}
                </h3>
                <p className="mt-2 text-[11px] leading-5 text-slate-600 sm:text-xs lg:text-sm">
                  {t(language, service.description)}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
