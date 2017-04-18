// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'lbServices',
    'ui.router'

  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {

     $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainController'
      });
      
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      });
      $stateProvider
      .state('cropexpensetab', {
        url: '/cropexpensetab',
        templateUrl: 'views/cropexpensetab.html',
        controller: 'CropExpenseTabController'
      });
     
 $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      });

     
       $stateProvider
      .state('organicfarming', {
        url: '/organicfarming',
        templateUrl: 'views/organicfarming.html',
       
      });
       $stateProvider
      .state('seedtest', {
        url: '/seedtest',
        templateUrl: 'views/seedtest.html',
       
      });
       $stateProvider
      .state('plantsandmgnt', {
        url: '/plantsandmgnt',
        templateUrl: 'views/plantsandmgnt.html',
        
      });
       $stateProvider
      .state('cropplanning', {
        url: '/cropplanning',
        templateUrl: 'views/cropplanning.html',
        
      });
      $stateProvider
      .state('viewquery', {
        url: '/viewquery',
        templateUrl: 'views/viewquery.html',
        controller: 'ViewQueryController'
      });
$stateProvider
      .state('postquery', {
        url: '/postquery',
        templateUrl: 'views/postquery.html',
        controller: 'PostQueryController'
      });

$stateProvider
.state('cropplantab', {
        url: '/cropplantab',
        templateUrl: 'views/cropplantab.html',
        controller: 'CropPlanTabController'
      });
$stateProvider
.state('editplan', {
        url: '/editplan/:Myid',
        templateUrl: 'views/editplan.html',
        controller: 'EditPlanController'
      });

$stateProvider
.state('addplan', {
        url: '/addplan',
        templateUrl: 'views/addplan.html',
        controller: 'CropPlanTabController'
      });
$stateProvider
.state('editexpense', {
        url: '/editexpense/:Myid',
        templateUrl: 'views/editexpense.html',
        controller: 'EditExpenseController'
      });
$stateProvider
.state('addexpense', {
        url: '/addexpense',
        templateUrl: 'views/addexpense.html',
        controller: 'CropExpenseTabController'
      });
$stateProvider
.state('carousel', {
        url: '/carousel',
        templateUrl: 'views/carousel.html'
      //  controller: 'CarouselController'
      });

    $urlRouterProvider.otherwise('main');

  }]);