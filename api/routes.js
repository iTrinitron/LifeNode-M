var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('./models/exercises.js');

/* GET /todos listing. */
router.get('/exercises', function(req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /todos */
router.post('/exercises', function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/exercises/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

import fs from 'fs';
import parse from 'csv-parse';

/* GET /todos/id */
router.get('/bank', function(req, res, next) {
  //var parsed = parse('./bank.csv');
  //res.json(parsed);

  var parser = parse({delimiter: ','}, function(err, data){
    res.json(data);
  });

  fs.createReadStream(__dirname+'/bank.csv').pipe(parser);
});



module.exports = router;