// ---------- DARK MODE TOGGLE ----------
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }
});


// ---------- FORM VALIDATION ----------
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // stop page reload

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

  // Name check
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Email check
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Message check
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;
  }

  
  if (isValid) {
    successMessage.textContent = 'Thank you! Your message has been sent.';
    form.reset();
  }
});