import express from 'express'
import bodyParser from 'body-parser'
import { notesRouter } from './routes/notes'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5555

app.use(bodyParser.json())
app.use('/notes', notesRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
