//Boilerplate server code from
//https://alligator.io/react/mern-stack-intro/
//Modified to use ES6 imports
'use strict'

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
//import { allRouters } from '../routes/api/index.js';
import { testRouter } from '../routes/api/api-test-routes.js';
import { authRouter } from '../routes/api/user-routes.js';
import { URI } from '../../../config/keys.js'

const app = express();
const router = express.Router();

// env variables
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || URI

mongoose.Promise = Promise;
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//Body Parser middleware
app.use(bodyParser.json(),cors());

app.use(testRouter);
app.use(authRouter);

app.all('*', (request, response) => {
  console.log('Returning a 404 from the catch-all route');
  return response.sendStatus(404);
});

// error middleware
//app.use(middleware);

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
