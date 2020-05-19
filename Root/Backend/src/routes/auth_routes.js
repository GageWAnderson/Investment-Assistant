'use strict'

import Router from 'express';
import bodyParser from 'body-parser';
import { secretOrKey } from "../../../config/keys.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
      const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
          });
      });
    }
  });
});

authRouter.post('/login', (req,res,next) => {
  const { errors, isValid } = validateLogin(req.body);// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }const email = req.body.email;
  const password = req.body.password;// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };// Sign token
        jwt.sign(
          payload,
          secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});
