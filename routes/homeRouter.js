const express = require('express')
const { getAllHomes, getHomeById, editHome, deleteHome, addHomes } = require('../controllers/homeController')
const router = express.Router()

//get all homes
router.get('/', getAllHomes )
//get home by id
router.get('/:homeId', getHomeById)
//update home
router.post('/', addHomes )
//edit home
router.patch('/:homeId', editHome )
//delete home
router.delete('/:homeId', deleteHome)

module.exports = router