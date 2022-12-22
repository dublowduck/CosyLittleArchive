const express = require('express')
const app = express()

const serverPort = 3001 //set the port the server listens on

app.listen(serverPort, () => { //start the server on its port
    console.log("Server is running on port " + serverPort); //log the server has started
})