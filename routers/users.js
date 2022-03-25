const express = require('express')
const usersController = require('../controllers/users.js')
const router = express.Router()

router.get('/', usersController.getAllUsers)

module.exports = router