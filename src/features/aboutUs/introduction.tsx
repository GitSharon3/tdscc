import React from 'react';
import { CheckCircle2, Landmark, Target } from 'lucide-react';
import { AboutSectionHeader } from './AboutSectionHeader';
import { introContent, serviceFocus, text, type Language } from './aboutContent';

interface IntroductionProps {
  language: Language;
}

export const Introduction: React.FC<IntroductionProps> = ({ language }) => (
  <section id="about-intro" className="scroll-mt-24">
    <AboutSectionHeader
      language={language}
      eyebrow={introContent.eyebrow}
      title={introContent.title}
      description={introContent.subtitle}
      icon={Landmark}
    />

    <div className="mt-8 grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] xl:gap-6">
      <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
          {introContent.paragraphs.map((paragraph) => (
            <p key={paragraph.en}>{text(language, paragraph)}</p>
          ))}
        </div>
      </div>

      <div className="min-w-0 rounded-lg border border-emerald-200 bg-emerald-900 p-5 text-white shadow-sm sm:p-7">
        <div className="flex items-center gap-3">
          <Target className="h-6 w-6 text-amber-300" />
          <h3 className="text-xl font-bold">{text(language, introContent.vision.title)}</h3>
        </div>
        <p className="mt-4 text-sm leading-7 text-emerald-50">{text(language, introContent.vision.body)}</p>
        <div className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
          {serviceFocus.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label.en} className="rounded-lg border border-emerald-700 bg-emerald-800/70 p-3">
                <Icon className="h-5 w-5 text-amber-300" />
                <p className="mt-2 text-xs font-semibold leading-5 text-emerald-50">{text(language, item.label)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)] xl:gap-6">
      <div className="min-w-0 rounded-lg border border-amber-200 bg-amber-50 p-5 sm:p-7">
        <h3 className="text-xl font-bold text-slate-950">{text(language, introContent.mission.title)}</h3>
        <ul className="mt-4 space-y-3">
          {introContent.mission.items.map((item) => (
            <li key={item.en} className="flex gap-3 text-sm leading-6 text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <span>{text(language, item)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid min-w-0 gap-4 md:grid-cols-2">
        {introContent.values.map((value) => {
          const Icon = value.icon;
          return (
            <article key={value.title.en} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <Icon className="h-6 w-6 text-emerald-700" />
              <h3 className="mt-3 text-base font-bold text-slate-950">{text(language, value.title)}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text(language, value.body)}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
