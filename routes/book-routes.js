const bookRouter = require('express').Router()
const {getBook,addBook} = require('../controllers/book-controller')

bookRouter.route('/')
    .get(getBook)
    .post(addBook)

module.exports = bookRouter