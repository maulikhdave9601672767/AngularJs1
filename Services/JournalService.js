(function(angular) {
    'use strict';
    angular.module('onvio.accounts').factory('JournalService',JournalService);
    

    function JournalService() {
        var _journal;
        return {
            loadJournal: loadJournal,
            getJournal: getJournal,
            setJournal: setJournal,
            updateProfitAllocationTransaction: updateProfitAllocationTransaction
        };

        //set the journal
        function setJournal(journal) {
            
        }
        //returns the journal
        function getJournal() {
            alert("getJournal");
        }

        //this method will call an endpoint to load a journal
        //for the given owner id
        function loadJournal() {
            //call to the data service to get the journal
            //after the promise finishes...set the journal
            
        }

        //update the profit allocation transaction
        function updateProfitAllocationTransaction() {
            
        }
    }
})(window.angular);