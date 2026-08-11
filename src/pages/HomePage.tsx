import React from 'react';
import { PiggyBank, Landmark, Send, Percent, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

interface HomePageProps {
  language: 'en' | 'ne';
  setActiveTab: (tab: string, sub?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ language, setActiveTab }) => {
  const isNe = language === 'ne';

  return (
    <div className="w-full bg-slate-50 space-y-12 pb-16">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1B4D3E] via-[#2D6A4F] to-[#143C30] text-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

          <div className="lg:col-span-7 text-left space-y-5">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-[#D4AF37] px-3.5 py-1.5 rounded-full border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>{isNe ? 'सुरक्षित र भरपर्दो वित्तीय संस्था' : 'Trusted & Secure Cooperative'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white tracking-tight">
              {isNe ? (
                <>तपाईंको समृद्धिको <span className="text-[#D4AF37]">सबल वित्तीय</span> साझेदार</>
              ) : (
                <>Your Trusted Partner for <span className="text-[#D4AF37]">Financial Growth</span> & Stability</>
              )}
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 max-w-xl font-normal leading-relaxed">
              {isNe
                ? 'टुरिजम डेभलपमेन्ट सेभिङ्ग एण्ड क्रेडिट को-अपरेटिभ लि. ले तपाईंका बचत, कर्जा तथा रेमिट्यान्स सेवाहरूलाई अत्याधुनिक र सुरक्षित तवरले सञ्चालन गर्दछ।'
                : 'Providing tailored financial solutions, high-yield savings plans, competitive loan interest rates, and seamless remittance services across Nepal.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setActiveTab('interest-rates')}
                className="bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>{isNe ? 'ब्याजदर हेर्नुहोस्' : 'View Interest Rates'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('deposits')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 text-sm cursor-pointer"
              >
                <span>{isNe ? 'बचत खाता खोल्नुहोस्' : 'Explore Deposits'}</span>
              </button>
            </div>
          </div>

          {/* Feature Quick Card Widget */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-md text-slate-800 rounded-2xl p-6 shadow-2xl border border-white/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-base font-bold text-[#1B4D3E] flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                  <span>{isNe ? 'मुख्य सुविधाहरू' : 'Key Highlights'}</span>
                </h2>
                <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                  {isNe ? 'अपडेट २०८३' : 'Active 2026'}
                </span>
              </div>

              <div className="space-y-3 text-left">
                <div
                  onClick={() => setActiveTab('interest-rates')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/80 transition-colors cursor-pointer flex items-center justify-between border border-slate-200/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 text-[#1B4D3E] flex items-center justify-center font-bold">
                      <Percent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">{isNe ? 'मुद्धती बचत ब्याजदर' : 'Fixed Deposit Rate'}</div>
                      <div className="text-[11px] text-slate-500">{isNe ? 'वार्षिक ११.५०% सम्म' : 'Up to 11.50% P.A.'}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>

                <div
                  onClick={() => setActiveTab('loans')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/80 transition-colors cursor-pointer flex items-center justify-between border border-slate-200/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">{isNe ? 'सुलभ कर्जा सुविधा' : 'Easy Loan Schemes'}</div>
                      <div className="text-[11px] text-slate-500">{isNe ? '१०.५०% बाट सुरु' : 'Starting from 10.50%'}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>

                <div
                  onClick={() => setActiveTab('remittance')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/80 transition-colors cursor-pointer flex items-center justify-between border border-slate-200/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">{isNe ? 'द्रुत रेमिट्यान्स' : 'Express Remittance'}</div>
                      <div className="text-[11px] text-slate-500">{isNe ? 'IME, Western Union आदि' : 'IME & Western Union'}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Financial Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-[#1B4D3E] uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
            {isNe ? 'हाम्रा सेवाहरू' : 'Our Key Services'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isNe ? 'तपाईंको आवश्यकता अनुसारका सुविधाहरू' : 'Tailored Financial Services for Members'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Deposits Card */}
          <div
            onClick={() => setActiveTab('deposits')}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1B4D3E] flex items-center justify-center group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1B4D3E]">
                {isNe ? 'बचत योजनाहरू' : 'Deposit Schemes'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isNe
                  ? 'साधारण बचत, ज्येष्ठ नागरिक बचत, बाल बचत तथा मुद्धती निक्षेपमा आकर्षक ब्याजदर।'
                  : 'Flexible savings accounts, senior citizen accounts, and high-yield fixed deposits.'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#1B4D3E] gap-1 group-hover:gap-2 transition-all">
              <span>{isNe ? 'विस्तृत विवरण' : 'Explore Deposits'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Loans Card */}
          <div
            onClick={() => setActiveTab('loans')}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1B4D3E]">
                {isNe ? 'कर्जा सुविधाहरू' : 'Loan Products'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isNe
                  ? 'व्यक्तिगत, आवास, सवारी, पर्यटन कृषि तथा व्यावसायिक कर्जा सरल प्रक्रियामा।'
                  : 'Personal loans, home loans, auto loans, tourism agriculture, and business credit.'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#1B4D3E] gap-1 group-hover:gap-2 transition-all">
              <span>{isNe ? 'विस्तृत विवरण' : 'Explore Loans'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Interest Rates Card */}
          <div
            onClick={() => setActiveTab('interest-rates')}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1B4D3E]">
                {isNe ? 'प्रभावी ब्याजदर' : 'Interest Rates'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isNe
                  ? 'निक्षेप तथा कर्जाको पारदर्शी एवं अद्यावधिक ब्याजदर तालिका हेर्नुहोस्।'
                  : 'View up-to-date, transparent tables for all savings and credit options.'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#1B4D3E] gap-1 group-hover:gap-2 transition-all">
              <span>{isNe ? 'तालिका हेर्नुहोस्' : 'View Rate Table'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Remittance Card */}
          <div
            onClick={() => setActiveTab('remittance')}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer text-left flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center group-hover:bg-purple-700 group-hover:text-white transition-colors">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1B4D3E]">
                {isNe ? 'रेमिट्यान्स सेवा' : 'Remittance Service'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isNe
                  ? 'स्वदेश तथा विदेशबाट IME र Western Union मार्फत रकम भुक्तानी सुविधा।'
                  : 'Fast, secure inward and outward money transfer via recognized partners.'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#1B4D3E] gap-1 group-hover:gap-2 transition-all">
              <span>{isNe ? 'विस्तृत विवरण' : 'Explore Remittance'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>
      </section>

      {/* Trust Banner / Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B4D3E] rounded-2xl p-8 text-white grid grid-cols-2 lg:grid-cols-4 gap-6 text-center border border-emerald-800 shadow-xl">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">५,०००+</div>
            <div className="text-xs text-emerald-100">{isNe ? 'सेयरधनी सदस्यहरू' : 'Active Members'}</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">रु. ५० करोड+</div>
            <div className="text-xs text-emerald-100">{isNe ? 'कुल निक्षेप रकम' : 'Total Deposits'}</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">रु. ४५ करोड+</div>
            <div className="text-xs text-emerald-100">{isNe ? 'कुल कर्जा लगानी' : 'Total Loans Granted'}</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">१००%</div>
            <div className="text-xs text-emerald-100">{isNe ? 'पारदर्शी सेवा' : 'Regulated & Trusted'}</div>
          </div>
        </div>
      </section>

    </div>
  );
};
