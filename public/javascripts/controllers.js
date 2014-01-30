
	angular.module("myApp.Controllers", [])

		.controller("CadastroController", ["$scope", "UsuarioDAO", function ($scope, UsuarioDAO){

			function Usuario (){
				this.ds_email = "";
				this.ds_senha = "";
				this.nm_usuario = "";
				this.ds_endereco = {
					ds_pais : "",
					ds_estado : "",
					ds_cidade : "",
					ds_bairro : "",
					nr_cep : ""
				}
			}

			$scope.usuarios = [];
			$scope.usuario = new Usuario();

			$scope.adicionarUsuario = function (){
				var usuario = UsuarioDAO.save($scope.usuario);
				$scope.usuarios.push(usuario);
				$scope.usuario = new Usuario();
			};

			UsuarioDAO.findAll().success(function(data){
				$scope.usuarios = data.usuarios;	
			});
			

		}]);