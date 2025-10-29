
import type React from 'react';
import { t } from '../i18n';
import type { Language } from '../types';

interface LandingPageProps {
  onStart: () => void;
  language: Language;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart, language }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-opm-cape-white dark:bg-opm-dark animate-fade-in p-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-opm-red mb-4">
          {t('appName', language)}: {t('appSlogan', language)}
        </h1>
        <p className="text-lg md:text-xl text-opm-dark/80 dark:text-opm-cape-white/80 mb-8">
          {t('appDescription', language)}
        </p>
        <button
          onClick={onStart}
          className="bg-opm-yellow text-opm-dark font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-opm-yellow/90 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          {t('getStarted', language)}
        </button>
      </div>
    </div>
  );
};