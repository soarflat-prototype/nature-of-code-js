const path = require('path');

module.exports = {
  entry: {
    _C1_7_Motion101: './src/js/_C1_7_Motion101',
    _C1_8_Motion101Acceleration: './src/js/_C1_8_Motion101Acceleration',
    _C1_9_Motion101Acceleration2: './src/js/_C1_9_Motion101Acceleration2',
    _C1_10_Motion101Acceleration: './src/js/_C1_10_Motion101Acceleration',
    _C1_11_Motion101AccelerationArray: './src/js/_C1_11_Motion101AccelerationArray',
    _C2_1_ForcesTrail: './src/js/_C2_1_ForcesTrail',
    _C2_2_ForcesManyTrail: './src/js/_C2_2_ForcesManyTrail',
    _C2_3_ForcesManyRealGravity: './src/js/_C2_3_ForcesManyRealGravity',
    _C2_4_ForcesFriction: './src/js/_C2_4_ForcesFriction',
    _C2_5_FluidResistance: './src/js/_C2_5_FluidResistance.js',
    _C2_6_AttractionTrail: './src/js/_C2_6_AttractionTrail.js',
    _C2_7_AttractionMany: './src/js/_C2_7_AttractionMany.js',
    _C2_8_MutualAttractionTrail: './src/js/_C2_8_MutualAttractionTrail.js',
    _C3_1_AngularMotion: './src/js/_C3_1_AngularMotion.js',
    _C3_2_ForcesAngularMotTrails: './src/js/_C3_2_ForcesAngularMotTrails.js',
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
