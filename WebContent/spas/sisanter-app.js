'use strict';

angular

.module('sisanterAPP', ['ngRoute', 'inicioControllers', 'servicosControllers'])

.controller('sisanterController', function($location) {
	var vmPrincipal = this;
	
	console.log('sisanterController', vmPrincipal);
	
	vmPrincipal.chamarTela = function(rota) 
	{
		$location.path('/'+rota);
	}
})	

.config(
	['$routeProvider', 
	function($routeProvider) 
	{
		$routeProvider
			.when('/sobre', {templateUrl: 'inicio/inicio-tpl.html'})			
			.when('/servicos', {templateUrl: 'servicos/servicos-tpl.html'})
			.otherwise({
				redirectTo : '/servicos'
			}
		);
	} 
]);