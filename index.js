const { db } = require("./util/connection")
const inquirer = require('inquirer');

db.connect((err) => {
    if (err) throw err;
    console.log("Accessing database...");
    init();
});

const init = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "prompt",
                message: "What would you like to do?",
                choices: [
                    "View All Employees",
                    "View All Roles",
                    "View All Departments",
                    "Add A Role",
                    "Add An Employee",
                    "Add A Department",
                    "Update An Employee Role",
                    "Exit",
                ],
            },
        ])
        .then((answers) => {
            if (answers.prompt === "View All Employees") {
                console.log("Viewing All Employees")
                db.query(`select * from Employees`, (err, result) => {
                    if (err) throw err;
                    console.table(result);
                    init();
                });

            } else if (answers.prompt === "View All Roles") {
                console.log("Viewing All Roles")
                db.query(`select * from Roles`, (err, result) => {
                    if (err) throw err;
                    console.table(result);
                    init();
                });

            } else if (answers.prompt === "View All Departments") {
                console.log("Viewing All Departments")
                db.query(`select * from Departments`, (err, result) => {
                    if (err) throw err;
                    console.table(result);
                    init();
                });

            } else if (answers.prompt === "Add A Role") {
                db.query(`SELECT * FROM department`, (err, result) => {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "role",
                                message: "What is the name of the role?",
                            },
                            {
                                type: "input",
                                name: "salary",
                                message: "What is the salary of the role?",
                            },
                            {
                                type: "list",
                                name: "department",
                                message: "Which department does the role belong to?",
                                choices: () => {
                                    var array = [];
                                    for (var i = 0; i < result.length; i++) {
                                        array.push(result[i].name);
                                    }
                                    return array;
                                },
                            },
                        ])
                        .then((answers) => {
                            for (var i = 0; i < result.length; i++) {
                                if (result[i].title === answers.role) {
                                    var department = result[i];
                                }
                            }
                            db.query(
                                `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
                                [answers.role, answers.salary, department.id],
                                (err, result) => {
                                    if (err) throw err;
                                    console.log(`Role added to database.`);
                                    init();
                                }
                            );
                        });
                });

            } else if (answers.prompt === "Add An Employee") {
                db.query(`select * from Employees, Roles`, (err, result) => {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "employeeFirst",
                                message: "What is the employee's first name?",
                            },
                            {
                                type: "input",
                                name: "employeeLast",
                                message: "What is the employee's last name?",
                            },
                            {
                                type: "list",
                                name: "role",
                                message: "What is the employees role?",
                                choices: () => {
                                    var array = [];
                                    for (var i = 0; i < result.length; i++) {
                                        array.push(result[i].title);
                                    }
                                    var newArray = [...new Set(array)];
                                    return newArray;
                                },
                            },
                            {
                                type: "input",
                                name: "employeeManager",
                                message: "Who is the employee's manager?",
                            },
                        ])
                        .then((answers) => {
                            for (var i = 0; i < result.length; i++) {
                                if (result[i].title === answers.role) {
                                    var role = result[i];
                                }
                            }
                            db.query(
                                `INSERT INTO Employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
                                [
                                    answers.firstName,
                                    answers.lastName,
                                    role.id,
                                    answers.manager.id,
                                ],
                                (err, result) => {
                                    if (err) throw err;
                                    console.log(
                                        `Employee added to database.`
                                    );
                                    init();
                                }
                            );
                        });
                });

            } else if (answers.prompt === "Add A Department") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "department",
                            message: "What is the name of the new department?",
                        },
                    ])
                    .then((answers) => {
                        db.query(
                            `INSERT INTO Departments (name) VALUES (?)`,
                            [answers.department],
                            (err, result) => {
                                if (err) throw err;
                                console.log(`Department added to database.`);
                                init();
                            }
                        );
                    });

            } else if (answers.prompt === "Update An Employee Role") {
                db.query(`SELECT * FROM Employees, Roles`, (err, result) => {
                    if (err) throw err;
                    inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "employee",
                                message: "Which employee would you like to update?",
                                choices: () => {
                                    var array = [];
                                    for (var i = 0; i < result.length; i++) {
                                        array.push(result[i].last_name);
                                    }
                                    var employeeArray = [...new Set(array)];
                                    return employeeArray;
                                },
                            },
                            {
                                type: "list",
                                name: "role",
                                message: "What is their new role?",
                                choices: () => {
                                    var array = [];
                                    for (var i = 0; i < result.length; i++) {
                                        array.push(result[i].title);
                                    }
                                    var newArray = [...new Set(array)];
                                    return newArray;
                                },
                            },
                        ])
                        .then((answers) => {
                            for (var i = 0; i < result.length; i++) {
                                if (result[i].last_name === answers.employee) {
                                    var name = result[i];
                                }
                            }

                            for (var i = 0; i < result.length; i++) {
                                if (result[i].title === answers.role) {
                                    var role = result[i];
                                }
                            }

                            db.query(
                                `update Employees SET ? WHERE ?`,
                                [{ role_id: role }, { last_name: name }],
                                (err, result) => {
                                    if (err) throw err;
                                    console.log(
                                        `Updated employee role in database.`
                                    );
                                    init();
                                }
                            );
                        });
                });
            } else if (answers.prompt === "Exit") {
                console.log("Exiting...")
                db.end();
            }
        });
};

