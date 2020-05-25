import dotenv from "dotenv";
import "isomorphic-fetch"
dotenv.config({ silent: process.env.NODE_ENV === 'production' });


const fetchCaller = (url, res, stock) => {
	fetch(url)
	  	.then(response => response.json())
	  	.then(data => {
	  		const price = data["Global Quote"]["05. price"]
	  		res.send(stock + ": " + price);
	  	})
	  	.catch((error) => {
  			res.send("Can't find price for: " + stock + ".");
		});
}

export const getStockPrice = (req,res) => {
	const stock = req.query.stock
	if (stock === undefined) {
		res.send('Requires stock name param in the url.');
	} else {
		const url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+
					stock + "&apikey=" + process.env.ALPHAVANTAGE_KEY;
		fetchCaller(url, res, stock);
	}
};
