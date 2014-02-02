
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
					$scope.usuario = new Usuario();
				});
				listarTodos();
			};

			$scope.alterar = function(usuario) {
				$scope.usuario = usuario;
			};

			$scope.excluir = function(usuario) {
				UsuarioDAO.excluir(usuario);
				listarTodos();
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