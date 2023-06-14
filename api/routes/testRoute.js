const express = require('express');


const router = express.Router();

// healthcheck
router.get('/', (req, res) => {
    res.json('backend running');
})

router.get('/health', (req, res) => {
    res.json('backend OK');
})

module.exports = router