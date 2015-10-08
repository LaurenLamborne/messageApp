angular.module('MessageApp').controller("MainController", function($http, MessageFactory) {
  var vm = this;

  vm.getMessages = function() {
    MessageFactory.getMessages().then(function(messages) {
    vm.messages = messages;
  });
};
  vm.getMessages();
})
