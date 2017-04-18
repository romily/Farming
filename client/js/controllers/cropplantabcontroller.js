angular.module('app').controller('CropPlanTabController',['$scope','$state','AddPlanService','$http',function($scope,$state,AddPlanService,$http) {
$scope.f={};

$scope.s=false;
$scope.viewplan=function(){

  AddPlanService.viewPlan().then(function(data){
    $scope.records=data;
  }).catch(function(error){
    console.log("Error in view records: "+error)
  });

  };
$scope.viewplan();
$scope.gotoadd=function(){
    $state.go('addplan')
};
$scope.addplan=function(){
    
/*var cropname=$scope.plan.cropname;

var croptype=$scope.plan.croptype;
var seeddate=$scope.plan.seeddate;
var transdate=$scope.plan.transdate;
var soiltype=$scope.plan.soiltype;
var weather=$scope.plan.weather;
var no_beds=$scope.plan.no_beds;
var rowperbed=$scope.plan.rowperbed;
var maturitydays=$scope.plan.maturitydays;

var landrequired=$scope.plan.landrequired;
var locations=$scope.plan.locations;
var seedingmonth=$scope.plan.seedingmonth;*/
if($scope.plan.landrequired==undefined)
{
  $scope.plan.landrequired="";
}
    if($scope.plan.seedingmonth==undefined)
    {
      $scope.plan.seedingmonth="";
    }
    if($scope.plan.weather==undefined)
    {
      $scope.plan.weather="";
    }
    if($scope.plan.locations==undefined)
    {
      $scope.plan.locations="";
    }
    if($scope.plan.transdate==undefined)
 $scope.plan.transdate="";

if($scope.plan.no_beds==undefined && $scope.plan.rowperbed==undefined)
     {

$scope.plan.no_beds=0;
$scope.plan.rowperbed=0;
      $scope.plan.rowfeet=0;
    }
    else if(($scope.plan.no_beds!=undefined && $scope.plan.rowperbed!=undefined)&& ($scope.plan.no_beds!=0 && $scope.plan.rowperbed!=0))
{
var bedL=$scope.plan.no_beds.length;
var row_per_bedL=$scope.plan.rowperbed.length;
 $scope.plan.rowfeet=$scope.plan.no_beds*$scope.plan.rowperbed;  
}
    else if($scope.plan.rowperbed==undefined || $scope.plan.rowperbed==0 )
{
  alert("Enter rowperbed")
return;
}
else if($scope.plan.no_beds==undefined || $scope.plan.no_beds==0)
{
  alert("Enter number of bed")
  return;
}
    AddPlanService.addPlan($scope.plan).then(function(data) {
       }).catch(function(error) {
        console.log("Error in Add Plan: "+error)
       })

 
};
$scope.clear=function(){
 $scope.plan={};
};

$scope.delete=function(id){

AddPlanService.deletePlan(id).then(function(data){
  $state.reload();

}).catch(function(error){
  console.log("Error in delete plan: "+error)
})
  };
$scope.editgo=function(id){
$state.go('editplan',{Myid:id});
};
$scope.search=function(){
  console.log("Search")
  console.log($scope.s)
  $scope.s=true;
   console.log($scope.s)
};
  	}])

