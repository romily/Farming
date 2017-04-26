angular.module('app').factory('AddExpenseService', ['$state','$q', '$http',
function($state,$q,$http) {
return ( {
	putData:putData,
    getData:getData,
    addExpense:addExpense,
    deleteExpense:deleteExpense,
    viewExpense:viewExpense
});
var items;
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

function addExpense(data)
{
	var deferred = $q.defer();
	console.log(data.planid)
console.log(data.voucher)
console.log(data.activity)
console.log(data.date)
console.log(data.labour)
console.log(data.amount)
console.log(data.paidto)
console.log(data.spender)
console.log(data.chequeno)
console.log(data.bank)
console.log(data.accno)

console.log(data.expense_category.label)

	$http.post('/api/cropexpenses',data).then (function (response){
		console.log(response)
		if(response.status==200)
		 deferred.resolve(response);
		else
			deferred.reject(response);
	}).catch (function (error){
		console.log("Error from service"+error)
		deferred.reject(data);
	});
	 return deferred.promise;
};



function viewExpense(id){
    var deferred = $q.defer();
    console.log(id)
    $http.get('/api/cropexpenses/?filter[where][userid]='+id)
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

function deleteExpense(id)
{
    var deferred = $q.defer();
    $http.delete('/api/cropexpenses/'+id)
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