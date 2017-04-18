
angular.module('app').factory('userauthentication',['$state','$q','$http',function($state,$q,$http)
{
    return({
        login:login, 
        getprofile:getprofile       
    });     

    function  login(data) {
        var deferred = $q.defer();
         var data = "username=" + data.username + "&password=" +data.password;     
        $http.get('/api/farmpersonals/farmer-login?'+data).then(function(response) {
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        })
         return deferred.promise;    
    };

    function  getprofile(id) {
        var deferred = $q.defer();          
        $http.get('/api/farmpersonals?filter[where][id]='+id).then(function(response) {
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        })
         return deferred.promise;    
    };
}])