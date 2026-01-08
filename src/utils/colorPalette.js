const primary = {
  DEFAULT: '#4F46E5', // Indigo-600
  light: '#6366F1', // Indigo-500
  dark: '#4338CA', // Indigo-700
  50: '#EEF2FF',
  100: '#E0E7FF',
  200: '#C7D2FE',
  300: '#A5B4FC',
  400: '#818CF8',
  500: '#6366F1',
  600: '#4F46E5',
  700: '#4338CA',
  800: '#3730A3',
  900: '#312E81',
  950: '#1E1B4B',
};

const secondary = {
  DEFAULT: '#10B981', // Emerald-500 (Used for accents/success)
  light: '#34D399', // Emerald-400
  dark: '#059669', // Emerald-600
  50: '#ECFDF5',
  100: '#D1FAE5',
  200: '#A7F3D0',
  300: '#6EE7B7',
  400: '#34D399',
  500: '#10B981',
  600: '#059669',
  700: '#047857',
  800: '#065F46',
  900: '#064E3B',
  950: '#022C22',
};

const neutral = {
  DEFAULT: '#1F2937', // Gray-800 (Dark text/background)
  light: '#F9FAFB', // Gray-50 (Light background)
  dark: '#111827', // Gray-900 (Very dark background)
  text: '#374151', // Gray-700 (Standard text)
  subtle: '#6B7280', // Gray-500 (Subtle text/icons)
  border: '#E5E7EB', // Gray-200 (Borders)
};

const warning = '#F59E0B'; // Amber-500
const danger = '#EF4444'; // Red-500
const info = '#3B82F6'; // Blue-500

export const colors = {
  primary,
  secondary,
  neutral,
  warning,
  danger,
  info,
};

export const tailwindColors = {
  'primary': primary.DEFAULT,
  'primary-light': primary.light,
  'primary-dark': primary.dark,
  'secondary': secondary.DEFAULT,
  'secondary-light': secondary.light,
  'secondary-dark': secondary.dark,
  'neutral-bg': neutral.light,
  'neutral-text': neutral.text,
  'neutral-subtle': neutral.subtle,
  'neutral-border': neutral.border,
  'warning': warning,
  'danger': danger,
  'info': info,
};

export default colors;