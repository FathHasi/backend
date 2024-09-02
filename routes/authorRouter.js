const express = require('express')
const { getAllauthors, getAuthorById, addauthors, editauthor, deleteauthor } = require('../controllers/authorController')
const router = express.Router()

//get all authors
router.get('/', getAllauthors)
//get author by id
router.get('/:authorId', getAuthorById)
//update author
router.post('/', addauthors)
//edit author
router.patch('/:authorId', editauthor)
//delete author
router.delete('/:authorId', deleteauthor)

module.exports = router