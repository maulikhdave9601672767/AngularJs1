(function(angular) {
    'use strict';
    angular.module('onvio.accounts').config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('MasterView.Projects', {
            url: '/projects',
            templateUrl: 'component/Master/project/project.html',
            //controller: 'ProjectsCtrl as vm',
           
        });
    }]);
})(window.angular);
