-- Drop DB if exists, create our tracker database to begin --
DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

-- Use tracker_db --
USE tracker_db;

-- Create our tables and our keys --
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary INT,
  department_id INT,
  PRIMARY KEY role(id),
  FOREIGN KEY (department_id)
  REFERENCES department(department_id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
);




