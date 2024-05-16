const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

const SECRET_KEY = 'your-secret-key';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_db'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

app.post('/register', async (req, res) => {
  const { email, phone, password, firstName, lastName, address, city, zipcode, country, accountType, businessName, storeName, storeCategory } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (email, phone, password, first_name, last_name, address, city, zipcode, country, account_type, business_name, store_name, store_category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [email, phone, hashedPassword, firstName, lastName, address, city, zipcode, country, accountType, businessName || null, storeName || null, storeCategory || null];

    db.query(query, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      return res.status(200).send('Registration successful');
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? OR phone = ?';
  db.query(query, [email, email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    if (results.length === 0) {
      return res.status(401).send('Invalid email/phone or password');
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid email/phone or password');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  });
});

app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    if (results.length === 0) {
      return res.status(400).send('Email not found');
    }

    const token = crypto.randomBytes(20).toString('hex');

    const updateQuery = 'UPDATE users SET reset_token = ? WHERE email = ?';
    db.query(updateQuery, [token, email], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      sendPasswordResetEmail(email, token);

      return res.status(200).send('Password reset email sent');
    });
  });
});

function sendPasswordResetEmail(email, token) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `You are receiving this email because you (or someone else) has requested a password reset for your account. Please click on the following link or paste it into your browser to complete the process:\n\nhttp://your-app-url.com/reset-password/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

app.post('/reset-password', (req, res) => {
  const { token, newPassword } = req.body;

  const query = 'SELECT * FROM users WHERE reset_token = ?';
  db.query(query, [token], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    if (results.length === 0) {
      return res.status(400).send('Invalid token');
    }

    const user = results[0];
    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    const updateQuery = 'UPDATE users SET password = ?, reset_token = NULL WHERE id = ?';

    db.query(updateQuery, [hashedPassword, user.id], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      return res.status(200).send('Password reset successful');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

