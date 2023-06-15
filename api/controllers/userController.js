const User = require("../modals/userModal");
const { mongoose } = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'secret12345';

//get all notes
const registerUser = async (req, res) => {
    // mongoose.connect(process.env.MONGO_URL);
    const { name, email, password } = req.body;
    // res.json({name, email, password});
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
            verified: false,
        });
        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e);
    }
};

//create note
const loginUser = async (req, res) => {
    // mongoose.connect(process.env.MONGO_URL);
    const { email, password } = req.body;
    try {
        const userDoc = await User.findOne({ email })
        if (userDoc) {
            // res.json('found')
            const passOk = bcrypt.compareSync(password, userDoc.password)
            if (passOk) {
                jwt.sign({
                    email: userDoc.email,
                    id: userDoc._id,
                    name: userDoc.name
                }, jwtSecret, {}, (err, token) => {
                    if (err) throw err;
                    // res.cookie('token', token).json('password ok')
                    // res.cookie('token', token).json({ userDoc, token })
                    res.status(200).json(token)
                });
            } else {
                res.status(401).json('password wrong')
            }
        } else {
            res.status(401).json('User information not found.')
        }
    } catch (error) {
        res.status(401).json(error)
    }
};

//logout
const logoutUser = async (req, res) => {
    try {
        res.cookie('token', '').json('you just logged out!');
    } catch (error) {
        res.status(500).json(error)
    }
}

//
const sessionInfo = async (req, res) => {

    // mongoose.connect(process.env.MONGO_URL);
    // const { token } = req.cookies;
    // if (token) {
    //     jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    //         if (err) throw err;
    //         // const userDoc = await User.findById(userData.id);
    //         const { name, email, _id } = await User.findById(userData.id);
    //         res.json({ name, email, _id });
    //     })
    // } else {
    //     res.json(null);
    // }
}



module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    sessionInfo
};