const mongoose = require("mongoose");
const NotesShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now(),
        required: true
    },
    updated: {
        type: Date,
        default: Date.now(),
        required: true
    },
    userId: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Notes", NotesShema);