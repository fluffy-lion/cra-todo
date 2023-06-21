const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')
router.get('/items', itemsController.getTodos)
router.get('/items/:id', itemsController.getTodo)
router.post('/item', itemsController.createTodo)
router.patch('/item/:id', itemsController.updateTodo)
router.delete('/item/:id', itemsController.deleteTodo)


module.exports = router