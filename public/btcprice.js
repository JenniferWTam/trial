// const CoinGecko = require('coingecko-api');

function BTC(){

// 	const CoinGeckoClient = new CoinGecko();
//     let data = await CoinGeckoClient.exchanges.fetchTickers('bitfinex', {
//         coin_ids: ['bitcoin']
//     });
//     var _coinList = {};
//     var _datacc = data.data.tickers.filter(t => t.target == 'USD');
//     [
//         'BTC'
//     ].forEach((i) => {
//         var _temp = _datacc.filter(t => t.base == i);
//         var _res = _temp.length == 0 ? [] : _temp[0];
//         _coinList[i] = _res.last;
//     })
// console.log(_coinList);

		return (
		<Card
			txtcolor="black"
			header= 'price goes here'
			text= "Click image below to be redirected to Coinbase"
			body= {(<a href="https://www.coinbase.com"><img src="bitcoin.png" className="img-fluid" alt="Responsive image"/></a>)}
		/>
		);  

		
	}