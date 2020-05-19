import 'validator'
import 'is-empty'
import isEmpty from 'is-empty';
import validator from 'validator'; //Uses npm module for user validation

export function validateRegister(data) { //http form gives username,email,password,password2
    let errors = {};

    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    console.log(data.username)
    console.log("Hello?")
    console.log(data.username,data.email,data.password,data.password2);

    //Name Checks:
    if(validator.isEmpty(data.username)){
        errors.username = "Username field required"
    }

    //Email checks:
    if(validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    } else if (!validator.isEmail(data.email)){
        errors.email = "Email format is invalid";
    }

    //Password Checks:
    if(validator.isEmpty(data.password)){
        errors.password = "Password field required";
    }
    if(validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password field required";
    }
    if(validator.isLength(data.password,{min:8,max:24})){
        errors.password = "Password must be between 8 and 24 characters inclusive";
    }
    if(validator.equals(data.password,data.password2)){
        errors.password2 = "Passwords must match.";
    }

    return {
        errors,
        isValid: isEmpty(errors) //Is valid boolean checks for any and all errors
    }
}