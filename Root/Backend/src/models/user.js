//Boilerplate code to create a User object for
//MongoDB
import mongoose from 'mongoose';
import { userSchema } from '../db/schemas.js'
  
//Note that this syntax is required when using the ES6 import system.
export const User = mongoose.model('user', userSchema);
  