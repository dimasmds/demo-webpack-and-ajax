const WebpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = WebpackMerge.merge(commonConfig, {
  mode: 'production',
});

module.exports = prodConfig;
