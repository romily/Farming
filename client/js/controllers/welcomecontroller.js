angular.module('app').controller('WelcomeController', ['$scope', '$state','LoginService',function($scope,
      $state,LoginService) {
$scope.username=LoginService.getData();

  	}])