const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    publicPath: './',
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'public',
      },
    ]),
  ],
});
