import dotenv from "dotenv";
import "isomorphic-fetch"
dotenv.config({ silent: process.env.NODE_ENV === 'production' });


function getStockURL(stock) {
	return "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+
			stock + "&apikey=" + process.env.ALPHAVANTAGE_KEY;
}

function getStockPrices(stocks) {
	var fetchCalls = [];
	let stockPrices = new Map();
	var i;
	for (i = 0; i < stocks.length; i++) {
		const stock = stocks[i];
		const stockURL = getStockURL(stock);
		const fetchCall = () => {
			fetch(stockURL)
				.then(response => response.json())
				.then(data => {
			  		const price = data["Global Quote"]["05. price"];
			  		stockPrices[stock] = price;
			  	});
		}
		fetchCalls.push(fetchCall);
	}
	const fetchMap = async () => await Promise.all(fetchCalls);
	fetchMap();
	return stockPrices;
}

function fetchCaller(url, res, stock){
	fetch(url)
	  	.then(response => response.json())
	  	.then(data => {
	  		const price = data["Global Quote"]["05. price"];
	  		res.send(stock + ": " + price);
	  	})
	  	.catch((error) => {
  			res.send("Can't find price for: " + stock + ".");
		});
}



function getStockPrice(req,res){
	const stock = req.query.stock
	if (stock === undefined) {
		res.send('Requires stock name param in the url.');
	} else {
		const url = getStockURL(stock);
		fetchCaller(url, res, stock);
	}
}

export {getStockPrice, getStockPrices};
