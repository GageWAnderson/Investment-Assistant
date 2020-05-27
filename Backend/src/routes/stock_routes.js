import Router from 'express';
import bodyParser from 'body-parser';
import { getStockPrices } from "../controller/stock-price.js";

export const stockRouter = new Router();

stockRouter.get('/prices', (req, res) => {
	getStockPrices(["IBM","MMM"]).then(stockPrices => res.send(stockPrices));
});
