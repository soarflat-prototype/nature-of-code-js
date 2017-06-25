const path = require('path');

module.exports = {
  entry: {
    _C1_7_Motion101: './src/js/_C1_7_Motion101',
    _C1_8_Motion101Acceleration: './src/js/_C1_8_Motion101Acceleration',
    _C1_9_Motion101Acceleration2: './src/js/_C1_9_Motion101Acceleration2',
    _C1_10_Motion101Acceleration: './src/js/_C1_10_Motion101Acceleration',
    _C1_11_Motion101AccelerationArray: './src/js/_C1_11_Motion101AccelerationArray',
    'chapter_2/01_ForcesTrail': './src/js/chapter_2/01_ForcesTrail',
    'chapter_2/02_ForcesManyTrail': './src/js/chapter_2/02_ForcesManyTrail',
    'chapter_2/03_ForcesManyRealGravity': './src/js/chapter_2/03_ForcesManyRealGravity',
    'chapter_2/04_ForcesFriction': './src/js/chapter_2/04_ForcesFriction',
    'chapter_2/05_FluidResistance': './src/js/chapter_2/05_FluidResistance',
    'chapter_2/06_AttractionTrail': './src/js/chapter_2/06_AttractionTrail',
    'chapter_2/07_AttractionMany': './src/js/chapter_2/07_AttractionMany',
    'chapter_2/08_MutualAttractionTrail': './src/js/chapter_2/08_MutualAttractionTrail',
    'chapter_3/01_AngularMotion': './src/js/chapter_3/01_AngularMotion',
    'chapter_3/02_ForcesAngularMotTrails': './src/js/chapter_3/02_ForcesAngularMotTrails',
    'chapter_3/03_PointingVelocityTrail': './src/js/chapter_3/03_PointingVelocityTrail',
    'chapter_3/04_PolarToCartesianTrail': './src/js/chapter_3/04_PolarToCartesianTrail',
    'chapter_3/05_SimpleHarmonicMotTail': './src/js/chapter_3/05_SimpleHarmonicMotTail',
    'chapter_3/06_SimpleHarmonicMotTail2': './src/js/chapter_3/06_SimpleHarmonicMotTail2',
    'chapter_3/07_OscillatingObjectsTrail': './src/js/chapter_3/07_OscillatingObjectsTrail',
    'chapter_3/08_StaticWaveLines': './src/js/chapter_3/08_StaticWaveLines',
    'chapter_3/09_Wave': './src/js/chapter_3/09_Wave',
    'chapter_3/10_PendulumExampleSimplified': './src/js/chapter_3/10_PendulumExampleSimplified',
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
          presets: ['env'],
        },
      }],
    }],
  },
};
