import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import resources from '@localization/index';
import ENV from '@config/envs';

i18next.use(initReactI18next).init({
  lng: 'es',
  compatibilityJSON: 'v3',
  fallbackLng: 'es',
  resources: {
    es: resources,
  },
  debug: ENV.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
});
