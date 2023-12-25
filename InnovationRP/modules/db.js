var mysql = require('mysql');

module.exports = {
    Handle: null,
    Connect: function (callback) {
        this.Handle = mysql.createPool({
            connectionLimit: 100,
            host: '80.77.174.157',
            user: 'u114001jvki',
            password: 'orDE2BAqqiRTl7oj27u2',
            database: 'db114001',
            debug: false
        });
        callback();
    },
};