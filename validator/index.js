const { check, validationErrors } = require("express-validator");

exports.userSignupValidator =(res,req,next) => { 
  check("name", "Name is required").notEmpty();
  check("email")
    .isEmail().withMessage("Invalid email")
    .isLength({ min: 3, max: 32 }).withMessage("Email must be between 3 and 32 characters");
  check("password", "Password is required").notEmpty();
  check("password")
    .isLength({ min: 6 }).withMessage("Password must contain at least 6 characters")
    .matches(/\d/).withMessage("Password must contain a number");

    const errors = validationErrors(req);
    if(errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error : firstError});
    }

    next();



};
