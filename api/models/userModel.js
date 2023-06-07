const mongoose = require('mongoose');
const { Schema } = mongoose;
// const UserSchema = new mongoose.Schema()
const UserSchema = new Schema({
    name: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    verified: Boolean,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;