
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
        templateUrl: 'views/about.html',
        controller: 'AboutController'
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




    $urlRouterProvider.otherwise('sam');
  }]);


