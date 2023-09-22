// import express from 'express'
// import bodyParser from 'body-parser'
// import cors from 'cors'

// const app = express()

// // Middleware
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cors())

// // Routes
// // app.use('/status', )

// app.get('/status', (request, response) => response.json({ clients: clients.length }))

// const PORT = 5000

// let clients = []
// let facts = [];

// app.listen(PORT, () =>
//     console.log(`Listening on http://localhost:${PORT}`)
// )

import express from 'express';

const app = express();

app.get("/", (req, res) => res.send("Hello!"))

// Server-Sent Event Server
app.get("/stream", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    send(res);
    // must be res.write("data: " + *insert your data here*\n\n)
})

let i = 0;
const send = (res) => {
    res.write(`data: " + "FIRE ALARM! ${i++}\n\n`)
    setTimeout(()=>send(res), 1000);
}

app.listen(8080, () => console.log("Listening on 8080"));

