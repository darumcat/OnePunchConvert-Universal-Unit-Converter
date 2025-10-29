import type React from 'react';

export const RulerIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-length.png" 
    alt="Length" 
    className={className}
  />
);

export const ScaleIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-weight.png" 
    alt="Weight" 
    className={className}
  />
);

export const BeakerIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-volume.png" 
    alt="Volume" 
    className={className}
  />
);

export const ThermometerIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-temperature.png" 
    alt="Temperature" 
    className={className}
  />
);

export const AreaIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-area.png" 
    alt="Area" 
    className={className}
  />
);

export const FastForwardIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-speed.png" 
    alt="Speed" 
    className={className}
  />
);

export const ClockIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-time.png" 
    alt="Time" 
    className={className}
  />
);

export const CloudIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-pressure.png" 
    alt="Pressure" 
    className={className}
  />
);

export const LightningBoltIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-energy.png" 
    alt="Energy" 
    className={className}
  />
);

export const DatabaseIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-data.png" 
    alt="Data" 
    className={className}
  />
);

export const CogIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-drilling.png" 
    alt="Drilling" 
    className={className}
  />
);

export const FireIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-cooking.png" 
    alt="Cooking" 
    className={className}
  />
);

export const ViewGridIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-geometry.png" 
    alt="Geometry" 
    className={className}
  />
);

export const LeafIcon = ({ className = "w-6 h-6" }) => (
  <img 
    src="/assets/saitama-science.png" 
    alt="Science" 
    className={className}
  />
);

// Остальные иконки (системные) оставляем как SVG
export const SunIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const MoonIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const LanguageIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
  </svg>
);

export const ChevronDownIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const SwitchVerticalIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 12L4 9m3 3l3-3m7 12V8m0 8l-3 3m3-3l3-3" />
  </svg>
);

export const PlusIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);