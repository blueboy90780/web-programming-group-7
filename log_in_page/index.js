document.addEventListener('DOMContentLoaded', function() {
  const countrySelect = document.getElementById('country');

  fetch('countries.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(country => {
        const option = document.createElement('option');
        option.value = country.Code;
        option.text = country.Name;
        countrySelect.add(option);
      });
    })
    .catch(error => console.error('Error fetching countries:', error));

  const accountTypeInputs = document.querySelectorAll('input[name="accountType"]');
  const storeOwnerFields = document.querySelector('.store-owner-fields');

  accountTypeInputs.forEach(input => {
    input.addEventListener('change', function() {
      if (this.value === 'storeOwner') {
        storeOwnerFields.style.display = 'block';
      } else {
        storeOwnerFields.style.display = 'none';
      }
    });
  });

  const registerForm = document.getElementById('registerForm');
  const backToLoginBtn = document.getElementById('backToLoginBtn');

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const formData = new FormData(registerForm);

    fetch('http://localhost/phpmyadmin/index.php?route=/database/structure&db=user_db', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Registration successful!');
        window.location.href = 'log_in.html';
      } else {
        return response.text().then(text => { throw new Error(text); });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error occurred during registration: ' + error.message);
    });
  });

  backToLoginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'log_in.html';
  });

  document.getElementById('confirmPassword').addEventListener('input', (e) => {
    const password = document.getElementById('password').value;
    const confirmPassword = e.target.value;

    if (password !== confirmPassword) {
      e.target.setCustomValidity('Passwords do not match');
    } else {
      e.target.setCustomValidity('');
    }
  });
  const resetPasswordForm = document.getElementById('resetPasswordForm');

  resetPasswordForm.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('A recovery email has been sent. Please check your inbox.');
    window.location.href = 'log_in.html';
  });
});