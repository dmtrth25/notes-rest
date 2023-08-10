import express from 'express'
import { 
  validateCreateNote, 
  validateEditNote 
} from '../helpers/validationHelpers'
import { 
  getAllNotes, 
  getNote, 
  getStats, 
} from '../services/noteService'
import { 
  createNote, 
  deleteNote, 
  editNote 
} from '../controllers/noteController'

export const notesRouter = express.Router()

notesRouter.get('/', getAllNotes)
notesRouter.get('/stats', getStats)
notesRouter.get('/:id', getNote)
notesRouter.post('/', validateCreateNote, createNote)
notesRouter.patch('/:id', validateEditNote, editNote)
notesRouter.delete('/:id', deleteNote)
