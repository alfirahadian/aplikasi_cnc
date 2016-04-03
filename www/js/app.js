// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

(function() {
var app = angular.module('starter', ['ionic']);

app.controller('LatihanCtrl', function($http, $scope){

  $scope.asisten_riset = [];

  $http.get('http://188.166.244.217/api_asisten/index.php/api/ambil')
      .success(function(response){
         angular.forEach(response, function(data){
          $scope.asisten_riset.push(data);
         });
      });

    $scope.doRefresh = function() {
    $http.get('http://188.166.244.217/pi_asisten/index.php/api/ambil')
     .success(function(newItems) {
       $scope.asisten_riset = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});

app.controller('AslabCtrl', function($http, $scope){

  $scope.asisten_aslab = [];
    
    $http.get('http://188.166.244.217/api_asisten/index.php/api/ambilAslab')
      .success(function(response){
         angular.forEach(response, function(data){
          $scope.asisten_aslab.push(data);
         });
      });

      $scope.doRefresh = function() {
    $http.get('http://188.166.244.217/api_asisten/index.php/api/ambilAslab')
     .success(function(newItems) {
       $scope.asisten_aslab = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };

});

app.controller('KamjarCtrl', function($http, $scope){

  $scope.asisten_kamjar = [];
    
    $http.get('http://188.166.244.217/api_asisten/index.php/api/ambilKamjar')
      .success(function(response){
         angular.forEach(response, function(data){
          $scope.asisten_kamjar.push(data);
         });
      });

      $scope.doRefresh = function() {
    $http.get('http://188.166.244.217/api_asisten/index.php/api/ambilKamjar')
     .success(function(newItems) {
       $scope.asisten_kamjar = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});

app.controller('BenginproCtrl', function($http, $scope){

  $scope.asisten_benginpro = [];
    
    $http.get('http://188.166.244.217/api_asisten/index.php/api/ambilBenginpro')
      .success(function(response){
         angular.forEach(response, function(data){
          $scope.asisten_benginpro.push(data);
         });
      });

      $scope.doRefresh = function() {
    $http.get('http://188.166.244.217/api_asisten/index.php/api/ambilBenginpro')
     .success(function(newItems) {
       $scope.asisten_benginpro = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});

app.controller('AlumniCtrl', function($http, $scope){

  $scope.asisten_alumni = [];
    
    $http.get('http://188.166.244.217/api_asisten/index.php/api/ambilAlumni')
      .success(function(response){
         angular.forEach(response, function(data){
          $scope.asisten_alumni.push(data);
         });
      });

      $scope.doRefresh = function() {
    $http.get('http://188.166.244.217/api_asisten/index.php/api/ambilAlumni')
     .success(function(newItems) {
       $scope.asisten_alumni = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});

app.controller('BackCtrl', function ($scope) {
  $scope.myGoBack = function() {
    //$ionicHistory.goBack();
    window.history.back();
  };
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
  url: '/',
  templateUrl: 'templates/home.html'
  });

  $stateProvider.state('asisten', {
  url: '/asisten',
  templateUrl: 'templates/asisten.html'
  });

  $stateProvider.state('tentang', {
  url: '/tentang',
  templateUrl: 'templates/tentang.html',
  });

  $stateProvider.state('asisten_riset', {
  url: '/asisten_riset',
  templateUrl: 'templates/asisten_riset.html',
  controller: 'LatihanCtrl'
  });

  $stateProvider.state('asisten_benginpro', {
  url: '/asisten_benginpro',
  templateUrl: 'templates/asisten_benginpro.html',
  controller: 'BenginproCtrl'
  });

  $stateProvider.state('asisten_kamjar', {
  url: '/asisten_kamjar',
  templateUrl: 'templates/asisten_kamjar.html',
  controller: 'KamjarCtrl'
  });

  $stateProvider.state('alumni', {
  url: '/alumni',
  templateUrl: 'templates/alumni.html',
  controller: 'AlumniCtrl'
  });

  $stateProvider.state('asisten_aslab', {
  url: '/asisten_aslab',
  templateUrl: 'templates/asisten_aslab.html',
  controller: 'AslabCtrl'
  });

});

}());