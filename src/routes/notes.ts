import express from 'express'
import { 
  getAllNotes, 
  getNote, 
  getStats, 
  createNote, 
  editNote, 
  deleteNote 
} from '../services/noteService'
import { validateCreateNote, validateEditNote } from '../helpers/validationHelpers'

export const notesRouter = express.Router()

notesRouter.get('/', getAllNotes)
notesRouter.get('/:id', getNote)
notesRouter.get('/stats', getStats)
notesRouter.post('/', validateCreateNote, createNote)
notesRouter.patch('/:id', validateEditNote, editNote)
notesRouter.delete('/:id', deleteNote)
