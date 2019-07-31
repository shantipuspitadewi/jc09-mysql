const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user: 'shantipdewi03',
        password: 'Mysql123',
        host: 'db4free.net',
        database: 'shantipdewi03',
        port : 3306
    }
)

module.exports = conn