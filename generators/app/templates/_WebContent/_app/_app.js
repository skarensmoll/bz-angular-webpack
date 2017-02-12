require('./dependencies.js');
var appConfiguration;
var appModules = [
  'ngCookies',
  'ui.bootstrap',
  'pascalprecht.translate',
  'ngRoute',
  'i18nModule',
  'commonDirectivesModule',
  'mainModule',
  'firstComponentModule',
  'ngMaterial'
];

appConfiguration = appConfigurations.productionConfiguration;

angular.module('helloworldApp', appModules, appConfiguration).config(['$mdThemingProvider', function ($mdThemingProvider) {
  //https://material.angularjs.org/latest/Theming/01_introduction
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('teal');
}]);
angular.bootstrap(document, ['helloworldApp']);
