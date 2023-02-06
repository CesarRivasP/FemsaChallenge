module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      'import-glob',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@app': './src/app',
            '@assets': './assets',
            '@components': './src/app/components',
            '@config': './src/config',
            '@constants': './src/constants',
            '@hooks': './src/app/hooks',
            '@navigation': './src/app/navigation',
            '@screens': './src/app/screens',
            '@services': './src/services',
            '@utils': './src/utils',
            '@localization': './src/localization',
            '@mocks': './__mocks__',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
