import React from 'react';
import { AboutUs } from '../features/home/AboutUs';
import { ChairpersonMessage } from '../features/home/ChairpersonMessage';
import { Contact } from '../features/home/Contact';
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
      <AboutUs language={language} />
      <QuickServices language={language} setActiveTab={setActiveTab} />
      <NewsNoticeEvents language={language} setActiveTab={setActiveTab} />
      <ChairpersonMessage language={language} setActiveTab={setActiveTab} />
      <Contact language={language} />
    </div>
  );
};
