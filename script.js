document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    validateForm();
  });
  
  function validateForm() {
    let isValid = true;
  
    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
  
    // Validate Name
    const name = document.getElementById('name').value;
    if (!name.match(/^[A-Za-z]+$/)) {
      document.getElementById('nameError').innerText = 'Name must contain only letters.';
      isValid = false;
    }
  
    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').innerText = 'Please enter a valid email address.';
      isValid = false;
    }
  
    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 8) {
      document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long.';
      isValid = false;
    }
  
    // If form is valid, display a success message (or you can submit the form)
    if (isValid) {
      alert('Form submitted successfully!');
    }
  }
  