const { insertOne, updateOne } = require("../config/orm.js");
const orm = require("../config/orm.js");

const burger = {
    selDevouredTrue: function(callback) {
        orm.selectAll("burgers", "devoured", true, function(result){
            callback(result);
        })
    },
    selDevouredFalse: function(callback) {
        orm.selectAll("burgers", "devoured", false, function(result) {
            callback(result);
        })
    },
    insertOne: function(booValue1, callback) {
        orm.insertOne("burgers", "devoured", booValue1, function(result){
            callback(result);
        })
    },
    updateOne: function(colValue1, callback) {
        orm.insertOne("burgers", "devoured", true, "id", booValue, function(result){
            callback(result);
        })
    }
};
module.exports = burger;