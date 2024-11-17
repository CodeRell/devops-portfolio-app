const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 5000;

// PostgreSQL Configuration
const pool = new Pool({
  user: "postgres", // Replace with your PostgreSQL username
  host: "localhost", // Replace with your PostgreSQL host (e.g., a Docker container IP)
  database: "feedback", // Replace with your database name
  password: "yourpassword", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post("/feedback", async (req, res) => {
  const { feedback } = req.body;
  try {
    await pool.query("INSERT INTO feedback (content) VALUES ($1)", [feedback]);
    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ message: "Failed to save feedback." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
