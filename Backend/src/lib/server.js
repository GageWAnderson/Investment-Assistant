//Boilerplate server code from
//https://alligator.io/react/mern-stack-intro/
//Modified to use ES6 imports
'use strict'

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { mainRouter } from '../routes/main.js';
import { URI } from '../../../config/keys.js';
import passport from 'passport';

const app = express();
const router = express.Router();



// env variables
const PORT = process.env.PORT || 5000;



// Database
const MONGODB_URI = process.env.MONGODB_URI || URI;

mongoose.Promise = Promise;
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



//HTML, JSON, Body Parser middleware
app.use(bodyParser.json(),cors());
app.use(express.urlencoded({extended: true}));

//Passport middleware
app.use(passport.initialize());

//Passport config



// Setting routers
app.use(mainRouter);



// error middleware
app.all('*', (request, response) => {
  console.log('Returning a 404 from the catch-all route');
  return response.sendStatus(404);
});

//These variables start and stop the server on PORT
export const start = () => {
  app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
  })
}

export const stop = () => {
  app.close(PORT, () => {
    console.log(`Shut down on port: ${PORT}`)
  })
}
