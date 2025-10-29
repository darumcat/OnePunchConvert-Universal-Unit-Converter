import type { Category } from './types';
import { 
    RulerIcon, ScaleIcon, BeakerIcon, ThermometerIcon, AreaIcon, FastForwardIcon, 
    ClockIcon, CloudIcon, LightningBoltIcon, DatabaseIcon, CogIcon, FireIcon, ViewGridIcon, LeafIcon 
} from './components/Icons';
import React from 'react';

// More accurate conversion factors
const INCH_TO_METER = 0.0254;
const FOOT_TO_METER = 0.3048; // More precise than 1/3.281
const YARD_TO_METER = 0.9144;
const MILE_TO_METER = 1609.344; // More precise
const NAUTICAL_MILE_TO_METER = 1852;
const AU_TO_METER = 149597870700;
const LIGHT_YEAR_TO_METER = 9.4607304725808e15; // More precise
const PARSEC_TO_METER = 3.085677581491367e16; // More precise

const OUNCE_TO_GRAM = 28.349523125; // More precise
const POUND_TO_GRAM = 453.59237; // More precise
const STONE_TO_GRAM = 6350.29318; // More precise
const TROY_OUNCE_TO_GRAM = 31.1034768; // More precise

const FL_OUNCE_US_TO_LITER = 0.0295735295625; // More precise
const PINT_US_TO_LITER = 0.473176473; // More precise
const QUART_US_TO_LITER = 0.946352946; // More precise
const GALLON_US_TO_LITER = 3.785411784; // More precise
const TSP_US_TO_LITER = 0.00492892159375; // More precise
const TBSP_US_TO_LITER = 0.01478676478125; // More precise
const CUP_US_TO_LITER = 0.2365882365; // More precise

const PSI_TO_PASCAL = 6894.757293168; // More precise
const BAR_TO_PASCAL = 100000;
const ATM_TO_PASCAL = 101325; // Standard atmosphere (not technical)

