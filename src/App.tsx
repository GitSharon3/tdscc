import { useState } from 'react';
import { TopBar } from './components/layout/TopBar';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DepositsPage } from './pages/DepositsPage';
import { InterestRatesPage } from './pages/InterestRatesPage';
import { LoansPage } from './pages/LoansPage';
import { RemittancePage } from './pages/RemittancePage';
import { NoticesPage } from './pages/NoticesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/common/ScrollToTop';

function App() {
  const [language, setLanguage] = useState<'en' | 'ne'>('en');
  const [activeTab, setActiveTabState] = useState<string>('home');
  const [activeSubTab, setActiveSubTab] = useState<string | undefined>(undefined);

  const handleSetActiveTab = (tabId: string, subItemId?: string) => {
    setActiveTabState(tabId);
    setActiveSubTab(subItemId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage language={language} setActiveTab={handleSetActiveTab} />;
      case 'about':
        return <AboutPage language={language} subTab={activeSubTab} setActiveTab={handleSetActiveTab} />;
      case 'deposits':
        return <DepositsPage language={language} setActiveTab={handleSetActiveTab} />;
      case 'interest-rates':
        return <InterestRatesPage language={language} />;
      case 'loans':
        return <LoansPage language={language} setActiveTab={handleSetActiveTab} />;
      case 'remittance':
        return <RemittancePage language={language} />;
      case 'notices':
        return <NoticesPage language={language} subTab={activeSubTab} />;
      case 'gallery':
        return <GalleryPage language={language} />;
      case 'contact':
        return <ContactPage language={language} />;
      default:
        return <HomePage language={language} setActiveTab={handleSetActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBF9] flex flex-col font-sans text-slate-800 antialiased w-full">
      {/* SECTION 1 — TOP BRAND HEADER */}
      <TopBar language={language} />

      {/* SECTION 2 — MAIN NAVIGATION */}
      <NavBar
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        language={language}
        setLanguage={setLanguage}
      />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full">
        {renderActivePage()}
      </main>

      {/* FOOTER & UTILITIES */}
      <Footer language={language} setActiveTab={handleSetActiveTab} />
      <ScrollToTop />
    </div>
  );
}

export default App;
