// console.log("test")
const express = require('express');
const cors = require('cors');
const { mongoose } = require('mongoose');


require('dotenv').config()


const app = express();

app.use(express.json());

// console.log(process.env.MONGO_URL)
 mongoose.connect(process.env.MONGO_URL);

app.get('/api/test', (req, res) => {
    res.json('backend running');
})

// app.listen(4000);
app.listen(4000, () => {
    console.log("backend running")
});