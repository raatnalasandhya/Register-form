

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');

  loginLink.addEventListener('click', function() {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
  });

  registerLink.addEventListener('click', function() {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
  });

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement login functionality here
    // Validate login credentials and handle errors
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // Example of handling login
    if (username === 'user' && password === 'password') {
      alert('Login successful');
      // Redirect or perform necessary actions after successful login
    } else {
      document.getElementById('login-error').innerText = 'Invalid username or password';
    }
  });

  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement registration functionality here
    // Validate registration data and handle errors
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    // Example of handling registration
    if (username && email && password) {
      alert('Registration successful');
      // Redirect or perform necessary actions after successful registration
    } else {
      document.getElementById('register-error').innerText = 'Please fill out all fields';
    }
  });
});
