var {Usuario} = require('../models/usuario');


module.exports = {

	novoUsuario_post: (req, res) => {

		  var novoUsuario = new Usuario({
		    nome: req.body.nome,
		    email: req.body.email,
		    senha: req.body.senha
		  });
		  
		  novoUsuario.save().then((novoUsuario) => {
		    res.send('Sua conta foi criada com sucesso, ' + novoUsuario.nome);
		  },
		    (e) => {
		      res.status(400).send(e);
		      console.log('Não foi possível criar um novo usuário.');
		  });
		
	},

	loginUsuario_post: (req, res) => {

		// var emailUsuario = 'gabrielmaceddo.dev@gmail.com';
		// var senhaUsuario = 'gabrisl123';

		
		var emailUsuario = req.body.email;
		var senhaUsuario = req.body.senha;
		
		// res.send('Resposta do servidor: ' + emailUsuario + senhaUsuario);

		Usuario.find({email: emailUsuario, senha: senhaUsuario}).
		then((resultado) => {
			
			if (resultado[0] == null) { 
				console.log('Usuário não encontrado.');
				res.send('Usuário não encontrado.');
			};

			var nomeUsuario = resultado[0].nome;
			var idUsuario = resultado[0]._id;

			res.render('meu-menu', {
				tituloPagina: 'Meu Menu', 
				nomeUsuario: nomeUsuario,
				idUsuario: idUsuario
			});

			// res.send('Bem-vindo, ' + nomeUsuario);

		})	
	},
};



