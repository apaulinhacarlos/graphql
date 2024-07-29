const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOSTNAME || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'senha',
    database: process.env.MYSQL_DATABASE || 'GraphqlDB',
});

module.exports = connection

