const { body, validationResult } = require("express-validator");

exports.userSignupValidator = (req,res,next) => { 

  body("name", "Enter a valid Name").isLength({ min: 3});
  body("email","Enter a valid Email").isEmail();
  body("password", "Password is required").isLength({ min: 6 }).withMessage("Password must contain at least 6 characters")
    .matches(/\d/).withMessage("Password must contain a number");

  
  
  };




