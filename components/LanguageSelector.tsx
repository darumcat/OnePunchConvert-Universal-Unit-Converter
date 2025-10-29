import type React from 'react';
import { useState } from 'react';
import type { Language } from '../types';
import { LanguageIcon, ChevronDownIcon } from './Icons';

interface LanguageSelectorProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        aria-label="Select language"
      >
        <LanguageIcon className="w-6 h-6" />
        <span className="font-semibold uppercase">{language}</span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <button
              onClick={() => handleSelect('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-accent text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            >
              English
            </button>
            <button
              onClick={() => handleSelect('ru')}
              className={`block w-full text-left px-4 py-2 text-sm ${language === 'ru' ? 'bg-accent text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            >
              Русский
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
