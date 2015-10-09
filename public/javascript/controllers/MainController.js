angular.module('MessageApp').controller('MainController', function($http, $state, MessageFactory, $interval) {
  var vm = this;
  vm.addMessage = {};
  var update;

  vm.getMessages = function(message) {
    MessageFactory.getMessages().then(function(messages) {
      vm.messages = messages;
    });
  };

  vm.getMessages();

  vm.saveMessage = function() {
    MessageFactory.saveMessage(vm.addMessage).then(function() {
      vm.addMessage = {};
    });
  };

  vm.runMessages = function() {
    console.log("run");
    update = $interval(vm.getMessages, 3000);
  };

  vm.endMessages = function() {
    console.log("end")
    $interval.cancel(update);
  };

});
