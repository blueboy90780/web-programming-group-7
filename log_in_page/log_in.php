<?php
session_start();
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $db->prepare('SELECT * FROM users WHERE (email = ? OR phone = ?) AND password = ?');
    $stmt->execute([$email, $email, $password]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        $_SESSION['user_id'] = $user['id'];
        header('Location: dashboard.php');
        exit();
    } else {
        echo "Invalid email/phone or password";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <form id="loginForm" class="form" method="POST" action="process.php">
    <h2>Login</h2>
    <div class="input-group">
      <input type="text" name="email" placeholder="Email or Phone" required>
    </div>
    <div class="input-group">
      <input type="password" name="password" placeholder="Password" required>
    </div>
    <button type="submit" class="btn">Login</button>
    <div class="form-footer">
      <a href="forgot_password.php">Forgot Password?</a>
      <a href="register.php">Register</a>
    </div>
  </form>
</div>
<script src="index.js"></script>
</body>
</html>
