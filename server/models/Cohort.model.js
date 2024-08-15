const mongoose = require('mongoose')

const { Schema, model } = mongoose

const cohortSchema = new Schema({
  inProgress: {
    type: Boolean,
    required: [true, 'Default error message']
  },
  cohortSlug: {
    type: String,
    required: [true, 'Default error message']
  },
  cohortName: {
    type: String,
    required: [true, 'Default error message']
  },
  program: {
    type: String,
    enum: ["Web Dev", "UX/UI", "Data Analytics", "Cybersecurity"]
  },
  campus: {
    type: String,
    enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "Lisbon", "Remote"]
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  },
  programManager: {
    type: String,
    required: [true, 'Default error message']
  },
  leadTeacher: {
    type: String,
    required: [true, 'Default error message']
  },
  totalHours: {
    type: Number,
    default: 360
  }
},
  {
    timestamps: [true, 'Default error message']
  })

const Cohort = model('Cohort', cohortSchema)
module.exports = Cohort