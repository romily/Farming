angular.module('app').factory('EditExpenseService',['$state','$q','$http',function($state,$q,$http)
{
	return({
    putData:putData,
    getData:getData,
		editexpense:editexpense,
		edit:edit
	});
var record;

function putData(data)
{
  var deferred = $q.defer();
  console.log("GI")
  
  record=data;
return deferred.promise;
};


function getData()
{
  return record;
};




function editexpense(id){
var deferred = $q.defer();
 $http.get('/api/cropexpenses/'+id).then(function(response) {
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
 	$http.put('/api/cropexpenses/'+id,data).then(function(response){
  
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