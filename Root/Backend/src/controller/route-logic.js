import { getStockPrice } from './stock-price.js';
import { User } from '../models /user.js';

//Reccomend discrete stocks to buy /sell based on current prices (from API)

//Find out how many dollars you need to buy/sell in each sector
//Get a sorted list of the stocks in a given sector by price 

//One of the inputs is how much $ the money the user is willing to spend to rebalance (User will input this in a menu)
//If that number is not enough, sell from above that margin (other sectors) to rebalance 

//Use a margin of error to decide when to stop reccomending stocks to buy and sell

//Use Dynamic programming to find out exactly what stocks to buy/sell
//https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/

//Unbounded approach to match the fact you can buy/sell infinite stocks
//https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/

//Input:
//1. Stocks you can buy/sell
//2. User's portfolio (with their watchlist)
//3. How much money the user is willing to spend on the portfolio

export function reccomendStocks(data) {
    stocks = 0;
    //User.getPortfolio()
    //User.getWatchlist()
    //how much money they are willing to spend is in the http request, part of which is passed through data (probably as JSON)
    return stocks;
}