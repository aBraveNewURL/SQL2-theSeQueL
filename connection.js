// .env file and connection for increased security
require('dotenv').config();
const mySql = require('mysql2');
const db = mySql.createConnection(
    {
        host: 'localhost',
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER
    }
);

module.exports = {db};