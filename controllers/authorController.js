const Author = require("../model/authorModel")

const getAllauthors = async(req, res) => {
  const authors = await Author.find(req.query)
  res.json(authors)
}

  const getAuthorById = async (req, res) => { 
    const author = await Author.findById(req.params.authorId).exec();

    res.json(author)
  }

  const addauthors = async(req, res) => {
    //1.get data from request body
    const data = req.body
    //2.create a document
    const author = new Author(data);
    console.log(data)
    //3.save document to mongoodb
    await author.save()
    res.json(author)
  }

  const editauthor = async(req, res) => {
    const editedAuthor = await Author.findByIdAndUpdate(req.params.authorId,req.body, {new: true})
    res.json(editedAuthor)
  }

  const deleteauthor =  async(req, res) => {
    const author = await Author.findByIdAndDelete(req.params.authorId)
   
    res.send('Deleted')
  }

  module.exports = {
    getAllauthors,
    getAuthorById,
    addauthors,
    editauthor,
    deleteauthor
  }