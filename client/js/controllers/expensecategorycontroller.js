angular.module('app').controller('ExpenseCategoryController', ['$scope', '$state','AddExpenseService',function($scope,
      $state,AddExpenseService) {
console.log("CROP Expense Category CONTROLLER");
$scope.expense={};
	$scope.expense=AddExpenseService.getData();
		

$scope.f=[false,false,false,false,false,false,false,false,false,false,false]
angular.forEach($scope.expense.expense_category,function(value,key){
	
		switch(value.id)
		{
			case 1:
			$scope.f[0]=true;
			break;
			case 2:
			$scope.f[1]=true;
			break;
			case 3:
			$scope.f[2]=true;
			break;
			case 4:
			$scope.f[3]=true;
			break;
			case 5:
			$scope.f[4]=true;
			break;
			case 6:
			$scope.f[5]=true;
			break;
			case 7:
			$scope.f[6]=true;
			break;
			case 8:
			$scope.f[7]=true;
			break;
			case 9:
			$scope.f[8]=true;
			break;
			case 10:
			$scope.f[9]=true;
			break;
			case 11:
			$scope.f[10]=true;
			break;
}
});
$scope.addexpensecategory=function(){
	

	console.log($scope.expense.planid)
console.log($scope.expense.voucher)
console.log($scope.expense.activity)
console.log($scope.expense.date)
console.log($scope.expense.labour)
console.log($scope.expense.amount)
console.log($scope.expense.paidto)
console.log($scope.expense.spender)
console.log($scope.expense.chequeno)
console.log($scope.expense.bank)
console.log($scope.expense.accno)
//$scope.expense.reference=document.getElementById('file').files[0].name;
console.log($scope.expense.reference)
console.log($scope.expense)
	


angular.forEach($scope.expense.expense_category,function(value,key){
	console.log(value.label)
		switch(value.id)
		{
			case 1:
			value.amount=$scope.seed;
			console.log($scope.expense.expense_category.amount)
		//	$scope.expense.expense_category[0].label="seed";
			break;
			case 2:
			value.amount=$scope.fertilizer;
			break;
			case 3:
			value.amount=$scope.pesticide;
			break;
			case 4:
			value.amount=$scope.soiltest;
			break;
			case 5:
			value.amount=$scope.machinery;
			break;
			case 6:
			value.amount=$scope.labour;
			break;
			case 7:
			value.amount=$scope.watering;
			break;
			case 8:
			value.amount=$scope.plant;
			break;
			case 9:
			value.amount=$scope.afterharvest;
			break;
			case 10:
			value.amount=$scope.storage;
			break;
			case 11:
			value.amount=$scope.otherexpense;
			break;
}

});

AddExpenseService.addExpense($scope.expense).then (function(response){
	console.log("Response from Controller:"+response)
	$state.go('cropexpensetab',{UserId:$scope.expense.userid})
}).catch (function(error){
	console.log("Error from Controller:"+error)
});

};
}])