function compute(preData){

	console.log("preData: " + preData);//打印preData


	let bet = preData.bet;//获取投注号码
	let principal = preData.principal;//获取本金
	let odds = preData.odds;//获取赔率
	let money = preData.money;//获取投注金额
	let times = preData.times;//获取期数
	let multiply = preData.multiply;//获取递增倍数
	let moneyAttr = [];


	console.log("投注号码：" + bet);//打印投注号码


	for(let j = 0; j < times; ++j){
		let ranNum = parseInt(Math.random() * 9, 10);//生成伪随机数
		console.log("开奖号码：" + ranNum);
		moneyAttr.push(money);
		preData.result.push(ranNum);//添加开奖号码
		for(let i = 0, n = bet.length; i < n; ++i){
			let b = bet[i];
			let patt1 = new RegExp(b);
			if(patt1.test(ranNum)){
				preData.count++;//命中次数加一
				preData.principal = preData.principal - money + money * odds;
			}
			else{
				preData.principal = preData.principal - money;
			}
		}
		money *= multiply;
	}
	console.log(moneyAttr);

	return preData;
}

module.exports = compute;