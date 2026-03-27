// ============================================
//  server.js — Devansh Dixit | WebD Assignment
//  Node.js + Express backend
// ============================================

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ---------- Middleware ----------

// Serve static files (index.html, styles.css, script.js)
// from the current directory
app.use(express.static(path.join(__dirname)));

// Parse incoming JSON requests (useful for future API routes)
app.use(express.json());

// ---------- Routes ----------

// Home route — serves index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Health check route — useful for deployment platforms
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    student: "Devansh Dixit",
    timestamp: new Date().toISOString(),
  });
});

// 404 fallback — catches any unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ---------- Start Server ----------

app.listen(PORT, () => {
  console.log(
    `\x1b[36m%s\x1b[0m`,
    `\n  🚀 Server running at http://localhost:${PORT}`
  );
  console.log(`  📁 Serving files from: ${__dirname}`);
  console.log(`  🟢 Health check: http://localhost:${PORT}/health\n`);
});