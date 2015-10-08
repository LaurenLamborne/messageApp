angular.module('MessageApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('Home', {
    url: '/',
    templateUrl: '/templates/home.html',
  })
  $urlRouterProvider.otherwise('/');
})
