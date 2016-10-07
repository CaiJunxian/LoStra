"use strict";

const express = require('express');
const router = express.Router();
const compute = require('../util/compute');

router.post('/', function(req, res, next) {
	// let returnResult = {};

	//初始化结果
	// returnResult.principal = req.body.principal;
	// returnResult.odds = req.body.odds;
	// returnResult.bet = req.body.bet;
	// returnResult.money = req.body.money;
	// returnResult.times = req.body.times;
	// returnResult.ranNum = 0;
	// returnResult.result = "未命中！";
	// returnResult.times = req.body.times;

	// compute(returnResult);
	// console.log(returnResult);

	// res.render('result', {
	// 	principal: returnResult.principal, 
	// 	odds: returnResult.odds, 
	// 	bet: returnResult.bet, 
	// 	money: returnResult.money, 
	// 	times: returnResult.times
	// });
	console.log(req.body);
	req.body.principal *= 2;
	res.send(req.body);
});

module.exports = router;