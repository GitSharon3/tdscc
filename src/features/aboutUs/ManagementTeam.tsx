import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import { AboutSectionHeader } from './AboutSectionHeader';
import { PersonCard } from './PersonCard';
import { managementMembers, type Language } from './aboutContent';

interface ManagementTeamProps {
  language: Language;
}

export const ManagementTeam: React.FC<ManagementTeamProps> = ({ language }) => (
  <section id="about-management" className="scroll-mt-24">
    <AboutSectionHeader
      language={language}
      eyebrow={{ en: 'Executive Management Team', ne: 'कार्यकारी व्यवस्थापन टोली' }}
      title={{ en: 'Professionals behind daily service delivery', ne: 'दैनिक सेवा प्रवाहका पेशेवरहरू' }}
      description={{
        en: 'The management team works across financial administration, accounting, lending, customer service and marketing to provide efficient and responsive service.',
        ne: 'व्यवस्थापन टोलीले वित्तीय प्रशासन, लेखा, कर्जा, ग्राहक सेवा र मार्केटिङ क्षेत्रमा काम गर्दै प्रभावकारी र उत्तरदायी सेवा प्रदान गर्छ।',
      }}
      icon={BriefcaseBusiness}
    />

    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {managementMembers.map((member) => (
        <PersonCard key={member.name.en} language={language} person={member} showProfile={false} />
      ))}
    </div>
  </section>
);
