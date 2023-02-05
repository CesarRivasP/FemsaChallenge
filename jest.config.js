module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '@testing-library/jest-dom/extend-expect',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|expo' +
      '|expo-font' +
      '|@react-native(-community)' +
      '|@react-navigation' +
      '|@react-navigation/native' +
      '|@react-navigation/native-stack' +
      '|@react-navigation/stack' +
      '|expo-splash-screen' +
      '|expo-status-bar' +
      '|react-native-reanimated' +
      '|react-native-screens' +
      '|react-native-gesture-handler' +
      '|react-native-config' +
      '|react-i18next' +
      '|@react-native(-community)' +
      '|react-native-safe-area-context' +
      ')/?)',
  ],
};
