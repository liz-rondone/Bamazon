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
        console.log("-------------------------------------");
    }
    //console.log(res[0].department_name);
    placeOrder();
});

function placeOrder() {
    inquirer
        .prompt([
            {
                name: 'item',
                type: 'input',
                message: 'What is the ID of the product you would like to buy?',
                // if a number isn't submitted it clears
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: 'quantity',
                type: 'input',
                message: 'How many would you like to buy?',
                // if a number isn't submitted it clears
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
    .then(function(answer) {
        
        var answerID = answer.item; //"item" is from prompt name
        var parseID = parseInt(answerID) -1; //item_id array doesn't start at 0
        var parseQty = parseInt(answer.quantity); //"quantity" is from prompt name

        connection.query("SELECT * FROM products", function(err, res) {
            var itemCost = res[parseID].price;
            var stockQty = res[parseID].stock_qty;
            // var purchaseTotal = res[parseID].product_sales;
            var stockNew = stockQty - parseQty;

            if (parseQty > stockQty) {
                // out of stock
                console.log("Don't be greedy! There aren't enough in stock to meet your demand.");
                placeOrder();
            }
            else {
                // calculate the bill
                var costTotal = parseQty * itemCost;

                // update stock quantity in database
                connection.query("UPDATE products SET ? WHERE ?", [
                    {
                        stock_qty: stockNew
                    },
                    {
                        item_id: answerID
                    }
                ]);

                console.log("Cough up: $" + costTotal);

                // end connection
                connection.end();
            }
        });
    });
}
