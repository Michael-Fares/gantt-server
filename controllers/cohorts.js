const cohorts = require('../data/cohorts')

const getAllCohorts = (req, res) => {
    res.json(cohorts)
}

const getCohort = (req, res) => {
    const cohort = cohorts.find(cohort => cohort.cohort_id == req.params.id)
    // error handler if user does not exist with given id
    if(!cohort) {
    res.status(404)
    res.send(`No cohort with id ${req.params.id} exists`)
    }
    res.json(cohort)
  }

  module.exports = {
      getAllCohorts,
      getCohort
  }