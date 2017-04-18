
angular.module('app').controller('RegController',['$scope','$state' ,'userregistration','Upload', function($scope,$state,userregistration,Upload){

 $scope.farmpersonals=[];

$scope.init = function(){
	$scope.getstate();
	
};

$scope.calculateAge = function(birthday) { // pass in player.dateOfBirth
 var date = new Date(birthday);
 var ageDifMs = Date.now() - date.getTime();
 var ageDate = new Date(ageDifMs); // miliseconds from epoch
 $scope.newregister.age=(ageDate.getUTCFullYear() - 1970);
};

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

$scope.addregister = function(newregister){
	var accountType = '';
	var fileUploadName = 'userprofile'
    var image = newregister.img;

    Upload.upload({
	    url : '/api/containers/container/upload/?type=' + accountType + '&file_upload_name=' + fileUploadName,
	       data : {
	           file : image,
	           method : fileUploadName,
	           type : accountType
	       }
   	}).then(function(response) {
        newregister.img = response.data.result.files.file[0].name;
        userregistration.addregister(newregister).then(function(data) {
	        console.log(data) 
	        $scope.result = data.data.data;
	        angular.forEach($scope.result, function(value){
	        	console.log(value)	        	      	
            	if(newregister.email == value.email && newregister.username == value.username){
            		alert("Username and email is already exit");            		
            	}else if(newregister.email == value.email){            		
            		alert("Email is already exit");
            	}else if(newregister.username == value.username){
            		alert("Username is already exit");
            	}else{
                    alert("Registered Successfully");
            	}
        	});     
        }).catch(function(data) {
            console.log(data)
        });
  	});     	 
};

$scope.reset=function(){
	$scope.newregister={};	
};

}])
