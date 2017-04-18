angular.module('app').controller('LoginController',['$scope','$state','LoginService',function($scope,$state,LoginService)
{
  console.log("LoginController")
$scope.Login=function()
  {
  
    LoginService.Login($scope.newRegister).then(function(data)
{
  
}).catch(function(data)
{
  console.log(data)
})
      

  };
}]);
