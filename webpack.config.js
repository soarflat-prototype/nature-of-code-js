const path = require('path');

module.exports = {
  entry: {
    _C1_7_Motion101: './src/js/_C1_7_Motion101.js',
    _C1_8_Motion101Acceleration: './src/js/_C1_8_Motion101Acceleration.js'
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
