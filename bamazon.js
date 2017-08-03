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

connection.connect(function(err) {
    if (err) throw err;
    console.log(err);
    createProduct();

    connection.query('SELECT * FROM bamazondb.products', function(err, res) {
        if (err) throw err;
        console.log(res);
    });
});

// function runSearch() {
//     inquirer
//         .prompt({
//             name: 'action',
//             type: 'list',
//             message: 'What would you like to do?',
//             choices: [
//                 'What is the ID of the product you would like to buy?',

//             ]
//         })
// }

function createProduct() {
    var query = connection.query(
        'insert into products set ?',
        {
            product_name: 'Balexa',
            department_name: 'Electronics',
            price: 59.99,
            stock_qty: 600
        },
        {
            product_name: 'Blender',
            department_name: 'Home & Kitchen',
            price: 89.99,
            stock_qty: 2100
        },
        {
            product_name: '1,500 Live Ladybugs',
            department_name: 'Lawn & Garden',
            price: 10.99,
            stock_qty: 20
        },
        {
            product_name: 'Go, Dog Go',
            department_name: 'Books',
            price: 8.99,
            stock_qty: 360
        },
        {
            product_name: 'Pacifiers',
            department_name: 'Baby',
            price: 5.99,
            stock_qty: 1000
        },
        {
            product_name: 'Ketchup',
            department_name: 'Grocery',
            price: 2.99,
            stock_qty: 850
        },
        {
            product_name: 'The Godfather',
            department_name: 'Movies & TV',
            price: 19.99,
            stock_qty: 130
        },
        {
            product_name: 'Stapler',
            department_name: 'Office Products',
            price: 12.99,
            stock_qty: 270
        },
        {
            product_name: 'Dog Treats',
            department_name: 'Pet Supplies',
            price: 5.99,
            stock_qty: 400
        },
        {
            product_name: 'Settlers of Catan',
            department_name: 'Toys & Games',
            price: 24.99,
            stock_qty: 75
        },
        function(err, res) {
            console.log(res.affectedRows + ' product inserted');
        }
    )
}