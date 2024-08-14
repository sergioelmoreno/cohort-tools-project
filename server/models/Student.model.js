const mongoose = require("mongoose")
const { Schema, model } = mongoose

const studentSchema = new Schema({

    "firstName": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "phone": {
        type: String,
        required: true
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
        Timestamp: true
    }
)


const Student = model('Student', studentSchema)

module.exports = Student