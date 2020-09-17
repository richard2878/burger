const connection = require("../config/connection.js");


const orm = {
    selectAll: function(tableValue, colValue, booValue, callback) {
        var s = "SELECT * FROM ?? WHERE ?? = ?";

        connection.query(s, [tableValue, colValue, booValue], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(tableValue, colValue1, booValue1, callback) {
        const s = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(s, [tableValue, colValue1, booValue1], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(tableValue, colValue1, booValue1, colValue, booValue, callback) {
        var s = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(s, [tableValue, colValue1, booValue1, colValue, booValue], function(err, result) {
            if (err) throw err;
            callback(result);
        })
    }
};
module.exports = orm;