const Note = require("../modals/noteModal");
const { mongoose } = require("mongoose");

//get all notes
const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({}).sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//create note
const createNote = async (req, res) => {
    const { message, hint } = req.body;
    try {
        const noteDoc = await Note.create({
            message,
            hint,
        });
        res.json(noteDoc);
    } catch (e) {
        res.status(500).json(e);
    }
};


module.exports = {
    getNotes,
    createNote
};