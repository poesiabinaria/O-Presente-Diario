const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var NovoUsuario = new Schema ({
	nome: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true
	},
	senha: {
		type: String
	},
	folhas: {
		type: Array
	}
});


var Usuario = mongoose.model('Usuarios', NovoUsuario);


module.exports = {Usuario};