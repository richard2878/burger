var mysql = require ("mysql")


if(process.env.JAWSDB_URL)
{   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
    
        // Your port; if not 3306
        port: 3306,
    
        // Your username
        user: "root",
    
        // Your password
        password: "14Robins@1",
        database: "burgers_db",
    })
}

connection.connect(function(err) {
    if (err) {
      console.error("error connect: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;