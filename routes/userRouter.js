const express = require('express')
const { getAllUsers, getUserById, addUser, editUser, deleteUser } = require('../controllers/userController')
const router = express.Router()

//get all users
router.get('/', getAllUsers)
//get user by id
router.get('/:userId', getUserById)
//update user
router.post('/', addUser)
//edit user
router.patch('/:userId', editUser)
//delete user
router.delete('/:userId', deleteUser)

module.exports = router