var hbs = require('hbs');

var {Usuario} = require('../models/usuario.js');
var funcoesGerais = require('../funcoes-gerais');

hbs.registerHelper('if', function(condicao, options) {
  if(condicao) {
    return options.fn(this);
  } else{
  	return options.inverse(this);
  }
});




module.exports = {
	
	folhasUsuario: (req, res) => {
		console.log("Entrou em VER FOLHAS");
		
		var idUsuario = req.params.idUsuario;

		Usuario.findOne({_id: idUsuario}).
		then((resultado) => {

			var nomeUsuario = resultado.nome;
			var listaFolhas = resultado.folhas;

			if (listaFolhas[0] == null){

				var diarioSemFolha = true;

				res.render('meu-menu', {
					tituloPagina: 'Meu Menu', 
					nomeUsuario: nomeUsuario,
					idUsuario: idUsuario,
					diarioSemFolha: diarioSemFolha,
					msgPrincipalUsuario: 'Ainda não há folhas em seu diário para recordar',
					msgSecundariaUsuario: 'Para criar uma, escolha Escrever!'
				});

			} else {

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
				diarioSemFolha: diarioSemFolha,
				listaFolhas: listaFolhas
				});
			}

			
			
			
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
				acao: 'recordar',
				momento: 'passado',
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
				acao: 'escrever',
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

			res.redirect('/diario/' + idUsuario + '/exibir-folhas');
		});
	},
};


console.log("Estou em folha-controle.js")





