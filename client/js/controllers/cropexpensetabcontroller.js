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
$scope.show=false;
$scope.hide=true;
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



$scope.item=function(items){
console.log(items)
angular.forEach(items,function(value,key){
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


};

$scope.addexpense=function(selectitems,data){
$scope.expense.reference=document.getElementById('idfile').files[0].name;
/*AddExpenseService.putData(selectitems,data).then(function(data){
    
    console.log(data)
  }).catch(function(error){
    console.log(error)
  });*/


  	angular.forEach($scope.expense.expense_category,function(value,key){
  		switch(value.id)
  		{
  			case 1:
  			value.amount=$scope.seed;
  			console.log($scope.expense.expense_category.amount)
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

$scope.addsuccess=true;
   $timeout(function () {
      $scope.addsuccess = false;
$state.go('cropexpensetab',{UserId:$scope.expense.userid})
    }, 1000);

}).catch (function(error){
	console.log("Error from Controller:"+error)
$scope.addfail=true;
   $timeout(function () {
      $scope.addfail = false;
    }, 1000);


});

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


$scope.removeItem = {onItemDeselect: function(item) {
	console.log(item);
	console.log(item.id)
	switch(item.id)
	{

		case 1:
			$scope.f[0]=false;
			break;
			case 2:
			$scope.f[1]=false;
			break;
			case 3:
			$scope.f[2]=false;
			break;
			case 4:
			$scope.f[3]=false;
			break;
			case 5:
			$scope.f[4]=false;
			break;
			case 6:
			$scope.f[5]=false;
			break;
			case 7:
			$scope.f[6]=false;	
			break;
			case 8:
			$scope.f[7]=false;
			break;
			case 9:
			$scope.f[8]=false;
			break;
			case 10:
			$scope.f[9]=false;
			break;
			case 11:
			$scope.f[10]=false;
			break;

	}

}
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
$scope.viewexpensedetails=function(){
	$scope.hide=false;
	$scope.show=true;

};

$scope.hideexpensedetails=function(){
	$scope.show=false;
	$scope.hide=true;
	

};
}])