import React from 'react';
import { PiggyBank, CheckCircle2 } from 'lucide-react';

interface DepositsPageProps {
  language: 'en' | 'ne';
  setActiveTab: (tab: string, sub?: string) => void;
}

export const DepositsPage: React.FC<DepositsPageProps> = ({ language, setActiveTab }) => {
  const isNe = language === 'ne';

  const depositTypes = [
    {
      titleEn: 'Ordinary Savings Account (साधारण बचत)',
      titleNe: 'साधारण बचत खाता',
      rate: '6.50% P.A.',
      min: 'NPR 500',
      descEn: 'Flexible savings with withdrawal facilities, daily interest calculation, and quarterly interest crediting.',
      descNe: 'दैनिक मौज्दातमा ६.५०% ब्याजदर र त्रैमासिक रूपमा खातामा जम्मा हुने सुविधा।',
    },
    {
      titleEn: 'Tourism Special Savings (पर्यटन विशेष बचत)',
      titleNe: 'पर्यटन विशेष बचत खाता',
      rate: '7.50% P.A.',
      min: 'NPR 2,000',
      descEn: 'Designed for tourism entrepreneurs and professionals looking for higher yields on operational savings.',
      descNe: 'पर्यटन व्यवसायी तथा पेशाकर्मीहरूका लागि विशेष ७.५०% ब्याजदर र सुविधा।',
    },
    {
      titleEn: 'Periodic / Fixed Deposit (मुद्धती निक्षेप)',
      titleNe: 'मुद्धती निक्षेप योजना',
      rate: 'Up to 11.50% P.A.',
      min: 'NPR 25,000',
      descEn: 'High-earning fixed tenure deposit scheme ranging from 3 months to 5+ years.',
      descNe: '३ महिना देखि ५ वर्ष वा सोभन्दा बढी अवधिका लागि ११.५०% सम्मको उच्च ब्याजदर।',
    },
    {
      titleEn: 'Senior Citizen Savings (ज्येष्ठ नागरिक बचत)',
      titleNe: 'ज्येष्ठ नागरिक बचत',
      rate: '8.50% P.A.',
      min: 'NPR 1,000',
      descEn: 'Special high-interest savings scheme dedicated to senior citizens for peace of mind in retirement.',
      descNe: 'ज्येष्ठ नागरिकहरूका लागि विशेष सम्मान सहित ८.५०% आकर्षक ब्याजदर।',
    },
  ];

  return (
    <div className="w-full bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Page Title */}
        <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold bg-[#D4AF37] text-slate-950 px-3 py-1 rounded-full uppercase">
              {isNe ? 'बचत योजनाहरू' : 'Deposit Schemes'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold mt-3">
              {isNe ? 'सुरक्षित बचत, उज्ज्वल भविष्य' : 'Secure Deposits & High Return Savings'}
            </h1>
            <p className="text-sm text-emerald-100 mt-2">
              {isNe
                ? 'तपाईंको कमाइलाई सुरक्षित राख्दै आकर्षक ब्याज प्रतिफल प्रदान गर्ने विभिन्न बचत योजनाहरू।'
                : 'Maximize returns on your hard-earned savings with transparent terms and daily compounding.'}
            </p>
          </div>
          <button
            onClick={() => setActiveTab('interest-rates')}
            className="shrink-0 bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 font-bold px-5 py-3 rounded-xl shadow-md text-xs sm:text-sm cursor-pointer"
          >
            {isNe ? 'ब्याजदर तालिका हेर्नुहोस्' : 'View Full Rate Sheet'}
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {depositTypes.map((d, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-emerald-500 transition-colors">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1B4D3E] flex items-center justify-center font-bold">
                  <PiggyBank className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold bg-emerald-50 text-[#1B4D3E] px-3 py-1 rounded-full border border-emerald-200">
                  {d.rate}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{isNe ? d.titleNe : d.titleEn}</h3>
                <p className="text-xs text-slate-600 mt-1">{isNe ? d.descNe : d.descEn}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{isNe ? `न्यूनतम: ${d.min}` : `Min Balance: ${d.min}`}</span>
                <span className="text-[#1B4D3E] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {isNe ? 'सुरक्षित' : 'Insured'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
