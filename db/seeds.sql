-- Use tracker_db --
USE tracker_db;

-- Department --
INSERT INTO department (id, department_name)
VALUES
(1,'Produce'),
(2,'Pharmacy'),
(3,'Athletics'),
(4,'Deli'),
(5,'Managerial');

-- Employees --
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1,'Benjamin','Sokolik',1,5),
(2,'Dee','Hezka',2,5),
(3,'Maximus','Tlusty',3,'null'),
(4,'Nico','Bratr',4,5),
(5,'Jared','Bratranec',5,'null');


-- Roles --
INSERT INTO role (id, title, salary, department_id)
VALUES
(1,'Full-Time Employee',50000,1),
(2,'Part-Time Employee',25000,1),
(3,'Trainee',20000,3),
(4,'Executive', 150000,5),
(5,'Manager',75000,5);
