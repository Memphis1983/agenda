const Notes = require("../models/Notes");

module.exports = {
    getNotes: async (req, res) => {
        console.log(req.user);
        try {
            const notes = await Notes.find({
                user: req.user._id
            });
            res.render("notes", {
                notes: notes,
                user: req.user
            });
        }catch(err) {
            console.log(err);
        }
    },
    createNote: async (req, res) => {
        try {
            const note = new Notes({
                user: req.user._id,
                title: req.body.title,
                content: req.body.content
            });
            await note.save();
            res.redirect("/notes");
        }catch(err) {
            console.log(err);
        }
    },
    deleteNote: async (req, res) => {
        try {
            const note = await Notes.findOneAndRemove({
                _id: req.params.id
            });
            res.redirect("/notes");
        }catch(err) {
            console.log(err);
        }
    }

};