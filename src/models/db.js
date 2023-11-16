const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "sql10.freemysqlhosting.net",
	user: "sql10662586",
	password: "3cGFixMgyv",
	database: "sql10662586",
});

module.exports = connection;
