const  express = require('express');
const router = express.Router();

const { signup } = require('../controllers/user');
const {userSignupValidator} = require('../validator/index');

router.post('/signup', userSignupValidator, signup);

module.exports = router;
