<?php
$host = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "user_db"; 

$conn = mysqli_connect($host, $username, $password, $database);

// Kiểm tra kết nối
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Xử lý đăng ký
if (isset($_POST['register'])) {
    // Lấy dữ liệu từ biểu mẫu đăng ký
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $zipcode = $_POST['zipcode'];
    $country = $_POST['country'];
    $accountType = $_POST['accountType'];
    $businessName = isset($_POST['businessName']) ? $_POST['businessName'] : NULL;
    $storeName = isset($_POST['storeName']) ? $_POST['storeName'] : NULL;
    $storeCategory = isset($_POST['storeCategory']) ? $_POST['storeCategory'] : NULL;

    // Thực hiện thêm dữ liệu vào cơ sở dữ liệu
    $sql = "INSERT INTO users (email, phone, password, first_name, last_name, address, city, zipcode, country, account_type, business_name, store_name, store_category) 
            VALUES ('$email', '$phone', '$password', '$firstName', '$lastName', '$address', '$city', '$zipcode', '$country', '$accountType', '$businessName', '$storeName', '$storeCategory')";

    if (mysqli_query($conn, $sql)) {
        echo "Registration successful";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Xử lý đăng nhập
if (isset($_POST['login'])) {
    // Lấy dữ liệu từ biểu mẫu đăng nhập
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Kiểm tra thông tin đăng nhập trong cơ sở dữ liệu
    $sql = "SELECT * FROM users WHERE (email='$email' OR phone='$email') AND password='$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        echo "Login successful";
    } else {
        echo "Invalid email/phone or password";
    }
}

// Xử lý yêu cầu đặt lại mật khẩu
if (isset($_POST['forgot_password'])) {
    // Lấy địa chỉ email từ biểu mẫu quên mật khẩu
    $email = $_POST['email'];

    // Thực hiện các bước cần thiết để đặt lại mật khẩu, như gửi email hoặc tạo mã xác nhận
    // Bạn có thể thêm mã logic xử lý ở đây
    echo "Password reset requested for email: $email";
}

// Đóng kết nối đến cơ sở dữ liệu
mysqli_close($conn);
?>
