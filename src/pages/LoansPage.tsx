import React from 'react';
import { Landmark } from 'lucide-react';

interface LoansPageProps {
  language: 'en' | 'ne';
  setActiveTab: (tab: string, sub?: string) => void;
}

export const LoansPage: React.FC<LoansPageProps> = ({ language, setActiveTab }) => {
  const isNe = language === 'ne';

  const loanProducts = [
    { nameEn: 'Personal / Consumer Loan', nameNe: 'व्यक्तिगत / उपभोक्ता कर्जा', rate: '12.50% - 13.50%', tenure: 'Up to 5 Yrs', descEn: 'For personal requirements, medical expenses, home renovation, or family needs.' },
    { nameEn: 'Housing Loan', nameNe: 'घर / आवास कर्जा', rate: '11.50% - 12.50%', tenure: 'Up to 15 Yrs', descEn: 'Construct your dream home, purchase land or residential apartments.' },
    { nameEn: 'Auto Loan', nameNe: 'सवारी साधन कर्जा', rate: '12.00% - 13.00%', tenure: 'Up to 7 Yrs', descEn: 'Finance private automobiles, electric vehicles, or two-wheelers with low processing fees.' },
    { nameEn: 'Education Loan', nameNe: 'शिक्षा कर्जा', rate: '11.00% - 12.00%', tenure: 'Up to 7 Yrs', descEn: 'Empower higher studies in Nepal and top international universities overseas.' },
    { nameEn: 'Business Loan', nameNe: 'व्यापार कर्जा', rate: '12.00% - 14.00%', tenure: 'Up to 10 Yrs', descEn: 'Capital infusion for expanding enterprises, tourism businesses, and trade.' },
    { nameEn: 'Tourism Agriculture Loan', nameNe: 'पर्यटन कृषि कर्जा', rate: '10.50% - 11.75%', tenure: 'Up to 10 Yrs', descEn: 'Special subsidized loan for agro-tourism projects, organic farms, and resorts.' },
    { nameEn: 'Hire Purchase Loan', nameNe: 'हायरिङ पर्चेज कर्जा', rate: '12.50% - 13.50%', tenure: 'Up to 5 Yrs', descEn: 'For commercial transport vehicles, tour buses, and machinery equipment.' },
    { nameEn: 'Short Term Business Loan', nameNe: 'अल्पकालीन व्यापार कर्जा', rate: '13.00% - 14.25%', tenure: 'Up to 1 Yr', descEn: 'Flexible revolving working capital for seasonal business demand.' },
  ];

  return (
    <div className="w-full bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Page Banner */}
        <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold bg-[#D4AF37] text-slate-950 px-3 py-1 rounded-full uppercase">
              {isNe ? 'कर्जा सुविधाहरू' : 'Loan Products & Financing'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold mt-3">
              {isNe ? 'सुलभ ब्याजदरमा सहज कर्जा सेवा' : 'Affordable Loan Products with Fast Processing'}
            </h1>
            <p className="text-sm text-emerald-100 mt-2">
              {isNe
                ? 'तपाईंको व्यवसाय, आवास, शिक्षा तथा व्यक्तिगत आवश्यकता पूरा गर्नका लागि सरल प्रक्रियामा कर्जा प्रवर्धन।'
                : 'Empowering your growth with competitive interest rates, transparent terms, and minimal paperwork.'}
            </p>
          </div>
          <button
            onClick={() => setActiveTab('interest-rates')}
            className="shrink-0 bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 font-bold px-5 py-3 rounded-xl shadow-md text-xs sm:text-sm cursor-pointer"
          >
            {isNe ? 'कर्जा ब्याजदर हेर्नुहोस्' : 'Check Loan Rates'}
          </button>
        </div>

        {/* Grid of 8 Loans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanProducts.map((l, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-extrabold text-[#1B4D3E] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {l.rate}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{isNe ? l.nameNe : l.nameEn}</h3>
                <p className="text-xs text-slate-600 leading-snug">{l.descEn}</p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>{isNe ? `अवधि: ${l.tenure}` : `Tenure: ${l.tenure}`}</span>
                <a href="tel:014412345" className="text-[#1B4D3E] font-bold hover:underline">
                  {isNe ? 'आवेदन दिनुहोस्' : 'Apply Now'}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
