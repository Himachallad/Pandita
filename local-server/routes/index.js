var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var assert = require('assert');

const url = 'mongodb://localhost:27017/test';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
