'use strict';

/**
 * @ngdoc function
 * @name senseupClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the senseupClientApp
 */
angular.module('senseupClientApp')
  .controller('MainCtrl',['$scope', 'RESTService', function ($scope, RESTService) {

    RESTService.getSensors().then(
      function(sensors) {
        console.log(sensors);
        $scope.sensors = sensors;
      },
      function(e) {
        console.log(e);
      }
    );

  }]


);
