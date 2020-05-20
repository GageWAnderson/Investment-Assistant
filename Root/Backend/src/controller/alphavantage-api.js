// config.js
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

console.log(process.env.ALPHAVANTAGE_KEY)



