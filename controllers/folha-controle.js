var hbs = require('hbs');

var {Usuario} = require('../models/usuario.js');
var funcoesGerais = require('../funcoes-gerais');


module.exports = {
	
	folhasUsuario: (req, res) => {
		console.log("Entrou em VER FOLHAS");
		
		var idUsuario = req.params.idUsuario;

		console.log("IDD: ", idUsuario);

		Usuario.findOne({_id: idUsuario}).
		then((resultado) => {

			var nomeUsuario = resultado.nome;
			var listaFolhas = resultado.folhas;
			
			hbs.registerHelper('mostrarFolhas', function(items, options) {
			  var codigoHTML = '';
			  
			  for(var i=0, l=items.length; i<l; i++) {
			
			  	var folhaIndividual = resultado.folhas[i];
				folhaIndividual.numeroFolha = (listaFolhas.indexOf(items[i]) + 1); // Adiciona a chave "numeroFolha" a cada folha da lista.
			  	
			    codigoHTML = codigoHTML + options.fn(items[i]);
			  }
			  
			  return codigoHTML;
			})

			res.render('ver-folhas', { 
			tituloPagina: 'Ver Folhas',
			idUsuario: idUsuario,
			nomeUsuario: nomeUsuario,
			listaFolhas: listaFolhas,
			});
		});
	},

	mostrarFolha_get: (req, res) => {
		console.log("Entrou em MOSTRAR FOLHA");

		var idUsuario = req.params.idUsuario;
		var numeroFolha = req.params.numeroFolha;

		Usuario.findOne({_id: idUsuario}).
		then((resultado) => {

			var nomeUsuario = resultado.nome;
			var folhaSelecionada = resultado.folhas[numeroFolha - 1];
			
			res.render('recordar-passado', {
				tituloPagina: 'Recordar Passado',
				idUsuario: idUsuario,
				nomeUsuario: nomeUsuario,
				folhaSelecionada: folhaSelecionada,
				numeroFolha: numeroFolha
			})
		})
	},

	novaFolha_get: (req, res) => {
		console.log("Entrou em MOSTRAR FOLHA GET");

		var idUsuario = req.params.idUsuario;

		Usuario.findOne({_id: idUsuario}).
		then((resultado) => {

			var nomeUsuario = resultado.nome;
			
			res.render('escrever-presente', { 
				tituloPagina: 'Escrever Presente',
				momento: 'presente',
				nomeUsuario: nomeUsuario,
				idUsuario: idUsuario
			});
		})
	},

	novaFolha_post: (req, res) => {
		console.log("Entrou em NOVA FOLHA");

		var idUsuario = req.params.idUsuario;
		var tituloFolha = req.body.titulo_folha;
		var corpoFolha = req.body.corpo_folha;

		Usuario.findOneAndUpdate({
			_id: idUsuario 
		}, {
			$push: {
				folhas: {
					tituloFolha: tituloFolha, 
					corpoFolha: corpoFolha,
					dataEscrita: funcoesGerais.coletarDataCompleta()
				}
			},
		})
		.then((resultado) => {

			var nomeUsuario = resultado.nome;

			res.redirect('/diario/' + idUsuario + '/exibir-folhas/');
		});
	},
};


console.log("Estou em folha-controle.js")





