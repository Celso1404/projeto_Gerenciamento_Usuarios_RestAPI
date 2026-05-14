const AssertPlus = require('assert-plus');
var express = require('express');
var assert = require('assert');
var restify = require('restify-clients')
var router = express.Router();

var client = restify.createJsonClient({
    url: 'http://localhost:4000'
});

router.get('/', function(req, res, next) {
  client.get('/users', function(err, request, response, obj){
    AssertPlus.ifError(err);
    res.json(obj);
  });
});

module.exports = router;
