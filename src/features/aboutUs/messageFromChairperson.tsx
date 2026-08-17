import React from 'react';
import { BadgeCheck, Quote } from 'lucide-react';
import tdsccLogo from '../../assets/logos/tdsccLogo.png';
import { AboutSectionHeader } from './AboutSectionHeader';
import { chairpersonContent, text, type Language } from './aboutContent';

interface MessageFromChairpersonProps {
  language: Language;
}

export const MessageFromChairperson: React.FC<MessageFromChairpersonProps> = ({ language }) => (
  <section id="about-chairperson" className="scroll-mt-24">
    <AboutSectionHeader
      language={language}
      eyebrow={{ en: 'Chairperson Message', ne: 'अध्यक्षको सन्देश' }}
      title={chairpersonContent.title}
      description={{
        en: 'A website-ready draft message prepared for leadership review.',
        ne: 'नेतृत्व समीक्षाका लागि तयार गरिएको वेबसाइट-तयार सन्देश मस्यौदा।',
      }}
      icon={Quote}
    />

    <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="grid xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="border-b border-slate-200 bg-emerald-900 p-5 text-white sm:p-6 xl:border-b-0 xl:border-r">
          <div className="mx-auto max-w-56 rounded-lg border border-emerald-700 bg-white p-5 sm:p-7 xl:max-w-none">
            <img src={tdsccLogo} alt="TDSCC" className="mx-auto h-28 w-full object-contain sm:h-36 xl:h-40" />
          </div>
          <h3 className="mt-5 text-xl font-bold">{text(language, chairpersonContent.name)}</h3>
          <p className="mt-2 text-sm leading-6 text-emerald-50">{text(language, chairpersonContent.role)}</p>
          <div className="mt-5 rounded-lg border border-amber-300/50 bg-amber-300/15 p-3 text-xs leading-5 text-amber-50">
            {text(language, chairpersonContent.approvalNote)}
          </div>
        </aside>

        <div className="min-w-0 p-5 sm:p-8 xl:p-10">
          <Quote className="h-9 w-9 text-amber-500" />
          <div className="mt-5 space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            {chairpersonContent.paragraphs.map((paragraph) => (
              <p key={paragraph.en}>{text(language, paragraph)}</p>
            ))}
          </div>
          <div className="mt-8 border-t border-slate-200 pt-5">
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-700" />
              <div>
                <p className="font-bold text-slate-950">{text(language, chairpersonContent.name)}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {language === 'ne' ? 'अध्यक्ष' : 'Chairperson'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
