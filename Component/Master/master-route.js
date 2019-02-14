(function(angular) {
  'use strict';

  angular.module('onvio.accounts').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      // Always redirect to a default page if route is not valid
      $urlRouterProvider.otherwise('/views/projects');
      $stateProvider.state('MasterView', {
          abstract: true,
          url: '/views',
          // Note: abstract still needs a ui-view for its children to populate.
          templateUrl: 'component/master/master.html',
          controller: 'MasterViewCtrl as vm',
      });
  }]);
})(window.angular);