export const CATEGORIES: Category[] = [
  {
    id: 'length',
    name: { ru: 'Длина / Расстояние', en: 'Length / Distance' },
    icon: (props) => <RulerIcon {...props} />,
    themeColor: '#e21f26',
    bgClassName: 'saitama-length',
    subCategories: [
      { id: 'common_length', name: { ru: 'Основные единицы', en: 'Common Units' }, baseUnit: 'm', units: [
          { id: 'mm', name: { ru: 'Миллиметр', en: 'Millimeter' }, toBase: v => v / 1000, fromBase: v => v * 1000 },
          { id: 'cm', name: { ru: 'Сантиметр', en: 'Centimeter' }, toBase: v => v / 100, fromBase: v => v * 100 },
          { id: 'm', name: { ru: 'Метр', en: 'Meter' }, toBase: v => v, fromBase: v => v },
          { id: 'km', name: { ru: 'Километр', en: 'Kilometer' }, toBase: v => v * 1000, fromBase: v => v / 1000 },
          { id: 'in', name: { ru: 'Дюйм', en: 'Inch' }, toBase: v => v * INCH_TO_METER, fromBase: v => v / INCH_TO_METER },
          { id: 'ft', name: { ru: 'Фут', en: 'Foot' }, toBase: v => v * FOOT_TO_METER, fromBase: v => v / FOOT_TO_METER },
          { id: 'yd', name: { ru: 'Ярд', en: 'Yard' }, toBase: v => v * YARD_TO_METER, fromBase: v => v / YARD_TO_METER },
          { id: 'mi', name: { ru: 'Миля', en: 'Mile' }, toBase: v => v * MILE_TO_METER, fromBase: v => v / MILE_TO_METER },
          { id: 'nmi', name: { ru: 'Морская миля', en: 'Nautical Mile' }, toBase: v => v * NAUTICAL_MILE_TO_METER, fromBase: v => v / NAUTICAL_MILE_TO_METER },
          { id: 'cable', name: { ru: 'Кабельтов', en: 'Cable' }, toBase: v => v * NAUTICAL_MILE_TO_METER / 10, fromBase: v => v * 10 / NAUTICAL_MILE_TO_METER },
          { id: 'au', name: { ru: 'А.Е.', en: 'AU' }, toBase: v => v * AU_TO_METER, fromBase: v => v / AU_TO_METER },
          { id: 'ly', name: { ru: 'Световой год', en: 'Light-year' }, toBase: v => v * LIGHT_YEAR_TO_METER, fromBase: v => v / LIGHT_YEAR_TO_METER },
          { id: 'pc', name: { ru: 'Парсек', en: 'Parsec' }, toBase: v => v * PARSEC_TO_METER, fromBase: v => v / PARSEC_TO_METER },
      ]},
    ],
  },
  {
    id: 'weight',
    name: { ru: 'Вес / Масса', en: 'Weight / Mass' },
    icon: (props) => <ScaleIcon {...props} />,
    themeColor: '#fecf02',
    bgClassName: 'saitama-weight',
    subCategories: [
        { id: 'common_weight', name: { ru: 'Основные единицы', en: 'Common Units' }, baseUnit: 'g', units: [
            { id: 'mg', name: { ru: 'Миллиграмм', en: 'Milligram' }, toBase: v => v / 1000, fromBase: v => v * 1000 },
            { id: 'g', name: { ru: 'Грамм', en: 'Gram' }, toBase: v => v, fromBase: v => v },
            { id: 'kg', name: { ru: 'Килограмм', en: 'Kilogram' }, toBase: v => v * 1000, fromBase: v => v / 1000 },
            { id: 't', name: { ru: 'Тонна', en: 'Tonne' }, toBase: v => v * 1e6, fromBase: v => v / 1e6 },
            { id: 'oz', name: { ru: 'Унция', en: 'Ounce' }, toBase: v => v * OUNCE_TO_GRAM, fromBase: v => v / OUNCE_TO_GRAM },
            { id: 'lb', name: { ru: 'Фунт', en: 'Pound' }, toBase: v => v * POUND_TO_GRAM, fromBase: v => v / POUND_TO_GRAM },
            { id: 'st', name: { ru: 'Стоун', en: 'Stone' }, toBase: v => v * STONE_TO_GRAM, fromBase: v => v / STONE_TO_GRAM },
            { id: 't_oz', name: { ru: 'Тройская унция', en: 'Troy Ounce' }, toBase: v => v * TROY_OUNCE_TO_GRAM, fromBase: v => v / TROY_OUNCE_TO_GRAM },
        ]},
    ],
  },
  {
    id: 'volume',
    name: { ru: 'Объем / Вместимость', en: 'Volume / Capacity' },
    icon: (props) => <BeakerIcon {...props} />,
    themeColor: '#e21f26',
    bgClassName: 'saitama-volume',
    subCategories: [
        { id: 'common_volume', name: { ru: 'Основные единицы', en: 'Common Units' }, baseUnit: 'l', units: [
            { id: 'ml', name: { ru: 'Миллилитр', en: 'Milliliter' }, toBase: v => v / 1000, fromBase: v => v * 1000 },
            { id: 'l', name: { ru: 'Литр', en: 'Liter' }, toBase: v => v, fromBase: v => v },
            { id: 'm3', name: { ru: 'Куб. метр', en: 'Cubic Meter' }, toBase: v => v * 1000, fromBase: v => v / 1000 },
            { id: 'fl_oz', name: { ru: 'Жидкая унция', en: 'Fluid Ounce' }, toBase: v => v * FL_OUNCE_US_TO_LITER, fromBase: v => v / FL_OUNCE_US_TO_LITER },
            { id: 'pt', name: { ru: 'Пинта', en: 'Pint' }, toBase: v => v * PINT_US_TO_LITER, fromBase: v => v / PINT_US_TO_LITER },
            { id: 'qt', name: { ru: 'Кварта', en: 'Quart' }, toBase: v => v * QUART_US_TO_LITER, fromBase: v => v / QUART_US_TO_LITER },
            { id: 'gal', name: { ru: 'Галлон', en: 'Gallon' }, toBase: v => v * GALLON_US_TO_LITER, fromBase: v => v / GALLON_US_TO_LITER },
            { id: 'tsp', name: { ru: 'Чайная ложка', en: 'Teaspoon' }, toBase: v => v * TSP_US_TO_LITER, fromBase: v => v / TSP_US_TO_LITER },
            { id: 'tbsp', name: { ru: 'Столовая ложка', en: 'Tablespoon' }, toBase: v => v * TBSP_US_TO_LITER, fromBase: v => v / TBSP_US_TO_LITER },
            { id: 'cup', name: { ru: 'Чашка', en: 'Cup' }, toBase: v => v * CUP_US_TO_LITER, fromBase: v => v / CUP_US_TO_LITER },
        ]},
    ],
  },
  {
    id: 'temperature',
    name: { ru: 'Температура', en: 'Temperature' },
    icon: (props) => <ThermometerIcon {...props} />,
    themeColor: '#fecf02',
    bgClassName: 'saitama-temperature',
    subCategories: [
        { id: 'common', name: { ru: 'Общие', en: 'Common' }, baseUnit: 'c', units: [
            { id: 'c', name: { ru: 'Цельсий', en: 'Celsius' }, toBase: v => v, fromBase: v => v },
            { id: 'f', name: { ru: 'Фаренгейт', en: 'Fahrenheit' }, toBase: v => (v - 32) * 5/9, fromBase: v => (v * 9/5) + 32 },
            { id: 'k', name: { ru: 'Кельвин', en: 'Kelvin' }, toBase: v => v - 273.15, fromBase: v => v + 273.15 },
        ]},
    ],
  },
  {
    id: 'area',
    name: { ru: 'Площадь', en: 'Area' },
    icon: (props) => <AreaIcon {...props} />,
    themeColor: '#e21f26',
    bgClassName: 'saitama-area',
    subCategories: [
        { id: 'common_area', name: { ru: 'Основные единицы', en: 'Common Units' }, baseUnit: 'm2', units: [
            { id: 'mm2', name: { ru: 'Кв. мм', en: 'Sq. mm' }, toBase: v => v / 1e6, fromBase: v => v * 1e6 },
            { id: 'cm2', name: { ru: 'Кв. см', en: 'Sq. cm' }, toBase: v => v / 10000, fromBase: v => v * 10000 },
            { id: 'm2', name: { ru: 'Кв. м', en: 'Sq. m' }, toBase: v => v, fromBase: v => v },
            { id: 'ha', name: { ru: 'Гектар', en: 'Hectare' }, toBase: v => v * 10000, fromBase: v => v / 10000 },
            { id: 'km2', name: { ru: 'Кв. км', en: 'Sq. km' }, toBase: v => v * 1e6, fromBase: v => v / 1e6 },
            { id: 'in2', name: { ru: 'Кв. дюйм', en: 'Sq. Inch' }, toBase: v => v * 0.00064516, fromBase: v => v / 0.00064516 },
            { id: 'ft2', name: { ru: 'Кв. фут', en: 'Sq. Foot' }, toBase: v => v * 0.09290304, fromBase: v => v / 0.09290304 }, // More precise
            { id: 'acre', name: { ru: 'Акр', en: 'Acre' }, toBase: v => v * 4046.8564224, fromBase: v => v / 4046.8564224 }, // More precise
        ]},
    ],
  },
  {
    id: 'speed',
    name: { ru: 'Скорость', en: 'Speed' },
    icon: (props) => <FastForwardIcon {...props} />,
    themeColor: '#fecf02',
    bgClassName: 'saitama-speed',
    subCategories: [
        { id: 'common', name: { ru: 'Общие', en: 'Common' }, baseUnit: 'ms', units: [
            { id: 'ms', name: { ru: 'Метр/сек', en: 'Meter/sec' }, toBase: v => v, fromBase: v => v },
            { id: 'kmh', name: { ru: 'Км/час', en: 'Km/hour' }, toBase: v => v / 3.6, fromBase: v => v * 3.6 },
            { id: 'mph', name: { ru: 'Миля/час', en: 'Mile/hour' }, toBase: v => v * MILE_TO_METER / 3600, fromBase: v => v / MILE_TO_METER * 3600 }, // More precise
            { id: 'knot', name: { ru: 'Узел', en: 'Knot' }, toBase: v => v * NAUTICAL_MILE_TO_METER / 3600, fromBase: v => v / NAUTICAL_MILE_TO_METER * 3600 }, // More precise
        ]},
    ],
  },
  {
    id: 'time',
    name: { ru: 'Время', en: 'Time' },
    icon: (props) => <ClockIcon {...props} />,
    themeColor: '#e21f26',
    bgClassName: 'saitama-time',
    subCategories: [
        { id: 'common', name: { ru: 'Стандартные', en: 'Standard' }, baseUnit: 's', units: [
            { id: 'ns', name: { ru: 'Наносекунда', en: 'Nanosecond' }, toBase: v => v / 1e9, fromBase: v => v * 1e9 },
            { id: 'ms', name: { ru: 'Миллисекунда', en: 'Millisecond' }, toBase: v => v / 1000, fromBase: v => v * 1000 },
            { id: 's', name: { ru: 'Секунда', en: 'Second' }, toBase: v => v, fromBase: v => v },
            { id: 'min', name: { ru: 'Минута', en: 'Minute' }, toBase: v => v * 60, fromBase: v => v / 60 },
            { id: 'h', name: { ru: 'Час', en: 'Hour' }, toBase: v => v * 3600, fromBase: v => v / 3600 },
            { id: 'd', name: { ru: 'День', en: 'Day' }, toBase: v => v * 86400, fromBase: v => v / 86400 },
        ]},
    ],
  },
  {
    id: 'pressure',
    name: { ru: 'Давление', en: 'Pressure' },
    icon: (props) => <CloudIcon {...props} />,
    themeColor: '#fecf02',
    bgClassName: 'saitama-pressure',
    subCategories: [
        { id: 'common', name: { ru: 'Общие', en: 'Common' }, baseUnit: 'pa', units: [
            { id: 'pa', name: { ru: 'Паскаль', en: 'Pascal' }, toBase: v => v, fromBase: v => v },
            { id: 'kpa', name: { ru: 'Килопаскаль', en: 'Kilopascal' }, toBase: v => v * 1000, fromBase: v => v / 1000 },
            { id: 'psi', name: { ru: 'PSI', en: 'PSI' }, toBase: v => v * PSI_TO_PASCAL, fromBase: v => v / PSI_TO_PASCAL },
            { id: 'bar', name: { ru: 'Бар', en: 'Bar' }, toBase: v => v * BAR_TO_PASCAL, fromBase: v => v / BAR_TO_PASCAL },
            { id: 'atm', name: { ru: 'Атмосфера', en: 'Atmosphere' }, toBase: v => v * ATM_TO_PASCAL, fromBase: v => v / ATM_TO_PASCAL }, // Standard atmosphere
        ]},
    ],
  },
  {
    id: 'energy',
    name: { ru: 'Энергия и Мощность', en: 'Energy & Power' },
    icon: (props) => <LightningBoltIcon {...props} />,
    themeColor: '#e21f26',
    bgClassName: 'saitama-energy',
    subCategories: [
        { id: 'energy', name: { ru: 'Энергия', en: 'Energy' }, baseUnit: 'j', units: [
            { id: 'j', name: { ru: 'Джоуль', en: 'Joule' }, toBase: v => v, fromBase: v => v },
            { id: 'cal', name: { ru: 'Калория', en: 'Calorie' }, toBase: v => v * 4.184, fromBase: v => v / 4.184 },
            { id: 'kcal', name: { ru: 'Килокалория', en: 'Kilocalorie' }, toBase: v => v * 4184, fromBase: v => v / 4184 },
            { id: 'kwh', name: { ru: 'Киловатт-час', en: 'Kilowatt-hour' }, toBase: v => v * 3.6e6, fromBase: v => v / 3.6e6 },
        ]},
        { id: 'power', name: { ru: 'Мощность', en: 'Power' }, baseUnit: 'w', units: [
            { id: 'w', name: { ru: 'Ватт', en: 'Watt' }, toBase: v => v, fromBase: v => v },
            { id: 'hp', name: { ru: 'Л.с. (метр.)', en: 'Horsepower (metric)' }, toBase: v => v * 735.49875, fromBase: v => v / 735.49875 }, // More precise
        ]},
    ],
  },
  {
    id: 'data',
    name: { ru: 'Данные', en: 'Data Storage' },
    icon: (props) => <DatabaseIcon {...props} />,
    themeColor: '#fecf02',
    bgClassName: 'saitama-data',
    subCategories: [
        { id: 'binary', name: { ru: 'Двоичная', en: 'Binary' }, baseUnit: 'b', units: [
            { id: 'b', name: { ru: 'Байт', en: 'Byte' }, toBase: v => v, fromBase: v => v },
            { id: 'kib', name: { ru: 'Кибибайт (KiB)', en: 'Kibibyte (KiB)' }, toBase: v => v * 1024, fromBase: v => v / 1024 },
            { id: 'mib', name: { ru: 'Мебибайт (MiB)', en: 'Mebibyte (MiB)' }, toBase: v => v * Math.pow(1024, 2), fromBase: v => v / Math.pow(1024, 2) },
            { id: 'gib', name: { ru: 'Гибибайт (GiB)', en: 'Gibibyte (GiB)' }, toBase: v => v * Math.pow(1024, 3), fromBase: v => v / Math.pow(1024, 3) },
        ]},
        { id: 'decimal', name: { ru: 'Десятичная', en: 'Decimal' }, baseUnit: 'b', units: [
            { id: 'b', name: { ru: 'Байт', en: 'Byte' }, toBase: v => v, fromBase: v => v },
            { id: 'kb', name: { ru: 'Килобайт (KB)', en: 'Kilobyte (KB)' }, toBase: v => v * 1000, fromBase: v => v / 1000 },
            { id: 'mb', name: { ru: 'Мегабайт (MB)', en: 'Megabyte (MB)' }, toBase: v => v * 1e6, fromBase: v => v / 1e6 },
            { id: 'gb', name: { ru: 'Гигабайт (GB)', en: 'Gigabyte (GB)' }, toBase: v => v * 1e9, fromBase: v => v / 1e9 },
        ]},
    ],
  },
  {
    id: 'drilling',
    name: { ru: 'Бурение и Нефтегаз', en: 'Drilling & Oil/Gas' },
    icon: (props) => <CogIcon {...props} />,
    themeColor: '#e21f26',
    bgClassName: 'saitama-drilling',
    subCategories: [
        { id: 'depth', name: { ru: 'Глубина', en: 'Depth' }, baseUnit: 'm', units: [
            { id: 'm', name: { ru: 'Метр', en: 'Meter' }, toBase: v => v, fromBase: v => v },
            { id: 'ft', name: { ru: 'Фут', en: 'Foot' }, toBase: v => v * FOOT_TO_METER, fromBase: v => v / FOOT_TO_METER },
        ]},
        { id: 'diameter', name: { ru: 'Диаметр', en: 'Diameter' }, baseUnit: 'm', units: [
            { id: 'in', name: { ru: 'Дюйм', en: 'Inch' }, toBase: v => v * INCH_TO_METER, fromBase: v => v / INCH_TO_METER },
            { id: 'mm', name: { ru: 'Миллиметр', en: 'Millimeter' }, toBase: v => v / 1000, fromBase: v => v * 1000 },
        ]},
        { id: 'pressure_drilling', name: { ru: 'Давление', en: 'Pressure' }, baseUnit: 'MPa', units: [
            { id: 'MPa', name: { ru: 'МПа', en: 'MPa' }, toBase: v => v, fromBase: v => v },
            { id: 'psi', name: { ru: 'PSI', en: 'PSI' }, toBase: v => v * 0.00689476, fromBase: v => v / 0.00689476 }, // More precise
            { id: 'bar', name: { ru: 'Бар', en: 'Bar' }, toBase: v => v * 0.1, fromBase: v => v / 0.1 }, // More precise
        ]},
        { id: 'mud_density', name: { ru: 'Плотность раствора', en: 'Mud Density' }, baseUnit: 'g/cm3', units: [
            { id: 'g/cm3', name: { ru: 'г/см³', en: 'g/cm³' }, toBase: v => v, fromBase: v => v },
            { id: 'ppg', name: { ru: 'Фунт/галлон (ppg)', en: 'Pound/gallon (ppg)' }, toBase: v => v / 8.345404, fromBase: v => v * 8.345404 }, // More precise
        ]},
        { id: 'flow_rate', name: { ru: 'Расход раствора', en: 'Mud Flow Rate' }, baseUnit: 'l/s', units: [
            { id: 'l/s', name: { ru: 'Литр/сек', en: 'Liter/sec' }, toBase: v => v, fromBase: v => v },
            { id: 'gpm', name: { ru: 'Галлон/мин', en: 'Gallon/min' }, toBase: v => v * GALLON_US_TO_LITER / 60, fromBase: v => v / GALLON_US_TO_LITER * 60 }, // More precise
        ]},
        { id: 'flow_velocity', name: { ru: 'Скорость потока', en: 'Flow Velocity'}, baseUnit: 'm/s', units: [
            { id: 'm/s', name: { ru: 'Метр/сек', en: 'Meter/sec' }, toBase: v => v, fromBase: v => v},
            { id: 'ft/s', name: { ru: 'Фут/сек', en: 'Foot/sec' }, toBase: v => v * FOOT_TO_METER, fromBase: v => v / FOOT_TO_METER}, // More precise
        ]},
        { id: 'torque', name: { ru: 'Крутящий момент', en: 'Torque' }, baseUnit: 'kNm', units: [
            { id: 'kNm', name: { ru: 'кН·м', en: 'kN·m' }, toBase: v => v, fromBase: v => v },
            { id: 'klbf-ft', name: { ru: 'тыс. фунт-фут', en: 'klbf·ft' }, toBase: v => v * 1.3558179483314, fromBase: v => v / 1.3558179483314 }, // More precise
        ]},
        { id: 'load', name: { ru: 'Нагрузка', en: 'Load' }, baseUnit: 'kN', units: [
            { id: 'kN', name: { ru: 'Килоньютон (кН)', en: 'Kilonewton (kN)' }, toBase: v => v, fromBase: v => v },
            { id: 'ts', name: { ru: 'Тонна-сила (тс)', en: 'Tonne-force (tf)' }, toBase: v => v * 9.80665, fromBase: v => v / 9.80665 },
            { id: 'klbs', name: { ru: 'тыс. фунтов (klbs)', en: 'Kilo-pounds (klbs)' }, toBase: v => v * 4.4482216152605, fromBase: v => v / 4.4482216152605 }, // More precise
        ]},
    ],
  },
  {
    id: 'cooking',
    name: { ru: 'Кухня и Кулинария', en: 'Kitchen & Cooking' },
    icon: (props) => <FireIcon {...props} />,
    themeColor: '#fecf02',
    bgClassName: 'saitama-cooking',
    subCategories: [
        { id: 'oven_temp', name: { ru: 'Температура духовки', en: 'Oven Temperature' }, baseUnit: 'c', units: [
            { id: 'c', name: { ru: 'Цельсий (°C)', en: 'Celsius (°C)' }, toBase: v => v, fromBase: v => v },
            { id: 'f', name: { ru: 'Фаренгейт (°F)', en: 'Fahrenheit (°F)' }, toBase: v => (v - 32) * 5/9, fromBase: v => (v * 9/5) + 32 },
        ]},
        { id: 'cooking_volume', name: { ru: 'Объем', en: 'Volume' }, baseUnit: 'ml', units: [
            { id: 'ml', name: { ru: 'Миллилитр', en: 'Milliliter' }, toBase: v => v, fromBase: v => v },
            { id: 'tsp_us', name: { ru: 'Чайная ложка (США)', en: 'Teaspoon (US)' }, toBase: v => v * TSP_US_TO_LITER * 1000, fromBase: v => v / (TSP_US_TO_LITER * 1000) },
            { id: 'tbsp_us', name: { ru: 'Столовая ложка (США)', en: 'Tablespoon (US)' }, toBase: v => v * TBSP_US_TO_LITER * 1000, fromBase: v => v / (TBSP_US_TO_LITER * 1000) },
            { id: 'cup_us', name: { ru: 'Чашка (США)', en: 'Cup (US)' }, toBase: v => v * CUP_US_TO_LITER * 1000, fromBase: v => v / (CUP_US_TO_LITER * 1000) },
            { id: 'fl_oz_us', name: { ru: 'Жидкая унция (США)', en: 'Fluid Ounce (US)' }, toBase: v => v * FL_OUNCE_US_TO_LITER * 1000, fromBase: v => v / (FL_OUNCE_US_TO_LITER * 1000) },
        ]},
        { id: 'cooking_weight', name: { ru: 'Вес', en: 'Weight' }, baseUnit: 'g', units: [
            { id: 'g', name: { ru: 'Грамм', en: 'Gram' }, toBase: v => v, fromBase: v => v },
            { id: 'oz', name: { ru: 'Унция', en: 'Ounce' }, toBase: v => v * OUNCE_TO_GRAM, fromBase: v => v / OUNCE_TO_GRAM },
            { id: 'lb', name: { ru: 'Фунт', en: 'Pound' }, toBase: v => v * POUND_TO_GRAM, fromBase: v => v / POUND_TO_GRAM },
        ]},
        { 
            id: 'weight_to_volume', 
            type: 'weightToVolume',
            name: { ru: 'Вес в Объем', en: 'Weight to Volume' }, 
            baseUnit: 'g',
            units: [
              { id: 'g', name: { ru: 'Грамм', en: 'Gram' }, toBase: v => v, fromBase: v => v },
              { id: 'ml', name: { ru: 'Миллилитр', en: 'Milliliter' }, toBase: (v, density = 1) => v * density, fromBase: (v, density = 1) => v / density },
              { id: 'cup_us', name: { ru: 'Чашка (США)', en: 'Cup (US)' }, toBase: (v, density = 1) => v * (CUP_US_TO_LITER * 1000) * density, fromBase: (v, density = 1) => v / ((CUP_US_TO_LITER * 1000) * density) },
            ],
            densities: [
              { id: 'water', name: { ru: 'Вода', en: 'Water' }, value: 1.0 },
              { id: 'flour', name: { ru: 'Мука', en: 'Flour' }, value: 0.528 },
              { id: 'sugar', name: { ru: 'Сахар', en: 'Sugar' }, value: 0.845 },
              { id: 'oil', name: { ru: 'Масло', en: 'Oil' }, value: 0.92 },
            ]
        },
    ],
  },
  {
    id: 'geometry',
    name: { ru: 'Углы и Геометрия', en: 'Angles & Geometry' },
    icon: (props) => <ViewGridIcon {...props} />,
    themeColor: '#e21f26',
    bgClassName: 'saitama-geometry',
    subCategories: [
        { id: 'angles', name: { ru: 'Углы', en: 'Angles' }, baseUnit: 'deg', units: [
            { id: 'deg', name: { ru: 'Градус', en: 'Degree' }, toBase: v => v, fromBase: v => v },
            { id: 'rad', name: { ru: 'Радиан', en: 'Radian' }, toBase: v => v * 180 / Math.PI, fromBase: v => v * Math.PI / 180 },
            { id: 'grad', name: { ru: 'Град', en: 'Gradian' }, toBase: v => v * 0.9, fromBase: v => v / 0.9 },
        ]},
    ],
  },
  {
    id: 'science',
    name: { ru: 'Природа и Наука', en: 'Nature & Science' },
    icon: (props) => <LeafIcon {...props} />,
    themeColor: '#fecf02',
    bgClassName: 'saitama-science',
    subCategories: [
        { id: 'radioactivity', name: { ru: 'Радиоактивность', en: 'Radioactivity' }, baseUnit: 'bq', units: [
            { id: 'bq', name: { ru: 'Беккерель', en: 'Becquerel' }, toBase: v => v, fromBase: v => v },
            { id: 'ci', name: { ru: 'Кюри', en: 'Curie' }, toBase: v => v * 3.7e10, fromBase: v => v / 3.7e10 },
        ]},
        { id: 'concentration', name: { ru: 'Концентрация', en: 'Concentration' }, baseUnit: 'ppm', units: [
            { id: 'ppm', name: { ru: 'Частей на миллион (ppm)', en: 'Parts-per-million (ppm)' }, toBase: v => v, fromBase: v => v },
            { id: 'mg/l', name: { ru: 'мг/л', en: 'mg/L' }, toBase: v => v, fromBase: v => v }, // For water, 1 ppm ≈ 1 mg/L
        ]},
    ],
  },
];