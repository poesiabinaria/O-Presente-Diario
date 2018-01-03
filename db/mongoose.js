var mongoose = require('mongoose');

mongoose.Promisse = global.Promisse;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/OPresenteDiario', { useMongoClient: true });

module.exports = {mongoose};