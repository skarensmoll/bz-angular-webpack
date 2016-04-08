require('./../index.jade');
require('./vendors.js');

require('../app/appConfig.js');

/**
 * Global styles
 * styles of controls should be in each module
 **/
require('../app/styles/css/bootstrap.less');
require('../app/styles/css/bootstrap-theme.less');
require('../app/styles/css/app.less');

/**
 * Internationalization = i18n
 **/
require('../app/i18n/i18nModule.js');
require('../app/i18n/i18nDirective.js');
require('../app/i18n/i18nService.js');

/**
 * firstComponent Module
 **/
require('../app/firstComponent/firstComponentModule.js');
require('../app/firstComponent/firstComponentDirective.js');
require('../app/firstComponent/firstComponent.less');


