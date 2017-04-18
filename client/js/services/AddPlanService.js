angular.module('app').factory('AddPlanService', ['$state','$q', '$http',
function($state,$q,$http) {
return ( {
    addPlan : addPlan,
    viewPlan :viewPlan,
    deletePlan:deletePlan
});

function  addPlan(data) {
    var deferred = $q.defer();
     $http.post('/api/cropplans', data).then(function(data) {
     $state.go('cropplantab')
         if (data.status === 200) {
             deferred.resolve(data);

         } else {
             deferred.reject(data);
         }
     }).catch(function(data) {
       deferred.reject(data);
     });
     return deferred.promise;    
};
function viewPlan(){
    var deferred = $q.defer();
    $http.get('/api/cropplans/')
    .then(function(response)
    {
        if (response.status === 200) {
           
             deferred.resolve(response.data);

         } else {
             deferred.reject(response.data);
             }})
    .catch(function(error) {
         deferred.reject(response.data);
     });
     return deferred.promise;   
};

function deletePlan(id)
{
    var deferred = $q.defer();
    $http.delete('/api/cropplans/'+id)
    .then(function(response) {
    if (response.status === 200) {
        deferred.resolve(response.data);

         } else {
             deferred.reject(response.data);
             }
         }).catch(function(error) {
         deferred.reject(response.data);
     });
 return deferred.promise;   

};

}]);