
angular.module('app').controller('UserprofileController',['$scope','$state','$stateParams','$timeout','Upload','userauthentication','userregistration','userprofileService','AddPlanService',function($scope,$state,$stateParams,$timeout,Upload,userauthentication,userregistration,userprofileService,AddPlanService){


$scope.init = function(){
	$scope.getstate();	
	$scope.getprofile();
	
	// $scope.getimage();
};

$scope.getprofile = function(){
	if($stateParams.id){
		userprofileService.getprofile($stateParams.id).then(function(data){
			$scope.profileInfo = data.data[0];
			$scope.getdistrict($scope.profileInfo.state);
			$scope.getvillage($scope.profileInfo.district);
			//console.log("eniya")
		    //$scope.profileInfo.state_id = $scope.profileInfo.state;
			console.log($scope.profileInfo.state);			

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
			console.log(data)
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
    // $scope.message = true;
    // $scope.table = false;
    $scope.alert = false;  
    newregister.user_id = $stateParams.id;
	userprofileService.landregister(newregister).then(function(data) {	  		
    console.log(data)
    // $scope.message = false;
    // $scope.table = true;     
    $scope.alert = true;       
    $timeout(function () { 
     	$scope.alert = false;
     	$state.reload(); 
        },1000) 
         
    }).catch(function(data) {
      console.log(data)
	});
        
};

$scope.editprofile=function(profileInfo){
	$scope.alertprofile = false;
	userprofileService.editprofile(profileInfo).then(function(data) {
   		$scope.profileInfo = data;   		 
   	    $scope.alertprofile = true; 
   	    $timeout(function () { 
     	$scope.alertprofile = false;
     	$state.reload(); 
        },500)    
    }).catch(function(data) {
      console.log(data)
	});

};

$scope.uploadimage = function(profileInfo){
    var accountType = '';
	var fileUploadName = 'userprofile'
    var image = profileInfo.img;

    Upload.upload({
	    url : '/api/containers/container/upload/?type=' + accountType + '&file_upload_name=' + fileUploadName,
	       data : {
	           file : image,
	           method : fileUploadName,
	           type : accountType
	       }
   	}).then(function(response) {
         profileInfo.img = response.data.result.files.file[0].name;
         userprofileService.uploadimage(profileInfo).then(function(data) {
	         console.log(response) 
	         console.log(profileInfo.img)	      
	    }).catch(function(data) {
            console.log(data)
        });
  	 });     	 
};

/*$scope.deleteland=function(id){
    console.log(id) 
     $scope.alertland = false;  
    // $scope.data.user_id = $stateParams.id;
    AddPlanService.deletePlanForLand(id).then(function(response){
	//console.log(response)
}).catch(function(error){
	console.log(error)
});


	userprofileService.deleteland(id).then(function(data) {	
    console.log(data)    	
   	$state.reload()    
    }).catch(function(data) {
      console.log(data)
	});
     $scope.alertland = true; 



};*/

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

// $scope.enable=function(){

// }

}])