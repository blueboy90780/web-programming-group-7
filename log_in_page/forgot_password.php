<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Forgot Password</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <form id="loginForm" class="form" method="POST" action="process.php">
    <h2>Forgot Password</h2>
    <div class="input-group">
      <input type="text" id="email" name="email" placeholder="Email" required>
    </div>
    <button type="submit" class="btn" name="reset_password">Reset Password</button>
    <div class="form-footer">
      <a href="log_in.html">Back to Login</a>
    </div>
  </form>
</div>
<script src="index.js"></script>
</body>
</html>
