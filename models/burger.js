var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },
    insertOne: function(column, values, cb) {
        orm.insertOne("burgers", column, values, function(result){
            cb(result);
        });
    },
    updateOne: function(colVals, condition, cb) {
        orm.updateOne("burgers", colVals, condition, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;
