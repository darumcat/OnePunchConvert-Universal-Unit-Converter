
import React, { useState, useEffect, useMemo } from 'react';
import type { Language, Theme, Category } from './types';
import { LandingPage } from './components/LandingPage';
import { Header } from './components/Header';
import { CategorySidebar } from './components/CategorySidebar';
import { Converter } from './components/Converter';
import { CATEGORIES } from './constants';
import { getTranslation } from './i18n';

function App() {
  const [appState, setAppState] = useState<'landing' | 'converter'>('landing');
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('ru');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  useEffect(() => {
    const root = document.documentElement;
    if (selectedCategory) {
      root.style.setProperty('--accent-color', selectedCategory.themeColor);
    } else {
      root.style.setProperty('--accent-color', '#e21f26'); // Default OPM Red
    }
  }, [selectedCategory]);

  useEffect(() => {
    const cleanupBodyClasses = () => {
        CATEGORIES.forEach(cat => {
            if (cat.bgClassName) {
                document.body.classList.remove(cat.bgClassName);
            }
        });
    };

    if (appState === 'converter' && selectedCategory?.bgClassName) {
        cleanupBodyClasses();
        document.body.classList.add(selectedCategory.bgClassName);
    } else {
        cleanupBodyClasses();
    }
    
    return cleanupBodyClasses;
  }, [selectedCategory, appState]);

  const handleStart = () => {
    setAppState('converter');
    if (CATEGORIES.length > 0) {
      setSelectedCategory(CATEGORIES[0]);
    }
  };

  const filteredCategories = useMemo(() => {
    if (!searchTerm) {
      return CATEGORIES;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return CATEGORIES.filter(category =>
      getTranslation(category.name, language).toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, language]);

  if (appState === 'landing') {
    return <LandingPage onStart={handleStart} language={language} />;
  }

  return (
    <div className="min-h-screen bg-transparent text-opm-dark dark:text-opm-cape-white transition-colors duration-300">
      <Header 
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="flex flex-col md:flex-row">
        <CategorySidebar
          categories={filteredCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          language={language}
        />
        <div className="w-full md:w-px bg-opm-dark/10 dark:bg-opm-cape-white/10 flex-shrink-0"></div>
        <Converter category={selectedCategory} language={language} />
      </div>
    </div>
  );
}

export default App;