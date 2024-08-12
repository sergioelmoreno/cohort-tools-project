const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const PORT = 5005;

const cohorts = require("./cohorts.json")
const students = require("./students.json")

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"]
  })
)
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/api/cohorts', (req, res) => {
  res.json(cohorts)
})

app.get('/api/students', (req, res) => {
  res.json(students)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});