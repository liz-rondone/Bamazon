DROP DATABASE IF EXISTS bamazondb;

CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_qty INT NULL,
    primary key (item_id)
);

USE bamazondb;
INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES 
	("Balexa", "Electronics", 59.99, 600),
	("Blender", "Home & Kitchen", 89.99, 2100),
	("1,500 Live Ladybug", "Lawn & Garden", 10.99, 20),
	("Go, Dog Go", "Books", 8.99, 360),
	("Pacifiers", "Baby", 5.99, 1000),
	("Ketchup", "Grocery", 2.99, 850),
	("The Godfather", "Movies & TV", 19.99, 130),
	("Stapler", "Office Products", 12.99, 270),
	("Dog Treats", "Pet Supplies", 5.99, 400),
	("Settlers of Catan", "Toys & Games", 24.99, 75);


SELECT * FROM products;