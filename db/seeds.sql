INSERT INTO Departments (name)
VALUES 
("Produce"), 
("Pharmacy"), 
("Warehouse"), 
("Customer Service");

INSERT INTO Roles (title,salary,dept_id)
VALUES 
("Bagger", 20000, 1), 
("Cashier", 35000, 1), 
("Custodian", 25000, 2),
("Pharmacist", 55000, 2), 
("Manager", 75000, 2); 

INSERT INTO Employees (first_name,last_name,role_id,manager_id)
VALUES 
("Ben", "Sokolik", 1, 2), 
("Dee", "Laska", 1, 1), 
("Nico", "Bratr", 3, 2),
("Maximus","Platokolik", 3, 3), 
("Jared", "Bratrnec", 4, 2);








 
