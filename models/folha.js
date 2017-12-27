const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var NovaFolha = new Schema ({

	folhas: {
		type: Array
	}

	// tituloFolha: {
	// 	type: String,
	// 	trim: true
	// },
	// corpoFolha: {
	// 	type: String,
	// 	trim: true
	// },
	// dataEscrita: {
	// 	type: String,
	// 	trim: true
	// }
});

var Folha = mongoose.model('Folhas', NovaFolha);

module.exports = {Folha};