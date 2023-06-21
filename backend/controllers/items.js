// handler functions that will be executed when

const Todo = require("../models/todo")

// the request reaches the routes
const getTodos = async (req, res) => {

    let response = await Todo.find({})
    res.status(200).json(response)

}

const getTodo = async (req, res) => {
    let { id } = req.params
    let response = await Todo.findById(id)
    res.status(200).json(response)
}

const createTodo = async (req, res, next) => {
    const { text } = req.body
    const todo = new Todo({
        text: text
    })
    await todo.save()
    res.status(200).json(todo)
}

const updateTodo = async (req, res) => {
    let { id } = req.params
    let response = await Todo.findByIdAndUpdate(id, {
        text: req.body.text
    })
    res.status(200).json(response)
}

const deleteTodo = async (req, res) => {
    let { id } = req.params 
    let response = await Todo.findByIdAndDelete(id)
    res.status(200).json(response)
}

module.exports = {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
}