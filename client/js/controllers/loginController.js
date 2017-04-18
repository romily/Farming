  angular.module('app').controller('LogController',['$scope','$state','userauthentication',function($scope,$state,userauthentication){
 
  $scope.login=function(newregister){  

    userauthentication.login(newregister).then(function(data){
      var result = data.data;
      if(result.statusCode == 200){
          $scope.statusCode = result.statusCode;
          $scope.statusMessage = result.status;
          $state.go('userprofile',{
            id:result.data[0].id
          });
      } else if(result.statusCode == 400){
          $scope.statusCode = result.statusCode;
          $scope.statusMessage = result.status;
      }
    }).catch(function(data){
        console.log(data)
    })  
  };
 
}]);

          
 