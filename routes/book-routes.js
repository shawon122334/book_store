const bookRouter = require('express').Router()
const {getBook,addBook,getSingleBook,updateBook} = require('../controllers/book-controller')

bookRouter.route('/')
    .get(getBook)
    .post(addBook)
bookRouter.route('/:id')
    .get(getSingleBook)
    .put(updateBook)
module.exports = bookRouter