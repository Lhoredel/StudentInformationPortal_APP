const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student_information_portal",
  password: "122625",
  port: 5432,
});

pool.on("connect", () => {
  console.log("✅ PostgreSQL connected successfully!");
});

pool.on("error", (err) => {
  console.error("❌ PostgreSQL error:", err.message);
});

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});