import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import 'mongoose';
import { User } from 'mongoose';
import { keys } from "./keys.js"

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = keys.secretOrKey;

function jwtStrategy(passport) {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};

export const jwtStrategy = jwtStrategy(passport);