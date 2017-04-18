angular.module('app').factory('RegisterService', ['$state','$q', '$http',
function($state,$q,$http) {
return ( {
    addRegister : addRegister
});

function  addRegister(data) {
    var deferred = $q.defer();
    console.log("HTTTP")
    console.log($http)
     console.log("HTTTPPOST") 
     $http.post('/api/registers', data).then(function(data, status) {
         $state.go('login');
         if (status === 200) {
           
             deferred.resolve(data);

         } else {
             deferred.reject(data);
         }
     })
    .catch(function(data) {
        alert("Cannot Register! User With Given UserName Already Exists");
         deferred.reject(data);
     });
     return deferred.promise;    
};

}]);