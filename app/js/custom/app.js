var FeedAChildApp = angular.module('FeedAChildApp', ['ngRoute']);
FeedAChildApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
    when('/feedAChild-MEAN', {
      templateUrl: 'index.html',
      controller: 'mainCtrl'
    }).

    when('/feedAChild-MEAN', {
      templateUrl: 'home.html',
      controller: 'mainCtrl'
    }).

    when('/feedAChild-MEAN/form', {
      templateUrl: 'form.html',
      controller: 'formCtrl'
    }).

    when('/feedAChild-MEAN/contact', {
      templateUrl: 'contact.html',
      controller: 'contactCtrl'
    }).

    when('/feedAChild-MEAN/children', {
      templateUrl: 'children.html',
      controller: 'childrenCtrl'
    }).
    when('/feedAChild-MEAN/:id/delete', {
      templateUrl: 'contact.html',
      controller: 'deleteCtrl'
    }).
    otherwise ({
      redirectTo: '/'
    });
}]);