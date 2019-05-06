var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'burgers_db',
    user: 'coachO',
    password: 'Rangel2006'
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;