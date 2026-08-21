import React, { useEffect, useState } from 'react';
import { Bell, CalendarDays, Download, Newspaper } from 'lucide-react';
import { NoticeList } from '../features/notices/NoticeList';
import {
  noticeFilters,
  noticeItems,
  t,
  type Language,
  type NoticeFilter,
} from '../features/notices/noticeContent';

interface NoticesPageProps {
  language: Language;
  subTab?: string;
}

const filterFromSubTab = (subTab?: string): NoticeFilter => {
  if (subTab === 'news') return 'news';
  if (subTab === 'events') return 'event';
  if (subTab === 'notices-list') return 'notice';
  return 'all';
};

export const NoticesPage: React.FC<NoticesPageProps> = ({ language, subTab }) => {
  const isNe = language === 'ne';
  const [activeFilter, setActiveFilter] = useState<NoticeFilter>(() => filterFromSubTab(subTab));

  useEffect(() => {
    setActiveFilter(filterFromSubTab(subTab));
  }, [subTab]);

  const stats = {
    notice: noticeItems.filter((item) => item.category === 'notice').length,
    news: noticeItems.filter((item) => item.category === 'news').length,
    event: noticeItems.filter((item) => item.category === 'event').length,
  };

  return (
    <div className="w-full bg-slate-50 text-left">
      <section className="border-b border-emerald-900/20 bg-[#143C30] px-4 py-6 text-white sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-[#D4AF37] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-slate-950">
              {isNe ? 'नयाँ अपडेटहरू' : 'Latest Updates'}
            </span>
            <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {isNe ? 'सूचना, समाचार र कार्यक्रमहरू' : 'News, Notices & Events'}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-emerald-50/85 sm:text-lg">
              {isNe
                ? 'संस्थाका आधिकारिक सूचना, समाचार, कार्यक्रम विवरण र डाउनलोड गर्न मिल्ने PDF सामग्रीहरू एउटै ठाउँमा।'
                : 'Official announcements, cooperative news, event updates and downloadable PDF documents in one place.'}
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-emerald-700 bg-emerald-950/35">
            <div className="border-r border-emerald-700 p-4">
              <Bell className="h-5 w-5 text-[#D4AF37]" />
              <p className="mt-2 text-2xl font-extrabold">{stats.notice}</p>
              <p className="text-xs font-semibold text-emerald-100">{isNe ? 'सूचना' : 'Notices'}</p>
            </div>
            <div className="border-r border-emerald-700 p-4">
              <Newspaper className="h-5 w-5 text-[#D4AF37]" />
              <p className="mt-2 text-2xl font-extrabold">{stats.news}</p>
              <p className="text-xs font-semibold text-emerald-100">{isNe ? 'समाचार' : 'News'}</p>
            </div>
            <div className="p-4">
              <CalendarDays className="h-5 w-5 text-[#D4AF37]" />
              <p className="mt-2 text-2xl font-extrabold">{stats.event}</p>
              <p className="text-xs font-semibold text-emerald-100">{isNe ? 'कार्यक्रम' : 'Events'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-wide text-[#1B4D3E]">
                  {isNe ? 'वर्ग छान्नुहोस्' : 'Browse By Category'}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:block">
                {noticeFilters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`min-h-12 w-full border-slate-200 px-4 py-3 text-left text-sm font-bold transition lg:border-b ${
                      activeFilter === filter.id
                        ? 'bg-emerald-50 text-[#1B4D3E] ring-2 ring-inset ring-[#1B4D3E]'
                        : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-[#1B4D3E]'
                    }`}
                  >
                    {t(language, filter.label)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
              <div className="flex items-center gap-2 font-bold">
                <Download className="h-4 w-4" />
                <span>{isNe ? 'PDF डाउनलोड' : 'PDF Downloads'}</span>
              </div>
              <p className="mt-2 text-xs leading-5">
                {isNe
                  ? 'प्रत्येक सामग्रीको आधिकारिक PDF डाउनलोड गर्न बटन प्रयोग गर्नुहोस्।'
                  : 'Use the download button on each item to save the official PDF document.'}
              </p>
            </div>
          </aside>

          <NoticeList activeFilter={activeFilter} language={language} />
        </div>
      </section>
    </div>
  );
};
