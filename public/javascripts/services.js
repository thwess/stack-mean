
	angular.module("myApp.Services", []).

	service("UsuarioDAO", ["$http", function($http){

		function save(usuario) {
			return $http.post("/add/user", usuario).then(function(retorno){
				return retorno.data;
			}, function(data){
				return {};
			});
		};

		function findAll() {
			return $http.get("/find/user").then(function(retorno){
				return retorno.data;
			}, function(data) {
				return {};
			});
		};


		function findByEmail(email){
			return $http.get("/find/user/" + email).then(function(retorno){
				return retorno.data;
			}, function(retorno){
				return {};
			});
		};

		return {
			save : save,
			findAll : findAll,
			findByEmail : findByEmail
		};

	}]);