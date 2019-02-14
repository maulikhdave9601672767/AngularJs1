(function(angular) {
    'use strict';
    angular.module('onvio.accounts').config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            //templateUrl: 'components/projects/wp-projects.2js.html',
            template: '<h3>About Us</h3>',
            //controller: 'ProjectsCtrl as vm',
            //  resolve: {
            //      translationLoaded: ['project', function(project) {
            //          return project.getJournal();
            //      }]
            //  }
        });
    }]);
  })(window.angular);