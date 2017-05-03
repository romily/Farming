angular.module('app').controller('PlanExpenseController',['$scope','$state','AddPlanService','$http',function($scope,$state,AddPlanService,$http) {
	$scope.load=function(){
		$scope.plan={};
		//$scope.expense={};
		AddPlanService.viewAllPlans($scope.plan).then (function(response){
			console.log(response)
			$scope.plan=response;
		}).catch(function(error){
			console.log(error)
		});

		/*AddPlanService.viewAllExpenses($scope.expense).then (function(response){
			console.log(response)
			$scope.expense=response;
		}).catch(function(error){
			console.log(error)
		});*/
	};
}]);
