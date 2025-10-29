
import type { Language, Translation } from './types';

export const translations = {
    appName: { ru: "OnePunchConvert", en: "OnePunchConvert" },
    appSlogan: { ru: "Единый Конвертер для Всего", en: "The Universal Converter for Everything" },
    appDescription: { ru: "Мощный и элегантный инструмент для мгновенного преобразования тысяч единиц из сотен категорий. От буровой установки до вашей кухни — все в одном месте.", en: "A powerful and elegant tool for instantly converting thousands of units across hundreds of categories. From the drilling rig to your kitchen—everything in one place." },
    getStarted: { ru: "Начать", en: "Get Started" },
    searchPlaceholder: { ru: "Поиск по категориям...", en: "Search categories..." },
    selectCategory: { ru: "Выберите категорию", en: "Select a Category" },
    selectSubCategory: { ru: "Выберите подкатегорию", en: "Select a Subcategory" },
    swapUnits: { ru: "Поменять местами", en: "Swap Units" },
    inputValue: { ru: "Введите значение", en: "Enter value" },
    selectUnit: { ru: "Выберите единицу", en: "Select a unit" },
    noCategorySelected: { ru: "Пожалуйста, выберите категорию из списка слева, чтобы начать.", en: "Please select a category from the list on the left to begin." },
    ingredient: { ru: "Ингредиент", en: "Ingredient" },
    convert: { ru: "Перевести", en: "Convert" },
};

export function t(key: keyof typeof translations, lang: Language): string {
    return translations[key][lang];
}

export function getTranslation(translatable: Translation, lang: Language): string {
    return translatable[lang];
}