angular.module('MessageApp').factory("MessageFactory", function($http, $q, $interval) {
  var item = {};
  var messages = [];
  var update;

  item.saveMessage = function(c) {
    var q = $q.defer();
    $http.post('https://glowing-torch-7459.firebaseio.com/.json', c).success(function(res) {
      var uselessTemp = {};
      uselessTemp[res.name] = c;
      messages.push(uselessTemp);
      q.resolve(item.getMessages());
    });
    return q.promise;
  };

  item.getMessages = function(messages){
    var q = $q.defer();
    $http.get('https://glowing-torch-7459.firebaseio.com/.json').success(function(res){
      var messages = [];
      for(var prop in res) {
        res[prop]._id = prop;
        messages.push(res[prop]);
      }
      messages.reverse();
      q.resolve(messages);
    });
    return q.promise;
  };

  return item;

});
