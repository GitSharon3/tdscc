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
      <div className="w-full max-w-sm sm:max-w-md">
        <PersonCard language={language} person={boardMembers[0]} featured photoClassName="h-28 w-28 sm:h-32 sm:w-32" />
      </div>
    </div>

    <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
      {boardMembers.slice(1).map((member) => (
        <PersonCard key={member.name.en} language={language} person={member} photoClassName="h-24 w-24 sm:h-28 sm:w-28" />
      ))}
    </div>
  </section>
);
