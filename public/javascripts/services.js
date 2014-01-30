
	angular.module("myApp.Services", []).

	service("UsuarioDAO", function($http){

		function save(usuario) {
			$http.post("/add/user", usuario).success(function(data){
				return data.usuario;
			});
		};

		function findAll() {
			return $http.get("/find/user").success(function(data){
				return data || {};
			});
		};


		function findByEmail(email){
			return $http.get("/find/user", email).success(function(data){
				return data.usuarios || [];
			});
		};

		return {
			save : save,
			findAll : findAll,
			findByEmail : findByEmail
		};

	});