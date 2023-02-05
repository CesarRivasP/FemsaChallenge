module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'transform-inline-environment-variables',
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
          },
        },
      ],
    ],
  };
};
