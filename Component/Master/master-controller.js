(function(angular) {
    'use strict';

    angular.module('onvio.accounts').controller('MasterViewCtrl',masterView);
    masterView.$inject = ['JournalService'];
    function masterView(JournalService) {
        /*jshint validthis:true */
        var vm = this;
        vm.isLoaderBusy = false;
        vm.firstName= "Maulik",
        vm.lastName="Parashar"
        //tickmark is clicked
        JournalService.getJournal();
        };
      
})(window.angular);
