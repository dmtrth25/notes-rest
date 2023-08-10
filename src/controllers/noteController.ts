import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { Note, addNote, removeNote, updateNote } from '../repositories/noteRepository'
import { data } from '../data'

export const createNote = (req: Request, res: Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const newNote: Note = {
    id: data.length + 1,
    ...req.body,
    archived: false,
  }

  addNote(newNote)
  res.status(201).json(newNote)
}

export const deleteNote = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const index = data.findIndex(note => note.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Not found note!' })
  }

  removeNote(id)
  res.status(204).send()
}

export const editNote = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const index = data.findIndex(note => note.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Not found note!' })
  }

  const updatedNote: Note = { ...data[index], ...req.body }
  updateNote(id, updatedNote)
  res.json(updatedNote)
}
