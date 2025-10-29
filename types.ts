import type React from 'react';

export type Language = 'ru' | 'en';
export type Theme = 'light' | 'dark';

export interface Translation {
  ru: string;
  en: string;
}

export interface Unit {
  id: string;
  name: Translation;
  // FIX: Allow optional density parameter for special conversions.
  toBase: (value: number, density?: number) => number;
  fromBase: (value: number, density?: number) => number;
}

export interface SubCategory {
  id: string;
  name: Translation;
  units: Unit[];
  baseUnit: string;
}

export interface Density {
  id: string;
  name: Translation;
  value: number; // density in g/ml
}

export interface SpecialSubCategory extends SubCategory {
  type: 'weightToVolume';
  densities: Density[];
}

export interface Category {
  id:string;
  name: Translation;
  icon: (props: { className?: string }) => React.ReactElement;
  themeColor: string;
  bgClassName: string;
  subCategories: (SubCategory | SpecialSubCategory)[];
}

export function isSpecialSubCategory(subCategory: SubCategory | SpecialSubCategory | null): subCategory is SpecialSubCategory {
    return !!subCategory && (subCategory as SpecialSubCategory).type !== undefined;
}