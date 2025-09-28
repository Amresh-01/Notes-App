import express from "express";
import {
  getNotes,
  updatedNote,
  deleteNote,
} from "../controllers/notescontroller";
import { createContext } from "react";

const router = express.Router();

router.use(protect);

router.get("/", getNotes);
router.post("/", createNote);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
