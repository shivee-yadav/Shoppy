const User = require('../models/user');

exports.signup = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save()
        .then(savedUser => {
            res.json({ user: savedUser });
        })
        .catch(err => {
            res.status(400).json({ error: err });
        });
};