var msql = require("mysql");
var inquirer = ("inquirer");
var table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aa224718",
    database: "bamazon_db",
    port: 3306
})

connection.connect();
var display = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("------------------");
        console.log(" Welcome to My bamazon store");
        console.log("----------------");
        console.log("");
        console.log("Find your product review:");
        console.log("");
    });
};