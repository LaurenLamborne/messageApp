// angular.module('MessageApp').controller('MainController', function($http, $state, MessageFactory) {
//   var vm = this;
//   vm.addMessage = {};
//
//   vm.getMessages = function() {
//     MessageFactory.getMessages().then(function(messages) {
//     vm.messages = messages;
//
//   });
//
// };
//
//
// vm.getMessages();
//
//   // vm.updateMessages = function() {
//   //   var update = setInterval(vm.getMessages, 5000);
//   // }
// // })
//
//
//   vm.saveMessage = function() {
//     // alert("You are now live streaming Messages! Click 'END' to cancel.")
//      MessageFactory.saveMessage(vm.addMessage).then(function() {
//        vm.addMessage = {};
//      });
//    };
//
//
//   vm.runMessages = function() {
//     MessageFactory.runMessages();
//
//    };
//
//   vm.endMessages = function(){
//     MessageFactory.endMessages();
//
//    };
//
// });
