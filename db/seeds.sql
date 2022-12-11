-- Use tracker_db --
USE tracker_db;

-- Department --
INSERT INTO department (department_name, id)
VALUES
('History',1),
('Biology',2),
('Gym',3),
('English',4),
('Woodshop',5);

-- Employees --
INSERT INTO employee (first_name, last_name, job_title, employee_department, manager_id, id)
VALUES
('Benjamin', 'Stroj', 'Teacher', 'English', 'Bob1', 1),
('Dee', 'Hezka', 'Teacher', 'Gym', 'Bob', 2),
('Maximus', 'Tlusty', 'Coach', 'Woodshop', 'Bob', 3),
('Nick', 'Bratr', 'Teacher', 'Biology', 'Bob2', 4),
('Jared', 'Bratranec', 'Substitute', 'History', 'Bob2', 5);

-- Roles --
INSERT INTO role (title, salary, department_id, role_id)
VALUES
('Teacher', 'Instructors', 35_000, 1),
('Substitute', 'Instructors', 15_000, 2),
('Coach', 'Athletics', 35_000, 3),
('Principal', 'Administrator', 90_000, 4),
('Superindendant', 'Administrator', 125_000, 5);
