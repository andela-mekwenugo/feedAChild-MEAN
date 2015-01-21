var FeedAChildApp = angular.module('FeedAChildApp', ['ngRoute']);
FeedAChildApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider

    .when('/', {
      templateUrl: 'home.html'
      // controller: 'mainCtrl'
    }).

    when('/form', {
      templateUrl: 'form.html',
      controller: 'formCtrl'
    }).

    when('/contact', {
      templateUrl: 'contact.html',
      controller: 'contactCtrl'
    }).

    when('/children', {
      templateUrl: 'children.html',
      controller: 'childrenCtrl'
    }).
    when('/:id/delete', {
      templateUrl: 'contact.html',
      controller: 'deleteCtrl'
    })//.
    // otherwise ({
    //   redirectTo: '/'
    // });
}]);