import 'react-native';
import {jest} from '@jest/globals';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: () => ({top: 100, bottom: 20}),
  SafeAreaProvider: ({style, children}) => {
    const RN = require('react-native');
    return <RN.SafeAreaView style={style}>{children}</RN.SafeAreaView>;
  },
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: string => string,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));
