require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5001; // Use the port provided by the environment or default to 3000

// Serve static files from the 'frontend-build' directory
app.use(express.static(path.join(__dirname, "../StudyStreak/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../StudyStreak/build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
