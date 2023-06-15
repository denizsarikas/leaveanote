const express = require('express');

const {
    loginUser,
    registerUser,
    logoutUser,
    sessionInfo
} = require('../controllers/userController')

const router = express.Router();

// login
router.post('/login', loginUser);

//register
 router.post('/register', registerUser);

 //logout
 router.post('/logout', logoutUser);

 //session
 router.get('/session', sessionInfo )



module.exports = router