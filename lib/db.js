const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'darius',
  database: 'guided_dev',
  password: 'abc123'
});
connection.connect();
module.exports = connection;