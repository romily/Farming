
angular.module('app').controller('RegisterController',['$scope','$state' ,'RegisterService', function($scope,$state,RegisterService){
$scope.registers=[];
console.log("I am register controller")
  $scope.addRegister=function(){

 var p1=$scope.newRegister.password;
    var p2=$scope.newRegister.cfm;
    var pno=$scope.newRegister.phno;
    var pnoL=pno.length;
    var name=$scope.newRegister.name;
    var nameL=name.length;
for(var i=0;i<nameL;i++)
    {
      console.log(name[i])
      if(!(isNaN(name[i])))
        {
 alert("Name Should not Contain Digits");
 return;
        }
       
    }

    for(var i=0;i<pnoL;i++)
    {
      console.log(pno[i])
      if(isNaN(pno[i]))
        {
 alert("Phone number Should not Contain Characters");
 return;
        }
       
    }
      if(p1==p2)
{
 
      RegisterService.addRegister($scope.newRegister).then(function(data) {
          
       }).catch(function(data) {
       })
     }
     else
       alert("Password Does not Match");
  
  };

}])
