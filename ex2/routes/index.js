var express = require('express');
var router = express.Router();
var axios = require('axios');

var d = new Date().toISOString().substring(0, 16)

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:16000/contratos')
  .then(data => res.status(200).render('index', {title: "Contratos", "contratos": data.data, "date": d }))
  .catch(erro => res.status(501).render("error", { "error": erro })) 
  
});


/* Consultar uma Entrega (R) */
router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:16000/contratos/'+req.params.id)
    .then(data => res.status(200).render('paginaContrato', {title: "Contrato", "contrato": data.data, "date": d }))
    .catch(erro => res.status(502).render("error", { "error": erro })) 
});


/* Consultar uma Entrega (R) */
router.get('/entidades/:id', function(req, res, next) {
  axios.get('http://localhost:16000/contratos?entidade='+req.params.id)
    .then(data => res.status(200).render('paginaEntidade', {title: "Entidade", "entidades": data.data, "date": d }))
    .catch(erro => res.status(502).render("error", { "error": erro })) 
});

module.exports = router;
