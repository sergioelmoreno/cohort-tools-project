const router = require('express').Router()

const Cohort = require('../models/Cohort.model')

router.post('/', (req, res, next) => {

  const { inProgress, cohortSlug, cohortName, program, campus, tartDate, endDate, programManager, leadTeacher, totalHours } = req.body

  Cohort
    .create({ inProgress, cohortSlug, cohortName, program, campus, tartDate, endDate, programManager, leadTeacher, totalHours })
    .then((newCohort) => res.json(newCohort))
    .catch((err) => next(err))

})

router.get('/', (req, res, next) => {

  Cohort
    .find
    .then((cohorts) => res.json(cohorts))
    .catch((err) => next(err))

})

router.get('/:cohortId', (req, res, next) => {

  const { cohortId } = req.params

  Cohort
    .findById(cohortId)
    .then((cohorts) => res.json(cohorts))
    .catch((err) => next(err))

})

router.put('/:cohortId', (req, res, next) => {

  const { inProgress, cohortSlug, cohortName, program, campus, tartDate, endDate, programManager, leadTeacher, totalHours } = req.body
  const { cohortId } = req.params

  Cohort
    .findByIdAndUpdate(cohortId, { inProgress, cohortSlug, cohortName, program, campus, tartDate, endDate, programManager, leadTeacher, totalHours }, { new: true })
    .then((cohort) => res.json(cohort))
    .catch((err) => next(err))

})

router.delete('/:cohortId', (req, res, next) => {

  const { cohortId } = req.params

  Cohort
    .findByIdAndDelete(cohortId)
    .then((cohort) => res.json(cohort))
    .catch((err) => next(err))

})

module.exports = router