
angular.module('app', ['lbServices','ui.router','validation.match','angularFileUpload','ngFileUpload','angularjs-dropdown-multiselect']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('sam', {
        url: '',
        templateUrl: 'views/sam.html',
         controller: 'SamController'
       });


     $stateProvider
      .state('reg', {
        url: '/reg',
        templateUrl: 'views/reg.html',
        controller: 'RegController'
      });
$stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LogController'
        
      });
     

      $stateProvider
      .state('logout', {
        url: '/logout',
        templateUrl: 'views/logout.html',
        controller: 'LogoutController'
      });

       $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'        
      });

      $stateProvider
      .state('landreg', {
        url: '/landreg',
        templateUrl: 'views/landreg.html',
        controller: 'LandController'
      });

      $stateProvider
      .state('userprofile', {
        url: '/userprofile/:id',
        templateUrl: 'views/userprofile.html',
        controller: 'UserprofileController'
      });

      $stateProvider
      .state('banner', {
        url: '/banner',
        templateUrl: 'views/banner.html'
       
      });

      $stateProvider
      .state('forgetpassword', {
        url: '/forgetpassword',
        templateUrl: 'views/forgetpassword.html'
       
      });

      $stateProvider
      .state('sendemail', {
        url: '/sendemail',
        templateUrl: 'views/sendemail.html'
       
      });

      $stateProvider
      .state('cropplantab', {
        url: '/cropplantab/:UserId',
        templateUrl: 'views/cropplantab.html',
        controller: 'CropPlanTabController'
      });    


      $stateProvider
      .state('editplan', {
        url: '/editplan/:UserId/:Myid',
        templateUrl: 'views/editplan.html',
        controller: 'EditPlanController'
      });

      $stateProvider
      .state('addplan', {
        url: '/addplan/:UserId',
        templateUrl: 'views/addplan.html',
        controller: 'CropPlanTabController'
      });

      $stateProvider
      .state('editexpense', {
        url: '/editexpense/:UserId/:Myid',
        templateUrl: 'views/editexpense.html',
        controller: 'EditExpenseController'
      });
    

      $stateProvider
      .state('expensecategory', {
        url: '/expensecategory',
        templateUrl: 'views/expensecategory.html',
        controller: 'ExpenseCategoryController'
      });

      $stateProvider
      .state('postquery', {
        url: '/postquery',
        templateUrl: 'views/postquery.html',
        controller: 'PostQueryController'
      });

       $stateProvider
      .state('cropexpensetab', {
        url: '/cropexpensetab/:UserId',
        templateUrl: 'views/cropexpensetab.html',
        controller: 'CropExpenseTabController'
      });

      $stateProvider
      .state('addexpense', {
        url: '/addexpense/:UserId/:planId',
        templateUrl: 'views/addexpense.html',
        controller: 'CropExpenseTabController'
      });


    $urlRouterProvider.otherwise('sam');
  }]);


