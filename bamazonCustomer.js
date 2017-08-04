var mysql = require('mysql');
var inquirer = require('inquirer');
var keys = require('./keys.js');
var pswd = keys.mysqlKey.mysqlPassword;


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: pswd,
    database: 'bamazondb'
});

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log(err);
// });

connection.query('SELECT * FROM products', function(err, res) {
    if (err) {
        throw err;
    }
    //console.log(res);
    for (var i = 0; i < res.length; i++) {
        console.log("[ " + res[i].item_id + " ] " + res[i].product_name);
        console.log("Price: " + res[i].price);
        console.log("Department: " + res[i].department_name);
        console.log("Quantity Available: " + res[i].stock_qty);
        console.log("-------------------------------------")
    }
    //console.log(res[0].department_name);
    // placeOrder();
});

// function runSearch() {
//     inquirer
//         .prompt({
//             name: 'action',
//             type: 'input',
//             message: 'What is the ID of the product you would like to buy?',
//         })
//     .then(function(answer) {
//         var query = "SELECT item_id FROM bamazondb WHERE ?";
        
//     })
// }
