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

router.get('/diario/:idUsuario/exibir-folhas', folha_controle.folhasUsuario);
router.get('/diario/:idUsuario/exibir-folhas/:numeroFolha', folha_controle.mostrarFolha_get); 
router.get('/diario/:idUsuario/nova-folha', folha_controle.novaFolha_get);
router.post('/diario/:idUsuario/nova-folha', folha_controle.novaFolha_post); 


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



// router.get('/rascunhos', (req, res)=>{

// var dataEscrita = funcoesGerais.coletarDataCompleta();

// res.render('rascunhos', {dataEscrita: dataEscrita});

// });



module.exports = router;
