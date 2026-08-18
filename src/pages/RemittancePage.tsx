import React from 'react';
import { RemittanceHeader } from '../features/remittance/RemittanceHeader';
import { RemittanceServiceCard } from '../features/remittance/RemittanceServiceCard';
import { RemittanceFacilityCard } from '../features/remittance/RemittanceFacilityCard';
import { IntroductionSection } from '../features/remittance/IntroductionSection';
import { KeyFeatures } from '../features/remittance/KeyFeatures';
import { WhyChooseUs } from '../features/remittance/WhyChooseUs';
import { ForNepaleseAbroad } from '../features/remittance/ForNepaleseAbroad';
import { CommitmentSection } from '../features/remittance/CommitmentSection';
import { remittanceContent, text, type Language } from '../features/remittance/remittanceContent';

interface RemittancePageProps {
  language: Language;
}

export const RemittancePage: React.FC<RemittancePageProps> = ({ language }) => {
  return (
    <div className="w-full bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-5xl mx-auto space-y-8">
        <RemittanceHeader language={language} />

        <IntroductionSection language={language} />

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            {text(language, remittanceContent.partners.title)}
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            {text(language, remittanceContent.partners.description)}
          </p>
          <RemittanceServiceCard language={language} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            {text(language, remittanceContent.facilities.title)}
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            {text(language, remittanceContent.facilities.description)}
          </p>
          <RemittanceFacilityCard language={language} />
        </div>

        <KeyFeatures language={language} />

        <WhyChooseUs language={language} />

        <ForNepaleseAbroad language={language} />

        <CommitmentSection language={language} />
      </div>
    </div>
  );
};
