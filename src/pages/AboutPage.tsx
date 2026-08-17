import React from 'react';
import { Building2 } from 'lucide-react';
import { BoardOfMembers } from '../features/aboutUs/boardOfMembers';
import { History } from '../features/aboutUs/history';
import { Introduction } from '../features/aboutUs/introduction';
import { ManagementTeam } from '../features/aboutUs/ManagementTeam';
import { MessageFromChairperson } from '../features/aboutUs/messageFromChairperson';
import { aboutSections, introContent, text, type AboutSectionId, type Language } from '../features/aboutUs/aboutContent';

interface AboutPageProps {
  language: Language;
  subTab?: string;
  setActiveTab: (tabId: string, subItemId?: string) => void;
}

const isAboutSection = (subTab?: string): subTab is AboutSectionId =>
  aboutSections.some((section) => section.id === subTab);

const sectionComponents: Record<AboutSectionId, React.ComponentType<{ language: Language }>> = {
  intro: Introduction,
  history: History,
  chairperson: MessageFromChairperson,
  board: BoardOfMembers,
  management: ManagementTeam,
};

export const AboutPage: React.FC<AboutPageProps> = ({ language, subTab, setActiveTab }) => {
  const activeSection = isAboutSection(subTab) ? subTab : 'intro';
  const ActiveSection = sectionComponents[activeSection];
  const activeSectionMeta = aboutSections.find((section) => section.id === activeSection) ?? aboutSections[0];

  return (
    <div className="w-full bg-slate-50 text-left">
      <section className="bg-emerald-950 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-100">
            <Building2 className="h-3.5 w-3.5" />
            {text(language, introContent.eyebrow)}
          </div>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {text(language, activeSectionMeta.title)}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-emerald-50 sm:text-lg">
            {text(language, activeSectionMeta.description)}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[240px_1fr] lg:px-8">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex gap-2 overflow-x-auto border-b border-slate-200 pb-3 lg:block lg:space-y-2 lg:overflow-visible lg:border-b-0 lg:pb-0">
          {aboutSections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id || (!activeSection && section.id === 'intro');
            return (
              <button
                type="button"
                key={section.id}
                onClick={() => setActiveTab('about', section.id)}
                className={`flex min-w-44 items-center gap-3 rounded-lg border p-3 text-left transition lg:min-w-0 lg:w-full ${
                  isActive
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:bg-slate-50'
                }`}
              >
                <Icon className="h-5 w-5 shrink-0 text-emerald-700" />
                <div className="min-w-0">
                  <div className="text-sm font-bold">{text(language, section.shortTitle)}</div>
                  <div className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                    {text(language, section.description)}
                  </div>
                </div>
              </button>
            );
          })}
          </div>
        </aside>

        <div className="min-w-0">
          <ActiveSection language={language} />
        </div>
      </div>
    </div>
  );
};
