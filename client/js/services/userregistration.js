angular.module('app').factory('userregistration', ['$state','$q', '$timeout', '$http',
function($state,$q, $timeout, $http) {

var user = null;

return ({
	addregister : addregister,
	getstate:getstate,
	getdistrict:getdistrict,
	getvillage:getvillage
	
});

function  getstate() {
	var deferred = $q.defer();
	 $http.get('/api/states/').then(function(data) {
	 	deferred.resolve(data);
	 	console.log(data)
	 }, function(error){
	 	deferred.reject(error);
	 })
	 return deferred.promise;    
};

function  getdistrict(id) {
	var deferred = $q.defer();
	 $http.get('/api/districts?filter[where][state_id]='+id).then(function(data) {
	 	deferred.resolve(data);
	 }, function(error){
	 	deferred.reject(error);
	 })
	 return deferred.promise;    
};

function  getvillage(distid) {
	var deferred = $q.defer();
	 $http.get('/api/villages?filter[where][district_id]='+distid).then(function(data) {
	 	deferred.resolve(data);
	 }, function(error){
	 	deferred.reject(error);
	 })
	 return deferred.promise;    
};

function  addregister(data) {
	var deferred = $q.defer();
	$http.post('/api/farmpersonals/farmer-registration', data).then(function(response) {
        deferred.resolve(response);
    }, function(error){
	 	deferred.reject(error);
	})
	 return deferred.promise;    
};

}]);


