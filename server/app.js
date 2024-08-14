const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const PORT = 5005

const cohorts = require("./cohorts.json")
const students = require("./students.json")

const app = express()

require('./db')

app.use(
  cors({
    origin: ["http://localhost:5173"]
  })
)
app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const studentsRouter = require("./routes/students.routes")
app.use("/api/students", studentsRouter)

app.get('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})