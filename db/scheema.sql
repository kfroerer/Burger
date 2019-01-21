CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT auto_increment,
burger_name VARCHAR (250),
devoured boolean,
PRIMARY KEY (id)
)