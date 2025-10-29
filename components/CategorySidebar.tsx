
import type React from 'react';
import type { Category as CategoryType, Language } from '../types';
import { getTranslation } from '../i18n';

interface CategorySidebarProps {
  categories: CategoryType[];
  selectedCategory: CategoryType | null;
  onSelectCategory: (category: CategoryType) => void;
  language: Language;
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({ categories, selectedCategory, onSelectCategory, language }) => {
  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
      <div className="md:sticky md:top-16">
        <nav className="p-4 md:h-[calc(100vh-4rem)] md:overflow-y-auto">
          {/* Horizontal scroll on mobile */}
          <div className="flex space-x-2 md:space-x-0 md:flex-col md:space-y-1 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4">
            {categories.map((category) => {
              const isSelected = selectedCategory?.id === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => onSelectCategory(category)}
                  className={`flex items-center gap-3 w-full min-w-max md:min-w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    isSelected
                      ? 'bg-accent text-white shadow-md'
                      : 'text-opm-dark/80 dark:text-opm-cape-white/80 hover:bg-opm-yellow/20 dark:hover:bg-opm-yellow/10'
                  }`}
                >
                  <category.icon className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-sm">{getTranslation(category.name, language)}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
};