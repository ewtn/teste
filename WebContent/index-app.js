'use strict';

angular

.module('SisanterAPP', ['ngRoute', 'InicioControllers', 'ServicosControllers'])

.controller('SisanterController', function($location)
{
	var vmPrincipal = this;
	
	console.log('SisanterController', vmPrincipal);
	
	vmPrincipal.chamarTela = function(rota)
	{
		$location.path('/' + rota);
	};
})

.config(function($routeProvider)
{
	$routeProvider
		.when('/sobre', {
			templateUrl : 'spas/inicio/inicio-tpl.html'
		})
		.when('/servicos', {
			templateUrl : 'spas/servicos/servicos-tpl.html'
		})
		.otherwise({
			redirectTo : '/sobre'
		});
});
