<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $zipcode = $_POST['zipcode'];
    $country = $_POST['country'];
    $accountType = $_POST['accountType'];
    $businessName = $_POST['businessName'] ?? null;
    $storeName = $_POST['storeName'] ?? null;
    $storeCategory = $_POST['storeCategory'] ?? null;

    if ($password !== $confirmPassword) {
        echo "Passwords do not match!";
        exit();
    }

    $stmt = $db->prepare('INSERT INTO users (email, phone, password, first_name, last_name, address, city, zipcode, country, account_type, business_name, store_name, store_category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([$email, $phone, $password, $firstName, $lastName, $address, $city, $zipcode, $country, $accountType, $businessName, $storeName, $storeCategory]);

    if ($stmt) {
        header('Location: login.php');
        exit();
    } else {
        echo "Registration failed!";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Register</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <form id="loginForm" class="form" method="POST" action="process.php">
    <h2>Register</h2>
    <div class="input-group">
      <input type="text" name="email" id="email" placeholder="Email" required>
    </div>
    <div class="input-group">
      <input type="text" name="phone" id="phone" placeholder="Phone" required>
    </div>
    <div class="input-group">
      <input type="password" name="password" id="password" placeholder="Password" required>
    </div>
    <div class="input-group">
      <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required>
    </div>
    <div class="input-group">
      <input type="text" name="firstName" id="firstName" placeholder="First Name" required>
    </div>
    <div class="input-group">
      <input type="text" name="lastName" id="lastName" placeholder="Last Name" required>
    </div>
    <div class="input-group">
      <input type="text" name="address" id="address" placeholder="Address" required>
    </div>
    <div class="input-group">
      <input type="text" name="city" id="city" placeholder="City" required>
    </div>
    <div class="input-group">
      <input type="text" name="zipcode" id="zipcode" placeholder="Zipcode" required>
    </div>
    <div class="input-group">
      <select name="country" id="country" required>
        <!-- Options will be populated by JS -->
      </select>
    </div>
    <div class="input-group">
      <label>Account Type:</label>
      <input type="radio" name="accountType" value="user" checked>User
      <input type="radio" name="accountType" value="storeOwner">Store Owner
    </div>
    <div class="store-owner-fields" style="display: none;">
      <div class="input-group">
        <input type="text" name="businessName" id="businessName" placeholder="Business Name">
      </div>
      <div class="input-group">
        <input type="text" name="storeName" id="storeName" placeholder="Store Name">
      </div>
      <div class="input-group">
        <input type="text" name="storeCategory" id="storeCategory" placeholder="Store Category">
      </div>
    </div>
    <button type="submit" class="btn">Register</button>
    <div class="form-footer">
      <a href="login.php">Login</a>
    </div>
  </form>
</div>
<script src="index.js"></script>
</body>
</html>
