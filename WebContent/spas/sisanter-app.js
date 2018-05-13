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

.config(['$routeProvider', function($routeProvider)
{
	$routeProvider.when('/sobre', {
		templateUrl : 'inicio/inicio-tpl.html'
	})
	.when('/servicos', {
		templateUrl : 'servicos/servicos-tpl.html'
	})
	.otherwise({
		redirectTo : '/servicos'
	});
}]);
