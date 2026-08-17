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

    <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        <div className="space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
          {introContent.paragraphs.map((paragraph) => (
            <p key={paragraph.en}>{text(language, paragraph)}</p>
          ))}
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
         
        </div>
      </div>

      <div className="rounded-lg border border-emerald-200 bg-emerald-900 p-6 text-white shadow-sm sm:p-7">
        <div className="flex items-center gap-3">
          <Target className="h-6 w-6 text-amber-300" />
          <h3 className="text-xl font-bold">{text(language, introContent.vision.title)}</h3>
        </div>
        <p className="mt-4 text-sm leading-7 text-emerald-50">{text(language, introContent.vision.body)}</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
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

    <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 sm:p-7">
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

      <div className="grid gap-4 sm:grid-cols-2">
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
