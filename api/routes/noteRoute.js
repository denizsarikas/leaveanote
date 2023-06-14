const express = require('express');

const {
    getNotes,
    createNote
} = require('../controllers/noteController')

const router = express.Router();

// GET all notes
router.get('/', getNotes);

//POST a new note
 router.post('/', createNote);

module.exports = router