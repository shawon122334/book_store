const bookRouter = require('express').Router()
const {getBook,addBook,getSingleBook,updateBook,deleteBook} = require('../controllers/book-controller')

bookRouter.route('/')
    .get(getBook)
    .post(addBook)
bookRouter.route('/:id')
    .get(getSingleBook)
    .put(updateBook)
    .delete(deleteBook)
module.exports = bookRouter