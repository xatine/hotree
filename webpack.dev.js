const path = require('path');
const merge = require('webpack-merge');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const common = require('./webpack.common.js');
const analyzer = require('webpack-bundle-analyzer');

const { BundleAnalyzerPlugin } = analyzer;

module.exports = merge(common, {
  output: {
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new ErrorOverlayPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
});
