var mongoose = require('mongoose');

mongoose.Promisse = global.Promisse;
// mongoose.connect(process.env.MONGODB_URI || '', { useMongoClient: true });

let db = {
  localhost: 'mongodb://localhost:27017/OPresenteDiario',
  mlab: 'mongodb://Gabriel:$opresentediariodb$@ds237947.mlab.com:37947/o-presente-diario'
};

mongoose.connect( (process.env.PORT ? db.mlab : db.localhost), { useMongoClient: true });

// mongoose.connect( (db.localhost || db.mlab), { useMongoClient: true });

module.exports = {mongoose};