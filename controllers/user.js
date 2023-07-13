const User = require('../models/user');
const {errorHandler} = require("../helpers/dbErrorHandler");

exports.signup = (req, res) => {
    //console.log("req.body", req.body);
    const user = new User(req.body);
    user.save()
        .then(savedUser => {
            user.salt=undefined
            user.hashed_password=undefined
            res.json({ user: savedUser });
        })
        .catch(err => {
            res.status(400).json({ error: errorHandler(err) });
        });
};