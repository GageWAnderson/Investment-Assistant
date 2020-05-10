'use strict'

import  Router  from 'express';
import bodyParser from 'body-parser';

//import basicAuth from '../lib/basic-auth-middleware.js'
import {User} from '../../models/user.js';

export const authRouter = new Router();

//User signup API (takes a signup form)
authRouter.post('/api/signup', (req, res, next) => {
  console.log('hit /api/signup')

  User.create(req.body)
  .then(token => res.send(token))
  .catch(next)
})

//Testing to see if the API works by getting all the users:
authRouter.get('/api/all-users', (req,res,next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
});

//User login API
// authRouter.get('/api/login', basicAuth, (req, res, next) => {
//   console.log('hit /api/login')

//   req.user.tokenCreate()
//   .then(token => res.send(token))
//   .catch(next)
// })