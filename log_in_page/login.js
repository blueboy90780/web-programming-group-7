const mockUsers = [
  { email: "fakeuser1@gmail.com", password: "123456" },
  { email: "fakeuser2@gmail.com", password: "abcxyz" }
];

function mockLogin(email, password) {
  const user = mockUsers.find(user => user.email === email && user.password === password);
  return user ? user : null;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (validateLogin(email, password)) {
      alert("Log in success!");
      window.location.href = "../html/mainhall.html";
  } else {
      alert("Login failed. Please check your email and password.");
  }
});

function validateLogin(email, password) {
  return mockLogin(email, password) !== null;
}

  