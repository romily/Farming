angular.module('app').controller('EditExpenseController', ['$scope','$stateParams', '$state','EditExpenseService','$timeout',function($scope,$stateParams
,$state,EditExpenseService,$timeout) {
	console.log("I am EditExpense Controller")

  var id=$stateParams.Myid;
$scope.expense={};
var ref;
$scope.editsuccess=false;
$scope.editfail=false;

$scope.load=function(){

  EditExpenseService.editexpense(id).then (function (data){

  $scope.expense=data;
ref=$scope.expense.reference;
console.log(ref)
  }).catch(function(error){
    console.log("Error in fetching record: "+error)
  });
};


$scope.cheflag=false;
$scope.neftflag=false;
$scope.nbflag=false;
$scope.paymode=""

$scope.gotoeditexpensecategory=function(data){


EditExpenseService.putData(data).then(function(data){
    
    console.log(data)
  }).catch(function(error){
    console.log(error)
  });
};




$scope.edit=function(id){
 // console.log($scope.expense.userid)
if(document.getElementById('idfile').files[0]==undefined)
  $scope.expense.reference=$scope.expense.reference;
else
  $scope.expense.reference=document.getElementById('idfile').files[0].name;
console.log($scope.expense.reference)
EditExpenseService.edit($scope.expense,id).then(function(response){
  console.log($scope.expense.userid)

$scope.editsuccess=true;
   $timeout(function () {
      $scope.editsuccess = false;
 $state.go('cropexpensetab',{UserId:$scope.expense.userid})
       }, 2000);



 
    })

   .catch(function (error){
   	console.log("Error in edit record: "+error)
    $scope.editfail=true;
   $timeout(function () {
      $scope.editfail = false;
       }, 2000);


   })
};
$scope.radio=function(item){
  switch(item)
  {
    
    case 'Cash':
    $scope.cheflag=false;
    $scope.neftflag=false;
    $scope.nbflag=false;
    console.log(item)
  break;
  case 'Cheque':
  console.log(item)
  $scope.neftflag=false;
  $scope.cheflag=true;
  $scope.nbflag=false;
  break;
  case 'Neft':
  console.log(item)
  $scope.cheflag=false;
  $scope.neftflag=true;
  $scope.nbflag=false;
  break;
  case 'Net Banking':
  console.log(item)
  $scope.cheflag=false;
  $scope.neftflag=false;
  $scope.nbflag=true;
  break;
  //default:
}
};

}])