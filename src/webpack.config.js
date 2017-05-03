const path = require('path');
const fs                    = require('fs');
const nodeModulesPath       = path.resolve(__dirname, 'node_modules');
const jsPath                = path.resolve(__dirname, 'app');
const jsBuildPath           = path.resolve(__dirname, './build');

module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, jsPath, 'server.js'),
  output: {
    path: jsBuildPath,
    filename: 'server.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js']
  },
};
