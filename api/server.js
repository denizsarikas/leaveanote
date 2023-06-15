require('dotenv').config();

const express = require('express');
// const cookieParser = require('cookie-parser');
const { mongoose } = require('mongoose');
const cors = require('cors');
const testRoute = require('./routes/testRoute')
const noteRoute = require('./routes/noteRoute')
const userRoute = require('./routes/userRoute')



//express app
const app = express();

//middleware
app.use(express.json()); //req.body
// app.use(cookieParser());
app.use(cors());

//gelen istekleri logluyorum backendde
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


//routes
app.use('/api/test', testRoute)
app.use('/api/note', noteRoute)
app.use('/api/user', userRoute)

//connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //listen after connecting db
        app.listen(4000, () => {
            console.log('connected to db and listening on port', 4000);
          });
    })
    .catch((error) => {
        console.log(error)
    })