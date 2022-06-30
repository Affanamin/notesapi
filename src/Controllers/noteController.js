const noteModel = require("../models/note")


const createNote = async (req, res) => {

    const { title, description } = req.body;

    const newNote = new noteModel({
        title: title,
        description: description,
        userId: req.userId
    });

    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something Went Wrong" });

    }

}


const updateeNote = async (req, res) => {

    const id = req.params.id;
    const { title, description } = req.body;

    const newNote = {
        title: title,
        description: description,
        userId: req.userId
    }

    try {
        await noteModel.findByIdAndUpdate(id, newNote, { new: true })
        res.status(200).json(newNote)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something Went Wrong" });



    }



}


const deleteNote = async (req, res) => {
    const id = req.params.id;
    try {
        const note = await noteModel.findByIdAndDelete(id);
        res.status(202).json(note)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something Went Wrong" });
    }



}


const getNotes = async (req, res) => {

    try {
        const notes = await noteModel.find({ userId: req.userId });
        res.status(200).json(notes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something Went Wrong" });
    }

}

const getNotesById = async (req, res) => {

    //res.status(200).json("Hello Working Well");
    const noteId = req.params.noteId;
    try {
        const notes = await noteModel.findById(noteId)
        res.status(200).json(notes);

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something Went Wrong" });

    }
}

module.exports = {
    createNote,
    updateeNote,
    deleteNote,
    getNotes,
    getNotesById

}