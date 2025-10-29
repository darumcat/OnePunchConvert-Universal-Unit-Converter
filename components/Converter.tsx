import type React from 'react';
import { useState, useEffect, useCallback } from 'react';
import type { Category, Language, SubCategory, SpecialSubCategory } from '../types';
import { isSpecialSubCategory } from '../types';
import { getTranslation, t } from '../i18n';
import { SwitchVerticalIcon, PlusIcon } from './Icons';

interface ConverterProps {
  category: Category | null;
  language: Language;
}

const formatNumber = (num: number): string => {
    if (isNaN(num) || !isFinite(num)) return '';
    if (num === 0) return '0';
    // Use toPrecision to handle scientific notation for very large/small numbers, then remove trailing zeros.
    return String(parseFloat(num.toPrecision(10)));
};

export const Converter: React.FC<ConverterProps> = ({ category, language }) => {
  const [subCategory, setSubCategory] = useState<SubCategory | SpecialSubCategory | null>(null);
  const [unit1, setUnit1] = useState<string>('');
  const [unit2, setUnit2] = useState<string>('');
  const [inputValue, setInputValue] = useState('1');
  const [lastEdited, setLastEdited] = useState<'from' | 'to'>('from');
  const [ingredient, setIngredient] = useState<string>('');

  const performConversion = useCallback((valStr: string, fromUnitId: string, toUnitId: string, subCat: SubCategory | SpecialSubCategory | null): string => {
    if (!valStr || !fromUnitId || !toUnitId || !subCat) return '';
    
    const val = parseFloat(valStr);
    if (isNaN(val)) return '';
    
    const fromUnit = subCat.units.find(u => u.id === fromUnitId);
    const toUnit = subCat.units.find(u => u.id === toUnitId);

    if (!fromUnit || !toUnit) return '';

    let baseValue;
    if (isSpecialSubCategory(subCat)) {
        const density = subCat.densities.find(d => d.id === ingredient)?.value || 1;
        baseValue = fromUnit.toBase(val, density);
    } else {
        baseValue = fromUnit.toBase(val);
    }
    
    let convertedValue;
    if (isSpecialSubCategory(subCat)) {
        const density = subCat.densities.find(d => d.id === ingredient)?.value || 1;
        convertedValue = toUnit.fromBase(baseValue, density);
    } else {
        convertedValue = toUnit.fromBase(baseValue);
    }

    return formatNumber(convertedValue);
  }, [ingredient]);

  // Effect to reset state when category changes
  useEffect(() => {
    if (category && category.subCategories.length > 0) {
      const firstSub = category.subCategories[0];
      setSubCategory(firstSub);
      setUnit1(firstSub.units[0]?.id || '');
      setUnit2(firstSub.units[1]?.id || firstSub.units[0]?.id || '');
      setInputValue('1');
      setLastEdited('from');
      if (isSpecialSubCategory(firstSub)) {
        setIngredient(firstSub.densities[0]?.id || '');
      } else {
        setIngredient('');
      }
    } else {
      setSubCategory(null);
    }
  }, [category]);

  const value1 = lastEdited === 'from' ? inputValue : performConversion(inputValue, unit2, unit1, subCategory);
  const value2 = lastEdited === 'to' ? inputValue : performConversion(inputValue, unit1, unit2, subCategory);

  const handleValue1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setLastEdited('from');
  };
  
  const handleValue2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setLastEdited('to');
  };

  const handleUnit1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit1(e.target.value);
    // When a unit changes, recalculate from the other input
    setLastEdited('to');
  };
  const handleUnit2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit2(e.target.value);
    // When a unit changes, recalculate from the other input
    setLastEdited('from');
  };

  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSubCat = category?.subCategories.find(sc => sc.id === e.target.value) || null;
    if (newSubCat) {
        setSubCategory(newSubCat);
        setUnit1(newSubCat.units[0]?.id || '');
        setUnit2(newSubCat.units[1]?.id || newSubCat.units[0]?.id || '');
        setInputValue('1');
        setLastEdited('from');
        if (isSpecialSubCategory(newSubCat)) {
            setIngredient(newSubCat.densities[0]?.id || '');
        } else {
            setIngredient('');
        }
    }
  };
  
  const handleSwap = () => {
    // Swap units
    setUnit1(unit2);
    setUnit2(unit1);
    
    // Swap values by toggling which input is the source of truth
    if (lastEdited === 'from') {
        setLastEdited('to');
    } else {
        setLastEdited('from');
    }
  };

  if (!category) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="p-8 bg-opm-white dark:bg-opm-dark-component rounded-full mb-4">
            <PlusIcon className="w-16 h-16 text-opm-dark/30 dark:text-opm-cape-white/30" />
        </div>
        <h2 className="text-2xl font-semibold text-opm-dark dark:text-opm-cape-white">{t('selectCategory', language)}</h2>
        <p className="mt-2 text-opm-dark/70 dark:text-opm-cape-white/70 max-w-sm">{t('noCategorySelected', language)}</p>
      </div>
    );
  }

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-opm-dark dark:text-opm-cape-white mb-2">{getTranslation(category.name, language)}</h1>
        
        {category.subCategories.length > 1 && (
            <select
                value={subCategory?.id}
                onChange={handleSubCategoryChange}
                className="w-full md:w-1/2 mt-4 mb-6 p-3 bg-opm-white dark:bg-opm-dark-component border border-opm-dark/20 dark:border-opm-cape-white/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                aria-label={t('selectSubCategory', language)}
            >
                {category.subCategories.map(sc => (
                    <option key={sc.id} value={sc.id}>{getTranslation(sc.name, language)}</option>
                ))}
            </select>
        )}

        {isSpecialSubCategory(subCategory) && (
            <div className="mb-6">
                <label htmlFor="ingredient" className="block text-sm font-medium text-opm-dark/80 dark:text-opm-cape-white/80 mb-2">{t('ingredient', language)}</label>
                <select
                    id="ingredient"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    className="w-full md:w-1/2 p-3 bg-opm-white dark:bg-opm-dark-component border border-opm-dark/20 dark:border-opm-cape-white/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                    {subCategory.densities.map(ing => (
                        <option key={ing.id} value={ing.id}>{getTranslation(ing.name, language)}</option>
                    ))}
                </select>
            </div>
        )}

        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Input Block 1 */}
          <div className="w-full p-4 bg-opm-white dark:bg-opm-dark-component rounded-xl shadow-md space-y-2">
            <select value={unit1} onChange={handleUnit1Change} className="w-full p-2 bg-opm-cape-white dark:bg-opm-dark border-transparent rounded-md focus:ring-2 focus:ring-accent" aria-label={t('selectUnit', language)}>
              {subCategory?.units.map(u => <option key={u.id} value={u.id}>{getTranslation(u.name, language)}</option>)}
            </select>
            <input type="number" value={value1 || ''} onChange={handleValue1Change} placeholder={t('inputValue', language)} className="w-full text-4xl font-bold bg-transparent focus:outline-none text-opm-dark dark:text-opm-cape-white" />
          </div>

          <button onClick={handleSwap} className="p-3 rounded-full bg-opm-cape-white dark:bg-opm-dark-component text-opm-dark/70 dark:text-opm-cape-white/70 hover:bg-accent hover:text-white transition-colors" aria-label={t('swapUnits', language)}>
            <SwitchVerticalIcon className="w-6 h-6" />
          </button>
          
          {/* Input Block 2 */}
          <div className="w-full p-4 bg-opm-white dark:bg-opm-dark-component rounded-xl shadow-md space-y-2">
            <select value={unit2} onChange={handleUnit2Change} className="w-full p-2 bg-opm-cape-white dark:bg-opm-dark border-transparent rounded-md focus:ring-2 focus:ring-accent" aria-label={t('selectUnit', language)}>
              {subCategory?.units.map(u => <option key={u.id} value={u.id}>{getTranslation(u.name, language)}</option>)}
            </select>
            <input type="number" value={value2 || ''} onChange={handleValue2Change} placeholder="0" className="w-full text-4xl font-bold bg-transparent focus:outline-none text-opm-dark dark:text-opm-cape-white" />
          </div>
        </div>
      </div>
    </main>
  );
};