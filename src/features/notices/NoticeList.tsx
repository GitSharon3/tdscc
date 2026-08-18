import React from 'react';
import { FileText } from 'lucide-react';
import {
  noticeItems,
  type Language,
  type NoticeFilter,
} from './noticeContent';
import { NoticeCard } from './NoticeCard';

interface NoticeListProps {
  activeFilter: NoticeFilter;
  language: Language;
}

export const NoticeList: React.FC<NoticeListProps> = ({ activeFilter, language }) => {
  const filteredItems =
    activeFilter === 'all'
      ? noticeItems
      : noticeItems.filter((item) => item.category === activeFilter);

  if (filteredItems.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
        <FileText className="mx-auto h-10 w-10 text-slate-300" />
        <p className="mt-3 text-sm font-semibold text-slate-700">
          {language === 'ne' ? 'यस वर्गमा सामग्री उपलब्ध छैन।' : 'No updates are available in this category.'}
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-5 lg:px-6">
        <p className="text-sm font-semibold text-slate-700">
          {language === 'ne'
            ? `${filteredItems.length} सामग्री उपलब्ध`
            : `${filteredItems.length} ${filteredItems.length === 1 ? 'item' : 'items'} available`}
        </p>
      </div>
      {filteredItems.map((item) => (
        <NoticeCard key={item.id} item={item} language={language} />
      ))}
    </div>
  );
};
