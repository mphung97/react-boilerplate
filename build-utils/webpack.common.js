const paths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: {
    // vendor: './src/index.js'
  },
  output: {
    path: paths.outputPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss', '.css']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
      // cacheGroups: {
      //   styles: {
      //     name: 'styles',
      //     test: /\.(scss|sass|css)$/,
      //     chunks: 'all',
      //     enforce: true
      //   },
      //   vendor: {
      //     chunks: 'initial',
      //     test: 'vendor',
      //     name: 'vendor',
      //     enforce: true
      //   }
      // }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true
      }
    })
  ]
};
module.exports = config;
