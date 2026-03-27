// ============================================
//  script.js — Devansh Dixit | WebD Assignment
//  Handles all interactivity for index.html
// ============================================

// ---------- Constants ----------
const MESSAGES = [
  { text: "✅ JavaScript is working perfectly!", type: "success" },
  { text: "🚀 Responsive design is active", type: "success" },
  { text: "💻 Linked to external CSS + JS files", type: "success" },
  { text: "📱 Mobile-friendly layout detected", type: "success" },
  { text: "🎯 Full-stack structure: HTML + CSS + JS", type: "success" },
  { text: "📦 Ready to push to GitHub!", type: "success" },
];

// ---------- Utility Functions ----------

/**
 * Returns a random item from an array,
 * avoiding repeating the last shown item.
 */
let lastIndex = -1;
function getRandomMessage() {
  let idx;
  do {
    idx = Math.floor(Math.random() * MESSAGES.length);
  } while (idx === lastIndex);
  lastIndex = idx;
  return MESSAGES[idx];
}

/**
 * Updates the output box with a message and optional type class.
 * @param {string} text - Message to display
 * @param {string} [type] - CSS class to add (e.g. 'success')
 */
function setOutput(text, type = "") {
  const output = document.getElementById("output");
  if (!output) return;

  // Reset classes
  output.className = "";
  output.textContent = text;

  if (type) {
    // Small delay so the class transition animates cleanly
    requestAnimationFrame(() => output.classList.add(type));
  }
}

// ---------- Event Handlers ----------

/** Called when the main button is clicked */
function showMessage() {
  const { text, type } = getRandomMessage();
  setOutput(text, type);
}

/** Tracks how long the user has been on the page */
function startSessionTimer() {
  const start = Date.now();
  setInterval(() => {
    const seconds = Math.floor((Date.now() - start) / 1000);
    const el = document.getElementById("session-time");
    if (el) el.textContent = `${seconds}s`;
  }, 1000);
}

/** Adds the current year to any element with id="year" */
function setCurrentYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/** Highlights nav links on scroll (if you add a navbar later) */
function handleScroll() {
  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < 120 && top > -section.offsetHeight) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${section.id}`
        );
      });
    }
  });
}

// ---------- Initialisation ----------

window.addEventListener("DOMContentLoaded", () => {
  // Welcome message on load
  setOutput("⚡ Page loaded — all systems go. Click the button!");

  // Start session timer if element exists
  startSessionTimer();

  // Set current year in footer
  setCurrentYear();

  // Scroll listener for future nav support
  window.addEventListener("scroll", handleScroll, { passive: true });

  console.log(
    "%c WebD Assignment — Devansh Dixit ",
    "background:#4f46e5;color:#fff;padding:4px 10px;border-radius:4px;font-weight:bold;"
  );
  console.log("Script loaded successfully ✔");
});