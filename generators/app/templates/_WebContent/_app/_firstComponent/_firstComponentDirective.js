var firstComponentModule = angular.module('firstComponentModule');
firstComponentModule.controller('FirstComponentController',
  ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.count = 0;
    self.message = "";
    self.showAlert = function () {
      var self = this;
      self.count += 1;
      self.message = $i18n.translate.general_alert + " " + self.count;
    };
  }]);

firstComponentModule.directive('firstComponent', [function () {
  return {
    restrict: 'E',
    scope: {},
    controller: 'FirstComponentController',
    controllerAs: 'ctrl',
    template: require('./firstComponent.html')
  };
}]);
