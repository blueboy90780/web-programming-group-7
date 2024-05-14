document.addEventListener('DOMContentLoaded', function() {
  const accountType = document.getElementById('accountType');
  const storeOwnerFields = document.querySelector('.store-owner-fields');

  accountType.addEventListener('change', function() {
    if (this.querySelector('input[name="accountType"]:checked').value === 'storeOwner') {
      storeOwnerFields.style.display = 'block';
    } else {
      storeOwnerFields.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const countrySelect = document.getElementById('country');

  fetch('countries.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched data:', data);
      data.forEach(country => {
        const option = document.createElement('option');
        option.value = country.Code; 
        option.text = country.Name;
        countrySelect.add(option);
      });
    })
    .catch(error => console.error('Error fetching countries:', error));

  const accountType = document.getElementById('accountType');
  const storeOwnerFields = document.querySelector('.store-owner-fields');

  accountType.addEventListener('change', function() {
    if (this.querySelector('input[name="accountType"]:checked').value === 'storeOwner') {
      storeOwnerFields.style.display = 'block';
    } else {
      storeOwnerFields.style.display = 'none';
    }
  });
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => {
    if (response.ok) {
      console.log('Login successful');
    } else {
      console.error('Login failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    password: document.getElementById('password').value,
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    zipcode: document.getElementById('zipcode').value,
    country: document.getElementById('country').value,
    accountType: document.querySelector('input[name="accountType"]:checked').value,
    businessName: document.getElementById('businessName').value,
    storeName: document.getElementById('storeName').value,
    storeCategory: document.getElementById('storeCategory').value
  };
  console.log('Form Data:', formData);

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      console.log('Registration successful');
      window.location.href = 'log_in.html';
    } else {
      console.error('Registration failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
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
document.getElementById('forgotPasswordForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  console.log('Password reset requested for email:', email);
});

document.getElementById('forgotPasswordForm').addEventListener('submit', (e) => {
e.preventDefault();

const email = document.getElementById('email').value;
fetch('/forgot-password', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
})
.then(response => {
    if (response.ok) {
        console.log('Password reset email sent successfully');
    } else {
        console.error('Failed to send password reset email');
    }
})
.catch(error => {
    console.error('Error:', error);
});
});
document.addEventListener('DOMContentLoaded', function() {
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
});
