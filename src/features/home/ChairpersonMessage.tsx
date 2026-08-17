import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import tdsccLogo from '../../assets/logos/tdsccLogo.png';
import { type Language } from './homeContent';

interface ChairpersonMessageProps {
  language: Language;
  setActiveTab: (tab: string, sub?: string) => void;
}

export const ChairpersonMessage: React.FC<ChairpersonMessageProps> = ({ language, setActiveTab }) => {
  const isNe = language === 'ne';

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-xl border border-slate-200 bg-slate-50 shadow-md">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-xl md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          <div className="bg-emerald-50 p-5 sm:p-6">
            <div className="flex h-full min-h-64 flex-col overflow-hidden rounded-lg border border-emerald-200 bg-white">
              <div className="flex flex-1 items-center justify-center bg-slate-50 p-8 sm:p-10">
                <img
                  src={tdsccLogo}
                  alt={isNe ? 'अध्यक्षको तस्बिर' : 'Chairperson portrait'}
                  className="max-h-52 w-full object-contain"
                />
              </div>
              <div className="border-t border-slate-200 p-4 text-left">
                <h3 className="text-base font-semibold text-emerald-700">{isNe ? 'अध्यक्ष' : 'Chairperson'}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {isNe ? 'टुरिजम डेभलपमेन्ट साकोस' : 'Tourism Development SACCOS'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center p-6 text-left sm:p-8 lg:p-10">
            <div className="w-full">
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
                <Quote className="h-4 w-4" />
                {isNe ? 'अध्यक्षको सन्देश' : 'From The Chairperson'}
              </div>
              <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                {isNe ? 'सदस्यको विश्वास नै हाम्रो संस्थाको शक्ति हो' : 'Member trust is the strength of our cooperative'}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                {isNe
                  ? 'हाम्रो सहकारी सदस्यहरूको वित्तीय आवश्यकतालाई सरल, पारदर्शी र जिम्मेवार ढंगबाट सम्बोधन गर्न निरन्तर प्रतिबद्ध छ। बचतको सुरक्षा, कर्जाको सहज पहुँच र समुदायमैत्री सेवा हाम्रो प्राथमिकता हो।'
                  : 'Our cooperative remains committed to serving members with simple, transparent and responsible financial solutions. Secure savings, accessible credit and community-focused service continue to guide our work every day.'}
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('about', 'chairperson')}
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-600 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
              >
                <span>{isNe ? 'पूरा सन्देश पढ्नुहोस्' : 'Read Full Message'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
