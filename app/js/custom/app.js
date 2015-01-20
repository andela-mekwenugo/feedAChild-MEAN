var FeedAChildApp = angular.module('FeedAChildApp', ['ngRoute']);
FeedAChildApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider

    .when('/app', {
      templateUrl: 'home.html',
      controller: 'mainCtrl'
    }).

    when('/app/form', {
      templateUrl: 'form.html',
      controller: 'formCtrl'
    }).

    when('/app/contact', {
      templateUrl: 'contact.html',
      controller: 'contactCtrl'
    }).

    when('/app/children', {
      templateUrl: 'children.html',
      controller: 'childrenCtrl'
    }).
    when('/app/:id/delete', {
      templateUrl: 'contact.html',
      controller: 'deleteCtrl'
    }).
    otherwise ({
      redirectTo: '/'
    });
}]);