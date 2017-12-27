const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const hbs = require('hbs');

var {mongoose} = require('../db/mongoose'); 

var funcoesGerais = require('../funcoes-gerais');
var usuario_controle = require('../controllers/usuario-controle');
var folha_controle = require('../controllers/folha-controle');


router.post('/', usuario_controle.loginUsuario_post);
router.post('/juntarse', usuario_controle.novoUsuario_post);

router.get('/diario/:idUsuario/:nomeUsuario/ver-folhas', folha_controle.folhasUsuario);
router.post('/diario/:idUsuario/folhas/nova-folha', folha_controle.novaFolha_post); 


/* GET Capa. */
router.get('/', (req, res, next) => {
  res.render('capa', { 
  	tituloPagina: 'Capa'});
});


/* GET Saiba Mais. */
router.get('/saiba-mais', (req, res, next) => {
  res.render('saiba-mais', { 
  	tituloPagina: 'Saiba Mais'});
});


/* GET Escrever Presente. */
router.get('/diario/:idUsuario/:nomeUsuario/escrever-presente', (req, res, next) => {

  var idUsuario = req.params.idUsuario;
  var nomeUsuario = req.params.nomeUsuario;

  res.render('escrever-presente', { 
  	tituloPagina: 'Escrever Presente',
    momento: 'presente',
    nomeUsuario: nomeUsuario,
    idUsuario: idUsuario
  });

  console.log('id digitada é: ', idUsuario);
  console.log('nome usuario é: ', nomeUsuario);
});


/* GET Recordar Passado. */
router.get('/recordar-passado', (req, res, next) => {
  res.render('recordar-passado', { 
  	title: 'Recordar Passado' + tituloPrincipal,
  	momento: 'passado'
  });
});


















router.get('/rascunhos', (req, res)=>{

var dataEscrita = funcoesGerais.coletarDataCompleta();

res.render('rascunhos', {dataEscrita: dataEscrita});

});



module.exports = router;
