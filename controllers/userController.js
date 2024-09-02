const User = require("../model/userModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getAllUsers = async(req, res) => {
 const users = await User.find(req.query);
    res.json(users)
  }

  const getUserById = async (req, res) => {
    const user = await User.findById(req.params.userId).exec();

    res.json(user)
  }

  const addUser = async(req, res) => {
    //get data from req body
    const data = req.body
    // create a document
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    const user = new User({
        ...data,
        password: hash
    });
    //save document
    await user.save();
    res.json(user)
  }

  const editUser = async (req, res) => {
   const editedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
    res.json(editedUser)
  }

  const deleteUser =  (req, res) => {
    User.findOneAndDelete(req.params.userId)
    res.send('Got a DELETE request at /user')
  }

  module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    editUser,
    deleteUser
  }