const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(__dirname, ' ---->__dirname');
console.log(__filename, '---> __filename');
module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  devtool: false, //'source-map',
  plugins: [
    new HtmlWebpackPlugin({template: path.join( __dirname, 'public/index.html' )}),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ]
  }
};
