import Router from 'express';
import bodyParser from 'body-parser';
import { getStockPrice } from "../controller/stock-price.js";

export const stockRouter = new Router();

stockRouter.get('/price', (req,res) => {
	getStockPrice(req, res);
});
