const mongoose = require('mongoose')

const { Schema, model } = mongoose

const cohortSchema = new Schema({
  inProgress: {
    type: Boolean,
    required: true
  },
  cohortSlug: {
    type: String,
    required: true
  },
  cohortName: {
    type: String,
    required: true
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
    required: true
  },
  leadTeacher: {
    type: String,
    required: true
  },
  totalHours: {
    type: Number,
    default: 360
  }
},
  {
    timestamps: true
  })

const Cohort = model('Cohort', cohortSchema)
module.exports = Cohort