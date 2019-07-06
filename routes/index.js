var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('WEBLOGIC');
    collection.find({},{sort: { aplicacao: 1 }},function(e,docs){
        res.render('index', {
            "dados" : docs
        });
    });
});

router.get('/producao2', function(req, res) {
    var db = req.db;
    var collection = db.get('WEBLOGIC');
    collection.find({},{sort: { aplicacao: 1 }},function(e,docs){
        res.render('producao2', {
            "dados" : docs
        });
    });
});

router.get('/homologacao', function(req, res) {
    var db = req.db;
    var collection = db.get('WEBLOGIC');
    collection.find({},{sort: { aplicacao: 1 }},function(e,docs){
        res.render('homologacao', {
            "dados" : docs
        });
    });
});

router.get('/desenvolvimento', function(req, res) {
    var db = req.db;
    var collection = db.get('WEBLOGIC');
    collection.find({},{sort: { aplicacao: 1 }},function(e,docs){
        res.render('desenvolvimento', {
            "dados" : docs
        });
    });
});

module.exports = router;
