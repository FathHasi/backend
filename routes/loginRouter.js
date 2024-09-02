const express = require('express')
const { getAllLogins, getLoginById, addLogin, editLogin, deleteLogin } = require('../controllers/loginController')
const router = express.Router()

//get all logins
router.get('/', getAllLogins)
//get login by id
router.get('/:loginId', getLoginById)
//update login
router.post('/', addLogin)
//edit login
router.patch('/:loginId', editLogin)
//delete login
router.delete('/:loginId', deleteLogin)

module.exports = router