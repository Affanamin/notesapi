const express = require("express");
const { getNotes, createNote, deleteNote, updateeNote, getNotesById } = require("../Controllers/noteController");
const auth = require("../middlewares/auth");
const noteRouter = express.Router();

noteRouter.get("/", auth, getNotes);

noteRouter.post("/", auth, createNote);

noteRouter.delete("/:id", auth, deleteNote);

noteRouter.put("/:id", auth, updateeNote);

noteRouter.get("/getbyId/:noteId", auth, getNotesById);

module.exports = noteRouter;