angular.module('app').controller('CropExpenseTabController', ['$scope', '$state',function($scope,
      $state) {
console.log("CROP Expense TAB CONTROLLER")
$scope.cheflag=false;
$scope.neftflag=false;
$scope.nbflag=false;
$scope.paymode=""
$scope.example1model = []; 
$scope.example1data = [ 
{id: 1, label: "Seed"},
 {id: 2, label: "Fertilizer"}, 
 {id: 3, label: "Pesticides"},
{id: 4, label: "Soil Test"},
{id: 5, label: "Machinery"},
{id: 6, label: "Labour"},
{id: 7, label: "Watering"},													
{id: 8, label: "Plant Protection"},
{id: 9, label: "After Harvest"},													
{id: 10, label: "Storage"}
];

$scope.gotoadd=function(){
	$state.go('addexpense')
};


$scope.radio=function(item){
//console.log("I am radio")
//console.log(item)
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