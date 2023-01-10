const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER
    }
);

module.exports = {db};