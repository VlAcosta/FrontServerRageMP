var mysql = require('mysql');

module.exports = {
    handle: null,
    Connect: function (callback) {
        this.Handle = mysql.createPool({
            connectionLimit: 100,
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'innovation',
            debug: false
        });
        callback();

    },

};