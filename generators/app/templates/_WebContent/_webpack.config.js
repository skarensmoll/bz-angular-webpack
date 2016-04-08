var localDevConfig = require('./webpack-base.config');
var configurationCreator = require('webpack-configuration');
localDevConfig.entry = {
    'helloworld.app': './app/app'
    //'helloworld.appConfig': './app/commons/config/config'
};
localDevConfig.devtool = 'source-map';
module.exports = localDevConfig;
