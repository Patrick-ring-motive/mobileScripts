const webpack = require('webpack');
const path = require('path');



var config = {
  // TODO: Add common Configuration
  module: {},
};

var allutilsConfig = Object.assign({}, config, {
  name: "allutils",
  entry: "./src/compile.js",
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'allutils.js'
  },
});
var werkConfig = Object.assign({}, config, {
  name: "werk",
  entry: "./public/userScripts/werk/compile.js",
  output: {
    path: path.resolve(__dirname, 'public/userScripts/werk'),
    filename: "werkCompiled.js"
  },
});

// Return Array of Configurations
module.exports = [
  allutilsConfig, werkConfig,
];