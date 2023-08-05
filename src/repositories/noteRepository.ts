import { data } from '../data'

export interface Note {
  id: number
  name: string
  time: string
  content: string
  category: string
  dates: string
  archived: boolean
}

export const addNote = (note: Note) => {
  data.push(note)
}

export const removeNote = (id: number) => {
  const index = data.findIndex(note => note.id === id)
  if (index !== -1) {
    data.splice(index, 1)
  }
}

export const updateNote = (id: number, updatedNote: Note) => {
  const index = data.findIndex(note => note.id === id)
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedNote }
  }
}
