const WebpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig  = WebpackMerge.merge(commonConfig, {
  mode: 'development',
});

module.exports = devConfig;
