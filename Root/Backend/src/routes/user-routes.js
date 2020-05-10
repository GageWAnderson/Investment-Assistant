'use strict'

import  Router  from 'express';
import bodyParser from 'body-parser';

//import basicAuth from '../lib/basic-auth-middleware.js'
import {User} from '../models/user.js';

export const authRouter = new Router();

authRouter.post('/api/signup', (req, res, next) => {
  console.log('hit /api/signup')

  User.create(req.body)
  .then(token => res.send(token))
  .catch(next)
})

// authRouter.get('/api/login', basicAuth, (req, res, next) => {
//   console.log('hit /api/login')

//   req.user.tokenCreate()
//   .then(token => res.send(token))
//   .catch(next)
// })