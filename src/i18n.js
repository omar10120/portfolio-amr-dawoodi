// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arTranslation from './locales/ar/translation.json';
import enTranslation from './locales/en/translation.json'; // Example for French

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation:  arTranslation },
     en: { translation: enTranslation },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
