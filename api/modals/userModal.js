const mongoose = require('mongoose');
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");

const { Schema } = mongoose;



// const UserSchema = new mongoose.Schema()
const UserSchema = new Schema({
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: {type: String, required: true},
});

UserSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"});
    return token
};


const UserModel = mongoose.model('User', UserSchema);


module.exports = {UserModel};