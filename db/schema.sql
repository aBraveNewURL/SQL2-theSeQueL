-- Drop DB if exists, create our tracker database to begin --
DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

-- Use tracker_db --
USE tracker_db;

-- Create our tables and our keys --
CREATE TABLE department (
  department_name VARCHAR(30) NOT NULL,
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  job_title VARCHAR(30),
  employee_department VARCHAR(30),
  manager_id INT,
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  FOREIGN KEY (manager_id)
  REFERENCES employee(id),
);




