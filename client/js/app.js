
angular.module('app', ['lbServices','ui.router','validation.match','angularFileUpload','ngFileUpload']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
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
        url: '/cropexpensetab',
        templateUrl: 'views/cropexpensetab.html',
        controller: 'CropExpenseTabController'
      });


    $urlRouterProvider.otherwise('sam');
  }]);


