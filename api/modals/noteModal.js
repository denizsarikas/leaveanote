const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    hint: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);