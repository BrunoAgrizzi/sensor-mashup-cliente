'use strict';

/**
 * @ngdoc service
 * @name senseupClientApp.RESTService
 * @description
 * # RESTService
 * Service in the senseupClientApp.
 */
angular.module('senseupClientApp')
  .service('RESTService', function ($q, $http) {

    return {
      getSensors: function() {
        var deferred = $q.defer();

        $http.get('http://localhost/sensor').then(
          function(response) {
            deferred.resolve(response.data);
          },
          function(e) {
            deferred.reject(e);
          }
        );
        return deferred.promise;
      },

      getSensor: function(sensorToken) {
        var deferred = $q.defer();

        $http.get('http://localhost/sensor/' + sensorToken).then(
          function(response) {
            deferred.resolve(response.data);
          },
          function(e) {
            deferred.reject(e);
          }
        );
        return deferred.promise;
      }

    };


    // AngularJS will instantiate a singleton by calling "new" on this function
  });
