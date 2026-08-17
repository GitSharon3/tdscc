import React from 'react';
import type { Language, Person } from './aboutContent';
import { text } from './aboutContent';
import { ProfilePhoto } from './ProfilePhoto';

interface PersonCardProps {
  language: Language;
  person: Person;
  featured?: boolean;
  showProfile?: boolean;
  photoClassName?: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({
  language,
  person,
  featured = false,
  showProfile = true,
  photoClassName = 'h-24 w-24 sm:h-28 sm:w-28',
}) => (
  <article
    className={`group flex h-full min-w-0 flex-col items-center rounded-lg border bg-white p-4 text-center shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${
      featured ? 'border-amber-200 ring-1 ring-amber-100' : 'border-slate-200'
    }`}
  >
    <ProfilePhoto
      language={language}
      name={person.name}
      role={person.role}
      photoSrc={person.photoSrc}
      featured={featured}
      className={photoClassName}
    />

    <div className="mt-4 min-w-0">
      <h3 className="text-base font-bold leading-snug text-slate-950 sm:text-lg">{text(language, person.name)}</h3>
      <p className="mt-1 text-sm font-bold text-emerald-700">{text(language, person.role)}</p>
      {showProfile && <p className="mt-3 text-sm leading-6 text-slate-600">{text(language, person.profile)}</p>}
    </div>
  </article>
);
