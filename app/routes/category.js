module.exports = app => {
    const category = require('../controllers/categoryController')
    const r = require('express').Router();

    r.get('/', category.findAll);
    r.post('/', category.create);
    r.put('/:id', category.update);
    r.delete('/:id', category.delete);

    app.use('/category',r)
}