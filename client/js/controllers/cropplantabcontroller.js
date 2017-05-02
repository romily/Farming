angular.module('app').controller('CropPlanTabController',['$scope','$state','$stateParams','AddPlanService','$http','$timeout',function($scope,$state,$stateParams,AddPlanService,$http,$timeout) {
$scope.load=function(){
  $scope.f=[];
  $scope.id=0;
  $scope.s=false;
  $scope.plan={};
  $scope.deleteflag=false;
  $scope.userid=$stateParams.UserId;
  $scope.plan.landid=$stateParams.LandId;
  console.log($scope.plan.landid)
  AddPlanService.getLandAddress($scope.plan.landid).then(function(response){
    console.log(response)
    console.log(response.address)
    console.log(response.data.address)
   $scope.plan.locations=response.data.address;
   console.log($scope.plan.locations)
      }).catch(function (error){
    console.log(error)
  });

  $scope.successstatus=false;
  $scope.errorstatus=false;
  $scope.form=true;
  $scope.viewplan($scope.userid);
};


$scope.viewplan=function(id){
  AddPlanService.viewPlan(id).then(function(data){
    $scope.records=data;
  }).catch(function(error){
    console.log("Error in view records: "+error)
  });

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
    $scope.rowperbedflag=true;
    $scope.plan.rowfeet=0;
  return;
  }
  else if(($scope.plan.no_beds==undefined || $scope.plan.no_beds==0)&&($scope.plan.rowperbed!=undefined && $scope.plan.rowperbed!=0))
  {
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

       }).catch(function(error) {

        console.log("Error in Add Plan: "+error)
        $scope.farm=false;
        $scope.errorstatus=true;
       })
};


$scope.clear=function(){
 
 $scope.plan.cropname="";
 $scope.plan.croptype="";
 $scope.plan.seeddate="";

 $scope.plan.maturitydays="";
 $scope.plan.landrequired="";
 $scope.plan.no_beds="";
 $scope.plan.rowperbed="";
 $scope.plan.soiltype="";
 $scope.plan.weather="";
 $scope.plan.seedingmonth="";
 $scope.plan.transdate="";

};



$scope.delete=function(id){
 AddPlanService.deletePlan(id).then(function(data){
    $scope.deleteflag=true;
    $timeout(function () {
      $scope.deleteflag = false;
      $state.reload();
    }, 2000);
  
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
$state.go('addexpense',{UserId:$scope.userid,planId:$scope.id});
};


$scope.search=function(){
  $scope.s=true;
};



$scope.gotomyprofile=function(){
  $state.go('userprofile',{id:$scope.userid})
};


$scope.gotomyexpense=function(){
  $state.go('cropexpensetab',{UserId:$scope.userid})
};

}])