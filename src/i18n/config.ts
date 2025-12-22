import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import nl from './locales/nl.json';
import de from './locales/de.json';

export const supportedLanguages = ['en', 'nl', 'de'] as const;
export type Language = typeof supportedLanguages[number];

export const languageNames: Record<Language, string> = {
  en: 'English',
  nl: 'Nederlands',
  de: 'Deutsch'
};

export const defaultLanguage: Language = 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      nl: { translation: nl },
      de: { translation: de }
    },
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
