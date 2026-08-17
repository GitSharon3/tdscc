import React from 'react';
// import { AboutPreview } from '../features/home/AboutPreview';
import { ChairpersonMessage } from '../features/home/ChairpersonMessage';
import { Contact } from '../features/home/Contact';
// import { HomeStats } from '../features/home/HomeStats';
import { NewsNoticeEvents } from '../features/home/NewsNoticeEvents';
import { QuickServices } from '../features/home/QuickServices';
import { TopBanner } from '../features/home/TopBanner';

interface HomePageProps {
  language: 'en' | 'ne';
  setActiveTab: (tab: string, sub?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ language, setActiveTab }) => {
  return (
    <div className="w-full bg-white">
      <TopBanner language={language} setActiveTab={setActiveTab} />
      <QuickServices language={language} setActiveTab={setActiveTab} />
      {/* <AboutPreview language={language} setActiveTab={setActiveTab} /> */}
      {/* <HomeStats language={language} /> */}
      <NewsNoticeEvents language={language} setActiveTab={setActiveTab} />
      <ChairpersonMessage language={language} setActiveTab={setActiveTab} />
      <Contact language={language} />
    </div>
  );
};
