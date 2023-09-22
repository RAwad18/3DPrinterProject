import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/status', (request, response) => response.json({clients: clients.length}))

const PORT = 5000

let clients = []
let facts = [];

app.listen((PORT), () => {
  console.log(`Listening on Port ${PORT}`)
})
