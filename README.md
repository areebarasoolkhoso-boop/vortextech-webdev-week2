# Vortex Tech — Web Development Internship (Week 2)

## 📌 Project Overview
This project is part of **Week 2** of the Vortex Tech Web Development Internship Track. The goal was to extend a basic webpage with **real interactivity using vanilla JavaScript** — specifically a validated contact form and a dark/light mode toggle, built without any external libraries.

## ✨ Features

- **📝 Contact Form Validation**
  - Validates **Name**, **Email**, and **Message** fields on submit.
  - Shows an inline error message if a field is left empty.
  - Validates email format using a regex pattern (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
  - Displays a **success message** on valid submission — without reloading the page (`event.preventDefault()`).
  - Clears the form automatically after a successful submission.

- **🌙 Dark Mode / Light Mode Toggle**
  - A single button switches the entire page's color theme instantly.
  - Implemented using `classList.toggle('dark-mode')` on the `<body>` element.
  - Button label and icon update dynamically (🌙 Dark Mode ↔ ☀️ Light Mode).

- **⚙️ Clean Event Handling**
  - All interactivity is implemented using `addEventListener()`.
  - **No inline `onclick` attributes** anywhere in the HTML.

## 🗂️ Project Structure

\`\`\`
webdev-week2/
├── index.html      # Page structure — form + toggle button
├── style.css       # Styling, including dark mode theme variables
└── script.js       # All JavaScript logic (validation + theme toggle)
\`\`\`

## 🚀 How to Run

1. Clone or download this repository.
2. Open `index.html` directly in any web browser (no server or build step required).
3. Try it out:
   - Click **🌙 Dark Mode** to toggle the theme.
   - Submit the form empty, with an invalid email, and with valid data to see the validation in action.

## 🛠️ Built With

- HTML5
- CSS3 (with CSS transitions for smooth theme switching)
- Vanilla JavaScript (DOM manipulation, events, regex validation)

## 👩‍💻 Author

**Areeba Rasool Khoso**
Web Development Intern — Vortex Tech Internship Program 2026