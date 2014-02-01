		
		angular.module("myApp.Filters", [])

		.filter("MaskSenha", function(){
			return function() {
				return "********";
			}
		});