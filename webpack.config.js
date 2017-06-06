const path = require('path');

module.exports = {
  entry: {
    _I_1_RandomWalk: './src/js/_I_1_RandomWalk.js',
  },

  output: {
    path: path.join(__dirname, 'docs/js'),
    filename: '[name].js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['env'],
        },
      }],
    }],
  },
};
