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

export {getStockPrices};
