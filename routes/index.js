const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var hbs = require('hbs');

var {mongoose} = require('../db/mongoose'); 

var usuario_controle = require('../controllers/usuario-controle');
var folha_controle = require('../controllers/folha-controle');

hbs.registerHelper('if', function(condicao, options) {
  if(condicao) {
    return options.fn(this);
  } else{
  	return options.inverse(this);
  }
});

router.get('/', (req, res) => {
  res.render('capa', { 
  	tituloPagina: 'Capa',
  	usuarioExistente: false
  });
});

router.get('/saiba-mais', (req, res) => {
  res.render('saiba-mais', { 
  	tituloPagina: 'Saiba Mais'});
});

router.post('/', usuario_controle.loginUsuario_post);
router.post('/juntarse', usuario_controle.novoUsuario_post);

router.get('/diario/:idUsuario/exibir-folhas', folha_controle.folhasUsuario);
router.get('/diario/:idUsuario/exibir-folhas/:numeroFolha', folha_controle.mostrarFolha_get); 
router.get('/diario/:idUsuario/nova-folha', folha_controle.novaFolha_get);
router.post('/diario/:idUsuario/nova-folha', folha_controle.novaFolha_post); 


module.exports = router;
