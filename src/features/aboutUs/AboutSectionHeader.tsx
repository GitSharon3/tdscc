import React from 'react';
import type { ComponentType } from 'react';
import type { Language, LocalizedText } from './aboutContent';
import { text } from './aboutContent';

interface AboutSectionHeaderProps {
  language: Language;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description?: LocalizedText;
  icon?: ComponentType<{ className?: string }>;
}

export const AboutSectionHeader: React.FC<AboutSectionHeaderProps> = ({
  language,
  eyebrow,
  title,
  description,
  icon: Icon,
}) => (
  <div className="max-w-3xl text-left">
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">
      {Icon && <Icon className="h-3.5 w-3.5" />}
      <span>{text(language, eyebrow)}</span>
    </div>
    <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
      {text(language, title)}
    </h2>
    {description && (
      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
        {text(language, description)}
      </p>
    )}
  </div>
);
