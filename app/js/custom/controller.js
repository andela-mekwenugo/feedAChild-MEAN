'use strict';

var FeedAChildApp = angular.module('FeedAChildApp');

var urlBase = 'https://feed-a-child.herokuapp.com/donate';


FeedAChildApp.controller('formCtrl', function($scope, $http) {
// var urlBase = 'https://feed-a-child.herokuapp.com/donate';

  $scope.register = function() { 
    $http({
      method : 'POST',
      url : 'https://feed-a-child.herokuapp.com/donate',
      data : $.param({firstname : $scope.FirstName, lastname : $scope.LastName, email : $scope.Email, location : $scope.Country, Amount_to_donate_monthly : $scope.Amount}),
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }   
    }).success(function(data) {
      console.log(data);
      location.path('/form');
      alert('THANK YOU FOR BEING A PART OF THIS COURSE');
      // $scope.message ("THANK YOU");
      // $scope.FirstName = "";
      // $scope. LastName = "";
      // $scope.Email = "";
      // $scope.Country = "";
      // $scope.Amount = "";
      // $scope.Credit_Card_Number = "";
    }).error(function() {
      console.log('not posted...error!!!')
    });
    //   $scope.showResult = data;
      
  };
});







// $scope.message('this is the formpage..please fill')
// });

FeedAChildApp.controller('contactCtrl', function($scope, $http){
  $scope.oldname;
  $scope.toggleForm = true;
  $scope.submit = function(){
    $scope.toggleForm = true;
    console.log('yipeeee');
    var urlBase = 'https://feed-a-child.herokuapp.com/donate';
      $http.get(urlBase)
      .success(function(data) {
        // console.log(data);
        $scope.donators = [];
        $scope.donators = data;
        $scope.donators.push(data);
        console.log($scope.donators);
      });
  };



  $scope.edit = function(name) {
    $scope.toggleForm = false;
    $scope.oldname = name;
    console.log($scope.oldname);
 
  };

  $scope.editSubmit = function() {
    var editDonator = {
      firstname : $scope.FirstName,
      lastname : $scope.LastName,
      email : $scope.Email,
      location : $scope.Country,
      Amount_to_donate_monthly : $scope.Amount
    };

    $http({
      method : 'PUT',
      url : 'https://feed-a-child.herokuapp.com/donate/' + $scope.oldname +'/edit',
      data : $.param(editDonator),
      headers : {'Content-Type' : 'application/x-www-form-urlencoded'}
    }).success(function(data) {
      console.log('editted!!!');
      console.log(editDonator);

      })
    $scope.toggleForm = true;
    $('.edited').html('DATA EDITTED')
  };
 

});


// angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
//   $scope.myInterval = 5000;
  // var slides = $scope.slides = [];
  // $scope.addSlide = function() {
  //   // var newWidth = 600 + slides.length + 1;
  //   slides.push({
  //     image: '/app/img/carousel.jpg',
  //   });
  // };
  // for (var i=0; i<4; i++) {
  //   $scope.addSlide();
  // }
// });