import Note from "../models/notes.model";

export const getNotes = async (req, res) => {
  const notes = await Note.find({ owner: req.user._id });
  res.json(notes);
};
