var mongoose = require('mongoose');

mongoose.Promisse = global.Promisse;
mongoose.connect('mongodb://localhost:27017/OPresenteDiario', { useMongoClient: true });

module.exports = {mongoose};