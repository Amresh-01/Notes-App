import express from "express";
import {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notescontroller.js";

import { protect } from "../middlewares/auth.js";

const router = express.Router();

// Protect all routes
router.use(protect);

// Routes
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote); 
router.put("/:id", updateNote); 
router.patch("/:id", updateNote); 
router.delete("/:id", deleteNote);

export default router;
