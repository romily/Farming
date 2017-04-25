angular.module('app').controller('EditExpenseController', ['$scope','$stateParams', '$state','EditExpenseService',function($scope,$stateParams
,$state,EditExpenseService) {
	console.log("I am EditExpense Controller")

  var id=$stateParams.Myid;
$scope.expense={};

$scope.load=function(){

  EditExpenseService.editexpense(id).then (function (data){

  $scope.expense=data;
  }).catch(function(error){
    console.log("Error in fetching record: "+error)
  });
};


$scope.cheflag=false;
$scope.neftflag=false;
$scope.nbflag=false;
$scope.paymode=""
/*$scope.expense.expense_category = []; 
$scope.list = [
{id: 1, label: "Seed", amount:0},
 {id: 2, label: "Fertilizer",amount:0}, 
 {id: 3, label: "Pesticides" ,amount:0},
{id: 4, label: "Soil Test",amount:0},
{id: 5, label: "Machinery" ,amount:0},
{id: 6, label: "Labour" ,amount:0},
{id: 7, label: "Watering" ,amount:0},                         
{id: 8, label: "Plant Protection" ,amount:0},
{id: 9, label: "After Harvest",amount:0},                         
{id: 10, label: "Storage" ,amount:0},
{id: 11, label: "Other Expenses" ,amount:0}
];
console.log($scope.expense.list)
$scope.f=[false,false,false,false,false,false,false,false,false,false,false]

*/
$scope.gotoeditexpensecategory=function(data){


EditExpenseService.putData(data).then(function(data){
    
    console.log(data)
  }).catch(function(error){
    console.log(error)
  });

 // $stateParams.go('editexpensecategory')


  //$stateParams.go('editexpensecategory')
};




$scope.edit=function(id){
$scope.expense.reference=document.getElementById('idfile').files[0].name;
EditExpenseService.edit($scope.expense,id).then(function(response){
 $state.go('cropexpensetab')
    })

   .catch(function (error){
   	console.log("Error in edit record: "+error)

   })
};
$scope.radio=function(item){
  switch(item)
  {
    
    case 'cash':
    $scope.cheflag=false;
    $scope.neftflag=false;
    $scope.nbflag=false;
    console.log(item)
  break;
  case 'cheque':
  console.log(item)
  $scope.neftflag=false;
  $scope.cheflag=true;
  $scope.nbflag=false;
  break;
  case 'neft':
  console.log(item)
  $scope.cheflag=false;
  $scope.neftflag=true;
  $scope.nbflag=false;
  break;
  case 'nb':
  console.log(item)
  $scope.cheflag=false;
  $scope.neftflag=false;
  $scope.nbflag=true;
  break;
  //default:
}
};

}])