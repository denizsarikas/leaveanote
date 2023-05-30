// console.log("test")
const express = require('express');
const cors = require('cors');
const { mongoose } = require('mongoose');


const Note = require('./models/noteModel');

require('dotenv').config()


const app = express();

app.use(express.json());
app.use(cors());

// console.log(process.env.MONGO_URL)
// mongoose.connect(process.env.MONGO_URL);

app.get('/api/test', (req, res) => {
    res.json('backend running');
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

app.get('/api/message', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    res.json(await Note.find())
})

// app.listen(4000);
app.listen(4000, () => {
    console.log("backend running")
});

