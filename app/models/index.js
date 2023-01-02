const dbConfig = require('../config/database')
const mongoose = require('mongoose')

module.exports = {
    mongoose,
    url:dbConfig.url,
    category: require('./category')(mongoose),
    user: require('./user')(mongoose),
    todo:require('./todoList')(mongoose)
}