angular.module('MessageApp').controller('AddMessageController', function($http, $state, MessageFactory) {
  var vm = this;
  vm.addMessage = {};

  vm.saveMessage = function() {
    MessageFactory.saveMessage(vm.addMessage);
  };
});
