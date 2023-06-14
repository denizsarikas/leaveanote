// console.log("test")
const express = require('express');
const cors = require('cors');
const { mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./modals/UserModel');


const Note = require('./modals/noteModal');

require('dotenv').config()


const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors());

// console.log(process.env.MONGO_URL)
// mongoose.connect(process.env.MONGO_URL);

app.get('/api/test', (req, res) => {
    res.json('backend running');
})

app.post('/api/register', async (req, res) => {
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
})


app.post('/api/message', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const { message, hint } = req.body;
    // res.json({name, email, password});
    try {
        const noteDoc = await Note.create({
            message,
            hint,
        });
        res.json(noteDoc);
    } catch (e) {
        res.status(500).json(e);
    }
})

// app.get('/api/message', async (req, res) => {
//     mongoose.connect(process.env.MONGO_URL);
//     res.json(await Note.find())
// })

app.get('/api/message', async (req, res) => {
     mongoose.connect(process.env.MONGO_URL);
    try {
        res.json(await Note.find())
    } catch (e) {
        res.status(500).json('bir sorun oldu');
    }
})

// app.listen(4000);
app.listen(4000, () => {
    console.log("backend running")
});

