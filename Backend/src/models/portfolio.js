import mongoose from 'mongoose';
import { portfolioSchema } from '../db/schemas.js'
  
// Note that this syntax is required when using the ES6 import system.
export const Portfolio = mongoose.model('portfolio', portfolioSchema);
