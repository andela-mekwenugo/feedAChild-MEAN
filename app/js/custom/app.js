var FeedAChildApp = angular.module('FeedAChildApp', ['ngRoute']);
FeedAChildApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider

    .when('/feedachild-MEAN/app', {
      templateUrl: 'home.html',
      controller: 'mainCtrl'
    }).

    when('/feedachild-MEAN/app/form', {
      templateUrl: 'form.html',
      controller: 'formCtrl'
    }).

    when('/feedachild-MEAN/app/contact', {
      templateUrl: 'contact.html',
      controller: 'contactCtrl'
    }).

    when('/feedachild-MEAN/app/children', {
      templateUrl: 'children.html',
      controller: 'childrenCtrl'
    }).
    when('/feedachild-MEAN/app/:id/delete', {
      templateUrl: 'contact.html',
      controller: 'deleteCtrl'
    }).
    otherwise ({
      redirectTo: '/'
    });
}]);