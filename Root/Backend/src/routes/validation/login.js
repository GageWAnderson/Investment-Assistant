import 'validator';
import isEmpty from 'is-empty';
import validator from 'validator'; //Uses npm module for user validation

export function validateLogin(data) {
  let errors = {};// Convert empty fields to an empty string so we can use validator functions
  
  //Login fields are email,password (add username later?)
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";// Email checks

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }// Password checks
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }return {
    errors,
    isValid: isEmpty(errors)
  };
};