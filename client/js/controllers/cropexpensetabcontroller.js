angular.module('app').controller('CropExpenseTabController', ['$scope','$stateParams','$state','AddExpenseService',function($scope,$stateParams,$state,AddExpenseService) {
console.log("CROP Expense TAB CONTROLLER");
var id=$stateParams.planId;
$scope.expense={};
//console.log(f)
$scope.expense.planid=id;
console.log($scope.expense.planid)
$scope.cheflag=false;
$scope.neftflag=false;
$scope.nbflag=false;
$scope.paymode=""
$scope.expense.expense_category = []; 
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
$scope.addexpense=function(selectitems,data){
$scope.expense.reference=document.getElementById('idfile').files[0].name;
AddExpenseService.putData(selectitems,data).then(function(data){
    
    console.log(data)
  }).catch(function(error){
    console.log(error)
  });

	$state.go('expensecategory')



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




$scope.f={};

$scope.s=false;
$scope.viewexpense=function(){

  AddExpenseService.viewExpense().then(function(data){
    $scope.records=data;
  }).catch(function(error){
    console.log("Error in view records: "+error)
  });

  };
$scope.viewexpense();

$scope.clear=function(){
 $scope.expense={};
};

$scope.delete=function(id){

AddExpenseService.deleteExpense(id).then(function(data){
  $state.reload();

}).catch(function(error){
  console.log("Error in delete expense: "+error)
})
  };
$scope.editgo=function(id){
$state.go('editexpense',{Myid:id});
};
$scope.search=function(){
  console.log("Search")
  console.log($scope.s)
  $scope.s=true;
   console.log($scope.s)
};
}])