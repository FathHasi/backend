const Book = require("../model/bookModel")

const getAllBooks = async(req, res) => {
 const books = await Book.find(req.query);
    res.json(books)
  }

  const getBookById = async (req, res) => {
    const book = await Book.findById(req.params.bookId).exec();

    res.json(book)
  }

  const addBooks = async(req, res) => {
    //get data from req body
    const data = req.body
    // create a document
    const book = new Book(data);
    //save document
    await book.save();
    res.json(book)
  }

  const editBook = async (req, res) => {
   const editedBook = await Book.findByIdAndUpdate(req.params.bookId, req.body, {new: true})
    res.json(editedBook)
  }

  const deleteBook =  (req, res) => {
    Book.findOneAndDelete(req.params.bookId)
    res.send('Got a DELETE request at /user')
  }

  module.exports = {
    getAllBooks,
    getBookById,
    addBooks,
    editBook,
    deleteBook
  }