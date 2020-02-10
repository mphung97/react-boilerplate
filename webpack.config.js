/* eslint-disable */
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');

// 'env' will contain the environment variable from 'scripts'
// section in 'package.json'.
// console.log(env); => { env: 'dev' }
module.exports = (env, argv) => {
  let config;
  if (argv.mode === 'production') {
    config = require('./webpack.prod');
  } else {
    config = require('./webpack.dev');
  }

  const merged = webpackMerge(
    common,
    config,
  );

  // Then return the final configuration for Webpack
  return merged;
};
