const express = require('express')
const cohortsController = require('../controllers/cohorts.js')
const router = express.Router()

router.get('/', cohortsController.getAllCohorts)
router.get('/:id', cohortsController.getCohort)

module.exports = router