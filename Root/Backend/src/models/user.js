//Boilerplate code to create a User object for
//MongoDB
import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    created: { type: Date, default : () => new Date()},
  });
=======
import { userSchema } from '../db/schemas.js'

  
//Note that this syntax is required when using the ES6 import system.
export const User = mongoose.model('user', userSchema);
  