import dotenv from "dotenv";
import "isomorphic-fetch"
dotenv.config({ silent: process.env.NODE_ENV === 'production' });


// console.log()

const fetchCaller = (url, res, stock) => {
	fetch(url)
	  	.then(response => response.json())
	  	.then(data => {
	  		const price = data["Global Quote"]["05. price"]
	  		console.log(price);
	  		if (price) {
	  			console.log("not here");
	  			res.send(stock + ": " + price);
	  		} else {
	  			console.log("here");
	  			res.send("Can't find price for: " + stock + ".");
	  		}
	  		console.log("what5");
	  	});
}

export const getStockPrice = (req,res) => {
	console.log("test");
	console.log("test");
	console.log("test");
	const stock = req.query.stock
	console.log(stock)
	if (stock === undefined) {
		res.send('Requires stock name param in the url.');
	} else {
		const url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+
					stock + "&apikey=" + process.env.ALPHAVANTAGE_KEY;
		fetchCaller(url, res, stock);
	}
	
};
