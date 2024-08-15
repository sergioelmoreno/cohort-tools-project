const mongoose = require("mongoose")
const { Schema, model } = mongoose

const studentSchema = new Schema({

    "firstName": {
        type: String,
        required: [true, 'Default error message']
    },
    "lastName": {
        type: String,
        required: [true, 'Default error message']
    },
    "email": {
        type: String,
        required: [true, 'Default error message'],
        unique: [true, 'Default error message']
    },
    "phone": {
        type: String,
        required: [true, 'Default error message']
    },
    "linkedinUrl": {
        type: String,
        default: ""
    },
    "languages": {
        type: [""]
    },
    "program": {
        type: String,
        enum: ["Web Dev", "UX/UI", "Data Analytics", "Cybersecurity"]
    },
    "background": {
        type: String,
        default: ""
    },
    "image": {
        type: String,
        default: "https://i.imgur.com/r8bo8u7.png"
    },
    "cohort": {
        type: Schema.Types.ObjectId,
        ref: "Cohort"
    },
    "projects": {
        type: Array,
        default: []
    },
},
    {
        Timestamp: [true, 'Default error message']
    }
)


const Student = model('Student', studentSchema)

module.exports = Student