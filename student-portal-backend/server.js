const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// =========================
// HOME API
// =========================

app.get("/", (req, res) => {
  res.json({
    message: "Student Information Portal Backend is running!",
  });
});

// =========================
// TEST DATABASE
// =========================

app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      connected: true,
      message: "PostgreSQL is connected!",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database error:", error.message);

    res.status(500).json({
      connected: false,
      message: "PostgreSQL connection failed",
      error: error.message,
    });
  }
});

// =========================
// GET ALL STUDENTS
// =========================

app.get("/api/students", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM students ORDER BY id ASC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error getting students:", error.message);

    res.status(500).json({
      error: error.message,
    });
  }
});

// =========================
// GET STUDENT BY ID
// =========================

app.get("/api/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM students WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error getting student:", error.message);

    res.status(500).json({
      error: error.message,
    });
  }
});

// =========================
// ADD STUDENT
// =========================

app.post("/api/students", async (req, res) => {
  try {
    const {
      student_id,
      name,
      course,
      year_level,
      email,
    } = req.body;

    if (!student_id || !name || !course || !year_level) {
      return res.status(400).json({
        message:
          "student_id, name, course, and year_level are required",
      });
    }

    const result = await pool.query(
      `INSERT INTO students
       (student_id, name, course, year_level, email)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [
        student_id,
        name,
        course,
        year_level,
        email || null,
      ]
    );

    res.status(201).json({
      message: "Student added successfully!",
      student: result.rows[0],
    });
  } catch (error) {
    console.error("Error adding student:", error.message);

    res.status(500).json({
      error: error.message,
    });
  }
});

// =========================
// UPDATE STUDENT
// =========================

app.put("/api/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const {
      student_id,
      name,
      course,
      year_level,
      email,
    } = req.body;

    const result = await pool.query(
      `UPDATE students
       SET student_id = $1,
           name = $2,
           course = $3,
           year_level = $4,
           email = $5
       WHERE id = $6
       RETURNING *`,
      [
        student_id,
        name,
        course,
        year_level,
        email || null,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json({
      message: "Student updated successfully!",
      student: result.rows[0],
    });
  } catch (error) {
    console.error("Error updating student:", error.message);

    res.status(500).json({
      error: error.message,
    });
  }
});

// =========================
// DELETE STUDENT
// =========================

app.delete("/api/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM students WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json({
      message: "Student deleted successfully!",
      student: result.rows[0],
    });
  } catch (error) {
    console.error("Error deleting student:", error.message);

    res.status(500).json({
      error: error.message,
    });
  }
});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});