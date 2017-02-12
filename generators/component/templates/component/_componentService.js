var  <%= name %>Module = angular.module('<%= name %>Module');
<%= name %>Module.factory('<%= name %>Service', [
  function () {
    var <%= upperName%> = function () {

    };
    var <%= name %> = new <%= upperName%>();
    return <%= name %>;
  }]);
