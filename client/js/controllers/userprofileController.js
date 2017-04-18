angular.module('app').controller('UserprofileController',['$scope','$state','$stateParams','userauthentication','userregistration','userprofileService',function($scope,$state,$stateParams,userauthentication,userregistration,userprofileService){

$scope.init = function(){
	$scope.getstate();	
	$scope.getprofile();
};

$scope.getprofile = function(){
	console.log($stateParams)
	if($stateParams.id){
		userprofileService.getprofile($stateParams.id).then(function(data){
			$scope.profileInfo = data.data[0];
			console.log($scope.profileInfo)
		}).catch(function(data){
			console.log(data);
		}); 
	}
}

$scope.getstate = function(){
	userregistration.getstate().then(function(data){
			$scope.states = data.data;
	}).catch(function(data){
		console.log(data);
	}); 
}

$scope.getdistrict = function(stateID){
	userregistration.getdistrict(stateID).then(function(data){
			$scope.districts = data.data;
	}).catch(function(data){
		console.log(data);
	}); 
}

$scope.getvillage = function(districtID){
	userregistration.getvillage (districtID).then(function(data){
			$scope.villages = data.data;
	}).catch(function(data){
		console.log(data);
	}); 
}

$scope.landregister=function(newregister){
    console.log(newregister)
    newregister.user_id = $stateParams.id;
	userprofileService.landregister(newregister).then(function(data) {
   	console.log(data) 
   	alert("Landregistered Successfully");     
    }).catch(function(data) {
      console.log(data)
	});

};

$scope.editprofile=function(profileInfo){
    console.log(profileInfo)
    // newregister.user_id = $stateParams.id;
	userprofileService.editprofile(profileInfo).then(function(data) {
   	console.log(data) 
   	alert("edit Successfully");     
    }).catch(function(data) {
      console.log(data)
	});

};

}])