'use strict'

import Router from 'express';
import bodyParser from 'body-parser';
import "../../../config/keys.js"

//Load user input validation
import { validateRegister } from './validation/register.js';
import { validateLogin } from './validation/login.js';

import {User} from '../models/user.js';

export const authRouter = new Router();

//User signup API (takes a signup form)
authRouter.post('/signup', (req, res, next) => {

  const { errors, isValid } = validateRegister(req.body);
  console.log(req.body)
  if(!isValid){
    return res.status(400).json(errors); //Return all the errors in JSON format
  }
  User.findOne({ email: req.body.email })
  .then(user => {
    if(user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      User.create(req.body) //Might have to replace this with JWT, password hashing stuff...
      .then(token => res.send(token))
      .catch(next)
    }
  });
});

//Testing to see if the API works by getting all the users:
authRouter.get('/all-users', (req,res,next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
});
