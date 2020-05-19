import 'validator'
import 'is-empty'

export function validateLogin(data) {
  let errors = {};// Convert empty fields to an empty string so we can use validator functions
  
  //Login fields are email,password (add username later?)
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";// Email checks

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }return {
    errors,
    isValid: isEmpty(errors)
  };
};