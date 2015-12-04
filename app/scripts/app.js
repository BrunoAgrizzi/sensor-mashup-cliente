'use strict';

/**
 * @ngdoc overview
 * @name senseupClientApp
 * @description
 * # senseupClientApp
 *
 * Main module of the application.
 */
angular
  .module('senseupClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/sensors.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sensor/:sensorToken', {
        templateUrl: 'views/sensor.html',
        controller: 'SensorCtrl',
        controllerAs: 'sensor'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
