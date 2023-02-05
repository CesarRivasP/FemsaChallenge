import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import resources from '@localization';

i18next.use(initReactI18next).init({
  lng: 'es',
  compatibilityJSON: 'v3',
  fallbackLng: 'es',
  resources: {
    es: resources,
  },
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});
