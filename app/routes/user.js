module.exports = app => {
    const auth = require('../controllers/authController')
    const user = require('../controllers/userController')
    const r = require('express').Router();

    r.get('/', user.findAll);
    r.post('/register', auth.Register);
    r.post('/login', auth.Login);


    app.use('/user',r)
}