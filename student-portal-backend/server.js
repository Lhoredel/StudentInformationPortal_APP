const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student_information_portal",
  password: "122625",
  port: 5432,
});

// Test PostgreSQL connection
pool.connect((err, client, release) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("PostgreSQL connected successfully!");
    release();
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "Student Information Portal Backend is running!",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});