var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "14Robins@1",
    database: "burgers_db"
  });

  module.exports = connection;