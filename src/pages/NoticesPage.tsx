import React from 'react';
import { Download, Calendar } from 'lucide-react';

interface NoticesPageProps {
  language: 'en' | 'ne';
}

export const NoticesPage: React.FC<NoticesPageProps> = ({ language }) => {
  const isNe = language === 'ne';

  const noticesList = [
    { titleEn: 'Annual General Meeting (AGM) Notice 2026', titleNe: 'वार्षिक साधारण सभा (AGM) सम्बन्धी सूचना', date: '2026-08-01', category: 'Notice' },
    { titleEn: 'Updated Interest Rates Effective from Shrawan 2083', titleNe: 'साउन २०८३ देखि लागू हुने नयाँ ब्याजदर तालिका', date: '2026-07-16', category: 'Financial' },
    { titleEn: 'TDSCC Membership Form & KYC Guidelines PDF', titleNe: 'सदस्यता फारम तथा KYC अध्यावधिक फारम', date: '2026-06-20', category: 'Download' },
    { titleEn: 'Financial Statement Summary Q4 FY 2082/83', titleNe: 'चौथो त्रैमासिक वित्तीय विवरण २०८२/८३', date: '2026-07-05', category: 'Report' },
  ];

  return (
    <div className="w-full bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-5xl mx-auto space-y-8">

        <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 shadow-xl">
          <span className="text-xs font-bold bg-[#D4AF37] text-slate-950 px-3 py-1 rounded-full uppercase">
            {isNe ? 'सूचना तथा प्रकाशन' : 'Notices & Downloads'}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold mt-3">
            {isNe ? 'संस्थाका सूचना तथा प्रकाशित समाचारहरू' : 'Official Notices, News & Downloadable Forms'}
          </h1>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
          {noticesList.map((n, index) => (
            <div key={index} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold bg-emerald-100 text-[#1B4D3E] px-2 py-0.5 rounded">
                    {n.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {n.date}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{isNe ? n.titleNe : n.titleEn}</h3>
              </div>
              <button className="shrink-0 bg-slate-100 hover:bg-[#1B4D3E] hover:text-white text-slate-700 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
                <Download className="w-4 h-4" />
                <span>{isNe ? 'डाउनलोड गर्नुहोस्' : 'Download PDF'}</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
