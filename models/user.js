const mongoose = require('mongoose');

const crypto = require('crypto');//hash the password
const { v1: uuidv1 } = require('uuid');
//unique id

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,//trims whitespaces from before and after
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true
    },
    salt: String,//long unique string used to generate the hashed password
    role: {
        type: Number,
        default:0//user:0(default) , admin:1
    },
    history: {
        type: Array,
        default:[]
    }
},
{ timestamps : true }//automatically created and updated
);

//virtual feild
userSchema.virtual('password')//sending password from client side

.set(function(password){
    this._password = password
    this.salt = uuidv1()//random string
    this.hashed_password= this.encryptPassword(password)//saving encrypted password
})//set password

.get(function() {
    return this._password
})//get password

userSchema.methods = {
    encryptPassword: function(password) {
        if(!password) return '';
        try{//crpto -> hash anything
            return crypto.createHmac('sha1', this.salt)
                                .update(password)
                                .digest('hex')
        } catch(err) {
            return "";
        }
    }
};

module.exports = mongoose.model("User",userSchema );