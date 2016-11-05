"use strict";
const express = require('express');
const router = express.Router();
const compute = require('../util/compute');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	let returnResult = {};

	//初始化结果
	returnResult.principal = req.body.principal;
	returnResult.odds = req.body.odds;
	returnResult.bet = req.body.bet;
	returnResult.money = req.body.money;
	returnResult.times = req.body.times;
	returnResult.count = 0;//命中次数
	returnResult.result = [];//开奖号码
	returnResult.multiply = req.body.multiply;
	compute(returnResult);
	console.log(returnResult);

	res.render('result', {
		principal: returnResult.principal, 
		odds: returnResult.odds, 
		bet: returnResult.bet, 
		money: returnResult.money, 
		times: returnResult.times, 
		result: returnResult.result, 
		count: returnResult.count, 
		multiply: returnResult.multiply
	});

});

module.exports = router;
