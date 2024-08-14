const router = require("express").Router()
const cohort = require("../models/Cohort.model")
const Student = require("../models/Student.model")


router.post('/', (req, res) => {

    const { firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohortId, projects } = req.body

    Student
        .create({ firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohort: cohortId, projects })
        .then((newStudent) => res.json(newStudent))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while creating the Student", details: err }))
})

router.get('/', (req, res) => {

    Student
        .find()
        .then(students => res.json(students))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while fetching the Students", details: err }))
})

router.get('/cohort/:cohortId', (req, res) => {

    const { cohortId } = req.params

    Student
        .find({ "cohort": cohortId })
        .then(students => res.json(students))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while    fetching the Students", details: err }))

})

router.get('/:studentId', (req, res) => {

    const { studentId } = req.params

    Student
        .findById(studentId)
        .then(student => res.json(student))
        .catch((err) => res.status(500).json({ code: 500, message: "Error while fetching the Student", details: err }))
})

router.put('/:studentId', (req, res) => {

    const { studentId } = req.params
    const { firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohortId, projects } = req.body

    Student
        .findByIdAndUpdate(studentId, { firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohortId, projects })
        .then(student => res.sendStatus(200))
        .catch((err) => res.sendStatus(500).json({ code: 500, message: "Error while updating the Student", details: err }))
})

router.delete('/:studentId', (req, res) => {

    const { studentId } = req.params

    Student
        .findByIdAndDelete(studentId)
        .then(student => res.sendStatus(200))
        .catch((err) => res.sendStatus(500).json({ code: 500, message: "Error while deleting the Student", details: err }))
})

module.exports = router 