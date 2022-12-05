const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/compile.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'allutils.js'
  }
};

module.exports = config;