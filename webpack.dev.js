const webpack = require('webpack');
const paths = require('./common-paths');

const port = process.env.PORT || 3000;
const config = {
  mode: 'development',
  entry: {
    app: `${paths.appEntry}/index.js`
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    hot: true,
    open: false
  }
};
module.exports = config;