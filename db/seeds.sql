-- Use tracker_db --
USE tracker_db;

-- Department --
INSERT INTO department (department_name, id)
VALUES
('Produce', 1),
('Pharmacy', 2),
('Athletics', 3),
('Deli', 4),
('Maintenance', 5);

-- Employees --
INSERT INTO employee (first_name, last_name, job_title, employee_department, manager_id, id)
VALUES
('Benjamin', 'Stroj', 'Full-Time', 'Deli', 'Bob1', 1),
('Dee', 'Hezka', 'Full-Time', 'Athletics', 'Bob', 2),
('Maximus', 'Tlusty', 'Trainer', 'Maintenance', 'Bob', 3),
('Nick', 'Bratr', 'Full-Time', 'Pharmacy', 'Bob2', 4),
('Jared', 'Bratranec', 'Part-Time', 'Produce', 'Bob2', 5);

-- Roles --
INSERT INTO role (title, salary, department_id, role_id)
VALUES
('Full-Time', 35_000, 1, 1),
('Part-Time', 15_000, 2, 2),
('Trainer', 35_000, 3, 3),
('Manager', 90_000, 4, 4),
('Executive', 125_000, 5, 5);
