const webpack = require('webpack');
const path = require('path');

const port = process.env.PORT || 4567;

const config = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '/src/index.js'),
  },
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    hot: true,
    open: false,
  },
};
module.exports = config;
