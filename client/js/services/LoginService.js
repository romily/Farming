angular.module('app').factory('LoginService',['$state','$q','$http',function($state,$q,$http)
{
	return({
		Login:Login,
		getData:getData
	});
var savedData;
	function Login (data) {
		var deferred=$q.defer();
		console.log("I am start of Login function")
		console.log(data)
		console.log(data.username)
		console.log(data.password)
$http.get('/api/registers/?filter[where][username]='+data.username)
		.then(function(response)
		{
			var u=response.data[0].username;
			var p=response.data[0].password;
			if(p==data.password)
			{
				savedData=response.data[0].name;
			$state.go('welcome');
			}
			else
				alert("Login Fails Due To Incorrect Password");
		})
		.catch(function(data)
			{
				alert("User Does not exists with given Username");
				deferred.reject(data);
			});

		
};
function getData()
{
	 return savedData;
};
}]);