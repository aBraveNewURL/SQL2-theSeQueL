-- Use tracker_db --
USE tracker_db;

-- Department --
INSERT INTO department(department_name, department_id)
VALUES
(History,1),
(Biology,2),
(Physical Education,3),
(English,4),
(Woodshop,5);

-- Employees --
INSERT INTO employee(first_name, last_name, job_title, employee_department, employee_manager, employee_id,)
VALUES
(Benjamin, Stroj, Teacher, English, Bob1, 1),
(Dee, Hezka, Teacher, Physical Education, Bob, 2),
(Maximus, Tlusty, Coach, Woodshop),
(Nick, Bratr, Teacher, Biology, Bob2, 4),
(Jared, Bratranec, Substitute Teacher, History, 5);

-- Roles --
INSERT INTO role(job_title, role_department, role_salary, role_id,)
VALUES
(Teacher, Instructors, 35_000, 1),
(Substitute Teacher, Instructors, 15_000, 2),
(Coach, Athletics, 35_000, 3),
(Principal, Administrator, 90_000, 4),
(Superindendant, Administrator, 125_000, 5);
