var FeedAChildApp = angular.module('FeedAChildApp', ['ngRoute']);
FeedAChildApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider

    .when('/feedachild/app', {
      templateUrl: 'home.html',
      controller: 'mainCtrl'
    }).

    when('/feedachild/app/form', {
      templateUrl: 'form.html',
      controller: 'formCtrl'
    }).

    when('/feedachild/app/contact', {
      templateUrl: 'contact.html',
      controller: 'contactCtrl'
    }).

    when('/feedachild/app/children', {
      templateUrl: 'children.html',
      controller: 'childrenCtrl'
    }).
    when('/feedachild/app/:id/delete', {
      templateUrl: 'contact.html',
      controller: 'deleteCtrl'
    }).
    otherwise ({
      redirectTo: '/'
    });
}]);