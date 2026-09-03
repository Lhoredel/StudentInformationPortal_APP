const { Pool } = require("pg");

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

module.exports = pool;