import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import banner1 from '../../assets/logos/banner1.png';
import banner2 from '../../assets/logos/banner2.png';
import banner3 from '../../assets/logos/banner3.png';
import banner4 from '../../assets/logos/banner4.png';
import { type Language } from './homeContent';

interface TopBannerProps {
  language: Language;
  setActiveTab: (tab: string, sub?: string) => void;
}

const BANNER_AUTO_SCROLL_INTERVAL = 5000;

export const TopBanner: React.FC<TopBannerProps> = ({ language, setActiveTab }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const isNe = language === 'ne';

  const slides = useMemo(
    () => [
      { image: banner1, alt: isNe ? 'टिडिएससिसी ब्यानर १' : 'TDSCC banner 1' },
      { image: banner2, alt: isNe ? 'टिडिएससिसी ब्यानर २' : 'TDSCC banner 2' },
      { image: banner3, alt: isNe ? 'टिडिएससिसी ब्यानर ३' : 'TDSCC banner 3' },
      { image: banner4, alt: isNe ? 'टिडिएससिसी ब्यानर ४' : 'TDSCC banner 4' },
    ],
    [isNe],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, BANNER_AUTO_SCROLL_INTERVAL);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-emerald-900">
      <div className="relative min-h-[460px] sm:min-h-[390px] md:min-h-[420px] lg:min-h-[460px]">
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 sm:object-[center_45%] ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-emerald-800/60 to-emerald-900/80 sm:bg-gradient-to-r sm:from-emerald-900/90 sm:via-emerald-800/50 sm:to-emerald-900/5" />

        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-8 pb-16 sm:min-h-[390px] sm:px-6 sm:py-10 md:min-h-[420px] lg:min-h-[460px] lg:px-8">
          <div className="w-full max-w-xl text-left text-white">
            <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-md border border-amber-400/40 bg-emerald-900/50 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-50 backdrop-blur-sm sm:px-3 sm:text-xs">
              <ShieldCheck className="h-4 w-4 shrink-0 text-amber-400" />
              <span className="truncate whitespace-nowrap">{isNe ? 'सुरक्षित बचत, सरल कर्जा' : 'Secure Savings, Simple Credit'}</span>
            </div>

            <h1 className="max-w-xl text-[1.65rem] font-bold leading-[1.12] text-white sm:text-4xl lg:text-5xl">
              {isNe ? 'सदस्यहरूको समृद्धिका लागि भरोसायोग्य वित्तीय सहकारी' : 'A trusted financial cooperative for member prosperity'}
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-6 text-emerald-50 sm:text-base sm:leading-7">
              {isNe
                ? 'टुरिजम डेभलपमेन्ट सेभिङ्ग एण्ड क्रेडिट को-अपरेटिभ लि. ले बचत, कर्जा, रेमिट्यान्स तथा सदस्य-मैत्री सेवा एकै स्थानबाट उपलब्ध गराउँछ।'
                : 'Tourism Development Saving & Credit Cooperative Ltd. offers deposits, loans, remittance and member-focused service from the heart of Kathmandu.'}
            </p>

            <div className="mt-5 grid gap-3 sm:flex sm:flex-row">
              <button
                onClick={() => setActiveTab('deposits')}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-amber-500"
              >
                <span>{isNe ? 'सेवा हेर्नुहोस्' : 'Explore Services'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/40 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                {isNe ? 'सम्पर्क गर्नुहोस्' : 'Contact Us'}
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => goToSlide(activeSlide - 1)}
          className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/30 bg-emerald-900/60 text-white transition hover:bg-emerald-900 sm:flex"
          aria-label={isNe ? 'अघिल्लो ब्यानर' : 'Previous banner'}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goToSlide(activeSlide + 1)}
          className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/30 bg-emerald-900/60 text-white transition hover:bg-emerald-900 sm:flex"
          aria-label={isNe ? 'अर्को ब्यानर' : 'Next banner'}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all ${
                index === activeSlide ? 'h-2.5 w-8 bg-amber-400' : 'h-2.5 w-2.5 bg-white/70 hover:bg-white'
              }`}
              aria-label={`${isNe ? 'ब्यानर' : 'Banner'} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
