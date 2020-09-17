var mysql = require ("mysql")


if(process.env.JAWSDB_URL)
{   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    
        // Your port; if not 3306
        port: 3306,
    
        // Your username
        user: "um0h5r6l6e0doqjr",
    
        // Your password
        password: "a27k09i6nh1c40cj",
        database: "pgyzgqohhohvq3vb",
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