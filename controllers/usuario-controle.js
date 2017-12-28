var {Usuario} = require('../models/usuario');
var hbs = require('hbs');

hbs.registerHelper('if', function(condicao, options) {
  if(condicao) {
    return options.fn(this);
  }
});




module.exports = {

	novoUsuario_post: (req, res) => {

		  var novoUsuario = new Usuario({
		    nome: req.body.nome,
		    email: req.body.email,
		    senha: req.body.senha
		  });

		  Usuario.find({email: novoUsuario.email}).
		  then((resultado) => {
		  	
		  	if (resultado[0] != null) { 

		  		res.render('capa', {
		  			tituloPagina: 'Capa', 
		  			usuarioExistente: true,
		  			msgPrincipalUsuario: 'Você já possui um diário, ' + novoUsuario.nome,
		  			msgSecundariaUsuario: 'Faça login para abri-lo!'
		  		});

		  	} else {

		  		novoUsuario.save().then((novoUsuario) => {
		  		  res.render('capa', {
		  		  	tituloPagina: 'Capa',
		  		  	mensagemStatus: 'conta-criada'
		  		  });
		  		},
		  		  (e) => {
		  		    res.status(400).send(e);
		  		    console.log('Não foi possível criar um novo usuário.');
		  		});	
		  	}
		  });

		  
		  
		 
	},

	loginUsuario_post: (req, res) => {

		var emailUsuario = req.body.email;
		var senhaUsuario = req.body.senha;

		Usuario.find({email: emailUsuario, senha: senhaUsuario}).
		then((resultado) => {
			
			if (resultado[0] == null) { 

				res.render('capa', {
					tituloPagina: 'Capa', 
					usuarioNaoEncontrado: true,
					msgPrincipalUsuario: 'Não encontramos você :(',
					msgSecundariaUsuario: 'Tente novamente'
				});
			};

			var nomeUsuario = resultado[0].nome;
			var idUsuario = resultado[0]._id;

			res.render('meu-menu', {
				tituloPagina: 'Meu Menu', 
				nomeUsuario: nomeUsuario,
				idUsuario: idUsuario
			});
		})	
	},
};



