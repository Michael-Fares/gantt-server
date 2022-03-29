const express = require('express')
const coursesController = require('../controllers/courses.js')
const router = express.Router()

router.get('/', coursesController.getAllCourses)
router.get('/:id', coursesController.getCourse)

module.exports = router