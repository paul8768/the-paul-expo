module.exports = function (api) {
  api.cache(true);

  const plugins = [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@utils': './src/utils',
          '@resources': './src/resources',
          '@constants': './src/constants',
          '@service': './src/service',
          '@components': './src/components',
          '@navigator': './src/navigator',
          '@containers': './src/containers',
        },
      },
    ],
  ];
  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
