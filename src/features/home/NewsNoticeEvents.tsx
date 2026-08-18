import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { type Language, t, updateItems } from './homeContent';

interface NewsNoticeEventsProps {
  language: Language;
  setActiveTab: (tab: string, sub?: string) => void;
}

const filterTabs = [
  { id: 'all', label: { en: 'All', ne: 'सबै' } },
  { id: 'Notice', label: { en: 'Notice', ne: 'सूचना' } },
  { id: 'News', label: { en: 'News', ne: 'समाचार' } },
  { id: 'Event', label: { en: 'Events', ne: 'कार्यक्रम' } },
];

const updateSubTabs: Record<string, string | undefined> = {
  Notice: 'notices-list',
  News: 'news',
  Event: 'events',
};

export const NewsNoticeEvents: React.FC<NewsNoticeEventsProps> = ({ language, setActiveTab }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const isNe = language === 'ne';

  const visibleItems =
    activeFilter === 'all' ? updateItems : updateItems.filter((item) => item.type.en === activeFilter);

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {isNe ? 'नयाँ अपडेटहरू' : 'Latest Updates'}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {isNe ? 'समाचार, सूचना र कार्यक्रम' : 'News, notices & events'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab('notices', 'all')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            <span>{isNe ? 'सबै हेर्नुहोस्' : 'View All'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-4">
            <div className="grid grid-cols-2 border-b border-slate-200 lg:block lg:border-b-0">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`min-h-14 border-slate-200 px-4 py-3 text-left text-sm font-semibold transition lg:block lg:w-full lg:border-b ${
                    activeFilter === tab.id
                      ? 'border-l-4 border-l-emerald-600 bg-emerald-50 text-emerald-700'
                      : 'bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {t(language, tab.label)}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-8">
            <div className="space-y-3 p-4">
              {visibleItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title.en}
                    type="button"
                    onClick={() => setActiveTab('notices', updateSubTabs[item.type.en])}
                    className="group flex w-full items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 text-left transition hover:border-emerald-600 hover:bg-emerald-50 sm:p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                        <span className="text-emerald-700">{t(language, item.type)}</span>
                        <span>{t(language, item.date)}</span>
                      </span>
                      <span className="mt-1.5 block text-sm font-semibold leading-6 text-slate-900 group-hover:text-emerald-700 sm:text-base">
                        {t(language, item.title)}
                      </span>
                    </span>
                    <ArrowRight className="mt-1 hidden h-4 w-4 shrink-0 text-emerald-600 sm:block" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
