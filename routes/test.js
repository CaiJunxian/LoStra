"use strict";

const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
	console.log(req.body);
	res.send(req.body);
});

router.get('/', function(req, res, next){
	res.render('test');
});

module.exports = router;