import React from 'react';
import logo from '../../assets/logos/tdsccLogo.png';
import { type Language, t } from './homeContent';

const aboutContent = {
  eyebrow: {
    en: 'About Us',
    ne: 'हाम्रो बारेमा',
  },
  title: {
    en: 'A trusted cooperative for tourism and community growth',
    ne: 'पर्यटन र सामुदायिक विकासका लागि भरोसायोग्य सहकारी',
  },
  description: {
    en: 'Tourism Development Saving & Credit Cooperative Limited (TDSCC) provides reliable financial services with professionalism, trust and customer-focused service.',
    ne: 'टुरिज्म डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेड (TDSCC) ले पेसागतता, भरोसा र ग्राहकमुखी सेवासहित विश्वसनीय वित्तीय सेवा प्रदान गर्दै आएको छ।',
  },
};

interface AboutUsProps {
  language: Language;
}

export const AboutUs: React.FC<AboutUsProps> = ({ language }) => {
  const isNe = language === 'ne';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-emerald-100 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-8 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-10 lg:py-10">
            <div className="flex w-full items-center justify-center lg:w-[220px]">
              <div className="flex h-28 w-28 items-center justify-center rounded-[24px] border border-emerald-100 bg-emerald-50 p-3 shadow-sm sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                <img src={logo} alt={isNe ? 'टिडिएससिसी लोगो' : 'TDSCC logo'} className="h-full w-full object-contain" />
              </div>
            </div>

            <div className="flex-1 text-left">
              <div className="mb-3 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 sm:text-[11px]">
                {t(language, aboutContent.eyebrow)}
              </div>

              <h2 className="max-w-3xl text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
                {t(language, aboutContent.title)}
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base lg:text-lg lg:leading-8">
                {t(language, aboutContent.description)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
