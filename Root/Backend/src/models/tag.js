import mongoose from 'mongoose';
import { tagSchema } from '../db/schemas.js'
  
// Note that this syntax is required when using the ES6 import system.
export const Tag = mongoose.model('tag', tagSchema);
