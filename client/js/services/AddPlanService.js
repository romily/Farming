angular.module('app').factory('AddPlanService', ['$state','$q', '$http',
function($state,$q,$http) {
return ( {
    addPlan : addPlan,
    viewPlan :viewPlan,
    deletePlan:deletePlan,
    getLandAddress:getLandAddress,
    deletePlanForLand:deletePlanForLand
});

function  addPlan(data) {
    var deferred = $q.defer();
     $http.post('/api/cropplans', data).then(function(data) {
     //$state.go('cropplantab')
     console.log(data.data.id)
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



function getLandAddress(landid)
{
    var deferred=$q.defer();
    $http.get('/api/landregistrations/'+landid).then (function(data){
        console.log(data)
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




function viewPlan(id){
    var deferred = $q.defer();
    $http.get('/api/cropplans/?filter[where][userid]='+id)
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


function deletePlanForLand(landid)
{
    var deferred = $q.defer();
    console.log(landid)
 var landid="landid="+landid;
 console.log(landid)
 $http.get('/api/cropplans/delete-plan-for-land?'+landid).then(function(response){
    console.log(response)
    console.log(response.data.data)
    console.log(response.data.length)
    if (response.status === 200) {
        deferred.resolve(response.data);

         } else {
             deferred.reject(response.data);
             }
         }).catch(function(error) {
         deferred.reject(error.data);
 }).catch(function(error){
    console.log(error)
 });
 return deferred.promise;
};
}]);