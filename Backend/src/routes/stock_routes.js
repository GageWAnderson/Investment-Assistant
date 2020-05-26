import Router from 'express';
import bodyParser from 'body-parser';
import { getStockPrice, getStockPrices } from "../controller/stock-price.js";

export const stockRouter = new Router();

stockRouter.get('/price', (req,res) => {
	getStockPrice(req, res);
});

stockRouter.get('/prices', (req, res) => {
	console.log(getStockPrices(["IBM","MMM"]));
	res.send("here");
});
