const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crudapp",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports.addUsers = (userObject) => {
  console.log(userObject);
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO users(
        user_id,username,password,email,mobile_number,address
        )
        values(null,'${userObject.username}','${userObject.password}','${userObject.email}','${userObject.mobile_number}','${userObject.address}');`;

    //executing the mysql query
    connection.query(sql, function (error, results, fields) {
      if (error) {
        reject(1);
      }

      resolve(results);
    });
  });
};
