'use client';

import Image from "next/image";
import { FaCalculator, FaStar, FaQuoteLeft, FaChevronDown, FaGlobe } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { initCursorEffects } from './cursor-effects';
import { translations } from './translations';

type Language = 'en' | 'hi';

export default function Home() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const cleanup = initCursorEffects();
    return () => {
      cleanup();
    };
  }, []);

  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <main className="min-h-screen bg-background" lang={lang}>
      {/* Language Switcher */}
      <button 
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 bg-light/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label={lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
      >
        <FaGlobe className="text-2xl text-primary group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Hero Header */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/50">
          <Image
            src="/images/img2.jpg"
            alt="Aryabhata background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="ancient-heading text-light mb-6 interactive bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent bg-300% animate-gradient font-devanagari">
            {t.title}
          </h1>
          <h2 className="text-3xl md:text-4xl text-light mb-4 animate-slide-up font-devanagari">
            {t.title}
          </h2>
          <p className="text-light/90 text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in font-devanagari">
            {t.subtitle}
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaChevronDown className="text-light text-3xl" />
        </div>
      </div>

      {/* Introduction Section */}
      <section className="relative py-24 bg-gradient-to-b from-background to-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="ancient-subheading text-4xl md:text-5xl mb-8 font-devanagari">
                {t.intro.heading}
              </h2>
              <p className="ancient-text text-lg md:text-xl font-devanagari">
                {t.intro.paragraph1}
              </p>
              <p className="ancient-text text-lg md:text-xl font-devanagari">
                {t.intro.paragraph2}
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/image.png"
                alt="Ancient manuscript of Aryabhatiya"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="relative py-24 bg-gradient-to-b from-light to-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="ancient-subheading text-center mb-16 font-devanagari">{t.contributions.heading}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="contribution-card interactive backdrop-blur-sm bg-light/80">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-full bg-primary/10">
                  <FaCalculator className="text-primary text-3xl icon" />
                </div>
                <h3 className="text-2xl font-bold text-dark font-devanagari">{t.contributions.mathematics.title}</h3>
              </div>
              <ul className="space-y-6">
                {t.contributions.mathematics.items.map((item, index) => (
                  <li key={index} className="ancient-text flex items-start gap-4 group">
                    <span className="text-accent text-2xl animate-pulse-soft">•</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 font-devanagari">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contribution-card interactive backdrop-blur-sm bg-light/80">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-full bg-primary/10">
                  <FaStar className="text-primary text-3xl icon" />
                </div>
                <h3 className="text-2xl font-bold text-dark font-devanagari">{t.contributions.astronomy.title}</h3>
              </div>
              <ul className="space-y-6">
                {t.contributions.astronomy.items.map((item, index) => (
                  <li key={index} className="ancient-text flex items-start gap-4 group">
                    <span className="text-accent text-2xl animate-pulse-soft">•</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 font-devanagari">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="quote-card interactive backdrop-blur-md bg-light/5">
            <div className="flex justify-center mb-8">
              <FaQuoteLeft className="text-accent text-5xl animate-glow" />
            </div>
            <blockquote className="text-2xl md:text-3xl italic text-center px-8 py-4 font-devanagari">
              {t.quote.text}
              <footer className="mt-8 text-light/80 text-xl font-devanagari">
                {t.quote.attribution}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
