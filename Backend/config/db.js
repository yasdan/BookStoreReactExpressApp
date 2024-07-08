const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Enhanced error handling during connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
    process.exit(1); // Exit the process with an error code
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = connection;
