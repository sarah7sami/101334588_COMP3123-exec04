const express = require("express")

const SERVER_PORT = 3000

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Welcome</h1>")
})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})

app.get("/user", (req, res) => {
    res.send(JSON.stringify(req.query))
})

app.post("/user/:firstname/:lastname", (req, res) =>{
    res.send(JSON.stringify(req.params))
})

app.listen(SERVER_PORT, () => {
    console.log(`Server Started at http://localhost:${SERVER_PORT}/`)
})