angular.module('app').factory('EditPlanService',['$state','$q','$http',function($state,$q,$http)
{
	return({
		editplan:editplan,
		edit:edit
	});


function editplan(id){
var deferred = $q.defer();
 $http.get('/api/cropplans/'+id).then(function(response) {
   if (response.status === 200) {
      deferred.resolve(response.data);
    } else {
      deferred.reject(response.data);
    }
  }).catch(function (error){
    deferred.reject(response.data);
  })
  return deferred.promise;
};

function edit(data,id){
var deferred = $q.defer();
 	$http.put('/api/cropplans/'+id,data).then(function(response){
  
 console.log(response.data)
 if (response.status === 200) {
      deferred.resolve(response.data);
    } else {
      deferred.reject(response.data);
    }

}).catch(function (error){
    deferred.reject(response.data);

   })
return deferred.promise;
};
 
 }]);