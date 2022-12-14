DROP DATABASE IF EXISTS tracker_db;
CREATE database tracker_db;

USE tracker_db;

CREATE TABLE Departments (
  dept_id INTEGER AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (dept_id)
);

CREATE TABLE Roles (
  role_id INTEGER AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  salary DECIMAL(10,2) NULL,
  dept_id INTEGER,
  PRIMARY KEY (role_id),
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);

CREATE TABLE Employees (
  id INTEGER AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER,
  PRIMARY KEY (emp_id),
);