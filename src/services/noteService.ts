import { Request, Response } from 'express'
import { data } from '../data'

type CategoryCounts = { [category: string]: number }

export const getNote = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const note = data.find(note => note.id === id)

  if (!note) {
    return res.status(404).json({ message: 'Not found note!' })
  }

  res.json(note)
}

export const getAllNotes = (req: Request, res: Response) => {
  res.json(data)
}

export const getStats = (req: Request, res: Response) => {
  const totalNotes = data.length
  const totalArchived = data.filter(note => note.archived).length
  const categories = data.map(note => note.category)

  const categoryCounts: CategoryCounts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {} as CategoryCounts)

  res.json({
    totalNotes,
    totalArchived,
    categoryCounts,
  })
}
