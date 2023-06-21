// to define what the todoItem will look like
const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Todo', todoSchema)