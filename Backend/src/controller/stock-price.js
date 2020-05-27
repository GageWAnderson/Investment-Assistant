import dotenv from "dotenv";
import "isomorphic-fetch"
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

function getStockURL(stock) {
	return "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+
			stock + "&apikey=" + process.env.ALPHAVANTAGE_KEY;
}

async function getStockPrices(stocks) {
	let stockPrices = new Map();
	const fetchCalls = stocks.map(stock => {
		console.log("stockPrices");
		const url = getStockURL(stock);
		console.log(url);
    	return fetch(url)
    		.then(response => response.json())
    		.then(data => {
				  const price = data["Global Quote"]["05. price"];
				  stockPrices[stock] = price; 
			})
    		.catch((error) => {
  				console.log("Can't find price for: " + stock + ".");
			});
	});
	await Promise.all(fetchCalls);
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
