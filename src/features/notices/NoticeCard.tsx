import React from 'react';
import { Calendar, Download } from 'lucide-react';
import {
  categoryLabels,
  t,
  type Language,
  type NoticeItem,
} from './noticeContent';

interface NoticeCardProps {
  item: NoticeItem;
  language: Language;
}

export const NoticeCard: React.FC<NoticeCardProps> = ({ item, language }) => {
  const Icon = item.icon;

  return (
    <article className="group grid gap-4 border-b border-slate-200 bg-white p-4 transition-colors last:border-b-0 hover:bg-emerald-50/50 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5 lg:p-6">
      <div className="flex min-w-0 gap-4">
        <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-[#1B4D3E] sm:flex">
          <Icon className="h-5 w-5" />
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="rounded-md bg-emerald-100 px-2.5 py-1 uppercase text-[#1B4D3E]">
              {t(language, categoryLabels[item.category])}
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-500">
              <Calendar className="h-4 w-4 text-slate-400" />
              {t(language, item.date)}
            </span>
          </div>

          <h2 className="mt-2 text-base font-bold leading-6 text-slate-950 transition-colors group-hover:text-[#1B4D3E] sm:text-lg lg:text-xl">
            {t(language, item.title)}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {t(language, item.summary)}
          </p>
        </div>
      </div>

      <a
        href={item.fileUrl}
        download={item.fileName}
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-[#1B4D3E] hover:text-white sm:w-auto"
        aria-label={`${language === 'ne' ? 'डाउनलोड गर्नुहोस्' : 'Download PDF'}: ${t(language, item.title)}`}
      >
        <Download className="h-4 w-4" />
        <span>{language === 'ne' ? 'PDF डाउनलोड' : 'Download PDF'}</span>
      </a>
    </article>
  );
};
