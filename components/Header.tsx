
import type React from 'react';
import type { Language, Theme } from '../types';
import { t } from '../i18n';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    theme: Theme;
    setTheme: (theme: Theme) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, theme, setTheme, searchTerm, setSearchTerm }) => {
    return (
        <header className="bg-opm-white/80 dark:bg-opm-dark-component/80 backdrop-blur-lg sticky top-0 z-20 w-full border-b border-opm-dark/10 dark:border-opm-cape-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                         <div className="flex-shrink-0 text-2xl font-bold text-accent">
                            {t('appName', language)}
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">{t('searchPlaceholder', language)}</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    className="block w-full pl-10 pr-3 py-2 border border-opm-dark/20 dark:border-opm-cape-white/20 rounded-md leading-5 bg-opm-white dark:bg-opm-dark-component placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-accent focus:border-accent sm:text-sm"
                                    placeholder={t('searchPlaceholder', language)}
                                    type="search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <LanguageSelector language={language} setLanguage={setLanguage} />
                        <ThemeToggle theme={theme} setTheme={setTheme} />
                    </div>
                </div>
            </div>
        </header>
    );
};