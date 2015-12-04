'use strict';

/**
 * @ngdoc function
 * @name senseupClientApp.controller:SensorCtrl
 * @description
 * # SensorCtrl
 * Controller of the senseupClientApp
 */
angular.module('senseupClientApp')
  .controller('SensorCtrl',['$scope', '$routeParams','RESTService', function ($scope, $routeParams, RESTService) {

    RESTService.getSensor($routeParams.sensorToken).then(
      function(sensor) {
        console.log(sensor);
        $scope.sensor = sensor;
      },
      function(e) {
        console.log(e);
      }
    );

  }]
);
