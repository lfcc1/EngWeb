var express = require('express');
var router = express.Router();

var axios = require('axios')

var apiPassadeira = 'http://localhost:3051/passadeiras/'


/*  Path:   /passadeiras */

router.get('/', function(req, res, next) {
    axios.get(apiPassadeira)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
});

router.get('/:id', function(req, res, next) {
    axios.get(apiPassadeira + req.params.id)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
});

router.post('/', function(req, res, next) {
    axios.post(apiPassadeira, req.body)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
});

router.put('/:id', function(req, res, next) {
    axios.put(apiPassadeira + req.params.id, req.body)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
});

router.delete('/:id', function(req, res, next) {
    axios.remove(apiPassadeira)
    .then(dados => res.jsonp(dados.data))
    .catch(error => res.status(500).jsonp(error) )
});

module.exports = router;