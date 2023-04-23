const express = require("express")
const app = express()
const server = require("http").Server(app)

const port = process.env.PORT || 4000

app.use(express.static(__dirname + "/build"))

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/build/index.html')
})

server.listen(port, function () {
    console.log(`Listening on ${server.address().port}`)
})
