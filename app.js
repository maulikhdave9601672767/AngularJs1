(function (angular) {
    'use strict';
    angular.module('onvio.accounts', [ 'ui.router','ngRoute']);
}(window.angular));

// angular.module('onvio.accounts').factory('timestampMarker', [function() {  
//     var timestampMarker = {
//         request: function(config) {
//             config.requestTimestamp = new Date().getTime();
//             return config;
//         },
//         response: function(response) {
//             response.config.responseTimestamp = new Date().getTime();
//             return response;
//         }
//     };
//     return timestampMarker;
// }]);
