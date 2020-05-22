import mongoose from 'mongoose';
import { stockSchema } from '../db/schemas.js'
  
// Note that this syntax is required when using the ES6 import system.
export const Stock = mongoose.model('stock', stockSchema);
