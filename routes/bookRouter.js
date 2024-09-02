const express = require('express')
const { getAllBooks, getBookById, editBook, deleteBook, addBooks } = require('../controllers/bookController')
const router = express.Router()

//get all books
router.get('/', getAllBooks )
//get book by id
router.get('/:bookId', getBookById)
//update book
router.post('/', addBooks )
//edit book
router.patch('/:bookId', editBook )
//delete book
router.delete('/:bookId', deleteBook)

module.exports = router