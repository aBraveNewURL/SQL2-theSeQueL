const { default: inquirer } = require("inquirer");
const { db } = require("../connection");
import { init } from './initialize'
import { addEmployee } from './index';


const addEmployee = () => {
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
};