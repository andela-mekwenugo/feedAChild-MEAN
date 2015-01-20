var FeedAChildApp = angular.module('FeedAChildApp', ['ngRoute']);
FeedAChildApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
    when('/feedAChild-MEAN/app', {
      templateUrl: 'index.html',
      controller: 'mainCtrl'
    }).

    when('/feedAChild-MEAN/app', {
      templateUrl: 'home.html',
      controller: 'mainCtrl'
    }).

    when('/feedAChild-MEAN/app/form', {
      templateUrl: 'form.html',
      controller: 'formCtrl'
    }).

    when('/feedAChild-MEAN/app/contact', {
      templateUrl: 'contact.html',
      controller: 'contactCtrl'
    }).

    when('/feedAChild-MEAN/app/children', {
      templateUrl: 'children.html',
      controller: 'childrenCtrl'
    }).
    when('/feedAChild-MEAN/app/:id/delete', {
      templateUrl: 'contact.html',
      controller: 'deleteCtrl'
    }).
    otherwise ({
      redirectTo: '/'
    });
}]);