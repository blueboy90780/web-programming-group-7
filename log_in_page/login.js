const mockUsers = [
    { email: "fakeuser1@gmail.com", password: "123456" },
    { email: "fakeuser2@gmail.com", password: "abcxyz" }
  ];
  
  function mockLogin(email, password) {
    const user = mockUsers.find(user => user.email === email && user.password === password);
    return user ? user : null;
  }
  
  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const user = mockLogin(email, password);
    if (user) {
      alert('Login successful!');
      window.location.href = '../mainhall/mainhall.html'; 
    } else {
      alert('Invalid email or password');
    }
  });
  