(function(angular) {
    'use strict';
  angular.module('docsTemplateUrlDirective', [])
    .controller('Controller', ['$scope', function($scope) {
      $scope.customer = {
      };
    }])
    .directive('myCustomer', function() {
      return {
        templateUrl: 'carousel.html'
      };
    });
  })(window.angular)