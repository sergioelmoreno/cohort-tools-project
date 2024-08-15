const router = require("express").Router()
const Cohort = require("../models/Cohort.model")
const Student = require("../models/Student.model")


router.post('/', (req, res, next) => {

    const { firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohortId, projects } = req.body

    Student
        .create({ firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohort: cohortId, projects })
        .then((newStudent) => res.json(newStudent))
        .catch((err) => next(err))
})

router.get('/', (req, res, next) => {

    Student
        .find()
        .populate("cohort")
        .then(students => res.json(students))
        .catch((err) => next(err))
})

router.get('/cohort/:cohortId', (req, res, next) => {

    const { cohortId } = req.params

    Student
        .find({ cohort: cohortId })
        .populate("cohort")
        .then(students => res.json(students))
        .catch((err) => next(err))

})

router.get('/:studentId', (req, res, next) => {

    const { studentId } = req.params

    Student
        .findById(studentId)
        .populate("cohort")
        .then(student => res.json(student))
        .catch((err) => next(err))
})

router.put('/:studentId', (req, res, next) => {

    const { studentId } = req.params
    const { firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohortId, projects } = req.body

    Student
        .findByIdAndUpdate(studentId, { firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohortId, projects })
        .then(student => res.sendStatus(200))
        .catch((err) => next(err))
})

router.delete('/:studentId', (req, res, next) => {

    const { studentId } = req.params

    Student
        .findByIdAndDelete(studentId)
        .then(student => res.sendStatus(200))
        .catch((err) => next(err))
})

module.exports = router 