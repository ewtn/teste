'use strict';

angular

.module('InicioServices', [])

.service('InicioService', function()
{		
	function listarInformacoes()
    {
		var listas = {};
		
		listas.obrigatorios = {};
		listas.facultativos = {};
		
		listas.obrigatorios.interativos = [];
		listas.obrigatorios.naoInterativos = [];
		
		listas.facultativos.interativos = [];
		listas.facultativos.naoInterativos = [];
		
		var obj = {};
		
		listas.facultativos.naoInterativos.push(obj);
		
		return listas;
    }
	
	var service = {
		listarInformacoes : listarInformacoes
	};
	
	return service;	
});
