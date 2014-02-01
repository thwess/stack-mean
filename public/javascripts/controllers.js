
	angular.module("myApp.Controllers", [])

		.controller("CadastroController", ["$scope", "UsuarioDAO", function ($scope, UsuarioDAO){

			function Usuario (){
				this.ds_email = "";
				this.ds_senha = "";
				this.nm_usuario = "";
			}

			$scope.usuarios = [];
			$scope.usuario = new Usuario();

			$scope.adicionarUsuario = function (){
				UsuarioDAO.save($scope.usuario).then(function(resultado) {
					$scope.usuarios.push(resultado.usuario);
					$scope.usuario = new Usuario();
				});
			};

			$scope.buscarUsuario = function(email) {
				if(!email){
					listarTodos();
					return;
				}
				UsuarioDAO.findByEmail(email).then(function(resultado){
					$scope.usuarios = [];
					if(resultado.usuario){
						$scope.usuarios.push(resultado.usuario);	
					}
				});
			};
			function listarTodos() {
				UsuarioDAO.findAll().then(function(data){
					$scope.usuarios = data.usuarios;	
				});
			};

			listarTodos();
						
		}]);