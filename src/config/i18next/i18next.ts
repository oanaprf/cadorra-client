import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';

export enum LanguageEnum {
  EN = 'en',
}

const savedLanguage = localStorage.getItem('cadorraLanguage') || LanguageEnum.EN;

i18next.use(initReactI18next).init({
  lng: savedLanguage,
  debug: false,
  resources: {
    en: {
      translation: en,
    },
  },
});

export default i18next;
