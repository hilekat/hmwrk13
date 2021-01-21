var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "gh4es0k0wjtytrov",
  password: "ejsz6ldgicvl0fgl",
  database: "q8o08t119lds1jqi"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;