import React from 'react';
import { Users } from 'lucide-react';
import { AboutSectionHeader } from './AboutSectionHeader';
import { PersonCard } from './PersonCard';
import { boardMembers, type Language } from './aboutContent';

interface BoardOfMembersProps {
  language: Language;
}

export const BoardOfMembers: React.FC<BoardOfMembersProps> = ({ language }) => (
  <section id="about-board" className="scroll-mt-24">
    <AboutSectionHeader
      language={language}
      eyebrow={{ en: 'Leadership & Governance', ne: 'नेतृत्व तथा सुशासन' }}
      title={{ en: 'Board of Directors', ne: 'सञ्चालक समिति' }}
      description={{
        en: 'The Board provides strategic leadership for responsible management, sound governance, member-focused services and long-term cooperative development.',
        ne: 'सञ्चालक समितिले जिम्मेवार व्यवस्थापन, सुशासन, सदस्यमुखी सेवा र दीर्घकालीन सहकारी विकासका लागि रणनीतिक नेतृत्व प्रदान गर्छ।',
      }}
      icon={Users}
    />

    <div className="mt-8 flex justify-center">
      <div className="w-full max-w-sm">
        <PersonCard language={language} person={boardMembers[0]} featured />
      </div>
    </div>

    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {boardMembers.slice(1).map((member) => (
        <PersonCard key={member.name.en} language={language} person={member} />
      ))}
    </div>
  </section>
);
