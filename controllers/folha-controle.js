var hbs = require('hbs');

var {Usuario} = require('../models/usuario.js');
var funcoesGerais = require('../funcoes-gerais');


module.exports = {
	
	folhasUsuario: (req, res) => {
		console.log("Entrou em VER FOLHAS");
		
		var idUsuario = req.params.idUsuario;
		var nomeUsuario = req.params.nomeUsuario;

		console.log("IDD: ", idUsuario);

		Usuario.findOne({_id: idUsuario}).
		then((resultado) => {

			var listaFolhas = resultado.folhas;
			
			hbs.registerHelper('mostrarFolhas', function(items, options) {
			  var codigoHTML = '';
			  
			  for(var i=0, l=items.length; i<l; i++) {
			
			  	var folhaIndividual = resultado.folhas[i];
				folhaIndividual.numeroFolha = 'Folha ' + (listaFolhas.indexOf(items[i]) + 1); // Adiciona a chave "numeroFolha" a cada folha da lista.
			  	
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
		.then((result) => {
			res.send(result);
		});
	},
};


console.log("Estou em folha-controle.js")





