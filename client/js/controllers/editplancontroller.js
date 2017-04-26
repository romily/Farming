angular.module('app').controller('EditPlanController', ['$scope','$stateParams', '$state','EditPlanService',function($scope,$stateParams
,$state,EditPlanService) {
  var id=$stateParams.Myid;
  $scope.userid=$stateParams.UserId;
  console.log($scope.userid)
$scope.plan={};

$scope.load=function(){

  EditPlanService.editplan(id).then (function (data){

  $scope.plan=data;
  }).catch(function(error){
    console.log("Error in fetching record: "+error)
  });
};

$scope.edit=function(id){
  $scope.nobedflag=false;
$scope.rowperbedflag=false;
var cropname=$scope.plan.cropname;

var croptype=$scope.plan.croptype;
var seeddate=$scope.plan.seeddate
var transdate=$scope.plan.transdate;
var soiltype=$scope.plan.soiltype;
var weather=$scope.plan.weather;
var no_beds=$scope.plan.no_beds;
var rowperbed=$scope.plan.rowperbed;
var maturitydays=$scope.plan.maturitydays;

var landrequired=$scope.plan.landrequired;
var locations=$scope.plan.locations;
var seedingmonth=$scope.plan.seedingmonth;
if(landrequired==undefined)
{
  $scope.plan.landrequired="";
  landrequired="";
}
    if(seedingmonth==undefined)
    {
      $scope.plan.seedingmonth="";
      seedingmonth="";
    }
    if(weather==undefined)
    {
      $scope.plan.weather="";
      weather="";
    }
    if(locations==undefined)
    {
      $scope.plan.locations="";
      locations="";
    }
    if(transdate==undefined)
   
      $scope.plan.transdate="";
var nameL=cropname.length;
var stypeL=soiltype.length;
var locationsL=locations.length;

var dayL=maturitydays.length;
var landrequiredL=landrequired.length;
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

EditPlanService.edit($scope.plan,id).then(function(response){
 $state.go('cropplantab',{UserId:$scope.plan.userid})
    })

   .catch(function (error){
   	console.log("Error in edit record: "+error)

   })
};
$scope.gotomyprofile=function()
{
  console.log($scope.userid)
  $state.go('userprofile',{id:$scope.userid})
};
  	}])
