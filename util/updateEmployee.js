const { default: inquirer } = require("inquirer");
const { db } = require("../connection");
import { init } from './initialize'
import { updateEmployee } from './index';

const updateEmployee = () => {
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
};