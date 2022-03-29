const express = require('express')
const usersController = require('../controllers/users.js')
const router = express.Router()

router.get('/', usersController.getAllUsers)
router.get('/:id', usersController.getUser)

router.post('/', usersController.createUser)

module.exports = router