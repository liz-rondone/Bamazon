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