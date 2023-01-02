module.exports = app => {
    const todo = require('../controllers/todoController')
    const r = require('express').Router();

    r.get('/', todo.findAll);
    r.put('/:id', todo.update);
    r.post('/', todo.create);


    app.use('/todo',r)
}