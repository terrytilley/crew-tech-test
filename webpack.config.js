const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
};
