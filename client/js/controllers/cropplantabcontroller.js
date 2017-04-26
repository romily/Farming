angular.module('app').controller('CropPlanTabController',['$scope','$state','$stateParams','AddPlanService','$http',function($scope,$state,$stateParams,AddPlanService,$http) {
$scope.f=[];
$scope.id=0;
$scope.s=false;
$scope.userid=$stateParams.UserId;
//console.log(id)
$scope.successstatus=false;
$scope.errorstatus=false;
$scope.form=true;
$scope.viewplan=function(id){
console.log(id)
  AddPlanService.viewPlan(id).then(function(data){
    $scope.records=data;
  }).catch(function(error){
    console.log("Error in view records: "+error)
  });

  };
$scope.viewplan($scope.userid);
$scope.gotoadd=function(){
  console.log($scope.userid)
    $state.go('addplan',{UserId:$scope.userid})
};
$scope.addplan=function(){
$scope.plan.userid=$scope.userid;
console.log($scope.plan.userid)    
 $scope.nobedflag=false;
$scope.rowperbedflag=false;
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
 $scope.plan.rowfeet=$scope.plan.no_beds*$scope.plan.rowperbed;  
}
  else if(($scope.plan.rowperbed==undefined || $scope.plan.rowperbed==0)&&($scope.plan.no_beds!=undefined && $scope.plan.no_beds!=0) )
{
 // alert("Enter rowperbed")
 $scope.rowperbedflag=true;
  $scope.plan.rowfeet=0;
return;
}
else if(($scope.plan.no_beds==undefined || $scope.plan.no_beds==0)&&($scope.plan.rowperbed!=undefined && $scope.plan.rowperbed!=0))
{
  //alert("Enter number of bed")
  $scope.nobedflag=true;
   $scope.plan.rowfeet=0;
  return;
}

    AddPlanService.addPlan($scope.plan).then(function(data) {

      console.log(data.data.id)
      $scope.form=false;
      $scope.errorstatus=false;
      $scope.successstatus=true;

      $scope.id=data.data.id;
      //$state.go('addexpense',{planId:data.data.id});
       }).catch(function(error) {
        console.log("Error in Add Plan: "+error)
        $scope.farm=false;
        $scope.errorstatus=true;

        
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
$state.go('editplan',{UserId:$scope.userid,Myid:id});
};
$scope.back=function(){
$state.go('cropplantab',{UserId:$scope.userid});
};
$scope.addexpense=function(){
console.log($scope.id)
$state.go('addexpense',{UserId:$scope.userid,planId:$scope.id});
};
$scope.search=function(){
  console.log("Search")
  console.log($scope.s)
  $scope.s=true;
   console.log($scope.s)
};

$scope.gotomyprofile=function()
{
  console.log($scope.userid)
  $state.go('userprofile',{id:$scope.userid})
};
  	}])

