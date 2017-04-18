
angular.module('app').factory('userprofileService',['$state','$q','$http',function($state,$q,$http)
{
    return({ 
        getprofile:getprofile,
        landregister:landregister, 
        editprofile:editprofile     
    }); 

    function  getprofile(id) {
        var deferred = $q.defer();          
        $http.get('/api/farmpersonals?filter={"include":{"relation":"landreg","scope":{"include":["stateInfo","districtInfo", "villageInfo"]}},"where":{"id":'+id+'}}').then(function(response) {
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        })
         return deferred.promise;    
    };

    function  landregister(data) {
        console.log(data.data)
        var deferred = $q.defer();
        $http.post('/api/landregistrations', data).then(function(response) {
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        })
         return deferred.promise;    
    };

    function  editprofile(data) {
        console.log(data)
        var deferred = $q.defer();
        $http.put('/api/farmpersonals/'+data.id,data).then(function(response) {
            console.log(response)            
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        })
         return deferred.promise;    
    };   

  

}])