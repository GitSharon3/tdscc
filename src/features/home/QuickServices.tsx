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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {quickServices.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveTab(service.tab, service.sub)}
                className="group relative flex min-h-32 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600 hover:shadow-lg sm:min-h-36"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                  {t(language, service.label)}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">{t(language, service.description)}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
