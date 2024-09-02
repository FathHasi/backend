const Login = require("../model/loginModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getAllLogins = async(req, res) => {
 const logins = await Login.find(req.query);
    res.json(logins)
  }

  const getLoginById = async (req, res) => {
    const login = await Login.findById(req.params.loginId).exec();

    res.json(login)
  }

  const addLogin = async(req, res) => {
    //get data from req body
    const data = req.body
    // create a document
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    const login = new Login({
        ...data,
        password: hash
    });
    //save document
    await login.save();
    res.json(login)
  }

  const editLogin = async (req, res) => {
   const editedLogin = await Login.findByIdAndUpdate(req.params.loginId, req.body, {new: true})
    res.json(editedLogin)
  }

  const deleteLogin =  (req, res) => {
    Login.findOneAndDelete(req.params.loginId)
    res.send('Got a DELETE request at /login')
  }

  module.exports = {
    getAllLogins,
    getLoginById,
    addLogin,
    editLogin,
    deleteLogin
  }