require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todos')

const app = express()
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/todos', todoRoutes)

mongoose.connect(process.env.MONGODB_URL)
.then(() => {

    app.listen(4000, () => {
        console.log('listening on port 4000, db connected')
    })
})
.catch((error) => {
    console.log(error)
})
