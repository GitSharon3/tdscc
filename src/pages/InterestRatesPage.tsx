import React, { useState } from 'react';
import { Percent, PiggyBank, Landmark, ShieldCheck, HelpCircle } from 'lucide-react';

interface InterestRatesPageProps {
  language: 'en' | 'ne';
}

export const InterestRatesPage: React.FC<InterestRatesPageProps> = ({ language }) => {
  const isNe = language === 'ne';
  const [activeTab, setActiveTab] = useState<'deposits' | 'loans'>('deposits');

  const depositRates = [
    { nameEn: 'Ordinary Savings (साधारण बचत)', nameNe: 'साधारण बचत', minBal: 'NPR 500', rate: '6.50%', payPeriodEn: 'Quarterly', payPeriodNe: 'त्रैमासिक' },
    { nameEn: 'Tourism Special Savings (पर्यटन विशेष बचत)', nameNe: 'पर्यटन विशेष बचत', minBal: 'NPR 2,000', rate: '7.50%', payPeriodEn: 'Quarterly', payPeriodNe: 'त्रैमासिक' },
    { nameEn: 'Daily Flexi Savings (दैनिक बचत)', nameNe: 'दैनिक बचत', minBal: 'NPR 1,000', rate: '7.00%', payPeriodEn: 'Monthly', payPeriodNe: 'मासिक' },
    { nameEn: 'Child Growth Savings (बाल बचत)', nameNe: 'बाल बचत', minBal: 'NPR 500', rate: '8.00%', payPeriodEn: 'Quarterly', payPeriodNe: 'त्रैमासिक' },
    { nameEn: 'Senior Citizen Savings (ज्येष्ठ नागरिक बचत)', nameNe: 'ज्येष्ठ नागरिक बचत', minBal: 'NPR 1,000', rate: '8.50%', payPeriodEn: 'Quarterly', payPeriodNe: 'त्रैमासिक' },
    { nameEn: 'Shareholder Bonus Savings (शेयरधनी बचत)', nameNe: 'शेयरधनी बचत', minBal: 'NPR 5,000', rate: '8.00%', payPeriodEn: 'Quarterly', payPeriodNe: 'त्रैमासिक' },
  ];

  const fixedDepositRates = [
    { periodEn: '3 Months (३ महिना)', periodNe: '३ महिना', rate: '8.75%', minAmt: 'NPR 25,000' },
    { periodEn: '6 Months (६ महिना)', periodNe: '६ महिना', rate: '9.25%', minAmt: 'NPR 25,000' },
    { periodEn: '1 Year (१ वर्ष)', periodNe: '१ वर्ष', rate: '10.50%', minAmt: 'NPR 25,000' },
    { periodEn: '2 Years (२ वर्ष)', periodNe: '२ वर्ष', rate: '11.00%', minAmt: 'NPR 25,000' },
    { periodEn: '3 Years & Above (३ वर्ष वा सोभन्दा बढी)', periodNe: '३ वर्ष वा सोभन्दा बढी', rate: '11.50%', minAmt: 'NPR 25,000' },
  ];

  const loanRates = [
    { typeEn: 'Personal / Consumer Loan', typeNe: 'व्यक्तिगत / उपभोक्ता कर्जा', rate: '12.50% - 13.50%', maxPeriodEn: 'Up to 5 Years', maxPeriodNe: '५ वर्षसम्म' },
    { typeEn: 'Housing Loan (घर / आवास कर्जा)', typeNe: 'घर / आवास कर्जा', rate: '11.50% - 12.50%', maxPeriodEn: 'Up to 15 Years', maxPeriodNe: '१५ वर्षसम्म' },
    { typeEn: 'Auto / Vehicle Loan', typeNe: 'सवारी साधन कर्जा', rate: '12.00% - 13.00%', maxPeriodEn: 'Up to 7 Years', maxPeriodNe: '७ वर्षसम्म' },
    { typeEn: 'Education Loan (शिक्षा कर्जा)', typeNe: 'शिक्षा कर्जा', rate: '11.00% - 12.00%', maxPeriodEn: 'Up to 7 Years', maxPeriodNe: '७ वर्षसम्म' },
    { typeEn: 'Business Loan (व्यापार कर्जा)', typeNe: 'व्यापार कर्जा', rate: '12.00% - 14.00%', maxPeriodEn: 'Up to 10 Years', maxPeriodNe: '१० वर्षसम्म' },
    { typeEn: 'Tourism Agriculture Loan', typeNe: 'पर्यटन कृषि कर्जा', rate: '10.50% - 11.75%', maxPeriodEn: 'Up to 10 Years', maxPeriodNe: '१० वर्षसम्म' },
    { typeEn: 'Hire Purchase Loan', typeNe: 'हायरिङ पर्चेज कर्जा', rate: '12.50% - 13.50%', maxPeriodEn: 'Up to 5 Years', maxPeriodNe: '५ वर्षसम्म' },
    { typeEn: 'Short Term Business Loan', typeNe: 'अल्पकालीन व्यापार कर्जा', rate: '13.00% - 14.25%', maxPeriodEn: 'Up to 1 Year', maxPeriodNe: '१ वर्षसम्म' },
  ];

  return (
    <div className="w-full bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Page Header Banner */}
        <div className="bg-[#1B4D3E] rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-10 pointer-events-none">
            <Percent className="w-96 h-96 text-white" />
          </div>
          <div className="relative z-10 max-w-2xl text-left space-y-3">
            <span className="inline-block bg-[#D4AF37] text-slate-950 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              {isNe ? 'प्रभावी ब्याजदर - २०८३' : 'Effective Interest Rates 2026'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              {isNe ? 'बचत तथा कर्जा ब्याजदर विवरण' : 'Deposit & Loan Interest Rate Schedule'}
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              {isNe
                ? 'पर्यटन विकास बचत तथा ऋण सहकारी संस्था लि. ले आफ्ना सदस्यहरूलाई प्रदान गर्ने पारदर्शी, प्रतिस्पर्धात्मक र सुरक्षित ब्याजदर संरचना।'
                : 'Transparent, competitive, and secure interest rate structures tailored for all members of TDSCC Limited.'}
            </p>
          </div>
        </div>

        {/* Selector Tabs (Deposits vs Loans) */}
        <div className="flex justify-center w-full">
          <div className="bg-white p-1.5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('deposits')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'deposits'
                  ? 'bg-[#1B4D3E] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <PiggyBank className="w-4 h-4 shrink-0" />
              <span>{isNe ? 'बचत ब्याजदर (Deposits)' : 'Deposit Rates'}</span>
            </button>
            <button
              onClick={() => setActiveTab('loans')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'loans'
                  ? 'bg-[#1B4D3E] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Landmark className="w-4 h-4 shrink-0" />
              <span>{isNe ? 'कर्जा ब्याजदर (Loans)' : 'Loan Rates'}</span>
            </button>
          </div>
        </div>

        {/* Deposit Rates Section */}
        {activeTab === 'deposits' && (
          <div className="space-y-8">
            {/* Savings Accounts Table */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
              <div className="bg-emerald-900 text-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h2 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <PiggyBank className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>{isNe ? '१. बचत खाता ब्याजदर (Savings Accounts)' : '1. Savings Deposit Accounts'}</span>
                </h2>
                <span className="text-[11px] sm:text-xs bg-emerald-800 text-emerald-100 px-2.5 py-1 rounded">
                  {isNe ? 'दैनिक मौज्दातमा ब्याज' : 'Daily Balance Calculation'}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-6">{isNe ? 'बचत योजना' : 'Savings Scheme Name'}</th>
                      <th className="py-3.5 px-6">{isNe ? 'न्यूनतम मौज्दात' : 'Minimum Balance'}</th>
                      <th className="py-3.5 px-6">{isNe ? 'ब्याज भुक्तानी' : 'Interest Payment'}</th>
                      <th className="py-3.5 px-6 text-right text-emerald-800 font-bold">{isNe ? 'वार्षिक ब्याजदर' : 'Annual Interest Rate'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {depositRates.map((d, i) => (
                      <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-6 font-semibold text-slate-800">{isNe ? d.nameNe : d.nameEn}</td>
                        <td className="py-4 px-6 text-slate-600 font-medium">{d.minBal}</td>
                        <td className="py-4 px-6 text-slate-600">{isNe ? d.payPeriodNe : d.payPeriodEn}</td>
                        <td className="py-4 px-6 text-right font-extrabold text-[#1B4D3E] text-base">{d.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fixed Deposits Table */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
              <div className="bg-[#143C30] text-white px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  <span>{isNe ? '२. मुद्धती निक्षेप ब्याजदर (Fixed Deposits)' : '2. Fixed / Periodic Deposits'}</span>
                </h2>
                <span className="text-xs bg-amber-500 text-slate-950 font-bold px-2.5 py-1 rounded">
                  {isNe ? 'उच्चतम प्रतिफल' : 'Highest Returns'}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-6">{isNe ? 'अवधि' : 'Deposit Period'}</th>
                      <th className="py-3.5 px-6">{isNe ? 'न्यूनतम रकम' : 'Minimum Amount'}</th>
                      <th className="py-3.5 px-6 text-right text-emerald-800 font-bold">{isNe ? 'वार्षिक ब्याजदर' : 'Annual Rate'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {fixedDepositRates.map((f, i) => (
                      <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-6 font-semibold text-slate-800">{isNe ? f.periodNe : f.periodEn}</td>
                        <td className="py-4 px-6 text-slate-600 font-medium">{f.minAmt}</td>
                        <td className="py-4 px-6 text-right font-extrabold text-[#1B4D3E] text-base">{f.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Loan Rates Section */}
        {activeTab === 'loans' && (
          <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
            <div className="bg-[#1B4D3E] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#D4AF37]" />
                <span>{isNe ? 'कर्जा ब्याजदर विवरण (Loan Schemes Interest Rates)' : 'Loan Schemes Interest Rates'}</span>
              </h2>
              <span className="text-xs bg-emerald-700 text-white px-2.5 py-1 rounded">
                {isNe ? 'घट्दो किस्ता प्रणाली' : 'Diminishing Balance Basis'}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <th className="py-3.5 px-6">{isNe ? 'कर्जाको प्रकार' : 'Loan Scheme Type'}</th>
                    <th className="py-3.5 px-6">{isNe ? 'अधिकतम अवधि' : 'Maximum Tenure'}</th>
                    <th className="py-3.5 px-6 text-right text-emerald-800 font-bold">{isNe ? 'वार्षिक ब्याजदर (प्रीमियम सहित)' : 'Annual Interest Rate'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loanRates.map((l, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-800">{isNe ? l.typeNe : l.typeEn}</td>
                      <td className="py-4 px-6 text-slate-600 font-medium">{isNe ? l.maxPeriodNe : l.maxPeriodEn}</td>
                      <td className="py-4 px-6 text-right font-extrabold text-[#1B4D3E] text-base">{l.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer Notes & Callout */}
        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-amber-900">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-slate-900">
                {isNe ? 'थप जानकारी तथा शर्तहरू:' : 'Additional Notes & Terms:'}
              </strong>
              <p className="mt-0.5 text-slate-700">
                {isNe
                  ? 'ब्याजदर सञ्चालक समितिको निर्णय बमोजिम परिवर्तन हुन सक्नेछ। सेवा शुल्क तथा प्रशासनिक शुल्क नियमानुसार लाग्नेछ।'
                  : 'Rates are subject to decision by the Board of Directors. Applicable service charges and processing fees apply as per cooperative rules.'}
              </p>
            </div>
          </div>
          <a
            href="tel:014412345"
            className="shrink-0 bg-[#1B4D3E] hover:bg-[#143C30] text-white font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <span>{isNe ? 'सल्लाह लिनुहोस्' : 'Consult Advisor'}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
