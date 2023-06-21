require("dotenv").config()

const express = require('express')
const itemRoutes = require('./routes/items')
const mongoose = require('mongoose')

const app = express()
app.use(express.json()) // parse incomming data
app.use('/todos', itemRoutes)
// create server browser can connect to

// app.listen(3000, () => {
//     console.log('listening on 3000')
// })


mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(4000, () => {
            console.log('listening on port 4000, connected to db')
        })
    })
    .catch((error) => {
        console.log(error)
    })
// first arg is the path
// comes after your domain name
//second args is the callbackfunction
// >>>>>>>>>>>>>
// app.get('/', (req, res) => {
//     // send method from the response obj
//     res.send('hello world')
// })
// >>>>>>>>>>>>>