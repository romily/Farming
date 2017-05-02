angular.module('app').controller('CropExpenseTabController', ['$scope','$stateParams','$state','AddExpenseService','$timeout','Upload',function($scope,$stateParams,$state,AddExpenseService,$timeout,Upload) {
console.log("CROP Expense TAB CONTROLLER");
var id=$stateParams.planId;
$scope.deletesuccess=false;
$scope.expense={};
$scope.expense.planid=id;
$scope.expense.userid=$stateParams.UserId;
console.log($scope.expense.planid)
console.log($scope.expense.userid)
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




$scope.addreference=function(expense)
{
var accountType='';
var img=$scope.expense.reference;
var fileUploadName='cropexpensetab'
console.log(fileUploadName)
Upload.upload({
	url: '/api/containers/container/upload/?type='+accountType+'&file_upload_name='+fileUploadName,
	data:{
		file:img,
		method:fileUploadName,
		type:accountType
	}
}).then (function(response){
	console.log(response)
}).catch (function(error){
	console.log(error)
});


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
		
		$scope.neftflag=false;
		$scope.cheflag=true;
		$scope.nbflag=false;
		break;
	case 'Neft':
		
		$scope.cheflag=false;
		$scope.neftflag=true;
		$scope.nbflag=false;
		break;
	case 'Net Banking':
		
		$scope.cheflag=false;
		$scope.neftflag=false;
		$scope.nbflag=true;
		break;
		
}
};




$scope.f={};

$scope.s=false;
$scope.viewexpense=function(id){

  AddExpenseService.viewExpense(id).then(function(data){
    $scope.records=data;
  }).catch(function(error){
    console.log("Error in view records: "+error)
  });

  };
$scope.viewexpense($scope.expense.userid);

$scope.clear=function(){
 $scope.expense={};
};

$scope.delete=function(id){

AddExpenseService.deleteExpense(id).then(function(data){

	$scope.deletesuccess=true;
   $timeout(function () {
      $scope.deletesuccess = false;
 $state.reload();
       }, 2000);

 

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
$scope.gotomyprofile=function(){
	$state.go('userprofile',{id:$scope.expense.userid})
};
$scope.gotoviewplan=function(){
$state.go('cropplantab',{UserId:$scope.expense.userid})

};
}])