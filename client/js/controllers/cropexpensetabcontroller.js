angular.module('app').controller('CropExpenseTabController', ['$scope', '$state',function($scope,
      $state) {
console.log("CROP Expense TAB CONTROLLER")
$scope.cheflag=false;
$scope.ddflag=false;
$scope.gotoadd=function(){
	$state.go('addexpense')
};
$scope.call=function(item){
switch(item)
{
	case 'cash':
	$scope.cheflag=false;
$scope.ddflag=false;
	console.log(item)
	break;
	case 'cheque':
	console.log(item)
	$scope.ddflag=false;
	$scope.cheflag=true;

	break;
	case 'dd':
	console.log(item)
	$scope.cheflag=false;
	$scope.ddflag=true;

	break;

}
};
  	}])