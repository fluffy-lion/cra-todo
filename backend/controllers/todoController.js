const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todos);
};


const addTodo = async (req, res) => {
    const { todoItem } = req.body

    try {
        const todo = await Todo.create({
            todoItem        
        })
        res.status(200).json(todo)
    }
    catch (error){
        res.status(400).json({ error: error.message })
    }
}
module.exports = {
    getTodos,
    addTodo
}   
