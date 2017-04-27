angular.module('app').controller('UserprofileController',['$scope','$state','$stateParams','userauthentication','userregistration','userprofileService','$http',function($scope,$state,$stateParams,userauthentication,userregistration,userprofileService,$http){

$scope.init = function(){
	$scope.getstate();	
	$scope.getprofile();
	$scope.getimage();
};

$scope.getprofile = function(){
	if($stateParams.id){
		userprofileService.getprofile($stateParams.id).then(function(data){
			$scope.profileInfo = data.data[0];
		console.log("eniya")
		    $scope.profileInfo.state_id = $scope.profileInfo.state;
			console.log($scope.profileInfo.state)			
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
    $scope.alert = false;  
    newregister.user_id = $stateParams.id;
	userprofileService.landregister(newregister).then(function(data) {
	// $state.reload();  		
    console.log(data)     
    $scope.alert = true;   
   	// alert("Landregistered Successfully");     
    }).catch(function(data) {
      console.log(data)
	});
        
};

$scope.editprofile=function(profileInfo){
	userprofileService.editprofile(profileInfo).then(function(data) {
   		$scope.profileInfo = data;
   		$state.reload();
   		console.log(data);
   	alert("edit Successfully");     
    }).catch(function(data) {
      console.log(data)
	});

};

$scope.deleteland=function(id){
    console.log(id) 
     $scope.alertland = false;  
    // $scope.data.user_id = $stateParams.id;
	userprofileService.deleteland(id).then(function(data) {	
    console.log(data)    	
   	$state.reload()    
    }).catch(function(data) {
      console.log(data)
	});
     $scope.alertland = true; 
};

// $scope.getimage = function(data){
//     console.log(data)   
//     // $scope.data.user_id = $stateParams.id;
// 	userprofileService.getimage(data).then(function(data) {		
//     console.log(data) 
//    	}).catch(function(data) {
//       console.log(data)
// 	});

// };

$scope.addplan=function(userid,landid)
{
	$state.go('addplan',{UserId:userid,LandId:landid})
}

}])