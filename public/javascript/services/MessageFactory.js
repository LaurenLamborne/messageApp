angular.module('MessageApp').factory("MessageFactory", function($http, $q, $rootScope) {
  var item = {};
  // var messages = [];
  item.saveMessage = function(c) {
    var q = $q.defer();
    $http.post('https://glowing-torch-7459.firebaseio.com/.json', c).success(function() {
      q.resolve();
    });
    return q.promise;

  };

  item.getMessages = function() {
  var q = $q.defer();
  $http.get('https://glowing-torch-7459.firebaseio.com/.json').success(function(res){
    var messages = [];
    for(var prop in res) {
      res[prop]._id = prop;
      messages.push(res[prop]);
    }
    q.resolve(messages);
  });
  return q.promise;
  // return item.getMessages;
};


return item;
});
