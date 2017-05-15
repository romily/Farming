angular.module('app').controller('EditExpenseController', ['$scope','$stateParams', '$state','EditExpenseService','$timeout',function($scope,$stateParams
,$state,EditExpenseService,$timeout) {

$scope.load=function(){
  $scope.cheflag=false;
  $scope.neftflag=false;
  $scope.nbflag=false;
  $scope.paymode="" 
  var id=$stateParams.Myid;
  $scope.expense={};
  var ref;
  $scope.editsuccess=false;
  $scope.editfail=false;

  EditExpenseService.editexpense(id).then (function (data){

  $scope.expense=data;
  ref=$scope.expense.reference;
  }).catch(function(error){
    console.log("Error in fetching record: "+error)
  });
};


$scope.gotoeditexpensecategory=function(data){
  EditExpenseService.putData(data).then(function(data){  
    console.log(data)
  }).catch(function(error){
    console.log(error)
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


$scope.edit=function(id){
  if(document.getElementById('idfile').files[0]==undefined)
    $scope.expense.reference=$scope.expense.reference;
  else
    $scope.expense.reference=document.getElementById('idfile').files[0].name;

  EditExpenseService.edit($scope.expense,id).then(function(response){
  $scope.editsuccess=true;
  $timeout(function () {
      $scope.editsuccess = false;
      $state.go('cropexpensetab',{UserId:$scope.expense.userid})
       }, 2000);
  }).catch(function (error){
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

}])