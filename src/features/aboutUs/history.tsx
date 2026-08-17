import React from 'react';
import { AlertCircle, CheckCircle2, Clock3 } from 'lucide-react';
import { AboutSectionHeader } from './AboutSectionHeader';
import { historyContent, text, type Language } from './aboutContent';

interface HistoryProps {
  language: Language;
}

export const History: React.FC<HistoryProps> = ({ language }) => (
  <section id="about-history" className="scroll-mt-24">
    <AboutSectionHeader
      language={language}
      eyebrow={historyContent.eyebrow}
      title={historyContent.title}
      description={{
        en: 'A concise history of how TDSCC expanded its financial service role.',
        ne: 'टिडिएससिसीले वित्तीय सेवा भूमिकालाई कसरी विस्तार गर्‍यो भन्ने संक्षिप्त इतिहास।',
      }}
      icon={Clock3}
    />

    <div className="mt-8 grid gap-5 xl:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] xl:gap-6">
      <div className="min-w-0 space-y-5 rounded-lg border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm sm:p-7 sm:text-base sm:leading-8">
        {historyContent.paragraphs.map((paragraph) => (
          <p key={paragraph.en}>{text(language, paragraph)}</p>
        ))}

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          <div className="flex gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <p>{text(language, historyContent.note)}</p>
          </div>
        </div>
      </div>

      <div className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6">
        <ol className="relative space-y-5 border-l border-emerald-200 pl-6">
          {historyContent.milestones.map((milestone) => (
            <li key={milestone.title.en} className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-700 shadow" />
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                  {text(language, milestone.period)}
                </div>
                <h3 className="mt-1 text-base font-bold text-slate-950">{text(language, milestone.title)}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text(language, milestone.body)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>

    <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50 p-5 sm:p-6">
      <h3 className="text-lg font-bold text-slate-950">
        {language === 'ne' ? 'स्थापनादेखि मार्गदर्शन गर्ने प्राथमिकताहरू' : 'Priorities that shaped the institution'}
      </h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {historyContent.principles.map((principle) => (
          <div key={principle.en} className="flex gap-3 rounded-lg bg-white p-4 text-sm leading-6 text-slate-700">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
            <span>{text(language, principle)}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
