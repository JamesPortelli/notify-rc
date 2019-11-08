'use strict';

module.exports = function({ config, mode }) {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: mode === 'PRODUCTION',
          onlyCompileBundledFiles: true
        }
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
