const router = require('express').Router()

const Cohort = require('../models/Cohort.model')

router.post('/', (req, res) => {

  const { inProgress, cohortSlug, cohortName, program, campus, tartDate, endDate, programManager, leadTeacher, totalHours } = req.body

  Cohort
    .create({ inProgress, cohortSlug, cohortName, program, campus, tartDate, endDate, programManager, leadTeacher, totalHours })
    .then((newCohort) => res.json(newCohort))
    .catch((err) => res.status(500).json({ code: 500, message: 'Error while creating the cohort', details: err }).next(err))

})

router.get('/', (req, res) => {

  Cohort
    .find
    .then((cohorts) => res.json(cohorts))
    .catch((err) => res.status(500).json({ code: 500, message: 'Error while fetching the cohorts', details: err }).next(err))

})

router.get('/:cohortId', (req, res) => {

  const { cohortId } = req.params

  Cohort
    .findById(cohortId)
    .then((cohorts) => res.json(cohorts))
    .catch((err) => res.status(500).json({ code: 500, message: 'Error while fetching the cohorts', details: err }).next(err))

})

router.put('/:cohortId', (req, res) => {

  const { inProgress, cohortSlug, cohortName, program, campus, tartDate, endDate, programManager, leadTeacher, totalHours } = req.body
  const { cohortId } = req.params

  Cohort
    .findByIdAndUpdate(cohortId, { inProgress, cohortSlug, cohortName, program, campus, tartDate, endDate, programManager, leadTeacher, totalHours }, { new: true })
    .then((cohort) => res.json(cohort))
    .catch((err) => res.status(500).json({ code: 500, message: 'Error while editing cohort', details: err }).next(err))

})

router.delete('/:cohortId', (req, res) => {

  const { cohortId } = req.params

  Cohort
    .findByIdAndDelete(cohortId)
    .then((cohort) => res.json(cohort))
    .catch((err) => res.status(500).json({ code: 500, message: 'Error while deleting cohort', details: err }).next(err))

})

module.exports = router